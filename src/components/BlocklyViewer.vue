  <script setup lang="ts">
  import { onMounted, ref, shallowRef } from 'vue';
  import * as Blockly from 'blockly/core';
  import 'blockly/blocks';
  import type { Workspace } from 'blockly/core'; // Import types
  type BlocklyOptions = {
    toolbox?: HTMLElement | string;
    readOnly?: boolean;
    scrollbars?: boolean;
    options?: {
      toolbox?: HTMLElement | string;
      readOnly?: boolean;
      scrollbars?: boolean;
    };
  };

  const props = defineProps<BlocklyOptions>();

  const blocklyToolbox = ref();
  const blocklyDiv = ref();
  const workspace = shallowRef<Workspace>();

  defineExpose({ workspace });

  onMounted(() => {
    Blockly.setLocale({locale: 'en'});
    //Blockly.setLocale(En);
    const options: BlocklyOptions = props.options || {};
    if (!options.toolbox) {
      options.toolbox = blocklyToolbox.value;
    }
    workspace.value = Blockly.inject(blocklyDiv.value, options);
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