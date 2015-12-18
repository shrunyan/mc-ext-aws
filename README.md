# AWS Extension for [Mission Control](https://github.com/space-race/mission-control)
#### Extends Mission Control with AWS services.

This is a [Mission Control](https://github.com/space-race/mission-control) extension for consuming AWS services in your pipelines.

[AWS Nodejs SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/_index.html)

## Installing

```
npm install --save mc-ext-aws
```

## Setting up Your AWS Credentials

This extension requires you created and set your AWS credentials in your `~/.aws/credentials` file per the [AWS documentation](http://aws.amazon.com/sdk-for-node-js/). It should look like this:
  
    [default]
    aws_access_key_id = your_access_key
    aws_secret_access_key = your_secret_key


## EC2

Implemented Methods:

- [runInstances](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property)
