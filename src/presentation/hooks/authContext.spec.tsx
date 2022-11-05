import React from 'react';
import { AuthContext } from './authContext';

describe('component AuthContext', () => {
  test('deve ter o valor padrao de signed como falso', () => {
    // const TestComponent = () => {
    const { signed } = React.useContext(AuthContext);
    // return (
    //   <div>
    //     {signed ? <div>{`logado = ${signed}`}</div> : <div>{`logado = ${signed}`}</div>}
    //   </div>
    // );
    expect(signed).toBe(false);
    // }
  });
});
