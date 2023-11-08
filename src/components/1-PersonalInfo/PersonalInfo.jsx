//*StyleSheet
import './PersonalInfo.css'

import {useState} from 'react';
import PropTypes from 'prop-types';

const PersonalInfo = ({children}) => {
    const [error , setError] = useState({
        name: false,
        email: false,
        phone: false
    })
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })

    console.log(error);


    const Change = (e) => {
        const {name, value} = e.target;
        const nameRegex = /^[a-zA-Z\p{L}\s]+$/u;
        const emailRegex = /^(?!\s)[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9]{10,10}$/;

        if(name === 'name'){
            if(!nameRegex.test(value)){
                setError(prev => ({...prev, [name]: true}))
            }else{
                setError(prev => ({...prev, [name]: false}))
            }
        }else if(name === 'email'){
            if(!emailRegex.test(value)){
                setError(prev => ({...prev, [name]: true}))
            }else{
                setError(prev => ({...prev, [name]: false}))
            }
        }else if(name === 'phone'){
            if(!phoneRegex.test(value)){
                setError(prev => ({...prev, [name]: true}))
            }else{
                setError(prev => ({...prev, [name]: false}))
            }
        }

        setValues(prev => ({...prev, [name]: value}))

    }

    return (
        <>
        <div className='personalInfo'>
            <header className='personalInfoTitle'>
                <h1 className='title'>Personal info</h1>
                <p className='infoText'>Please provide your name, email address, and phone number.</p>
            </header>
            <div className="infoInputs">
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input 
                        className={error.name ? 'error' : ''}
                        placeholder='e.g. Stephen King' 
                        name='name'
                        type="text" 
                        id="name" 
                        value={values.name}
                        onInput={Change}
                    />
                </div>
                <div className="input">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        className={error.email ? 'error' : ''}
                        placeholder='e.g. 6sLmH@example.com' 
                        type="email" 
                        name="email"
                        id="email" 
                        value={values.email}
                        onInput={Change}
                    />
                </div>
                <div className="input">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="phoneInput">
                        <select name="country" id="country">
                            <option value="australia">+61</option>
                            <option value="canada">+1</option>
                            <option value="uk">+44</option>
                            <option value="france">+33</option>
                            <option defaultValue={true} value="turkey">+90</option>
                        </select>   
                        <input
                            className={error.phone ? 'error' : ''}
                            placeholder='e.g. 123 456 78 90' 
                            type="tel" 
                            name="phone"
                            id="phone" 
                            value={values.phone}
                            onInput={Change}
                        />
                    </div>
                </div>
            </div>
        {children}
        </div>
        </>
    )
}

PersonalInfo.propTypes = {
    children: PropTypes.node
}



export default PersonalInfo