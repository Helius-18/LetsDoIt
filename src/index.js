import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './components/Login';
import Messages from './components/Messages';
import Sidebar from './components/Sidebar';

const theme = 'dark';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="dashboard" element={<Sidebar theme={theme} />}>
        <Route index element={<App theme={theme} />} />
        <Route path="messages" element={<Messages theme={theme} />} />
      </Route>
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
