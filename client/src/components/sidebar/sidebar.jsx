import React from 'react';
import DeleteButton from './DeleteButton';
import Category from './Category';

export default function Sidebar({isDelete, setDelete, setDeletePopup}) {
    return (
        <div className="sidebar">
            <h1 id="title">inventory tracker</h1>
            <div className="sidecontent">
                <div id="hello">
                    Hello, name!
                </div>
                <Category />
                {isDelete ? <DeleteButton setDelete={setDelete} setDeletePopup={setDeletePopup} /> : null}
               
            </div>
        </div>
    );
}
