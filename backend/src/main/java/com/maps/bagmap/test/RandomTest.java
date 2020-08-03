package com.maps.bagmap.test;

import java.util.Random;

import io.grpc.netty.shaded.io.netty.util.internal.ThreadLocalRandom;

public class RandomTest {

	public static void main(String[] args) {
		
		
		ThreadLocalRandom.current().nextInt(100, 999);
		
		String code = String.valueOf(ThreadLocalRandom.current().nextInt(100, 999));
   
		
		System.out.println(code);

	}
}
