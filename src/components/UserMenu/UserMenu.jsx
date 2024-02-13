import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';


const UserMenu = () => {
    const dipatch = useDispatch();
    const { user } = useAuth();

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button type='button' onClick={() => dipatch(logOut())}>
                Logout
            </button>
        </div>
    )
}

export default UserMenu;