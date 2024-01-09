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
  var code = '    sheet<br>';
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
  var code = `${text_loop_counts}`;
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

javascript.javascriptGenerator.forBlock['get_last_low'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = '    var lastRow = sheet.getLastRow();<br>';
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};
javascript.javascriptGenerator.forBlock['week'] = function (block, generator) {
  this.setNextStatement(true, null);
  // TODO: Assemble javascript into code variable.
  var code = "      var daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];<br>";
  code += "    var week_num =date.getDay();<br>";
  code += "    var week = daysOfWeek[week_num];<br>";
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};

javascript.javascriptGenerator.forBlock['block_input'] = function (block, generator) {
  var cell_numm = generator.valueToCode(block, 'cell_num', javascript.Order.ATOMIC);
  var cell_contents = generator.valueToCode(block, 'cell_contents', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `sheet.getRange(${cell_numm}).setValue(${cell_contents});<br>`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
javascript.javascriptGenerator.forBlock['string_variable'] = function(block, generator) {
  var text_string_variable = block.getFieldValue('string_variable');
  // TODO: Assemble javascript into code variable.
  var code = `"${text_string_variable}"`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['hour_variable'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'hours';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
javascript.javascriptGenerator.forBlock['min_variable'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'min';
  // TODO: Change ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
javascript.javascriptGenerator.forBlock['day_variable'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'day';
  // TODO: Change ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
javascript.javascriptGenerator.forBlock['hour_variable'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'hours';
  // TODO: Change ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
javascript.javascriptGenerator.forBlock['month_variable'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'month';
  // TODO: Change ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
javascript.javascriptGenerator.forBlock['week_variable'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'week';
  // TODO: Change ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['last_low_variable'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'lastRow';
  // TODO: Change ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['calculate'] = function (block, generator) {
  var value_1 = generator.valueToCode(block, 'value_1', javascript.Order.ATOMIC);
  var cal = block.getFieldValue('cal');
  var value_2 = generator.valueToCode(block, 'value_2', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `${value_1}${cal}${value_2}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['getrange_int'] = function (block, generator) {
  var retu_variable = generator.valueToCode(block, 'retu_variable', javascript.Order.ATOMIC);
  var gyou_variable = generator.valueToCode(block, 'gyou_variable', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `${retu_variable},${gyou_variable}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['get_value'] = function (block, generator) {
  var get_value = generator.valueToCode(block, 'get_value', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `var get_value = sheet.getRange(${get_value}).getValue();<br>`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code
};

javascript.javascriptGenerator.forBlock['get_value_data'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = 'get_value';
  // TODO: Change ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['send_mail'] = function(block, generator) {
  var value_mail_sento = generator.valueToCode(block, 'mail_sento', javascript.Order.ATOMIC);
  var value_mail_title = generator.valueToCode(block, 'mail_title', javascript.Order.ATOMIC);
  var value_mail_body = generator.valueToCode(block, 'mail_body', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `GmailApp.sendEmail(${value_mail_sento}, ${value_mail_title}, ${value_mail_body});<br> `;
  return code;
};

javascript.javascriptGenerator.forBlock['combine_block'] = function(block, generator) {
  var value_combine_1 = generator.valueToCode(block, 'combine_1', javascript.Order.ATOMIC);
  var value_combine_2 = generator.valueToCode(block, 'combine_2', javascript.Order.ATOMIC);
  var value_combine_3 = generator.valueToCode(block, 'combine_3', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `${value_combine_1}+${value_combine_2}+${value_combine_3}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};