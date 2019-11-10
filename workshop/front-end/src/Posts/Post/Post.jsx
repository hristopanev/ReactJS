import React from 'react';
import './Post.css'

function Post({ imgUrl, imageAlt, children, author}) {
    return <div className="Post">
        <img src={ imgUrl } alt={imageAlt}/>
        <p className="description">{children}</p>
        <div>
            <span>
                <small>Author:</small>
                {author}
            </span>
        </div>
    </div>
};

export default Post;