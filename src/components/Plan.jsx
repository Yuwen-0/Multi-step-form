/* eslint-disable react/prop-types */



export default function Plan({isYearly , plan ,onClick }) {
  return (
    <>
      <div className={`Plan-Container ${plan.isSelected ? 'Selected' : ''} ${isYearly ? 'Yearly' : ""}`} id={plan.planName}  onClick={onClick}>
        <img className='Plan-img' src={plan.imgSrc} alt={plan.planName} />
        <div className="Plan-Info">
          <h3 className="Plan-Name" id={plan.planName}>{plan.planName}</h3>
          {!isYearly ? (
            <p className="Plan-Price" id={plan.planName}>${plan.monthlyPrice}/mo</p>
            ) : (<>
            <p className="Plan-Price" id={plan.planName}>${plan.yearlyPrice}/yr</p>
            <p className="Plan-FreeMonths" id={plan.planName}>2 months free</p></>
          )
          }
        </div>
      </div>
    </>

  );
}
