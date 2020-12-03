import { useDispatch, useSelector } from "react-redux";
import {
  getProductsArray,
  getProductsStatus,
} from "../state/selectors/products";
import { fetchProducts } from "../state/slices/products";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsArray);
  const status = useSelector(getProductsStatus);

  if (products.length === 0 && status === "idle") dispatch(fetchProducts());

  return { products, status };
};

export default useFetchProducts;
