import { createContext, ReactNode, useEffect, useState } from "react";

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

type UserInfoStored = {userAddress: UserAddress} & {paymentMethod: UserPaymentMethodProps};


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

    useEffect(() => {
        const storedPaymentMethodAsJSON = localStorage.getItem('@coffee-delivery:user-info');

        if(storedPaymentMethodAsJSON) {
            const storedPaymentMethodAsObject: UserInfoStored = JSON.parse(storedPaymentMethodAsJSON);
            setUserPaymentMethod(storedPaymentMethodAsObject.paymentMethod);
            setUserAddress(storedPaymentMethodAsObject.userAddress);
        }
    }, [])


    const saveUserAddress = (data: UserAddress) => {
        setUserAddress(data)
        localStorage.setItem('@coffee-delivery:user-info', JSON.stringify({ userAddress: data, paymentMethod: userPaymentMethod }));
    }

    const saveUserPaymentMethod = (method: UserPaymentMethodProps) => {
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