import React from 'react';
import DeleteButton from './DeleteButton';
import CategoryFilter from './CategoryFilter';

export default function Sidebar({categories, setFilterCategory, isDelete, setDelete, setDeletePopup}) {
    return (
        <div className="sidebar">
            <h1 id="title">inventory tracker</h1>
            <div className="sidecontent">
                <div id="hello">
                    Hello, name!
                </div>
                <CategoryFilter categories={categories} setFilter={setFilterCategory}/>
                {isDelete ? <DeleteButton setDelete={setDelete} setDeletePopup={setDeletePopup} /> : null}
               
            </div>
        </div>
    );
}
