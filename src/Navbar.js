import React, { Component } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {format: "hex", open: false}
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this)
;  }
handleFormatChange(e){
    this.setState({format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar(){
    this.setState({open: false});
  }
  render() {
    const {level, changeLevel} = this.props;
    const {format} = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
            <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel}/>
            </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #fff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
          open={this.state.open} 
          onClose={this.closeSnackbar}
          autoHideDuration={3000} 
          message={<span id="message-id">Format changed to {format.toUpperCase()}</span>} 
          ContentProps={{"aria-describedby": "message-id"}}
          action={[
            <IconButton onClick={this.closeSnackbar} color='inherit' key="close"><CloseIcon /></IconButton>
          ]} />
      </header>
    )
  }
}
export default Navbar;