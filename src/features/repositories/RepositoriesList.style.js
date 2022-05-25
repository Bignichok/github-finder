import styled from "styled-components";

export const ItemWrapper = styled.div`
    width: 100%;
    height: 224px;
    border-radius: 16px;
    padding: 40px;
    background-color: #ffffff;
    margin: 0 auto 36px;
    display: flex;
`;

export const ImageHolder = styled.div`
    height: 144px;
    width: 128px;
    border-radius: 4px;
    margin-right: 32px;
    background: center / contain no-repeat
        ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const InfoList = styled.ul`
    flex: 1;
`;

export const InfoListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const Name = styled.h3`
    font-size: 22px;
    font-weight: 400;
    line-height: 25px;
    color: #081f32;
    margin: 0;
`;

export const InfoText = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color: #a5adbb;
`;

export const Description = styled.p`
    max-height: 50px;
    overflow-y: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color: #6e798c;
    margin: 0;
`;

export const RatingHolder = styled.div`
    align-self: flex-end;

    & :not(:last-child) {
        margin-bottom: 22px;
    }
`;

export const RatingItem = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: 600;

    & > img {
        width: 30px;
        margin-right: 14px;
    }
`;

export default styled.div`
    width: 100%;
`;
