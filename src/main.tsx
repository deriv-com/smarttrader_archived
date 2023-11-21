import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import APIProvider from 'Utils/websocket/APIProvider';
import 'Styles/main.css';
import 'Translations/i18n.ts';
import StartTime from 'Components/trade-dashboard/StartTime/StartTime';
import DurationTypeDropDown from 'Components/trade-dashboard/DurationAndTimeOut/DurationTypeDropDown';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <APIProvider>
            <App />
            <div className='ml-10 w-4/12 rounded-md border border-slate-200 p-5 shadow'>
                <StartTime />
                <DurationTypeDropDown />
            </div>
        </APIProvider>
    </React.StrictMode>
);
