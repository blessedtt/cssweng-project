import React from 'react';
import DeleteButton from './DeleteButton';
import Category from './Category';

export default function Sidebar({
	isDelete, 
	setDelete, 
	setDeletePopup,
	logout
	}) {
    return (
        <div className="sidebar">
            <h1 id="title">inventory tracker</h1>
            <div className="sidecontent">
                <div id="hello">
                    Hello, name!
                </div>
                <Category />

				<button id="logout" onClick={logout}>Logout</button>

                {isDelete ? <DeleteButton setDelete={setDelete} setDeletePopup={setDeletePopup} /> : null}
               
            </div>
        </div>
    );
}
