<<<<<<< HEAD
/* eslint no-undef: 0 */
=======
>>>>>>> feat/eslint_travis
import React from 'react';
import { Helmet } from 'react-helmet';
import { addLocaleData, IntlProvider } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import Header from './Header/';
import Footer from './Footer/';
import Product from './Product/';

addLocaleData(ruLocaleData);

function App() {
  return (
    <IntlProvider locale="ru">
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
