//*StyleSheet
import './PersonalInfo.css'

import {useState} from 'react';
import PropTypes from 'prop-types';

const PersonalInfo = ({nextStep , prevStep,contentContainer}) => {
    const [error , setError] = useState({
        name: false,
        email: false,
        phone: false
    })
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        country: 'turkey',
    })

    
    const [seccondClick , setSeccondClick] = useState(false);


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
        const SaveInfo = () => {
            if(values.name && values.email && values.phone && !error.name && !error.email && !error.phone){
                setTimeout(() => {
                    contentContainer.current.classList.remove('fadeOut');
                    nextStep();
                }, 300);
                contentContainer.current.classList.add('fadeOut');
            }else{
                setSeccondClick(true)
                setError({
                    name: true,
                    email: true,
                    phone: true
                })
            }
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
                    <label 
                     htmlFor="name"
                     className={error.name ? 'error' : ''}
                    >Name</label>
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
                    <label 
                     htmlFor="email"
                     className={error.email ? 'error' : ''}>Email Address</label>
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
                    <label 
                     htmlFor="phone"
                     className={error.phone ? 'error' : ''}
                    >Phone Number</label>
                    <div className="phoneInput">
                        <select 
                         defaultValue={values.country}
                         onInput={Change}
                         name="country"
                         id="country"
                         className={error.phone ? 'error' : ''}
                        >
                            <option value="australia">+61</option>
                            <option value="canada">+1</option>
                            <option value="uk">+44</option>
                            <option value="france">+33</option>
                            <option value="turkey">+90</option>
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
            <div>
                <button onClick={SaveInfo} className="nextButton">Next Step</button>
            </div>
        </div>
        </>
    )
}

PersonalInfo.propTypes = {
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    contentContainer: PropTypes.object
}



export default PersonalInfo