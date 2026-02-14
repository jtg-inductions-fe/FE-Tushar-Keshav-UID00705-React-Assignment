export type ImageItem = {
    id: number;
    img: string;
    row?: number;
    column?: number;
    label: string;
    hideOnMobile?: boolean;
};

export interface QuiltedImageListProps {
    images: ImageItem[];
}
