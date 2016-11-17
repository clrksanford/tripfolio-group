// Modules
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import _ from 'lodash';

// Components

// Styles and images

class NewTripModal extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    // Grab user info
    let destination = _.startCase(this.refs.destination.value);

    let uid = this.props.user.uid;
    let username = this.props.user.providerData[0].displayName;

    var newPostKey = this.props.firebase.database().ref().child(uid).push().key;
    this.props.firebase.database().ref(`/tripbook/${uid}/${newPostKey}`).update({
      destination,
      uid,
      username,
      public: false
    });


    hashHistory.push(`/planner/${uid}/${newPostKey}/${destination}`);
    //
    // // Pass the data up the chain to parent state
    // this.props._handleSubmit(destination);
  }

  render() {
    return(
      <main id="newTrips">
        {/* <Link to="/profile" id="profile-button" className="btn btn-default">My profile</Link> */}
        <form onSubmit={this._handleSubmit}>
          <h2>Where Do You Want To Go?</h2>
          <br/>
          <input type="text" ref="destination" id="newTripSubmit" placeholder="Enter City Here"/>
          <input id="newTripButton" className="btn btn-default" type="submit" value="Get Started!"/>
        </form>
      </main>
    );
  }
}

export default NewTripModal;
