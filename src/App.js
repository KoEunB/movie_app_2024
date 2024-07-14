import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cafe24.poxo.com/ec01/gochoochongak/+iUmvvrlGKqOMTmJ/Wak53ziScfIl+GvRgneViecSHqyEfv5ZzGURLm8NAT45ATLl7oxdDsvHDmPHwYWn4376A==/_/web/product/big/202111/4aeab72ac42c4b8c9e48cba7b1bbd754.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://i.namu.wiki/i/UcMQsbq0vTQa2itF2GNB_Ha6gyKObJaRaEzgNSZ91LaVwvVZhwzo1ERwij23BuRer1vGxrNXHUeeUyqzk8vJFs4SOjYIMh9mAMyhm_wI5vFd0T9KjmkHbGUOc_8eTkrHcd8pmubCyqWKvv2Z6mIfTQ.webp",
    rating: 4.7
  },
  {
    id: 3,
    name: "Doncasu",
    image: "https://i.namu.wiki/i/SAXiPzFDWuW0dYmbqUYs3R-oBtzDDGrDZ887HlvieL01vIINSTWy_65Y1nEWwZcnb78YXsEi8RzXD2DMissERfRGbYM3MttiESSW5DpiRSkwE-A3eG7PwN2FSyv0QtotRVgfF-4SQJSi3fhf1iAW-Q.webp",
    rating: 3.9
  }
];

function Food({ name, picture, rating }) {
  return (<div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}
export default App;




