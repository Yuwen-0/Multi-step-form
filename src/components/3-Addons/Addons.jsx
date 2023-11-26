import "./Addons.css";

import Addon from './Addon.jsx'
import { useState } from "react";
import PropTypes from 'prop-types';

const Addons = ({contentContainer,formInfo,setFormInfo,prevStep,nextStep}) => {
    const [AddonData, setAddonData] = useState([ 
    
        {
            title: 'Online service',
            description: 'Access to multiplayer games',
            yearly: 10,
            monthly: 1,
            price: formInfo.planInfo.isYearly ? '+$10/yr' : '+$1/mo',
            isSelected: formInfo.addonsInfo.find((addon)=> addon.title === 'Online service').isSelected
        },
        {
            title: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            yearly: 20,
            monthly: 2,
            price: formInfo.planInfo.isYearly ? '+$20/yr' : '+$2/mo',
            isSelected: formInfo.addonsInfo.find((addon)=> addon.title === 'Larger storage').isSelected
        },
        {
            title: 'Customizable profile',
            description: 'Custom theme on your profile',
            yearly: 20,
            monthly: 2,
            price: formInfo.planInfo.isYearly ? '+$20/yr' : '+$2/mo',
            isSelected: formInfo.addonsInfo.find((addon)=> addon.title === 'Customizable profile').isSelected
        }
    ])
    console.log(AddonData);

    const NextStep = () => {
        setFormInfo(prev => ({
            ...prev,
            addonsInfo:[...AddonData],
        }))

        setTimeout(() => {
            nextStep()
            contentContainer.current.classList.remove('fadeOut')
        }, 300)

        contentContainer.current.classList.add('fadeOut')
    }

    const GoBack = () => {
        setFormInfo(prev => ({
            ...prev,
            addonsInfo:[...AddonData],
        }))

        setTimeout(() => {
            prevStep()
            contentContainer.current.classList.remove('fadeOut')
        }, 300)
        contentContainer.current.classList.add('fadeOut')
    }

    return <>
        <div className="addons">
            <div className="addonsInfo">
                <h1 className='title'>Pick add-ons</h1>
                <p className='infoText'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="addonsList">

            {
                AddonData.map((addon, index) => (
                    <Addon key={index} {...addon} setAddonData={setAddonData} />
                    ))
            }
            </div>
        </div>
        <div className="buttons">
                <button onClick={GoBack} className='backButton'>Go Back</button>
                <button onClick={NextStep} className='nextButton'>Next Step</button>
        </div>
    </>
}

Addons.propTypes = {
    contentContainer: PropTypes.object,
    formInfo: PropTypes.object,
    setFormInfo: PropTypes.func,
    prevStep: PropTypes.func,
    nextStep: PropTypes.func,
}

export default Addons