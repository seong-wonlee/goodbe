package com.goodbe.auth.oauth2.exception;

public class OAuth2NotFoundException extends RuntimeException {
    public OAuth2NotFoundException(String message) {
        super(message);
    }
}