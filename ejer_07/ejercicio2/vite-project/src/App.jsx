import { useState } from "react";
import PostDetails from "./components/PostList.jsx";

function App() {
  const [postId, setPostId] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />

      <PostDetails postId={postId} />
    </div>
  );
}

export default App;
