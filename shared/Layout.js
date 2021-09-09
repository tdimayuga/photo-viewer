import Header from "../components/Header";
import Head from 'next/head'

export default function Layout({ children, user, setToken, showHeader=true, pageName }) {
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      {showHeader && <Header setToken={setToken} id={user?.id} />}
      <main>{children}</main>
    </>
  )
}
