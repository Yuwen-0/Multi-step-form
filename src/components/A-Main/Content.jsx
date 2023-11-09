import PropTypes from 'prop-types';

//*Components
import PersonalInfo from '../1-PersonalInfo/PersonalInfo.jsx';
import SelectPlan from '../2-SelectPlan/SelectPlan.jsx';
import Addons from '../3-Addons/Addons.jsx';
import Summary from '../4-Summary/Summary.jsx';
import End from '../5-End/End.jsx';



const Content = ({activeStep,contentContainer ,nextStep,prevStep}) => {
    switch(activeStep){
        case 1:
            return <PersonalInfo 
                    contentContainer={contentContainer}
                    nextStep={nextStep}
                    prevStep={prevStep}
                   />
        case 2:
            return <SelectPlan/>
        case 3:
            return <Addons/>
        case 4:
            return <Summary/>
        case 5:
            return <End/>
    }
}

Content.propTypes = {
    activeStep: PropTypes.number,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    contentContainer: PropTypes.object
}

export default Content