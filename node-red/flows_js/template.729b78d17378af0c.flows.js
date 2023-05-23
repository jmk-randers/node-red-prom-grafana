const Node = {
  "id": "729b78d17378af0c",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 760,
  "y": 500,
  "wires": [
    []
  ],
  "_order": 9
}

Node.template = `
# HELP {{metrics.name}} {{metrics.comment}}
# TYPE {{metrics.name}} {{metric.type}}
{{metrics.name}}{datasource="{{{metrics.datasource}}}",phase="{{metrics.phase}}",message="{{metrics.message}}" } {{metrics.value}}
`

module.exports = Node;