import LogInForm from "../components/LogInForm";
import Layout from "../components/Layout";
import UnAuthContent from "../components/UnAuthContent";

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