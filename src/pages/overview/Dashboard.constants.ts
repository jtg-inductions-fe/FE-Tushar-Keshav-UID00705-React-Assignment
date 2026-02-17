import { img1, img2, img3, img4 } from '@assets/images';
import { ImageItem } from '@components';

export const IMAGE_DATA: ImageItem[] = [
    {
        id: 1,
        img: img1,
        label: 'image 1',
    },
    {
        id: 2,
        img: img2,
        label: 'image 2',
    },
    {
        id: 3,
        img: img3,
        row: 2,
        label: 'image 3',
    },
    {
        id: 4,
        img: img4,
        column: 2,
        label: 'image 4',
        hideOnMobile: true,
    },
];
