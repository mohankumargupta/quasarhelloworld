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

Blockly.Blocks['elements_simple_textcontent'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_simple_textcontent",
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


Blockly.Blocks['elements_attributes_common'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_attributes_common",
      "message0": '%1 is "%2"',
      "args0": [
        //first field is dropdown, second field is input
          {
              "type": "field_dropdown",
              "name": "FIELDNAME",
              "options": [
                  ["id", "ITEM1"],
                  ["class", "ITEM2"],
                  ["style", "ITEM3"],
                  ["src", "ITEM4"],
                  ["href", "ITEM5"],
                  ["alt", "ITEM6"],
                  ["title", "ITEM7"],
                ]
          },{
              "type": "field_input",
              "name": "VALUE",
              "check": "String"
          }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(254, 214, 81)"
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

Blockly.Blocks['elements_src_is'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_src_is",
      "message0": "src is %1",
      "args0": [{
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          [{"src":
            "data:image/png;base64,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",
            "width": 15,
            "height": 15,
            "alt": "REDDOT"},
          "REDDOT"],
        ]
      }
      ],
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
