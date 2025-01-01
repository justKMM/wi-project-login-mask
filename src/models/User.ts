export interface User {
    id: number;
    username: string;
    name: string;
    image_uri: string;
}

export const users: User[] = [
    {
        id: 1,
        username: 'avesa01',
        name: "Aboodi Vesakaran",
        image_uri: "/profile_imgs/user1.jpg"
    },
    {
        id: 2,
        username: 'sharon02',
        name: "Sharon Doe",
        image_uri: "/profile_imgs/user2.jpg"
    },
    {
        id: 3,
        username: 'shaschi03',
        name: "Sharon Schmith",
        image_uri: "/profile_imgs/user3.jpg"
    },
    {
        id: 4,
        username: 'itsaliii04',
        name: "Alice Brown",
        image_uri: "/profile_imgs/user4.jpg"
    },
    {
        id: 5,
        username: 'just_mari05',
        name: "Marina Leonova",
        image_uri: "/profile_imgs/user5.jpg"
    },
    {
        id: 6,
        username: 'daniel06',
        name: "Daniel Dickinson",
        image_uri: "/profile_imgs/user6.jpg"
    },
    {
        id: 7,
        username: 'evexam07',
        name: "Evelyn Example",
        image_uri: "/profile_imgs/user7.jpg"
    },
    {
        id: 8,
        username: 'fang_fülla08',
        name: "Fang Füller",
        image_uri: "/profile_imgs/user8.jpg"
    }
];