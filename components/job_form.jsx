import React from 'react';

import TimepickerInput from './shared/timepicker_input';
import Errors from './shared/errors';

/*
  We have provided a jsx skeleton for the following form. You will need to
  add event handlers and tie into your backend to make the app functional.
*/

export default class JobForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // Returns valid date string for tomorrow. ex: '2019-02-28'
  tomorrow() {
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const date = [tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate()];
    return date.map(num => num < 10 ? '0' + num : num).join('-');
  }

  render() {
    return (
      <form className="container">

        <h2>Add Job</h2>

        <label>Customer Name
          <input placeholder="Customer Name"
            value={''}
            onChange={null} />
        </label>

        <label>Move Date
          <input
            type="date"
            value={''}
            onChange={null}
            min={this.tomorrow()} />
        </label>

        {
          // TimepickerInput below has a prop `onChange` which takes a
          // function. This is called directly with a Javascript `Date`
          // object (NOT an event), with the date set to Dec. 31 1899 and the
          // time set to the timepicker's input value. You can call getHours()
          // and getMinutes() on the date object to extract the time.
        }
        <label>Start Time
          <TimepickerInput
            type="time"
            value={''}
            onChange={date => {  }} />
        </label>
        <label>Estimated Hours
          <input
            type="number"
            min="1"
            value={''}
            onChange={null} />
        </label>
        <button
          type="submit"
          onClick={null}>Add Job</button>
        <br />

        {/* Pass any errors as an array of strings to be rendered by the component below. */}
        <Errors errors={[]} />
      </form>
    );
  }
}
