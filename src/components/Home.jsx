import React, { Component } from 'react';
import { Button, Loader, Grid,Input,Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../css/home.css'
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      search_value:"aaaaaaaa",
    }
    this.searchChange= this.searchChange.bind(this);
    this.searchSing= this.searchSing.bind(this);
  }
  searchChange = (e) => this.setState({ search_value: e.target.value })
  handleChange (e) { this.setState({ search_value:e.target.value })}
  searchSing(){  alert(this.state.search_value)}
  render() {
    return(
        <Grid className='search'>  
                <Grid.Row >
                <Input iconPosition='left' icon={<Icon name='search' inverted circular link />} 
                onChange={this.handleChange.bind(this)} placeholder='Search...' />
                <Button content='Search' onClick={this.searchSing} secondary/>
                </Grid.Row>
                <Grid.Row>  
                </Grid.Row> 
        </Grid> 
    );
  }
}

export default  Home;
