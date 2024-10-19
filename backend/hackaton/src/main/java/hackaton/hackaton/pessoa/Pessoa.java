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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

    @Column(name = "nomePessoa")
    private String nome_Pessoa;

    @Column(name = "datanascimentoPessoa")
    private LocalDate dataNascimento_Pessoa;

    @Column(name = "cpfPessoa")
    private long cpf;

    @Column(name = "rendafamiliarbrutaPessoa")
    private BigDecimal rendaFamiliarBruta;

    @Column(name = "qtddependentesPessoa")
    private int qtdDependentes;

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

    public LocalDate getDataNascimento_Pessoa() {
        return dataNascimento_Pessoa;
    }

    public void setDataNascimento_Pessoa(LocalDate dataNascimento_Pessoa) {
        this.dataNascimento_Pessoa = dataNascimento_Pessoa;
    }

    public String getNome_Pessoa() {
        return nome_Pessoa;
    }

    public void setNome_Pessoa(String nome_Pessoa) {
        this.nome_Pessoa = nome_Pessoa;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
