import { createRoot } from 'react-dom/client';
import App from './app';
import React from 'react';
import './index.styl';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
