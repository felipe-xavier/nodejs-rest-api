import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import {disallow} from 'feathers-hooks-common';
import setLogin from '../../hooks/set-login';
import setToken from '../../hooks/set-token';
import validateUser from '../../hooks/validate-user';

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateUser(), setLogin(), hashPassword('password')],
    update: [ disallow() ],
    patch: [ disallow() ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [setToken()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
