import { UserContext } from "./App";
import {useContext} from 'react';
function Home()
{
        const user = useContext(UserContext);
    return(
        <div>
            <h1>Hello - {user.name}</h1>
            <h1>Hello - {user.rno}</h1>

        </div>
    )

}

export default Home;