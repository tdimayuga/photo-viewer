import Header from "../components/Header/Header";
import Head from 'next/head'
import { Container } from "react-bootstrap";

export default function Layout({ children, user, setToken, showHeader=true, pageName }) {
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      {showHeader && <Header setToken={setToken} user={user} />}
      <Container>{children}</Container>
    </>
  )
}
