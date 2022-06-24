//Code gen for task 1
Blockly.Python['event_sensor'] = function (block) {
    var code = ''
    if (Blockly.Python.STATEMENT_PREFIX) {
        // Automatic prefix insertion is switched off for this block.  Add manually.
        code += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, block);
    }
    conditionCode = Blockly.Python.valueToCode(block, 'trigger_event',
        Blockly.Python.ORDER_NONE) || 'False';
    branchCode = Blockly.Python.statementToCode(block, 'workflow_body') ||
        Blockly.Python.PASS;
    if (Blockly.Python.STATEMENT_SUFFIX) {
        branchCode = Blockly.Python.prefixLines(
            Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, block),
            Blockly.Python.INDENT) + branchCode;
    }
    code += 'def ' + 'sensor_event_callback(' + conditionCode + '):\n' + branchCode;
    return code;
};
Blockly.Python['device_light'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'device["light"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['device_motion_sensor'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'device["motion_sensor"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['service_someone_passed'] = function (block) {
    var value_sensor = Blockly.Python.valueToCode(block, 'sensor', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code = value_sensor + '.detects_someone_passed';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['service_switch'] = function (block) {
    var dropdown_state = block.getFieldValue('state');
    var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var option = dropdown_state=="OPTION_ON"?"True":"False"
    var code = value_device + '.switchOn(' + option  + ')\n';
    return code;
};

//Code Gen Task 2
//Task 2 Code Gen
//Task 2
//Task 2 Code Gen
Blockly.Python['event_time'] = function (block) {
    var number_hour = block.getFieldValue('Hour');
    var number_minute = block.getFieldValue('Minute');
    var number_second = block.getFieldValue('Second');
    var dropdown_day_selector = block.getFieldValue('day_selector');
    // TODO: Assemble Python into code variable.
    var code = '';
    var time_str = '"' + number_hour + ':' + number_minute + ':' + number_second + '"'
    var time_format = "HH:mm:ss"
    var day = ''
    if (dropdown_day_selector == "DAY") {
        day = "Time_Trigger.EVERYDAY"
    } else if (dropdown_day_selector == "WEEKDAY") {
        day = "Time_Trigger.WEEKDAY"
    } else {
        day = "Time_Trigger.WEEKEND"
    }

    if (Blockly.Python.STATEMENT_PREFIX) {
        // Automatic prefix insertion is switched off for this block.  Add manually.
        code += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, block);
    }
    branchCode = Blockly.Python.statementToCode(block, 'workflow_body') ||
        Blockly.Python.PASS;

    if (Blockly.Python.STATEMENT_SUFFIX) {
        branchCode = Blockly.Python.prefixLines(
            Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, block),
            Blockly.Python.INDENT) + branchCode;
    }

    return code += 'def ' + 'time_event_callback(' + time_str + ',' + time_format + ',' + day + '):\n' + branchCode;;
};




Blockly.Python['device_curtain'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'device["curtain"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['device_brightness_sensor'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'device["brightness_sensor"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['device_lamp'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'device["lamp"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['device_smart_speaker'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'device["Smart Speaker"]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['service_open'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code = value_name + '.close()\n';
    return code;
};

Blockly.Python['service_close'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code = value_name + '.close()\n';
    return code;
};

Blockly.Python['service_set_percentage'] = function (block) {
    var value_attribute = Blockly.Python.valueToCode(block, 'Attribute', Blockly.Python.ORDER_NONE);
    var value_holon = Blockly.Python.valueToCode(block, 'Holon', Blockly.Python.ORDER_NONE);
    var number_brightness_percentage_ = block.getFieldValue('percentage ');
    // TODO: Assemble Python into code variable.
    var code = value_holon + '.set_percentage(' + value_attribute + ',' + number_brightness_percentage_ + ')\n';
    return code;
};

Blockly.Python['attribute_brightness'] = function (block) {
    // TODO: Assemble Python into code variable.
//    var code = 'ATTRIBUTE.BRIGHTNESS';
    var code = 'brightness'
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['service_wait'] = function (block) {
    var number_time_span = block.getFieldValue('time_span');
    // TODO: Assemble Python into code variable.
    var code = 'time.sleep(' + number_time_span + ')\n';
    return code;
};

Blockly.Python['service_play_random_songs'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code = value_name + '.playRandomSongs()\n';
    return code;
};

Blockly.Python['service_get_value'] = function (block) {
    var value_property_select = Blockly.Python.valueToCode(block, 'property_select', Blockly.Python.ORDER_NONE);
    var value_holonselect = Blockly.Python.valueToCode(block, 'HolonSelect', Blockly.Python.ORDER_NONE);
    // TODO: Assemble Python into code variable.
    var code = value_holonselect+'.'+value_property_select;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

//Task 3
Blockly.Python['event_scene'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var statements_workflow_body = Blockly.Python.statementToCode(block, 'workflow_body');
    var code = ''
    if (Blockly.Python.STATEMENT_PREFIX) {
        // Automatic prefix insertion is switched off for this block.  Add manually.
        code += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, block);
    }
    branchCode = Blockly.Python.statementToCode(block, 'workflow_body') ||
        Blockly.Python.PASS;
    if (Blockly.Python.STATEMENT_SUFFIX) {
        branchCode = Blockly.Python.prefixLines(
            Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, block),
            Blockly.Python.INDENT) + branchCode;
    }
    code += 'def ' + text_name + 'scene_event_callback():\n' + branchCode;
    return code;
};

Blockly.Python['service_check_state'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_name == "OFF"){
    code += 'not '
  }
  code += value_name + '.' + 'isOn()\n'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['device_light1'] = function(block) {
   // TODO: Assemble Python into code variable.
   var code = 'device["light1"]';
   // TODO: Change ORDER_NONE to the correct strength.
   return [code, Blockly.Python.ORDER_NONE];
 };

Blockly.Python['device_light2'] = function(block) {
   // TODO: Assemble Python into code variable.
   var code = 'device["light2"]';
   // TODO: Change ORDER_NONE to the correct strength.
   return [code, Blockly.Python.ORDER_NONE];
 };

Blockly.Python['device_light3'] = function(block) {
   // TODO: Assemble Python into code variable.
   var code = 'device["light3"]';
   // TODO: Change ORDER_NONE to the correct strength.
   return [code, Blockly.Python.ORDER_NONE];
 };










function start(){
    JSInterface.startTimer()
    //Blockly.mainWorkspace.addChangeListener(updateFunction);
}

function stop() {
  JSInterface.stopTimer()

  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xml_text = Blockly.Xml.domToText(xml);
  console.log("save DOM========================================================");
  var code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace);
  console.log(code);
  console.log("save code========================================================");
  JSInterface.saveBlocks(xml_text, code);
}

function loadWorkspace(xmlText) {
    let workspace = Blockly.getMainWorkspace();
    workspace.clear();
    let dom = Blockly.Xml.textToDom(xmlText);
//    console.log(xmlText)
    Blockly.Xml.domToWorkspace(dom, workspace);
}

var block_list = [{
                   "type": "setpercentage",
                   "message0": "set %1 to %2 %% %3",
                   "args0": [
                     {
                       "type": "field_input",
                       "name": "property name",
                       "text": "brightness "
                     },
                     {
                       "type": "field_number",
                       "name": "brightness_percentage ",
                       "value": 0,
                       "min": 0,
                       "max": 100,
                       "precision": 0.1
                     },
                     {
                       "type": "input_value",
                       "name": "NAME",
                       "check": "Holon"
                     }
                   ],
                   "previousStatement": null,
                   "nextStatement": null,
                   "colour": 230,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "switch",
                   "message0": "switch %1 %2",
                   "args0": [
                     {
                       "type": "field_dropdown",
                       "name": "NAME",
                       "options": [
                         [
                           "on",
                           "OPTION_ON"
                         ],
                         [
                           "off",
                           "OPTION_OFF"
                         ]
                       ]
                     },
                     {
                       "type": "input_value",
                       "name": "NAME"
                     }
                   ],
                   "previousStatement": null,
                   "nextStatement": null,
                   "colour": 230,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "delay",
                   "message0": "delay %1 ms",
                   "args0": [
                     {
                       "type": "field_number",
                       "name": "NAME",
                       "value": 100,
                       "min": 0
                     }
                   ],
                   "previousStatement": null,
                   "nextStatement": null,
                   "colour": 230,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "check_status",
                   "message0": "%1 is %2",
                   "args0": [
                     {
                       "type": "input_value",
                       "name": "NAME",
                       "check": "Holon"
                     },
                     {
                       "type": "field_dropdown",
                       "name": "NAME",
                       "options": [
                         [
                           "on",
                           "OPTIONNAME"
                         ],
                         [
                           "off",
                           "OPTIONNAME"
                         ]
                       ]
                     }
                   ],
                   "output": "Boolean",
                   "colour": 230,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "workflow_scene",
                   "message0": "Scene %1 %2 %3",
                   "args0": [
                     {
                       "type": "field_input",
                       "name": "NAME",
                       "text": "name of this scene"
                     },
                     {
                       "type": "input_dummy"
                     },
                     {
                       "type": "input_statement",
                       "name": "workflow_body"
                     }
                   ],
                   "colour": 135,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "workflow_sensor",
                   "message0": "Trigger When %1 %2",
                   "args0": [
                     {
                       "type": "input_value",
                       "name": "NAME",
                       "check": "Boolean"
                     },
                     {
                       "type": "input_statement",
                       "name": "workflow_body"
                     }
                   ],
                   "colour": 135,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "workflow_time",
                   "message0": "When %1 : %2 : %3 %4 %5",
                   "args0": [
                     {
                       "type": "field_input",
                       "name": "Hour",
                       "text": "10"
                     },
                     {
                       "type": "field_input",
                       "name": "Minute",
                       "text": "10"
                     },
                     {
                       "type": "field_input",
                       "name": "Second",
                       "text": "10"
                     },
                     {
                       "type": "input_dummy"
                     },
                     {
                       "type": "input_statement",
                       "name": "NAME"
                     }
                   ],
                   "colour": 135,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "getvalue",
                   "message0": "get property: %1 from device: %2",
                   "args0": [
                     {
                       "type": "input_value",
                       "name": "property_select",
                       "check": "String"
                     },
                     {
                       "type": "input_value",
                       "name": "HolonSelect",
                       "check": "Holon"
                     }
                   ],
                   "output": null,
                   "colour": 230,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "set_value",
                   "message0": "set property: %1 of device: %2 with Value %3",
                   "args0": [
                     {
                       "type": "input_value",
                       "name": "NAME",
                       "check": "String"
                     },
                     {
                       "type": "input_value",
                       "name": "NAME",
                       "check": "Holon"
                     },
                     {
                       "type": "input_value",
                       "name": "NAME"
                     }
                   ],
                   "previousStatement": null,
                   "nextStatement": null,
                   "colour": 230,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "property_brightness",
                   "message0": "BRIGHTNESS",
                   "output": "String",
                   "colour": 300,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "property_temperature",
                   "message0": "TEMPERATURE ",
                   "output": "String",
                   "colour": 300,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "device_light",
                   "message0": "%1",
                   "args0": [
                     {
                       "type": "field_label_serializable",
                       "name": "NAME",
                       "text": "MainLight"
                     }
                   ],
                   "output": "Holon",
                   "colour": 30,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "device_heater",
                   "message0": "%1",
                   "args0": [
                     {
                       "type": "field_label_serializable",
                       "name": "NAME",
                       "text": "Heater"
                     }
                   ],
                   "output": "Holon",
                   "colour": 30,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "device_air_conditioner",
                   "message0": "%1",
                   "args0": [
                     {
                       "type": "field_label_serializable",
                       "name": "NAME",
                       "text": "Air-Conditioner"
                     }
                   ],
                   "output": "Holon",
                   "colour": 30,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "device_thermometer",
                   "message0": "%1",
                   "args0": [
                     {
                       "type": "field_label_serializable",
                       "name": "NAME",
                       "text": "Thermometer"
                     }
                   ],
                   "output": "Holon",
                   "colour": 30,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "device_brightness_sensor",
                   "message0": "%1",
                   "args0": [
                     {
                       "type": "field_label_serializable",
                       "name": "NAME",
                       "text": "BrightnessSensor"
                     }
                   ],
                   "output": "Holon",
                   "colour": 30,
                   "tooltip": "",
                   "helpUrl": ""
                 },
                 {
                   "type": "device_lamp",
                   "message0": "%1",
                   "args0": [
                     {
                       "type": "field_label_serializable",
                       "name": "NAME",
                       "text": "Bedside Lamp"
                     }
                   ],
                   "output": "Holon",
                   "colour": 30,
                   "tooltip": "",
                   "helpUrl": ""
                 }]

var xml_head = '<xml xmlns="https://developers.google.com/blockly/xml">'

var xml_tail = '<category name="Logic" colour="%{BKY_LOGIC_HUE}">'
               +   '<block type="controls_if"></block>'
               +   '<block type="logic_compare"></block>'
               +   '<block type="logic_operation"></block>'
               +   '<block type="logic_negate"></block>'
               +   '<block type="logic_boolean"></block>'
               +   '<block type="logic_null" disabled="true"></block>'
               +   '<block type="logic_ternary"></block>'
               + '</category>'
               + '<category name="Loops" colour="%{BKY_LOOPS_HUE}">'
               +   '<block type="controls_repeat_ext">'
               +     '<value name="TIMES">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">10</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="controls_repeat" disabled="true"></block>'
               +   '<block type="controls_whileUntil"></block>'
               +   '<block type="controls_for">'
               +     '<value name="FROM">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">1</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="TO">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">10</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="BY">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">1</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="controls_forEach"></block>'
               +   '<block type="controls_flow_statements"></block>'
               + '</category>'
               + '<category name="Math" colour="%{BKY_MATH_HUE}">'
               +   '<block type="math_number" gap="32">'
               +     '<field name="NUM">123</field>'
               +   '</block>'
               +   '<block type="math_arithmetic">'
               +     '<value name="A">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">1</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="B">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">1</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_single">'
               +     '<value name="NUM">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">9</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_trig">'
               +     '<value name="NUM">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">45</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_constant"></block>'
               +   '<block type="math_number_property">'
               +     '<value name="NUMBER_TO_CHECK">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">0</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_round">'
               +     '<value name="NUM">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">3.1</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_on_list"></block>'
               +   '<block type="math_modulo">'
               +     '<value name="DIVIDEND">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">64</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="DIVISOR">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">10</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_constrain">'
               +     '<value name="VALUE">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">50</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="LOW">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">1</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="HIGH">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">100</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_random_int">'
               +     '<value name="FROM">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">1</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="TO">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">100</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="math_random_float"></block>'
               + '</category>'
               + '<category name="Text" colour="%{BKY_TEXTS_HUE}">'
               +   '<block type="text"></block>'
               +   '<block type="text_join"></block>'
               +   '<block type="text_append">'
               +     '<value name="TEXT">'
               +       '<shadow type="text"></shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_length">'
               +     '<value name="VALUE">'
               +       '<shadow type="text">'
               +         '<field name="TEXT">abc</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_isEmpty">'
               +     '<value name="VALUE">'
               +       '<shadow type="text">'
               +         '<field name="TEXT"></field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_indexOf">'
               +     '<value name="VALUE">'
               +       '<block type="variables_get">'
               +         '<field name="VAR">text</field>'
               +       '</block>'
               +     '</value>'
               +     '<value name="FIND">'
               +       '<shadow type="text">'
               +         '<field name="TEXT">abc</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_charAt">'
               +     '<value name="VALUE">'
               +       '<block type="variables_get">'
               +         '<field name="VAR">text</field>'
               +       '</block>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_getSubstring">'
               +     '<value name="STRING">'
               +       '<block type="variables_get">'
               +         '<field name="VAR">text</field>'
               +       '</block>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_changeCase">'
               +     '<value name="TEXT">'
               +       '<shadow type="text">'
               +         '<field name="TEXT">abc</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_trim">'
               +     '<value name="TEXT">'
               +       '<shadow type="text">'
               +         '<field name="TEXT">abc</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_count">'
               +     '<value name="SUB">'
               +       '<shadow type="text"></shadow>'
               +     '</value>'
               +     '<value name="TEXT">'
               +       '<shadow type="text"></shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_replace">'
               +     '<value name="FROM">'
               +       '<shadow type="text"></shadow>'
               +     '</value>'
               +     '<value name="TO">'
               +       '<shadow type="text"></shadow>'
               +     '</value>'
               +     '<value name="TEXT">'
               +       '<shadow type="text"></shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_reverse">'
               +     '<value name="TEXT">'
               +       '<shadow type="text"></shadow>'
               +     '</value>'
               +   '</block>'
               +   '<label text="Input/Output:" web-class="ioLabel"></label>'
               +   '<block type="text_print">'
               +     '<value name="TEXT">'
               +       '<shadow type="text">'
               +         '<field name="TEXT">abc</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="text_prompt_ext">'
               +     '<value name="TEXT">'
               +       '<shadow type="text">'
               +         '<field name="TEXT">abc</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               + '</category>'
               + '<category name="Lists" colour="%{BKY_LISTS_HUE}">'
               +   '<block type="lists_create_with">'
               +     '<mutation items="0"></mutation>'
               +   '</block>'
               +   '<block type="lists_create_with"></block>'
               +   '<block type="lists_repeat">'
               +     '<value name="NUM">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">5</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="lists_length"></block>'
               +   '<block type="lists_isEmpty"></block>'
               +   '<block type="lists_indexOf">'
               +     '<value name="VALUE">'
               +       '<block type="variables_get">'
               +         '<field name="VAR">list</field>'
               +       '</block>'
               +     '</value>'
               +   '</block>'
               +   '<block type="lists_getIndex">'
               +     '<value name="VALUE">'
               +       '<block type="variables_get">'
               +         '<field name="VAR">list</field>'
               +       '</block>'
               +     '</value>'
               +   '</block>'
               +   '<block type="lists_setIndex">'
               +     '<value name="LIST">'
               +       '<block type="variables_get">'
               +         '<field name="VAR">list</field>'
               +       '</block>'
               +     '</value>'
               +   '</block>'
               +   '<block type="lists_getSublist">'
               +     '<value name="LIST">'
               +       '<block type="variables_get">'
               +         '<field name="VAR">list</field>'
               +       '</block>'
               +     '</value>'
               +   '</block>'
               +   '<block type="lists_split">'
               +     '<value name="DELIM">'
               +       '<shadow type="text">'
               +         '<field name="TEXT">,</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="lists_sort"></block>'
               +   '<block type="lists_reverse"></block>'
               + '</category>'
               + '<category name="Colour" colour="%{BKY_COLOUR_HUE}">'
               +   '<block type="colour_picker"></block>'
               +   '<block type="colour_random"></block>'
               +   '<block type="colour_rgb">'
               +     '<value name="RED">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">100</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="GREEN">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">50</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="BLUE">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">0</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               +   '<block type="colour_blend">'
               +     '<value name="COLOUR1">'
               +       '<shadow type="colour_picker">'
               +         '<field name="COLOUR">#ff0000</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="COLOUR2">'
               +       '<shadow type="colour_picker">'
               +         '<field name="COLOUR">#3333ff</field>'
               +       '</shadow>'
               +     '</value>'
               +     '<value name="RATIO">'
               +       '<shadow type="math_number">'
               +         '<field name="NUM">0.5</field>'
               +       '</shadow>'
               +     '</value>'
               +   '</block>'
               + '</category>'
               + '<sep></sep>'
               + '<category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>'
               + '<category name="Functions" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>'
               + '</xml>';


//    toolbox +=                + '<category name="Events">'
//                              +   '<block type="workflow_scene">'
//                              +     '<field name="NAME">name of this scene</field>'
//                              +   '</block>'
//                              +   '<block type="workflow_sensor"></block>'
//                              +   '<block type="workflow_time">'
//                              +     '<field name="Hour">10</field>'
//                              +     '<field name="Minute">10</field>'
//                              +     '<field name="Second">10</field>'
//                              +   '</block>'
//                              + '</category>'
//                              + '<category name="Services">'
//                              +   '<block type="setpercentage">'
//                              +     '<field name="property name"></field>'
//                              +     '<field name="brightness_percentage ">0</field>'
//                              +   '</block>'
//                              +   '<block type="switch">'
//                              +     '<field name="NAME">OPTION_ON</field>'
//                              +   '</block>'
//                              +   '<block type="check_status">'
//                              +     '<field name="NAME">OPTIONNAME</field>'
//                              +   '</block>'
//                              +   '<block type="delay">'
//                              +     '<field name="NAME">100</field>'
//                              +   '</block>'
//                              +   '<block type="getvalue"></block>'
//                              +   '<block type="set_value"></block>'
//                              + '</category>'
//                              + '<category name="Attributes">'
//                              +   '<block type="property_brightness"></block>'
//                              +   '<block type="property_temperature"></block>'
//                              + '</category>'
//                              + '<category name="Devices">'
//                              +   '<block type="device_brightness_sensor">'
//                              +     '<field name="NAME">BrightnessSensor</field>'
//                              +   '</block>'
//                              +   '<block type="device_air_conditioner">'
//                              +     '<field name="NAME">Air-Conditioner</field>'
//                              +   '</block>'
//                              +   '<block type="device_thermometer">'
//                              +     '<field name="NAME">Thermometer</field>'
//                              +   '</block>'
//                              +   '<block type="device_light">'
//                              +     '<field name="NAME">MainLight</field>'
//                              +   '</block>'
//                              +   '<block type="device_heater">'
//                              +     '<field name="NAME">Heater</field>'
//                              +   '</block>'
//                              +   '<block type="device_lamp">'
//                              +     '<field name="NAME">Bedside Lamp</field>'
//                              +   '</block>'
//                              + '</category>'
//                              + '<sep></sep>'

var toolbox_head = '<xml xmlns="https://developers.google.com/blockly/xml">'
var toolbox_tail =
// From XML string/file, replace ^\s?(\s*)?(<.*>)$ with \+$1'$2'
// Tweak first and last line.

'<category name="Logic" colour="%{BKY_LOGIC_HUE}">'
+   '<block type="controls_if"></block>'
+   '<block type="logic_compare"></block>'
+   '<block type="logic_operation"></block>'
+   '<block type="logic_negate"></block>'
+   '<block type="logic_boolean"></block>'
+   '<block type="logic_null" disabled="true"></block>'
+   '<block type="logic_ternary"></block>'
+ '</category>'
+ '<category name="Loops" colour="%{BKY_LOOPS_HUE}">'
+   '<block type="controls_repeat_ext">'
+     '<value name="TIMES">'
+       '<shadow type="math_number">'
+         '<field name="NUM">10</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="controls_repeat" disabled="true"></block>'
+   '<block type="controls_whileUntil"></block>'
+   '<block type="controls_for">'
+     '<value name="FROM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="TO">'
+       '<shadow type="math_number">'
+         '<field name="NUM">10</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="BY">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="controls_forEach"></block>'
+   '<block type="controls_flow_statements"></block>'
+ '</category>'
+ '<category name="Math" colour="%{BKY_MATH_HUE}">'
+   '<block type="math_number" gap="32">'
+     '<field name="NUM">123</field>'
+   '</block>'
+   '<block type="math_arithmetic">'
+     '<value name="A">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="B">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_single">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">9</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_trig">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">45</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_constant"></block>'
+   '<block type="math_number_property">'
+     '<value name="NUMBER_TO_CHECK">'
+       '<shadow type="math_number">'
+         '<field name="NUM">0</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_round">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">3.1</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_on_list"></block>'
+   '<block type="math_modulo">'
+     '<value name="DIVIDEND">'
+       '<shadow type="math_number">'
+         '<field name="NUM">64</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="DIVISOR">'
+       '<shadow type="math_number">'
+         '<field name="NUM">10</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_constrain">'
+     '<value name="VALUE">'
+       '<shadow type="math_number">'
+         '<field name="NUM">50</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="LOW">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="HIGH">'
+       '<shadow type="math_number">'
+         '<field name="NUM">100</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_random_int">'
+     '<value name="FROM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">1</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="TO">'
+       '<shadow type="math_number">'
+         '<field name="NUM">100</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="math_random_float"></block>'
+ '</category>'
+ '<category name="Text" colour="%{BKY_TEXTS_HUE}">'
+   '<block type="text"></block>'
+   '<block type="text_join"></block>'
+   '<block type="text_append">'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_length">'
+     '<value name="VALUE">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_isEmpty">'
+     '<value name="VALUE">'
+       '<shadow type="text">'
+         '<field name="TEXT"></field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_indexOf">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+     '<value name="FIND">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_charAt">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_getSubstring">'
+     '<value name="STRING">'
+       '<block type="variables_get">'
+         '<field name="VAR">text</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="text_changeCase">'
+     '<value name="TEXT">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_trim">'
+     '<value name="TEXT">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_count">'
+     '<value name="SUB">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_replace">'
+     '<value name="FROM">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+     '<value name="TO">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_reverse">'
+     '<value name="TEXT">'
+       '<shadow type="text"></shadow>'
+     '</value>'
+   '</block>'
+   '<label text="Input/Output:" web-class="ioLabel"></label>'
+   '<block type="text_print">'
+     '<value name="TEXT">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="text_prompt_ext">'
+     '<value name="TEXT">'
+       '<shadow type="text">'
+         '<field name="TEXT">abc</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<category name="Lists" colour="%{BKY_LISTS_HUE}">'
+   '<block type="lists_create_with">'
+     '<mutation items="0"></mutation>'
+   '</block>'
+   '<block type="lists_create_with"></block>'
+   '<block type="lists_repeat">'
+     '<value name="NUM">'
+       '<shadow type="math_number">'
+         '<field name="NUM">5</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="lists_length"></block>'
+   '<block type="lists_isEmpty"></block>'
+   '<block type="lists_indexOf">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_getIndex">'
+     '<value name="VALUE">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_setIndex">'
+     '<value name="LIST">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_getSublist">'
+     '<value name="LIST">'
+       '<block type="variables_get">'
+         '<field name="VAR">list</field>'
+       '</block>'
+     '</value>'
+   '</block>'
+   '<block type="lists_split">'
+     '<value name="DELIM">'
+       '<shadow type="text">'
+         '<field name="TEXT">,</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="lists_sort"></block>'
+   '<block type="lists_reverse"></block>'
+ '</category>'
+ '<category name="Colour" colour="%{BKY_COLOUR_HUE}">'
+   '<block type="colour_picker"></block>'
+   '<block type="colour_random"></block>'
+   '<block type="colour_rgb">'
+     '<value name="RED">'
+       '<shadow type="math_number">'
+         '<field name="NUM">100</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="GREEN">'
+       '<shadow type="math_number">'
+         '<field name="NUM">50</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="BLUE">'
+       '<shadow type="math_number">'
+         '<field name="NUM">0</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+   '<block type="colour_blend">'
+     '<value name="COLOUR1">'
+       '<shadow type="colour_picker">'
+         '<field name="COLOUR">#ff0000</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="COLOUR2">'
+       '<shadow type="colour_picker">'
+         '<field name="COLOUR">#3333ff</field>'
+       '</shadow>'
+     '</value>'
+     '<value name="RATIO">'
+       '<shadow type="math_number">'
+         '<field name="NUM">0.5</field>'
+       '</shadow>'
+     '</value>'
+   '</block>'
+ '</category>'
+ '<sep></sep>'
+ '<category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>'
+ '<category name="Functions" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>'
+ '</xml>';
/* END BLOCKLY_TOOLBOX_XML ASSIGNMENT. DO NOT EDIT. */
