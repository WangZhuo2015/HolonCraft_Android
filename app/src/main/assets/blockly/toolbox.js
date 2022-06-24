/**
 * Construct the blocks required by the flyout for the events category.
 * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
 * @return {T[]} Array of XML block elements.
 */
function getEvents(){
    return custom_blocks.filter(it=>it.type.startsWith('event'));
}

function getActuators(){
    return custom_blocks.filter(it=>it.type.startsWith('actuator'));
}

function getServices(){
    return custom_blocks.filter(it=>it.type.startsWith('service'));
}
function getSensors(){
    return custom_blocks.filter(it=>it.type.startsWith('sensor'));
}


var eventsFlyoutCallback = function(workspace) {
  var xmlList = [];
  var blocks = getEvents();
    for (var i = 0; i < blocks.length; i++) {
      var blockText = '<block type="'+blocks[i].type+'"></block>';
//      var blockText = '<block type="text"><field name="TEXT"></field></block>';
      var block = Blockly.Xml.textToDom(blockText);
      xmlList.push(block);
    }
  return xmlList;
};

var servicesFlyoutCallback = function(workspace) {
  var xmlList = [];
  var blocks = getServices()
    for (var i = 0; i < blocks.length; i++) {
      var blockText = '<block type="'+blocks[i].type+'"></block>';
      var block = Blockly.Xml.textToDom(blockText);
      xmlList.push(block);
    }
  return xmlList;
};

var sensorsFlyoutCallback = function(workspace) {
  var xmlList = [];
  var blocks = getSensors()
//  console.log("================================================")
//  console.log(JSON.stringify(custom_blocks))
//  console.log(JSON.stringify(blocks))
    for (var i = 0; i < blocks.length; i++) {
      var blockText = '<block type="'+blocks[i].type+'"></block>';
      var block = Blockly.Xml.textToDom(blockText);
      xmlList.push(block);
    }
  return xmlList;
};

var actuatorsFlyoutCallback = function(workspace) {
  var xmlList = [];
  var blocks = getActuators()
    for (var i = 0; i < blocks.length; i++) {
    var blockText = '<block type="'+blocks[i].type+'"></block>';
      var block = Blockly.Xml.textToDom(blockText);
      xmlList.push(block);
    }
  return xmlList;
};
holon_workspace.registerToolboxCategoryCallback(
  'SERVICE', servicesFlyoutCallback);
holon_workspace.registerToolboxCategoryCallback(
  'EVENT', eventsFlyoutCallback);
holon_workspace.registerToolboxCategoryCallback(
  'ACTUATORS', actuatorsFlyoutCallback);
holon_workspace.registerToolboxCategoryCallback(
  'SENSORS', sensorsFlyoutCallback);

function updateFunction(event) {
  if (event.type == Blockly.Events.BLOCK_MOVE){
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xml_text = Blockly.Xml.domToText(xml);
    var code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace);
    JSInterface.saveBlocks(xml_text,code)
  }
}
holon_workspace.addChangeListener(updateFunction);



//holon_workspace.registerToolboxCategoryCallback(
//  'SERVICE', servicesFlyoutCallback);
//holon_workspace.registerToolboxCategoryCallback(
//  'EVENT', eventsFlyoutCallback);
//holon_workspace.registerToolboxCategoryCallback(
//  'ATTRIBUTE', attributesFlyoutCallback);
//holon_workspace.registerToolboxCategoryCallback(
//  'DEVICE', devicesFlyoutCallback);
