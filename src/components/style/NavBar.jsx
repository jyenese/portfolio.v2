import styled from "styled-components";

const Style = styled.div`
    display: flex;
    justify-content:flex-end;
    padding: 5px;
    margin: 10px;
    
`
const Text = styled.a`
    color: black;
    text-decoration: none;
    background-color: #eec98969;
    font-size: 15px;
    margin: 15px 5px;
    padding: 0px;
    border-radius: 1px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    :hover {    
        color: #eec989fa;
    }
`

function NavBar() {
  return (
    <div>
        <Style>
            <Text href="about">about</Text>
            <Text href="history.html">history</Text>
            <Text href="resume.html">resume</Text>
            <Text href="contact.html">contact</Text>
        </Style>
    </div>
  );
}

export default NavBar;