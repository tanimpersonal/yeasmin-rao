import { useEffect, useState } from "react";

const useData = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://json.extendsclass.com/bin/2709f887fc45")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return datas;
};
export default useData;
