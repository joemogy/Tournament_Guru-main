import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import SignIn from './pages/signIn'
import Signup from './pages/signUp'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'

import './App.css';


// import GlobalStyles from "./GlobalStyles";


// import { Navigation } from "./components/Navigation/Navigation";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="newTounament" element={<Blank />} />
                    <Route path="products" element={<Blank />} />
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />
                    <Route path="LogIn" element={<SignIn />} />
                    <Route path="SignUp" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
