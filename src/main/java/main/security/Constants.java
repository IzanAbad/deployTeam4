package main.security;

public class Constants {

	// Spring Security

	public static final String LOGIN_URL = "/login";
	public static final String SEARCH_URL1 = "/api/poblaciones/nombre/{nombre}";
	public static final String SEARCH_URL2 = "/api/poblaciones/{nombre}/hoteles";
	public static final String SEARCH_URL3 = "/api/hoteles/{id_hotel}";
	public static final String HEADER_AUTHORIZACION_KEY = "Authorization";
	public static final String TOKEN_BEARER_PREFIX = "Bearer ";

	// JWT

	public static final String ISSUER_INFO = "frank";
	public static final String SUPER_SECRET_KEY = "1234";
	public static final long TOKEN_EXPIRATION_TIME = 864_000_000; // 10 day

}