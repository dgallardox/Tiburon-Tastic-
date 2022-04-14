import Layout from "../components/Layout";
import UnAuthContent from "../components/unAuthContent";
import SignUpForm from "../components/SignUpForm";
import Card from "../components/Card";

export default function SignUp() {
  return (
    <Layout>
      <h1>Sign Up</h1>
      <UnAuthContent>
          <SignUpForm />
      </UnAuthContent>
    </Layout>
  )
}