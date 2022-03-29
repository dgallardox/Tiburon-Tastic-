import Head from "next/head";

export default function Title(props) {
  return (
    <div id="titleComp">
      <Head>
        <title>{ props.title }</title>
      </Head>
      <h2>{ props.page }</h2>
    </div>
  );
}
