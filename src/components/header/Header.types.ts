import { BaseOption } from 'components/searchBar/SearchBar.types';

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

export type HeaderProps = {
    headerRef: React.RefObject<HTMLElement | null>;
};
