<?php

namespace App\Api\Posts\Controllers;

use App\Http\Controllers\Controller;
use App\Api\Posts\Validators\PostRequest;
use App\Api\Posts\Interfaces\PostRepositoryInterface;

class PostController extends Controller
{
    public function __construct(PostRepositoryInterface $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function index()
    {
        $posts = $this->postRepository->get();

        return response()->json($posts);
    }

    public function show(int $postId)
    {
        $post = $this->postRepository->findBy(['post_id' => $postId, 'user_id' => auth()->id()])->first();

        abort_if(!$post, 400, 'Você não tem autorização para editar esta postagem');

        return response()->json($post);
    }

    public function store(PostRequest $request)
    {
        $post = $this->postRepository->create([
            'user_id' => auth()->id(),
            'description' => $request->description
        ]);

        return response()->json($post, 201);
    }

    public function destroy(int $postId)
    {
        $post = $this->postRepository->findBy(['post_id' => $postId, 'user_id' => auth()->id()])->first();

        abort_if(!$post, 400, 'Você não tem autorização para apagar esta postagem');

        $post->delete();

        return response()->json([], 204);
    }

    public function update(PostRequest $request, int $postId)
    {
        $post = $this->postRepository->findBy(['post_id' => $postId, 'user_id' => auth()->id()])->first();

        abort_if(!$post, 400, 'Você não tem autorização para editar esta postagem');

        $post->description = $request->description;
        $post->update();

        return response()->json($post);
    }
}
