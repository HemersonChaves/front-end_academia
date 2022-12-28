import RoutesPath from './RootPath';

describe('enum RoutesPath', () => {
  test('deve conter as rotes root em RoutesPath', () => {
    expect(RoutesPath).toMatchInlineSnapshot(
      `
      {
        "DASHBOARD": "dashboard",
        "LOGIN": "login",
        "MAIN": "/",
        "NOVOUSUARIO": "novousuario",
      }
    `,
    );
  });
});
