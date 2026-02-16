import { somethingWentWrong } from '@assets/images';
import { error404 } from '@assets/svg';
import { ErrorDetails } from '@typeDefs';

export const SOMETHING_WENT_WRONG: ErrorDetails = {
    imgSrc: somethingWentWrong,
    title: 'Something has gone seriously wrong',
    subtext:
        'It’s always time for a coffee break We should be back by the time you finish your coffee.',
    buttonText: 'Go back home',
};

export const PAGE_NOT_FOUND: ErrorDetails = {
    imgSrc: error404,
    title: 'Page not found',
    subtext:
        'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
    buttonText: 'Go back home',
};
