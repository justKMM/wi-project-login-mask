export interface User {
    id: number;
    name: string;
    image_uri: string;
}

export const users: User[] = [
    {
        id: 1,
        name: "Aboodi Vesakaran",
        image_uri: "/profile_imgs/user1.jpg"
    },
    {
        id: 2,
        name: "Sharon Doe",
        image_uri: "/profile_imgs/user2.jpg"
    },
    {
        id: 3,
        name: "Sharon Schmith",
        image_uri: "/profile_imgs/user3.jpg"
    },
    {
        id: 4,
        name: "Alice Brown",
        image_uri: "/profile_imgs/user1.jpg"
    },
    {
        id: 5,
        name: "Marina Leonova",
        image_uri: "/profile_imgs/user2.jpg"
    }
];