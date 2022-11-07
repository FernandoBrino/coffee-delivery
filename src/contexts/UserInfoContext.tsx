import { createContext, ReactNode, useState } from "react";

interface UserAddress {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
}

type UserPaymentMethodProps = 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro';

interface UserInfoContextData {
    userPaymentMethod: UserPaymentMethodProps,
    userAddress: UserAddress,
    saveUserAddress: (data: UserAddress) => void;
    saveUserPaymentMethod: (method: UserPaymentMethodProps) => void;
}

interface UserInfoContextProviderProps {
    children: ReactNode;
}

export const UserInfoContext = createContext({} as UserInfoContextData)

export const UserInfoContextProvider = ({ children }: UserInfoContextProviderProps) => {
    const [userAddress, setUserAddress] = useState<UserAddress>({} as UserAddress);
    const [userPaymentMethod, setUserPaymentMethod] = useState<UserPaymentMethodProps>({} as UserPaymentMethodProps);

    const saveUserAddress = (data: UserAddress) => {
        setUserAddress(data)
    }

    const saveUserPaymentMethod = (method: UserPaymentMethodProps) => {
        console.log(method);
        setUserPaymentMethod(method);
    }

    return( 
        <UserInfoContext.Provider value={{ 
            userAddress, 
            saveUserAddress, 
            saveUserPaymentMethod, 
            userPaymentMethod
        }}>
            {children}
        </UserInfoContext.Provider>
    )
}