import * as Blockly from 'blockly/core';

const tag_options = [
  ["p", "ITEM1"],
  ["h1", "ITEM2"],
  ["h2", "ITEM3"],
  ["h3", "ITEM4"],
  ["div", "ITEM5"],
  ["span", "ITEM6"],
  ["button", "ITEM7"],
];

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

Blockly.Blocks['elements_simple_textcontent_dropdown'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_simple_textcontent_dropdown",
      "message0": "%1 element with text content \" %2 \"",
      "args0": [
          {
              "type": "field_dropdown",
              "name": "TAG",
              "options": tag_options,
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

Blockly.Blocks['elements_img_src'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_img_src",
      "message0": "img element with src equal to %1",
      "args0": [{
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          [{"src":
            "data:image/png;base64,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",
            "width": 15,
            "height": 15,
            "alt": "ANZAC"},
          "ANZAC"],
          [{"src":
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAEPElEQVRIie2SW0wbVByHz/ZgYnzS+GTkRbfIWnCGGeUiooxlXAYpsA65Bga0sCHjFiZGCZkTmcnccJlhTk3cnG5sDrT0QmnLpQGxLb1SGC0DSi+U3rn0otT+fCASQyJjG3vzS87Defm+nP//EPI/m2hpIbs76S/uuZkS9nJLC9m9Y2JhSXis5CSldbRqX9dY02u2yfPRq9Iz0X7Vh1GOsfep5Y8lH2XuO6SpoTq19ZFB/YVYn4lH+8tzrwi+RQassjxYxDmY+OZQUNoe3/1IgWEmtU7TEOHSX4wPOCYLsWIpQ8BVgYB7/SzPFMGuoMMsSsfIhYNBFov1/LblnXTqU6OVFJHmzAHvovS9UMBdgSUDE6bhs5jv/wwuHQM+y3EsDNPgkGfB0JMC2RcJ4F5q/XJbARCyS1ZFnVd/fMC/YinDsrkUPgcTNk0TlnU/wKO9itmeTCxPF8A1ngtTfwbmuWkQnooFu6v38gMD/KqwF7T1lCllW7R32VSKgLsCPgcTPhsDjgkmjAOfQncrG3PsDLjVdBh4Kbh3/TAGqt+E4JNKcPjSuC0Dv50IT5efoswa2BlBv5OJgLsCq4sM+J1MTPNqsKA4CbOYBo++AGYhDcbBYiivJEJQ+TbYPUMLXL6iFcCu/wyMMCLDlbUR3rmutKDfxYTPzoRDXw67uhReG2M9aCqBR1cEQ18W7JJzcMg7IG5IDbH5MssdlmLvli/QMva/pamnWqwD2WtuXdHGz7GpGjA/2Lhx9xpL4Bo/BtNAMwzCNkhvnwe7TyXt7ZWEbRnglcY8p2mkWqy/Hw1ZJTlwavJhl+duiD0zxXBNFMIzlYuFoXSYBo5C0lGBwbs/gd2n+P7aNdUzWwYIIURdGyG9/3mM1z5RCLe+eH3RtnIEXBUwyxqh626AQ5YJiyAZykuJGDidBY5AoeWKFKkPlBNCiLyGclx/+tU/zcN0LJnK4LlfAo++AIujNNgk+TAIP8Dsr0dgFh2BtDUBwo/ywBEpxT1i9bPbChBCiKKaetfUlbq2ai2HcagSNnkeXCo6/LZyuKcK4RzLxhyfBnFdNAQXm9EjVP3Y2dn59LYDI5Wv0Meb9q86VPkw8mlw6QqwpMvH6kIp7JocOJTZUF9OwuCJOHBv3AiyBPK6bcv/QVlDEU7fSl7z2ZlYtTLgszPgs5bDLsnEPC8NstZ30F+fEeL0SuZ5vLH4hw4QQsh4LUU/8e3BkN/BhNdYDKfiGCz9aZjtScVw3RshwVdt4AhUtx9q/pvR1EcuTnckhZZnCuFS0WEaTMe968nor0pA73dXQo80ns2o6yImZ26mhGY4hXAqczB27l0MlkSB9zNvpZszSnnsACGEqKopAu3XiSF912FImuPQ2342xOFKJDyBOmlHAoQQwip+ae9QadQforLX0Xe1HVy+onXH5P/mF552D5snucMSyGOeSOBJ8jdakOCIJlKFjAAAAABJRU5ErkJggg==",
            "width": 15,
            "height": 15,
            "alt": "BISCOTTI"},
          "BISCOTTI"],
          [{"src":
            "data:image/png;base64,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",
            "width": 15,
            "height": 15,
            "alt": "BUTTERCHOC"},
          "BUTTERCHOC"],
          [{"src":
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAE7ElEQVRIiZVVbVBUVRg+9jE19iedVcb8SJkmM6dcFM1hRMIPEPbeRUAEE+Vr9yxq00oDVEZwVe5diFI0/FhAdu+17OOHjl9TM43kVFM6UoDN7r0LmZGUOoqEfO2FcZ5+4F5ZdhftzLx/zvue5znPe55zDiEPGb0ijR10UE510gavRP9RnZYvvY68Cq/TfHJQtNQOiPnTH4YRcnQd2DrTK1pOqxLF2LhSlYbjpigoQipUyayqIr2kSpaURwa/9XnGc6pE31Ul2jPgNAUQ9DlMeOe1abDqdSiMDEOXPXskJ9J7Q/V5EeOCD4j501UnLR6U6C1VomhIX4CChVPxrTXWj6TrUBasep0WN2oytdyQSBvBZT8dlABfpT3ulcztvuJ+hwkFEVNg1euwN/HFADVntkRjV8zzOJ2/LCDnFWnnkGQ5p9rpS/4k9WmTxxaf274C1Ya5cJWv9ZsfFM0BwFrOaYKwMhwN6XoMOmmdH8mwlBPjK7z4fiI69qQHBfl6WwyKFofh+v6NwUlEMypWhUPcsBCq0/LzAxX7E57ySlTxFXLLZ+HMluigIN8XxcG2Ohy3D28OqWZ0DDjpW4QQQu7U5iaoEkV92gJUG+bi96o09DkCXRUqbtRkwp76Co5tikRfQ96YvLkPn22ZRP7ck8KrEoVtdThKombAO6bnfQ4TTuUvQ+PbK4OSHNsUqTntx+L4+wpMuHlgxHW9Io0lbbakU6pEcbc+Fz11OQEgP723RgO5tm9DQL6xYCWseh0KIqagvXIdVImiJmk+rHodvnkzBsP1luVE4ZkTXqfpripR3Dmchc5qf6C/9mZgx9Lp2B07G3frc4OqUWypuDZqXWn0LFj1Ohx9YxF6a83riSIwUn+DuUWVKA4kzUfhoqnors1+ZNuOjX/rsqEIyThhikLHnjT0O3PziMKzB7vtmxtVieLTzEX4YNmM/3XwD5xkwu1DmVAEVgvZxioAmUDcAnvhjw9T2nw77h+HwCtS/FAcp/XeF9c/yXgALLB/yzzbKwtMn2IzphFCCHGXG2oVgUXvkRzZU7EOLWVswA7Pbl2O5jIWVz9Oh1WvQ2n0TK2NPbVZ8NiMUAQWHhv7EUAmuLj4yc3c2me1yygLbIwisLi803C7IGIqrHod2ipTNRKZT4ZVr0NRZBj6HXk4borC+cJV8EpmXKlKhiKwcAvG4rZKw7wmjp0Y8gVWeOZiS1kCiiLDULQ4DO0VyeisXg9VGnksj25ciBPmKD+FvUdyR9rDs5fGfd41kp2GWJlnhptL16C5dI3W31Cu8opmXN+X0fMbZ3w1FKaLY5a0lsTN8ZuUBaZjtDMUgUVPXTYu7EjAF5uXoHWnUSPptmfBzRtrQhE0cexEWWCHFIE5669GSCwZS3J+e2zv9giddqN9r3NPXc49F5+YTQghTXzKNNnGKorArBuN5xYMea1cwlI/EnDcY27BWCwL7FUfyUnLUr9f8Ncyw7DWsobcVYQQ4hKSXvYIxpue3YnbCCFELjdmtRbGPTPu+biE+GiFZwYVgcXlXYngV8yGVa9DVfwLcPMM2iuTuturkjvBcU/41nzHvR7w5bbsip9/2WaYFJKotSRujqucLZQFpkPmGT8zjDiKGfZwrG68zbrLjYfk3YnMuIoIIaTJTp9s4w0GTzlrl3nmF5lnuu6TdCk8ezCYgmDjPxKz6EskVnYfAAAAAElFTkSuQmCC",
            "width": 15,
            "height": 15,
            "alt": "MINICOOKIEBITE"},
          "MINICOOKIEBITE"],
          [{"src":
            "",
            "width": 15,
            "height": 15,
            "alt": "BLANK"},
          "BLANK"],
        ]
      }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
    });
  }
}

