import React from "react";
import Link from 'next/link'

type Props = {
    stars: number
}

const Home = ({ stars }: Props) => {
    return (
        <div>
            <p>Next stars: {stars}</p>
            <Link href="/get-server-side-props">
                <a>Go to getServerSideProps</a>
            </Link>
        </div>
    )
}

// Next.js 9.3囲碁の場合、getStaticPropsのgetServerSidepropsを使うべし
// Home.getInitialProps = async ({  }) => {
//     const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     const json = await res.json()
//     return {stars: json.stargazers_count}
// }

// ビルド時に取得する
export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    console.log(json.stargazers_count)

    return {
        props: {
            stars: json.stargazers_count,
        },
    }
}

export default Home