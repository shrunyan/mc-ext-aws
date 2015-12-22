'use strict'

let AWS = require('aws-sdk')

const ec2 = new AWS.EC2({
  region: 'us-east-1'
})

module.exports = {
  id: 'ec2-run-instance',
  name: 'EC2 Run Instance',
  description: 'Given an ami_id creates an EC2 instance on AWS.',
  icon: '',
  options: {
    ami_id: {
      name: 'AMI ID',
      description: 'Provide the AMI ID to use when creating this EC2 instance.',
      required: true
    },
    region: {
      name: 'AWS Region',
      description: 'Specific the EC2 region you would like to start this instance in.',
      required: false
    }
  },
  execute: (stage) => {
    let opts = stage.options()

    stage.log(`Begin EC2 instance creation for ami_id: ${opts.ImageId}`)

    ec2.runInstances(opts, (err, data) => {
      if (err) {
        stage.log(`Failed to create EC2 instance: ${err}`)
        stage.fail(err)
      } else {
        stage.log(`Successfully created EC2 instance: ${err}`)
        stage.succeed(data)
      }
    })
  }
}
