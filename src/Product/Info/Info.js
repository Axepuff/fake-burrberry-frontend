import React, {Component} from 'react';
import Button from './Button';

class Info extends Component {
  render() {
    return (
      <div className="product-info">
          <h2 className="product-info__price">110 000 руб.</h2>
          <span className="product-info__article">Item 39428531</span>
          <span className="product-info__color-name">Colour: Honey</span>
        <div className="product-color-list">
          <Button />
          <Button />
        </div>
      </div>
    );
  }
}

export default Info;