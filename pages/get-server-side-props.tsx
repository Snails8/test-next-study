import React from "react";
import Link from 'next/link'

type Props = {
    stars: number
}

const Index = ({ stars }: Props) => {
    return (
        <div>
            <p>Next Stars X : {stars}</p>
            <Link href="/">
                <a>Go to Home</a>
            </Link>
        </div>
    )
}
// リクエスト時に取得
export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()

    return {
        props: {
            stars: json.stargazers_count,
        },
    }
}

export default Index