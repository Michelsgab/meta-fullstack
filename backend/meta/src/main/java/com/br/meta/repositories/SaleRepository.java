package com.br.meta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.meta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
