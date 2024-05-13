import { useState } from "react"

export const useFoo = () => {
  const [foo, setFoo] = useState('');
  return { foo, setFoo };
};
