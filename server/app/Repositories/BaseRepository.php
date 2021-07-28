<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Interfaces\BaseRepositoryInterface;

abstract class BaseRepository implements BaseRepositoryInterface
{
    protected $model;

    protected function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function get()
    {
        return $this->model->get();
    }

    public function find($data)
    {
        return $this->model->find($data);
    }

    public function getById($id)
    {
        return $this->model->where($this->model->getKeyName(), $id)->first();
    }

    public function findOrFail($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create($data)
    {
        return $this->model->create($data);
    }

    public function updateBy(string $column, $value, $data)
    {
        return $this->findBy($column, $value)->update($data);
    }

    public function findBy(string $column, $value)
    {
        return $this->model->where($column, $value);
    }
}
