import styled from "styled-components";

const Style = styled.div`
    display: flex;
    justify-content:flex-end;   
`
const Home = styled.img`
    width: 5vw;
`

const Text = styled.a`
    color: #283618;
    text-decoration: none;
    font-size: 15px;
    margin: 15px 5px;
    padding: 5px 5px;
    width: 50px;
    height: 20px;
    border-radius: 5px;
    border-top: 3px solid #606C38;
    border-bottom: 3px solid #283618;
    :hover {    
        color: #1dc5bd;
    }
`

function NavBar() {
  return (
    <>
        <div>
            <Style>
                <Home src="homelogo.jpeg"alt="home"/>
                <Text href="about">about</Text>
                <Text href="history">history</Text>
                <Text href="resume">resume</Text>
                <Text href="contact">contact</Text>
            </Style>   
        </div> 
    </>
  );
}

export default NavBar;