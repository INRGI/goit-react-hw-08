import { Helmet } from "react-helmet";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm />
        </div>
    );
}

export default LoginPage;