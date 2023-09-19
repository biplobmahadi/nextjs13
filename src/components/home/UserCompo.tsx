'use client';

import { FC, useState } from 'react';

interface IProp {
  props: any;
}
export const UserCompo: FC<IProp> = ({ props }) => {
  const [count, setCount] = useState(0);
  console.log(props, 'here');
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {props.map((el: any) => (
        <p>{el.name}</p>
      ))}
    </div>
  );
};
