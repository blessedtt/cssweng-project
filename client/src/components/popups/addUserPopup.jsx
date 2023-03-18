import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const preventNegPosInput = (event) => {
	if (event.key === "-" || event.key === "+") {
		event.preventDefault();
	}
} 

const AddUserPopup = (
    {
        categories,
        setAdd,
        setUserData,
		submitAdd
    }
    ) => {
    //send data to API to add account
    //fields: fullname, email, price, stock, category
    const { register, handleSubmit } = useForm();

    //submits data to API
    const onSubmit = (data) => {
        data['category'] = selectedOption.category_ID;
        console.log(data)
        setUserData(data)
		submitAdd(true)
	}

    //category field of addUser
    const [selectedOption, setSelectedOption] = useState(null);


    return (
        <div>
            <h5 className='header'>Add New Employee Account</h5>
            <form name ="userForm" onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                <label htmlFor ='fullname'> Full Name </label>
                <input name ='fullname' type='text' {...register('name')} required></input>
                </li>

				<li>
                <label htmlFor = 'email' >Email</label>
                <input name ='email' type='text' {...register('email')} required></input>
                </li>

				<li>
					<label htmlFor='password'>Description</label>
					<textarea name='password' type='text' minLength={0} maxLength={150} {...register('password')} ></textarea>
				</li>
            </ul>
            <ul className='popup-btns'>
                <li>
                <button className='back-btn' onClick={() => setAdd(false)}>
                    Back
                </button>
                </li>
                <li>
                {/* <input className='submit-btn' type = 'submit' value ='Submit' onSubmit={() => setSuccessPopup(true)}>
                    
                </input> */}
                {/* Add if */}
                {/* <button className='submit-btn' onClick={() => {
                    // if ()
                    setSuccessPopup(true);
                    }}>  */}
                <input className='submit-btn' type = 'submit' value = 'Submit' onClick={() =>{
                    // // let x = 1;
                    // if (x==1){
                    //     setSuccessPopup(false);
                    // }
                    let fullname1 = document.forms["userForm"]["fullname"].value;
                    let email1 = document.forms["userForm"]["email"].value;
                    let password1 = document.forms["userForm"]["password"].value;
                    if (fullname1 !=""){
                         setAdd(true);
                    }
                    
                }}>

                </input>
                    
                {/* </button> */}
                </li>
            </ul>
            </form>
        </div>
    )
}

export default AddUserPopup;