import { useContext } from "react";
import BagContext from "../Context/BagContext";

const useBag = () => useContext(BagContext)

export default useBag