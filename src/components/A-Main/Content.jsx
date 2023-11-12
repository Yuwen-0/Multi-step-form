import PropTypes from 'prop-types';

//*Components
import PersonalInfo from '../1-PersonalInfo/PersonalInfo.jsx';
import SelectPlan from '../2-SelectPlan/SelectPlan.jsx';
import Addons from '../3-Addons/Addons.jsx';
import Summary from '../4-Summary/Summary.jsx';
import End from '../5-End/End.jsx';



const Content = ({setFormInfo,formInfo ,activeStep,contentContainer ,nextStep,prevStep}) => {
    switch(activeStep){
        case 1:
            return <PersonalInfo 
                    contentContainer={contentContainer}
                    nextStep={nextStep}
                    setFormInfo={setFormInfo}
                    formInfo={formInfo}
                   />
        case 2:
            return <SelectPlan
                    formInfo={formInfo}
                    nextStep={nextStep}
                    setFormInfo={setFormInfo}
                    prevStep={prevStep}
                    contentContainer={contentContainer} 
                   />
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
    contentContainer: PropTypes.object,
    setFormInfo: PropTypes.func,
    formInfo: PropTypes.object
}

export default Content