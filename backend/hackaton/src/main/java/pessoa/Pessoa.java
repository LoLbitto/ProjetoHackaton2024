package pessoa;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Pessoa {

	@Column(name = "nome_Pessoa")
	private String Nome;

	@Column(name = "dataNascimento_Pessoa")
	private LocalDate dataNascimento;

	@Id
	@Column(name = "cpf_Pessoa")
	private long cpf;

	@Column(name = "rg_Pessoa")
	private long rg;

	@Column(name = "rendaFamiliarBruta_Pessoa")
	private BigDecimal rendaFamiliarBruta;

	@Column(name = "qtdDependentes_Pessoa")
	private int qtdDependentes;

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public long getCpf() {
		return cpf;
	}

	public void setCpf(long cpf) {
		this.cpf = cpf;
	}

	public long getRg() {
		return rg;
	}

	public void setRg(long rg) {
		this.rg = rg;
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

}
