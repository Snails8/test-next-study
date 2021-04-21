import Layout from '../layouts/Layout'
import React from "react";
import Link from 'next/link'
import {AlertLink, Button} from "bootstrap-react";

// function Index(props) {
//     return <h1>Hello, {props.name}</h1>
// }

type Props = {
    name: string
}

const Home = ({ name }: Props) => {
    return (
        <>
            <Layout title="Home | next.js + TypeScript">
                <h1>Hello Next.js</h1>
                <p>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Button>test</Button>
                </p>
            </Layout>
        </>
    )
}

export default Home