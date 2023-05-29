import { Container } from "../components/Container/Container"
import { Icon } from "../components/PigzLogo/Logo"
import { Title } from "../components/h1/h1"
import { Paragraph } from "../components/paragraph/p"
import pigz from '../styles/themes/orangeLabs'
import StoreFrontIcon from'../assets/storefront_black_24dp.svg'
import SmartPhoneIcon from '../assets/smartphone_black_24dp.svg'
import PigzGestaoIcon from '../assets/Pigz Gestão - Logo.svg'
import PrinterIcon from '../assets/print_black_24dp.svg'

export const BannerPage = () => {
    return (
    <>
        <Container
        flexdirection={'column'}
        >
          <Title
            text='Você tem um novo Pigzdido!'
            weight={'700'}
            textAlign={'center'} 
            fontSize={'3rem'}
            color={pigz.fonts.fontGrey1}  

          />
      </Container>
      <Container padding='1rem'/>
      <Container
        flexdirection='column'
        
        padding='2rem 7rem'
      >
            <Container
              backgroundcolor={pigz.colors.whiteGrey}
              radius='7rem'
              flexdirection='column'  
            >
                <Container padding='2rem'/>
                <Icon 
                  src={StoreFrontIcon}   
                  alignSelf={'center'}              
                />
                <Title
                  text='Marketplace'
                  fontSize='2rem'
                  padding='3rem 0rem 0rem 0rem'
                  textAlign={'center'}
                  weight='600'
                />
                <Paragraph
                  text={'Pra sua loja vender mais'}
                  textAlign={'center'}
                  padding={'1rem 0rem 0rem 0rem'}
                  fontSize={'1.75rem'}
                
                />
                <Container padding='2rem'/>
            </Container>
            <Container padding='1rem'/>
            <Container
              backgroundcolor={pigz.colors.whiteGrey}
              radius='7rem'
              flexdirection='column'
              >
                <Container padding='2rem'/>
                <Icon 
                  src={SmartPhoneIcon}  
                  alignSelf={'center'}               
                />
                <Title
                  text='É fácil e rápido'
                  fontSize='2rem'
                  padding={'3rem 0rem 0rem 0rem'}
                  textAlign={'center'}
                  weight='600'
                />
                <Paragraph
                  text={'Fazer um pedido no Pigz'}
                  textAlign={'center'}
                  padding={'1rem 0rem 0rem 0rem'}
                  fontSize={'1.75rem'}
                />
                <Container padding='2rem'/>
            </Container>
            <Container padding='1rem'/>
            <Container
              backgroundcolor={pigz.colors.whiteGrey}
              radius='7rem'
              flexdirection='column'
              >
                <Container padding='2rem'/>
                <Icon 
                  src={PigzGestaoIcon}   
                  alignSelf={'center'}              
                />
                <Title
                  text='Pigz Gestão'
                  fontSize='2rem'
                  padding={'3rem 0rem 0rem 0rem'}
                  textAlign={'center'}
                  weight='600'
                />
                <Paragraph
                  text={'Você no controle, sempre'}
                  textAlign={'center'}
                  padding={'1rem 0rem 0rem 0rem'}
                  fontSize={'1.75rem'}
                />
                <Container padding='2rem'/>
            </Container>
            <Container padding='1rem'/>
            <Container
              backgroundcolor={pigz.colors.whiteGrey}
              radius='7rem'
              flexdirection='column'
              >
                <Container padding='2rem'/>
                <Icon 
                  src={PrinterIcon}   
                  alignSelf={'center'}             
                />
                <Title
                  text='Vias de impressão'
                  padding={'3rem 0rem 0rem 0rem'}
                  fontSize='2rem'
                  textAlign={'center'}
                  weight='600'
                />
                <Paragraph
                  text={'Personalizáveis'}
                  textAlign={'center'}
                  padding={'1rem 0rem 0rem 0rem'}
                  fontSize={'1.75rem'}
                />
                <Container padding='2rem'/>
            </Container>
            <Title
                text='Tudo que você precisa por apenas R$199/mês'
                weight={'700'}
                padding='6rem 0rem 2rem 0rem'
                textAlign={'center'} 
                fontSize={'3rem'}
                color={pigz.fonts.fontGrey1}  
             />
             <Paragraph
                text={'Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.'}
                color={pigz.fonts.fontGrey1}
                fontSize={'1.75rem'}
                textAlign='center'
              />       
      </Container>
    </>
    )
}