
<script setup lang="ts">
import { ref } from 'vue';
import CodeViewer from './CodeViewer.vue';
import BlocklyWorkspace from './BlocklyWorkspace.vue';
import eventBus from './resize';
//import { onresizeKey } from '../types/resize'
//import { state } from '../stores/codeStore';


const splitterModel = ref(50);

function onUpdatemodelValue(value: number) {
  splitterModel.value = value;
  eventBus.emit('resize');
}

</script>

<template>
  <q-splitter
    v-model="splitterModel"
    @update:model-value="onUpdatemodelValue"
     class="full-width flex"
  >
    <template #before>

      <BlocklyWorkspace/>
    </template>
    <template #after>
      <CodeViewer/>
    </template>
  </q-splitter>
</template>
