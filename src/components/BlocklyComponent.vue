<script setup lang="ts">
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Blockly Vue Component.
 * @author dcoodien@gmail.com (Dylan Coodien)
 */

import {onMounted, ref, shallowRef} from 'vue';
import * as Blockly from 'blockly/core';
import * as En from 'blockly/msg/en';
import 'blockly/blocks';
//import { javascriptGenerator } from 'blockly/javascript';
import { htmlGenerator } from '../generators/HTMLGenerator';
//import 'blocks/custom_blocks';
import { state } from '../stores/codeStore';

//const props = defineProps(['options']);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();


defineExpose({workspace});

//const blocklyCode = defineModel<string>();

onMounted(() => {

  Blockly.setLocale(En); //eslint-disable-line
  // const options = props.options || {};
  // if (!options.toolbox) {
  //   options.toolbox = blocklyToolbox.value;
  // }


  const toolbox = blocklyToolbox.value;
  const zoom = {controls: true};
  const grid =   {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true,
          };
  workspace.value = Blockly.inject(blocklyDiv.value, {grid, toolbox, zoom});


  const supportedEvents = new Set([
  Blockly.Events.BLOCK_CHANGE,
  Blockly.Events.BLOCK_CREATE,
  Blockly.Events.BLOCK_DELETE,
  Blockly.Events.BLOCK_MOVE,
]);

function updateCode(event: Blockly.Events.Abstract) {
  if (workspace.value.isDragging()) return; // Don't update while changes are happening.
  if (!supportedEvents.has(event.type)) return;

  const code = htmlGenerator.workspaceToCode(workspace.value);
  state.blocklyCode = code;
  //blocklyCode.value = code;
  console.log(code);

}

workspace.value.addChangeListener(updateCode);

});
</script>

<template>
  <div>
    <div
      ref="blocklyDiv"
      class="blocklyDiv"
    />
    <xml
      ref="blocklyToolbox"
      style="display: none"
    >
      <slot />
    </xml>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}

.blocklyToolboxDiv {
  padding-left: 0.25rem;
}
</style>
