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
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['test_react_field'] = function (block) {
    return 'console.log(\'custom block\');\n';
};

Blockly.JavaScript['test_react_date_field'] = function (block) {
    return 'console.log(' + block.getField('DATE').getText() + ');\n';
};


Blockly.JavaScript['test_say_hello_field'] = function (block) {
    return 'console.log(\'Hello '+ block.getField('FIELD').getText()+ '\');\n';
};

//json_object

Blockly.JavaScript['json_object'] = function (block) {
    return "{ name: 'jigs'}";
    // block.getField('MEMBERS').getText();
    // "{ name: 'jigs'}";
    // '{'
    // + block.getField('MEMBERS').getText()
    // +'}';
};


//json_member
Blockly.JavaScript['json_member'] = function (block) {
    //block.getField('MEMBER_NAME').getText() + ":" +
    debugger;
    console.log("mn is " +block.getField('MEMBER_NAME').getText() 
        + ": mv is " +block.getField('MEMBER_VALUE').getText());
    return       'location: 1908';
    
    // block.getField('MEMBER_VALUE').getText() ;
    
    // 'location: 1908';
    
    // block.getField('MEMBER_NAME').getText()+
    // + ':'
    // + block.getField('MEMBER_VALUE').getText() ;
};
