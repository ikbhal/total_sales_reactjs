/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

import '@blockly/field-date';

let reactDateField = {
        "type": "test_react_date_field",
        "message0": "date field: %1",
        "args0": [
            {
                "type": "field_date",
                "name": "DATE",
                "date": "2020-02-20"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
    };

Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
}

var testReactField = {
  "type": "test_react_field",
  "message0": "custom Tabassum field %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Click me"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};



Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  }
};


var sayHelloField = {
  "type": "test_say_hello_field",
  "message0": "Say Hello %1",
  "args0": [
    {
      "type": "field_input",
      "name": "FIELD",
      // "text": ""
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_say_hello_field'] = {
  init: function() {
    this.jsonInit(sayHelloField);
    this.setStyle('loop_blocks');
  }
};

// move forward
var moveFrowardBlock = {
  "type": "move_forward",
  "message0": "Move Forward",
  "args0": [
    
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['move_forward'] = {
  init: function() {
    this.jsonInit(moveFrowardBlock);
    this.setStyle('loop_blocks');
  }
};

// turn left

var turnLefBlock = {
  "type": "turn_left",
  "message0": "Turn Left",
  "args0": [
    
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.jsonInit(turnLefBlock);
    this.setStyle('loop_blocks');
  }
};

// object block
var jsonObjectBlock = 
{
  "type": "json_object",
  "message0": "{ %1 %2 }",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
}

Blockly.Blocks['json_object'] = {
  init: function() {
    this.jsonInit(jsonObjectBlock);
    this.setStyle('loop_blocks');
  }
};

// member block
var jsonMemberBlock =
{
  "type": "json_member",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "MEMBER_NAME",
      "text": ""
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
}

Blockly.Blocks['json_member'] = {
  init: function() {
    this.jsonInit(jsonMemberBlock);
    this.setStyle('loop_blocks');
  }
};