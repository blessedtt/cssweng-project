//delete button confirmation/cancel
const DeleteButton = ({setDelete, setDeletePopup}) => {

    return(
        <div className='delete'>
            <button id="cancel_btn" onClick={() => setDelete(false)}>Cancel</button>
            <button id="delete_btn" onClick={() => setDeletePopup(true)}>Delete</button>
        </div>
    )
}

export default DeleteButton;
