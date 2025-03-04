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
</script>


<template>
  <q-page />
  <q-splitter
    v-model="splitter"
    class="full-width"
  >
    <template #before>
      left
    </template>
    <template #after>
      <code-mirror
        v-model="code"
        disabled
        :extensions="extensions"
        basic
        wrap
      />
    </template>
  </q-splitter>
</template>

