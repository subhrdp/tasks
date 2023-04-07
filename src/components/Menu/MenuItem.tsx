type Props = {
  children: string;
  onClick: () => void;
};

function MenuItem({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='flex h-9 w-full items-center rounded-lg px-4 text-lg text-gray-600 hover:bg-gray-200'
    >
      {children}
    </button>
  );
}

export default MenuItem;
