// CommentAccordion.js
import React from 'react';

const CommentAccordion = ({ comments, id }) => {
  return (
    <div className="accordion border-0 mt-3" id={`accordion${id}`}>
      <div className="accordion-item border-0">
        <h2 className="accordion-header border-0">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
            Comments
          </button>
        </h2>
        <div id={`collapse${id}`} className="accordion-collapse collapse" data-bs-parent={`#accordion${id}`}>
          <div className="accordion-body">
            {comments.map((comment, index) => (
              <div key={index}>
                <div className="comment">
                  <p><strong>{comment.name}:</strong> {comment.text}</p>
                  <small className="text-muted">{comment.time}</small>
                </div>
                {index < comments.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentAccordion;
