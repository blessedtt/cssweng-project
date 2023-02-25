import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline, IoBan } from 'react-icons/io5';


export default function PopupMessage ({isSuccess, message, setClose}) {
	return (
		<div className='success'>
			<ul>
				<li>
					<IconContext.Provider
						value ={{ color: '#DD9D34', size:'44px'}}
						>
						{
						message === 'Loading...' ? <></> :
							isSuccess ? <IoCheckmarkCircleOutline /> : <IoBan />
						}
					</IconContext.Provider>
				</li>
				<li>
					{message}
				</li>
				<li>
					<button className='ok-btn' onClick={() => setClose()}>
					Ok
					</button>
				</li>
			</ul>
		</div>
	);
}