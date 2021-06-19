package com.test.urlShortner.controller;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.test.urlShortner.Service.GenerateShortURL;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("rest")
public class UrlShortenerController {
	
	@Autowired
	private GenerateShortURL generateShortURL;
	
	private Map<String, String> shortenUrlList = new HashMap();

	@GetMapping("/getShortUrl")
	public ResponseEntity<String> getShortUrl(@RequestParam("fullUrl") String fullUrl) throws MalformedURLException{
		
		String randomString = generateShortURL.getShortURL();
		String shortenedUrl = "http://localhost:8080/rest/s/"+randomString;
		setShortUrl(randomString, fullUrl);
		
		return new ResponseEntity<String>(shortenedUrl, HttpStatus.OK);
	}
	
	@GetMapping(value="/s/{randomstring}")
	public void getFullUrl(HttpServletResponse response, @PathVariable("randomstring") String randomString) throws IOException {
		response.sendRedirect(shortenUrlList.get(randomString));
	}
	
	@GetMapping(value="/shortUrlList")
	public List<String> getAllShortUrls() {
		List<String> urlList = new ArrayList<String>();
		Collection<String> collection = shortenUrlList.values();
		for (String string : collection) {
			urlList.add(string);
		}
		return urlList;
	}
	
	private void setShortUrl(String randomChar, String fullUrl) throws MalformedURLException {
		 shortenUrlList.put(randomChar, fullUrl);
	}
}
