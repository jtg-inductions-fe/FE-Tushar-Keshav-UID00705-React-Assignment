import {
    Article,
    Assignment,
    CollectionsBookmark,
    Lock,
    MoveToInbox,
    PieChart,
    ShoppingBag,
    Support,
} from '@mui/icons-material';

export const ICON_MAP = {
    overview: PieChart,
    report: Article,
    inbox: MoveToInbox,
    shoppingBag: ShoppingBag,
    lock: Lock,
    document: Assignment,
    components: CollectionsBookmark,
    support: Support,
} as const;

export type IconType = keyof typeof ICON_MAP;
