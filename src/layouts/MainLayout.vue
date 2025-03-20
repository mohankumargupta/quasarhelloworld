<script setup lang="ts">
//import { ref } from 'vue';
import { playgroundEventBus } from '../components/resize';
function runCode() {
  console.log('Running code');
}

function fullBlocks() {
  playgroundEventBus.emit(100);
}

function fullCode() {
  playgroundEventBus.emit(0);
}

function defaultView() {
  playgroundEventBus.emit(50);
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
        <span class="q-mr-md"><q-btn @click="fullBlocks">BLOCKS</q-btn></span>
        <span class="q-mr-md"><q-btn @click="fullCode">CODE</q-btn></span>
        <span><q-btn @click="defaultView">BOTH</q-btn></span>
      </q-toolbar>
    </q-header>
    <q-page-container class="full-height flex flex-col">
      <router-view />
    </q-page-container>
  </q-layout>
</template>


