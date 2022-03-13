import { AVATAR, CHAT, FAVORITE, HEART, PDF, REPLY, SEND } from '@assets/images'
import { IconButton, Line, TextButton } from '@components'
import { COLORS, FONTS, SIZES } from '@theme/theme'
import { course_details } from 'constants/dummyData'
import React from 'react'
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'


type Props = {
    commentItem?: any,
    CommentOptions?: any,
    replies?: any,
}

const ComponentSection = ({ commentItem, CommentOptions, replies }: Props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
            }}
        >
            <Image style={{ height: 40, width: 40, borderRadius: 20 }} source={commentItem?.profile} />
            <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={{ ...FONTS.h3, fontSize: 18 }}>{commentItem?.name}</Text>
                <Text style={{ ...FONTS.body4 }}>{commentItem?.comment}</Text>
                {CommentOptions}
                {replies}
            </View>


        </View>
    )
}


const CourseDiscussion = (props: Props) => {


    function _renderStudent() {


        return (
            <FlatList
                data={course_details?.discussions}
                keyExtractor={(item) => `discussions-${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ marginBottom: 80 }}>
                            <ComponentSection
                                replies={
                                    <FlatList
                                        data={item?.replies}
                                        keyExtractor={item => `replies-${item.id}`}
                                        scrollEnabled={false}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <ComponentSection
                                                    commentItem={item}
                                                    CommentOptions={
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                borderTopWidth: 1,
                                                                borderBottomWidth: 1,
                                                                borderColor: COLORS.gray40,
                                                                marginTop: 5
                                                            }}
                                                        >
                                                            <IconButton
                                                                containerStyle=
                                                                {{
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    width: 90,
                                                                    height: 40,
                                                                    flexDirection: 'row',
                                                                }}
                                                                icon={REPLY}
                                                                iconStyle={{ width: 20, height: 20, marginRight: 3 }}
                                                                label="Reply"
                                                            />
                                                            <IconButton
                                                                containerStyle=
                                                                {{
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    width: 90,
                                                                    height: 40,
                                                                    flexDirection: 'row',

                                                                }}
                                                                icon={FAVORITE}
                                                                iconStyle={{ width: 20, height: 20, marginRight: 3 }}
                                                                label="like"
                                                            />
                                                            <Text style={{ textAlignVertical: 'center' }}>{item?.posted_on}</Text>
                                                        </View>
                                                    }
                                                />
                                            )
                                        }}
                                    />
                                }
                                CommentOptions={
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            borderTopWidth: 1,
                                            borderBottomWidth: 1,
                                            borderColor: COLORS.gray40,
                                            marginTop: 5
                                        }}
                                    >
                                        <IconButton
                                            containerStyle=
                                            {{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: 100,
                                                height: 40,
                                                flexDirection: 'row',

                                            }}
                                            icon={CHAT}
                                            iconStyle={{ width: 20, height: 20, marginRight: 3 }}
                                            label={item.no_of_comments}
                                        />

                                        <IconButton
                                            containerStyle=
                                            {{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: 100,
                                                height: 40,
                                                flexDirection: 'row',
                                                marginLeft: 5
                                            }}
                                            icon={HEART}
                                            iconStyle={{ width: 20, height: 20, marginRight: 3 }}
                                            label={item?.no_of_likes}
                                        />

                                        <Text style={{ textAlignVertical: 'center' }}>{item?.posted_on}</Text>
                                    </View>
                                }
                                commentItem={item}

                            />
                        </View>
                    )
                }}
            />
        )
    }


    function renderFooter() {
        return (
            <View style={{
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
                bottom: 0,
                left: 0,
                right: 0,
                height: 60,
                backgroundColor: COLORS.gray10
            }}>
                <TextInput
                    style={{ flex: 1 }}
                    multiline
                    placeholder="Type Something"
                    placeholderTextColor={COLORS.gray80}
                />
                <IconButton icon={SEND} />
            </View>
        )
    }


    return (
        <View
            style={{ flex: 1, padding: SIZES.padding }}>
            {/**header */}
            {_renderStudent()}
            {/**line */}
            {renderFooter()}


        </View >
    )
}

export default CourseDiscussion