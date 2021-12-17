import Home from "./Pages/Home";
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-weather-api.herokuapp.com/'
  })
  return (
    <ApolloProvider client={client}>
    <div className="root" className='App'>
      <Home/>
    </div>
    </ApolloProvider>
  );
}

export default App;
