import styled from "styled-components";

interface ThumbnailData {
    thumbnail:{
        extension: string;
        path: string;
    }
}

export const Header = styled.header`
    img {
        width: 40%;
        height: auto;
        position: relative;
        left: 29%;
    }

    input{
        background: #f1f1f1;
        height: 35px;
        display: flex;
        font-size: 23px;
        box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.3);
        margin:  20px auto;
        padding: 0px 50px;
        border-radius: 5px;
    }
    
`;

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const urlImg = (props: ThumbnailData) => 
    `${props.thumbnail.path}.${props.thumbnail.extension}`

export const Card = styled.div`
    background: #f1f1f1;
    height: 447px;
    width: 397px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.3);

    h2, p{
        padding: 5px;
        text-align: center;
        
    }

    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
        transition: all 1.2s;
    }

    &:hover{//diminuir a imagem ao passar o mouser por cima
        div#img{
            height: 270px;
        }
    }
`;

export const ButtonMore = styled.div`
    background: #f1f1f1;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 23px;
    cursor: pointer;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.3);
    margin:  20px auto;
    padding: 0px 50px;
    border-radius: 5px;
    transition: all 1.2s;

    &:hover{
        background: #ED1D24;
    }
`;