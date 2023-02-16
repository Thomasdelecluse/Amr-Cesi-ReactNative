import React from 'react';
import {TextInput, View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';


function Login({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.containerLogin}>
                <Image
                    source={{
                        uri:
                            'https://logos-marques.com/wp-content/uploads/2022/07/Logo-ATT.png',
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
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => navigation.navigate('Register')}>
                    <Text style={{color: 'blue', marginTop: 5,}}>Crée un compte</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50,
    },
    containerLogin: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
        width: 300,
        borderRadius: 10,
    },
    baseText: {
        fontWeight: 'bold',
        paddingBottom: 10,
        marginTop: 40,
    },
    button: {
        backgroundColor: 'blue',
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

});
export default Login;