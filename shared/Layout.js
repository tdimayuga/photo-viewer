import Header from "../components/Header/Header";
import Head from 'next/head'
import { Container } from "react-bootstrap";
import { isEmpty } from "../services/utils";

export default function Layout({ children, user, showHeader=true, pageName }) {
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      {showHeader && !isEmpty(user) && <Header user={user} />}
      <Container>{children}</Container>
    </>
  )
}
