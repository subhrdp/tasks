import ContextProvider from '../context';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <ContextProvider>
      <div className='flex h-screen justify-center bg-stone-100 text-stone-600 drop-shadow-lg'>
        <Sidebar />
        <Main />
        <div className='absolute -z-10 mx-auto h-screen w-[1280px] bg-stone-100 drop-shadow-lg'></div>
      </div>
    </ContextProvider>
  );
}

export default App;
