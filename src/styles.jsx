import styled from "styled-components";

export const Container = styled.div`
    width: 550px;
    max-width: 90%;
    background-color: ${({theme}) => theme.colors.white};
    padding: 40px;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const Faqs = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;

    & h1 {
        font-weight: 700;
        color: ${({theme}) => theme.colors.darkPurple};
        font-size: 45px;
    }
`;

export const Question = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    transition: 0.2s ease-in-out;
    color: ${({theme}) => theme.colors.darkPurple};
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.GrayishPurple};
    }

    & p {
        font-size: ${({theme}) => theme.size};
        font-weight: 700;
        margin: 0;
    }
`;

export const Background = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    z-index: -1;
    object-fit: cover;
`;