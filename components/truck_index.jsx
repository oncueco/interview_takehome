import React from 'react';

/*
  Display in a list each truck and its' associated jobs. We have provided
  a jsx skeleton. You will need to hook into your backend to make the
  page functional. You may use a state mangement solution if you wish,
  or utilize component's local state.
*/

class TruckIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>Trucks</h2>

        {/* Truck list goes here! */}
      </div>
    );
  }
}


export default TruckIndex;
