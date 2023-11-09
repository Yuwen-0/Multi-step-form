import './SelectPlan.css'
import Plan from './Plan.jsx';
import { useState } from 'react';
const SelectPlan = () => {

    const plans = [
        {
            icon: '/assets/images/icon-arcade.svg',
            title: 'Arcade',
            price: '$9/mo'
        },
        {
            icon: '/assets/images/icon-advanced.svg',
            title: 'Advanced',
            price: '$12/mo'
        },
        {
            icon: '/assets/images/icon-pro.svg',
            title: 'Pro',
            price: '$15/mo'
        }
    ]

    const [values, setValues] = useState({
        selectedPlan: "",
        isYearly: false
    })

    const toggleSwith = () => {
        setValues(prev => ({ ...prev, isYearly: !prev.isYearly }))
    }

    return (
        <>
            <div className="selectPlan">
                <div className="selectPlanTitle">
                    <h1 className='title'>Select your plan</h1>
                    <p className='infoText'>You have the option of monthly or yearly billing.</p>
                </div>
                <div className="plans">
                    {plans.map((plan, index) => (
                        <Plan key={index} icon={plan.icon} title={plan.title} price={plan.price} />
                    ))}
                </div>
                <div className="monthlyYearlySelector">
                    <div className={`monthly ${values.isYearly ? '' : 'selected'}`} onClick={() => setValues(prev => ({ ...prev, isYearly: false }))}>Monthly</div>
                    <div className={`switch ${values.isYearly ? 'toggleSwitch' : ''}`} onClick={toggleSwith}>
                        <div className={`circle ${values.isYearly ? 'toggleCircle' : ''}`}></div>
                    </div>
                    <div className={`yearly ${values.isYearly ? 'selected' : ''}`} onClick={() => setValues(prev => ({ ...prev, isYearly: true }))}>Yearly</div>
                </div>
            </div>

        </>
    )
}

export default SelectPlan