import { Outlet, RouteObject } from 'react-router-dom';
import { ProtectedRoute } from '../../presentation/Components';
import {
  Login, Main, NoMatch, NovoUsuario,
} from '../../presentation/Page';
import RoutesPath from '../PathPage/RootPath';
import RouterBuilder from '../RouterBuilder';

const routeRoot = new RouterBuilder();

const routeMain = new RouterBuilder();
routeMain.addPath(RoutesPath.MAIN);
routeMain.addElement(<Main />);

routeRoot.addChildren(routeMain.build());

const routeLogin = new RouterBuilder();
routeLogin.addPath(RoutesPath.LOGIN);
routeLogin.addElement(<Login />);

routeRoot.addChildren(routeLogin.build());

const routeNovoUsuario = new RouterBuilder();
routeNovoUsuario.addPath(RoutesPath.NOVOUSUARIO);
routeNovoUsuario.addElement(<NovoUsuario />);

routeRoot.addChildren(routeNovoUsuario.build());

const routeDashboard = new RouterBuilder();

routeDashboard.addPath(RoutesPath.DASHBOARD);
routeDashboard.addElement(<ProtectedRoute outlet=<span>Dashboard</span> />);

routeRoot.addChildren(routeDashboard.build());

routeRoot.addPath(RoutesPath.MAIN);
routeRoot.addElement(<Outlet />);
routeRoot.addErrorElement(<NoMatch />);

const routesbuild = routeRoot.build();
export default routesbuild;
