import { BaseInput, Cep, CityState, Complement, ComplementInput, Street, UserAddressFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../../contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../../../contexts/ItemsContext";
import axios from "axios";

const newAddressFormValidationSchema = zod.object({
    cep: zod.string(),
    street: zod.string(),
    number: zod.string(),
    complement: zod.string().optional(),
    district: zod.string(),
    city: zod.string(),
    state: zod.string(), 
})

type newAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

interface  AddressByCep {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}


export const UserAddressForm = () => {
    const { saveUserAddress, userPaymentMethod } = useContext(UserInfoContext);
    const { resetCart } = useContext(ItemsContext);
    const navigate = useNavigate();

    const [addressByCep, setAddressByCep ]  = useState<AddressByCep>({} as AddressByCep);

    const { register, handleSubmit, getValues, watch } = useForm<newAddressFormData>({
        resolver: zodResolver(newAddressFormValidationSchema),
    });


    const cep = getValues("cep");
    const watchCep = watch("cep");

    useEffect(() => {
        axios.get<AddressByCep>(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
            setAddressByCep(response.data)
        })
    }, [watchCep]);

    const sendUserAddressData = (data: newAddressFormData) => {
        if(userPaymentMethod) {
            saveUserAddress(data);
            navigate('/success');
            resetCart();
        }
    }

    return(
        <UserAddressFormContainer onSubmit={handleSubmit(sendUserAddressData)} id="UserAddressForm">
            <Cep>
                <BaseInput type="text" placeholder="Cep" {...register('cep')} required/>
            </Cep>

            <Street>
                <BaseInput 
                    type="text" 
                    placeholder="Rua" 
                    {...register('street')} 
                    required
                    value={addressByCep.logradouro}
                />
            </Street>

            <Complement>
                <BaseInput type="text" placeholder="Número" {...register('number')} required/>
                <ComplementInput>
                    <input type="text" placeholder="Complemento" {...register('complement')}/>
                    <p>Opcional</p>
                </ComplementInput>
            </Complement>

            <CityState>
                <BaseInput 
                    type="text" 
                    placeholder="Bairro" 
                    {...register('district')} 
                    required
                    value={addressByCep.bairro}
                />
                <BaseInput 
                    type="text" 
                    placeholder="Cidade" 
                    {...register('city')} 
                    required
                    value={addressByCep.localidade}
                />
                <BaseInput 
                    type="text" 
                    placeholder="UF" 
                    {...register('state')} 
                    required
                    value={addressByCep.uf}
                />
            </CityState>
        </UserAddressFormContainer>
    );
}