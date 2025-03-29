//import * as Blockly from 'blockly/core';
import { Names, Workspace, Generator } from 'blockly/core';
import { Order, javascriptGenerator } from 'blockly/javascript';
import type { Block } from 'blockly/core';

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

function valueToCode(block: Block, generator: HTMLGeneratorClass, name: string) {
  const text  = generator.valueToCode(block, name, 0)||"";
  return text.slice(1,-1);
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

const tag_options = {
  ITEM1: "p",
  ITEM2: "h1",
  ITEM3: "h2",
  ITEM4: "h3",
  ITEM5: "div",
  ITEM6: "span",
  ITEM7: "button"
};

for (const block of standard_blocks) {
  const forblock = javascriptGenerator.forBlock[block];
  if (forblock) {
    htmlGenerator.forBlock[block] = forblock as any;
  }
}

htmlGenerator.forBlock['output_alert'] = function(block, generator) {
    const textValue = javascriptGenerator.valueToCode(block, 'TEXT', Order.ATOMIC) || "";
    let code = `alert(${textValue});\n`
    const finalCode = generateNextCodeBlock(block, generator, code);
    return finalCode;
}

htmlGenerator.forBlock['input_prompt'] = function(block, generator) {
  const textValue = javascriptGenerator.valueToCode(block, 'TEXT', Order.ATOMIC) || "";
  let code = `prompt(${textValue});\n`

  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock) {
    // Recursively generate code for the next block
    const nextCode = generator.blockToCode(nextBlock);
    code += nextCode; // Append the generated code for the next block
  }

  return code;
}

htmlGenerator.forBlock['_elements_simple_textcontent_dropdown'] = function(block, generator) {
  const tagField: keyof typeof tag_options = block.getFieldValue("TAG")||"";
  const tag = tag_options[tagField];
  const textContent = block.getFieldValue('TEXT')|| "";
  const code = `<${tag}>${textContent}</${tag}>\n{}`;
  return code;
}


// htmlGenerator.forBlock['elements_simple_textcontent_dropdown'] = function(block, generator) {
//   const tagField: keyof typeof tag_options = block.getFieldValue("TAG")||"";
//   const tag = tag_options[tagField];
//   const textContent = block.getFieldValue('TEXT')|| "";
//   const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
//   let nextCode = '';
//   if (nextBlock) {
//       nextCode  = generator.blockToCode(nextBlock) as string;
//   }
//   const code = `<${tag}>${textContent}</${tag}>\n`;
//   const finalCode = generateNextCodeBlock(block, generator, code);
//   return finalCode;
// }

htmlGenerator.forBlock['elements_button'] = function(block, generator) {
  const attributes = generator.statementToCode(block, 'ATTRIBUTE') || "";
  const text = valueToCode(block, generator, "TEXT");
  //const text  = generator.valueToCode(block, "TEXT", 0)||"";
  const code = `<button${attributes}>${text}</button>`;
  return code;
}


htmlGenerator.forBlock['elements_attributes_content_dropdown'] = function(block, generator) {
  const tagField: keyof typeof tag_options = block.getFieldValue("TAG")||"";
  const tag = tag_options[tagField];
  const attributes = generator.statementToCode(block, 'ATTRIBUTES') || "";
  const content = generator.statementToCode(block, 'CONTENT') || "";
  const code = `<${tag}${attributes}>\n${content}<\/${tag}>`;
  return code;
}

htmlGenerator.forBlock['elements_attributes_content'] = function(block, generator) {
  const tag: string = block.getFieldValue("TAG")||"";
  const attributes = generator.statementToCode(block, 'ATTRIBUTES') || "";
  const content = generator.statementToCode(block, 'CONTENT') || "";
  const code = `<${tag}${attributes}>\n${content}<\/${tag}>`;
  return code;
}

