import React, { useEffect, useState } from 'react';
import keytar from 'keytar';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { Alert, AlertType } from '../components/Alert';

const serviceName = 'contact-manager-pass';

async function setPasswordOnDesc({ service, account, password }: any) {
  const setPassResponse = await keytar.setPassword(service, account, password);
  return setPassResponse;
}

/**
 * check if any passwords saved on the desc
 */
async function findPassword() {
  return keytar.findPassword(serviceName);
}

export function Login() {
  const history = useHistory();

  const [isWrongPass, toggleIsWrongPass] = useState<boolean>();
  const [account, setAccount] = useState<string>();
  const [password, setPassword] = useState();

  const onSubmitFindPassword = async () => {
    const existingPassword = await findPassword();
    if (existingPassword) setAccount(existingPassword);
  };

  useEffect(() => {
    onSubmitFindPassword();
  }, []);

  const onSubmitRegister = async (e: any) => {
    e.preventDefault();
    const token = await setPasswordOnDesc({
      service: serviceName,
      account: 'user-account',
      password,
    });
    console.log('new password setted:         ', token);
  };

  const onSubmitLogin = async (e: any) => {
    e.preventDefault();
    if (password === account) history.push('/app');
    else toggleIsWrongPass(true);
  };

  return (
    <div id="login-component">
      <h1>Welcome to Simple Secure Contact Manager</h1>
      {account ? (
        <h3>Please enter the password for your contact data file.</h3>
      ) : (
        <h3>Please enter the password for your new contact data file.</h3>
      )}

      {isWrongPass && (
        <Alert type={AlertType.Error}>Wrong Password, Please try again</Alert>
      )}
      <form>
        <input
          placeholder="Password"
          className="input"
          type="password"
          name="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <div className="mt-4">
          <Button
            className="mx-4 sm-mx-2 w-10"
            onClick={(e: any) =>
              account ? onSubmitLogin(e) : onSubmitRegister(e)
            }
          >
            Ok
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
