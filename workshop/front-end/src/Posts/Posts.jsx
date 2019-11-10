import React from 'react';
import './Posts.css'
import Post from './Post/Post'
import postService from '../services/post-service'

//function Posts() {
//    return <div className="Posts">
//        <Post imgUrl="blue-origami-bird.png" imageAlt="alt" author="Me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore eum nisi pariatur nulla praesentium, veritatis, aperiam quibusdam ullam, dicta enim voluptas maiores tenetur obcaecati iusto eius quis dolore vero!</Post>
//    </div>
//};

class Posts extends React.Component {
    state = {
        posts: null
    };

    componentDidMount() {
        postService.load().then(posts => {
            this.setState({ posts });
        })
    }

    render() {
        const { posts } = this.state;
        return posts ?  <div className="Posts">
            {posts.map((post) => <Post key={post.id} imgUrl="blue-origami-bird.png" imageAlt="alt" author={post.userId}>{post.body}</Post>)}
    </div> : <div>Loading...</div>
    }
}

export default Posts;