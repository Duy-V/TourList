import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
export class SelectedTour extends Component {
  render() {
    const { selectedTour, onCancelTour } = this.props;
    return (
      <div>
        SelectedTour
        {selectedTour && (
          <Card key={selectedTour?.id}>
            <Image src={selectedTour?.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{selectedTour?.name}</Card.Header>
              <Card.Description>{selectedTour?.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>{selectedTour?.price}</a>
            </Card.Content>
            <Card.Content extra>
              <a
                onClick={() => {onCancelTour();
                }}
              >
                Cancel
              </a>
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}

export default SelectedTour;
