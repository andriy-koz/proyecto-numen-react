import styled from 'styled-components';

export const StyledArrow = styled.div`
    background-size: cover;
    width: 42px;
    height: 42px;
    border: 1px solid #b3b3b3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid #fff;
        cursor: pointer;
    }
`;