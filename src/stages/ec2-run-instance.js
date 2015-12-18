'use strict'

let AWS = require('aws-sdk')

const ec2 = new AWS.EC2({
  region: 'us-east-1'
})

module.exports = {
  name: 'ec2-run-instance',
  description: 'Given an ami_id creates an EC2 instance on AWS.',
  icon: '',
  options: {
    ami_id: {
      required: true
    },
    region: {}
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
