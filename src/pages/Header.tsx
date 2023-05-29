import { Container } from "../components/Container/Container"
import { Icon } from "../components/PigzLogo/Logo"
import { Button } from "../components/button/Button"
import pigz from '../styles/themes/orangeLabs'
import PigzOrangeIcon from '../assets/Pigz Gestão - Logo.svg'


export const HeaderPage = () => {
    return (

        <Container 
        backgroundcolor={'rgba(255, 255, 255, 0.84)'}
        backDropFilter={'blur(2rem)'}
        flexdirection={'row'}   
        padding={'2rem 1.5rem 2rem 1.5rem'}
        justifycontent={'space-between'}
        position="sticky"
        top="0rem"
        zIndex='100'
      >
        <Icon 
          src={PigzOrangeIcon}/>
        <Button 
          backgroundcolor={`linear-gradient(to right, ${pigz.colors.orangePigz2}, ${pigz.colors.orangePigz1})`}
          title={'Já sou parceiro'} 
          effect={false} 
          radius={'2rem'} 
          padding={'0.375rem 1.5rem'}
          boxShadow={'0rem 2rem 2rem rgba(250, 100, 30, 0.682)'}
          fontsize={'1.4rem'}/>
         
      </Container>
    )
}