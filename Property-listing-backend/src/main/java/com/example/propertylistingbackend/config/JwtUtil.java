package com.example.propertylistingbackend.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.expiration}")
    private Long expiration;

    // Generate a secure 512-bit key (static, initialized once)
    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS512);

    public String generateToken(String email) {
        System.out.println("Generating token for email: " + email);
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SECRET_KEY) // Use the secure key
                .compact();
    }

    public String getEmailFromToken(String token) {
        System.out.println("Extracting email from token");
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY) // Use the secure key
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    public boolean validateToken(String token) {
        System.out.println("Validating token");
        try {
            Jwts.parser()
                .setSigningKey(SECRET_KEY) // Use the secure key
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            System.out.println("Token validation failed: " + e.getMessage());
            return false;
        }
    }
}