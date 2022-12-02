import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { LogoContextProvider } from './Components/Context/LogoContext';
import { SliderContextProvider } from './Components/Context/SliderContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogoContextProvider>
    <SliderContextProvider>
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>
    </SliderContextProvider>
    </LogoContextProvider>
  </React.StrictMode>
);