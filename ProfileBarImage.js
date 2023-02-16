
import React from 'react';

import {View, Image, TouchableOpacity, Text} from 'react-native';



const ProfileBarImage = ({navigation}) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
                source={{
                    uri:
                        'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                }}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    marginRight: 15,

                }}
            />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileBarImage;
