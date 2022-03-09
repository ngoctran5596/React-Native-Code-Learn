import { Colors } from "@theme/colors";
import { SIZES } from "@theme/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'Anton-Regular'
    },
    ten: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    containerIcon: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal:  SIZES.padding,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }
})

export default styles;