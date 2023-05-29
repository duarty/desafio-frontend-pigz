import { Container } from "../components/Container/Container"
import { Icon } from "../components/PigzLogo/Logo"
import { Title } from "../components/h1/h1"
import { Paragraph } from "../components/paragraph/p"
import PigzGreyIcon from '../assets/pigz-logotipo-colorido.svg'
import AppStoreIcon from '../assets/selo-app-store.svg'
import GooglePlayIcon from '../assets/selo-google-play.svg'
import pigz from '../styles/themes/orangeLabs'
import FaleConoscoIcon from '../assets/icone-fale-conosco.svg'
import LinkedinIcon from '../assets/linkedin-with-circle.svg'
import InstagramIcon from '../assets/instagram-with-circle.svg'
import FacebookIcon from '../assets/facebook-with-circle.svg'
import YouTubeIcon from '../assets/youtube-with-circle.svg'
import OrangeLabsIcon from '../assets/logo-orange-horizontal-branco.svg'

export const FooterPage = () => {
    return (
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
    )
}