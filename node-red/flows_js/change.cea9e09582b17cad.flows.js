const Node = {
  "id": "cea9e09582b17cad",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Get values for log",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "metrics",
      "tot": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1150,
  "y": 100,
  "wires": [
    [
      "bec2b5ea4586d29e"
    ]
  ],
  "_order": 12
}

module.exports = Node;