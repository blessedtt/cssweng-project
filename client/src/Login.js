import './css/Login.css'
import {IoPersonSharp} from 'react-icons/io5';
import { IconContext } from 'react-icons';

function Login(){
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
                        Inventory Tracker
                    </li>
                    <li>
                        <button>
                            Admin
                        </button>
                        <button>
                            Employee
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Login