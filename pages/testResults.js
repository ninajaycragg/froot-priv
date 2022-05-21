import React from 'react';
import { useRouter } from 'next/router';

export default function TestResults() {
  const router = useRouter();

  const data = router.query;
  console.log(data);
  return (
    <div>
      {/* <h1>YOUR RESULTS ARE</h1>
      {data.map((answer) => (
        <p>{answer}</p>
      ))}
      <p></p> */}
    </div>
  );
}
