import { css } from '@emotion/react';
import Link from 'next/link';

interface ProblemListRowProps {
  id: number;
  title: string;
  rate: number;
}

const style = {
  row: css`
    display: flex;
    font-size: 16px;
    font-weight: 400;
    color: #636971;
  `,
  flex1: css`
    flex: 1;
  `,
  flex4: css`
    flex: 4;
  `,
  cell: css`
    padding: 12px 20px;
  `,
  center: css`
    text-align: center;
  `,
  blue: css`
    color: #3949ab;
  `,
};

function ProblemListRow({ id, title, rate }: ProblemListRowProps) {
  return (
    <Link href={`/problem/${id}`}>
      <div css={style.row}>
        <div css={[style.flex1, style.cell]}>{id}</div>
        <div css={[style.flex4, style.cell, style.blue]}>{title}</div>
        <div css={[style.flex1, style.cell, style.center]}>{`${rate}%`}</div>
      </div>
    </Link>
  );
}

export default ProblemListRow;
