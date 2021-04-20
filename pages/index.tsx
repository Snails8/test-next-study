import Layout from '../layouts/Layout'
import React from "react";
import Link from 'next/link'
import {AlertLink} from "bootstrap-react";

// function Index(props) {
//     return <h1>Hello, {props.name}</h1>
// }

type Props = {
    name: string
}

const IndexPage = ({ name }: Props) => {
    return (
        <>
            <Layout>
                <h1>Hey Next.js </h1>
                <p>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </p>
            </Layout>
        </>
    )
}

export default Layout