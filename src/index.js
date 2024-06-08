import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import Sidebar from './components/Navbar/Sidebar';
import MessageList from './components/Messages/MessageList';
import MessageSpace from './components/Messages/MessageSpace';
import Settings from './components/Settings/Settings';
import Account from './components/Account/Account';

const theme = 'dark';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="dashboard" element={<Sidebar theme={theme} />}>
        <Route index element={<App theme={theme} />} />
        <Route path="messages" element={<Messages theme={theme} />} />
        <Route path="chats" element={<MessageList theme={theme} />} />
        <Route path="settings" element={<Settings theme={theme} />} />
        <Route path="account" element={<Account theme={theme} />} />
      </Route>
      <Route path="chat" element={<MessageSpace theme={theme} />} />
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
