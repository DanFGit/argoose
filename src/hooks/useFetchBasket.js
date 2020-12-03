import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBasket } from "../state/slices/basket";

const useFetchBasket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBasket());
  }, []);
};

export default useFetchBasket;
