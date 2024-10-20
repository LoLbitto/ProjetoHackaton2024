package hackaton.hackaton.pessoa;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "tbPessoa")
public class Pessoa {

    @Column(name = "nome_Pessoa")
    private String nomePessoa;

<<<<<<< HEAD:backend/hackaton/src/main/java/hackaton.hackaton/pessoa/Pessoa.java
    @Column(name = "nome_Pessoa")
    private String nome_Pessoa;

    @Column(name = "dataNascimento_Pessoa")
    private LocalDate dataNascimento_Pessoa;

    @Column(name = "cpf_Pessoa")
    private long cpf;

=======
    @Column(name = "dataNascimento_Pessoa")
    private LocalDate dataNascimentoPessoa;

    @Id
    @Column(name = "cpf_Pessoa")
    private Long cpf;

>>>>>>> 66066358a03961c086418c889995625af89abb57:backend/hackaton/src/main/java/hackaton/hackaton/pessoa/Pessoa.java
    @Column(name = "rendaFamiliarBruta_Pessoa")
    private BigDecimal rendaFamiliarBruta;

    @Column(name = "qtdDependentes_Pessoa")
    private int qtdDependentes;

    @Column(name = "senha_Pessoa")
    private String senha;

    @Column(name="creditos_Pessoa")
    private double creditos;

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

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public double getCreditos() {
        return creditos;
    }

    public void setCreditos(double creditos) {
        this.creditos = creditos;
    }
}
