import './App.css';
import SignIn from './components/SignIn';
import Ondiscuz from './components/OnDiscuz'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'

function App() {

    const [user] = useAuthState(auth)


    return (
        <div className="app">
        {user ? <Ondiscuz /> : <SignIn />}
        </div>
    );
}

export default App;
