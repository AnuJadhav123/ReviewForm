import React, { useState } from 'react';
import './App.css';
import StarRating from './StarRating';

function App() {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;
    const newReview = {
      title: title,
      rating: rating,
      description: description
    };
    setReviews([...reviews, newReview]);
    setTitle('');
    setRating(0);
    setDescription('');
  };

  const handleDelete = (index) => {
    const newReviews = [...reviews];
    newReviews.splice(index, 1);
    setReviews(newReviews);
  };

  return (
    <div className="App">
      <div className="give-review">
        <h2>Give Review</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="rating">Rating*</label>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <div className="button-group">
            <button type="submit">Submit</button>&nbsp;&nbsp;
            <button type="button" onClick={() => {setTitle(''); setRating(0); setDescription('');}}>Reset</button>
          </div>
        </form>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="review-info">
                <h3>{review.title}</h3>
                <p>{review.description}</p>
                <p>Rating: {review.rating}</p><br/>
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
