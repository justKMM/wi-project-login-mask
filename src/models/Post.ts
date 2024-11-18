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
        title: "Freedom",
        content: "Caught this amazing view during my evening walk",
        image_uri: "/post_imgs/post1.jpg",
        user: users[0], 
        created_at: "2024-03-17T18:30:00Z",
        likes: 124
    },
    {
        id: 2,
        title: "Superiority",
        content: "POV: You're a 4 dimensional creature looking down on the 3 dimensional idiots",
        image_uri: "/post_imgs/post2.jpg",
        user: users[1], 
        created_at: "2024-03-17T15:45:00Z",
        likes: 89
    },
    {
        id: 3,
        title: "Random Bulls***",
        content: "Why am I posting this random ahh picture? Nobody knows, not even me.",
        image_uri: "/post_imgs/post3.jpg",
        user: users[2], 
        created_at: "2024-03-17T12:15:00Z",
        likes: 256
    },
    {
        id: 4,
        title: "Street photography",
        content: "Hi guyssss! I've just bought a new camera, and this will mark the beginning of my photography era.",
        image_uri: "/post_imgs/post4.jpg",
        user: users[3], 
        created_at: "2024-03-17T10:20:00Z",
        likes: 167
    },
    {
        id: 5,
        title: "Aesthetic of the day",
        content: "Pastel colors for the win ☕",
        image_uri: "/post_imgs/post5.jpg",
        user: users[4], 
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