/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import MainNavBar from 'components/MainNavBar/index';

import GlobalStyle from '../../global-styles';

export default function App() {
  const { Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <MainNavBar />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Content>
      <Footer />
    </Layout>
  );
}
