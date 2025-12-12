import { z } from "zod";

import {
  PostParamsSchema,
  PostRequestSchema,
  PostSchema,
} from "@/types/schema";

export interface IPostsRouteParams {
  postId: string;
}

// Route params are derived from dynamic segments only.
// - /api/posts/[postId]
// - /api/posts/[postId]/comments
export interface IPostRouteParams {
  postId: string;
}

// - /api/posts/[postId]/comments/[commentId]
export interface IPostCommentRouteParams {
  postId: string;
  commentId: string;
}

export type TPostParams = z.infer<typeof PostParamsSchema>;

export type TPost = z.infer<typeof PostSchema>;

export type TPostRequest = z.infer<typeof PostRequestSchema>;
