# NicolaSec — Landing Page

Landing page institucional da **NicolaSec**, consultoria de Segurança da Informação com foco em gestão de identidades e acessos, proteção de acessos privilegiados, governança, riscos e conformidade. O site apresenta as soluções e os serviços da empresa, suas tecnologias e relacionamentos, além de oferecer canais de contato para potenciais clientes.

## Conteúdo da página

- **Soluções:** IAM (gestão de identidades e acessos), PAM (gestão de acessos privilegiados) e GRC (governança, riscos e conformidade).
- **Serviços:** consultoria, implementação, atualizações, treinamento e capacitação, sustentação, desenvolvimento e integrações por API.
- **Tecnologias e relacionamentos:** plataformas apresentadas pela NicolaSec e marcas exibidas na página.
- **Sobre a empresa e contato:** apresentação institucional, dados de contato e formulário de solicitação.

O formulário de contato usa um link `mailto:`: ao enviá-lo, o navegador abre o aplicativo de e-mail do visitante com uma mensagem preenchida para `contato@nicolasec.com.br`. O envio depende da confirmação no aplicativo de e-mail; não há serviço de envio implementado no projeto.

## Tecnologias

- React 19 e Vite 8
- Tailwind CSS 4 e CSS
- Lucide React e React Icons
- Oxlint para análise estática

## Como executar localmente

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite no terminal (normalmente `http://localhost:5173`).

Comandos disponíveis:

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Visualiza localmente a versão gerada. |
| `npm run lint` | Executa o Oxlint. |

## Estrutura do projeto

```text
public/                 Arquivos públicos, incluindo o favicon
src/
  assets/               Imagens, logotipos e ilustrações
  components/
    layout/              Cabeçalho e rodapé
    sections/            Seções da landing page
    illustrations/       Ilustração de identidade
    ui/                  Componente visual reutilizável
  App.jsx                Composição da página
  index.css              Estilos globais
  App.css                Estilos da aplicação
index.html               Entrada HTML
vite.config.js           Configuração do Vite
```

## Fontes e referências

As informações institucionais usadas como base para o desenvolvimento vieram do [site anterior da NicolaSec](https://www.nicolasec.com.br/). O [site da Wiz](https://www.wiz.io/pt-br) foi usado como referência visual.

Perfis da NicolaSec:

- [LinkedIn](https://www.linkedin.com/company/nicolasec/posts/)
- [Instagram](https://www.instagram.com/nicola.sec/)

## Desenvolvido por
- Felipe Souza Moreira