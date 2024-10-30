import { StyleSheet, Text, View } from 'react-native'; 
import React from 'react';

export default function FlatCards() {
    return (
        <View style={styles.main}>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Yellow</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 16,
        padding: 4,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        width: '20%',
        height: 100,
        borderRadius: 4,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
    cardFour: {
        backgroundColor: '#FFFF8D',
    },
});
