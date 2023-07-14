import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

export default function ProductItem({ item }) {
    return (
        <Card
            additionalStyle={styles.additionalStylesCard}
        >
            <Text
                style={styles.productTitle}>
                {item.title}
            </Text>
            <Image
                resizeMode='cover'
                style={styles.image}
                source={{ uri: item.images[0] }}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    productTitle: {
        width: '60%',
        fontFamily:'Nunito'
    },
    image: {
        height: '100%',
        width: '40%',
        borderRadius: 8
    },
    additionalStylesCard: {
        height: 100,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
})