/* eslint-disable import/prefer-default-export */
import sjcl from 'sjcl';
import fs from 'fs';
import { Contact } from './types';

const ENCRYPTION_SECRET = 'hi';
const filePath = '/home/ahmed/Desktop/data.json';

export function decryptFile(content: string) {
  return sjcl.decrypt(ENCRYPTION_SECRET, content);
}

export function encryptFile(content: string) {
  return sjcl.encrypt(ENCRYPTION_SECRET, content);
}

export async function getContactList(): Promise<Contact[]> {
  try {
    const content = fs.readFileSync(filePath);
    const decryptedData = sjcl.decrypt(ENCRYPTION_SECRET, content.toString());
    if (decryptedData) {
      const parsedData = JSON.parse(decryptedData);
      return parsedData;
    }
    return [];
  } catch (error) {
    throw Error('Something went wrong,try again!');
  }
}

export async function createContact(newContact: Contact) {
  try {
    const fileData = await getContactList();
    const newContactList = JSON.stringify([...fileData, newContact]);
    const encryptedNewList = encryptFile(newContactList);
    return fs.writeFileSync(filePath, encryptedNewList);
  } catch (error) {
    throw Error('Something went wrong,try again!');
  }
}

export async function deleteContact(contact: Contact) {
  try {
    const fileData = await getContactList();
    const newContactList = fileData.filter(
      (contactData) => contactData.id !== contact.id
    );
    const stringifiedList = JSON.stringify(newContactList);
    const encryptedNewList = encryptFile(stringifiedList);
    return fs.writeFileSync(filePath, encryptedNewList);
  } catch (error) {
    throw Error('Something went wrong,try again!');
  }
}
