import './App.css'
import BottlesPanel from './components/BottlesPanel';
import LandingPage from './components/LandingPage';
import LoginPanel from './components/LoginPanel'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
  }
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}