import React, { createContext, useCallback, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from '../services/api'

interface AuthState {
    token: string;
    user: object;
}


interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    signIn(credentials:SignInCredentials): Promise<void>;
    signOut(): void
}

 const AuthContext = createContext<AuthContextData>({} as AuthContextData);
   

  const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState)

    useEffect(() => {
        
        async function loadStorageData():Promise<void> {
            const [ token, user ] = await AsyncStorage.multiGet(['@Gobarber:token','@Gobarber:user']);
           
            if (token[1] && user[1]) {
                setData({token:token[1], user:JSON.parse(user[1])})
            }
            
        }
        
    }, [])

    const signIn = useCallback(async ({ user, token, email, password })=> {
        const res = await api.post('sessions', {
            email,
            password,
            token,
            user
        })
        token = res.data.token
        user = res.data.user

       

       await AsyncStorage.multiSet([
            ['@Gobarber:token',token],
            ['@Gobarber:user', JSON.stringify(user)],
       ])

       setData({ token, user })
    },[])

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove(['@Gobarber:token','@Gobarber:user']);
        

        setData({} as AuthState)
    }, [])

    return (
        <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
}

    function useAuth(): AuthContextData {
        const context = useContext(AuthContext) 

        if(!context) {
            throw new Error('useAuth must be used within an AuthProvider')
        }

        return context
    }
export {  AuthProvider, useAuth }
