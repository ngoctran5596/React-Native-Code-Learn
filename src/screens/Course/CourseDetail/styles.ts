import { COLORS, FONTS, height, SIZES } from "@theme/theme";
import { StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    video: {
        height: SIZES.height > 800 ? 220 : 200,
        alignItems: "center",
        justifyContent: "center",
        // marginTop:SIZES.height > 800 ? 60 : 50,
        backgroundColor: COLORS.black
    },
    imageBG: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        height: SIZES.height > 800 ? 60 : 50,
        top: 0,
        left:0,
        right: 0,
        paddingVertical:SIZES.radius,
        paddingHorizontal: SIZES.padding,
        flexDirection: 'row',
        zIndex:1
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