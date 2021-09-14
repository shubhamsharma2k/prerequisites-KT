import React, { useEffect, useState } from "react";
import axios from "axios";

const DemoUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log(res.data);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <ul key={index}>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default DemoUseEffect;
