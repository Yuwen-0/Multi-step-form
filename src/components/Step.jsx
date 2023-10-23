/* eslint-disable react/prop-types */
export default function Step({title , number ,isActive }) {
    return (<div className="Form-Step">
          <h1 className={'Form-Step-Number' + (isActive ? " Active":" ")}> {number} </h1>
          <div className='Form-Step-Titles'>
            <p className='Form-Step-Subtitle'>STEP {number}</p>
            <b className='Form-Step-Title'>{title}</b>
          </div>
        </div>);
  }


