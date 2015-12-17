/**
 * AWS EC2 tests
 * IMPORTANT: DryRun all tests!!!
 */
var test = require('tape')
var AWS = require('aws-sdk')
var helpers = require('../helpers')
// var ec2 = require('../../src/stages/ec2')

const ec2 = new AWS.EC2({
  region: 'us-east-1',
  DryRun: true
})

// Ensure we can connect to AWS
// by doing a dry run of a key gen
// @see http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createKeyPair-property
test('AWS Connects', (t) => {
  t.plan(1)
  ec2.createKeyPair({
    KeyName: 'TEST',
    DryRun: true
  }, helpers.handleDryRun.bind(t))
})

test('AWS can create instance', (t) => {
  t.plan(1)
  ec2.runInstances({
    ImageId: 'ami-1624987f',
    InstanceType: 't1.micro',
    MinCount: 1,
    MaxCount: 1,
    DryRun: true
  }, helpers.handleDryRun.bind(t))
})
