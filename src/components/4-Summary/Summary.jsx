import PropTypes from 'prop-types';
import "./Summary.css";
const Summary = ({formInfo,setActiveStep,contentContainer,nextStep,prevStep}) => {
    const planPrice = formInfo.planInfo.isYearly ? formInfo.planInfo.price * 10 : formInfo.planInfo.price
    console.log(planPrice);
    let addonsPrice = 0;
    formInfo.addonsInfo.map((addon) =>{
        if(addon.isSelected){
            if(formInfo.planInfo.isYearly){
                addonsPrice = addonsPrice + addon.yearly
            }else{
                addonsPrice = addonsPrice + addon.monthly
            }
        }
    })
    console.log(addonsPrice);
    const totalPrice = `+$${planPrice + addonsPrice}${formInfo.planInfo.isYearly ? '/yr' : '/mo'}`;

    function goToPlans(){
        setTimeout(() => {
            setActiveStep(2);
            contentContainer.current.classList.remove('fadeOut');
        }, 300);
        contentContainer.current.classList.add('fadeOut');
    }

    function Send(){
        setTimeout(() => {
            nextStep();
            contentContainer.current.classList.remove('fadeOut');
        }, 300);
        contentContainer.current.classList.add('fadeOut');
    }

    function GoBack(){
        setTimeout(() => {
            prevStep();
            contentContainer.current.classList.remove('fadeOut');
        }, 300);
        contentContainer.current.classList.add('fadeOut');
    }
    return <>
        <div className="summary">
            <div className="summaryTitle">
                <h1 className="title">Finishing up</h1>
                <p className="infoText">Double-check everything looks OK before confirming.</p>
            </div>
            <div className="summaryInfo">
                <div className="summaryPlanInfo">
                    <div>
                        <h1 className="planTitle"> {`${formInfo.planInfo.selectedPlan} (${formInfo.planInfo.isYearly ? 'Yearly' : 'Monthly'})`}</h1>
                        <span onClick={goToPlans} className="planChange">Change</span>
                    </div>
                    <p className="planPrice">+${formInfo.planInfo.isYearly ?  formInfo.planInfo.price * 10 + '/yr' : formInfo.planInfo.price + '/mo'}</p>
                </div>
                <hr />
                {formInfo.addonsInfo.map((addon, index) => (
                    addon.isSelected ?<div key={index} className="addonInfoContainer">
                        <h1 className="addonInfoTitle">{addon.title}</h1>
                        <p className="addonInfoPrice">{addon.price}</p>
                    </div>: null
                ))}
            </div>
            <div className="summaryTotal">
                <h1 className="totalTitle">Total (per {formInfo.planInfo.isYearly ? 'year' : 'month'})</h1>
                <p className="totalPrice">{totalPrice}</p>
            </div>
        </div>
        <div className="buttons" >
            <button onClick={GoBack} className="backButton">Go Back</button>
            <button onClick={Send} className="nextButton Confirm">Confirm</button>
        </div>
    </>
}

Summary.propTypes = {
    formInfo: PropTypes.object,
    setFormInfo: PropTypes.func,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    setActiveStep: PropTypes.func,
    contentContainer: PropTypes.object
}

export default Summary