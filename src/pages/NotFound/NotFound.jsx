import { Helmet } from 'react-helmet';
import not from '../../images/not.png';
import { Container } from './NotFound.styled';

const NotFound = () => {
    return (
        <Container>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <img src={not} width={400}/>
        </Container>
        
                                    
    );
};

export default NotFound;