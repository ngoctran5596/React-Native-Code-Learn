import { Block, TextInput } from '@components';
import Button from '@components/Button/Custombutton';
import Text from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import { authActions, selectCurrentUser } from '@store/auth/authClient';
import { COLORS, SIZES } from '@theme/theme';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import { Image, ImageBackground } from 'react-native';




export interface ILoginProps {
}

function LoginScreen(props: ILoginProps) {

    const user = useAppSelector((state: any)=>state.auth.currentUser);
   
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (user) {
            navigation.navigate('BottomTab');
        }
    }, [user])


    function handlerLogin() {
        dispatch(authActions.login({ email, password }))

    }

    const handlerSetEmail = (text: string) => {
        setEmail(text)
    }
    const handlerSetPassword = (text: string) => {
        setPassword(text)
    }

    const _renderIcon = (type: string) => {
        let icon: any = '';
        if (type === 'google') {
            icon = require('../../../assets/icons/google.png');
        } else {
            icon = require('../../../assets/icons/facebook.png');
        }
        return (
            <Image source={icon} style={{ width: 32, height: 32, marginRight: 10 }} />
        )
    }

    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={{ uri: 'https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }}>
            <Block
                flex={1}
                justify="center"
                align='center'
                width='100%'
                height='100%'
                padding={SIZES.padding}
            >
                <Text
                    size={32}
                    lineHeight={100}
                >
                    Login
                </Text>
                <Block
                    margin={10}
                    width='100%'
                >
                    <TextInput autoComplete='email' placeholder='Email' key='email' onChangeText={handlerSetEmail} label='Email' />
                    <TextInput  secureTextEntry={true} placeholder='Password' key='Pass' onChangeText={handlerSetPassword} label='Password' />
                </Block>


                <Button
                    padding={10}
                    width='100%'
                    radius={30}
                    height={50}
                    backgroundColor={COLORS.primary}
                    onPress={handlerLogin}
                    justify='center'
                    title="Login" />

                <Text
                    size={16}
                    padding={20}
                >
                    or login with
                </Text>
                <Block
                    row={true}
                    width='100%'
                    height={60}
                >

                    <Button
                        leftIcon={_renderIcon('google')}
                        padding={15}
                        right='4%'
                        width='49%'
                        align='center'
                        justify='center'
                        radius={30}
                        backgroundColor={COLORS.primary}
                        title="Google" />
                    <Button
                        padding={10}
                        width='49%'
                        align='center'
                        radius={30}
                        justify='center'
                        leftIcon={_renderIcon('facebook')}
                        leftIconContainerStyle={{ padding: 10 }}
                        backgroundColor={COLORS.primary}
                        title="FaceBook" />
                </Block>
                <Text
                    size={16}
                    padding={20}
                >
                    New user, <Text color="primary" onPress={() => navigation.navigate('Register')}> Sign up now</Text>
                </Text>
            </Block>
        </ImageBackground>

    );
}


export default LoginScreen