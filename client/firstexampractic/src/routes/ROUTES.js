import Add from "../Pages/Add";
import Home from "../Pages/Home";
import Mainroot from "../Pages/Mainroot";


export const ROUTES = [
     {
          path:"/",
          element:<Mainroot/>,
          children:[
               {
                    path:'',
                    element:<Home/>
               },
               {
                    path:'add',
                    element:<Add/>
               }
          ]
     }
]