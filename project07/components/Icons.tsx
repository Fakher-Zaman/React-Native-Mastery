import { View, Text } from 'react-native';
import React, { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name}) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#F7CD2E" />
            break;
    
        default:
            break;
    }
}

export default Icons;
