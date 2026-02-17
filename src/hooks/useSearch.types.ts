export type SearchHookState<T> = [
    isOpen: boolean,
    isLoading: boolean,
    options: Array<T>,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
];
