
import './App.css';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
