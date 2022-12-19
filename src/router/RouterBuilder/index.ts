import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';
import RoutesPath from '../enum';

interface IRouteBuilder {
  addPath(path: RoutesPath): void;
  addElement(element: ReactNode): void;
  addErrorElement(errorElement: ReactNode): void;
  addChildren(children: RouteObject[]): void;
  build(): RouteObject;
}
class RouterBuilder implements IRouteBuilder {
  private route: RouteObject;

  constructor() {
    this.route = {} as RouteObject;
  }

  addErrorElement(errorElement: ReactNode) {
    this.route.errorElement = errorElement;
  }

  addChildren(children: RouteObject[]) {
    this.route.children = children;
  }

  addPath(path: RoutesPath) {
    this.route.path = path;
  }

  addElement(element: ReactNode) {
    this.route.element = element;
  }

  build(): RouteObject {
    const routebulder = this.route;
    this.route = {} as RouteObject;
    return routebulder;
  }
}

export default RouterBuilder;
