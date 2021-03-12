package br.unicesumar.esoft7s2021.back.editora;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Editora {

    @Getter
    @Id
    private String id;
    @Getter @Setter
    private String nome;
    @Getter @Setter
    private Date fundadaEm;
    @Getter @Setter
    private BigDecimal faturamentoMedio;

    public Editora() {
        this.id = UUID.randomUUID().toString();
    }

    public Editora(String nome, Date fundadaEm, BigDecimal faturamentoMedio) {
        this();
        this.nome = nome;
        this.fundadaEm = fundadaEm;
        this.faturamentoMedio = faturamentoMedio;
    }
}
