'use strict'

let ec2 = require('./src/stages/ec2')

module.exports = {
  vendor: 'mc',
  name: 'aws',
  description: 'AWS package from space race.',
  stages: {
    createEc2: ec2.createEc2
  },
  logs: {}
}
