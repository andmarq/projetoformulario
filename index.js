
let btnSubmit = document.querySelector('.input7').value;
let formulario = document.querySelector('.form')

class ValidaForm {

    constructor (nome, sobrenome, cpf, usuario, senha, confirSenha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.usuario = usuario;
        this.senha = senha;
        this.confirmSenha = confirSenha;
    }

    verificaCampo (campo) {
         
        if(campo.length === 0) {
            return 'O campo está vázio'
        } else {
          return '';
        }
    }

     geraCpf(value, indice, finalValue) {
        const valor1 = Array.from(value.slice(0, finalValue)).map((valor) => {
          const result = Number(valor) * indice;
          indice--;
          return result;
        });
      
        const soma = valor1.reduce((acc, curr) => acc + curr, 0);
        const digito1 = 11 - (soma % 11);
        console.log(digito1)
        return digito1 >= 10 ? 0 : digito1;
      }
      
     confirmaCpf (cpf) {
        let value1 = this.geraCpf(cpf, 10, -2);
        let value2 = this.geraCpf(cpf, 11, -1);
        
        let confirmCPF = Number(cpf.slice(0, -2));
        confirmCPF = confirmCPF + value1.toString() + value2.toString();
        
        if (Number(confirmCPF) === Number(cpf)) {
          return 'CPF válido';
        } else {
          return 'CPF inválido';
        }
      }

    validaCpf () {
      let myCpf = this.cpf.replace(/\s+/g, ' ');
      if(myCpf.length < 11) return 'CPF inválido';
      if(myCpf.length === '') return 'Campo Vázio';
      return this.confirmaCpf(myCpf);
    }

    validaSenha () {
        if(this.senha !== this.confirmSenha) {
            return 'Senhas não conferem!'
        } else {
            return 'Senhas conferem!'
        }
    }

    verificaSenha() {
        if(this.senha.length < 6 || this.senha.length > 12) {
            return 'Senha inválida!'
        } else {
          return 'Senha válida'
        }
    }
    
    isValidInput(input) {
        const pattern = /^[a-zA-Z0-9]+$/;
        return pattern.test(input);
      }
      
    validaUser ()  {
      if (this.isValidInput(this.usuario)) {
        return " ";
      } else {
        return "Entrada inválida";
      }
    }
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

let nome = document.querySelector('.input1').value;
let sobrenome = document.querySelector('.input2').value;
let cpf = document.querySelector('.input3').value;
let usuario = document.querySelector('.input4').value;
let senha = document.querySelector('.input5').value;
let confirmSenha = document.querySelector('.input6').value;
let inputs = document.querySelectorAll('.formInput')
// let paragrafo = document.createElement('p');    
const User = new ValidaForm(nome, sobrenome, cpf, usuario, senha, confirmSenha)
    
inputs.forEach((input) => {
    const mensagem = User.verificaCampo(input.value);
    if (mensagem) {
        const paragrafo = document.createElement('p');
        paragrafo.style.fontSize = '5px';
        paragrafo.style.position = 'absolute';
        paragrafo.style.left = '10px';
        paragrafo.style.padding = '0';
        paragrafo.style.margin = '0';
        paragrafo.style.color = 'red'
        

        paragrafo.textContent = mensagem;
        input.insertAdjacentElement('afterend', paragrafo);
    }
});


const mensagem2 = User.validaUser();
if(mensagem2) {
  let paragrafo2 = document.createElement('div');
  paragrafo2.innerText = mensagem2;
  paragrafo2.style.fontSize = '5px';
  paragrafo2.style.position = 'absolute';
  paragrafo2.style.left = '70px';
  paragrafo2.style.padding = '0';
  paragrafo2.style.margin = '0';
  paragrafo2.style.color = 'red'
  document.querySelector('.input4').insertAdjacentElement('afterend', paragrafo2);
}

  const mensagem3 = User.validaCpf();
  let paragrafo3 = document.createElement('div');
  paragrafo3.innerText = mensagem3;
  paragrafo3.style.fontSize = '5px';
  paragrafo3.style.position = 'absolute';
  paragrafo3.style.left = '70px';
  paragrafo3.style.padding = '0';
  paragrafo3.style.margin = '0';
  paragrafo3.style.color = 'red';
  document.querySelector('.input3').insertAdjacentElement('afterend', paragrafo3);
 
  const mensagem4 = User.verificaSenha();
  let paragrafo4 = document.createElement('p');
  paragrafo4.innerText = mensagem4;
  paragrafo4.style.fontSize = '5px';
  paragrafo4.style.position = 'absolute';
  paragrafo4.style.left = '70px';
  paragrafo4.style.padding = '0';
  paragrafo4.style.margin = '0';
  paragrafo4.style.color = 'red';
  document.querySelector('.input5').insertAdjacentElement('afterend', paragrafo4);

  const mensagem41 = User.validaSenha();
  let paragrafo41 = document.createElement('p');
  paragrafo41.innerText = mensagem41;
  paragrafo41.style.fontSize = '5px';
  paragrafo41.style.position = 'absolute';
  paragrafo41.style.left = '120px';
  paragrafo41.style.padding = '0';
  paragrafo41.style.margin = '0';
  paragrafo41.style.color = 'red';
  document.querySelector('.input5').insertAdjacentElement('afterend', paragrafo41);
 
  const mensagem5 = User.verificaSenha();
  let paragrafo5 = document.createElement('p');
  paragrafo5.innerText = mensagem5;
  paragrafo5.style.fontSize = '5px';
  paragrafo5.style.position = 'absolute';
  paragrafo5.style.left = '70px';
  paragrafo5.style.padding = '0';
  paragrafo5.style.margin = '0';
  paragrafo5.style.color = 'red';
  document.querySelector('.input6').insertAdjacentElement('afterend', paragrafo5);
   
  const mensagem51 = User.validaSenha();
  let paragrafo51 = document.createElement('p');
  paragrafo51.innerText = mensagem51;
  paragrafo51.style.fontSize = '5px';
  paragrafo51.style.position = 'absolute';
  paragrafo51.style.left = '120px';
  paragrafo51.style.padding = '0';
  paragrafo51.style.margin = '0';
  paragrafo51.style.color = 'red';
  document.querySelector('.input6').insertAdjacentElement('afterend', paragrafo51);
      
  

   
})