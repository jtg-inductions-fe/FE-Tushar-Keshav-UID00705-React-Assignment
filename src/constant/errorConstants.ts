import { ErrorDetails } from '@types';

export const somethingWentWrong: ErrorDetails = {
    imgSrc: 'src/assets/images/something-went-wrong.png',
    title: 'Something has gone seriously wrong',
    subtext:
        'It’s always time for a coffee break We should be back by the time you finish your coffee.',
    buttonText: 'Go back home',
};

export const pageNotFound: ErrorDetails = {
    imgSrc: 'src/assets/svg/404.svg',
    title: 'Page not found',
    subtext:
        'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
    buttonText: 'Go back home',
};
