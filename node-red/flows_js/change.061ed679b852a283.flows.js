const Node = {
  "id": "061ed679b852a283",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "Setup static metrics object for file extraction",
  "rules": [
    {
      "t": "set",
      "p": "metrics",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "metrics.name",
      "pt": "msg",
      "to": "etl_extract_status",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.comment",
      "pt": "msg",
      "to": "file extraction result",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metric.type",
      "pt": "msg",
      "to": "gauge",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.datasource",
      "pt": "msg",
      "to": "sftp://testsource2.se",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.message",
      "pt": "msg",
      "to": "statusmessage",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "metrics.value",
      "pt": "msg",
      "to": "statuscode",
      "tot": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 500,
  "wires": [
    [
      "729b78d17378af0c"
    ]
  ],
  "_order": 8
}

module.exports = Node;