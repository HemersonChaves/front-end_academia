import RouterBuilder from '.';
import RootPath from '../PathPage/RootPath';

describe('RouterBuilder', () => {
  const instance: RouterBuilder = new RouterBuilder();
  const spyOnRouterBuilder = jest.spyOn(instance, 'addPath');

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('deve instanciar uma classe RouterBuilder', () => {
    expect(instance).toBeInstanceOf(RouterBuilder);
  });
  test('deve ser possível adicionar um path ', () => {
    instance.addPath(RootPath.MAIN);
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
  });
});
