import './css/Login.css'
import {IoPersonSharp} from 'react-icons/io5';
import { IconContext } from 'react-icons';

function LoginEmp(){
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
                        Employee Login
                    </li>
                    <form>
                        <li>
                            <label>Email</label>
                            <input type='text'></input>
                        </li>
                        <li>
                            <label>Password</label>
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

export default LoginEmp