package com.pagination.pagination.controllers;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pagination.pagination.models.UserModel;
import com.pagination.pagination.services.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("user")
public class UserController {

    private final UserService service;

    @GetMapping
    public Page<UserModel> getUsers(@RequestParam int page, @RequestParam int size) {
        return service.getUsers(page, size);
    }
}
