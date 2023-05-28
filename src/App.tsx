
import pigz from './styles/themes/orangeLabs'
import { ThemeProvider } from 'styled-components'
import GlobalStyled from './styles/global'
import { Icon } from './components/PigzLogo/Logo'
import PigzPigz from './assets/Grupo 3535.svg'
import PigzOrangeIcon from './assets/Pigz Gestão - Logo.svg'
import { Button } from './components/button/Button'
import { Container } from './components/Container/Container'
import BannerBuguer from './assets/burguer_2.png'
import { Title } from './components/h1/h1'
import { Paragraph } from './components/paragraph/p'
import { Form } from './components/form/Form'
import { Label } from './components/label/label'
import { Input } from './components/input/Input'
import StoreFront from './assets/storefront_black_24dp.svg'
import SmarthPhone from './assets/smartphone_black_24dp.svg'
import PigzGestao from './assets/Grupo 3545.svg'
import PrinterBlack  from './assets/print_black_24dp.svg'
import WhatsAppIcon  from './assets/Icon awesome-whatsapp.svg'
import PigzGreyIcon from './assets/pigz-logotipo-colorido.svg'
import GooglePlayIcon from './assets/selo-google-play.svg'
import AppStoreIcon from './assets/selo-app-store.svg'
import FaleConoscoIcon from './assets/icone-fale-conosco.svg'
import LinkedinIcon from './assets/linkedin-with-circle.svg'
import InstagramIcon from './assets/instagram-with-circle.svg'
import FacebookIcon from './assets/facebook-with-circle.svg'
import YouTubeIcon from './assets/youtube-with-circle.svg'
import OrangeLabsIcon from './assets/logo-orange-horizontal-branco.svg'
import { HeaderPage } from './pages/Header'

