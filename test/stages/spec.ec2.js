'use strict'

let test = require('tape')
let stage = require('../stub.stage')
let ec2 = require('../../src/stages/ec2')

test('Can create EC2 instance', (t) => {
  t.plan(1)

  stage._opts = {
    ImageId: 'ami-1624987f',
    InstanceType: 't1.micro',
    MinCount: 1,
    MaxCount: 1,
    DryRun: true
  }

  stage.on('fail', (msg) => t.fail(msg))
  stage.on('pass', (msg) => t.pass(msg))

  ec2.execute(stage)
})
