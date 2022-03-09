import { COLORS, FONTS } from '@theme/theme';
import { ThemeColors } from '@theme/types';
import React from 'react';
import { Animated, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


type PropsProfile = {
    icon: string;
    label?: string | undefined;
    value?: string | undefined;
    isSelected?: boolean;
    radioButton?: boolean;
    theme?: ThemeColors;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    onPressRadioButton?: ((event: GestureResponderEvent) => void) | undefined;

}
const ProfileProgress: React.FC<PropsProfile> = ({ icon, label, theme, value, radioButton, onPress }) => {

    const animatedRadioButton = React.useRef(new Animated.Value(0)).current;

    const [selected, setSelected] = React.useState(false);
    const circleColorAnimated = animatedRadioButton.interpolate({
        inputRange: [0, 17],
        outputRange: [COLORS.primary3, COLORS.primary],
    })
    React.useEffect(() => {
        if (selected) {
            Animated.timing(animatedRadioButton, {
                toValue: 17,
                duration: 300,
                useNativeDriver: false,
            }).start()
        } else {
            Animated.timing(animatedRadioButton, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
    },
        [selected])

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 80,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
            onPress={onPress}
        >
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                <MaterialIcons size={32} name={icon} color={COLORS.primary}
                    style={{
                        padding: 10,
                        backgroundColor: COLORS.gray10,
                        borderRadius: 26,
                        marginHorizontal: 5
                    }} />

                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    {label && <Text style={{ color: theme?.textColor }}>{label}</Text>}

                    <Text style={{ color:theme?.textColor , ...FONTS.h2 }}>{value}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end', padding: 10 }}>
                {label && value ? <MaterialIcons size={32} name='navigate-next' color={theme?.textColor } style={{ padding: 10 }} /> : null}
                {radioButton ?
                    (
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => setSelected(!selected)}
                        >
                            <Animated.View
                                style={{
                                    width: '100%',
                                    height: 5,
                                    backgroundColor: circleColorAnimated
                                }}
                            />

                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    left: animatedRadioButton,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 15,
                                    borderWidth: 5,
                                    borderColor: circleColorAnimated,
                                    backgroundColor: COLORS.white
                                }}
                            />
                        </TouchableOpacity>
                    ) : null
                }
            </View>

        </TouchableOpacity>
    );
};

export default ProfileProgress;

const styles = StyleSheet.create({});
