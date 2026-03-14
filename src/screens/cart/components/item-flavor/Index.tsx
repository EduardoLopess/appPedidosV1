import { View, Text } from "react-native"
import style from "./style"
import { Flavor } from "../../../../utils/types/ProductType"

type Props = {
    item: Flavor
}


export const ItemFlavor = ({item}: Props) => {

    return (
        <View style={style.container}>
            <Text>Sabor: {item.name}</Text>
        </View>
    )
}