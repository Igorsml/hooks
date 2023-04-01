import React, { useEffect, useState } from "react";
import scss from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => console.log(`U clicked ${count} times`));

  return (
    <div>
      <button className={scss.counterBtn} onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}
