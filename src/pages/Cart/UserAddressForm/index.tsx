import { BaseInput, Cep, CityState, Complement, ComplementInput, Street, UserAddressFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const newAddressFormValidationSchema = zod.object({
    cep: zod.string(),
    street: zod.string(),
    number: zod.number(),
    complement: zod.string().optional(),
    district: zod.string(),
    city: zod.string(),
    state: zod.string(), 
})

type newAddressFormData = zod.infer<typeof newAddressFormValidationSchema>


export const UserAddressForm = () => {
    const { register, handleSubmit } = useForm<newAddressFormData>({
        resolver: zodResolver(newAddressFormValidationSchema),
        // defaultValues: {
        //     cep: ,
        //     street: ,
        //     number: ,
        //     complement: ,
        //     district: ,
        //     city: ,
        //     state: , 
        // }
    });

    const sendUserAddressData = (data: newAddressFormData) => {
            
    }

    return(
        <UserAddressFormContainer onSubmit={handleSubmit(sendUserAddressData)}>
            <Cep>
                <BaseInput type="text" {...register('cep')}/>
            </Cep>

            <Street>
                <BaseInput type="text" {...register('street')} />
            </Street>

            <Complement>
                <BaseInput type="text" {...register('number')}/>
                <ComplementInput>
                    <input type="text" placeholder="Complemento" {...register('complement')}/>
                    <p>Opcional</p>
                </ComplementInput>
            </Complement>

            <CityState>
                <BaseInput type="text" {...register('city')}/>
                <BaseInput type="text" {...register('state')}/>
                <BaseInput type="text" {...register('district')}/>
            </CityState>
        </UserAddressFormContainer>
    );
}