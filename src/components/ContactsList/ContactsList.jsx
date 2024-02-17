import { useDispatch, useSelector } from 'react-redux';
import { Button, Contact, Container } from './ContactsList.styled';
import { selectVisibleContacts } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/operations';

    
const ContactsList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);
    
    
    return (
        <Container>
            {visibleContacts.map(contact => (
                <Contact key={contact.id}>
                    {contact.name + ' : ' + contact.number}
                    <Button
                        type='button'
                        name='delete'
                        onClick={() => dispatch(deleteContact(contact.id))}
                    >
                        Delete
                    </Button>
                </Contact>
            ))}
        </Container>
    )
};

export default ContactsList;