# Serverless Multistack Example
This project shows an example of splitting an AWS project, build using the [Serverless Framework](https://www.serverless.com), into multiple CloudFormation stacks to avoid the 200 resources limit that AWS imposes on CloudFormation stacks.

The project manages to maintain the use of one single api gateway. To achieve this the [serverless-import-apigateway](https://www.serverless.com/plugins/serverless-import-apigateway) plugin was used. This plugin makes it possible to reference an existing api gateway that will be used for the resources of the sub stack.

This project also shows how you can then use resources from the root stack in the sub stacks by using outputs and imports, which are default features in AWS CloudFormation.

## Usage
To deploy these stacks to your AWS account run the following commands:
```bash
# setup aws credentials on your local machine
aws configure

# install dependencies
npm install

# deploy the root stack and sub stack to aws
npm run deploy
```

## Contributors
- *Initial Work* - [Simon Karman](https://www.simonkarman.nl) and Benthe Hagemeijer
