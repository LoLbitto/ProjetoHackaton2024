package hackaton.hackaton.pessoa;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "tbPessoa")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nome_Pessoa")
    private String nomePessoa;

    @Column(name = "dataNascimento_Pessoa")
    private LocalDate dataNascimentoPessoa;

    @Column(name = "cpf_Pessoa")
    private long cpf;

    @Column(name = "rendaFamiliarBruta_Pessoa")
    private BigDecimal rendaFamiliarBruta;

    @Column(name = "qtdDependentes_Pessoa")
    private int qtdDependentes;

    // Getters e Setters
    public long getCpf() {
        return cpf;
    }

    public void setCpf(long cpf) {
        this.cpf = cpf;
    }

    public BigDecimal getRendaFamiliarBruta() {
        return rendaFamiliarBruta;
    }

    public void setRendaFamiliarBruta(BigDecimal rendaFamiliarBruta) {
        this.rendaFamiliarBruta = rendaFamiliarBruta;
    }

    public int getQtdDependentes() {
        return qtdDependentes;
    }

    public void setQtdDependentes(int qtdDependentes) {
        this.qtdDependentes = qtdDependentes;
    }

    public LocalDate getDataNascimentoPessoa() {
        return dataNascimentoPessoa;
    }

    public void setDataNascimentoPessoa(LocalDate dataNascimentoPessoa) {
        this.dataNascimentoPessoa = dataNascimentoPessoa;
    }

    public String getNomePessoa() {
        return nomePessoa;
    }

    public void setNomePessoa(String nomePessoa) {
        this.nomePessoa = nomePessoa;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
