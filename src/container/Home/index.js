import React, { useState } from "react";
import Button from "../../components/Button";
import ColorContrast from "../../container/ColorContrast/index";

const Home = () => {
  const [page, setPage] = useState(null);
  const display = (key) => {
    switch (key) {
      case 1:
        return <ColorContrast />;

      default:
        break;
    }
  };
  return page ? (
    display(page)
  ) : (
    <div>
      <Button label={"Color Contrast"} onClick={() => setPage(1)} />
    </div>
  );
};

export default Home;
