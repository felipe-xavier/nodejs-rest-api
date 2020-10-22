import * as authentication from '@feathersjs/authentication';
import {disallow} from 'feathers-hooks-common';
import setAuthorId from '../../hooks/set-author-id';
import sortPostsQuery from '../../hooks/sort-posts-query';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [sortPostsQuery()],
    get: [],
    create: [authenticate('jwt'), setAuthorId()],
    update: [disallow()],
    patch: [disallow()],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
