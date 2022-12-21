import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ConfirmButton = label => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#1B74E4',
        padding: 5,
        borderRadius: 5,
        width: (width * 35) / 100,
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: 'white',
        }}>
        Confirm
      </Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;
