import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './Header';
// import Post from './Post';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';


function App() {
  return ( 
    // <Routes>
    //     <Route index element={
    //         <main className='mainGuard'>
    //         <Header/>
    //         <Post/>
    //         <Post/>
    //         <Post/>
    //     </main>
    //     }/>
    //     <Route path='/login' element={
    //         <div>Login page</div>
    //     }/>
    // </Routes> 


    // The Outlet component alone allows nested routes to 
    // render their element content out and anything else 
    //the layout route is rendering, i.e. navbars, sidebars,
    // specific layout components, etc.


    <UserContextProvider>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<IndexPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='register' element={<RegisterPage/>} />
                <Route path='/create' element={<CreatePost/>} />
                <Route path='/post/:id' element={<PostPage/>} />
            </Route>
        </Routes>
    </UserContextProvider>


    
  );
}

export default App;
