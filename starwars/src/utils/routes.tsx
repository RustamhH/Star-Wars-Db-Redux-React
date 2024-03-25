import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Films from "../components/Films.tsx";
import People from "../components/People.tsx";
import Planets from "../components/Planets.tsx";
import Species from "../components/Species.tsx";
import Starships from "../components/Starships.tsx";
import Vehicles from "../components/Vehicles.tsx";
import ErrorElement from "../components/ErrorElement.tsx";
import Film from "../components/Film.tsx";
import Person from "../components/Person.tsx";
import Planet from "../components/Planet.tsx";
import Specie from "../components/Specie.tsx";
import Starship from "../components/Starship.tsx";
import Vehicle from "../components/Vehicle.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorElement/>
  },
  {
    path: "/films",
    element: <Films/>,
  },
  {
    path: "/people",
    element: <People/>,
  },
  {
    path: "/planets",
    element: <Planets/>,
  },
  {
    path: "/species",
    element: <Species/>,
  },
  {
    path: "/starships",
    element: <Starships/>,
  },
  {
    path: "/vehicles",
    element: <Vehicles/>,
  },


  {
    path:"/films/:id",
    element:<Film/>,
  },
  {
    path:"/people/:id",
    element:<Person/>,
  },
  {
    path:"/planets/:id",
    element:<Planet/>,
  },
  {
    path:"/species/:id",
    element:<Specie/>,
  },
  {
    path:"/starships/:id",
    element:<Starship/>,
  },
  {
    path:"/vehicles/:id",
    element:<Vehicle/>,
  },
  
]);
