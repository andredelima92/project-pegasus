<?php

namespace App\Interfaces;

interface BaseRepositoryInterface
{
    public function get();
    public function getById(int $id);
    public function find($data);
    public function findOrFail(int $id);
    public function create(array $arr);
    public function findBy(array $arr);
    public function updateBy(string $column, $value, array $data);
}
