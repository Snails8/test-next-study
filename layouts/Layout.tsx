import React, {ReactNode} from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Head from "next/head";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'title'}:Props) => (
    <React.Fragment>
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-9" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />

        <Footer />
    </React.Fragment>
)

export default Layout