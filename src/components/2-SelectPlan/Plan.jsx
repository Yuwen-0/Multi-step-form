import PropTypes from 'prop-types';
import { useState } from 'react';

const Plan = ({icon, title,price}) => {

    const [selectedPlan, setSelectedPlan] = useState(false);

    const Select = () => {
        setSelectedPlan(prev => !prev)
    }

    return (
        <div className="plan">
            <img className='icon' src={icon} alt="icon of the plan" />
            <div className="planInfo">
                <h1 className='planTitle'>{title}</h1>
                <p className='price'>{price}</p>
            </div>
        </div>
    )
}

Plan.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Plan