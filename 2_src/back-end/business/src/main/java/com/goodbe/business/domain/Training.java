package com.goodbe.business.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class Training {
    @Id
    @Column(name="training_id")
    private Long id;

    private String name;

}
