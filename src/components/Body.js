import Login from './Login.js';
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';



const Body = () => {
  console.log("hello");
 const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    }
  ])

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;