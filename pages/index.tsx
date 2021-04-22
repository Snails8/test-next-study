import Layout from '../layouts/Layout'
import React, {useEffect, useState} from "react";

type Props = {
    name: string
}

const Home = ({ name }: Props) => {

    const [stars, setStars] = useState(0)

    useEffect(() => {
        (async () => {
            const res = await fetch('https://api.github.com/repos/zeit/next.js')
            const json = await res.json()
            console.log(json.stargazers_count)
            setStars(json.stargazers_count)
        })();
    })
    return (
        <>
            <Layout>
                <p>User: {name} </p>
            </Layout>
        </>
    )
}

export default Home