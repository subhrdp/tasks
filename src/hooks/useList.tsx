import { useContext } from 'react';
import { StateContext, DispatchContext } from '../context';
import createId from '../utils/createId';
import getCount from '../utils/getCount';
import { ListType } from '../context/types';

function useList(id?: string) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const addList = (input: string) =>
    dispatch({
      type: 'add-list',
      payload: {
        id: createId(),
        label: input,
        collapseCompleted: false,
      },
    });

  const updateList = (list: ListType) =>
    dispatch({
      type: 'update-list',
      payload: list,
    });

  const deleteList = (id: string) =>
    dispatch({ type: 'delete-list', payload: id });

  return {
    addList,
    updateList,
    deleteList,
    ...(id && {
      selected: state.selected === id,
      handleClick: () =>
        dispatch({ type: 'change-selected-list', payload: id }),
      listCount: getCount(id, state),
    }),
  };
}

export default useList;
