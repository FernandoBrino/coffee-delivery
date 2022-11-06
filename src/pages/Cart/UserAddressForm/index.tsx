import { BaseInput, Cep, CityState, Complement, ComplementInput, Street, UserAddressFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { AddressContext } from "../../../contexts/AddressContext";

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


export const UserAddressForm = () => {
    const { addUserAddress } = useContext(AddressContext);

    const { register, handleSubmit } = useForm<newAddressFormData>({
        resolver: zodResolver(newAddressFormValidationSchema),
    });

    const sendUserAddressData = (data: newAddressFormData) => {
        addUserAddress(data);
    }

    return(
        <UserAddressFormContainer onSubmit={handleSubmit(sendUserAddressData)} id="UserAddressForm">
            <Cep>
                <BaseInput type="text" placeholder="Cep" {...register('cep')}/>
            </Cep>

            <Street>
                <BaseInput type="text" placeholder="Rua" {...register('street')} />
            </Street>

            <Complement>
                <BaseInput type="text" placeholder="Número" {...register('number')}/>
                <ComplementInput>
                    <input type="text" placeholder="Complemento" {...register('complement')}/>
                    <p>Opcional</p>
                </ComplementInput>
            </Complement>

            <CityState>
                <BaseInput type="text" placeholder="Bairro" {...register('district')}/>
                <BaseInput type="text" placeholder="Cidade" {...register('city')}/>
                <BaseInput type="text" placeholder="UF" {...register('state')}/>
            </CityState>
        </UserAddressFormContainer>
    );
}