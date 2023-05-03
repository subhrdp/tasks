import ContextProvider from '../context';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <ContextProvider>
      <div className='flex h-screen justify-center bg-stone-100 text-stone-600'>
        <div className='absolute mx-auto h-screen w-[1280px] bg-white drop-shadow-lg'></div>
        <Sidebar />
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;
