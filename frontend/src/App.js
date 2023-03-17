import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddDevice from './component/addDevice';
import AllDevice from './component/allDevice';
import UpdateDevice from './component/updateDevice';
import AddLocation from './component/addLocation';
import AllLocation from './component/allLocation';
import UpdateLocation from './component/updateLocation';
import Home from './component/home';
import Header from './component/header';
import Footer from './component/footer';

function App() {
  return (
    <div className='appName'>

    <BrowserRouter>
    <Header/>
      <Routes>

          <Route
              path="api/"
              element={<Home />}
            />

            <Route
              path="api/addDevice"
              element={<AddDevice />}
            />

            <Route
              path="api/allDevice"
              element={<AllDevice />}
            />

            <Route
              path="/update/:id"
              element={<UpdateDevice/>}
            />

            <Route
              path="/api/addlocation"
              element={<AddLocation/>}
            />

            <Route
              path="/api/AllLocation"
              element={<AllLocation/>}
            />

            <Route
              path="/updateLocation/:id"
              element={<UpdateLocation/>}
            />


      </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
