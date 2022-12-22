import RouterBuilder from '.';

describe('RouterBuilder', () => {
  let instance: RouterBuilder;

  beforeEach(() => {
    instance = new RouterBuilder();
  });
  test('deve instanciar uma classe RouterBuilder', () => {
    expect(instance).toBeInstanceOf(RouterBuilder);
  });
});
