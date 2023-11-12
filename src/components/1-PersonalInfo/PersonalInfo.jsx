//*StyleSheet
import './PersonalInfo.css'

import {useState} from 'react';
import PropTypes from 'prop-types';

const PersonalInfo = ({nextStep ,contentContainer,setFormInfo,formInfo}) => {
    const [error , setError] = useState({
        name: false,
        email: false,
        phone: false,
        country: false
    })
    const [values, setValues] = useState({
        name: formInfo.personalInfo.name,
        email: formInfo.personalInfo.email,
        phone: formInfo.personalInfo.phone,
        country: formInfo.personalInfo.country,
    })


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
        }else if(name === 'country'){
            if(!value){
                setError(prev => ({...prev, [name]: true}))
            }else{
                setError(prev => ({...prev, [name]: false}))
            }
        }

        setValues(prev => ({...prev, [name]: value}))

    }   
        const SaveInfo = () => {
            if(values.name && values.email && values.phone && values.country && !error.name && !error.email && !error.phone && !error.country){ 
                setTimeout(() => {
                    contentContainer.current.classList.remove('fadeOut');
                    setFormInfo(prev => ({
                        ...prev,
                        personalInfo: {
                            name: values.name,
                            email: values.email,
                            phone: values.phone,
                            country: values.country
                        }
                    }))
                    nextStep();
                }, 300);
                contentContainer.current.classList.add('fadeOut');
            }else{
                if(!values.name){
                    setError(prev => ({...prev, name: true}))
                }
                if(!values.email){
                    setError(prev => ({...prev, email: true}))
                }
                if(!values.phone){
                    setError(prev => ({...prev, phone: true}))
                }
                if(!values.country){
                    setError(prev => ({...prev, country: true}))
                }
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
                     className={error.name ? 'Inputerror' : ''}
                    >Name</label>
                    <input 
                        className={error.name ? 'Inputerror' : ''}
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
                     className={error.email ? 'Inputerror' : ''}>Email Address</label>
                    <input 
                        className={error.email ? 'Inputerror' : ''}
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
                     className={error.phone ? 'Inputerror' : ''}
                    >Phone Number</label>
                    <div className="phoneInput">
                        <select 
                         defaultValue={values.country}
                         onInput={Change}
                         name="country"
                         id="country"
                         className={error.country ? 'Inputerror' : ''}
                        >
                            <option value="">Select your country</option>
                            <option value="australia">+61</option>
                            <option value="canada">+1</option>
                            <option value="uk">+44</option>
                            <option value="france">+33</option>
                            <option value="turkey">+90</option>
                        </select>   
                        <input
                            className={error.phone ? 'Inputerror' : ''}
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
    contentContainer: PropTypes.object,
    setFormInfo: PropTypes.func,
    formInfo: PropTypes.object
}



export default PersonalInfo