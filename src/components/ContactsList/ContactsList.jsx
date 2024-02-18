
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonEdit, ButtonsContainer, Contact, Container } from './ContactsList.styled';
import { selectVisibleContacts } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import DeleteConfirmationModal from '../DeleteConfirmationModal';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditModal from '../EditModal/EditModal';

const ContactsList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [contactToEdit, setContactToEdit] = useState(null);

    const handleDeleteClick = (id) => {
        setContactToDelete(id);
        setIsModalOpen(true);
    };

    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setContactToDelete(null);
    };

    const handleEditClick = (contact) => {
        setContactToEdit(contact);
        setIsEditModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (contactToDelete) {
            dispatch(deleteContact(contactToDelete));
            setIsModalOpen(false);
            setContactToDelete(null);
            toast.success('Contact successfully deleted', {
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
        }
    };

    const handleConfirmEdit = () => {
        setIsEditModalOpen(false);
        setContactToEdit(null);
    };

    return (
        <Container>
            {visibleContacts.map(contact => (
                <Contact key={contact.id}>
                    {contact.name + ' : ' + contact.number}
                    <ButtonsContainer>
                        <ButtonEdit type='button' name='edit' onClick={() => handleEditClick(contact)}>
                            Edit
                        </ButtonEdit>
                        <Button
                            type='button'
                            name='delete'
                            onClick={() => handleDeleteClick(contact.id)}
                        >
                            Delete
                        </Button>
                    </ButtonsContainer>
                </Contact>
            ))}
            <DeleteConfirmationModal
                isOpen={isModalOpen}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
            />
            <EditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onConfirm={handleConfirmEdit}
                contact={contactToEdit}
            />
        </Container>
    );
};

export default ContactsList;
