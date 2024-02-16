import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Helmet } from "react-helmet";
import { ContactsContainer, Container, EmptyTitle } from "./ContactsPage.styled";
import Loader from '../../components/Loader';
import Filter from "../../components/Filter";
import ContactsList from "../../components/ContactsList";
import ContactsForm from "../../components/ContactsForm";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <Helmet>
                <title>Your Contacts</title>
            </Helmet>
          <ContactsForm />
          <ContactsContainer>      
            {isLoading && !error ? (<Loader />) :
          contacts.length > 0 ? (
              <>
                <Filter />
                <ContactsList />
              </>
            ) : (
              <EmptyTitle>Your phonebook is empty.</EmptyTitle>
            )
          }
          </ContactsContainer>
        </Container>
    );
}

export default ContactsPage;