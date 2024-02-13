import { useAuth } from '../../hooks';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { Header } from './AppBar.styled';


const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};

export default AppBar;