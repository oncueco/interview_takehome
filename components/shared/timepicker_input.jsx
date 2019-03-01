import React from 'react';
import timepicker from 'jquery-timepicker/jquery.timepicker';
// import css from 'jquery-timepicker/jquery.timepicker.css';

class TimepickerInput extends React.Component {

  componentDidMount() {
    this.timepicker();
  }

  timepicker() {
    const { type, onChange } = this.props;

    return $(`input.timepicker-${type}`).timepicker({
      timeFormat: 'h:mm p',
      interval: 60,
      minTime: '6:00am',
      maxTime: '11:00pm',
      defaultTime: '6:00am',
      startTime: '6:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true,
      change: (time) => {
        if (onChange) onChange(time);
      }
    });
  }

  render() {
    return (
      <input className={`timepicker-${this.props.type}`} />
    );
  }
}

export default TimepickerInput;
