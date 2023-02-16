import React from 'react';
import {TextInput, View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';


function Register({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.containerLogin}>
                <Image
                    source={{
                        uri:
                            'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png',
                    }}
                    style={{
                        width: 150,
                        height: 150,
                        marginBottom: 20,

                    }}
                />
                <Text style={styles.baseText}>Votre email ou identifiant :</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Votre Email"
                    keyboardType="default"
                    maxLength={30}
                />
                <Text style={styles.baseText}>Votre mot de passe:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Votre mot de passe"
                    keyboardType="default"
                    maxLength={30}
                    secureTextEntry={true}
                />
                <Text style={{marginTop:20, fontWeight: 'bold',paddingBottom:10, }}>Valider votre mot de passe:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Votre mot de passe"
                    keyboardType="default"
                    maxLength={30}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Enregistrer</Text>
                </TouchableOpacity>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: '#0066ff',
        borderWidth: 1,
        borderRadius: 20,
        width: 250,
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: '#a7d0f6',
    },
    background: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: -50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogin: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
        width: 300,
        borderRadius: 10,
        paddingBottom: 20,
    },
    baseText: {
        fontWeight: 'bold',
        paddingBottom: 10,
        marginTop: 30,
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 20,
        height: 35,
        width: 125,
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    head: {
        backgroundColor: '#1e479e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 50,
    }
});
export default Register;