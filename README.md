# Intelipost: Teste prático para Frontend Javascript Developer

Este é o teste usado por nós aqui da [Intelipost](http://www.intelipost.com.br) para avaliar tecnicamente os candidatos a nossas vagas de Frontend. Se você estiver participando de um processo seletivo para nossa equipe, certamente em algum momento receberá este link, mas caso você tenha chego aqui "por acaso", sinta-se convidado a desenvolver nosso teste e enviar uma mensagem para nós no e-mail `lucas.teixeira@intelipost.com.br`.

## Instruções

Você deverá criar um `fork` deste projeto, e desenvolver em cima do seu fork. Use o *README* principal do seu repositório para nos contar como foi resolver seu teste, as decisões tomadas, como você organizou e separou seu código, e principalmente as instruções de como rodar seu projeto, afinal a primeira pessoa que irá rodar seu projeto será um programador backend de nossa equipe, e se você conseguir explicar para ele como fazer isso, você já começou bem!

Lembre-se que este é um teste técnico e não um concurso público, portanto, não existe apenas uma resposta correta. Mostre que você é bom e nos impressione, mas não esqueça do objetivo do projeto. 

Nós não definimos um tempo limite para resolução deste teste, o que vale para nós e o resultado final e a evolução da criação do projeto até se atingir este resultado, mas acreditamos que este desafio pode ser resolvido em cerca de 16 horas de codificação.

## O desafio

Você irá construir a nossa próxima aplicação de busca de bandas e artistas usando as [APIs do Youtube](https://developers.google.com/youtube/v3/getting-started) e [TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/). É uma aplicação simples, onde iremos buscar por um determinado artista ou banda para termos acesso aos vídeos do Youtube retornados pela busca e também os dados desta banda requisitados através da API do Ticketmaster.

Nossa ideia de interface, é uma tela com apenas um campo de busca no centro da tela, que ao ser acionado com o nome da banda, irá submeter esta pesquisa para a API do Youtube, retornando uma listagem com alguns vídeos desta banda. Com o submit do formulário, o campo deve se posicionar no topo da tela, para que o espaço todo do miolo da página seja melhor aproveitado.

Para cada um dos vídeos, gostaríamos de ver pelo menos os dados básicos, como titulo, descrição e thumbnail (obviamentem quanto mais informações você mostrar melhor, como rating, usuário que enviou, etc). Quando clicarmos no vídeo, queremos reproduzir o vídeo (embedado ali, em um modal, ou até em um simples link, faça como quiser).

Além da listagem de vídeos, também gostaríamos de mostrar algumas informações sobre a banda, como os dados de contato em redes sociais, imagens, e o que mais você conseguir extarir da API do TicketMaster. Uma dica é utilizar o recurso de `Attraction Search` da `Discovery API` do TicketMaster para retornar estas informações.

Você pode gerar suas próprias API Keys para consumir as APIs, mas se quiser usar as nossas, seguem abaixo:

* Youtube: `AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc`
* TicketMaster: `q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG`

### O que nós esperamos do seu teste

* Ver na solução a utilização do framework Angular, que é o fwk utilizado por aqui. Utilize o angular da melhor forma possível (metodologia/estrutura). Escolha a versão do ecmascript que lhe agrade
* Tambér ver a utilização de dependency managers (npm, webpack, bower)
* Automação de tasks com gulp, grunt ou outra ferramenta de sua escolha
* Um HTML escrito da maneira mais semântica possível (HTML5/5.1)
* CSS3/4 - Com um pre processador de CSS (a escolha fica a seu critério, mas por aqui utilizamos LESS)
* Mobile first e layout responsivo

### O que nós ficaríamos felizes de ver em seu teste

* Testes unitários
* Alguma metodologia para definição e organização do seu código CSS

### O que nos impressionaria

* Testes de aceitação
* [BEM naming convention](http://getbem.com/naming/)
* Aplicação de animações em css quando possível e tome cuidado com a performance da sua animação :)
* Ver o código rodando live (Bucket estático S3, Heroku, Firebase Hosting)

### O que nós não gostaríamos

* Descobrir que não foi você quem fez seu teste
* Ver commits grandes, sem muita explicação nas mensagens em seu repositório 
* Encontrar um um commit com as dependências de NPM e do Bower

## O que avaliaremos de seu teste

* Histórico de commits do git
* As instruções de como rodar o projeto
* Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
* Alcance dos objetivos propostos
* Adaptação mobile (layout responsivo)
* Componentização e extensibilidade dos componentes Javascript
