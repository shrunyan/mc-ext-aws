'use strict'

let ec2RunInstance = require('./src/stages/ec2-run-instance')

module.exports = {
  vendor: 'mc',
  name: 'aws',
  description: 'AWS package from space race.',
  stages: {
    ec2_run_instance: ec2RunInstance
  },
  logs: {}
}
