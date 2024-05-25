// Post.js
import React from 'react';
import CommentAccordion from './CommentAccordion';
import Carousel from './Carousel';

const Post = ({ title, subtitle, text, comments, images, id }) => {
  return (
    <div className="post col-md-5 col-12">
      <div className="card p-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
          <p className="card-text">{text}</p>
          <Carousel images={images} id={id}/>
          <CommentAccordion comments={comments} id={id} />
        </div>
      </div>
    </div>
  );
};

export default Post;
