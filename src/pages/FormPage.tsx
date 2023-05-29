import { Container } from "../components/Container/Container";
import { Icon } from "../components/PigzLogo/Logo";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/Form";
import { Title } from "../components/h1/h1";
import { Input } from "../components/input/Input";
import { Label } from "../components/label/label";
import { Paragraph } from "../components/paragraph/p";
import pigz from "../styles/themes/orangeLabs";
import BannerBuguer from "../assets/burguer_2.png";
import BrFlagIcon from '../assets/1200px-Brazilian_flag_icon_round.svg.png'
import { useState } from "react";
import { Select } from "../components/select/select";

export const FormPage = () => {
  const [form, setForm] = useState<number>(1);

  // function callNextForm (){
  //   setForm(() => )
  // }
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    setForm(form + 1);
    console.log("Botão clicado!");
  };

  return (
    <Container
      backgroundcolor={`linear-gradient(to top, ${pigz.colors.orangePigz2}, ${pigz.colors.orangePigz1})`}
      flexdirection={"column"}
      padding={"1.5rem"}
      position="relative"
      overflow={"hidden"}
    >
      <Container flexdirection={"row"} position="relative">
        <Title
          text={"Pigz: tudo que você precisa pra vender ainda mais!"}
          weight={pigz.fonts.fontWeightBold}
          color={pigz.colors.white}
          padding={"1rem 8rem 0rem 0rem"}
          fontSize={"4rem"}
          zIndex={"1"}
        />
        <Icon
          position={"absolute"}
          right={"-10rem"}
          top={"0rem"}
          src={BannerBuguer}
        />
      </Container>

      <Container flexdirection={"column"}>
        <Paragraph
          text={
            "Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas."
          }
          color={pigz.colors.white}
          padding={"3rem 0rem 4rem 0rem"}
          fontSize={"1.6rem"}
        />

        <Form
          flexdirection={"column"}
          backgroundcolor={pigz.colors.white}
          radius={"3rem"}
          padding={"2rem 1.5rem 1.5rem"}
        >
          <Container flexdirection="column" padding="1rem">
            {form === 1 ? (
              <>
                <Title
                  text={"Quero vender no Pigz"}
                  color={pigz.fonts.fontGrey1}
                  weight={pigz.fonts.fontWeightSemiold}
                  fontSize={"2.75rem"}
                />
                <Paragraph
                  text={"Dê o primeiro passo para aumentar suas vendas"}
                  padding="1rem 0rem 0rem 0rem"
                  color={pigz.fonts.fontGrey1}
                  fontSize={"1.3rem"}
                />

                <Container flexdirection={"column"}>
                  <Label
                    text={"Nome"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Input
                    backgroundcolor={pigz.colors.white}
                    placeholder={"Leonercio Goesfeeld"}
                    fontSize={"1.5rem"}
                    fontcolor={pigz.fonts.fontInputPlaceholder}
                    padding={"1.2rem 1.7rem"}
                    radius={"1.75rem"}
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                  />
                  <Label
                    text={"E-mail"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Input
                    backgroundcolor={pigz.colors.white}
                    placeholder={"leonercio.goesfeeld@email.com"}
                    fontSize={"1.5rem"}
                    fontcolor={pigz.fonts.fontInputPlaceholder}
                    padding={"1.2rem 1.7rem"}
                    radius={"1.75rem"}
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                  />
                  <Label
                    text={"Telefone"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Select
                    flexDirection="row"
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                    radius={"1.75rem "}
                
                    
                  >
                      <Select
                        backgroundcolor="#F0F0F0"
                        flexDirection="row"
                        padding="1.25rem 2rem 1.25rem 2rem"
                        radius={"1.5rem"}

                      >
                        <Icon
                          src={BrFlagIcon}
                          height="24rem"
                          width="24rem"
                        />
                        <Paragraph
                          padding="0.1rem 0rem 0rem 1rem"
                          text="+55"
                          color="#9F9F9F"
                          fontSize="1.35rem"
                        />
                        
                      </Select>
                      <Input
                          placeholder="(95) 99876-5432"
                          padding="0rem 0rem 0rem 0rem"
                          width="90%"
                          radius={"1.75rem "}
                          height="80%"
                        />
                  </Select>

                  <Paragraph
                    text={
                      "Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp."
                    }
                    fontSize={"1.3rem"}
                    color={pigz.fonts.fontGrey2}
                    weight={"400"}
                    padding={"2.2rem 0rem 0rem 0rem"}
                  />
                </Container>
                <Container padding="2rem" />
                <Button
                  title={"Continuar"}
                  radius={"1.5rem"}
                  padding={"1.25rem"}
                  fontsize={"1.7rem"}
                  onClick={handleClick}
                  backgroundcolor={pigz.colors.orangePigz1}
                />
              </>
            ) : form === 2 ? (
              <>
                <Title
                  text={"Onde fica a sua loja?"}
                  color={pigz.fonts.fontGrey1}
                  weight={pigz.fonts.fontWeightSemiold}
                  fontSize={"2.75rem"}
                />

                <Container flexdirection={"column"}>
                  <Label
                    text={"CEP"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Input
                    backgroundcolor={pigz.colors.white}
                    placeholder={"00000-00"}
                    fontSize={"1.5rem"}
                    fontcolor={pigz.fonts.fontInputPlaceholder}
                    padding={"1.2rem 1.7rem"}
                    radius={"1.75rem"}
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                  />
                  <Container flexdirection="row" position="relative">
                    <Container
                      flexdirection="column"
                      width={"37%"}
                      padding="0rem 1rem 0rem 0rem"
                    >
                      <Label
                        text={"Estado"}
                        weight={"500"}
                        color={pigz.fonts.fontGrey1}
                        fontSize={"1.2rem"}
                        padding={"2rem 0rem 0rem"}
                      />
                      <Input
                        backgroundcolor={pigz.colors.white}
                        placeholder={"UF"}
                        fontSize={"1.5rem"}
                        fontcolor={pigz.fonts.fontInputPlaceholder}
                        padding={"1.2rem 1.7rem"}
                        radius={"1.75rem"}
                        border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                      />
                    </Container>
                    <Container flexdirection="column">
                      <Label
                        text={"Cidade"}
                        weight={"500"}
                        color={pigz.fonts.fontGrey1}
                        fontSize={"1.2rem"}
                        padding={"2rem 0rem 0rem"}
                      />
                      <Input
                        width={"100%"}
                        backgroundcolor={pigz.colors.white}
                        placeholder={"Selecione"}
                        fontSize={"1.5rem"}
                        fontcolor={pigz.fonts.fontInputPlaceholder}
                        padding={"1.2rem 1.7rem"}
                        radius={"1.75rem"}
                        border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                      />
                    </Container>
                  </Container>
                  <Label
                    text={"Endereço"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Input
                    backgroundcolor={pigz.colors.white}
                    placeholder={"Avenida Brasil"}
                    fontSize={"1.5rem"}
                    fontcolor={pigz.fonts.fontInputPlaceholder}
                    padding={"1.2rem 1.7rem"}
                    radius={"1.75rem"}
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                  />
                  <Container flexdirection="row" position="relative">
                    <Container
                      flexdirection="column"
                      width={"37%"}
                      padding="0rem 1rem 0rem 0rem"
                    >
                      <Label
                        text={"Número"}
                        weight={"500"}
                        color={pigz.fonts.fontGrey1}
                        fontSize={"1.2rem"}
                        padding={"2rem 0rem 0rem"}
                      />
                      <Input
                        backgroundcolor={pigz.colors.white}
                        placeholder={"123"}
                        fontSize={"1.5rem"}
                        fontcolor={pigz.fonts.fontInputPlaceholder}
                        padding={"1.2rem 1.7rem"}
                        radius={"1.75rem"}
                        border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                      />
                    </Container>
                    <Container flexdirection="column">
                      <Label
                        text={"Complemento"}
                        weight={"500"}
                        color={pigz.fonts.fontGrey1}
                        fontSize={"1.2rem"}
                        padding={"2rem 0rem 0rem"}
                      />
                      <Input
                        width={"100%"}
                        backgroundcolor={pigz.colors.white}
                        placeholder={"Sala 1"}
                        fontSize={"1.5rem"}
                        fontcolor={pigz.fonts.fontInputPlaceholder}
                        padding={"1.2rem 1.7rem"}
                        radius={"1.75rem"}
                        border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                      />
                    </Container>
                  </Container>
                </Container>
                <Container padding="2rem" />
                <Button
                  title={"Próximo"}
                  radius={"1.5rem"}
                  padding={"1.25rem"}
                  fontsize={"1.7rem"}
                  onClick={handleClick}
                  backgroundcolor={pigz.colors.orangePigz1}
                />
              </>
            ) : (
              <>
                <Title
                  text={"Me conta um pouco sobre a sua loja"}
                  color={pigz.fonts.fontGrey1}
                  weight={pigz.fonts.fontWeightSemiold}
                  fontSize={"2.75rem"}
                />

                <Container flexdirection={"column"}>
                  <Label
                    text={"Nome da loja"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Input
                    backgroundcolor={pigz.colors.white}
                    placeholder={"Restaurante Todo Mundo Gosta"}
                    fontSize={"1.5rem"}
                    fontcolor={pigz.fonts.fontInputPlaceholder}
                    padding={"1.2rem 1.7rem"}
                    radius={"1.75rem"}
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                  />
                  <Label
                    text={"CNPJ da loja"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Input
                    backgroundcolor={pigz.colors.white}
                    placeholder={"12.345.678/0001-99"}
                    fontSize={"1.5rem"}
                    fontcolor={pigz.fonts.fontInputPlaceholder}
                    padding={"1.2rem 1.7rem"}
                    radius={"1.75rem"}
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                  />
                  <Label
                    text={"Tipo de loja"}
                    weight={"500"}
                    color={pigz.fonts.fontGrey1}
                    fontSize={"1.2rem"}
                    padding={"2rem 0rem 0rem"}
                  />
                  <Input
                    backgroundcolor={pigz.colors.white}
                    placeholder={"Selecione"}
                    fontSize={"1.5rem"}
                    fontcolor={pigz.fonts.fontInputPlaceholder}
                    padding={"1.2rem 1.7rem"}
                    radius={"1.75rem"}
                    border={`0.065rem solid ${pigz.fonts.fontInputBorder}`}
                  />

                
                </Container>
                <Container
                  width="100%"
                  padding="7rem 0rem 0rem 0rem"
                >
                  <Button
                    width="100%"
                    title={"Concluir"}
                    radius={"1.5rem"}
                    padding={"1.25rem"}
                    fontsize={"1.5rem"}
                    onClick={handleClick}
                    backgroundcolor={pigz.colors.orangePigz1}
                  />
                </Container>
              </>
            )}
          </Container>
        </Form>
      </Container>
      <Container padding="4.75rem" />
    </Container>
  );
};
