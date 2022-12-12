import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import '../assets/css/main.css';
import { GlobalStyles } from '../styles/global';
import theme from '../styles/theme';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
