'use strict'

let AWS = require('aws-sdk')

module.exports = {
  id: 'ec2_run_instance',
  name: 'EC2 Run Instance',
  description: 'Given an ami_id creates an EC2 instance on AWS.',
  icon: '',
  options: {
    ami_id: {
      name: 'AMI ID',
      description: 'Provide the AMI ID to use when creating this EC2 instance.',
      required: true
    },
    instance_type: {
      name: 'Instance Type',
      description: 'Provide the [instance type](https://aws.amazon.com/ec2/instance-types/) you would like to create. e.g. t2.medium',
      required: true
    },
    region: {
      name: 'AWS Region',
      description: 'Specific the EC2 region you would like to start this instance in.',
      required: false
    }
  },
  execute: (stage) => {
    let opts = {
      ImageId: stage.option('ami_id') || 'ami-1624987f',
      InstanceType: stage.option('instance_type') || 't1.micro',
      MinCount: stage.option('min_count') || 1,
      MaxCount: stage.option('max_count') || 1
    }
    let ec2 = new AWS.EC2({
      region: stage.option('region') || 'us-east-1'
    })

    stage.log('EC2 | STARTED | ' + JSON.stringify(opts))
    stage.running()

    ec2.runInstances(opts, (err, data) => {
      if (err) {
        stage.log('EC2 | FAILED | ' + JSON.stringify(err))
        stage.fail(err)
      } else {
        stage.log('EC2 | SUCCESS | ' + JSON.stringify(data))
        stage.succeed(data)
      }
    })
  }
}
