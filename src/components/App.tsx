import ContextProvider from '../context';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <ContextProvider>
      <div className='bg-stone-100'>
        <div className='mx-auto flex h-screen max-w-screen-xl bg-white text-stone-600 drop-shadow-lg'>
          <Sidebar />
          <Main />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
