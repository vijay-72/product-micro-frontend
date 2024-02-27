import React from "react";
import { Col, Image } from "react-bootstrap";
import Rating from "../Rating/Rating";
import { FaPlus } from "react-icons/fa";
import styles from "./ProductCard.module.css";

const ProductCard = ({ productItem }) => {
  return (
    <Col md={3} sm={5} xs={10} className={`${styles.product} mtop`}>
      <Image
        loading="lazy"
        src={productItem?.images && productItem?.images[0]}
        alt=""
      />

      <div className={styles["product-details"]}>
        <h3 className={styles["product-title"]}>{productItem.name}</h3>
        <Rating rating={productItem.averageRating} />

        <div className={styles["price"]}>
          <h4>${productItem.price}</h4>
          <button aria-label="Add" type="submit" className={styles["add"]}>
            <FaPlus />
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
