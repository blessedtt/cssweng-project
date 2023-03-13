import React from 'react';
import { IoAddCircleOutline, IoSearchCircleOutline, IoTrashSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function setSearch(){
	var x = document.getElementsByClassName("search-bar");
	if (x.visibility==="hidden"){
		x.visiblity = "visible";
	}
	else{
		x.visibility="hidden";
	}
}


function Navbar({
	setAdd, 
	setDelete,
	isDelete,
	setSearch,
}) {
	return (
		<div className ="nav">   
			<ul>
				<li id = 'first'>
					HOME
				</li>
				<li>
					<input className='search-bar' type='search'>

					</input>

				</li>
				<li>
					<button onClick={() => setSearch()}>
						<IconContext.Provider
							value ={{ color: '#FFFFFFFF', size:'44px'}}
						>
						<IoSearchCircleOutline />
						</IconContext.Provider>
					</button>
				</li>
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
			</ul>
		</div>
	)
}

export default Navbar;