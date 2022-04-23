import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import consultarCep from "cep-promise";
import { CEPDados } from "../Components/CEPdados";
import { Container, PrimaryButton, SecundaryButton } from "../Styled";
interface Error {
  message: string;
}
interface CEP {
  cep: number;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

function translate(cepDados: CEP) {
  return {
    ESTADO: cepDados.state,
    CIDADE: cepDados.city,
    BAIRRO: cepDados.neighborhood,
    RUA: cepDados.street,
  };
}

const numbersOnly = (str: string) => str.replace(/[^\d]/g, "");

export function Pesquisa(props: any) {
  let navigate = useNavigate();
  const [cepNumber, setCepNumber] = useState<string>("");
  const [cepFavorito, setCepFavorito] = useState<string>("");
  const [cepDados, setCepDados] = useState<any>({});
  const setResultado = props.setResultado;
  const setErrorMessage = props.setErrorMessage;

  useEffect(() => {
    const storedCep = localStorage.getItem("cepFavorito") || "";
    setCepFavorito(storedCep);
  }, []);

  useEffect(() => {
    if (!cepFavorito) {
      return;
    }
    localStorage.setItem("cepFavorito", cepFavorito);
    consultarCep(cepFavorito)
      .then((resultado: CEP) => setCepDados(resultado))
      .catch((err: Error) => setCepDados({ ERRO: err.message }));
  }, [cepFavorito]);

  const handleSuccess = (cepDados: CEP) => {
    const resultado = translate(cepDados);
    setResultado(resultado);
    navigate("/result", { replace: true });
  };
  const handleError = (err: Error) => {
    const errorMessage = err.message;
    setErrorMessage(errorMessage);
    navigate("/erro", { replace: true });
  };

  const handleSearch = () => {
    navigate("/loading", { replace: true });
    consultarCep(cepNumber).then(handleSuccess).catch(handleError);
  };

  const handleFavorite = () => {
    setCepFavorito(cepNumber);
  };

  return (
    <>
      <Container>
        <div>
          <h3>Qual CEP você deseja pesquisar?</h3>

          <InputMask
            mask="99999-999"
            value={cepNumber}
            onChange={(event) => setCepNumber(numbersOnly(event.target.value))}
            placeholder="00000-000"
            required
          />
          <PrimaryButton
            style={{ marginBottom: "10px" }}
            onClick={handleSearch}
          >
            CONSULTAR
          </PrimaryButton>
          <br />
          <SecundaryButton onClick={handleFavorite}>
            SALVAR FAVORITO
          </SecundaryButton>
          <br />
          <section>
            <b>FAVORITO: </b> {cepFavorito}
          </section>

          <CEPDados cepDados={translate(cepDados)} />
        </div>
      </Container>
    </>
  );
}
