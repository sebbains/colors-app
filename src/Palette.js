import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    const ColorBoxes = this.props.colors.map(color => (
       <ColorBox background={color.color} name={color.name}/>
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
            <div className="Palette-colors">
              {ColorBoxes}
            </div>
            {/* footer goes here */}
      </div>
    )
  }
}
export default Palette;