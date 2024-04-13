 import './App.css';
 import Header from './components/Header/header';
 import Body from './components/Body/Body';
 import { Provider } from 'react-redux';
 import store from './utils/store';
 import { RouterProvider, createBrowserRouter } from 'react-router-dom';
 import MainContainer from './components/MainContainer/MainContainer'
 import Demo from './components/Datas/Demo';
 import Demo2 from './components/Datas/Demo2';
 import WatchPage from './components/WatchPage/WatchPage';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Body/>,
    children: [
      {
        path:'/',
        element:<MainContainer /> 
      },
      {
        path:'watch',
        element:<WatchPage />
      },
      {
        path:'demo',
        element:
        <>
        <Demo/>
        <Demo2/>
        </>
        
      }
    ]
  }
]);

 function App() {
   return (
     <Provider store={store}>
         <Header />
         <RouterProvider router={appRouter}/>
         
     </Provider>
   );
 }
 
 
 
/**
head
Body
SideBar
  Menu Items
Main Container
ButtonsList
Video Container
 VideoCard


*/

export default App;
