import { Helmet } from "react-helmet";
import { Container, ContainerBlock, Title } from "./HomePage.styled";

const HomePage = () => {
    return (
        <Container>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <ContainerBlock>
                <Title>One Contact Book, Endless Devices</Title>
            </ContainerBlock>
            
        </Container>
        
    );
}

export default HomePage;