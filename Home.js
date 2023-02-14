import React from 'react';
import {TextInput, View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';


function Home({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.containerLogin}>
                <View style={styles.head}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20,}}>Page de connexion</Text>
                </View>
                <Text style={styles.baseText}>Votre email ou identifiant :</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 5,
                        width: 250,
                        textAlign: 'center',
                        marginBottom: 10
                    }}
                    placeholder="Votre Email"
                    keyboardType="default"
                    maxLength={30}
                />
                <Text style={styles.baseText}>Votre mot de passe:</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 5,
                        width: 250,
                        textAlign: 'center'
                    }}
                    placeholder="Votre mot de passe"
                    keyboardType="default"
                    maxLength={30}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Test')}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={{color: 'blue', marginTop: 5,}}>Crée un compte</Text>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogin: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#8ea0d1',
        width: 300,
        height: 400,
        borderRadius: 10,
    },
    baseText: {
        fontWeight: 'bold',
        paddingBottom: 10,
        marginTop: 40,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 5,
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
export default Home;