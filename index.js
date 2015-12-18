'use strict'

module.exports = {
  vendor: 'mc',
  name: 'aws',
  description: 'AWS package from space race.',
  stages: {
    ec2_run_instance: require('./src/stages/ec2-run-instance')
  },
  logs: {}
}
