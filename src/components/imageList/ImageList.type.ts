export type ImageItem = {
    id: number;
    img: string;
    row?: number;
    column?: number;
    label: string;
    hideOnMobile?: boolean;
};

export type QuiltedImageListProps = {
    images: ImageItem[];
};
