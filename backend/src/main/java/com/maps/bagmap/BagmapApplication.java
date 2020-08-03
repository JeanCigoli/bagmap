package com.maps.bagmap;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;


@SpringBootApplication
@EnableCaching
public class BagmapApplication {

	public static void main(String[] args) {
		SpringApplication.run(BagmapApplication.class, args);
		
	}

}
