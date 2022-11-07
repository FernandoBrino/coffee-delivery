import { 
    CongratsPurchase, 
    DescriptionPurchase, 
    DetailsPurchase, 
    ResumeIcon, 
    SuccessfullyRequestContainer, 
    TextDetails,
    ResumeContainerDetails
} from "./styles"
import shipping from '../../assets/shipping.svg';

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { useContext } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export const SuccessfullyRequest = () => {
    const { userAddress, userPaymentMethod } = useContext(UserInfoContext);

    return ( 
        <SuccessfullyRequestContainer>
            <DetailsPurchase>
                <CongratsPurchase>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </CongratsPurchase>

                <DescriptionPurchase>
                    <ResumeContainerDetails>
                        <ResumeIcon colorResume="purple">
                            <MapPin weight="fill"/>
                        </ResumeIcon>
                        <TextDetails>
                            <p>
                                Entrega em <b>{userAddress.street}, {userAddress.number}</b>
                            </p>

                            <p>
                                {userAddress.district} - {userAddress.city}, {userAddress.state}
                            </p>
                        </TextDetails>
                    </ResumeContainerDetails>

                    <ResumeContainerDetails>
                        <ResumeIcon colorResume="yellow">
                            <Timer weight="fill"/>
                        </ResumeIcon>
                        <TextDetails>
                            <p>
                                Previsão de Entrega
                            </p>

                            <b>
                                20 min - 30 min
                            </b>
                        </TextDetails>
                    </ResumeContainerDetails>

                    <ResumeContainerDetails>
                        <ResumeIcon colorResume="yellow-dark">
                            <CurrencyDollar weight="fill"/>
                        </ResumeIcon>
                        <TextDetails>
                            <p>
                                Pagamento na entrega 
                            </p>
                            <b>
                                {userPaymentMethod}
                            </b>
                        </TextDetails>
                    </ResumeContainerDetails>
                </DescriptionPurchase>
            </DetailsPurchase>
            <img src={shipping}/>
        </SuccessfullyRequestContainer>
    )
}