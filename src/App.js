import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./utils/privateRoute"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Switch>
            <PrivateRoute component={Dashboard} path="/protected" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  )
}

export default App
