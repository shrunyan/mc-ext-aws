let tape = require('tape')
let AWS = require('aws-sdk')

// let ec2 = require('../../src/stages/ec2')
let ec2 = new AWS.EC2()

let params = {
  ImageId: 'ami-1624987f', // Amazon Linux AMI x86_64 EBS
  InstanceType: 't1.micro',
  MinCount: 1, MaxCount: 1
};

test('AWS Connects', (t) => {
  t.plan(1)

  ec2.runInstances(params)

})
