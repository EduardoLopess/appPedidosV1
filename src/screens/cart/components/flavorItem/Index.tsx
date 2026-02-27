import { Text, TouchableOpacity, View } from "react-native"
import style from "./style"

export const FlavorItem = () => {
    return (
        <View style={style.container}>
            <View style={style.containerName}>
                <Text> + Sabor: Limão</Text>

            </View>

            <View style={style.containerBtn}>
                <TouchableOpacity style={style.btnEdit}>
                    <Text>!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btnRemove}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}