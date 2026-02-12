export type UserProfile = {
    name: string;
    email: string;
    avatarPath: string;
};

export interface UserCardProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
    user: UserProfile;
}
