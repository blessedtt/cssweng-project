//delete button confirmation/cancel
const DeleteButton = ({setDelete, setDeleteConfirm}) => {

    return(
        <div className='delete'>
            <button id="cancel_btn" onClick={() => setDelete(false)}>Cancel</button>
            <button id="delete_btn" onClick={() => setDeleteConfirm(true)}>Delete</button>
        </div>
    )
}

export default DeleteButton;
