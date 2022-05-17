import { Block, SelectCard, TextInput } from '@components';
import Button from '@components/Button/Custombutton';
import Text from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import { authActions } from '@store/auth/authClient';
import { COLORS, SIZES } from '@theme/theme';
import Helper from '@utils/helpers';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { Image, ImageBackground,ScrollView } from 'react-native';



export interface RegisterProps {
}

function Register(props: RegisterProps) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [isTutor, setIsTutor] = React.useState(true)
    const [selectStudent, setselectStudent] = React.useState(false)
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    function handlerRegister() {
        dispatch(authActions.register({name, email, password ,isTutor:selectStudent}))
        Helper.openLink('https://mail.google.com/');       

    }
    function logout() {
        dispatch(authActions.logout())

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
    const _selectionStudent = () => {    
            setselectStudent(!selectStudent);   
    }
   


    return (
        <ScrollView>
            <ImageBackground
                style={{ flex: 1 }}
                source={{ uri: 'https://images.pexels.com/photos/2470655/pexels-photo-2470655.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }}>
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
                        Register
                    </Text>
                    <Block
                        row={true}
                        width='100%'
                        height={100}
                    >

                        <SelectCard title='I am' detail='Student' _selectionChanged={_selectionStudent} select={!selectStudent} style={{ marginRight: 10 }} />
                        <SelectCard title='I am' detail='Teacher' _selectionChanged={_selectionStudent} select={selectStudent} />

                    </Block>

                    <Block
                        margin={10}
                        width='100%'
                    >
                        <TextInput placeholder='Username' key='username' onChangeText={setName} label='User name' />
                        <TextInput placeholder='Email' key='email' onChangeText={handlerSetEmail} label='Email' />
                        <TextInput secureTextEntry={true} placeholder='Password' key='Pass' onChangeText={handlerSetPassword} label='Password' />
                    </Block>

                    <Button
                        padding={10}
                        width='100%'
                        radius={30}
                        justify='center'
                        onPress={handlerRegister}
                        height={50}
                        backgroundColor={COLORS.primary}
                        title="Create Account" 
                        margin={10}
                        />

                        
                    <Button
                        padding={10}
                        width='100%'
                        radius={30}
                        justify='center'
                        onPress={logout}
                        height={50}
                        backgroundColor={COLORS.primary}
                        title="Create logout" />

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
                    {/* <Text
                        size={16}
                        padding={20}
                    >
                        New user, <Text color="primary"> Sign up now</Text>
                    </Text> */}
                </Block>
            </ImageBackground>
        </ScrollView>
    );
}


export default Register