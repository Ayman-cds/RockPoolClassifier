import {
    View,
    Text,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    NativeEventEmitter,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import React, { useState } from 'react';
import {
    DetailsContent,
    DetailTitle,
    IconGroup,
    LastUpdated,
    MainImage,
    PoolSizeIcon,
    PoolSizeLabel,
    PoolSizeNumber,
    PoolSizeWrapper,
    PoolSizeTextContainer,
    PlaceholderIcon,
    PoolDepthLabel,
    PoolDepthNumber,
    PoolDepthWrapper,
    PoolDepthIcon,
    DownloadIcon,
    PoolStatWrapper,
    Stat,
    StatsRow,
    StatsTitle,
} from './PoolDetailsElements';
import ImageCarousel from './ImageCarousel';
import {
    ButtonText,
    CaptureButton,
} from '../StatusOverlay/StatusOverlayElements';
import { RockPool } from '../Camera/CameraModule';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

const PoolDetails = () => {
    const [images, setImages] = useState<string[]>([
        'https://firebasestorage.googleapis.com/v0/b/oceanhack-75cd2.appspot.com/o/0573bdfd-2ddb-4282-ad24-1dad41d661c7.jpg?alt=media&token=de7aecf4-cb4b-4c80-a64c-cc8a5e3e45cf',
        'https://firebasestorage.googleapis.com/v0/b/oceanhack-75cd2.appspot.com/o/0e582771-8550-4690-bb01-023be0a43e71.jpg?alt=media&token=d3444090-5b9c-4f6a-b791-c5a737445afa',
        'https://firebasestorage.googleapis.com/v0/b/oceanhack-75cd2.appspot.com/o/33daea64-8f0b-40ba-b247-0a25b03873b2.jpg?alt=media&token=4dc9ab16-80fb-4629-89dc-0eceff6771c4',
    ]);
    const [activeSlide, setActiveSlide] = useState(0);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [active, setActive] = useState(0);
    const { params } = useRoute<RouteProp<RootStackParamList, 'PoolDetails'>>();

    console.log('PARAMSSSS ==>>', params);
    const pool = params;
    const paginate = ({
        nativeEvent,
    }: {
        nativeEvent: NativeSyntheticEvent<NativeScrollEvent>;
    }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        );
        if (slide !== active) {
            setActive(slide);
        }
    };
    const date = new Date(pool.lastUpdated);
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    console.log(formattedDate);
    return (
        <View
            {...{
                style: { marginTop: 50, width, height },
            }}
        >
            <ImageCarousel
                {...{ images: [...pool.image, pool.classifiedImage] }}
            />
            <DetailsContent>
                <LastUpdated>Last Updated: {formattedDate}</LastUpdated>
                <DetailTitle {...{}}>{pool.name}</DetailTitle>
            </DetailsContent>
            <IconGroup>
                <PoolSizeWrapper>
                    <PoolSizeIcon />
                    <PoolSizeTextContainer>
                        <PoolSizeLabel>Pool Size</PoolSizeLabel>
                        <PoolSizeNumber>{pool.poolSize} cm</PoolSizeNumber>
                    </PoolSizeTextContainer>
                </PoolSizeWrapper>
                <PoolDepthWrapper>
                    <PoolDepthIcon />
                    <PoolSizeTextContainer>
                        <PoolDepthLabel>Pool Depth</PoolDepthLabel>
                        <PoolDepthNumber>{pool.poolDepth} cm</PoolDepthNumber>
                    </PoolSizeTextContainer>
                </PoolDepthWrapper>
                <PoolSizeWrapper>
                    <PlaceholderIcon />
                </PoolSizeWrapper>
            </IconGroup>
            <PoolStatWrapper>
                <StatsTitle>Pool Stats</StatsTitle>
                <StatsRow>
                    <Stat>{pool.coverage}% coverage</Stat>
                    <Stat>{pool.organisms?.algae}% algae</Stat>
                </StatsRow>

                <StatsRow>
                    <Stat>{pool.organisms?.barnacles} barnacles</Stat>
                    <Stat>{pool.organisms?.oysters} oysters</Stat>
                </StatsRow>
            </PoolStatWrapper>
            <CaptureButton
                {...{
                    style: { position: 'absolute', bottom: 30, width: '90%' },
                }}
            >
                <DownloadIcon />
                <ButtonText
                    {...{ style: { fontSize: 20, fontWeight: 'normal' } }}
                >
                    Download
                </ButtonText>
            </CaptureButton>
        </View>
    );
};

const styles = StyleSheet.create({
    active: {
        color: 'green',
        margin: 3,
        fontSize: 18,
    },
    paging: {
        color: 'white',
        margin: 3,
    },
});
export default PoolDetails;
