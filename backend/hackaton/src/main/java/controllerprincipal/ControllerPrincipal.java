package controllerprincipal;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import pessoa.Pessoa;
import pessoa.PessoaRepository;

@RestController
@RequestMapping(path = "/path/endpoint")
public class ControllerPrincipal {
	
	@Autowired
	private PessoaRepository pessoaR;
	
	@PostMapping(path = "/post")
	public @ResponseBody String addNewUser(@RequestParam String nome, @RequestParam LocalDate dataNascimento, 
			@RequestParam Long rg, @RequestParam Long cpf, @RequestParam BigDecimal rendaBruta,
			@RequestParam int qtdDependentes) {
		
		Pessoa p = new Pessoa();
		p.setCpf(cpf);
		p.setDataNascimento(dataNascimento);
		p.setNome(nome);
		p.setRg(rg);
		p.setQtdDependentes(qtdDependentes);
		p.setRendaFamiliarBruta(rendaBruta);
		
		pessoaR.save(p);
		
		return "Salvo";
	}
	
	 @PostMapping(path="/path")
	  public @ResponseBody Iterable<Pessoa> getAllUsers() {
	    return pessoaR.findAll();
	  }
	 
	 @GetMapping("/path/{cpf}")
	 public ResponseEntity<Pessoa> one(@PathVariable Long cpf) {
	     return pessoaR.findById(cpf).map(pessoa -> ResponseEntity.ok().body(pessoa))
	    		 .orElse(ResponseEntity.notFound().build());
	 }


	  @PutMapping("/path/{cpf}")
	  Pessoa replaceEmployee(@RequestBody Pessoa novaPessoa, @PathVariable Long cpf) {
	    
	    return pessoaR.findById(cpf).map(pessoa -> {
	        pessoa.setNome(novaPessoa.getNome());
	        pessoa.setCpf(novaPessoa.getCpf());
	        pessoa.setRg(novaPessoa.getRg());
	        pessoa.setDataNascimento(novaPessoa.getDataNascimento());
	        pessoa.setRendaFamiliarBruta(novaPessoa.getRendaFamiliarBruta());
	        pessoa.setQtdDependentes(novaPessoa.getQtdDependentes());
	        
	        return pessoaR.save(pessoa);
	      }).orElseGet(() -> {
	        return pessoaR.save(novaPessoa);
	      });
	  }
	  
	  @DeleteMapping("/path/{cpf}")
	  void deleteEmployee(@PathVariable Long cpf) {
	    pessoaR.deleteById(cpf);
	  }
	  
	
}
