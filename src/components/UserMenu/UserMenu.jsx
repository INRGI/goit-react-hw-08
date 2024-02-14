import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';
import { Button, Container, Text } from './UserMenu.styled';
import { ImExit } from "react-icons/im";

const UserMenu = () => {
    const dipatch = useDispatch();
    const { user } = useAuth();

    return (
        <Container>
            <Text>Welcome, {user.name}</Text>
            <Button type='button' onClick={() => dipatch(logOut())}>
                <ImExit size={20}/>
            </Button>
        </Container>
    )
}

export default UserMenu;