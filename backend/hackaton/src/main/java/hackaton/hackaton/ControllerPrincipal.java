package hackaton.hackaton;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import hackaton.hackaton.pessoa.Pessoa;
import hackaton.hackaton.pessoa.PessoaRepository;

@RestController
@RequestMapping(path = "/api")
public class ControllerPrincipal {

    @Autowired
    private PessoaRepository pessoaR;

    @GetMapping("/")
    public String testeApi() {
        return "API funcionando";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/cadastro")
    public ResponseEntity<Pessoa> addNewUser(@RequestBody Pessoa pessoa) {
        pessoaR.save(pessoa);
        return ResponseEntity.ok(pessoa);
    }

    @PostMapping(path = "/path")
    public @ResponseBody
    Iterable<Pessoa> getAllUsers() {
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
            pessoa.setNomePessoa(novaPessoa.getNomePessoa());
            pessoa.setCpf(novaPessoa.getCpf());
            pessoa.setDataNascimentoPessoa(novaPessoa.getDataNascimentoPessoa());
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