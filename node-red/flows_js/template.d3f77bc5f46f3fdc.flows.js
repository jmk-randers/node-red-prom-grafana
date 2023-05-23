const Node = {
  "id": "d3f77bc5f46f3fdc",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Create metrics for Prometheus",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 280,
  "wires": [
    [
      "a9b79147013b6024",
      "efb40c415f2c30ad"
    ]
  ],
  "_order": 3
}

Node.template = `
# HELP {{flow.metrics.values.name}} {{flow.metrics.values.comment}}
# TYPE {{flow.metrics.values.name}} {{flow.metrics.values.type}}
{{flow.metrics.values.name}}{ {{flow.metrics.keys[3]}}="{{{flow.metrics.values.datasource}}}", {{flow.metrics.keys[4]}} ="{{flow.metrics.values.phase}}",{{flow.metrics.keys[5]}}="{{flow.metrics.values.message}}" } {{flow.metrics.values.value}}
`

module.exports = Node;