export type IBlogDetail = {
    created_at: string;
    id: string;
    image_url: string;
    isPremium: boolean;
    isPublish: boolean;
    title: string;
    blog_content: {
        blog_id: string;
        content: string;
        created_at: string;
    } | null;
} | null

export type IBlog = {
    created_at: string;
    id: string;
    image_url: string;
    isPremium: boolean;
    isPublish: boolean;
    title: string;

} | null