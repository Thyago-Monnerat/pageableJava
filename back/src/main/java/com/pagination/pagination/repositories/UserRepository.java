package com.pagination.pagination.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.pagination.pagination.models.UserModel;

public interface UserRepository extends PagingAndSortingRepository<UserModel, Long>{
    
}
