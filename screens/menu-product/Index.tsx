import { Text, View } from "react-native"
import style from './style'
import { ProductCategory } from "../../components/product-category-card/Index"

const categoryData = [
    {id: 1, category: 'Cerveja'},
    {id: 2, category: 'Refrigerante'},
    {id: 3, category: 'Sem Alccol'},
]

export const MenuScreen = () => {

    


    return (
        <View style={style.container}>

            {categoryData.map((item) => {
                return (
                    <ProductCategory key={item.id} category={item.category}/>
                )

            })}

            
        </View>
    )
}