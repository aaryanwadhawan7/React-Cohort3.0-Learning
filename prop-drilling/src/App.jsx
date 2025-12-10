import React from "react";
import Card from "../components/Card";
import "./App.css";
const App = () => {
  return (
    <div className="card-container">
      <Card
        username="Aaryan Wadhawan"
        age={22}
        image="https://images.unsplash.com/photo-1764773964217-928418a07dbb?q=80&w=661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        username="Kiwi Wadhawan"
        age={5}
        image="https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww"
      ></Card>
      <Card
        username="Siddhant Wadhawan"
        age={9}
        image="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGR8ZW58MHx8MHx8fDA%3D"
      ></Card>
      <Card
        username="Samriddhi Wadhawan"
        age={21}
        image="https://plus.unsplash.com/premium_photo-1674764007753-8bd01b1d2f5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNuYWtlfGVufDB8fDB8fHww"
      ></Card>
      <Card
        username="Sarthak Wadhawan"
        age={25}
        image="https://images.unsplash.com/photo-1568162603664-fcd658421851?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhcnxlbnwwfHwwfHx8MA%3D%3D"
      ></Card>
    </div>
  );
};

export default App;
