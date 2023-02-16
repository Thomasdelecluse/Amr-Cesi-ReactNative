
import React from 'react';

import { View, Image } from 'react-native';

const ActionBarImage = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{
                    uri:
                        'https://logos-marques.com/wp-content/uploads/2022/07/Logo-ATT.png',
                }}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    marginLeft: 15,

                }}
            />
        </View>
    );
};

export default ActionBarImage;