function App() {
 
  return (
    <> 
      <ThemeProvider theme={pigz}>
          <GlobalStyled/>
          {/*<HeaderPage/>*/}
          <Container 
            backgroundcolor={pigz.colors.white}
            flexdirection={'row'}   
            padding={'1.4rem'}  
            justifycontent={'space-between'}
          >
            <Icon 
              src={PigzOrangeIcon}/>
            <Button 
              backgroundcolor={`linear-gradient(to right, ${pigz.colors.orangePigz2}, ${pigz.colors.orangePigz1})`}
              title={'Já sou parceiro'} 
              effect={false} 
              radius={'2rem'} 
              padding={'0.375rem 1.5rem'}
              fontsize={'1.4rem'}/>
          </Container>
          <Container 
            //backgroundcolor={pigz.colors.orangePigz1}
            backgroundcolor={`linear-gradient(to top, ${pigz.colors.orangePigz2}, ${pigz.colors.orangePigz1})`}
            flexdirection={'column'}  
            padding={'1.5rem'}  
            position='relative'
            overflow={'hidden'}
          >   
          
              <Container 
                flexdirection={'row'} 
                position='relative'
              >  
                  <Title
                    text={'Pigz: tudo que você precisa pra vender ainda mais!'}
                    weight={pigz.fonts.fontWeightBold}
                    color={pigz.colors.white}
                    padding={'1rem 8rem 0rem 0rem'}
                    fontSize={'4rem'}
                    zIndex={'1'}
                  />
                 <Icon 
                    position={'absolute'}
                    right={'-10rem'}
                    top={'0rem'}
                    src={BannerBuguer} 
                  /> 
              </Container>

              <Container 
                flexdirection={'column'}
                
              >
                <Paragraph
                  text={'Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.'}
                  color={pigz.colors.white}
                  padding={'3rem 0rem 4rem 0rem'}
                  fontSize={'1.6rem'}
                  />

                <Form 
                  flexdirection={'column'}
                  backgroundcolor={pigz.colors.white}
                  radius={'3rem'}
                  padding={'2rem 1.5rem 1.5rem'}
                  //margin={'1rem'}
                >
                <Container
                  flexdirection='column'
                  padding='1rem'
                >
                  <Title
                    text={'Quero vender no Pigz'}
                    color={pigz.fonts.fontGrey1}
                    weight={pigz.fonts.fontWeightSemiold}
                    fontSize={'2.75rem'}
                  />
                  <Paragraph
                    text={'Dê o primeiro passo para aumentar suas vendas'}
                    padding='1rem 0rem 0rem 0rem'
                    color={pigz.fonts.fontGrey1}
                    fontSize={'1.3rem'}
                  />

                  <Container
                    flexdirection={'column'}
                
                  >
                      <Label
                          text={'Nome'} 
                          weight={'500'} 
                          color={pigz.fonts.fontGrey1}
                          fontSize={'1.2rem'} 
                          padding={'2rem 0rem 0rem'}
                      />
                      <Input
                        backgroundcolor={pigz.colors.white}
                        placeholder={'Leonercio Goesfeeld'}
                        fontSize={'1.5rem'}
                        fontcolor={pigz.fonts.fontInputPlaceholder}
                        padding={'1.2rem 1.7rem'}
                        radius={'1.75rem'}
                        border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                      />
                      <Label
                          text={'E-mail'} 
                          weight={'500'} 
                          color={pigz.fonts.fontGrey1}
                          fontSize={'1.2rem'} 
                          padding={'2rem 0rem 0rem'}
                      />
                      <Input
                        backgroundcolor={pigz.colors.white}
                        placeholder={'leonercio.goesfeeld@email.com'}
                        fontSize={'1.5rem'}
                        fontcolor={pigz.fonts.fontInputPlaceholder}
                        padding={'1.2rem 1.7rem'}
                        radius={'1.75rem'}
                        border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                      />
                      <Label
                          text={'E-mail'} 
                          weight={'500'} 
                          color={pigz.fonts.fontGrey1}
                          fontSize={'1.2rem'} 
                          padding={'2rem 0rem 0rem'}
                      />
                      <Input
                        backgroundcolor={pigz.colors.white}
                        placeholder={'leonercio.goesfeeld@email.com'}
                        fontSize={'1.5rem'}
                        fontcolor={pigz.fonts.fontInputPlaceholder}
                        padding={'1.2rem 1.7rem'}
                        radius={'1.75rem'}
                        border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                      />
                  
                      <Paragraph
                        text={'Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.'}
                        fontSize={'1.3rem'}
                        color={pigz.fonts.fontGrey2}
                        weight={'400'}
                        padding={'2.2rem 0rem 0rem 0rem'}
                      />
                  </Container>
                  <Container
                    padding='2rem'
                  />
                    <Button
                        title={'Continuar'} 
                        radius={'1.5rem'} 
                        padding={'1.25rem'}
                        fontsize={'1.7rem'}
                        backgroundcolor={pigz.colors.orangePigz1}
                    />
                  </Container>
                </Form>
              </Container>
              <Container
                padding='4.75rem'
              />
          </Container>
          <Icon 
            src={PigzPigz}
            position='relative'
           // top='50%'
            left='50%'
            transform='-50%'
           // zIndex='1'
          />
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
                      src={StoreFront}   
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
                      src={SmarthPhone}  
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
                      src={PigzGestao}   
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
                      src={PrinterBlack}   
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
                padding={'5rem 0rem 0rem 1rem'}
                justifycontent={'center'}
             
              >
               <Paragraph
                    text={'Fale com a Pigz'}
                    color={pigz.fonts.fontGrey1}
                    weight='500'
                    fontSize={'1.75rem'}
                />
                <Icon 
                  src={WhatsAppIcon}
                />
                <Paragraph
                    text={'95'}
                    color={pigz.fonts.fontGrey1}
                    weight='500'
                    fontSize={'1.25rem'}
                    
                />
                <Paragraph
                    text={'95 3224-2603'}
                    color={pigz.fonts.fontGrey1}
                    weight='500'
                    fontSize={'1.25rem'}
                    
                />
              </Container>
              
          </Container>
          <Container
              flexdirection={'column'}
              backgroundcolor={pigz.colors.whiteGrey}
              padding='6rem 2rem 0rem 2rem' 
          >
              <Container
                flexdirection='column'
              >
                  <Icon
                    alignSelf='flex-start'
                    src={PigzGreyIcon}
                  />
                  <Paragraph
                    text='Tudo que você precisa.'
                    fontSize='1.2rem'
                    color={pigz.fonts.fontGrey3}
                    padding='1rem 0rem'
                  
                  />
              </Container>
              <Title
                text='Baixe o APP'
                color={pigz.fonts.fontGrey3}
                weight='600'
                fontSize='1.6rem'
                padding='1rem 0rem 0rem 0rem'
              />
              <Container
                padding='1rem 0rem 0rem'
              >
                <Icon
                  src={AppStoreIcon}
                />
                <Icon
                  src={GooglePlayIcon}
                  padding='0rem 0rem 0rem 1rem'
                />
              </Container>
              <Title
                text='Pigz'
                color={pigz.fonts.fontGrey3}
                weight='600'
                fontSize='1.6rem'
                padding='5rem 0rem 0rem 0rem'
              /> 
              <Paragraph
                text='Sobre o Pigz'
                color={pigz.fonts.fontGrey2}
                weight='400'
                fontSize='1.4rem'
                padding='2rem 0rem 0rem 0rem'
              /> 
              <Paragraph
                text='Portal do Parceiro'
                color={pigz.fonts.fontGrey2}
                weight='400'
                fontSize='1.4rem'
                padding='2rem 0rem 0rem 0rem'
              /> 
              <Paragraph
                text='Quero ser um Pigz Partner'
                color={pigz.fonts.fontGrey2}
                weight='400'
                fontSize='1.4rem'
                padding='2rem 0rem 0rem 0rem'
              />
              <Container
                  padding='5rem 0rem 0rem 0rem'
              >  
                  <Icon
                      src={FaleConoscoIcon}
                  />
                  <Title
                    text='Fale conosco'
                    color={pigz.fonts.fontGrey3}
                    weight='600'
                    fontSize='1.6rem'
                    padding='0rem 0rem 0rem 1rem'
                  /> 
              </Container>
              <Paragraph
                text='falecom@pigz.com.br'
                color={pigz.fonts.fontGrey2}
                weight='400'
                fontSize='1.4rem'
                padding='2rem 0rem 0rem 0rem'
              /> 
              <Paragraph
                text='(95) 3224-2603'
                color={pigz.fonts.fontGrey2}
                weight='400'
                fontSize='1.4rem'
                padding='2rem 0rem 0rem 0rem'
              /> 
              <Title
                text='Pigz nas redes'
                color={pigz.fonts.fontGrey3}
                weight='600'
                fontSize='1.6rem'
                padding='3rem 0rem 0rem 0rem'
              /> 
              <Container
                padding='1rem 0rem 4rem'
              >
                  <Icon 
                    src={LinkedinIcon} 
                                      
                  />
                  <Icon 
                    src={InstagramIcon}  
                    padding='0rem 0rem 0rem 1.5rem'                     
                  />
                  <Icon 
                    src={FacebookIcon}  
                    padding='0rem 0rem 0rem 1.5rem'                     
                  />
                  <Icon 
                    src={YouTubeIcon}   
                    padding='0rem 0rem 0rem 1.5rem'                     
                  />
              </Container>
              <Container
                borderTop={`0.2px solid ${pigz.fonts.fontInputBorder}`}
                padding='1.5rem 0rem'
              >
                <Paragraph
                    text='Nossos termos'
                    fontSize='1.25rem'
                    padding='0rem 2.75rem 0rem 0rem'
                    color={pigz.fonts.fontGrey2}
                />
                <Paragraph
                    text='Privacidade'
                    fontSize='1.25rem'
                    padding='0rem 2.75rem 0rem 0rem'
                    color={pigz.fonts.fontGrey2}
                />
                <Paragraph
                    text='Ajuda'
                    fontSize='1.25rem'
                    padding='0rem 2.75rem 0rem 0rem'
                    color={pigz.fonts.fontGrey2}
                />
              </Container>
              <Container
                padding='0rem 0rem 2rem'
              >
                <Paragraph
                    text='© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85'
                    fontSize='1rem'
                    color={pigz.fonts.fontGrey3}
                />
                <Icon
                  src={OrangeLabsIcon}
                />
              </Container>
          </Container>
      </ThemeProvider>
    </>
  )
}

export default App
