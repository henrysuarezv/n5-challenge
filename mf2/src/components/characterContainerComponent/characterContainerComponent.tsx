import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { useRequest } from "../../context/RequestContext";
import CharacterComponent from "../characterComponent/characterComponent";
import CharacterSelector from "../../selectors/characterSelector";

const StyledSpinner = styled(Spinner)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const CharacterContainerComponent = () => {
  const { requestCharacter, loading } = useRequest();
  const characterSelector = CharacterSelector();
  const { t } = useTranslation();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const handleRenderSerie = (event: CustomEvent) => {
      setMovie(event.detail.data);
      requestCharacter(event.detail.data);
    };

    document.addEventListener("renderSerie", handleRenderSerie);

    return () => {
      document.removeEventListener("renderSerie", handleRenderSerie);
    };
  }, [requestCharacter]);

  if (loading) {
    return (
      <StyledSpinner className="loader" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </StyledSpinner>
    );
  }

  return (
    <>
      {characterSelector.characters &&
        characterSelector.characters.length > 0 && (
          <>
            <h1>
              {t("characterContainerComponent.title")} : {movie}
            </h1>
            <Row xs={1} md={4} className="g-4">
              {characterSelector.characters.map((item) => (
                <Col key={item.name}>
                  <CharacterComponent item={item} />
                </Col>
              ))}
            </Row>
          </>
        )}
    </>
  );
};
export default CharacterContainerComponent;
