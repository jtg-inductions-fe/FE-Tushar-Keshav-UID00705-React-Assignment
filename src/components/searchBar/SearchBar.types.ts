/**
 * The base structure for any search option.
 * Can be a simple `string` or an `object` with at least `id` and `name`.
 */
export type BaseOption =
    | {
          id: number | string;
          name: string;
      }
    | string;

export type GetUpdatedOptions<T extends BaseOption> = (
    input: string,
) => Promise<T[]>;

export type OnOptionSelect<T extends BaseOption> = (input: T) => Promise<void>;

export type SearchBarProps<T extends BaseOption> = {
    getOptions: GetUpdatedOptions<T>;
    onOptionSelect: OnOptionSelect<T>;
};
