import './SelectPlan.css'
import Plan from './Plan.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SelectPlan = ({ formInfo, setFormInfo,nextStep, prevStep,contentContainer }) => {
    const [plansSelected, setPlansSelected] = useState([
        { title: 'Arcade', isSelected:  formInfo.planInfo.selectedPlan === 'Arcade' },
        { title: 'Advanced', isSelected: formInfo.planInfo.selectedPlan === 'Advanced' },
        { title: 'Pro', isSelected: formInfo.planInfo.selectedPlan === 'Pro' }
    ]);

    const [error , setError] = useState(false)

    const plans = [
        { icon: './assets/images/icon-arcade.svg', title: 'Arcade', Number: 0, monthlyPrice: '$9/mo', yearlyPrice: '$90/yr', isSelected: plansSelected[0] },
        { icon: './assets/images/icon-advanced.svg', title: 'Advanced', Number: 1, monthlyPrice: '$12/mo', yearlyPrice: '$120/yr', isSelected: plansSelected[1] },
        { icon: './assets/images/icon-pro.svg', title: 'Pro', Number: 2, monthlyPrice: '$15/mo', yearlyPrice: '$150/yr', isSelected: plansSelected[2] }
    ];

    const [values, setValues] = useState({ selectedPlan: formInfo.planInfo.selectedPlan , isYearly: false });

    const toggleSwitch = () => {
        setValues(prevValues => ({ ...prevValues, isYearly: !prevValues.isYearly }));
    };

    const nextStepClick = () => {
        if(values.selectedPlan === "") {
            setError(true)
            return
        } 
        if(!error) {
            setFormInfo(prev => ({
                ...prev,
                planInfo: {
                    selectedPlan: values.selectedPlan,
                    isYearly: values.isYearly
                }
            }))
            setTimeout(() => {
                contentContainer.current.classList.remove('fadeOut');
                nextStep();
            }, 300);
            contentContainer.current.classList.add('fadeOut');
        }
    }

    const prevStepClick = () => {
        setFormInfo(prev => ({
            ...prev,
            planInfo: {
                selectedPlan: values.selectedPlan,
                isYearly: false
            }
        }))
        setTimeout(() => {
            contentContainer.current.classList.remove('fadeOut');
            prevStep();
        }, 300);
        contentContainer.current.classList.add('fadeOut');
    }

    return (
        <div className="selectPlan">
            <div className="selectPlanTitle">
                <h1 className='title'>Select your plan</h1>
                <p className='infoText'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="plans">
                {plans.map((plan, index) => (
                    <Plan
                        number={plan.Number}
                        plansSelected={plansSelected}
                        setPlansSelected={setPlansSelected}
                        plans={plans}
                        values={values}
                        selectedPlan={plan.isSelected}
                        key={index}
                        icon={plan.icon}
                        title={plan.title}
                        price={values.isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        isYearly={values.isYearly}
                        setError={setError}
                        setValues={setValues}
                    />
                ))}
                <div className={`error ${error ? 'errorShow' : ''}`}>
                    {error && <p className='errorText'>Please select a plan</p>}
                </div>
            </div>
            <div className="monthlyYearlySelector">
                <div className={`monthly ${values.isYearly ? '' : 'selected'}`} onClick={() => setValues(prevValues => ({ ...prevValues, isYearly: false }))}>Monthly</div>
                <div className={`switch ${values.isYearly ? 'toggleSwitch' : ''}`} onClick={toggleSwitch}>
                    <div className={`circle ${values.isYearly ? 'toggleCircle' : ''}`}></div>
                </div>
                <div className={`yearly ${values.isYearly ? 'selected' : ''}`} onClick={() => setValues(prevValues => ({ ...prevValues, isYearly: true }))}>Yearly</div>
            </div>
            <div>
                <button onClick={prevStepClick} className='backButton'>Go Back</button>
                <button onClick={nextStepClick} className='nextButton'>Next Step</button>

            </div>
        </div>
    )
}

SelectPlan.propTypes = {
    setFormInfo: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    contentContainer: PropTypes.object.isRequired,
    formInfo: PropTypes.object.isRequired
}

export default SelectPlan