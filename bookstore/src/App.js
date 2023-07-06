import logo from './logo.svg';
import './App.css';
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import Books from './components/Books';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookDetails from './components/BookDetails';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/book/:id" component={BookDetails} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
