import { Text, TouchableOpacity, View } from 'react-native'
import style from './style'

type ProductCategoryProps = {
    id?: number,
    category: string
}

export const ProductCategory = ({category}: ProductCategoryProps) => {
    return (
        <TouchableOpacity style={style.container}>
      
            <Text style={style.txt}>{category}</Text>

        </TouchableOpacity>
    )
}