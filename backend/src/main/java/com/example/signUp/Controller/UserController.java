package com.example.signUp.Controller;
import java.util.List;

import com.example.signUp.model.User;
import com.example.signUp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users/register")
    public User register(@Valid @RequestBody User user) throws Exception{
        List<User> users = userRepository.findAll();
        if(users.stream().filter(u->u.getUsername().equals(user.getUsername())).findAny().isPresent()){
            throw new Exception("Username " + user.getUsername() + " is already taken");
        }
        else
            return userRepository.save(user);

    }
    
}
