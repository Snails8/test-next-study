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
            <div className="container">
                Dark Souls
            </div>
        </>
    )
}

export default Home