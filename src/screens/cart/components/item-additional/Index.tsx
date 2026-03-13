import { Text, TouchableOpacity, View } from "react-native"
import style from "./style"


export const AdditionalItem = () => {
    return (
        <View style={style.container}>
            <View style={style.containerName}>
                <Text>+ Ovo</Text>

            </View>

            <View style={style.containerPrice}>
                <Text>R$ 2,90</Text>
            </View>

            <View style={style.containerQtd}>
                <Text>2x</Text>
            </View>

            <View style={style.containerBtn}>
                <TouchableOpacity style={style.btn}>
                    <Text>-</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}