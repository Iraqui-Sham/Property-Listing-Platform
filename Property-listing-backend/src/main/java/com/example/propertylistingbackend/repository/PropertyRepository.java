package com.example.propertylistingbackend.repository;

import com.example.propertylistingbackend.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}
