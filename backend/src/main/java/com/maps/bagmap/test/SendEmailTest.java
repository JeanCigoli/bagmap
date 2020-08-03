package com.maps.bagmap.test;

import com.maps.bagmap.service.emails.SendEmail;

public class SendEmailTest {
	
	public static void main(String[] args) {
		
		SendEmail email = new SendEmail();
		
		try {
			email.init();
			
			boolean status = email.emailsSendValidateEmail("jeancigoli30@gmail.com", "JeanCigoli", "knbvpkvnprgpeorepgrjpegjk");
			
			System.out.println(status);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}


}
