import * as Blockly from 'blockly/core';

Blockly.Blocks['input_prompt'] = {
  init: function() {
    this.jsonInit({
"type": "input_prompt",
"message0": "prompt with message %1",
"args0": [
    {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
    }
],
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "%{BKY_LOOPS_HUE}"


    });
    }
}


Blockly.Blocks['output_alert'] = {
  init: function() {
    this.jsonInit({
"type": "output_alert",
"message0": "alert with message %1",
"args0": [
    {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
    }
],
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "rgb(144, 0, 144)"
});
}
}


Blockly.Blocks['elements_script'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_script",
      "message0": "script element",
      "message1": "%1",
      "args1": [
          {
              "type": "input_statement",
              "name": "STATEMENTS"
          }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
    });
  }
}

Blockly.Blocks['elements_element_textcontent'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_element_textcontent",
      "message0": "%1 element with text content \" %2 \"",
      "args0": [
          {
              "type": "field_input",
              "name": "TAG"
          },
          {
              "type": "field_input",
              "name": "TEXT"
          }
      ],
      "message1": "attributes %1",
      "args1": [
          {
              "type": "input_statement",
              "name": "STATEMENT"
          }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"

    });
  }
}

Blockly.Blocks['elements_on'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_on",
      "message0": "on %1 do %2",
      "args0": [
          {
              "type": "field_dropdown",
              "name": "FIELDNAME",
              "options": [
                  ["click", "ITEM1"],
                  ["double click", "ITEM2"]
               ]
          },
          {
              "type": "input_value",
              "name": "EVENTHANDLER",
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(254, 214, 81)"

    });
  }
}



Blockly.Blocks['functions_def'] = {
  init: function() {
    this.jsonInit({
      "type": "functions_def",
      "message0": "def %1",
      "args0": [
          {
              "type": "field_input",
              "name": "TEXT",
              "check": "String"
          }
      ],
      "message1": "%1",
      "args1": [
          {
              "type": "input_statement",
              "name": "STATEMENTS"
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_PROCEDURES_HUE}"

    });
  }
}


Blockly.Blocks['scripts_queryselector'] = {
  init: function() {
    this.jsonInit({
      "type": "scripts_queryselector",
      "message0": "element matching selector %1",
      "args0": [
          {
              "type": "input_value",
              "name": "TEXT",
              "check": "String"
          }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": "rgb(187, 102, 202)",
    });
  }
}

Blockly.Blocks['scripts_setqueryselector'] = {
  init: function() {
    this.jsonInit({
      "type": "scripts_setqueryselector",
      "message0": "for element %1 set text content to %2",
      "args0": [
          {
              "type": "input_value",
              "name": "QUERY",
              "check": "String"
          },
          {
              "type": "input_value",
              "name": "TEXT",
              "check": "String"
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(187, 102, 202)",
    });
  }
}

Blockly.Blocks['functions_call'] = {
  init: function() {
    this.jsonInit({
      "type": "functions_call",
      "message0": "call %1",
      "args0": [
          {
              "type": "field_input",
              "name": "TEXT",
              "check": "String"
          }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": "%{BKY_PROCEDURES_HUE}",
    });
  }
}

/*
Blockly.common.defineBlocksWithJsonArray([
  {
      "type": "functions_def",
      "message0": "def %1",
      "args0": [
          {
              "type": "field_input",
              "name": "TEXT",
              "check": "String"
          }
      ],
      "message1": "%1",
      "args1": [
          {
              "type": "input_statement",
              "name": "STATEMENTS"
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_PROCEDURES_HUE}"
  },
  {
      "type": "functions_call",
      "message0": "call %1",
      "args0": [
          {
              "type": "field_input",
              "name": "TEXT",
              "check": "String"
          }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": "%{BKY_PROCEDURES_HUE}",
  },
  {
      "type": "output_alert",
      "message0": "alert with message %1",
      "args0": [
          {
              "type": "input_value",
              "name": "TEXT",
              "check": "String"
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(144, 0, 144)"
  },
  {
      "type": "elements_script",
      "message0": "script element",
      "message1": "%1",
      "args1": [
          {
              "type": "input_statement",
              "name": "STATEMENTS"
          }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
  },
  {
      "type": "elements_element_textcontent",
      "message0": "%1 element with text content \" %2 \"",
      "args0": [
          {
              "type": "field_input",
              "name": "TAG"
          },
          {
              "type": "field_input",
              "name": "TEXT"
          }
      ],
      "message1": "attributes %1",
      "args1": [
          {
              "type": "input_statement",
              "name": "STATEMENT"
          }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
  },
  {
      "type": "elements_on",
      "message0": "on %1 do %2",
      "args0": [
          {
              "type": "field_dropdown",
              "name": "FIELDNAME",
              "options": [
                  ["click", "ITEM1"],
                  ["double click", "ITEM2"]
               ]
          },
          {
              "type": "input_value",
              "name": "EVENTHANDLER",
          }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(254, 214, 81)"
  }
]);
*/
