import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Image
        alt="cover-image"
        src="https://i.ibb.co/7YwTMsw/Adobe-Stock-307814520.jpg"
        layout="fill"
      />
    </Layout>
  )
}