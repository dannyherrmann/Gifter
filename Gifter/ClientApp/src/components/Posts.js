import React, { useState, useEffect } from 'react';
import { Post } from './Post';

const ShowPosts = () => {

    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false);

    useEffect(() => {
        fetch('post')
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setPosts(data);
            })
    }, [])

    return (

        <main>
            <button onClick={() => { setShowPosts(true) }}>Show Posts</button>
            {
                showPosts ? (
                    <>
                        <article>
                            {
                                posts.map(post => {
                                    return <Post
                                        key={post.Id}
                                        title={post.title} />
                                })
                            }
                        </article>
                    </>
                ) : <></>}

        </main>
        )
}

export default ShowPosts;