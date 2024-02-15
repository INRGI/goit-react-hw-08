import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { register } from '../../redux/auth/operations';
import { Button, Container, Input, Title } from './RegisterForm.styled';
import Error from '../Error';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(
            register(values)
        );
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ email: '', password: '', name: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Please enter an email address'),
                password: Yup
                    .string()
                    .required("Please enter a password")
                    .min(8, "Password must have at least 8 characters"),
                name: Yup.string().required("Please enter an username").min(4,"Username must have at least 4 characters")
            })}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
        >
            <Container>
                <Title>Register</Title>
                <Input name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name">{msg => <Error msg={msg} />}</ErrorMessage>

                <Input name="email" type="text" placeholder="Email" />
                <ErrorMessage name="email">{msg => <Error msg={msg} />}</ErrorMessage>

                <Input name="password" type="password" placeholder="Password"/>
                <ErrorMessage name="password">{msg => <Error msg={msg} />}</ErrorMessage>

                <Button type="submit">Submit</Button>
            </Container>
        </Formik>
    );
};

export default RegisterForm;