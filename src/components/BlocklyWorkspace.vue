<script setup lang="ts">
//import { ref } from 'vue';
import BlocklyComponent from './BlocklyComponent.vue';
//import { state } from '../stores/codeStore';

</script>

<template>
  <div>
    <BlocklyComponent id="blockly1">
      <category name="Logic" categorystyle="logic_category" >
             <block type="controls_if"></block>
             <block type="logic_compare"></block>
             <block type="logic_operation"></block>
             <block type="logic_negate"></block>
             <block type="logic_boolean"></block>
             <block type="logic_null"></block>
             <block type="logic_ternary"></block>
      </category>
      <category name="Loops" categorystyle="loop_category">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="controls_forEach"></block>
      <block type="controls_flow_statements"></block>
    </category>
    <category name="Math" categorystyle="math_category">
      <block type="math_number">
        <field name="NUM">123</field>
      </block>
      <block type="math_arithmetic">
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="math_single">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">9</field>
          </shadow>
        </value>
      </block>
      <block type="math_trig">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">45</field>
          </shadow>
        </value>
      </block>
      <block type="math_constant"></block>
      <block type="math_number_property">
        <value name="NUMBER_TO_CHECK">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="math_round">
        <field name="OP">ROUND</field>
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">3.1</field>
          </shadow>
        </value>
      </block>
      <block type="math_on_list">
        <field name="OP">SUM</field>
      </block>
      <block type="math_modulo">
        <value name="DIVIDEND">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="DIVISOR">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="math_constrain">
        <value name="VALUE">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="LOW">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="HIGH">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_int">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_float"></block>
      <block type="math_atan2">
        <value name="X">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="Y">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
    </category>
    <category name="Text" categorystyle="text_category">
      <block type="text"></block>
      <block type="text_join"></block>
      <block type="text_append">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="text_length">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_isEmpty">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="text_indexOf">
        <value name="VALUE">
          <block type="variables_get"></block>
        </value>
        <value name="FIND">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_charAt">
        <value name="VALUE">
          <block type="variables_get"></block>
        </value>
      </block>
      <block type="text_getSubstring">
        <value name="STRING">
          <block type="variables_get"></block>
        </value>
      </block>
      <block type="text_changeCase">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_trim">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_count">
        <value name="SUB">
          <shadow type="text"></shadow>
        </value>
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_replace">
        <value name="FROM">
          <shadow type="text"></shadow>
        </value>
        <value name="TO">
          <shadow type="text"></shadow>
        </value>
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_reverse">
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
    </category>
    <category name="Lists" categorystyle="list_category">
      <block type="lists_create_with"></block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf">
        <value name="VALUE">
          <block type="variables_get"></block>
        </value>
      </block>
      <block type="lists_getIndex">
        <value name="VALUE">
          <block type="variables_get"></block>
        </value>
      </block>
      <block type="lists_setIndex">
        <value name="LIST">
          <block type="variables_get"></block>
        </value>
      </block>
      <block type="lists_getSublist">
        <value name="LIST">
          <block type="variables_get"></block>
        </value>
      </block>
      <block type="lists_split">
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>
      <block type="lists_sort"></block>
      <block type="lists_reverse"></block>
    </category>
    <sep></sep>
    <category name="Variables" categorystyle="variable_category" custom="VARIABLE"></category>
    <category name="Functions" categorystyle="procedure_category">
      <block type="functions_def"></block>
      <block type="functions_call"></block>
    </category>
    <category name="Input" colour="%{BKY_LOOPS_HUE}">
      <!-- <block type="text_print"></block> -->
       <block type="input_prompt"></block>
    </category>
    <!-- <category name="Functions" categorystyle="procedure_category" custom="PROCEDURE"></category> -->
    <category name="Output" colour="rgb(144, 0, 144)">
      <!-- <block type="text_print"></block> -->
       <block type="output_alert"></block>
    </category>
    <category name="Elements" colour="rgb(0, 191, 186)">
      <block type="elements_attributes_content_dropdown"></block>
      <block type="elements_attributes_content"></block>
      <block type="elements_content"></block>
      <block type="elements_simple_textcontent"></block>
      <block type="elements_element_textcontent"></block>
      <block type="elements_img_src"></block>
      <block type="elements_script"></block>
      <block type="elements_on"></block>
      <block type="elements_attributes_common"></block>
    </category>
    <category name="Scripts" colour="rgb(187, 102, 202)">
      <block type="scripts_setqueryselector"></block>
      <block type="scripts_queryselector"></block>
    </category>

    </BlocklyComponent>

    <!-- <BlocklyComponent
      id="blockly2"
      ref="foo"
      :options="options"
    /> -->
    <!-- <div id="code">
      <button v-on:click="showCode()">Show JavaScript</button>
      <pre v-html="code"></pre>
    </div> -->

  </div>
</template>

<style scoped>

html,
body {
  margin: 0;
}

#blockly1 {
  height: calc(100dvh - 50px);
  display: flex;
  width: 100%;
}

/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
}

#blockly1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
}

#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
}
*/
</style>
