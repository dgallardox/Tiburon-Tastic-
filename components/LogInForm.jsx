import Link from "next/link";
import { useMutation, gql } from "@apollo/client";
import { GET_USER } from "../hooks/useAuth";
import { TextField } from "@mui/material";
import CardLayout from "./Card";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";


const LOG_IN = gql`
  mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: {
      login: $login
      password: $password
    }) {
      status
    }
  }
`;

export default function LogInForm() {
  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [
      { query: GET_USER }
    ],
  });
  const errorMessage = error?.message || '';
  const isEmailValid =
    !errorMessage.includes('empty_email') &&
    !errorMessage.includes('empty_username') &&
    !errorMessage.includes('invalid_email') &&
    !errorMessage.includes('invalid_username');
  const isPasswordValid =
    !errorMessage.includes('empty_password') &&
    !errorMessage.includes('incorrect_password');
  
    function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(data);
    logIn({
      variables: {
        login: email,
        password,
      }
    }).catch(error => {
      console.error(error);
    });
    }
  
  return (

    <CardLayout>
    <form method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
          <TextField
            id="log-in-email"
            label="email"
            type="email"
            name="email"
            autoComplete="username"
            required
          /><br />
        
          <TextField
            id="log-in-password"
            label="password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          /><br />

        <Link href="/forgot-password">
          <a className="forgot-password-link">Forgot password?</a>
        </Link><br />
        {!isEmailValid ? (
          <p className="error-message">Invalid email. Please try again.</p>
        ) : null}
        {!isPasswordValid ? (
          <p className="error-message">Invalid password. Please try again.</p>
          ) : null}
          
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </Button>
          
      </fieldset>
      <p className="account-sign-up-message">
        Don&#39;t have an account yet?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </p>
      </form>
      </CardLayout>

  );
}