<script setup lang="ts">
import { ref } from 'vue';

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
      right
    </template>
  </q-splitter>
</template>

