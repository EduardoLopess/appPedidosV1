import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: "#F0F0F0",
        borderBottomWidth: 1,
        borderColor: "#b5bbb5ff",
        flexDirection: 'row'
    },

    containerName: {
        flex: 2,
        justifyContent: 'center',
        paddingStart: 10,
       
    },

    containerBtn: {
        flex: 1,
        justifyContent: 'center',
        paddingStart: 10,
        flexDirection: 'row',
        alignItems: 'center',
        

    },

    btnRemove: {
        width: '50%',
        height: '50%',
        backgroundColor: 'red'
    },

    btnEdit: {
        width: '50%',
        height: '50%',
        backgroundColor: 'blue'
        
    }
})