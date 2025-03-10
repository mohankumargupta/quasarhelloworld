<script setup lang="ts">
import { ref } from 'vue';
function runCode() {
  console.log('Running code');
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-grey-9 text-white">
        <q-btn
          flat
          dense
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>

        </q-toolbar-title>
        <q-space />

        <q-btn
          class="q-mr-md"
          flat
          dense
          icon="play_arrow"
          aria-label="Play"
          @click="runCode"
          />
        <span class="q-mr-md">BLOCKS</span>
        <span class="q-mr-md">CODE</span>
        <span>BOTH</span>
      </q-toolbar>
    </q-header>
    <q-page-container class="full-height flex flex-col">
      <router-view />
    </q-page-container>
  </q-layout>
</template>


