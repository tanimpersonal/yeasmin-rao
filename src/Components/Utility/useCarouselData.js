import { useEffect, useState } from "react";

const useCarouselData = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://json.extendsclass.com/bin/6bded32047ce")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return datas;
};

export default useCarouselData;
