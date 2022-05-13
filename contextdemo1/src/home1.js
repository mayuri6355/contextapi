import {UserContext} from './App';
import {useContext} from 'react';
function Home1(){
    const user= useContext(UserContext);
    return(
        <div>hello-{user.name}
        <div>hello-{user.rno}</div></div>
    )
}
export default Home1;