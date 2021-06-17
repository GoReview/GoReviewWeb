import Router from 'next/router'
import { ReactNode, createContext } from "react";
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { api } from "../services/api";

type Credentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn: (credentials: Credentials) => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)


export function AuthProvider({ children }: AuthProviderProps) {

  async function signIn({ email, password }: Credentials) {
    try {
      const res = await api.post('usuarios/signin', {
        email,
        password
      })
      
      const { token } = res.data;

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 Days
        path: '/login' 
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push('/')
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  )
}