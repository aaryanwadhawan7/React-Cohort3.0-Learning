// Structuring your app into components
// Defining a state of your application
import { useState, useEffect } from "react";

export const Notification = () => {
  // Defining a state variable
  // Component will only re-reder when there is a state variable

  const [notificationCount, setNotificationCount] = useState (0);
  // [0, function ()]
  
  // function increment () {
  //   setNotificationCount(notificationCount+1);
  // }

//   const style = {backgroundColor : "#1f1f1f",
//     color : "beige",
//     borderRadius : 10,
//     padding : 8,
//     margin : 5,
//     border : "10px solid #1f1f1f",
//     width : 100,
//     fontWeight : "bold"
//   }
  
  useEffect (() => {
    const interval = setInterval (() => {
      setNotificationCount ((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  // this effect will run only on mount because the dependency arr is empty
  // cleanup -> unsubscribing from an event and during unmounting of the timer (clearing timers)

  // dependency array : Every time the component re-render we can access the state variable and perform operation via 
  // useEffect hook's dependency arr
  // this let's you add side effect logic everytime our component re-render
  useEffect (() => {
    console.log ("The current no. of chats are " + notificationCount + " .");
  }, [notificationCount])
  
  const style = {
    backgroundColor : "#1f1f1f",
    width : 20,
    height : 20,
    color : "white",
    borderRadius : 30,
    padding : 8,
    margin : 10,
  }

  return (
    <div style={{display : "flex", gap : 10, justifyContent : "center", alignItems : "center"}}>
      <img src = {"./public/chatting-message-icon.jpg"} style={{width : 40, height : 40, borderRadius : 30 }}></img>
      <span style={style}>{notificationCount}</span>
    </div>
  )

}