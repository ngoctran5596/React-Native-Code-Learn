import { COLORS, FONTS, height, SIZES } from "@theme/theme";
import { StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: SIZES.padding,
    },
    content: {
        height:450,
        marginTop: SIZES.padding,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingBottom: 15,

    },
    justifyAvatar: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: 80
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        top: -50
    },
    image2: {
        width: 30,
        height: 30,
        borderRadius: 15,
        zIndex: 1,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        top: 30,
    },
    text: {
        ...FONTS.h3,
        paddingVertical: 10
    },
    textShow: {
        ...FONTS.h4,
        paddingVertical: 10,
        color: COLORS.primary,
    },

    containerChar: {
        width: 50,
        height: 50,
        borderWidth: 4,
        borderRadius: 25,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:15
    },
    firstProgressLayer: {
        width: 50,
        height: 50,
        borderWidth: 7,
        borderRadius: 25,
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#3498db',
        borderTopColor: '#3498db',
        transform: [{ rotateZ: '-135deg' }]
    },
    secondProgressLayer: {
        width: 50,
        height: 50,
        borderWidth: 7,
        borderRadius: 25,
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#3498db',
        borderTopColor: '#3498db',
        transform: [{ rotateZ: '45deg' }]
    },
    offsetLayer: {
        width: 50,
        height: 50,
        borderWidth: 7,
        borderRadius: 25,
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'grey',
        borderTopColor: 'grey',
        transform: [{ rotateZ: '-135deg' }]
    },
    display: {
        position: 'absolute',
        fontSize: 12,
        fontWeight: 'bold'
      }

})


export default styles;