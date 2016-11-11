import React, {Component} from 'react';
import SuggestionBox from './SuggestionBox';

class TravelPlanningPage extends Component {
  render() {
    return(
      <main>
        <h2>My trip to <span id="destinationName">NAME HERE</span></h2>
        <nav>
          <h3>Suggestions</h3>
          <a href="#">Food</a>
          <a href="#">Attractions</a>
          <a href="#">Hotels</a>
        </nav>
        <SuggestionBox />
        <div id="myTiles">

        </div>
      </main>
    );
  }
}

export default TravelPlanningPage;
