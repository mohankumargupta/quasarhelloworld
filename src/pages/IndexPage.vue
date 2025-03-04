<script setup lang="ts">
import { ref } from 'vue';
import  CodeMirror from 'vue-codemirror6';
import { javascript } from '@codemirror/lang-javascript';

const code = ref(
`const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
`);
const extensions = ref([javascript()]);
const splitter = ref(50);

const tabs = ref("preview");
</script>


<template>
  <q-page />
  <q-splitter
    v-model="splitter"
    class="full-width"
  >
    <template #before>
      <code-mirror
        v-model="code"
        disabled
        :extensions="extensions"
        basic
        wrap
      />
    </template>
    <template #after>
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
          HTML
        </q-tab-panel>
        <q-tab-panel name="js">
          JS
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>

