import './App.css'
import BottlesPanel from './components/BottlesPanel';
import LandingPage from './components/LandingPage';
import LoginPanel from './components/LoginPanel'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Scene from "./demo_componenets/Scene.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <LoginPanel />
  },
  {
    path: "/bottles-panel",
    element: <BottlesPanel />
  },
  {path: "/visualize",
  element: <Scene/>}
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}