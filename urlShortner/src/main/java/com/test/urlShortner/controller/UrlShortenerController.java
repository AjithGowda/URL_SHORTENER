package com.test.urlShortner.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("rest")
public class UrlShortenerController {

	@GetMapping("/getShortUrl")
	public ResponseEntity<String> getShortUrl(@RequestParam("fullUrl") String fullUrl){
		
		return new ResponseEntity<String>("ShortUrlME", HttpStatus.OK);
	}
	
}
