import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import APIProvider from 'Utils/websocket/APIProvider';
import 'Translations/i18n.ts';
import 'Styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <APIProvider>
            <App />
        </APIProvider>
    </React.StrictMode>
);
