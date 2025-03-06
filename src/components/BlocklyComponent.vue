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

//const props = defineProps(['options']);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();

defineExpose({workspace});

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
      style="display: block"
    >
      <slot />
    </xml>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
