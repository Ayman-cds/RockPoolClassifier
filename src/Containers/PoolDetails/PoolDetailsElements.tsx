import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import PoolSizeImage from '../../assets/PoolDetails/poolSize.png';
import PoolDepthImage from '../../assets/PoolDetails/poolDepth.png';
import PlaceHolderImage from '../../assets/PoolDetails/placeHolder.png';
import DownloadImage from '../../assets/PoolDetails/download.png';

export const MainImage = styled(Image)`
    border-radius: 10px;
`;

export const DetailsContent = styled(View)`
    margin: 20px;
`;
export const DetailTitle = styled(Text)`
    font-size: 24px;
    font-weight: bold;
    margin-top: 0;
`;
export const LastUpdated = styled(Text)`
    font-size: 13px;
    color: #05a81f;
    margin-bottom: 0;
`;

export const IconGroup = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const PoolSizeWrapper = styled(View)`
    display: flex;
    flex-direction: row;
`;
export const PoolSizeTextContainer = styled(View)`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const PoolSizeLabel = styled(Text)`
    color: #4d4d4f;
    font-size: 10px;
`;
export const PoolSizeNumber = styled(Text)`
    font-size: 16px;
`;
export const PoolSizeIcon = styled(Image).attrs({
    source: PoolSizeImage,
})`
    width: 52px;
    height: 52px;
`;

export const PoolDepthWrapper = styled(View)`
    display: flex;
    flex-direction: row;
`;
export const PoolDepthLabel = styled(Text)`
    color: #afb0ba;
    font-size: 10px;
`;
export const PoolDepthNumber = styled(Text)`
    font-size: 16px;
`;
export const PoolDepthIcon = styled(Image).attrs({
    source: PoolDepthImage,
})`
    width: 52px;
    height: 52px;
`;

export const PlaceholderIcon = styled(Image).attrs({
    source: PlaceHolderImage,
})`
    width: 52px;
    height: 52px;
`;

export const DownloadIcon = styled(Image).attrs({
    source: DownloadImage,
})`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const PoolStatWrapper = styled(View)`
    height: 20%;
    margin: 30px 40px;
`;

export const StatsTitle = styled(Text)`
    font-size: 18px;
    font-weight: bold;
`;

export const StatsRow = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
    /* border: 1px solid black; */
`;

export const Stat = styled(Text)`
    font-size: 18px;
    color: #656565;
`;
