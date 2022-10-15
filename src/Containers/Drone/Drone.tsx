import { View, Text } from 'react-native';
import React from 'react';
import {
    DroneContainer,
    DroneImage,
    DroneInfo,
    DroneInfoContainer,
    DroneInfoTitle,
    DroneSection,
    InfoWrapper,
    SectionTitle,
} from './DroneElements';
import {
    Scene,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    BoxGeometry,
    Box2,
} from 'three';
import ExpoTHREE, { Renderer } from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
const Drone = () => {
    const onContextCreate = async (gl: ExpoWebGLRenderingContext) => {
        //three.js code
        const scene = new Scene();
        const camera = new PerspectiveCamera(
            75,
            gl.drawingBufferWidth / gl.drawingBufferHeight,
            0.1,
            1000
        );

        gl.canvas = {
            width: gl.drawingBufferWidth,
            height: gl.drawingBufferHeight,
        };
        camera.position.z = 2;
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const geoMetry = new ExpoTHREE.BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({
            color: 'green',
        });

        const cube = new Mesh(geoMetry, material);
        scene.add(cube);
        const render = () => {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            gl.endFrameEXP();
        };
    };
    return (
        <DroneContainer>
            <View>
                <GLView
                    {...{
                        style: {
                            width: 300,
                            height: 300,
                            borderWidth: 1,
                            borderColor: 'white',
                        },
                        onContextCreate,
                    }}
                />
            </View>
            {/* <SectionTitle>
                First Aid Kit & Medical Supplies Incoming{' '}
            </SectionTitle>
            <DroneSection>
                <DroneInfoContainer>
                    <InfoWrapper>
                        <DroneInfoTitle>Motor 1</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>

                    <InfoWrapper>
                        <DroneInfoTitle>Motor 2</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>
                </DroneInfoContainer>
                <DroneImage />
                <DroneInfoContainer>
                    <InfoWrapper>
                        <DroneInfoTitle>Motor 3</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>
                    <InfoWrapper>
                        <DroneInfoTitle>Motor 1</DroneInfoTitle>
                        <DroneInfo>80%</DroneInfo>
                    </InfoWrapper>
                </DroneInfoContainer>
            </DroneSection> */}
        </DroneContainer>
    );
};

export default Drone;
