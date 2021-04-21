import React, {ReactNode} from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Head from "next/head";
import Form from '../components/Form';
import List from "../components/List";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'title'}:Props) => (
    <>
        <Head>
            <title>Form Next</title>
        </Head>

        <Header />

        <main>
            <div className="container">{children}</div>
            <Form />
            <List />
        </main>

        <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
    `}</style>
    </>
)

export default Layout