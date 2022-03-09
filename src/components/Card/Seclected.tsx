import { checkIcon } from '@assets/icons';
import { Block } from '@components';
import Text from '@components/Text';
import { Colors } from '@theme/colors';
import { COLORS } from '@theme/theme';
import * as React from 'react';
import { GestureResponderEvent, Image, ImageProps, ImageSourcePropType, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export interface IAppProps {
    title?: string;
    detail?: string;
    background?: string;
    style?: any;
    icon?: any;
    select?: boolean;
    _selectionChanged?: ((event: GestureResponderEvent) => void);
}

export default function SelectCard(props: IAppProps) {

    const { title, select, _selectionChanged, icon, background, style, detail } = props;
    // const [select,setSelect] = React.useState(true);
    return (
        <TouchableOpacity
            style={{
                width: '48%',
                padding: 10,
                borderRadius: 15,
                backgroundColor: select ? COLORS.black : COLORS.white,
                ...style
            }}
            onPress={_selectionChanged}

        ><Block
            width='100%'
        >
                <Image style={{ width: 32, alignContent: 'stretch', alignSelf: "flex-end", height: 32, tintColor: COLORS.white }} source={checkIcon} />
            </Block>
            <Text style={{ fontSize: 20, color: select ? COLORS.white : COLORS.black }}>

                {title}
                {"\n"}
                {detail}
            </Text>



        </TouchableOpacity>
    );
}
