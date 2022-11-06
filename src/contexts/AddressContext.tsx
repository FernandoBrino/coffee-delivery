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

interface AddressContextData {
    userAddress: UserAddress,
    addUserAddress: (data: UserAddress) => void;
}

interface AddressContextProviderProps {
    children: ReactNode;
}

export const AddressContext = createContext({} as AddressContextData)

export const AddressContextProvider = ({ children }: AddressContextProviderProps) => {
    const [userAddress, setUserAddress] = useState<UserAddress>({} as UserAddress);

    const addUserAddress = (data: UserAddress) => {
        setUserAddress(data)
    }

    return( 
        <AddressContext.Provider value={{ userAddress, addUserAddress}}>
            {children}
        </AddressContext.Provider>
    )
}