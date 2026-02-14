import { BaseOption } from 'components/searchBar/SearchBar.types';

/**
 * A type which extends the BaseOption for search bar
 */
export type Product = Extract<
    BaseOption,
    {
        id: number | string;
        name: string;
    }
> & {
    id: number;
    tags: string[];
    sales: number;
};

export type HeaderProps = {
    onMenuClick: () => void;
};
