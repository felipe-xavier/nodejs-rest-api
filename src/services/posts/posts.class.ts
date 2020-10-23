import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import createApplication from '@feathersjs/feathers';

export class Posts extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  create(data: Partial<any>, params: createApplication.Params): Promise<any> {
    // Authenticated user
    const {user} = params;

    const postData = {
      ['author_id']: user.id,
      ...data
    };

    return super.create(postData, params);
  }

  find(params?: createApplication.Params): Promise<any[] | createApplication.Paginated<any>> {
    if (params?.query) {
      params.query.$sort = {createdAt: -1};
    }

    return super.find(params);
  }
}
