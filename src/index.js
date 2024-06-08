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
import Helper from './components/Helpers/Helper';
import AppProvider from './AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Helper/>}>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Sidebar />}>
          <Route index element={<App />} />
          <Route path="messages" element={<Messages />} />
          <Route path="chats" element={<MessageList />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="chat" element={<MessageSpace />} />
      </Route>
    )
  );

  return (
    <AppProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AppProvider>
  )
}

root.render(
  <Index/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