Blockly.Blocks['elements_button'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_button",
      "message0": "button element %1",
      "message1": "text content %1",
      "args0": [
        {
          "type": "input_statement",
          "name": "ATTRIBUTE",
          "check": "elements_on"
        }
      ],
      "args1": [
        {
          "type": "input_value",
          "name": "TEXT",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
    });
  }

};



Blockly.Blocks['elements_content'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_content",
      "message0": "%1 element",
      "message1": "content %1",
      "args0": [
        {
          "type": "field_input",
          "name": "TAG"
        },
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "CONTENT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
    });
  }

};

Blockly.Blocks['elements_attributes_content_dropdown'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_attributes_content_dropdown",
      "message0": "%1 element",
      "message1": "attributes %1",
      "message2": "content %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TAG",
          "options": tag_options,
        },
      ],
      "args1": [
          {
            "type": "input_statement",
            "name": "ATTRIBUTES"
          }
      ],
      "args2": [
        {
          "type": "input_statement",
          "name": "CONTENT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
    });
  }
};


Blockly.Blocks['elements_attributes_content'] = {
  init: function() {
    this.jsonInit({
      "type": "elements_attributes_content",
      "message0": "%1 element",
      "message1": "attributes %1",
      "message2": "content %1",
      "args0": [
        {
          "type": "field_input",
          "name": "TAG"
        },
      ],
      "args1": [
          {
            "type": "input_statement",
            "name": "ATTRIBUTES"
          }
      ],
      "args2": [
        {
          "type": "input_statement",
          "name": "CONTENT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "rgb(0, 191, 186)"
    });
  }
};


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
