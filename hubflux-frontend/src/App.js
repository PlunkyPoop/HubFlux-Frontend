import { Button } from '@mui/material';
import './App.css';
import ButtonAppBar from './components/Appbar'
import PlexTextfield from './components/Plex';


function App() {
  return (
    <div className="App">
        <ButtonAppBar/>
        <PlexTextfield/>
        <Button/>
    </div>
  );
}

export default App;
