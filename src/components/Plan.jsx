/* eslint-disable react/prop-types */

export default function Plan({isYearly , plan ,onClick }) {
  return (
    <>
      <div className={`Plan-Container ${plan.isSelected ? 'Selected' : ''}`} id={plan.planName}  onClick={onClick}>
        <img className='Plan-img' src={plan.imgSrc} alt={plan.planName} />
        <div className="Plan-Info">
          <h3 id={plan.planName}>{plan.planName}</h3>
          {!isYearly ? (
            <p id={plan.planName}>${plan.monthlyPrice}/mo</p>
            ) : (
            <p id={plan.planName}>${plan.yearlyPrice}/yr</p>
          )
          }

          {isYearly ? (
            <p id={plan.planName}>2 months free</p>
          ) : (
            ""
          )
          }
        </div>
      </div>
    </>

  );
}
