import { COLORS, FONTS, height, SIZES } from "@theme/theme";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 22
    },
    modalHeader: {

        flexDirection: 'row',
        alignItems: 'flex-end',
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
    },
    searchPlaceholder: {
        position: 'absolute',
        zIndex: 100,
        height:55,
        width: '100%',
        padding: 16,
        backgroundColor: COLORS.primary,
        ...Platform.select({
          android: {elevation: 3},
          ios: {
            shadowColor: '#a8bed2',
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: {
              width: 2,
              height: 2,
            },
          },
        }),
    }

})


export default styles;