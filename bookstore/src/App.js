import logo from './logo.svg';
import './App.css';
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import Books from './components/Book/Books';
import { NavigationProvider, navigationContext } from './context/navigationContext';
import ComponentPicker from './helpers/ComponentPicker';
import navValues from './helpers/navValues';
import { useContext } from 'react';
import DarkSwitch from './components/DarkSwitch';

function App() {
  const { currntNav } = useContext(navigationContext);
  return (
    // <ApolloProvider client={client}>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path="/" component={Books} />
    //       <Route path="/book/:id" component={BookDetails} />
    //     </Switch>
    //   </BrowserRouter>
    // </ApolloProvider>

    <ApolloProvider client={client}>
      <ComponentPicker currentNavLocation={currntNav} />
    </ApolloProvider>
  );
}
export default App;

