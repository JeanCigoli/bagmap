package com.maps.bagmap.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ResponseService {

	public static ResponseEntity<Map<Object, Object>> apiResponse (
			HttpStatus httpStatus, boolean status, String message, Object payload, Object errors){
		
		Map<Object, Object> jsonReponse = new HashMap<>();
		
		jsonReponse.put("success", status);
		jsonReponse.put("message", message);
		jsonReponse.put("payload", payload == null ? new String[] {} : payload);
		jsonReponse.put("errors", errors == null ? new String[] {} : errors);
		
		return ResponseEntity.status(httpStatus).body(jsonReponse);
		
		
	}
	
}
