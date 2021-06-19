package com.test.urlShortner.Service;

import org.springframework.stereotype.Component;

@Component
public class GenerateShortURL {

	public String getShortURL() {
		String tempArr = "";
		String possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		
		for (int i = 0; i < 5; i++) {
			tempArr += possibleChars.charAt(i) + Math.floor(Math.random() * possibleChars.length());
		}
		
		return tempArr;
	}
	
}
