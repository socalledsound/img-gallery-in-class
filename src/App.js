import Gallery from './components/Gallery';
import './App.css';
import { images } from './images/imagesData'

console.log(images)

function App() {
  return (
    <div className="App">
        <Gallery images={images}/>
    </div>
  );
}

export default App;
