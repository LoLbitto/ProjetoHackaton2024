package hackaton.hackaton.pessoa;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.sun.source.tree.LabeledStatementTree;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "tbPessoa")
public class Pessoa {

    @Column(name = "nome_Pessoa")
    private String nomePessoa;

    @Column(name = "dataNascimento_Pessoa")
    private LocalDate dataNascimentoPessoa;

    @Id
    @Column(name = "cpf_Pessoa")
    private Long cpf;

    @Column(name = "rendaFamiliarBruta_Pessoa")
    private BigDecimal rendaFamiliarBruta;

    @Column(name = "qtdDependentes_Pessoa")
    private int qtdDependentes;

    @Column(name = "senha_Pessoa")
    private String senha;

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
}
