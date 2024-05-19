import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './assets/styles/general.scss';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './core/theme/theme.js';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </ThemeProvider>
    </BrowserRouter>
);
