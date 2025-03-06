<script setup lang="ts">
import { ref, watch } from 'vue';
import CodeViewer from '../components/CodeViewer.vue';
import BlocklyWorkspace from '../components/BlocklyWorkspace.vue';

//import {javascriptGenerator} from 'blockly/javascript';

const foo = ref();
const options = {
  media: 'media/',
  grid: {
    spacing: 25,
    length: 3,
    colour: '#ccc',
    snap: true,
  },
  toolbox: `<xml>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">
            <block type="stock_buy_simple"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
          </category>
        </xml>`,
};

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
      <BlocklyWorkspace/>
    </template>
    <template #after>
      <CodeViewer />
    </template>
  </q-splitter>
</template>


