import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Root from "./Pages/Root"
import Header from "./Components/Header"
import SingleMovies from "./Pages/single-Movies"



function App() {
  const Router=createBrowserRouter([
    {path:"/Fimo/" , element:<Root/> , 
      children:[
        {path:"" ,
          children:[
            {index:true ,element:<Home/>},
            // {path:"/:Single-Movies" , element:<SingleMovies/>}
          ]
        },
      ]
    }
  ])
  return (
    <RouterProvider router={Router}></RouterProvider>

  )
}

export default App
