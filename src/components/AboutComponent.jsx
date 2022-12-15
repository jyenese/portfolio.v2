import styled from "styled-components";
import Footer from "./Footer";
const Wrapper = styled.p`
    padding: 10px 10px;
    text-align: center;
    font-size: 2vw;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: #283618;
    margin: 15px 5px;
    padding: 5px 5px;
    border-radius: 5px;
    border-top: 3px solid #606C38;
    border-bottom: 3px solid #283618;
`


function AboutComponent(){
    return (
        <>
        <div>
            <Title>About</Title>
            <Wrapper>
            My name Is Jye Calder-Mason, I'm 27 and currently living in Newcastle, NSW. I'm currently in my third term at the Coder Academy(AUS) and really enjoying the progess of attempting all aspects of the programming game. Before changing careers, I started a Carpentry Apprenticeship (2013) and up until 2021 I worked day to day as a carpenter. I wasn't feeling fulfilled in my career choice, so I decided to take a leap of faith and change my career path. I've always been interested in computers and technology, so I decided to give web development a go. I'm currently not working but would love to get a job in the industry as soon as possible. I'm a very hard worker and always willing to learn new things.
            </Wrapper>
            <Wrapper>
            I'm an outgoing and adventurous person, love to travel and try out new things around the world. I'm generally seen with a big smile on my face, and always joking around (99% of the time)
            </Wrapper>

        </div>
            <Footer/>
        </>
    );
}

export default AboutComponent;