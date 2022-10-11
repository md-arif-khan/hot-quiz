import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Main from "./layouts/Main";
import Chart from './components/Chart/Chart';



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      loader:async ()=>{
         return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Home></Home>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    },
    {
      path:'/quiz/:quizId',
      loader:({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element:<Quiz></Quiz>
    },
    {
      path:'/chart',
      loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Chart></Chart>
    },
    {
      path:'*',
      element:<ErrorMessage></ErrorMessage>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
