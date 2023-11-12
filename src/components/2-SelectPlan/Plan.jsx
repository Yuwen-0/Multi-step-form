import PropTypes from 'prop-types';
import { useRef } from 'react';

const Plan = ({ icon, title, price, setPlansSelected, plansSelected, number, isYearly,setError ,setValues}) => {
  const planRef = useRef(null);

  const selectPlan = () => {
    setError(false);
    setPlansSelected(prev => 
      prev.map(plan => ({
        ...plan,
        isSelected: plan.title === title
      }))
    );
    setValues(prev => ({
      ...prev,
      selectedPlan: title
    }));
  };

  const isSelected = plansSelected[number].isSelected;

  return (
    <div ref={planRef} className={`plan ${isSelected ? 'planSelected' : ''} ${isYearly ? 'planYearly' : ''}`} onClick={selectPlan}>
      <img className='icon' src={icon} alt="icon of the plan" />
      <div className="planInfo">
        <h1 className='planTitle'>{title}</h1>
        <p className='price'>{price}</p>
      </div>
      <div className={`months ${isYearly ? 'freeMonths' : ''}`}>
        {isYearly ? '2 months free' : ''}
      </div>
    </div>
  );
};

Plan.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  setPlansSelected: PropTypes.func.isRequired,
  plansSelected: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
  isYearly: PropTypes.bool.isRequired,
  setError: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired
}

export default Plan