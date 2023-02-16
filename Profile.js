import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{
                        uri:
                            'https://www.maisonsclairlogis.fr/wp-content/uploads/maison-contemporaine_onyx-version-nuit.jpg',
                    }}
                    style={{
                        width: '100%',
                        height: '100%',

                    }}
                />
            </View>
            <Image
                style={styles.avatar}
                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
            />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text>Thomas Delecluse</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>Securité</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 22,
        color: "#000000",
    },
    header: {
        backgroundColor: '#003cff',
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130,
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        padding: 30,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: '#0095ff',
    },
})
export default Profile;