import { useContext } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { StateContext } from '../context';
import SidebarButton from './SidebarButton';
import List from './List';
import CreateList from './CreateList';
import { IconInbox, IconCalendarEvent, IconPinned } from '@tabler/icons-react';

function Sidebar() {
  const state = useContext(StateContext);

  return (
    <div className='flex w-80 flex-shrink-0 flex-col border-r border-stone-300 bg-white'>
      <SidebarButton id='Inbox' className='mx-4 mb-1 mt-6'>
        <IconInbox />
        <span className='mr-2'>Inbox</span>
      </SidebarButton>
      <SidebarButton id='Upcoming' className='mx-4 mb-1'>
        <IconCalendarEvent />
        <span className='mr-2'>Upcoming</span>
      </SidebarButton>
      <SidebarButton id='Pinned' className='mx-4 mb-4'>
        <IconPinned />
        <span className='mr-2'>Pinned</span>
      </SidebarButton>
      <OverlayScrollbarsComponent
        options={{
          scrollbars: {
            autoHide: 'leave',
            autoHideDelay: 250,
            theme: 'os-custom-theme',
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
