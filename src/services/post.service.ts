import { pool } from '../db';
import type { Post } from '../types/post.type';

async function getAllPosts(): Promise<Array<Post>> {
    const result = await pool.query<Post>(`SELECT * FROM posts`);
    return result.rows;
}

async function createPost(name: string, description: string | null | undefined): Promise<Post> {
    const result = await pool.query<Post>(`INSERT INTO posts (name, description) VALUES ($1, $2) RETURNING *`, [name, description]);

    const post = result.rows[0];
    if (!post) {
        throw new Error('Could not create new Post');
    }

    return post;
}

async function deletePost(id: number): Promise<boolean> {
    const result = await pool.query(`DELETE FROM posts WHERE id = $1`, [id]);
    return !!result.rowCount;
}

export default {
    getAllPosts,
    createPost,
    deletePost
};