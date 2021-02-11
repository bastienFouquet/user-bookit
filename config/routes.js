/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  /**
   * UserController
   */
  'POST /auth': {
    controller: 'UserController',
    action: 'auth',
    swagger: {
      summary: 'Authentication by return a JWT',
      responses: {
        '200': {
          description: 'Succeed'
        },
        '500': {
          description: 'Error'
        }
      },
      parameters: [{
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          properties: {
            login: {
              type: 'string',
              required: true
            },
            password: {
              type: 'string',
              required: true
            }
          }
        }
      }],
      security: []
    }
  },
  'POST /users': {
    controller: 'UserController',
    action: 'register',
    swagger: {
      summary: 'Register a user',
      responses: {
        '200': {
          description: 'Succeed'
        },
        '500': {
          description: 'Error'
        }
      },
      parameters: [{
        in: 'body',
        name: 'body',
        required: true,
        schema: {
          properties: {
            login: {
              type: 'string',
              required: true
            },
            password: {
              type: 'string',
              required: true
            },
            confirmationPassword: {
              type: 'string',
              required: true
            }
          }
        }
      }],
      security: []
    }
  },
};
