package com.goodbe.business.web.repository;

import com.goodbe.business.domain.training.Edu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface TrainingRepository extends JpaRepository<Edu,Long> {
    @Query(value = "SELECT * FROM training order by RAND() limit 3",nativeQuery = true)
    List<Edu> findByRand();
}
