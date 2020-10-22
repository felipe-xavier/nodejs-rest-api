import assert from 'assert';
import app from '../../src/app';

describe('\'posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('posts');

    assert.ok(service, 'Registered the service');
  });

  it('creates and processes posts, checks user id', async () => {
    // Create a new user we can use for testing
    const user = await app.service('users').create({
      username: 'messagetest@example.com',
      password: 'super_secret'
    });

    // The posts service call params (with the user we just created)
    const params = { user };
    const post = await app.service('posts').create({
      title: 'a title',
      body: 'the body'
    }, params);

    assert.strictEqual(post.title, 'a title');
    assert.strictEqual(post.body, 'the body');
    // `userId` should be set to passed users it
    assert.strictEqual(post.author_id, user.id);

  });
});
