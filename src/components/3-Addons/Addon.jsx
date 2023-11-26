
import './Addons.css'
import PropTypes from 'prop-types'
import CheckMark from "../../../assets/images/icon-checkmark.svg"
const Addon = ({ title, price, isSelected,description,setAddonData}) => {

    const selectAddon = () => {
        setAddonData(prev =>{
            return prev.map(addon => {
                 if(addon.title === title){
                    return {
                        ...addon,
                        isSelected: !addon.isSelected
                    }
                }else{
                    return addon
                }
            })
        })
    }

    return (
        <div className={`addon ${isSelected ? 'addonSelected' : ''}`} onClick={selectAddon}>
            <div className={`addonCheckbox ${isSelected ? 'checkboxSelected' : ''}`} onClick={selectAddon}>
                <img src={CheckMark} alt="" />
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
    description: PropTypes.string.isRequired,
    setAddonData: PropTypes.func.isRequired
}

export default Addon