  <script setup lang="ts">
  import { onMounted, ref, shallowRef } from 'vue';
  import * as Blockly from 'blockly/core';
  import 'blockly/blocks';
  import type { Workspace } from 'blockly/core'; // Import types
  import { toolbox } from './toolbox';

  // type BlocklyOptions = {
  //   toolbox?: HTMLElement | string;
  //   readOnly?: boolean;
  //   scrollbars?: boolean;
  //   options?: {
  //     toolbox?: HTMLElement | string;
  //     readOnly?: boolean;
  //     scrollbars?: boolean;
  //   };
  // };

  // const props = defineProps<BlocklyOptions>();

  // const blocklyToolbox = ref();
  const blocklyDiv = ref();
  const workspace = shallowRef<Workspace>();

  defineExpose({ workspace });

  onMounted(() => {
    Blockly.setLocale({locale: 'en'});
    const zoom = {controls: true};
    workspace.value = Blockly.inject(blocklyDiv.value, {toolbox, zoom});
  });
  </script>

<template>
  <div>
    <div
      ref="blocklyToolbox"
      style="display: none"
    >
      <slot name="toolbox" />
    </div>
    <div
      ref="blocklyDiv"
      style="height: 480px"
    />
  </div>
</template>
