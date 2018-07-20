import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Body from '../Body/Body';
import NotFoundPage from '../NotFoundPage';
import Home from '../Home/Home';
import Done from '../Done/Done';
import Todos from '../Todos/Todos';
import './App.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header/>
      <br/>
      <Body children={children}/>
    </div>
  );
};

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/todos" component={Todos}/>
            <Route path="/done" component={Done}/>
            <Route path='*' component={NotFoundPage}/>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
