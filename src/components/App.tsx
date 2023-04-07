import ContextProvider from '../context';
import Sidebar from './Sidebar';

function App() {
  return (
    <ContextProvider>
      <div className='flex h-screen'>
        <Sidebar />
        <div />
      </div>
    </ContextProvider>
  );
}

export default App;
