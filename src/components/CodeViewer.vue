<script setup lang="ts">
 import { ref, watch } from 'vue';
 import  CodeMirror from 'vue-codemirror6';
 import { javascript } from '@codemirror/lang-javascript';
 import { html } from '@codemirror/lang-html';
 import { state } from '../stores/codeStore';

 const htmlCode = ref('');
 const fullHTMLCode = ref('');
//const props = defineProps(['blocklyCode']);
//htmlCode.value = props.blocklyCode.value;

watch(() => state.blocklyCode, (newCode) => {
  console.log('Code store updated:', newCode);
  htmlCode.value = newCode;
  fullHTMLCode.value = renderHTML(newCode);
  console.log('Full HTML:', fullHTMLCode.value);
});

/*
const code = ref(
`const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
`);
*/
const extensions = ref([javascript()]);
const htmlExtensions = ref([html()]);
const tabs = ref("blocklycode");
const isPreviewActive = ref(false);

 function startPreview() {
   isPreviewActive.value = true;
 }

 function extractJavascript(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const scripts = Array.from(doc.querySelectorAll('script'));
  return scripts.map(script => script.textContent || '').join('\n');
 }

 function renderHTML(fragment: string): string {
  let fragment_trimmed = fragment.trim();
  if (!fragment_trimmed.startsWith('<')) {
    fragment_trimmed = "<script>\n" + fragment_trimmed + "\n<\/script>";
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Blockly Javascript</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" />
</head>
<body>
${fragment_trimmed}
</body>
</html>`;
}

</script>

<template>
  <q-tabs
    v-model="tabs"
    dense
    align="left"
  >
  <q-tab
      name="blocklycode"
      label="Code"
    />
  <q-tab
      name="preview"
      label="Preview"
    />

    <q-tab
      name="fullhtml"
      label="FullHTML"
    />
  </q-tabs>
  <q-tab-panels v-model="tabs">
    <q-tab-panel name="blocklycode">

      <code-mirror
        v-model="htmlCode"

        :extensions="extensions"
        basic
        wrap
      />
    </q-tab-panel>
    <q-tab-panel name="preview" class="q-pa-md">
      <div v-if="!isPreviewActive" class="flex flex-center items-center">
        <q-btn
        icon="play_arrow"
        color="primary"
        size="lg"
        @click="startPreview"
        aria-label="Start preview"
      />
      </div>
      <div v-else >
        <iframe
          class="full-width"
          :srcdoc="fullHTMLCode"
          style="height: 100vh"
        />
      </div>
    </q-tab-panel>
    <q-tab-panel
      class="full-width q-px-none q-py-md"
      name="fullhtml"
    >
      <code-mirror
        v-model="fullHTMLCode"
        disabled
        :extensions="htmlExtensions"
        basic
        wrap
      />
    </q-tab-panel>
  </q-tab-panels>
</template>
