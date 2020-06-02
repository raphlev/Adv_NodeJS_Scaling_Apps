const {
  fork
} = require('child_process')

const processes = [
  fork('./01-app', ['3001']),
  fork('./01-app', ['3002']),
  fork('./01-app', ['3003'])
]

console.log(`forked ${processes.length} processes`)
