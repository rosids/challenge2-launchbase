<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-desafio-2-1">Desafio 2-1</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-desafio-2-2">Desafio 2-2</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-desafio-2-3">Desafio 2-3</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</h3>

## :information_source: Sobre

Desafios do Módulo 2 do bootcamp LaunchBase.

## :link: Desafio 2-1

Criar um arquivo html que contenha um favicon e um header com 3 links: Comunidade, Email e Telefone.

- `Comunidade`: Link que deve apontar para o convite da comunidade aberta da rocketseat `(https://discordapp.com/invite/gCRAFhc)`

- `Email`: Link que deve chamar o comando de enviar email para o destinatário `oi@rocketseat.com.br`. Dica: utilize o comando `mailto` dentro do `href`;

- `Telefone`: Link que deve chamar o comando de realizar uma ligação para o número `+5547992078767`. Dica: utilize o comando `tel` dentro do `href`;

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
- Deve ser aplicado um background
- Deve ser utilizada a fonte Roboto
- O header precisa ocupar todo o espaço lateral e superior (body sem margin)
- O header precisa ter um espaçamento interno de 30px em todas as direções
Os links devem ter um espaçamento de 30px entre si

## :link: Desafio 2-2

A partir do arquivo do desafio 2-1, adicionar um novo link no header chamado Sobre. Essa página deverá mostrar informações referentes a Rocketseat.

- Informações da página
- Uma imagem da logo da empresa
- O nome da empresa
- Uma breve descrição da empresa
- Uma lista com as principais tecnologias utilizadas. Dica: utilize a tag ul para lista e li para o item da lista.
- Links para as redes sociais da empresa (Github, Instagram e Facebook)

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- A imagem deve ter uma borda e um formato circular.
- Deve ser utilizada a fonte Roboto
- O nome da empresa e a imagem devem ser destacar do restante
- Os links das redes sociais devem ter alguma alteração visual quando o cursor do mouse passar por cima

## :link: Desafio 2-3

A partir do arquivo do desafio 2.2, adicionar no header um link chamado Conteúdos. Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.

### Informações da página
- Título da página
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos

## Informações do card
- Logo do curso (Starter, Launchbase e GoStack)
- Título do curso
- Quantidade de módulos dos cursos
Informação se o curso é gratuito ou pago

## Modal
- O modal deve conter um iframe que busca a página do curso (dica: basta adicionar starter, launchbase ou gostack ao final de https://rocketseat.com.br/). Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o modalOverlay, mas trabalhe com a classe modal e utilize o método contains do classList para verificar se o elemento está ou não com a classe maximize).

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
- Deve ser utilizado o grid para organizar os cursos
- O modal nunca deve abrir maximizado

## :interrobang: Motivo

Praticar os assuntos abordados no bootcamp.

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- HTML
- CSS
- JavaScript

## :link: Como contribuir

- Faça um Fork do repositório
- Clone o seu repositório
- Crie uma branch com a sua feature
- Faça um commit com suas mudanças
- 'Push' a sua branch
- Ir em Pull Requests do projeto original e criar uma pull request com o seu commit

## :memo: Licença

Esse projeto foi desenvolvido como prática e está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
