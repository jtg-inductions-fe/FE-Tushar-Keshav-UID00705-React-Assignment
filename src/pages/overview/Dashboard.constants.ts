import { ImageItem } from 'components/imageList/ImageList.type';
import { Point } from 'components/lineChart/LineChart.types';

export const IMAGE_DATA: ImageItem[] = [
    {
        id: 1,
        img: '/src/assets/images/img1.webp',
        label: 'image 1',
    },
    {
        id: 2,
        img: '/src/assets/images/img2.webp',
        label: 'image 2',
    },
    {
        id: 3,
        img: '/src/assets/images/img3.webp',
        row: 2,
        label: 'image 3',
    },
    {
        id: 4,
        img: '/src/assets/images/img4.webp',
        column: 2,
        label: 'image 4',
        hideOnMobile: true,
    },
];

export const DATA_POINTS: Point[] = [
    { XAxis: '01 Apr', YAxis: 85000 },
    { XAxis: '02 Apr', YAxis: 100000 },
    { XAxis: '03 Apr', YAxis: 79000 },
    { XAxis: '04 Apr', YAxis: 95000 },
    { XAxis: '05 Apr', YAxis: 82000 },
    { XAxis: '06 Apr', YAxis: 105000 },
    { XAxis: '07 Apr', YAxis: 145000 },
];
