import { RouteObject } from 'react-router-dom';
import RouterBuilder from '.';
import RootPath from '../PathPage/RootPath';

describe('RouterBuilder', () => {
  const instance: RouterBuilder = new RouterBuilder();

  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('deve instanciar uma classe RouterBuilder', () => {
    expect(instance).toBeInstanceOf(RouterBuilder);
  });
  test('deve ser possível adicionar um path', () => {
    const spyOnRouterBuilder = jest.spyOn(instance, 'addPath');
    instance.addPath(RootPath.MAIN);
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
    spyOnRouterBuilder.mockClear();
  });
  test('deve ser possível adicionar um Element', () => {
    const spyOnRouterBuilder = jest.spyOn(instance, 'addElement');
    instance.addElement(<span>elemento react</span>);
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
    spyOnRouterBuilder.mockClear();
  });
  test('deve ser possível adicionar um ErrorElement', () => {
    const spyOnRouterBuilder = jest.spyOn(instance, 'addChildren');
    const route: RouteObject = {};
    instance.addChildren(route);
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
    spyOnRouterBuilder.mockClear();
  });
  test('deve ser possível realizar um build', () => {
    jest.clearAllMocks();
    const spyOnRouterBuilder = jest.spyOn(instance, 'build');

    const a = instance.build();
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
    expect(a).toBeDefined();
    expect(spyOnRouterBuilder).toHaveReturned();
    expect(spyOnRouterBuilder).toHaveReturnedTimes(1);
    spyOnRouterBuilder.mockClear();
  });
});
