import { ImageItem } from 'components/imageList/ImageList.type';
import { Point } from 'components/lineChart/LineChart.types';
import { Transaction } from 'components/transactionTable/TransactionTable.types';

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

export const LATEST_CUSTOMERS = [
    {
        id: 1,
        title: 'Neil Sims',
        subtext: 'email@example.com',
        trailingTextPrefix: '$367',
        avatarPath: '/src/assets/images/avatar_1.webp',
    },
    {
        id: 2,
        title: 'Bonnie Green',
        subtext: 'email@example.com',
        trailingTextPrefix: '$67',
        avatarPath: '/src/assets/images/avatar_2.webp',
    },
    {
        id: 3,
        title: 'Micheal Gough',
        subtext: 'email@example.com',
        trailingTextPrefix: '$3467',
        avatarPath: '/src/assets/images/avatar_3.webp',
    },
    {
        id: 4,
        title: 'Thomas Lean',
        subtext: 'email@example.com',
        trailingTextPrefix: '$2367',
        avatarPath: '/src/assets/images/avatar_4.webp',
    },
    {
        id: 5,
        title: 'Lana Byrd',
        subtext: 'email@example.com',
        trailingTextPrefix: '$367',
        avatarPath: '/src/assets/images/avatar_5.webp',
    },
    {
        id: 6,
        title: 'Karen Nelson',
        subtext: 'email@example.com',
        trailingTextPrefix: '$1367',
        avatarPath: '/src/assets/images/avatar_6.webp',
    },
];

export const TOP_PRODUCTS = [
    {
        id: 1,
        title: 'Restaurant Booking App',
        subtext: 'React & Bootstrap Framework',
        trailingTextPrefix: '70',
        trailingTextSuffix: 'sales',
    },
    {
        id: 2,
        title: 'UI Kit',
        subtext: 'React & Bootstrap Framework',
        trailingTextPrefix: '54',
        trailingTextSuffix: 'sales',
    },
    {
        id: 3,
        title: 'Design System Pro',
        subtext: 'Bootstrap Framework',
        trailingTextPrefix: '47',
        trailingTextSuffix: 'sales',
    },
    {
        id: 4,
        title: 'Dashboard',
        subtext: 'Tailwind, React',
        trailingTextPrefix: '43',
        trailingTextSuffix: 'sales',
    },
    {
        id: 5,
        title: 'Glassmorphism UI',
        subtext: 'Vue Js, Tailwind',
        trailingTextPrefix: '38',
        trailingTextSuffix: 'sales',
    },
    {
        id: 6,
        title: 'Multipurpose Template',
        subtext: 'React & Bootstrap Framework',
        trailingTextPrefix: '22',
        trailingTextSuffix: 'sales',
    },
];

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        details: 'Payment from',
        partyName: 'Bonnie Green',
        amount: 2300,
        date: new Date('Apr 23, 2021'),
        status: 'Completed',
    },
    {
        id: 2,
        details: 'Payment refund to',
        partyName: 'Bonn',
        amount: -670,
        date: new Date('Apr 23, 2021'),
        status: 'Completed',
    },
    {
        id: 3,
        details: 'Payment failed from',
        partyName: 'Jese Leos',
        amount: 234,
        date: new Date('Apr 18, 2021'),
        status: 'Cancelled',
    },
    {
        id: 4,
        details: 'Payment from',
        partyName: 'Bonnie Green',
        amount: 5000,
        date: new Date('Apr 15, 2021'),
        status: 'In progress',
    },
    {
        id: 5,
        details: 'Payment from',
        partyName: 'Jese Leos',
        amount: 2300,
        date: new Date('Apr 15, 2021'),
        status: 'In progress',
    },
    {
        id: 6,
        details: 'Payment from',
        partyName: 'THEMSBERG LLC',
        amount: 280,
        date: new Date('Apr 11, 2021'),
        status: 'Completed',
    },
];
