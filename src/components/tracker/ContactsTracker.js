import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../form/Form";
import Section from "../section/Section";
import List from "../list/List";
import Filter from "../filter/Filter";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import { getContactsOperations } from "../../redux/operations/contactsOperations";
import { resetError } from "../../redux/actions/contactsActions";
import { getError, getContactsLoading } from "../../redux/selectors/contactsSelectors";

const ContactsTracker = () => {
  const error = useSelector(getError);
  const loading = useSelector(getContactsLoading);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(resetError());
  };

  useEffect(() => {
    dispatch(getContactsOperations());
  }, []);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Form />

        {error ? (
          <ErrorMessage error={error} onclick={handleClick} />
        ) : (
          <>
            <Filter />
            {loading ? <Spinner /> : <List />}
          </>
        )}
      </Section>
      )}
    </>
  );
};

export default ContactsTracker;
