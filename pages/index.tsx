import React from "react";
import {awaitExpression, returnStatement} from "@babel/types";

const Home = ({ stars }) => {
    return (
        <div> Next stars: {stars} </div>
    )
}

Home.getInitialProps = async ({ req}) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return {stars: json.stargazers_count}
}

// export async function getServerSideProps() {
//     const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     const json = await res.json()
//     return {stars: json.stargazers_count}
// }

export default Home