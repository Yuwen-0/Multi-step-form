
import './Addons.css'
import PropTypes from 'prop-types'
const Addon = ({ title, price, isSelected,description}) => {

    const selectAddon = () => {
        console.log(title)
    }

    return (
        <div className={`addon ${isSelected ? 'addonSelected' : ''}`} onClick={selectAddon}>
            <div className={`addonCheckbox ${isSelected ? 'checkboxSelected' : ''}`} onClick={selectAddon}>
            </div>
            <div className="addonInfo">
                <h1 className='addonTitle'>{title}</h1>
                <p className='addonDescription'>{description}</p>
            </div>
                <p className='addonPrice'>{price}</p>
        </div>
    )
}

Addon.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
}

export default Addon