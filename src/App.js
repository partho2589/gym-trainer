
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
