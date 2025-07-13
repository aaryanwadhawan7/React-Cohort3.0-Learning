import { PostComponent } from "./Post";
import { Notification } from "./Notification";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost() {
    const createPost = {
      id: posts.length + 1,
      username: "Aaryan Wadhawan",
      followerCount: "20,000 followers",
      time: "15 min",
    };
    setPosts([...posts, createPost]);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: 10,
        }}
      >
        <button
          onClick={addPost}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Post
        </button>
        <Notification />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "#4682B4",
              margin: 20,
              width: 400,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <PostComponent
              username={post.username}
              followerCount={post.followerCount}
              time={post.time}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
