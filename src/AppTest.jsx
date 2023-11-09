import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    console.log("left before left", clicks.left);
    const updatedLeft = clicks.left + 1;
    setClicks({ ...clicks, left: updatedLeft });
    // setClicks({ ...clicks, left: clicks.left + 1 });
    console.log("left after left", clicks.left);
    // setTotal(clicks.left + clicks.right);
    setTotal(updatedLeft + clicks.right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    console.log("right after right", clicks.right);
    // setClicks({ ...clicks, right: clicks.right + 1 });
    const updatedRight = clicks.right + 1;
    setClicks({ ...clicks, right: updatedRight });
    console.log("right after right", clicks.right);
    setTotal(clicks.left + updatedRight);
  };

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(" ")}</p>
      <p>total {total}</p>
    </div>
  );
};

// export default App;
