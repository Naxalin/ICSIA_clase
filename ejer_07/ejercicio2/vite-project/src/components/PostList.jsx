import { useEffect, useState } from "react";

function PostDetails({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]); // aquí ponemos postId para que el efecto se ejecute cuando cambie

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default PostDetails;
