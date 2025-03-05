<script setup lang="ts">
import { ref, watch } from 'vue';
import CodeViewer from '../components/CodeViewer.vue';

const props = defineProps({
  modelValue: { type: Number, default: 50 },
});
const emit = defineEmits(['update:modelValue']);

const splitterModel = ref(props.modelValue);
watch(splitterModel, (newVal) => emit('update:modelValue', newVal));
</script>

<!-- SplitterComponent.vue -->
<template>
  <q-splitter
    v-model="splitterModel"
    class="full-width"
  >
    <template #before>
      LEFT
    </template>
    <template #after>
      <CodeViewer />
    </template>
  </q-splitter>
</template>


