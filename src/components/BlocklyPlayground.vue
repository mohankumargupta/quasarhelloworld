
<script setup lang="ts">
import { ref } from 'vue';
import CodeViewer from './CodeViewer.vue';
import BlocklyWorkspace from './BlocklyWorkspace.vue';

const splitterModel = ref(50);
</script>

<template>
  <q-splitter
    v-model="splitterModel"
    class="full-width"
  >
    <template #before>
      <BlocklyWorkspace/>
    </template>
    <template #after>
      <CodeViewer />
    </template>
  </q-splitter>
</template>
