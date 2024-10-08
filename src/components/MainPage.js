import React from "react";
import NavBar from "./NavBar";
import FinanceContainer from "./FinanceContainer";
import Sidebar from "./Sidebar";
import { createBrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Income from "../components/Menu/Income";
import Savings from "../components/Menu/Savings";
import Expenses from "../components/Menu/Expenses";
import Transactions from "../components/Menu/Transactions";
import Billings from "../components/Menu/Billings";
import Settings from "./general/settings";
import Help from "./general/Help";
import LoginPage from "./login/LoginPage";
import OTPPage from "./login/OTPPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute"
import usePageTracker from "./LastVisitedpage";
import { useSelector } from "react-redux";


const MainPage = () => {
  usePageTracker();
  const isMenu=useSelector((store)=>store.view.toggleMenu);
  return (
    <div className="grid grid-cols-12">
      <div className={` md:block md:col-span-2 md:bg-[white] ${isMenu?'block':'hidden'}`}>
        <Routes>
          <Route path="/:id" element={<Sidebar />} />
        </Routes>
      </div>
      <div className="col-span-12 md:col-span-10 w-full">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
  
};

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element:
    <PublicRoute>
      <LoginPage />
      </PublicRoute>
  },
  {
    path: "/",
    element: <PublicRoute>
    <LoginPage />,
    </PublicRoute>
  },
  {
    path: "/otppage",
    element: <OTPPage />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/overview",
        element: <FinanceContainer />,
      },
      {
        path: "/income",
        element: <Income />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/savings",
        element: <Savings />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/billings",
        element: <Billings />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

export default MainPage;
