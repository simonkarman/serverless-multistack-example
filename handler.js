'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: {
          resource: event.resource,
          httpMethod: event.httpMethod,
          queryStringParameters: event.queryStringParameters,
          pathParameters: event.pathParameters,
          apiId: event.requestContext.apiId,
        },
        environmentVariables: process.env,
      },
      null,
      2
    ),
  };
};
