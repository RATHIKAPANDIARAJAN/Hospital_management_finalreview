package com.example.demo.day.Repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.day.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}