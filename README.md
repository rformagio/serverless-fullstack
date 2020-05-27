# POC - Serverless + Angular8 + Nodejs + DynamoDB
## Case proposto para uma vaga de trabalho

Este trabalho foi realizado durante 10 dias de pesquisas sobre as tecnolgias:
- Nodejs;
- Angular 8
- Serverless
- DynamoDB

O case proposto foi construir a tela abaixo:

![Case](/docs/layout-onepage.png)


## Implementação

Para implementação foram utilizados:
- Node 10
- Angular 8
- Serverless 
- DynamoDB
- Chart.js (para criação do gráfico)

Foram criados dois projetos:
- partner: backend
- partner-ui: interface gráfica

### partner - backend

O backend foi construído utilizando DynamoDB para persistêcia dos dados.
Foram criados dois endpoints:

(POST) /partners

Responsável por criar um sócio.

Exemplo de json de entrada:
```json
{"firstName":"Sylvester", "lastName":"Stallone", "percentage":10}' 
```

(GET) /partners

Traz a lista de todos os sócios cadastrados

## Como executar

Para executar e verificar o funcionamento do projeto:

1. Clone o projeto do GITHUB
2. Executar o backend:
   1. Acesse o diretório: /serverless-fullstack/partner
   2. Digite o comando:  $ npm install
   3. Em seguida: $ sls offline start -r us-east-1 --noTimeout
3. Para executar o frontend:
   1. Acesse o diretório: /serverless-fullstack/partner-ui
   2. Digite o comando: $npm install
   3. Em seguida: $ ng serve
4. Para abrir página no browser executando o projeto local: http://localhost:4200

OBS: Após executar o backend é testá-lo sem o frontend, apenas usando linha de comando:

(POST) para inserir um sócio:


```bash
$ curl -X POST -d '{"firstName":"Rodrigo", "lastName":"Formagio", "percentage":101}' http://localhost:3000/partners
```

(GET) para listar os sócios:
```bash
curl -X GET http://localhost:3000/partners
```
## Testes
Devido ao tempo, forma implementados somente alguns testes bem simples no backend que verificam as entradas:
- nome vazio
- participação maior que 100%

Acesse o diretório: /serverless-fullstack/partner

```bash
$ npm run test
```

## Melhorias

Devido ao tempo e aprendizado em fase inicial, não foi possível fazer uso das melhores práticas, libs e implementações.
Algumas melhorias ainda se fazem ncessárias:
- Implementação e mellhorias de testes nos projetos;
- Melhorias no layout;
- Melhorias na apresentação do gráfico;
- Implementação de um mecanismo de deleção de sócios: adicionar uma coluna na tabela com a opção de "excluir sócio";
- Adicionar algum framework para documentação de API;
- Unificar a execução de ambos os projetos em um único comando do serverless.
