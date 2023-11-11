/** @format */
import { Switch, Route } from 'react-router-dom';
//components
import Login from './components/Login';
import Chat from './components/Chat';
//contexts
import AuthContextProvider from './contexts/AuthContextProvider';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chat} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
