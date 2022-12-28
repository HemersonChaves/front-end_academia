import { RouteObject } from 'react-router-dom';
import { isValidElement } from 'react';
import RouterBuilder from '../../../../src/router/RouterBuilder';
import RootPath from '../../../../src/router/PathPage/RootPath';

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

    const momckRouterBuilder: RouteObject = instance.build();
    expect(momckRouterBuilder).toBeDefined();
    expect(spyOnRouterBuilder).toBeCalledTimes(1);
    expect(spyOnRouterBuilder).toHaveReturned();
    expect(spyOnRouterBuilder).toHaveReturnedTimes(1);
    spyOnRouterBuilder.mockClear();
  });
  test('deve ser possível realizar um build com valores corretos', () => {
    instance.addElement(<span>valido</span>);
    instance.addPath(RootPath.MAIN);
    instance.addErrorElement(<span>invalido</span>);
    instance.addChildren({
      element: <span>child</span>,
      path: '/',
      errorElement: <span>child</span>,
    });
    const mockRouterBuilder = instance.build();
    expect(mockRouterBuilder).toBeDefined();
    expect(isValidElement(mockRouterBuilder.element)).toBeTruthy();
    expect(mockRouterBuilder.element).toStrictEqual(<span>valido</span>);
    expect(mockRouterBuilder.path).toBe(RootPath.MAIN);
    expect(mockRouterBuilder.errorElement).toStrictEqual(<span>invalido</span>);
    expect(mockRouterBuilder.children).toStrictEqual([{}, {
      element: <span>child</span>,
      path: '/',
      errorElement: <span>child</span>,
    }]);
  });
});
