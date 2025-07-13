import { useState } from "react";

function App() {
  return (
  <div style={{display : "flex", justifyContent : "center", flexDirection : "column"}}>
  <div style={{backgroundColor : "#4682B4", margin : 20, width : 400, padding : 10, borderRadius : 15}}>
  <PostComponent
  username = {"Aaryan Wadhawan"}
  followerCount = {"20,000 followers"}
  time = {"12 min"}
  ></PostComponent>
  <Notification></Notification>
  </div>
  <br></br>
  <div style={{backgroundColor : "#4682B4", margin : 20, width : 400, padding : 10, borderRadius : 15}}>
  <PostComponent
  username = {"Kiwi Wadhawan"}
  followerCount = {"Promoted"}
  ></PostComponent>
  <Notification></Notification>
  </div>
  </div>
  )
}

// Structuring your app into components
// Defining a state of your application

const Notification = () => {
  // Defining a state variable
  // Component will only re-reder when there is a state variable

  const [notificationCount, setNotificationCount] = useState (0);
  // [0, function ()]
  
  function increment () {
    setNotificationCount(notificationCount+1);
  }

  const style = {backgroundColor : "#1f1f1f",
    color : "beige",
    borderRadius : 8,
    padding : 8,
    margin : 5,
    border : "10px solid #1f1f1f"
  }
  return (
    <div>
      <button onClick={increment} style={style}>Chats {notificationCount}</button>
    </div>
  )

}


const style = {
  width: 200,
  "background-color": "white",
  borderRadius: 10,
  borderColor: "gray",
  display: "flex",
};

function PostComponent({username, followerCount, time}) {
  return (
    <div>
      <div style={style}>
        <img
          src={"./public/vite.svg"}
          style={{ width: 35, height: 35, borderRadius: 25, margin: 10 }}
        />
        <div style={{ margin: 10 }}>
          <b>{username}</b>
          <div>
            <span>{followerCount}</span>
          </div>
        </div>
      </div>
       {time != undefined && <div style={{display : "flex", flexDirection : "row", margin : 10}}>
          <div>{time}</div>
          <div>
            <img src={"./public/clock.avif"} style={{width : 20, height : 20, borderRadius : 20}}></img>
          </div>
        </div>}
      <div style={{margin : 5}}>
        <span style={{ color: "blue", fontWeight: "bold"}}>
          Check out how these folks won $6000 in bounties!
        </span>
      </div>
    </div>
  )
}


export default App;
