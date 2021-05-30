import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";


// MSAL configuration
const configuration = {
    auth: {
        clientId: "0ca30df2-8879-425a-aa5f-9b9198791e26"
    }
};

const pca = new PublicClientApplication(configuration);

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
    <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
