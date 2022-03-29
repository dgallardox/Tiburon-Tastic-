import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Image from "next/image";

export default function Home({ sharks }) {
  return (
    <div className={styles.container}>
      <Nav home="nav-link active" sharks="nav-link" blog="nav-link" />
      <div id="doc">
        <Image
          alt="cover img"
          src="https://images.unsplash.com/photo-1628565561425-64e75a6588cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
