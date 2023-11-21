Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "loop_counts",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "loop_counts",
        "text": "1"
      }
    ],
    "output": "Number",
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  }
    , {
    'type': 'controls_repeat_ext',
    'message0': '%{BKY_CONTROLS_REPEAT_TITLE}',
    'args0': [{
      'type': 'input_value',
      'name': 'TIMES',
      'check': 'Number',
    }],
    'message1': '%{BKY_CONTROLS_REPEAT_INPUT_DO} %1',
    'args1': [{
      'type': 'input_statement',
      'name': 'DO',
    }],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_CONTROLS_REPEAT_TOOLTIP}',
    'helpUrl': '%{BKY_CONTROLS_REPEAT_HELPURL}',
  },
    , {
    "type": "logic_sample2",
    "message0": "文字列 %1",
    "args0": [
      {
        "type": "field_input",
        "name": "logic_sample_Japanese",
        "text": "こんにちは"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
    , {
    "type": "logic_sample",
    "message0": "値を確認 %1",
    "args0": [
      {
        "type": "field_input",
        "name": "logic_sample",
        "text": "A1"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
    , {
    'type': 'logic_compare',
    'message0': '%1 %2 %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
      },
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['=', '=='],
          ['\u2260', '=!'],
          ['\u200F<', 'LT'],
          ['\u200F\u2264', 'LTE'],
          ['\u200F>', 'GT'],
          ['\u200F\u2265', 'GTE'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'B',
      },
    ],
    'inputsInline': true,
    'output': 'Boolean',
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_LOGIC_COMPARE_HELPURL}',
    'extensions': ['logic_compare', 'logic_op_tooltip'],
  },

  {
    "type": "function_name",
    "message0": "関数名 %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "func_name",
        "text": "default"
      },
      {
        "type": "input_statement",
        "name": "func",
        "check": "String"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_info",
    "message0": "スプレッドシートの情報を取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "getrange",
    "message0": "セルの範囲 %1",
    "args0": [
      {
        "type": "field_input",
        "name": "getRange",
        "text": "A1"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "setValue",
    "message0": "入力する値 %1",
    "args0": [
      {
        "type": "field_input",
        "name": "setValue",
        "text": "hello_world"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "program_run",
    "message0": "実行する",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    'type': 'controls_if',
    'message0': '%{BKY_CONTROLS_IF_MSG_IF} %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'IF0',
        'check': '',
      },
    ],
    'message1': '%{BKY_CONTROLS_IF_MSG_THEN} %1',
    'args1': [
      {
        'type': 'input_statement',
        'name': 'DO0',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_CONTROLS_IF_HELPURL}',
    'suppressPrefixSuffix': true,
    'mutator': 'controls_if_mutator',
    'extensions': ['controls_if_tooltip'],
  },
  {
    "type": "get_date",
    "message0": "時間データを取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hours",
    "message0": "時データを取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "min",
    "message0": "分を取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "day",
    "message0": "日付データを取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "month",
    "message0": "月のデータを取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "week",
    "message0": "週の曜日データを取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  ]
);



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
  const outputElement = document.getElementById("get_date");
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
  var code = "      var daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];<br>"
  code += "    var week_num =date.getDay()<br>;"
  code += "    var week = daysOfWeek[week_num];<br>";
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = code;
  return code;
};