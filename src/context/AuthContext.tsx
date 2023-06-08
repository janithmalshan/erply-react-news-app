import {createContext, ReactNode, useState} from 'react'

type Props = {
    children?: ReactNode;
}

type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
    token: string;
    setToken: (newState: string) => void
}

const initialValue = {
    authenticated: false,
    setAuthenticated: () => {},
    token: '',
    setToken: () => {}
}

const AuthContext = createContext<IAuthContext>(initialValue)

const AuthProvider = ({children}: Props) => {
    //Initializing an auth state with false
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated)
    const [token, setToken] = useState(initialValue.token)

    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}
