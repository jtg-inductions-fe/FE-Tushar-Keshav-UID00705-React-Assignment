import { ImageListItem, useMediaQuery, useTheme } from '@mui/material';

import { StyledImageList } from './QuiltedImageList.styles';
import { QuiltedImageListProps } from './QuiltedImageList.types';

export function QuiltedImageList({ images }: QuiltedImageListProps) {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    return (
        <StyledImageList
            variant="quilted"
            cols={isTablet ? 3 : 1}
            rowHeight={250}
            gap={12}
        >
            {images
                .filter((image) => !image.hideOnMobile || isTablet)
                .map((image) => (
                    <ImageListItem
                        key={image.id}
                        cols={image.column || 1}
                        rows={image.row || 1}
                    >
                        <img src={image.img} alt={image.label} loading="lazy" />
                    </ImageListItem>
                ))}
        </StyledImageList>
    );
}
