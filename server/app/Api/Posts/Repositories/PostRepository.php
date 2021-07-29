<?php

namespace App\Api\Posts\Repositories;

use App\Api\Posts\Models\Post;
use App\Repositories\BaseRepository;
use Illuminate\Database\Eloquent\Builder;
use App\Api\Posts\Interfaces\PostRepositoryInterface;

class PostRepository extends BaseRepository implements PostRepositoryInterface
{
    public function __construct(Post $model)
    {
        parent::__construct($model);
    }
}
