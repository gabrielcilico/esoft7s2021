package br.unicesumar.esoft7s2021.back.produto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Produto {

    @Getter @Id private String id;
    @Getter @Setter private String nome;
    @Getter @Setter private String descricao;
    @Getter @Setter private Date lancadoEm;
    @Getter @Setter private BigDecimal precoUnitario;


}
