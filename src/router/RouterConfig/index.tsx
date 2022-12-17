import { Outlet, RouteObject } from 'react-router-dom';
import { ProtectedRoute } from '../../presentation/Components';
import {
  Login, Main, NoMatch, NovoUsuario,
} from '../../presentation/Page';
import RoutesPath from '../enum';
import RouterBuilder from './RouterFactory';

const routeschild: RouteObject[] = [];
const routerb = new RouterBuilder();
routerb.addPath(RoutesPath.MAIN);
routerb.addElement(<Main />);

routeschild.push(routerb.build());

routerb.addPath(RoutesPath.LOGIN);
routerb.addElement(<Login />);

routeschild.push(routerb.build());

routerb.addPath(RoutesPath.NOVOUSUARIO);
routerb.addElement(<NovoUsuario />);

routeschild.push(routerb.build());

routerb.addPath(RoutesPath.DASHBOARD);
routerb.addElement(<ProtectedRoute outlet=<span>Dashboard</span> />);

routeschild.push(routerb.build());

routerb.addPath(RoutesPath.MAIN);
routerb.addElement(<Outlet />);
routerb.addErrorElement(<NoMatch />);
routerb.addChildren(routeschild);

const routesbuild = routerb.build();
export default routesbuild;
