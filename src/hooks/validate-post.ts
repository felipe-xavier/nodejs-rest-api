// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import {postsSchema} from '../services/posts/posts.schema';
import {BadRequest} from '@feathersjs/errors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {

    await postsSchema.validate(context.data)
      .catch(err => {
        throw new BadRequest(err.errors[0]);
      });

    return context;
  };
};
