import { View, Text } from 'react-native';
import React from 'react';
import { StatusContainer } from './StatusOverlayElements';
import Drone from '../Drone/Drone';

const StatusOverlay = () => {
    return (
        <StatusContainer>
            <Drone />
        </StatusContainer>
    );
};

export default StatusOverlay;
