import { getLogin } from '../services/API';
import { useState, useContext } from 'react';
import { GlobalContext } from '../Components/context/globalContext';

const Login: React.FC = () => {
  const [error, setError] = useState(false);
  const { token, setToken } = useContext(GlobalContext);

  const sumbitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = document.forms[0];

    const login = {
      email: email.value,
      password: password?.value,
    };

    getLogin(login?.email, login?.password)
      .then((data) => {
        setToken(true);
        localStorage.setItem(
          'access_token',
          JSON.stringify(data?.data.access_token)
        );
      })
      .catch((error) => setError(true));
  };

  const logOut = () => {
    setToken(false);
    localStorage.removeItem('access_token');
  };

  return (
    <section>
      {token ? (
        <div className='shadow-md p-[32px] max-w-sm w-full absolute right-[50%] left-[50%] top-[25%] translate-y-[-50%] translate-x-[-50%] text-center'>
          <h2 className='font-medium text-2xl	mb-6'> Welcome!</h2>
          <button className='block my-0 mx-auto btn-defalut' onClick={logOut}>
            Log Out
          </button>
        </div>
      ) : (
        <div className='shadow-md p-[32px] max-w-sm w-full absolute right-[50%] left-[50%] top-[35%] translate-y-[-50%] translate-x-[-50%]'>
          {error ? (
            <p className='text-red-600 text-center text-xl'>
              Wrong password or login!
            </p>
          ) : null}
          <h1 className='font-medium text-3xl pb-3'>Login</h1>
          <form action='login' id='login' onSubmit={(e) => sumbitData(e)}>
            <label htmlFor='email' className='pb-2 block'>
              Email
              <input
                className='block min-w-[300px] w-full p-2 border border-grey rounded mt-2'
                type='text'
                name='email'
                placeholder='me@example.com'
              />
            </label>
            <label htmlFor='password'>
              Password
              <input
                className='block min-w-[300px] w-full p-2 border border-grey rounded mt-2 mb-4'
                type='password'
                name='password'
                placeholder='**********'
              />
            </label>
            <button className='btn-defalut float-right' type='submit'>
              Log In
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Login;
