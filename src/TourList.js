import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export class TourList extends Component {
  render() {
      const {tours,selectedTour, onCancelTour} =this.props;
    return (
      <div>
        TourList
        <br></br>
        {tours.map(tour => (
          <Card key={tour.id}>
            <Image src={tour.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tour.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a>{tour.price}</a>
              </Card.Content>
              <Card.Content extra>
              {tour.id === selectedTour?.id ? (<a 
              onClick={() => onCancelTour()} >Cancel</a>) : (<a
                 onClick={() =>{this.props.onSelectedTour(tour);
              }}>View More</a>
              )}
            </Card.Content>
          </Card>
        ))}
      </div>
      
    );
  }
}
