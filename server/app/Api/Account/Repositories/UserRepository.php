<?php

namespace App\Api\Account\Repositories;

use App\Api\Account\Models\User;
use App\Repositories\BaseRepository;
use App\Api\Account\Interfaces\UserRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }
}
