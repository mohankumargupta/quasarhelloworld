//import * as Blockly from 'blockly/core';
import { Names, Workspace, Generator } from 'blockly/core';
import { Order, javascriptGenerator } from 'blockly/javascript';

class HTMLGeneratorClass extends Generator {
  constructor() {
    super('HTML');
    this.forBlock = {}; // Initialize the forBlock property
  }

  override init(workspace: Workspace) {
    super.init(workspace);

    if (!this.nameDB_) {
      this.nameDB_ = new Names(this.RESERVED_WORDS_);
    } else {
      this.nameDB_.reset();
    }

    this.nameDB_.setVariableMap(workspace.getVariableMap());
    this.nameDB_.populateVariables(workspace);
    this.nameDB_.populateProcedures(workspace);

  }

  // Optional: Override inherited methods if needed
  override finish(code: string): string {
    return code;
  }

  /**
   * Naked values are top-level blocks with outputs that aren't plugged into
   * anything.  A trailing semicolon is needed to make this legal.
   *
   * @param line Line of generated code.
   * @returns Legal line of code.
   */
  override scrubNakedValue(line: string): string {
    return line + ';\n';
  }

  /**
   * Encode a string as a properly escaped JavaScript string, complete with
   * quotes.
   *
   * @param string Text to encode.
   * @returns JavaScript string.
   */
  quote_(string: string): string {
    // Can't use goog.string.quote since Google's style guide recommends
    // JS string literals use single quotes.
    string = string
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\\n')
      .replace(/'/g, "\\'");
    return "'" + string + "'";
  }

  /**
   * Encode a string as a properly escaped multiline JavaScript string, complete
   * with quotes.
   * @param string Text to encode.
   * @returns JavaScript string.
   */
  multiline_quote_(string: string): string {
    // Can't use goog.string.quote since Google's style guide recommends
    // JS string literals use single quotes.
    const lines = string.split(/\n/g).map(this.quote_);
    return lines.join(" + '\\n' +\n");
  }


}

export const htmlGenerator = new HTMLGeneratorClass();
//let htmlGenerator = new Blockly.Generator('HTML');
htmlGenerator['forBlock'] = {};

// TODO: Use example from here: https://github.com/google/blockly-samples/blob/master/examples/sample-app-ts/src/generators/javascript.ts
const standard_blocks = [
    "lists_create_empty",
    "lists_create_with",
    "lists_repeat",
    "lists_length",
    "lists_isEmpty",
    "lists_indexOf",
    "lists_getIndex",
    "lists_setIndex",
    "lists_getSublist",
    "lists_sort",
    "lists_split",
    "lists_reverse",
    "logic_compare",
    "logic_operation",
    "logic_negate",
    "logic_boolean",
    "logic_null",
    "logic_ternary",
    "math_number",
    "math_arithmetic",
    "math_single",
    "math_constant",
    "math_number_property",
    "math_change",
    "math_round",
    "math_trig",
    "math_on_list",
    "math_modulo",
    "math_constrain",
    "math_random_int",
    "math_random_float",
    "math_atan2",
    "procedures_defreturn",
    "procedures_defnoreturn",
    "procedures_callreturn",
    "procedures_callnoreturn",
    "procedures_ifreturn",
    "text",
    "text_join",
    "text_append",
    "text_length",
    "text_isEmpty",
    "text_indexOf",
    "text_charAt",
    "text_getSubstring",
    "text_changeCase",
    "text_trim",
    "text_print",
    "text_prompt_ext",
    "text_prompt",
    "text_count",
    "text_replace",
    "text_reverse",
    "variables_get",
    "variables_set",
    "variables_get_dynamic",
    "variables_set_dynamic",
    "controls_if",
    "controls_repeat_ext",
    "controls_whileUntil",
    "controls_for",
    "controls_forEach",
    "controls_flow_statements",
];


for (const block of standard_blocks) {
  const forblock = javascriptGenerator.forBlock[block];
  if (forblock) {
    htmlGenerator.forBlock[block] = forblock as any;
  }
}

htmlGenerator.forBlock['output_alert'] = function(block, generator) {
    const textValue = javascriptGenerator.valueToCode(block, 'TEXT', Order.ATOMIC) || "";
    let code = `alert(${textValue});\n`

    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock) {
      // Recursively generate code for the next block
      const nextCode = generator.blockToCode(nextBlock);
      code += nextCode; // Append the generated code for the next block
    }

    return code;
}


htmlGenerator.forBlock['elements_script'] = function(block, generator) {
    const innerHTMLContent = generator.statementToCode(block, 'STATEMENTS') || "";
    const code = `<script>\n${innerHTMLContent}<\/script>`;
    return code;
}

htmlGenerator.forBlock['functions_def'] = function(block, generator) {
  const function_name = block.getFieldValue('TEXT') || "";
  const innerHTMLContent = generator.statementToCode(block, 'STATEMENTS') || "";
  const code = `function ${function_name}() {\n${innerHTMLContent}}\n`;
  return code;
}

htmlGenerator.forBlock['elements_element_textcontent'] = function(block, generator) {
  const tag = block.getFieldValue('TAG') || "";
  const textContent = block.getFieldValue('TEXT')|| "";
  const actionCode = generator.statementToCode(block,'STATEMENT') || '';
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  let nextCode = '';
  if (nextBlock) {
      nextCode  = generator.blockToCode(nextBlock) as string;
  }
  const code = `<${tag}${actionCode}>${textContent}</${tag}>\n`;
  return code;
}

htmlGenerator.forBlock['functions_call'] = function(block, generator) {
  const function_name = block.getFieldValue('TEXT') || "";

  const code = `${function_name}()`;
  return [code, Order.ATOMIC];
}

/*
Blockly.JavaScript['elements_on'] = function(block) {
  // Get the selected event type from the dropdown
  const eventName = block.getFieldValue('FIELDNAME'); // "ITEM1" (click) or "ITEM2" (double click)

  // Generate code for the input value (the "do" part)
  const actionCode = Blockly.JavaScript.valueToCode(
    block,
    'TEXT',
    Blockly.JavaScript.ORDER_ATOMIC
  ) || 'null'; // Default to 'null' if no input is provided

  // Map ITEM1/ITEM2 to actual event names
  const eventMap = {
    'ITEM1': 'click',
    'ITEM2': 'dblclick' // Use standard DOM event names
  };
  const eventType = eventMap[eventName] || 'click';

  // Generate the final JavaScript code
  const code = `element.addEventListener('${eventType}', function() {\n  ${actionCode}\n});\n`;

  return code;
};
*/

htmlGenerator.forBlock['elements_on'] = function(block, generator) {
  const eventMap = {
    'ITEM1': 'click',
    'ITEM2': 'dblclick' // Use standard DOM event names
  };
  const field: keyof typeof eventMap = block.getFieldValue('FIELDNAME') || "ITEM1";
  const event = eventMap[field] || "click";
  const handler = generator.valueToCode(block, 'EVENTHANDLER', Order.ATOMIC) || "";
  let code = `on${event}="${handler}"`;

  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock) {
      // Recursively generate code for the next block
      const nextCode = generator.blockToCode(nextBlock);
      code += ` ${nextCode}`; // Append the generated code for the next block
    }


  return code;
}

