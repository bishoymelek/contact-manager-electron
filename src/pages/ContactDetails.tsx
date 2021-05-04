import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { TrashIcon } from '../components/Icons';
import { Contact } from '../utilities/types';
import { deleteContact } from '../utilities/crudOperations';
import Alert, { AlertType } from '../components/Alert';

interface ContactDetailsProps {
  details?: Contact;
  onSubmitRefetchList: any;
  onDeletingContact: any;
}

export function ContactDetails(props: ContactDetailsProps) {
  const { details, onSubmitRefetchList, onDeletingContact } = props;

  const [isDeleteSucceed, toggleIsDeleteSucceed] = useState<boolean>(false);
  const [isDeleteFailed, toggleIsDeleteFailed] = useState<boolean>(false);

  useEffect(() => {
    toggleIsDeleteFailed(false);
    toggleIsDeleteSucceed(false);
  }, []);

  const onSubmitDeleteContact = async (e: any) => {
    e.preventDefault();
    if (details) {
      deleteContact(details)
        .then(() => {
          onSubmitRefetchList();
          onDeletingContact();
          return toggleIsDeleteSucceed(true);
        })
        .catch(() => toggleIsDeleteFailed(true));
    }
  };

  return (
    <div id="contact-details">
      {isDeleteSucceed && (
        <Alert
          onClose={() => toggleIsDeleteSucceed(false)}
          type={AlertType.Success}
        >
          Contact Deleted Successfully
        </Alert>
      )}
      {isDeleteFailed && (
        <Alert
          onClose={() => toggleIsDeleteFailed(false)}
          type={AlertType.Error}
        >
          Something went wrong please try
        </Alert>
      )}
      {details ? (
        <>
          <div className="flex justify-between align-center">
            <h1>{details?.name}</h1>
            <Button onClick={onSubmitDeleteContact}>
              <TrashIcon />
            </Button>
          </div>
          <ul>
            <li>Phone: {details?.phone}</li>
            <li>Email: {details?.email}</li>
            <li>Address: {details?.address}</li>
          </ul>
        </>
      ) : (
        <h1>Please select a contact from the sidebar</h1>
      )}
    </div>
  );
}

export default ContactDetails;
