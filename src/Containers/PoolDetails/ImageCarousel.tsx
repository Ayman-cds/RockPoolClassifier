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
import { MainImage } from './PoolDetailsElements';

const ImageCarousel = ({ images }: { images: string[] }) => {
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
                style: {
                    marginTop: 20,
                    width,
                    height: width * 0.95,
                },
            }}
        >
            <ScrollView
                {...{
                    horizontal: true,
                    pagingEnabled: true,
                    showsHorizontalScrollIndicator: false,
                    style: { width, height },
                    onScroll: paginate,
                }}
            >
                {images.map((image, index) => (
                    <View {...{ style: { width, height } }}>
                        <Image
                            {...{
                                key: index,
                                source: { uri: image },
                                style: {
                                    alignSelf: 'center',
                                    borderRadius: 10,
                                    width: width * 0.9,
                                    height: height * 0.4,
                                    resizeMode: 'cover',
                                },
                            }}
                        />
                    </View>
                ))}
            </ScrollView>
            <View
                {...{
                    style: {
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 22,
                        alignSelf: 'center',
                        display: 'flex',
                        alignItems: 'center',
                    },
                }}
            >
                {images.map((i, k) => (
                    <Text
                        {...{
                            key: k,
                            style: k === active ? styles.active : styles.paging,
                        }}
                    >
                        ⬤
                    </Text>
                ))}
            </View>
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
export default ImageCarousel;
