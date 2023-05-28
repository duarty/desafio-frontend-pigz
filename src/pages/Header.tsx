import { Container } from "../components/Container/Container"
import { Icon } from "../components/PigzLogo/Logo"
import { Button } from "../components/button/Button"
import pigz from '../styles/themes/orangeLabs'
import PigzOrangeIcon from '../assets/Pigz Gestão - Logo.svg'


export const HeaderPage = () => {
    return (

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
    )
}