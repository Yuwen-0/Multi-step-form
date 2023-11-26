import PropTypes from 'prop-types';
import { useRef } from 'react';
import ArcadeIcon from '../../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../../assets/images/icon-advanced.svg';
import ProIcon from '../../../assets/images/icon-pro.svg';

const Plan = ({ title, price, setPlansSelected, plansSelected, number, isYearly,setError ,setValues}) => {

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

  const icon = () => {
    if(title === 'Arcade') return ArcadeIcon;
    if(title === 'Advanced') return AdvancedIcon;
    if(title === 'Pro') return ProIcon;
  }

  const isSelected = plansSelected[number].isSelected;

  return (
    <div ref={planRef} className={`plan ${isSelected ? 'planSelected' : ''} ${isYearly ? 'planYearly' : ''}`} onClick={selectPlan}>
      <img className='icon' src={icon()} alt="icon of the plan" />
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