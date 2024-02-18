import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage, Form } from 'formik';
import Error from "../Error";
import { ButtonNo, ButtonYes, ButtonsContainer, Container, Input, Title } from './EditModal.styled';
import { editContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Please enter a name"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Please enter a number")
});

const EditModal = ({ isOpen, onClose, onConfirm, contact }) => {
    const contacts = useSelector(selectVisibleContacts);
    const initialValues = {
        name: contact ? contact.name : '',
        number: contact ? contact.number : ''
    }

    const dispatch = useDispatch();

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

        dispatch(editContact({ contactId: contact.id, values: values }));
        actions.resetForm();
        onConfirm();
        toast.success('Contact successfully updated', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <Container
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Edit Confirmation Modal"
        >
            <Title>Edit contact</Title>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form>
                    <Input name="name" type="text" placeholder="Contact name" />
                    <ErrorMessage name="name">{msg => <Error msg={msg} />}</ErrorMessage>

                    <Input name="number" type="text" placeholder="Contact number"/>
                    <ErrorMessage name="number">{msg => <Error msg={msg} />}</ErrorMessage>

                    <ButtonsContainer>
                        <ButtonYes type="submit">Save</ButtonYes>
                        <ButtonNo onClick={onClose}>Back</ButtonNo>
                    </ButtonsContainer>
                </Form>
            </Formik>
        </Container>
    );
};

export default EditModal;

