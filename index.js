'use strict'

module.exports = {
  vendor: 'mc',
  id: 'aws',
  name: 'AWS',
  description: 'AWS package from space race.',
  stages: [
    require('./src/stages/ec2-run-instance')
  ],
  logs: []
}
