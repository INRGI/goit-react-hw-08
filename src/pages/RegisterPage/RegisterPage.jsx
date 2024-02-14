import { Helmet } from "react-helmet";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;