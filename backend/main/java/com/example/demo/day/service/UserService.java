package com.example.demo.day.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.day.Repo.UserRepository;
import com.example.demo.day.model.User;




@Service
public class UserService {


@Autowired
public UserRepository prepo;
public String saveProduct(User h) {
	prepo.save(h);
	return "Data is saved to database";
}
public List<User> getProduct()
{
	return prepo.findAll();
}
public void deleteProduct(long id)
{    
	System.out.println("Deleted");
	prepo.deleteById(id);
}
public User updateProduct(User pm)
{
	return prepo.saveAndFlush(pm);
}
public boolean updateProductif(long id,User pm)
{
	if(prepo.existsById(id)) {
		prepo.save(pm);
		return true;
	}
	return false;
}
}