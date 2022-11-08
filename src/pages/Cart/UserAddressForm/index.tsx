import { BaseInput, Cep, CityState, Complement, ComplementInput, Street, UserAddressFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { UserInfoContext } from "../../../contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../../../contexts/ItemsContext";

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
    const { saveUserAddress, userPaymentMethod } = useContext(UserInfoContext);
    const { resetCart } = useContext(ItemsContext);
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<newAddressFormData>({
        resolver: zodResolver(newAddressFormValidationSchema),
    });

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
                <BaseInput type="text" placeholder="Rua" {...register('street')} required/>
            </Street>

            <Complement>
                <BaseInput type="text" placeholder="Número" {...register('number')} required/>
                <ComplementInput>
                    <input type="text" placeholder="Complemento" {...register('complement')}/>
                    <p>Opcional</p>
                </ComplementInput>
            </Complement>

            <CityState>
                <BaseInput type="text" placeholder="Bairro" {...register('district')} required/>
                <BaseInput type="text" placeholder="Cidade" {...register('city')} required/>
                <BaseInput type="text" placeholder="UF" {...register('state')} required/>
            </CityState>
        </UserAddressFormContainer>
    );
}