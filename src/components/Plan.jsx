/* eslint-disable react/prop-types */

export function Plan({ plan }) {
  return (
    <>
      <div className='Plan-Container'>
        <img className='Plan-img' src={plan.imgSrc} />
        <div>
          <h3>{plan.planName}</h3>
          <p>${plan.monthlyPrice}/mo</p>
        </div>
      </div>
    </>

  );
}
