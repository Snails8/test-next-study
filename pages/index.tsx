import Layout from '../layouts/Layout'
import React from "react";

type Props = {
    name: string
}

const Home = ({ name }: Props) => {
    return (
        <>
            <Layout />
                <div className="container">
                    Dark Souls
                </div>

        </>
    )
}

export default Home