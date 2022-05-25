import StarSvg from "../../assets/star.svg";
import UserSvg from "../../assets/user.svg";

import {
    ItemWrapper,
    ImageHolder,
    InfoList,
    InfoListItem,
    Name,
    Description,
    InfoText,
    RatingHolder,
    RatingItem,
} from "./RepositoriesList.style";

const RepositoriesListItem = ({
    imageUrl,
    name,
    author,
    language,
    description,
    stars,
    watchers,
}) => {
    return (
        <ItemWrapper>
            <ImageHolder imageUrl={imageUrl} />
            <InfoList>
                <InfoListItem>
                    <Name>{name}</Name>
                </InfoListItem>
                <InfoListItem>
                    <InfoText>{author}</InfoText>
                </InfoListItem>
                <InfoListItem>
                    <InfoText>{language}</InfoText>
                </InfoListItem>
                <InfoListItem>
                    <Description>{description}</Description>
                </InfoListItem>
            </InfoList>
            <RatingHolder>
                <RatingItem>
                    <img src={StarSvg} alt='star icon'></img>
                    {stars} stars
                </RatingItem>
                <RatingItem>
                    <img src={UserSvg} alt='user icon'></img>
                    {watchers} watchers
                </RatingItem>
            </RatingHolder>
        </ItemWrapper>
    );
};

RepositoriesListItem.defaultProps = {
    image: "image",
    name: "",
    author: "",
    language: "",
    description: "",
    stars: 0,
    watchers: 0,
};

export default RepositoriesListItem;
