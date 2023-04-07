type Props = {
  children: string;
};

function MenuHeader({ children }: Props) {
  return (
    <div className='mx-2 mb-1 flex h-10 items-center border-b border-gray-200 px-2 text-lg text-gray-400'>
      {children}
    </div>
  );
}

export default MenuHeader;
