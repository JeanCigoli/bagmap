package com.maps.bagmap.test;

import com.maps.bagmap.utils.CryptoAES;

public class CryptoTest {

	
	public static void main(String[] args) {
		
		final String secretKey = "tccmaps";
		String originalString = "bagmap.com";
		
		System.out.println("Original String to encrypt - " + originalString);
		
		String encryptedString = CryptoAES.encrypt(originalString, secretKey);
		System.out.println("Encrypted String - " + encryptedString);
		
		String decryptedString = CryptoAES.decrypt(encryptedString, secretKey);
		System.out.println("After decryption - " + decryptedString);
		
	}

}
