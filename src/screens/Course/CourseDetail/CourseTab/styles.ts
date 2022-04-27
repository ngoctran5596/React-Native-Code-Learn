import { FONTS, height, SIZES } from "@theme/theme";
import { StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,

    },
    popularCourse: {
        flex: 1,
        ...FONTS.h2,
        
    },
    modalView: {
        flex: 1,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: SIZES.padding
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        position: "absolute",
        right: 0,
        top: 0,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        width: '100%',
        textAlign: 'center',
        ...FONTS.h1
    },
    textButton: {
        borderRadius: SIZES.radius,
        width: '49%',

        borderWidth: 1,
        height: 40
    }

})


export default styles;