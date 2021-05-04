import React, { useState } from 'react';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { Contact } from '../utilities/types';
import { createContact } from '../utilities/crudOperations';
import { Alert, AlertType } from '../components/Alert';

interface ContactFormProps {
  onSubmitRefetchList: any;
}

const initialContactState = {
  id: uuidv4(),
  name: '',
  phone: '',
  email: '',
  address: '',
};

function CreateContact(props: ContactFormProps) {
  const history = useHistory();
  const { onSubmitRefetchList } = props;

  const [isCreateSucceed, toggleIsCreateSucceed] = useState<boolean>(false);
  const [isCreateFailed, toggleIsCreateFailed] = useState<boolean>(false);

  const [contact, setContact] = useState<Contact>(initialContactState);

  const onSubmitCreateContact = async (e: any) => {
    e.preventDefault();
    toggleIsCreateSucceed(false);
    createContact(contact)
      .then(() => {
        onSubmitRefetchList();
        toggleIsCreateSucceed(true);
        return setContact({ ...initialContactState, id: uuidv4() });
      })
      .catch(() => toggleIsCreateFailed(true));
  };

  return (
    <>
      {isCreateSucceed && (
        <Alert
          onClose={() => toggleIsCreateSucceed(false)}
          type={AlertType.Success}
        >
          Contact Created Successfully
        </Alert>
      )}
      {isCreateFailed && (
        <Alert
          onClose={() => toggleIsCreateFailed(false)}
          type={AlertType.Error}
        >
          Something went wrong please try
        </Alert>
      )}
      <form>
        <div className="flex justify-between">
          <input
            value={contact?.name}
            placeholder="Name"
            className="input w-50-percent"
            type="text"
            name="name"
            onChange={(e: any) =>
              setContact({ ...contact, name: e.target.value })
            }
          />
          <input
            value={contact?.phone}
            placeholder="Phone"
            className="input w-50-percent"
            type="text"
            name="phone"
            onChange={(e: any) =>
              setContact({ ...contact, phone: e.target.value })
            }
          />
        </div>
        <div className="flex justify-between">
          <input
            value={contact?.email}
            placeholder="Email"
            className="input w-50-percent"
            type="text"
            name="email"
            onChange={(e: any) =>
              setContact({ ...contact, email: e.target.value })
            }
          />
          <textarea
            value={contact?.address}
            placeholder="Address"
            className="input w-50-percent"
            name="address"
            onChange={(e: any) =>
              setContact({ ...contact, address: e.target.value })
            }
          />
        </div>
        <div className="flex row-reverse">
          <Button className="w-10" onClick={onSubmitCreateContact}>
            Ok
          </Button>
          <Button
            className="mx-4 sm-mx-2 w-10"
            onClick={() => history.push('/app/contact')}
          >
            Close
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreateContact;
