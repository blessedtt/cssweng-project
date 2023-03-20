import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SidebarAccount({ user }) {

	const navigate = useNavigate();

    return (
        <div className="sidebar">
            <h1 id="title">inventory tracker</h1>
            <div className="sidecontent">
                <div id="hello">
                    Hello{user ? " , " + user.name : "!"}
                </div>


            	<button onClick={() => navigate("/home")} className="sidebutton">Back to Products</button>
               
            </div>
        </div>
    );
}
