

import Directory from './components/category-item/directory/directory.component';
import Home from './routes/home/home.component';
import {Routes,Route} from 'react-router-dom';
import NavigationBar from './routes/navigartion/navbar.component';
import Authentication from './routes/auth/auth.component';

const Shop = ()=>{
      return(
        <div>
          <h2>Shopping</h2>
        </div>
      )
}
const App = () => {
    return(
  <Routes>
    <Route path='/' element={<NavigationBar/>}>
    <Route index element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/Auth' element={<Authentication/>}/>
    
    </Route>

    </Routes>
    )
};

export default App;
