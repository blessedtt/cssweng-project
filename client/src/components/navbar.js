import React, {Children} from 'react';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, IoSearchCircleSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';


function Navbar({
	setAdd, 
	setDelete,
	setShowSearch,
	showSearch,
	isDelete,
	isAuth,
	children
}) {
	return (
		<div className ="nav">   
			<ul>
				<li id = 'first'>
					HOME
				</li>
				<li>
					{children}
				</li>
				<li>
					<button onClick={() => setShowSearch(!showSearch)}>
					<IconContext.Provider
						value ={{ color: '#FFFFFFFF', size:'44px'}}
					>
						<IoSearchCircleSharp />
					</IconContext.Provider>
					</button>
				</li>

				{isAuth ? 
				<>
					<li>
					<button onClick={() => setAdd(true)}>
							<IconContext.Provider
								value ={{ color: '#FFFFFFFF', size:'44px'}}
							>
							<IoAddCircleOutline />
							</IconContext.Provider>
					</button>
		
					</li>
					<li>
					<button onClick={() => setDelete(!isDelete)}>
						<IconContext.Provider
						value ={{ color: '#FFFFFFFF', size:'44px'}}
						>
						<IoTrashSharp />
					</IconContext.Provider>
					</button>
					</li>
				</>
				: <></>}
			</ul>
		</div>
	)
}

export default Navbar;