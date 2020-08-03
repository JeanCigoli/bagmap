package com.maps.bagmap.service.emails;

import java.io.IOException;
import java.util.Collections;

import javax.annotation.PostConstruct;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.maps.bagmap.model.emails.Response;
import com.maps.bagmap.service.exceptions.EmailNotFoundException;

@Service
public class SendEmail {

	private static final String HOST_FRONT = "http://localhost:3000/";

	private static final String URL = "http://54.237.68.153/";

	private String token = null;

	@PostConstruct
	public void init() throws IOException {

		if (token == null) {
			RestTemplate restTemplate = new RestTemplate();

			HttpHeaders headers = getHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);

			JsonObject json = new JsonObject();
			json.addProperty("email", "bagmapstartup@gmail.com");
			json.addProperty("password", "bagmap123");

			HttpEntity<String> request = new HttpEntity<>(json.toString(), headers);

			ResponseEntity<Response> response = restTemplate.exchange(URL + "authenticate", HttpMethod.POST, request,
					Response.class);

			if (response.getStatusCode() == HttpStatus.OK) {
				token = response.getBody().getPayload().getToken();
			} else {
				throw new EmailNotFoundException("Não foi possível fazer a autenticação no e-mail");
			}

		}

	}

	private HttpHeaders getHeaders() {

		HttpHeaders headers = new HttpHeaders();

		headers.add("user-agent",
				"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0");
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		if (token != null) {
			headers.add("Authorization", "Bearer " + token);
		}

		return headers;

	}

	public boolean emailsSendValidateEmail(String email, String name, String encrypt) throws Exception {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = getHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);

		JsonObject jsonVariables = new JsonObject();
		jsonVariables.addProperty("name", name);
		jsonVariables.addProperty("link", HOST_FRONT + "validated?r=" + encrypt);

		JsonObject json = new JsonObject();
		json.addProperty("email", email);
		json.add("variables", jsonVariables);

		JsonArray array = new JsonArray();
		array.add(json);

		MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
		body.add("to", array.toString());
		body.add("from", "BagMap <bagmapstartup@gmail.com>");
		body.add("name", "validEmail");
		body.add("subject", "Validação de e-mail - BagMap");
		body.add("queue", "register");
		body.add("template_queue", "register");
		body.add("limit", "0");
		body.add("delay_minutes", "0");
		body.add("delay_init", "0");
		body.add("priority", "3");
		body.add("email_report", "bagmapstartup@gmail.com");

		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

		ResponseEntity<String> response = restTemplate.postForEntity(URL + "send", requestEntity, String.class);

		if (response.getStatusCode() == HttpStatus.ACCEPTED) {
			return true;
		} else {
			return false;
		}

	}

	public boolean emailsWelcome(String email, String name) throws Exception {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = getHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);

		JsonObject jsonVariables = new JsonObject();
		jsonVariables.addProperty("name", name);
		jsonVariables.addProperty("link", HOST_FRONT);

		JsonObject json = new JsonObject();
		json.addProperty("email", email);
		json.add("variables", jsonVariables);

		JsonArray array = new JsonArray();
		array.add(json);

		MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
		body.add("to", array.toString());
		body.add("from", "BagMap <bagmapstartup@gmail.com>");
		body.add("name", "welcome");
		body.add("subject", "Seja bem vindo - BagMap");
		body.add("queue", "public");
		body.add("template_queue", "public");
		body.add("limit", "0");
		body.add("delay_minutes", "0");
		body.add("delay_init", "0");
		body.add("priority", "3");
		body.add("email_report", "bagmapstartup@gmail.com");

		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

		ResponseEntity<String> response = restTemplate.postForEntity(URL + "send", requestEntity, String.class);

		if (response.getStatusCode() == HttpStatus.ACCEPTED) {
			return true;
		} else {
			return false;
		}

	}
	
	public boolean emailsSendValidateCode(String email, String name, String code) throws Exception {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = getHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);

		JsonObject jsonVariables = new JsonObject();
		jsonVariables.addProperty("name", name);
		jsonVariables.addProperty("link", HOST_FRONT);
		jsonVariables.addProperty("code", code);

		JsonObject json = new JsonObject();
		json.addProperty("email", email);
		json.add("variables", jsonVariables);

		JsonArray array = new JsonArray();
		array.add(json);

		MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
		body.add("to", array.toString());
		body.add("from", "BagMap <bagmapstartup@gmail.com>");
		body.add("name", "validCode");
		body.add("subject", "Validação de código - BagMap");
		body.add("queue", "register");
		body.add("template_queue", "register");
		body.add("limit", "0");
		body.add("delay_minutes", "0");
		body.add("delay_init", "0");
		body.add("priority", "3");
		body.add("email_report", "bagmapstartup@gmail.com");

		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

		ResponseEntity<String> response = restTemplate.postForEntity(URL + "send", requestEntity, String.class);

		if (response.getStatusCode() == HttpStatus.ACCEPTED) {
			return true;
		} else {
			return false;
		}

	}

}
