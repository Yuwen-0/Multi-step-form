/* eslint-disable react/prop-types */
import { SelectPlan } from './SelectPlan';
import { PersonalInfo } from './PersonalInfo';
import { AddOns, Summary } from '../App';

export default function Content({ Step, allPlans }) {
  return (
    <div className='Form-Content-Inputs'>
      {Step === 1 && <PersonalInfo />}
      {Step === 2 && <SelectPlan plans={allPlans} />}
      {Step === 3 && <AddOns />}
      {Step === 4 && <Summary />}
    </div>
  );
}
