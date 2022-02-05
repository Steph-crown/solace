export interface ISideNavLinkProps {
    name: string;
    Icon: any;
    path: string;

    // Check if the link is active
    active?: boolean;

    // This is for messages or notifications links - to show the number of unread notifications / messages
    unread?: number;
}
