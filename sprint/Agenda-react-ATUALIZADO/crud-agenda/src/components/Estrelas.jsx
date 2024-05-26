import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt as halfStar, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const StarRating = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (value) => {
    setRating(value);
  };

  const renderStar = (index) => {
    if (hoverRating > 0) {
      if (hoverRating >= index) {
        return fullStar;
      } else if (hoverRating >= index - 0.5) {
        return halfStar;
      } else {
        return emptyStar;
      }
    } else {
      if (rating >= index) {
        return fullStar;
      } else if (rating >= index - 0.5) {
        return halfStar;
      } else {
        return emptyStar;
      }
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        return (
          <span
            key={starValue}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
            style={{ cursor: 'pointer', color: (hoverRating >= starValue || rating >= starValue) ? 'yellow' : 'gray' }}
          >
            <FontAwesomeIcon icon={renderStar(starValue)} />
          </span>
        );
      })}
    </div>
  );
};

const Estrelas = ({ rating, setRating }) => {
  return (
    <div>
      <StarRating rating={rating} setRating={setRating} />
    </div>
  );
};

export default Estrelas;
