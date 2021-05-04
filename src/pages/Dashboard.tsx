import React, { useEffect, useState } from 'react';
import { Redirect, Route, useHistory, useRouteMatch } from 'react-router-dom';
import CreateContact from './CreateEditContact';
import { ContactDetails } from './ContactDetails';
import { Button } from '../components/Button';
import { LogoutIcon, PlusIcon } from '../components/Icons';
import { Contact } from '../utilities/types';
import { getContactList } from '../utilities/crudOperations';

interface SidebarProps {
  contactList: Array<Contact>;
  onClickContact: any;
  activeContact?: Contact;
}

export function Sidebar(props: SidebarProps) {
  const { contactList = [], onClickContact, activeContact } = props;
  return (
    <div id="sidebar" className="w-25-percent bg-white">
      <ul>
        {contactList.map((one: Contact) => (
          <li key={one.id}>
            <div
              className={`py-1 px-1 ${
                activeContact?.id === one.id ? 'active' : ''
              }`}
              role="presentation"
              onClick={() => onClickContact(one)}
            >
              {one?.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Dashboard() {
  const history = useHistory();
  const { path, url } = useRouteMatch();

  // currently selected contact
  const [activeContact, setActiveContact] = useState<Contact>();

  const [contactList, setContactList] = useState<Array<Contact>>([]);

  const [shouldReloadList, toggleShouldReloadList] = useState<boolean>(true);

  useEffect(() => {
    if (shouldReloadList) {
      getContactList()
        .then((data: Array<Contact>) => setContactList(data))
        .catch(() => setContactList([]));
      toggleShouldReloadList(false);
    }
  }, [shouldReloadList]);

  return (
    <div id="dashboard-page">
      <div className="flex row-reverse">
        <div
          role="presentation"
          onClick={() => {
            history.push('/login');
          }}
        >
          <LogoutIcon />
        </div>
      </div>
      <div className="flex justify-between align-center">
        <h1>Contact List</h1>
        <Button
          className="w-14 h-5"
          onClick={() => {
            history.push(`${url}/contact/create`);
          }}
        >
          <PlusIcon /> New
        </Button>
      </div>
      <div id="dashboard-layout" className="flex justify-between">
        <Sidebar
          contactList={contactList}
          activeContact={activeContact}
          onClickContact={(contact: Contact) => {
            setActiveContact(contact);
            if (path !== `${path}/contact`) {
              history.push(`${url}/contact`);
            }
          }}
        />
        <div className="w-70-percent bg-white py-2 px-2" id="content">
          <Route exact path={`${path}/contact`}>
            <ContactDetails
              onDeletingContact={() => setActiveContact(undefined)}
              onSubmitRefetchList={() => toggleShouldReloadList(true)}
              details={activeContact}
            />
          </Route>
          <Route exact path={`${path}/contact/create`}>
            <CreateContact
              onSubmitRefetchList={() => toggleShouldReloadList(true)}
              details={activeContact}
            />
          </Route>
          <Redirect from="*" to={`${path}/contact`} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
