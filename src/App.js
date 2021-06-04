
import "./App.css";
import {TourList} from "./TourList";
import "./styles.css"
import React from "react";
import { Grid } from 'semantic-ui-react';
import SelectedTour from "./SelectedTour";
import TOURS from "./data";
export default class App extends React.Component {
  state = {
    tours: TOURS,
    selectedTour: null
  };
  handleSelectedTour = (tour) => {
this.setState({selectedTour: tour});
  }
handleCancelTour = () => {
this.setState({ selectedTour: null })
};

  render() {
    return (
      <div className="App">
        <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
        {/*List*/}
        <TourList tours={this.state.tours} onSelectedTour={this.handleSelectedTour}
        
        selectedTour={this.state.selectedTour}
       
       
        onCancelTour={this.handleCancelTour}
        />
      </Grid.Column>
      <Grid.Column>
        {/*Selected Tour*/}
        <SelectedTour selectedTour={this.state.selectedTour} 
        onCancelTour={this.handleCancelTour}/>
      </Grid.Column>
      
    </Grid.Row>

    
  </Grid>
      </div>
    );
  }
}
