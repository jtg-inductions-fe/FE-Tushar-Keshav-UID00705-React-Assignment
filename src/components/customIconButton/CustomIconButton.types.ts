import {
    Article,
    Assignment,
    CircleNotifications,
    CollectionsBookmark,
    Facebook,
    GitHub,
    Lock,
    MoveToInbox,
    PieChart,
    Public,
    Settings,
    ShoppingBag,
    SportsBasketballOutlined,
    Support,
    Tune,
    Twitter,
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
    facebook: Facebook,
    gitHub: GitHub,
    basketBall: SportsBasketballOutlined,
    twitter: Twitter,
    notfication: CircleNotifications,
    tune: Tune,
    public: Public,
    settings: Settings,
} as const;

export type IconType = keyof typeof ICON_MAP;

export type CustomIconButtonProps = {
    icon: IconType;
    ariaLabel: string;
    fontSize?: 'small' | 'medium' | 'large';
    dropShadow?: boolean;
    onClick?: () => void;
};
