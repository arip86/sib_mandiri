import styled from 'styled-components';
const ContactSection = 
styled.section`
padding: 40px 20px;
text-align: center;
background-color: #007bff;
color: #fff
`;
const Title = styled.h2 `
font-size: 2 rem;
margin-bottom: 20px
`;
const Button = styled.button `
padding: 10px 20px;
background-color: white;
color: #007bff;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover{
background-color: #0056b3;
color: white;
}
`;
function Contact(){
    return(
        <ContactSection>
            <Title>Contact US</Title>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto in ad numquam, repellat aliquam eos nemo ducimus praesentium sapiente, 
                mollitia natus. Expedita quis laborum qui illum deserunt possimus quibusdam.</p>
                <Button>Contact Now</Button>
        </ContactSection>
    )
}
export default Contact;