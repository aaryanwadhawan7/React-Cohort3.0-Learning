const style = {
  width: 200,
  "background-color": "white",
  borderRadius: 10,
  borderColor: "gray",
  display: "flex",
};

export function PostComponent({username, followerCount, time}) {
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

