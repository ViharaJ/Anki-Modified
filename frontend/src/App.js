import {BrowserRouter, Routes, Route} from 'react-router-dom'
//pages & components 
import Home from './pages/Home'
import Navbar from './components/navbar'
import Deck from './components/deck'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path ="/"
            element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>

      <Deck name ={"PlaceHolder"}/>
    </div>
  );
};

export default App;
