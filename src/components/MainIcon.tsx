import {
  IconInbox,
  IconCalendarEvent,
  IconPin,
  IconList,
} from '@tabler/icons-react';

type Props = {
  selected: string;
};

function MainIcon({ selected }: Props) {
  const className =
    'mr-2 flex-shrink-0 -ml-1 h-8 w-8 stroke-[1.25] text-neutral-400';

  if (selected === 'Inbox') {
    return <IconInbox className={className} />;
  }

  if (selected === 'Upcoming') {
    return <IconCalendarEvent className={className} />;
  }

  if (selected === 'Pinned') {
    return <IconPin className={className} />;
  }

  return <IconList className={className} />;
}

export default MainIcon;
