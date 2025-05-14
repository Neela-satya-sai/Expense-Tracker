import Home from './pages/Home/Home'
import { SnackbarProvider } from 'notistack';
// import "App.css";

function App() {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}  >
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;