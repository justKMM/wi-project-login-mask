import { User, users } from "./User";

export interface Post {
    id: number;
    title: string;
    content: string;
    image_uri: string;
    user: User;
    created_at: string;
    likes: number;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Beautiful sunset at the beach",
        content: "Caught this amazing view during my evening walk",
        image_uri: "/post_imgs/post1.jpg",
        user: users[0], // John Doe
        created_at: "2024-03-17T18:30:00Z",
        likes: 124
    },
    {
        id: 2,
        title: "My new hiking adventure",
        content: "Reached the summit after 3 hours!",
        image_uri: "/post_imgs/post2.jpg",
        user: users[1], // Jane Smith
        created_at: "2024-03-17T15:45:00Z",
        likes: 89
    },
    {
        id: 3,
        title: "Homemade pasta night",
        content: "First time making pasta from scratch",
        image_uri: "/post_imgs/post3.jpg",
        user: users[2], // Bob Johnson
        created_at: "2024-03-17T12:15:00Z",
        likes: 256
    },
    {
        id: 4,
        title: "Downtown street art",
        content: "Found this amazing mural during my city walk",
        image_uri: "/post_imgs/post4.jpg",
        user: users[3], // Alice Brown
        created_at: "2024-03-17T10:20:00Z",
        likes: 167
    },
    {
        id: 5,
        title: "Morning coffee vibes",
        content: "Perfect way to start the day ☕",
        image_uri: "/post_imgs/post5.jpg",
        user: users[4], // Charlie Wilson
        created_at: "2024-03-17T08:00:00Z",
        likes: 92
    }
];

// Helper function to get a post by ID
export const getPostById = (id: number): Post | undefined => {
    return posts.find(post => post.id === id);
};

// Helper function to get posts by user
export const getPostsByUser = (userId: number): Post[] => {
    return posts.filter(post => post.user.id === userId);
};