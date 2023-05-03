import {
  IconInbox,
  IconCalendarEvent,
  IconPin,
  IconCheckbox,
} from '@tabler/icons-react';

type Props = {
  selected: string;
};

function MainIcon({ selected }: Props) {
  const className =
    'mr-2 flex-shrink-0 -ml-1 h-8 w-8 stroke-[1.25] text-stone-400/75';

  if (selected === 'Inbox') {
    return <IconInbox className={className} />;
  }

  if (selected === 'Upcoming') {
    return <IconCalendarEvent className={className} />;
  }

  if (selected === 'Pinned') {
    return <IconPin className={className} />;
  }

  return <IconCheckbox className={className} />;
}

export default MainIcon;
