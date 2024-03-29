import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const {
      item: { id, title, price, description, image, largeImage }
    } = this.props;
    return (
      <ItemStyles>
        {image ? <img src={image} alt={title} /> : null}
        <Title>
          <Link
            href={{
              pathname: "/item",
              query: { id }
            }}
          >
            <a>{title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>
        <div className="buttonList">
          <Link href={{ pathname: "/update", query: { id } }}>
            <a>Edit</a>
          </Link>
          <button>Add To Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}
