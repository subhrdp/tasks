import ContextProvider from '../context';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <ContextProvider>
      <div className='flex h-screen'>
        <Sidebar />
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;
