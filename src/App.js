
import './App.css';
import PokemonPage from './Components/AnimePage';
import NewProject from './Components/NewProject/NewProject';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    {/* <PokemonPage/> */}

    <Routes>
    <Route path ='/' element={<PokemonPage />}/>
    <Route path ='/profileme' element={<NewProject/>}/>
    {/* <Route path ='/CreatePage2' element={<CreatePage2/>}/>
    <Route path ='/ForgotPass' element={<ForgotPass/>}/>
    <Route path ='/CreateAccount' element={<CreateAccount/>}/>
    <Route path ='/ProfileModal' element={<ProfileEditModal/>}/>
    <Route path='/friends' element={<ProfileFriend />}/>
    <Route path='/MainFeedComponent' element={<MainFeedComponent />}/> */}

    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
