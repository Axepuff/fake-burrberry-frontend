import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import Header from './Header/';
import Footer from './Footer/';
import Product from './Product/';
import Catalog from './Catalog/';

addLocaleData(ruLocaleData);

function App() {
  return (
    <IntlProvider locale="ru">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/:category" component={Catalog} />
            <Route path="/:category/:id" component={Product} />
            <Redirect from="/" to="/men/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
