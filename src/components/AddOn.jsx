

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AddOn = ({ title, description, isSelected , onClick , isYearly,monthlyPrice,yearlyPrice }) => {
    return (
      <div id={title} onClick={onClick} className={`AddOn ${isSelected ? 'Selected' : ''}`}>
        <div className={`AddOn-Checkbox ${isSelected ? 'Checked' : ''}`}>
        <FontAwesomeIcon icon="fa-solid fa-check" style={{color: "#ffffff",}} />
        </div>
        <div className='AddOn-Info'>
          <h3 className="AddOn-Title">{title}</h3>
          <p className="AddOn-Description">{description}</p>
        </div>
        <p className="AddOn-Price">{isYearly ? yearlyPrice : monthlyPrice}</p>
      </div>
    );
  };
  
  export default AddOn;

  AddOn.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    isYearly: PropTypes.bool,
    monthlyPrice: PropTypes.string,
    yearlyPrice: PropTypes.string

  }