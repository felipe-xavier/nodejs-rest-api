import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import createApplication from '@feathersjs/feathers';

export class Users extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  create(data: Partial<any>, params?: createApplication.Params): Promise<any> {
    return super.create(data, params).catch(err => {
      // remove hashed password for the potential user.
      if (err.errors[0]?.instance) {
        delete err.errors[0].instance;
      }
      throw err;
    });
  }
}
