import React, { createContext } from 'react';
import reducer from './reducer';
import useLocalStorage from '../hooks/useLocalStorage';
import type { StateType, ActionType } from './types';

type Props = { children: React.ReactNode };

const defaultState = {
  lists: [],
  tasks: [],
  selected: 'Inbox',
  collapseCompleted: false,
};

export const StateContext = createContext<StateType>(null!);
export const DispatchContext = createContext<React.Dispatch<ActionType>>(null!);

function ContextProvider({ children }: Props) {
  const [state, dispatch] = useLocalStorage('tasks', reducer, defaultState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default ContextProvider;
