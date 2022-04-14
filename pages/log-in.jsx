import UnAuthContent from "../components/unAuthContent";
import LogInForm from "../components/LogInForm";
import Layout from "../components/Layout";
import Form from "../components/Form";

export default function logIn() {
  return (
      <Layout>
        <h2>Log-In</h2>
        <UnAuthContent>
            <LogInForm />
        </UnAuthContent>
      </Layout>
  )
}