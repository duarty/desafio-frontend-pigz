
import pigz from './styles/themes/orangeLabs'
import { ThemeProvider } from 'styled-components'
import GlobalStyled from './styles/global'
import { Icon } from './components/PigzLogo/Logo'
import PigzPigz from './assets/Grupo 3535.svg'
import { Button } from './components/button/Button'
import { Container } from './components/Container/Container'
import { Title } from './components/h1/h1'
import { Paragraph } from './components/paragraph/p'

import WhatsAppIcon  from './assets/Icon awesome-whatsapp.svg'

import { HeaderPage } from './pages/Header'
import { FormPage } from './pages/FormPage'
import { BannerPage } from './pages/Banner'
import { FooterPage } from './pages/FooterPage'
import { MarketPlacePage } from './pages/MarketPlacePage'

function App() {
 
  return (
    <> 
      <ThemeProvider theme={pigz}>
          <GlobalStyled/>
            <HeaderPage/>
            <FormPage/>
            <Icon 
              src={PigzPigz}
              position='relative'         
              left='50%'
              transform='-50%'
            />
          <BannerPage/>
          
          <MarketPlacePage/>

          <Container
            flexdirection={'column'}
            padding='0rem 5rem'
          >
                <Title
                    text={'E mais: suporte que realmente funciona!'}
                    weight={'700'}
                    padding='3rem 0rem'
                    textAlign={'center'} 
                    fontSize={'3rem'}
                    color={pigz.fonts.fontGrey1}  
                />
                <Paragraph
                    text={'Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.75rem'}
                    textAlign='center'
                  />   
          </Container>
          <Container
            flexdirection={'column'}
            padding='0rem 2rem'
          > 
              <Container
                flexdirection={'column'}
                backgroundcolor={pigz.colors.whiteGrey}
                
                radius='5rem'
                padding='4rem 4rem'
              >
                <Title
                  text='Pigz'
                  fontSize='2.5rem'
                  color={pigz.fonts.fontGrey1}
                />
                <Paragraph
                    text={'Tudo o que você precisa'}
                    color={pigz.fonts.fontGrey2}
                    weight={'500'}
                    fontSize={'1.75rem'}
                    padding='0.75rem 0rem'
                    textAlign='left'
                />
                <Paragraph
                    text={'Pigz Marketplace'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign={'left'}
                />
                <Paragraph
                    text={'Página exclusiva'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Paragraph
                    text={'Pigz Gestão Desktop e Mobile'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Paragraph
                    text={'Gestão de entregadores'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Paragraph
                    text={'Vias de impressão personalizáveis'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Container padding='1rem'/>
                <Title
                  text='R$199/mês'
                  color={pigz.fonts.fontGrey1}
                  backgroundcolor={pigz.colors.white}
                  radius='4rem'
                  padding='1.5rem 2.5rem'
                />
                <Container padding='1rem'/>
                <Button
                    title={'Vender no Pigz agora'} 
                    radius={'3rem'} 
                    padding={'1.5rem'}
                    fontsize={'1.5rem'}
                    backgroundcolor={`linear-gradient(to right, ${pigz.colors.orangePigz2}, ${pigz.colors.orangePigz1})`}
                />
              </Container>
              <Container padding='1rem'/>
              <Container
                flexdirection={'column'}
                backgroundcolor={pigz.colors.whiteGrey}
                radius='5rem'
                padding='4rem 4rem'
              >
                <Title
                  text='Pagamento On-line'
                  fontSize='2.5rem'
                  color={pigz.fonts.fontGrey1}
                />
                <Paragraph
                  text={'Segurança e agilidade'}
                  color={pigz.fonts.fontGrey2}
                  fontSize={'1.75rem'}
                  weight={'500'}
                  padding='0.75rem 0rem'
                  textAlign='left'
                />
                 
                <Paragraph
                    text={'Aceite Pix e Cartão'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign={'left'}
                />
                <Paragraph
                    text={'Antecipação Pix automática'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Paragraph
                    text={'Não dependa de maquininha de cartão'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Paragraph
                    text={'Segurança para receber pedidos'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Paragraph
                    text={'Agilidade para entregar'}
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.5rem'}
                    padding='0.5rem 0rem'
                    textAlign='left'
                />
                <Container padding='1rem'/>
                <Title
                  text='2,99% por transação'
                  color={pigz.fonts.fontGrey1}
                  backgroundcolor={pigz.colors.white}
                  radius='4rem'
                  padding='1.5rem 2.5rem'
                />
                <Container padding='1rem'/>
                <Button
                    title={'Saiba mais'} 
                    radius={'3rem'} 
                    padding={'1.5rem'}
                    fontsize={'1.5rem'}
                    backgroundcolor={`linear-gradient(to right, ${pigz.colors.orangePigz2}, ${pigz.colors.orangePigz1})`}
                />
              </Container>
              <Container
                flexdirection={'row'}
                padding={'5rem 5rem 5rem 5rem'}
                justifycontent={'space-around'}
             
              >
               <Paragraph
                    text={'Fale com a Pigz'}
                    color={pigz.fonts.fontGrey1}
                    weight='500'
                    alignItems={'flex-end'}
                    justifyContent={'center'}
                    fontSize={'1.75rem'}
                />
                <Icon 
                  padding='0rem 0rem 0rem 1rem'
                  src={WhatsAppIcon}
                />
                <Paragraph
                    text={'95'}
                    color={pigz.fonts.fontGrey1}
                    weight='500'
                    fontSize={'1.25rem'}
                    
                />
                <Paragraph
                    text={'3224-2603'}
                    color={pigz.fonts.fontGrey1}
                    weight='500'
                    fontSize={'1.5rem'}
                    
                />
              </Container>
              
          </Container>
          <FooterPage/>
      </ThemeProvider>
    </>
  )
}

export default App
