import { IconContext } from 'react-icons';
import { IoTrashBinSharp } from 'react-icons/io5';


export default function DeleteUserPopup({setDelete, setDeletePopup}) {
	return (
		<div className='delete-success'>
			<ul>
				<li>
					<IconContext.Provider value={{ color: '#DD9D34', size:'44px'}}>
						<IoTrashBinSharp />
					</IconContext.Provider>
				</li>
				<li>
					Are you sure you want to delete?
				</li>
				<li>
					<button className='cancel-btn' onClick={() => {
						setDeletePopup(false)
						setDelete(false)
					}}>
						No
					</button>
					<button className='ok-btn' onClick={() => {
						setDeletePopup(false)
						setDelete(true)
					}}>
						Yes
					</button>
				</li>
			</ul>
		</div>
	);
}