import { useContext } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { StateContext } from '../context';
import ListButton from './ListButton';
import List from './List';
import CreateList from './CreateList';
import { IconInbox, IconCalendarEvent, IconPin } from '@tabler/icons-react';

function Sidebar() {
  const state = useContext(StateContext);

  return (
    <div className='flex w-80 flex-shrink-0 flex-col border-r border-gray-200 bg-gray-100'>
      <ListButton id='inbox' className='mx-4 mb-1 mt-6'>
        <IconInbox />
        Inbox
      </ListButton>
      <ListButton id='upcoming' className='mx-4 mb-1'>
        <IconCalendarEvent />
        Upcoming
      </ListButton>
      <ListButton id='pinned' className='mx-4 mb-4'>
        <IconPin />
        Pinned
      </ListButton>

      <OverlayScrollbarsComponent
        options={{
          scrollbars: {
            autoHide: 'leave',
            autoHideDelay: 250,
            theme: 'os-theme-sidebar',
          },
        }}
        defer
      >
        <ul className='mt-1'>
          {state.lists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </ul>
      </OverlayScrollbarsComponent>
      <CreateList />
    </div>
  );
}

export default Sidebar;
