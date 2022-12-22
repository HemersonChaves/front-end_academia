import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';
import RoutesPath from '../PathPage/RootPath';

interface IRouteBuilder {
  addPath(path: RoutesPath): void;
  addElement(element: ReactNode): void;
  addErrorElement(errorElement: ReactNode): void;
  addChildren(children: RouteObject): void;
  build(): RouteObject;
}
class RouterBuilder implements IRouteBuilder {
  private route: RouteObject;

  private routeChildren: RouteObject[];

  constructor() {
    this.route = {};
    this.routeChildren = [];
  }

  addErrorElement(errorElement: ReactNode) {
    this.route.errorElement = errorElement;
  }

  addChildren(child: RouteObject) {
    if (!this.routeChildren) {
      this.routeChildren = [];
    }
    this.routeChildren.push(child);
    delete this.route.children;
    this.route.children = this.routeChildren;
  }

  addPath(path: RoutesPath) {
    this.route.path = path;
  }

  addElement(element: ReactNode) {
    this.route.element = element;
  }

  build(): RouteObject {
    const routebuilt = { ...this.route };
    this.clear();
    return routebuilt;
  }

  private clear() {
    delete this.route.path;
    delete this.route.id;
    delete this.route.loader;
    delete this.route.action;
    delete this.route.hasErrorBoundary;
    delete this.route.shouldRevalidate;
    delete this.route.handle;
    delete this.route.index;
    delete this.route.children;
    delete this.route.element;
    delete this.route.errorElement;
  }
}

export default RouterBuilder;
