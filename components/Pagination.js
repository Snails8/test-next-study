import Router from "next/router";
import Link from 'next/link';

const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5;

  // startとendをもとに配列を作成しそれを元に計算
  const range = (start, end) =>
      [...Array(end - start + 1)].map((_, i) => start + i)

  return (
      <ul>
        {range(1, Math.ceil(totalCount /PER_PAGE)).map((number, index) => (
            <li key={index}>
              <Link href={`/blog/page/${number}`}>
                <a>{number}</a>
              </Link>
            </li>
        ))}
      </ul>
  );
}

export default Pagination