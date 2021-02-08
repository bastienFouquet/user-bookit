module.exports.swaggerConfig = {
  disable: false,
  //pathToGenerateFile: '/',
  //fileName: 'swagger.json',
  defaults: {
    pathsToIgnore: ['api/v1/'],
    responses: {
      '200': {
        description: 'The requested resource'
      },
      '404': {
        description: 'Resource not found'
      },
      '500': {
        description: 'Internal server error'
      }
    },
    security: [{
      'Authorization': []
    }]
  },
  swagger: {
    swagger: '2.0',
    info: {
      title: 'User service a BookIt',
      description: 'This is the doc of user service',
      termsOfService: '',
      contact: {
        name: '',
        url: '',
        email: ''
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      },
      version: '1.0.0'
    },
    host: 'localhost:8081',
    basePath: '/',
    schemes: [
      'http',
    ],
    externalDocs: '',
    paths: {},
    definitions: {},
    securityDefinitions: {
      'Authorization': {
        'type': 'apiKey',
        'description': 'user JWT Auth Token',
        'name': 'Authorization',
        'in': 'header',
      },
    }
  }
};
