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
        clientId: "2e26f23b-224f-4ba1-bc0b-8942cc1e70a8",
        authority: 'https://standardcloud1.b2clogin.com/standardcloud1.onmicrosoft.com/B2C_1_AnmeldenRegistrieren',
        knownAuthorities :["https://standardcloud1.b2clogin.com"],
        redirectUri: 'https://delightful-river-0a23f1610.azurestaticapps.net',
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
