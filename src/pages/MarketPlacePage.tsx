import { Container } from "../components/Container/Container"
import { Title } from "../components/h1/h1"
import { Paragraph } from "../components/paragraph/p"
import pigz from '../styles/themes/orangeLabs'
import Phones from '../assets/Grupo de máscara 2417.png'
import { Icon } from "../components/PigzLogo/Logo"
import { Button } from "../components/button/Button"
import { useState } from "react"
import SmartNoteIcon from '../assets/Grupo de máscara 2418.png'
import DeliveryIcon from '../assets/Grupo de máscara 2420.png'
import CreditCardIcon from '../assets/mobile.png'

export const MarketPlacePage = () => {

    const [banner, setBanner] = useState<number>(1);

    const [button, setButton] = useState<number>(1);
   // const [buttonColor, setButtonColor] = useState<string>();

    const handleClick = (btn: number): void => {
    setBanner(banner + 1);
    setButton(btn)
    console.log("Botão clicado!");
  };




    return (
    <Container
        flexdirection="column"
        padding="0rem 2rem 0rem 2rem"
    >
        <Container
            justifycontent="space-between"
        >
            <Button
                 backgroundcolor={button === 1 ? pigz.colors.orangePigz1 : 'grey'}
                 radius="5rem"
                 width="23%"
                 padding="0rem 0rem 0.7rem 0rem"
                 onClick={() => handleClick(1)}
            />
            <Button
                 backgroundcolor={button === 2 ? pigz.colors.orangePigz1 : 'grey'}
                 padding="0.2rem"
                 radius="5rem"
                 width="23%"
                 onClick={() => handleClick(2)}
            />

            <Button
                 backgroundcolor={button === 3 ? pigz.colors.orangePigz1 : 'grey'}
                 padding="0.2rem"
                 radius="5rem"
                 width="23%"
                 onClick={() => handleClick(3)}
            />

            <Button
                 backgroundcolor={button === 4 ? pigz.colors.orangePigz1 : 'grey'}
                 padding="0.2rem"
                 radius="5rem"
                 width="23%"
                 onClick={() =>handleClick(4)}
            />
            
        </Container>
            <Title
                text={
                    button === 1 ? 'Pigz Marketplace'
                    : button === 2 ? 'Pigz Gestão'
                    : button === 3 ? 'Gestão de entregadores'
                    : 'Pagamento on-line'
                }
                fontSize="2.5rem"
                weight="600"
                textAlign="center"
                padding="4rem 0rem 4rem 0rem"
            />
        
        <Container 
            backgroundcolor={`linear-gradient(to top, ${pigz.colors.orangePigz2}, ${pigz.colors.orangePigz1})`}
            flexdirection={'column'}   
            padding={'4rem 3rem 0rem 3rem'}
            radius={"7rem"}
            position={"relative"}
            overflow={"hidden"}
            alignItems={"center"}
        >
        {button === 1 ?
        (<>
            <Paragraph
                text="Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais."
                color={pigz.fonts.fontWhite}
                fontSize={"1.5rem"}
                textAlign={"center"}             
            />
                <Icon   

                    padding="5rem 0rem 0rem 0rem"
                    src={Phones}
                    //position={"absolute"}  
                    bottom={"0rem"}
                />
        </>)
        : button === 2 ?
        (<>
        <Paragraph
            text="Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser."
            color={pigz.fonts.fontWhite}
            fontSize={"1.5rem"}
            textAlign={"center"}             
        />
            <Icon   

                padding="5rem 0rem 0rem 0rem"
                src={SmartNoteIcon}
                //position={"absolute"}  
                bottom={"0rem"}
            />
         </>)
        
        : button === 3 ?
        (<>
            <Paragraph
                text="A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente."
                color={pigz.fonts.fontWhite}
                fontSize={"1.5rem"}
                textAlign={"center"}             
            />
                <Icon   
    
                    padding="5rem 0rem 0rem 0rem"
                    src={DeliveryIcon}
                    //position={"absolute"}  
                    bottom={"0rem"}
                />
             </>)
        : (<>
            <Paragraph
                text="Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão."
                color={pigz.fonts.fontWhite}
                fontSize={"1.5rem"}
                textAlign={"center"}             
            />
                <Icon   
    
                    padding="5rem 0rem 0rem 0rem"
                    src={CreditCardIcon}
                    //position={"absolute"}  
                    bottom={"0rem"}
                />
             </>)}
        </Container>
    </Container>  
    )
}