import ContextProvider from '../context';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <ContextProvider>
      <div className='flex h-screen bg-white text-stone-600'>
        <Sidebar />
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;
