<script setup lang="ts">
import { ref, watch } from 'vue';
import  CodeMirror from 'vue-codemirror6';
import { javascript } from '@codemirror/lang-javascript';
import { state } from '../stores/codeStore';

const htmlCode = ref('');
//const props = defineProps(['blocklyCode']);
//htmlCode.value = props.blocklyCode.value;

watch(() => state.blocklyCode, (newCode) => {
  console.log('Code store updated:', newCode);
  htmlCode.value = newCode;
});
// watch(() => props.blocklyCode.value, (newCode) => {
//   console.log('Blockly code updated:', newCode);
//   htmlCode.value = newCode;
// });



//const props = defineProps<{blockyCode: string}>();
//const blocklyCode = props;

const code = ref(
`const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
`);
const extensions = ref([javascript()]);
const tabs = ref("preview");
</script>

<template>
  <q-tabs
    v-model="tabs"
    dense
    align="left"
  >
    <q-tab
      name="preview"
      label="Preview"
    />
    <q-tab
      name="html"
      label="HTML"
    />
    <q-tab
      name="js"
      label="Javascript"
    />
  </q-tabs>
  <q-tab-panels v-model="tabs">
    <q-tab-panel name="preview">
      PREVIEW
    </q-tab-panel>
    <q-tab-panel name="html">

      <code-mirror
        v-model="htmlCode"

        :extensions="extensions"
        basic
        wrap
      />
    </q-tab-panel>
    <q-tab-panel
      class="full-width q-px-none q-py-md"
      name="js"
    >
      <code-mirror
        v-model="code"
        disabled
        :extensions="extensions"
        basic
        wrap
      />
    </q-tab-panel>
  </q-tab-panels>
</template>
