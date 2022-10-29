import { 
    CoffeeIntroduction, 
    CoffeeList, 
    HomeContainer,
    IconResume,
    IntroductionText,
    ResumeApp, ResumeTitle, 
    List 
} from "./styles"

import introductionLogo from '../../assets/introduction-logo.svg';

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { coffeeList } from "../../utils/coffeeList";

import { CoffeeComponent } from "./CoffeeComponent";

export const Home = () => {
    return ( 
        <HomeContainer>
            <CoffeeIntroduction>
                <IntroductionText>
                    <ResumeTitle>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery voce recebe seu café onde estiver, a qualquer hora</p>
                    </ResumeTitle>
                    
                    <ResumeApp>
                        <div>   
                            <IconResume colorResume="yellow-dark">
                                <ShoppingCart weight="fill" />
                            </IconResume> 
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <IconResume colorResume="base-text">
                                <Package weight="fill"/>
                            </IconResume>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <IconResume colorResume="yellow">
                                <Timer weight="fill"/>
                            </IconResume>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        
                        <div>
                            <IconResume colorResume="purple">
                                <Coffee weight="fill"/>
                            </IconResume>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </ResumeApp>
                </IntroductionText>
                <img src={introductionLogo} />
            </CoffeeIntroduction>

            <CoffeeList>
                <h2>Nossos Cafés</h2>
                
                <List>
                    {coffeeList.map(coffee => (
                        <CoffeeComponent coffee={coffee} key={coffee.id}/>
                    ))}
                </List>
            </CoffeeList>
        </HomeContainer>
    )
}