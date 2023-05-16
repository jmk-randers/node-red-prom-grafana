const Node = {
  "id": "afcf0891cb8f474d",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 820,
  "y": 80,
  "wires": [
    [
      "da33bb33c0ec0920"
    ]
  ],
  "_order": 5
}

Node.template = `
{
    "op": "inc",
    "val": 1,
    "labels": {
        "source": "sftp.sd.dk",
        "phase": "extract",
        "status" : "success"
    }
}
`

module.exports = Node;