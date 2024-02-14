import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { register } from '../../redux/auth/operations';

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
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup
                    .string()
                    .required("Please enter a password")
                    .min(8, "Password must have at least 8 characters"),
                name: Yup.string().required("Please enter an username").min(4,"Username must have at least 4 characters")
            })}
            onSubmit={handleSubmit}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />

                <label htmlFor="email">Email</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" />

                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default RegisterForm;