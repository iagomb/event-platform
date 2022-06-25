import { ApolloProvider } from "@apollo/client"
import { BrowserRouter, Route } from "react-router-dom"
import { Router } from "./Router"
import { client } from "./lib/apollo"
import './styles/global.css'
function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        
      </ApolloProvider>
    </div>
  )
}

export default App
