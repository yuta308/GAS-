Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "loop_counts",
    "message0": "%1",
    "args0": [
      {
        "type": "field_number",
        "name": "loop_counts",
        "value": 0
      }
    ],
    "output": "Number",
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
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
  {
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
  },
  {
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
  },
  {
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
    "message0": "時データを取得(hour)",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "min",
    "message0": "分情報を取得(minutes)",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "day",
    "message0": "日付データを取得(day)",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "month",
    "message0": "月のデータを取得(month)",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "week",
    "message0": "週の曜日データを取得(week)",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_last_low",
    "message0": "最終行を取得",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "calculate",
    "message0": "%1 %2 %3 %4",
    "args0": [
      {
        "type": "input_value",
        "name": "value_1",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "cal",
        "options": [
          [
            "+",
            "+"
          ],
          [
            "-",
            "-"
          ],
          [
            "*",
            "*"
          ],
          [
            "/",
            "/s"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "value_2",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "block_input",
    "message0": "どこのセルに %1 %2 どの値を %3 %4 入力する",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "cell_num",
        "check": "String"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "cell_contents",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "string_variable",
    "message0": "文字列 %1",
    "args0": [
      {
        "type": "field_input",
        "name": "string_variable",
        "text": "ここに入力"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hour_variable",
    "message0": "時間(hour)",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "min_variable",
    "message0": "分(min)",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "day_variable",
    "message0": "日付(day)",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hour_variable",
    "message0": "時間(hour)",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "month_variable",
    "message0": "月(month)",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "week_variable",
    "message0": "週(week)",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "last_low_variable",
    "message0": "最終行の行番号",
    "output": "Number",
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "getrange_int",
    "message0": "列 %1 %2 行 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "retu_variable",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "gyou_variable",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_value",
    "message0": "対象セル %1 %2 セルの情報を取得する",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "get_value",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_value_data",
    "message0": "取得したセルデータ",
    "output": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "send_mail",
    "message0": "送り先 %1 件名 %2 本文 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "mail_sento",
        "check": [
          "String",
          "Array"
        ]
      },
      {
        "type": "input_value",
        "name": "mail_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "mail_body",
        "check": "String"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "combine_block",
    "message0": "文字列を結合 %1 %2 %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "combine_1",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "combine_2",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "combine_3",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "on_start",
    "message0": "関数を定義 %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "onstart",
        "check": "String"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]
);