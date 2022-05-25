import styled, { css } from "styled-components";

export const ControlButton = styled.button`
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    color: #000000;
    cursor: pointer;
    border: none;
    background-color: transparent;
`;

const getActiveButtonStyles = ({ active }) => {
    if (active) {
        return css`
            pointer-events: none;
            cursor: not-allowed;

            &::after {
                content: "";
                display: block;
                position: absolute;
                bottom: -10px;
                left: 0;
                height: 3px;
                width: 100%;
                background-color: #65b79a;
            }
        `;
    }
};

export const PageButton = styled(ControlButton)`
    position: relative;
    padding: 0 16px;
    ${getActiveButtonStyles}
`;

export default styled.div`
    display: flex;
    justify-content: center;
`;
