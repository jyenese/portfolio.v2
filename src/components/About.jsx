import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    background-color: #eec98969;
    border-radius: 1px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    margin: 10px;
    padding: 10px;
`

function About(){
    return (
        <Wrap>
            Hey, I'm Jye Calder-Mason
            <br/>
            I'm currently a Student of the Full Stack CoderAcademy 10 month Bootcamp
            <br/>
            And it's time to look for some junior developer work!
            <br/>
        </Wrap>
    );
}

export default About