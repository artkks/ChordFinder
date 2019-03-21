import React, { Component } from 'react';
import { Button, Loader, Grid } from 'semantic-ui-react';
class ShowSing extends Component {
  render() {
    return(
        <Grid>
            <Grid.Column>{this.props.title}</Grid.Column>
            <Grid.Column>{this.props.sing}</Grid.Column>
            <Grid.Column>{this.props.chord}</Grid.Column>
        </Grid> 
    );
  }
}

export default ShowSing;
