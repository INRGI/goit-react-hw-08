import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/operations';
import { Button, Container, Input, Title } from './LoginForm.styled';
import Error from '../Error';

const LoginForm = () => {
    const dispatch = useDispatch();

    const schema = Yup.object({
                email: Yup.string().email('Invalid email address').required('Please enter an email address'),
                password: Yup
                    .string()
                    .required("Please enter a password")
                    .min(8, "Password must have at least 8 characters") 
            })

    const handleSubmit = (values, actions) => {
        dispatch(
            logIn(values)
        );
        actions.resetForm();
    };
    

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            <Container>
                <Title>Login</Title>
                <Input name="email" type="text" placeholder="Email" />
                <ErrorMessage name="email">{msg => <Error msg={msg} />}</ErrorMessage>

                <Input name="password" type="password" placeholder="Password"/>
                <ErrorMessage name="password">{msg => <Error msg={msg} />}</ErrorMessage>

                <Button type="submit">Submit</Button>
            </Container>
        </Formik>
    );
};

export default LoginForm;