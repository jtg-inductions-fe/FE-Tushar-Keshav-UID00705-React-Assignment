import { BaseOption } from 'components/searchBar/SearchBar.types';

/**
 * A type which extends the BaseOption for search bar
 */
export type Product = Extract<
    BaseOption,
    {
        id: unknown;
        name: string;
    }
> & {
    id: number;
    tags: string;
    sales: number;
};
