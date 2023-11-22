javascript.javascriptGenerator.forBlock['function_name'] = function (block, generator) {
  var text_func_name = block.getFieldValue('func_name');
  var statements_func = generator.statementToCode(block, 'func');
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.

  // 1. Statement input内のコードを取得して、現在のコードに追加する
  var code = `function ${text_func_name}() {<br>`;
  code += `${statements_func}`;
  code += `};\n`;
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};


javascript.javascriptGenerator.forBlock['get_info'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();<br>';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};

javascript.javascriptGenerator.forBlock['program_run'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    sheet';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};

javascript.javascriptGenerator.forBlock['getrange'] = function (block, generator) {
  var text_getrange = block.getFieldValue('getRange');
  // TODO: Assemble javascript into code variable.
  var code = `sheet = sheet.getRange("${text_getrange}");<br>`;

  // 改行文字を<br>に変換
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;

  return code;
};

javascript.javascriptGenerator.forBlock['setValue'] = function (block, generator) {
  var text_setValue = block.getFieldValue('setValue');
  // TODO: Assemble javascript into code variable.
  var code = `sheet = sheet.setValue('${text_setValue}');<br>`;


  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;

  return code;
};

Blockly.JavaScript['my_custom_function'] = function (block) {
  var value_if0 = Blockly.JavaScript.valueToCode(block, 'IF0', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do0 = Blockly.JavaScript.statementToCode(block, 'DO0');

  // 1. Statement input内のコードを取得して、現在のコードに追加する
  var code = `    if (${value_if0}) {\n`;
  code += statements_do0;
  code += `}\n`;

  return code;
};

javascript.javascriptGenerator.forBlock['logic_compare'] = function (block, generator) {
  var value_eqol_mae = generator.valueToCode(block, 'A', javascript.Order.ATOMIC);
  var dropdown_equl = block.getFieldValue('OP');
  var value_eqol_ato = generator.valueToCode(block, 'B', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `${value_eqol_mae}${dropdown_equl}${value_eqol_ato}<br>`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['logic_sample'] = function (block, generator) {
  var text_logic_sample = block.getFieldValue('logic_sample');
  // TODO: Assemble javascript into code variable.
  var code = `sheet.getRange('${text_logic_sample}').getValue()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['logic_sample2'] = function (block, generator) {
  var text_logic_sample2 = block.getFieldValue('logic_sample_Japanese');
  // TODO: Assemble javascript into code variable.
  var code = `"${text_logic_sample2}"`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['loop_counts'] = function (block, generator) {
  var text_loop_counts = block.getFieldValue('loop_counts');
  // TODO: Assemble javascript into code variable.
  var code = `"${text_loop_counts}"`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['controls_repeat_ext'] = function (block, generator) {
  var Num_TIMES = generator.valueToCode(block, 'TIMES', javascript.Order.ATOMIC);
  var input_statement = generator.statementToCode(block, 'DO');
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.

  // 1. Statement input内のコードを取得して、現在のコードに追加する
  var code = `for( var i = 1 ; i <= ${Num_TIMES}; i++ ) {<br>`;
  code += `${input_statement}<br>`;
  code += `};\n`;
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};

javascript.javascriptGenerator.forBlock['get_date'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    var date  =  new Date();<br>';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};

javascript.javascriptGenerator.forBlock['hours'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    var hours = date.getHours();<br>';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};

javascript.javascriptGenerator.forBlock['min'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    var min = date.getMinutes();<br>';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};
javascript.javascriptGenerator.forBlock['day'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    var day = date.getDate();<br>';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};
javascript.javascriptGenerator.forBlock['month'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    var month = date.getMonth() + 1;<br>';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};
javascript.javascriptGenerator.forBlock['week'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = "      var daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];<br>";
  code += "    var week_num =date.getDay()<br>;";
  code += "    var week = daysOfWeek[week_num];<br>";
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};