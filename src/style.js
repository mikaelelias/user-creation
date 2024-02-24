import styled from "styled-components";
import Background from "./assets/bg image 1.svg"
import Arrow from "./assets/arrow-right.svg"

export const Container = styled.div`
    background-image: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;    
    height: 100vh; ;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const H1 = styled.h1`
    font-size: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-size: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #eeeeee;
    margin-left: 25px;
`;

export const Input = styled.input`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
    );
    width: 342px;
    height: 58px;
    border:none;
    border-radius: 14px;
    outline: none;
    box-shadow: 0px 4px 4px 0px #00000040;
    padding-left: 25px;
    color: #ffffff;
    margin-bottom: 34px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    color: #ffffff;
    font-size: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20;

    &:hover {
        opacity: 0.5;
    }
`;

