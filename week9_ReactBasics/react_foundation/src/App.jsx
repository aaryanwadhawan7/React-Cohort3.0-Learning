function App() {
  return (
  <div style={{display : "flex", justifyContent : "center", flexDirection : "column"}}>
  <div style={{backgroundColor : "#4682B4", margin : 20, width : 400, padding : 10, borderRadius : 15}}>
  <PostComponent
  username = {"Aaryan Wadhawan"}
  followerCount = {"20,000 followers"}
  time = {"12 min"}
  ></PostComponent>
  </div>
  <br></br>
  <div style={{backgroundColor : "#4682B4", margin : 20, width : 400, padding : 10, borderRadius : 15}}>
  <PostComponent
  username = {"Kiwi Wadhawan"}
  followerCount = {"Promoted"}
  ></PostComponent>
  </div>
  </div>
  )
}

// Structuring your app into components
// Defining a state of your application

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
