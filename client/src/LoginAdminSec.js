import './css/Login.css'
import {IoPersonSharp} from 'react-icons/io5';
import { IconContext } from 'react-icons';

function LoginAdminSec(){
    return(
        <div className='login-container'>
            <div className='login-elements'>
                <ul>
                    <li>
                        <IconContext.Provider
							value ={{ color: '#A67438', size:'200px'}}
						>
						<IoPersonSharp />
				        </IconContext.Provider>
                    </li>
                    <li id='login-text'>
                        Admin Login
                    </li>
                    <form>
                        <li>
                            <label>What city were you born in?</label>
                        </li>
                        <li>
                            <input type='text'></input>
                        </li>
                        <li>
                            <input type='submit' value='Enter'  className='login-enter'></input>
                        </li>
                    </form>
                    
                </ul>

            </div>
        </div>
    )
}

export default LoginAdminSec