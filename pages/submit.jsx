import Form from "../components/Form"
import Nav from "../components/Navbar"
import Layout from "../components/Layout"

export default function Submit() {
  return (
    <>
      <Layout title="Submit" submit="nav-link active" home="nav-link" blog="nav-link" >
        <Form />
      </Layout>
    </>
  )
}