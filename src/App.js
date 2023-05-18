import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Main/Main';
import Topic from './Components/Topic/Topic';
import QuizDetails from './Components/QuizDetails/QuizDetails';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch(" https://openapi.programming-hero.com/api/quiz"),
          element:<Topic></Topic>
        },
        {
          path:'/topic',
          loader:()=>fetch(" https://openapi.programming-hero.com/api/quiz"),
          element:<Topic></Topic>
        },
        {
          path:'/quiz/:quizId',
          loader: async({params})=>{
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<QuizDetails></QuizDetails>
        }
      ]
    },
    {
      path:'*',
      element: <div>This route is not available</div>
    }
  ])
  return (
    <div className="App">  
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
