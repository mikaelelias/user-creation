import styled from "styled-components";
import Background from "./assets/bg image 1.svg"

export const Container = styled.div`
    background-image: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
        
`;


export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%
        rgba(255, 255, 255, 0.6) 0.85%
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;

    padding: 50px 36px;
    display: flex;
    flex-direction: column;

`;

export const H1 = styled.h1`
    width: 60px;
    height: 40px;
    top: 50px;
    left: 176px;
    margin: 80px;
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-size: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #eeeeee;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    top: 193px;
    left: 36px;
    padding: 15px, 20px, 15px, 25px;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px #00000040;
`;

export const Button = styled.button`
    
`;
