package com.example.demo.day.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.example.demo.day.model.User;
import com.example.demo.day.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	public UserService pser;
	@PostMapping("/user")
	public String postProduct(@RequestBody User pr ) {
	pser.saveProduct(pr);
	return "data saved";
	}
	@GetMapping("/get")
	public List<User> getProductInfo()
	{
		return pser.getProduct();
	}

	@DeleteMapping("/delete/{id}")
	public String removeProduct(@PathVariable("id")int id)
	{
		pser.deleteProduct(id);
		return "Patient with Id"+id+" is deleted";
	}
	@PutMapping("/update")
	public User updateProductInfo(@RequestBody User pm)
	{
		return pser.updateProduct(pm);
	}
	@PutMapping("/updateif/{id}")
	public ResponseEntity<String> updateProductInfo(@PathVariable int id,@RequestBody User pm)
	 {
		 boolean updated=pser.updateProductif(id,pm);
		 if(updated) {
			 return ResponseEntity.ok("Patient with ID "+id+" updated successfully");
		 }
		 else {
			 return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Patient with ID"+id+"not found");
		 }
	 }
	
}
