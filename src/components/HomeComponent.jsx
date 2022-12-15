import styled from "styled-components";
import Default from "./style/Default";
import Footer from "./Footer";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    font-size: 4vw;
    color: #606C38;
    padding:5%;
    word-spacing: 2.5px;
    img{
        width: 30vw;
        height: 30vh;
        padding: 3.5%;
        :hover{
            transform: scale(1.5);
            transition: 1s;
        }
    }
`
function HomeComponent(){
    return (
        <>
        <Default id="home">
            <Wrap>
                Hey, I'm Jye Calder-Mason!
                <br/>
                Over the last 12 months I've been studying web development via the "Full Stack Bootcamp" with the Coder Academy.
                <br/>
                <img src="https://i.imgur.com/1Z1Z1Z1.jpg" alt="Jye Calder-Mason"/>
            </Wrap>
            <Footer/>
        </Default>
        </>
    );
}

export default HomeComponent