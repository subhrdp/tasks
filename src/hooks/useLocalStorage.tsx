import React, { useReducer, useEffect } from 'react';

function getStore<S>(key: string, initialValue: S): S {
  const savedStore = localStorage.getItem(key);
  return savedStore ? JSON.parse(savedStore) : initialValue;
}

function init<S>({ key, initialValue }: { key: string; initialValue: S }): S {
  return getStore(key, initialValue);
}

function useLocalStorage<S, A>(
  key: string,
  reducer: (prevState: S, action: A) => S,
  initialValue: S
): [S, React.Dispatch<A>] {
  const [store, dispatch] = useReducer(reducer, { key, initialValue }, init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(store));
  }, [key, store]);

  return [store, dispatch];
}

export default useLocalStorage;
