import { nanoid } from "nanoid";
import { Button, Container, Input, Title } from "./ContactsForm.styled";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, ErrorMessage, Form } from 'formik';
import Error from "../Error";

const initialValues = {
  name: "",
  number: ""
};

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const ContactsForm = () => {
    const nameId = nanoid();
    const numberId = nanoid();
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);

    const handleSubmit = (values, actions) => {
        const isContact = contacts.some(
            ({ name }) => name.toLowerCase() === values.name.toLowerCase()
        );

        if (isContact) {
            toast.error(`${values.name} already in contacts!`, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }


        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form>
                    <Title>Add Contact</Title>

                    <Input name="name" id={nameId} type="text" placeholder="Contact name" />
                    <ErrorMessage name="name">{msg => <Error msg={msg} />}</ErrorMessage>

                    <Input name="number" id={numberId} type="number" placeholder="Contact number"/>
                    <ErrorMessage name="number">{msg => <Error msg={msg} />}</ErrorMessage>

                    <Button type="submit">Add Contact</Button>
                </Form>
            </Formik>
        </Container>
    )
};

export default ContactsForm;