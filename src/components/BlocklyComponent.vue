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

import {onMounted, provide, ref, shallowRef} from 'vue';
import * as Blockly from 'blockly/core';
import * as En from 'blockly/msg/en';
import 'blockly/blocks';
//import { javascriptGenerator } from 'blockly/javascript';
import { htmlGenerator } from '../generators/HTMLGenerator';
import '../blocks/custom_blocks';
import { state } from '../stores/codeStore';
import eventBus from './resize';

//const props = defineProps(['options']);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();


defineExpose({workspace});


//const blocklyCode = defineModel<string>();

onMounted(() => {

  Blockly.setLocale(En);
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

var blocklyArea = document.getElementById('blockly1');
var blocklyDivDiv = document.getElementById('blocklyDiv');

const onresize = function (_e: UIEvent) {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
          if (element) {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent as HTMLElement;
          }
        } while (element);
        if (blocklyDivDiv && blocklyArea) {
        // Position blocklyDiv over blocklyArea.
         blocklyDivDiv.style.left = x + 'px';
          //blocklyDivDiv.style.top = y + 'px';
        //blocklyDivDiv.style.left = "0px";
        blocklyDivDiv.style.top = "0px";
        blocklyDivDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDivDiv.style.height = blocklyArea.offsetHeight + 'px';
        }


        Blockly.svgResize(workspace.value);

        console.log('resize');
      };
  window.addEventListener('resize', onresize, false);
  onresize(new Event('resize') as UIEvent);


  eventBus.on((_listener)=>{
    onresize(new Event('resize') as UIEvent);
  });
});
</script>

<template>
  <div>
    <div id="blocklyArea"></div>
    <div
      id="blocklyDiv"
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
  position: absolute;
  text-align: left;
}
/* .blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
} */

.blocklyToolboxDiv {
  padding-left: 0.25em;
}

</style>
