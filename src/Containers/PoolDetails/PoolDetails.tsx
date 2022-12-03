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
import { Card } from 'react-native-shadow-cards';
import ImageCarousel from './ImageCarousel';
import {
    ButtonText,
    CaptureButton,
} from '../StatusOverlay/StatusOverlayElements';

const PoolDetails = () => {
    const [images, setImages] = useState<string[]>([
        'https://firebasestorage.googleapis.com/v0/b/oceanhack-75cd2.appspot.com/o/0573bdfd-2ddb-4282-ad24-1dad41d661c7.jpg?alt=media&token=de7aecf4-cb4b-4c80-a64c-cc8a5e3e45cf',
        'https://firebasestorage.googleapis.com/v0/b/oceanhack-75cd2.appspot.com/o/0e582771-8550-4690-bb01-023be0a43e71.jpg?alt=media&token=d3444090-5b9c-4f6a-b791-c5a737445afa',
        'https://firebasestorage.googleapis.com/v0/b/oceanhack-75cd2.appspot.com/o/33daea64-8f0b-40ba-b247-0a25b03873b2.jpg?alt=media&token=4dc9ab16-80fb-4629-89dc-0eceff6771c4',
    ]);
    const [activeSlide, setActiveSlide] = useState(0);
    const RenderImages = ({ item, index }: { item: string; index: number }) => {
        return <MainImage {...{ source: { uri: item } }} />;
    };
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [active, setActive] = useState(0);

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
    return (
        <View
            {...{
                style: { marginTop: 50, width, height },
            }}
        >
            <ImageCarousel {...{ images }} />
            <DetailsContent>
                <LastUpdated>Last Updated: 20/12/2022</LastUpdated>
                <DetailTitle {...{}}>Spring Fields Rock pool</DetailTitle>
            </DetailsContent>
            <IconGroup>
                <PoolSizeWrapper>
                    <PoolSizeIcon />
                    <PoolSizeTextContainer>
                        <PoolSizeLabel>Pool Size</PoolSizeLabel>
                        <PoolSizeNumber>15 cm</PoolSizeNumber>
                    </PoolSizeTextContainer>
                </PoolSizeWrapper>
                <PoolDepthWrapper>
                    <PoolDepthIcon />
                    <PoolSizeTextContainer>
                        <PoolDepthLabel>Pool Size</PoolDepthLabel>
                        <PoolDepthNumber>15 cm</PoolDepthNumber>
                    </PoolSizeTextContainer>
                </PoolDepthWrapper>
                <PoolSizeWrapper>
                    <PlaceholderIcon />
                </PoolSizeWrapper>
            </IconGroup>
            <PoolStatWrapper>
                <StatsTitle>Pool Stats</StatsTitle>
                <StatsRow>
                    <Stat>78% coverage</Stat>
                    <Stat>36% algae</Stat>
                </StatsRow>

                <StatsRow>
                    <Stat>7 barnacles</Stat>
                    <Stat>3 oysters</Stat>
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
