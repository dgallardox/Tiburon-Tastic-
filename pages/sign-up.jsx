import Layout from "../components/Layout";
import SignUpForm from "../components/SignUpForm";
import UnAuthContent from "../components/UnAuthContent";

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