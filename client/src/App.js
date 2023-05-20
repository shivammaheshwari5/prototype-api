import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [mydata, setMydata] = useState([]);
  const [myProperty, setMyProperty] = useState([]);
  const [message, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [floorPlan, setFloorPlan] = useState("");
  const [address, setAddress] = useState("");
  const getAds = async () => {
    try {
      const { data } = await axios.get(`/api/message`);
      setMydata(data.msg);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProperty = async () => {
    try {
      const { data } = await axios.get(`/api/property`);
      setMyProperty(data.property);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const sendDetail = async (event) => {
    try {
      const { data } = await axios.post("/api/property", {
        propertyTitle: title,
        propertyImages: image,
        address: address,
        price: price,
        description: description,
        floorPlan: floorPlan,
      });
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAds();
    getProperty();
  }, []);
  console.log(message);
  console.log(myProperty);
  return (
    <div>
      {mydata?.map((u) => {
        return <div key={u._id}>{u.myMessage}</div>;
      })}
      <form onSubmit={sendDetail}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Property Title"
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="Property Image"
        />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Property Address"
        />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder="Property Price"
        />
        <input
          type="text"
          onChange={(e) => setFloorPlan(e.target.value)}
          value={floorPlan}
          placeholder="Property Floor Plan"
        />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Property Description"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
