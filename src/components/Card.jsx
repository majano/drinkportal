import React from 'react'; 

function Card({coverPicture, userPicture, category, title, description, author}) {
    return (
        <div className="card">
            <div className="picture_cover"><img src={coverPicture} alt=""/></div>
            <div className="card_content">
              <div className="user_picture"><img src={userPicture} alt=""/></div>
              <div className="content">
                <div className="category">{category}</div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="card_footer">
                  <div className="author_date">
                    <span>By {author}</span>
                    <span>2 days ago</span>
                  </div>
                  <div className="comment_share">
                    <button className="btn_link btn_comment">Comments 6</button>
                    <button className="btn_link btn_share">Shares 2</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Card
