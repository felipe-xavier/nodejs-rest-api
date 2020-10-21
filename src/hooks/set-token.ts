// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { login } = context.params;

    const auth = await context.app
      .service('users/auth')
      .create(login, context.params);

    context.result.accessToken = auth.accessToken;

    return context;
  };
};
