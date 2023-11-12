import "./Addons.css";

import Addon from './Addon.jsx'

const Addons = () => {

    const AddonData = [
        {
            title: 'Online service',
            description: 'Access to multiplayer games',
            price: '+$1/mo',
            isSelected: false
        },
        {
            title: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            price: '+$2/mo',
            isSelected: false
        },
        {
            title: 'Customizable profile',
            description: 'Custom theme on your profile',
            price: '+$2/mo',
            isSelected: false
        }
    ]

    return (
        <div className="addons">
            <div className="addonsInfo">
                <h1 className='title'>Pick add-ons</h1>
                <p className='infoText'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="addonsList">

            {
                AddonData.map((addon, index) => (
                    <Addon key={index} {...addon} />
                    ))
            }
            </div>
        </div>
    )
}

export default Addons