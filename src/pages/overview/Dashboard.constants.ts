import { ImageItem } from 'components/imageList/ImageList.type';

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
