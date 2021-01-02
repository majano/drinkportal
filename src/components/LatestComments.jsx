import React from 'react'

const comments = [
  {
    "article" : "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "comment" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "author" : "Kraken"
  },
  {
    "article" : "Consectetur adipiscing, lorem ipsum dolor sit amet",
    "comment" : "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "author" : "Adolf"
  },
  {
    "article" : "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "comment" : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "author" : "Kraken 2"
  }
]

function LatestComments() {
    return (
        <div className="block_content">
            <h4>Latest Comments</h4>
            <ul className="list">
              {
                comments.map((comment, index) => (
                  <li key={index}>
                    <h6>{comment.article}</h6>
                    <p>{comment.comment}</p>
                    <div className="author_date">
                      <span>By {comment.author}</span>
                      <span>2 days ago</span>
                    </div>
                  </li>
                ))
              }
              {
                /*
                <li>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="author_date">
                  <span>By Kraken</span>
                  <span>2 days ago</span>
                </div>
              </li>
              <li>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="author_date">
                  <span>By Kraken</span>
                  <span>2 days ago</span>
                </div>
              </li>
              <li>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="author_date">
                  <span>By Kraken</span>
                  <span>2 days ago</span>
                </div>
              </li>
                */
              }
            </ul>
            <button className="btn_link">View all comments</button>
        </div>
    )
}

export default LatestComments
