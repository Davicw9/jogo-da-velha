# 🎮 Jogo da Velha

Um jogo da velha interativo desenvolvido com HTML, CSS e JavaScript. Suporte para dois jogadores (Player vs Player) com interface responsiva e moderna.

## ✨ Funcionalidades

- **Dois Modos de Jogo**
  - 👥 Player vs Player: Jogue contra um amigo
  - 🤖 Player vs Computador: Jogue contra o computador (em desenvolvimento)

- **Interface Responsiva**
  - 📱 Totalmente responsivo para celulares, tablets e desktops
  - 🎨 Design moderno com gradientes e animações suaves
  - ♿ Acessibilidade otimizada

- **Experiência do Usuário**
  - 👁️ Visualização em tempo real de quem é a vez
  - 🏆 Modal de vitória com visualização do tabuleiro
  - 🔄 Reiniciar jogo com um clique
  - 📍 Favicon customizado

- **Detecção de Vitória**
  - ✅ Verifica automaticamente linhas, colunas e diagonais
  - 🤝 Detecta empates
  - 🎯 Mensagem de vitória personalizada com nome do jogador

## 🛠️ Tecnologias Utilizadas

- **Frontend**
  - HTML5
  - CSS3 (Flexbox, Grid, Clamp, Animations)
  - JavaScript ES6+

- **Fonte**
  - Google Fonts - Poppins

## 📂 Estrutura do Projeto

```
Jogo Da velha/
├── index.html              # Arquivo principal HTML
├── README.md              # Este arquivo
├── CSS/
│   └── style.css          # Estilos globais
├── JS/
│   ├── index.js           # Lógica principal do jogo
│   └── jogadores.js       # Classe Jogador
└── src/
    └── imgs/
        └── jogo-da-velha.png  # Favicon do projeto
```

## 🚀 Como Usar

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/Jogo-Da-velha.git
cd Jogo-Da-velha
```

### 2. Executar o Projeto
Abra o arquivo `index.html` no navegador ou use um servidor local:


### 3. Jogar
1. Selecione o modo de jogo (Player vs Player)
2. Digite os nomes dos jogadores
3. Clique em "Iniciar jogo"
4. Jogador X começa. Clique nos quadrados para fazer sua jogada
5. Ao final, clique em "Restart" para jogar novamente

## 🎯 Regras

- O jogo segue as regras clássicas da Velha
- Objetivo: Alinhar 3 símbolos iguais (horizontal, vertical ou diagonal)
- Cada jogador alterna entre turnos
- Ganha quem conseguir 3 em linha primeiro
- Se todos os espaços forem preenchidos sem vencedor, é empate

## 📱 Responsividade

O projeto utiliza técnicas modernas de CSS para responsividade **sem usar @media queries**:
- `clamp()` para tamanhos fluidos de fontes
- `min()` e `max()` para dimensões adaptativas
- `vw` (viewport width) para escalabilidade
- Flexbox e Grid para layouts flexíveis

## 🎨 Cores Utilizadas

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Teal | #03A696 | Fundo principal |
| Azul Escuro | #253659 | Botões e bordas |
| Branco | #ffffff | Texto e backgrounds |
| Preto | #000000 | Alternativa |

## 📝 Classes e Funções Principais

### Classe `Jogador`
```javascript
class Jogador {
    constructor(name, simbolo, jogada)
    // name: string - Nome do jogador
    // simbolo: string - 'X' ou 'O'
    // jogada: boolean - Indica se é a vez do jogador
}
```

### Funções Principais
- `selecionarModo(modo)` - Seleciona o modo de jogo
- `iniciarJogo()` - Inicia uma nova partida
- `seleciona(event, numeroDiv)` - Processa a jogada do jogador
- `mostrarVezJogador()` - Exibe de quem é a vez
- `reiniciarJogo()` - Reinicia o jogo

## 🔮 Melhorias Futuras

- [ ] Implementar IA para o modo "Player vs Computador"
- [ ] Placar acumulativo entre partidas
- [ ] Som e efeitos visuais
- [ ] Histórico de partidas
- [ ] Diferentes níveis de dificuldade da IA

**Desenvolvido usando HTML, CSS e JavaScript**

Divirta-se jogando! 🎮✨
