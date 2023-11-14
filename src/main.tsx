import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import APIProvider from 'Utils/websocket/APIProvider';
import 'Styles/main.css';
import 'Translations/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <APIProvider>
            <App />
        </APIProvider>
    </React.StrictMode>
);