htmlGenerator.forBlock['elements_content'] = function(block, generator) {
  const tag: string = block.getFieldValue("TAG")||"";
  const content = generator.statementToCode(block, 'CONTENT') || "";
  const code = `<${tag}>\n${content}<\/${tag}>`;
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

htmlGenerator.forBlock['elements_simple_textcontent'] = function(block, generator) {
  const tag = block.getFieldValue('TAG') || "";
  const textContent = block.getFieldValue('TEXT')|| "";
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  let nextCode = '';
  if (nextBlock) {
      nextCode  = generator.blockToCode(nextBlock) as string;
  }
  const code = `<${tag}>${textContent}</${tag}>\n`;
  const finalCode = generateNextCodeBlock(block, generator, code);
  return finalCode;
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

htmlGenerator.forBlock['elements_attributes_common'] = function(block, generator) {
  const attributeItem = block.getFieldValue('FIELDNAME') as keyof typeof options;
  const attributeValue = block.getFieldValue('VALUE');

  const options = {
    ITEM1: "id",
    ITEM2: "class",
    ITEM3: "style",
    ITEM4: "src",
    ITEM5: "href",
    ITEM6: "alt",
    ITEM7: "title",
  } as const;

  const attributeName = options[attributeItem];

  const code = `${attributeName}="${attributeValue}" `
  const finalCode = generateNextCodeBlock(block, generator, code);
  return finalCode;
}

htmlGenerator.forBlock['elements_img_src'] = function(block, generator) {

  type OPTIONS = keyof typeof options;
  const srcField: OPTIONS = block.getFieldValue("VALUE");
  const options = {
    "ANZAC": "anzac",
    "BISCOTTI": "biscotti",
    "BUTTERCHOC": "butter-cookie-choc",
    "MINICOOKIEBITE": ""
  };
  const filename = `${options[srcField]}.png`;
  const src = `https://mohankumargupta.github.io/quasarhelloworld/images/${filename}`;

  const code = `<img src="${src}" />`
  const finalCode = generateNextCodeBlock(block, generator, code);
  return finalCode;
}

htmlGenerator.forBlock['functions_call'] = function(block, generator) {
  const function_name = block.getFieldValue('TEXT') || "";

  const code = `${function_name}()`;
  return [code, Order.ATOMIC];
}

htmlGenerator.forBlock['scripts_queryselector'] = function(block, generator) {
  //const function_name = block.getFieldValue('TEXT') || "";

  //const code = `${function_name}()`;
  return ["", Order.ATOMIC];
}

htmlGenerator.forBlock['scripts_setqueryselector'] = function(block, generator) {
  //const function_name = block.getFieldValue('TEXT') || "";

  //const code = `${function_name}()`;
  return "";
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

function generateNextCodeBlock(block: Block, generator: HTMLGeneratorClass, code: string) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  let newCode=code;
  if (nextBlock) {
    // Recursively generate code for the next block
    const nextCode = generator.blockToCode(nextBlock) as string;
    newCode = newCode.replace("{}", nextCode);
    //newCode += nextCode; // Append the generated code for the next block
  }
  else {
    newCode = newCode.replace("{}","");
  }
  return newCode ;
}

(
function handleNextBlocks() {
  const statementKeys = Object.keys(htmlGenerator.forBlock).filter(key => key.startsWith('_'));
  for (const statementKey of statementKeys) {
    const statementIndex = statementKey.replace(/^_/, '');
    console.log(statementKey);
    console.log(statementIndex);
    htmlGenerator.forBlock[statementIndex] = function (block, generator) {
      if (htmlGenerator.forBlock[statementKey]) {
        const simpleCode = htmlGenerator.forBlock[statementKey](block, generator) as string;
        const code = generateNextCodeBlock(block, generator, simpleCode);
        return code;
        //return simpleCode !== undefined ? simpleCode : null;
      }
      return null;
    };

  }
}
)();

/*
const statementKeys = Object.keys(htmlGenerator.forBlock).filter(key => key.startsWith('_'));

for (const statementKey of statementKeys) {
  const statementIndex = statementKey.replace(/^_/, '');
  htmlGenerator.forBlock[statementIndex] = function (block, generator) {
    if (htmlGenerator.forBlock[statementKey]) {
      const simpleCode = htmlGenerator.forBlock[statementKey](block, generator)

      return simpleCode;
    }
  };
  console.log(statementKey);
}


*/
