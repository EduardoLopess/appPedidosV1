import { View } from "react-native";
import style from "./style";
import { ProductCategory } from "../../components/product-category-card/Index";
import { useProduct } from "../../utils/hoocks/useProduct";


export const MenuScreen = () => {

  const {category} = useProduct()

  return (
    <View style={style.container}>
      {category.map((item) => (
        <ProductCategory key={item} category={item} />
      ))}
    </View>
  );
};
