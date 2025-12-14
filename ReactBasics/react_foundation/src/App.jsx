import { PostComponent } from "./Post";
import { Notification } from "./Notification";
import { useState } from "react";
import { Card } from "./Card";

const btnStyle = {
  width: 150,
  height: 50,
  borderRadius: 50,
  fontSize: 20,
  backgroundColor: "beige",
  fontWeight: "bolder",
  padding: 10,
};
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
        <Card>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={"./public/profileImage.jpg"}
              style={{ width: 150, height: 150, borderRadius: 75, margin: 20 }}
            ></img>
            <span
              style={{ fontWeight: "bolder", fontSize: 30, color: "#007BFF" }}
            >
              Aaryan Wadhawan
            </span>
          </div>
          <div style={{ marginLeft: 50, color: "beige" }}>
            <span style={{ fontSize: 20 }}>
              Student at Vellore Institute of Technology | CSE | Cyber Security
            </span>
            <br></br>
            <span style={{ fontSize: 20 }}>Faridabad, Haryana</span>
          </div>
        </Card>
        <Card>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./public/userIcon.png"
              style={{ width: 100, height: 100, margin: 20 }}
            ></img>
            <input
              type="text"
              style={{
                backgroundColor: "beige",
                width: 400,
                height: 50,
                borderRadius: 50,
                fontWeight: "bolder",
                fontSize: 20,
                color: "#1f1f1f",
                padding: 10,
                border: "2px solid #1f1f1f",
              }}
              placeholder="Start a post"
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <button style={btnStyle}>Video</button>
            <button style={btnStyle}>Photo</button>
            <button style={btnStyle}>Write Article</button>
          </div>
        </Card>
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
