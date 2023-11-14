import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import APIProvider from 'Utils/websocket/APIProvider';
import 'Styles/main.css';
import 'Translations/i18n.ts';
import StartTime from 'Components/trade-dashboard/start-time/StartTime';
import DurationAndTimeout from 'Components/trade-dashboard/duration-and-time-out/DurationAndTimeOut';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <APIProvider>
            <App />
            <div className='ml-10 w-4/12 rounded-md border border-slate-200 p-5 shadow'>
                <StartTime />
                <DurationAndTimeout />
            </div>
        </APIProvider>
    </React.StrictMode>
);
