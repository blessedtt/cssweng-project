import React from 'react';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';


function Navbar({setButtonPopup, setDeleteSuccessPopup}) {
	return (
		<div className ="nav">   
			<ul>
				<li id = 'first'>
					HOME
				</li>
				<li>
				<button onClick={() => setButtonPopup(true)}>
						<IconContext.Provider
							value ={{ color: '#FFFFFFFF', size:'44px'}}
						>
						<IoAddCircleOutline />
						</IconContext.Provider>
				</button>
	
				</li>
				<li>
					<button>
					<IconContext.Provider
						value ={{ color: '#FFFFFFFF', size:'44px'}}
					>
						<IoPencil />
					</IconContext.Provider>
					</button>
				</li>
				<li>
				<button onClick={() => setDeleteSuccessPopup(true)}>
					<IconContext.Provider
					value ={{ color: '#FFFFFFFF', size:'44px'}}
					>
					<IoTrashSharp />
				</IconContext.Provider>
				</button>
				</li>
			</ul>
		</div>
	)
}

export default Navbar;