
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataFetch from './components/DataFetch'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/fetch' element={   <DataFetch />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
