import React from 'react';
import DeleteButton from './DeleteButton';
import CategoryFilter from './CategoryFilter';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({
		categories, 
		setFilterCategory, 
		isDelete, 
		setDelete, 
		setDeletePopup,
		logout,
		isAuth
	}) {

		const navigate = useNavigate();

    return (
        <div className="sidebar">
            <h1 id="title">inventory tracker</h1>
            <div className="sidecontent">
                <div id="hello">
                    Hello, name!
                </div>

                <CategoryFilter categories={categories} setFilter={setFilterCategory}/>
                {isDelete ? <DeleteButton setDelete={setDelete} setDeletePopup={setDeletePopup} /> : null}
               
				<button id="logout" onClick={logout}>Logout</button>
				
				{isAuth ? <button id="move-to-admin" onClick={() => navigate('/admin/home')}>Manage Staff</button> : null}
				
            </div>
        </div>
    );
}
