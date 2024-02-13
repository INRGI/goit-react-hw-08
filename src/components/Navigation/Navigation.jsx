import { useAuth } from '../../hooks';
import { Logo, LogoContainer, StyledLink } from './Navigation.styled';
import { RiContactsBook2Fill } from "react-icons/ri";

const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <LogoContainer>
            <RiContactsBook2Fill size={33} color="white" />
            <Logo>PhoneBook</Logo>
            <StyledLink to='/'>
                Home
            </StyledLink>
            {isLoggedIn && (
                <StyledLink to='/contacts'>
                    Contacts
                </StyledLink>
            )}
        </LogoContainer>
    );
};

export default Navigation;