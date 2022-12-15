import styled from "styled-components";

const Style = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px 5px;
    img{
        width: 2vw;
        height: 2vh;
        margin:5px;
        :hover{
            transform: scale(1.5);
        }
    }
`


function Footer(){
    return (
        <Style>
            <a href="https://github.com/jyenese">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/jye-calder-mason-089188256/">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Jye Calder-Mason"/>
            </a>
        </Style>
    );
}

export default Footer