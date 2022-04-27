import React from 'react'
import { StyleSheet, View } from 'react-native'

interface IProps {
    containerStyle?: any
}


const LineChar = ({ containerStyle }: IProps) => {
    return (
        <View style={{ height: 10, width: '45%', marginRight: 5, ...containerStyle }}></View>

    )
}

export default LineChar

const styles = StyleSheet.create({})