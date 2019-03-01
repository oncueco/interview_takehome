import React from 'react';

import TimepickerInput from './shared/timepicker_input';
import Errors from './shared/errors';

/*
  We have provided a jsx skeleton for the following form. You will need to
  add event handlers and tie into your backend to make the app functional.
*/

class TruckForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="container">

        <h2>Create Truck</h2>

        <label>Name
          <input placeholder="Name of truck"
            value={''}
            onChange={null} />
        </label>

        {
          // TimepickerInput component(s) below has a prop `onChange` which takes a
          // function. This is called directly with a Javascript `Date`
          // object (NOT an event), with the date set to Dec. 31 1899 and the
          // time set to the timepicker's input value. You can call getHours()
          // and getMinutes() on the date object to extract the time.
        }
        <label>Start Time
          <TimepickerInput
            type="startTime"
            value={''}
            handleTimeChange={date => {  }} />
        </label>
        <label>End Time
          <TimepickerInput
            type="endTime"
            value={''}
            handleTimeChange={date => {  }} />
        </label>

        <button
          type="submit"
          onClick={null}>Create Truck</button>
        <br />

        {/* Pass any errors as an array of strings to be rendered by the component below. */}
        <Errors errors={[]}/>
      </form>
    );
  }
}

export default TruckForm;
