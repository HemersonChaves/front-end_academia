import { createContext, ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuth {
  signed: boolean
}

interface IAuthContextProps {
  auth: IAuth
}

const defaults: Pick<IAuth, 'signed'> = {
  signed: false,
};

// define valores pasõres para Auth signed = false;
const auth: IAuth = defaults;
const authProps: IAuthContextProps = { auth };
const AuthContext = createContext(authProps);

function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={authProps}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
