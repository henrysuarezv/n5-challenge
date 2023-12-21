import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import "../../i18n.js";

const ItemTextContainer = styled.div`
  color: gray;
`;
const ItemTextTitle = styled.div`
  text-decoration: underline;
  color: black;
`;
const StyledCardImg = styled(Card.Img)`
  &:hover {
    opacity: 0.6;
  }
`;

const StyledCard = styled(Card)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  &:hover {
    z-index: 5;
    transform: scale(1.05); /* Zoom in on hover */
  }
`;

const CharacterComponent = ({ item }) => {
  const { t } = useTranslation();

  if (item) {
    return (
      <StyledCard className="characterComponent p-4">
        <StyledCardImg
          src={item.imageUrl}
          variant="top"
          alt={t("characterComponent.name", { characterName: item.name })}
        />
        <Card.Body className="characterComponent__body p-1">
          <Card.Title className="m-0">
            <b>{t("characterComponent.name")}:</b> {item.name}
          </Card.Title>
          <ListGroup variant="flush">
            <ItemTextContainer>
              <ItemTextTitle>{t("characterComponent.tvShows")}: </ItemTextTitle>
              {item.tvShows.join(", ")}
            </ItemTextContainer>
            <ItemTextContainer>
              <ItemTextTitle>
                {t("characterComponent.videoGames")}:{" "}
              </ItemTextTitle>
              {item.videoGames.join(", ")}
            </ItemTextContainer>
            <ItemTextContainer>
              <ItemTextTitle>{t("characterComponent.enemies")}: </ItemTextTitle>
              {item.enemies.join(", ")}
            </ItemTextContainer>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <Card.Link
            target="_blank"
            rel="noopener noreferrer"
            href={item.sourceUrl}
          >
            {t("characterComponent.moreInfo")}
          </Card.Link>
        </Card.Footer>
      </StyledCard>
    );
  }
  return null;
};

export default CharacterComponent;
