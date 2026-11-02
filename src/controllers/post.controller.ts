import type { Request, Response } from 'express';
import postService from '../services/post.service';
import { postSchema } from '../schemas/post.schema';

async function getAllPosts(req: Request, res: Response): Promise<Response> {
    const posts = await postService.getAllPosts();
    return res.status(200).json(posts);
}

async function createPost(req: Request, res: Response): Promise<Response> {
    const result = postSchema.safeParse(req.body);
    if (result.error) return res.status(400).json(result.error.issues);

    const name = result.data.name;
    const description = result.data.description;

    const post = await postService.createPost(name, description);
    return res.status(201).json(post);
}

async function deletePost(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id)
    const result = await postService.deletePost(id);
    return res.status(result ? 204 : 404).end();
}

export default {
    getAllPosts,
    createPost,
    deletePost
};