import RouterBuilder from '.';
import RootPath from '../PathPage/RootPath';

describe('RouterBuilder', () => {
  const instance: RouterBuilder = new RouterBuilder();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('deve instanciar uma classe RouterBuilder', () => {
    expect(instance).toBeInstanceOf(RouterBuilder);
  });
  test('deve ser possível adicionar um path', () => {
    const spyOnRouterBuilder = jest.spyOn(instance, 'addPath');
    instance.addPath(RootPath.MAIN);
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
  });
  test('deve ser possível adicionar um Element', () => {
    const spyOnRouterBuilder = jest.spyOn(instance, 'addElement');
    instance.addElement(<span>elemento react</span>);
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
  });
});
