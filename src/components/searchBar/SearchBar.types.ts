/*
    It is a Conditional type, which can be a primitive or object with field id
    used for the Option in search suggestion
 */
export type BaseOption =
    | {
          id: unknown;
          name: string;
      }
    | string;

export type GetUpdatedOptions<T extends BaseOption> = (
    input: string,
) => Promise<T[]>;
export type OnOptionSelect<T extends BaseOption> = (input: T) => Promise<void>;
export interface SearchBarProps<T extends BaseOption> {
    getOptions: GetUpdatedOptions<T>;
    onOptionSelect: OnOptionSelect<T>;
}
