import React from 'react';
import DeleteButton from './DeleteButton';

function Sidebar({isDelete, setDelete, setDeleteConfirm}) {
    return (
        <div className="sidebar">
            <h1 id="title">inventory tracker</h1>
            <div className="sidecontent">
                <div id="hello">
                    Hello, name!
                </div>
                {isDelete ? <DeleteButton setDelete={setDelete} setDeleteConfirm={setDeleteConfirm} /> : null}
            </div>
        </div>
    );
}

export default Sidebar;