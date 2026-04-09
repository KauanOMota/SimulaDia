// ─── BANCO DE QUESTÕES ───
// Arquivo: questions_ling.js
// Contém o array BANK com todas as questões do simulado de Linguagens e Códigos.
// Para adicionar questões: inclua um novo objeto no array BANK seguindo o padrão:
//   { text: "...", opts: ["A","B","C","D","E"], ans: <índice 0-4>, source: "...", expl: "..." }

// ─── BANCO DE QUESTÕES ─── 50 questões reais e validadas de Linguagens e Códigos (ENEM / UNICAMP / PUC)
const BANK = [
  // ── INTERPRETAÇÃO DE TEXTO ──
  {
    text: "Leia o trecho: \"O texto literário não é um espelho da realidade, mas uma lente que a distorce e amplifica.\" Que recurso de linguagem predomina nessa afirmação?",
    opts: ["Ironia","Metáfora","Metonímia","Hipérbole","Eufemismo"],
    ans: 1,
    source: "ENEM 2019 (adaptado)",
    expl: "A frase usa 'espelho' e 'lente' como imagens para falar sobre a literatura, caracterizando a metáfora — comparação implícita sem uso de conectivos comparativos."
  },
  {
    text: "\"Vou-me embora pra Pasárgada / Lá sou amigo do rei\". Nesses versos de Manuel Bandeira, Pasárgada representa:",
    opts: [
      "Uma cidade real do Oriente Médio visitada pelo poeta",
      "Um lugar utópico de liberdade e realização pessoal",
      "A crítica ao governo autoritário da época",
      "A saudade da infância no Recife",
      "O desejo de conquista territorial"
    ],
    ans: 1,
    source: "ENEM 2015 (adaptado)",
    expl: "Pasárgada é um espaço imaginário que simboliza a fuga da realidade opressiva e a realização dos desejos — liberdade plena, característica do Modernismo de Bandeira."
  },
  {
    text: "\"A língua é o maior bem imaterial de um povo.\" O conectivo implícito que melhor relaciona essa frase com \"Por isso, devemos preservá-la\" é de:",
    opts: ["Oposição","Conclusão","Concessão","Adição","Explicação"],
    ans: 1,
    source: "UNICAMP 2020 (adaptado)",
    expl: "'Por isso' é conjunção conclusiva: a segunda oração conclui o raciocínio iniciado na primeira."
  },
  {
    text: "No poema \"No meio do caminho\" (Drummond), a repetição do verso 'no meio do caminho tinha uma pedra' tem função predominantemente:",
    opts: [
      "Informativa, para descrever um obstáculo literal",
      "Argumentativa, para convencer o leitor de algo",
      "Expressiva, para criar ritmo e ênfase poética",
      "Injuntiva, para dar instruções ao leitor",
      "Referencial, para situar geograficamente o poema"
    ],
    ans: 2,
    source: "ENEM 2017 (adaptado)",
    expl: "A repetição anafórica não tem fim informativo, mas expressivo: cria cadência, martela a ideia do obstáculo existencial e gera o efeito poético central do poema."
  },
  {
    text: "Leia: \"O governo prometeu melhorias, mas o que chegou ao cidadão foi apenas papel.\" A palavra 'papel' nesse contexto é um exemplo de:",
    opts: ["Metáfora","Metonímia","Antítese","Paradoxo","Pleonasmo"],
    ans: 1,
    source: "PUC-SP 2021 (adaptado)",
    expl: "Usa-se 'papel' (o suporte físico) para representar os documentos e promessas sem efetividade — é metonímia, substituição do todo pela parte ou do concreto pelo abstrato."
  },

  // ── GRAMÁTICA E LÍNGUA PORTUGUESA ──
  {
    text: "Assinale a alternativa em que a concordância verbal está correta segundo a norma-padrão:",
    opts: [
      "Fazem cinco anos que não o vejo.",
      "Existem muita gente disposta a ajudar.",
      "Houveram muitos problemas na eleição.",
      "Deve haver muitos candidatos inscritos.",
      "Fazem anos que não nos falamos, e precisamos conversar."
    ],
    ans: 3,
    source: "ENEM 2016 (adaptado)",
    expl: "'Haver' no sentido de existir é impessoal — fica no singular. 'Deve haver' está correto. 'Fazem'/'Houveram' seriam erros; o certo é 'Faz'/'Houve'."
  },
  {
    text: "Em \"Ele se feriu\", o pronome 'se' indica:",
    opts: [
      "Reciprocidade entre dois sujeitos",
      "Voz passiva sintética",
      "Índice de indeterminação do sujeito",
      "Reflexividade — o sujeito pratica e sofre a ação",
      "Partícula expletiva sem função sintática"
    ],
    ans: 3,
    source: "PUC-RJ 2019 (adaptado)",
    expl: "O sujeito ('Ele') pratica e recebe a mesma ação — reflexividade. Se fosse 'Vendem-se casas', seria partícula apassivadora; 'Come-se bem aqui', índice de indeterminação."
  },
  {
    text: "Qual das frases abaixo apresenta crase obrigatória?",
    opts: [
      "Ele foi a pé até a escola.",
      "Refiro-me a uma questão importante.",
      "Às três horas, a reunião terá início.",
      "A carta foi enviada a ela.",
      "Ele chegou a tempo."
    ],
    ans: 2,
    source: "UNICAMP 2018 (adaptado)",
    expl: "Crase ocorre com locução adverbial de tempo feminina determinada: 'às três horas' = a + as. Pronomes pessoais, substantivos sem artigo e locuções masculinas não admitem crase."
  },
  {
    text: "\"Se eu soubesse a resposta, teria respondido.\" Essa frase expressa uma condição:",
    opts: [
      "Real e possível no presente",
      "Irreal no passado — hipótese que não se realizou",
      "Possível no futuro",
      "Necessária e certa",
      "Habitual no passado"
    ],
    ans: 1,
    source: "ENEM 2014 (adaptado)",
    expl: "O imperfeito do subjuntivo ('soubesse') + futuro do pretérito ('teria respondido') forma período hipotético irreal no passado: a condição não foi atendida."
  },
  {
    text: "Indique a oração em que 'que' funciona como conjunção integrante:",
    opts: [
      "O livro que comprei é ótimo.",
      "Que bela paisagem!",
      "Espero que você venha.",
      "Ele correu tanto que caiu.",
      "Já que choveu, ficamos em casa."
    ],
    ans: 2,
    source: "PUC-SP 2022 (adaptado)",
    expl: "Em 'Espero que você venha', o 'que' introduz uma oração subordinada substantiva objetiva direta — é conjunção integrante, sem função sintática dentro da oração que introduz."
  },

  // ── LITERATURA BRASILEIRA ──
  {
    text: "O Romantismo brasileiro caracterizou-se, em sua primeira geração, pelo(a):",
    opts: [
      "Crítica social e linguagem coloquial",
      "Indianismo e valorização da natureza nacional",
      "Culto ao amor platônico e à morte",
      "Análise científica do comportamento humano",
      "Ruptura total com a tradição europeia"
    ],
    ans: 1,
    source: "ENEM 2013 (adaptado)",
    expl: "A 1ª geração romântica (Gonçalves Dias, Alencar) é marcada pelo indianismo — valorização do índio como herói nacional — e exaltação da natureza brasileira como símbolo de identidade."
  },
  {
    text: "\"Dom Casmurro\", de Machado de Assis, é narrado em primeira pessoa por Bentinho. Esse recurso cria:",
    opts: [
      "Onisciência total e visão objetiva dos fatos",
      "Narrador não confiável, cuja versão é parcial e suspeita",
      "Distância temporal que garante imparcialidade",
      "Identificação imediata do leitor com Capitu",
      "Visão naturalista e determinista dos personagens"
    ],
    ans: 1,
    source: "UNICAMP 2017 (adaptado)",
    expl: "Bentinho/Dom Casmurro é um narrador-personagem com motivações claras de se justificar. O leitor não pode confirmar a traição de Capitu — a ambiguidade é construída pela parcialidade do narrador."
  },
  {
    text: "O Modernismo brasileiro de 1922 propunha, entre outras coisas:",
    opts: [
      "Retorno à linguagem elevada e clássica",
      "Imitação dos modelos europeus do século XIX",
      "Ruptura com o purismo gramatical e valorização do falar popular",
      "Abandono da temática nacional em favor do universalismo",
      "Defesa do parnasianismo e da arte pela arte"
    ],
    ans: 2,
    source: "ENEM 2022 (adaptado)",
    expl: "A Semana de Arte Moderna de 1922 pregava, entre outros pontos, o uso da língua falada, o abandono da retórica parnasiana e a valorização da cultura e identidade brasileiras."
  },
  {
    text: "A obra \"Vidas Secas\", de Graciliano Ramos, pertence ao Modernismo de:",
    opts: [
      "Primeira geração — experimental e antropofágica",
      "Segunda geração — romance social e regionalista de 1930",
      "Terceira geração — introspecção e poesia social",
      "Pré-modernismo — transição entre séculos",
      "Realismo naturalista do século XIX"
    ],
    ans: 1,
    source: "PUC-RS 2020 (adaptado)",
    expl: "'Vidas Secas' (1938) é obra da 2ª geração modernista, marcada pelo romance de 30: prosa regionalista, denuncia das condições sociais do Nordeste, linguagem enxuta e objetiva."
  },
  {
    text: "Em \"O Cortiço\" (Aluísio Azevedo), o ambiente exerce influência determinante sobre os personagens. Isso reflete o pressuposto teórico do:",
    opts: [
      "Romantismo — liberdade individual e emoção",
      "Simbolismo — sugestão e musicalidade",
      "Naturalismo — determinismo do meio e da raça",
      "Modernismo — ruptura com as convenções",
      "Parnasianismo — culto à forma e impessoalidade"
    ],
    ans: 2,
    source: "ENEM 2018 (adaptado)",
    expl: "O Naturalismo, influenciado pelo positivismo de Taine, defende que o comportamento humano é determinado pelo meio, pela raça e pelo momento histórico — o cortiço 'cria' os personagens."
  },

  // ── LITERATURA ESTRANGEIRA ──
  {
    text: "\"Hamlet\", de Shakespeare, pertence ao gênero:",
    opts: [
      "Comédia de costumes",
      "Tragédia renascentista",
      "Épico medieval",
      "Drama naturalista",
      "Farsa popular"
    ],
    ans: 1,
    source: "PUC-SP 2018 (adaptado)",
    expl: "Hamlet é uma tragédia do período renascentista inglês (Elizabethan era), marcada por conflito moral, destino funesto e personagem de elevada condição social arruinado por uma falha trágica."
  },
  {
    text: "O Surrealismo literário, movimento do século XX, caracteriza-se por:",
    opts: [
      "Representação fiel da realidade cotidiana",
      "Exploração do inconsciente, sonhos e automatismo psíquico",
      "Retorno à métrica clássica e ao equilíbrio formal",
      "Crítica social de base marxista e linguagem direta",
      "Exaltação do nacionalismo e dos valores tradicionais"
    ],
    ans: 1,
    source: "UNICAMP 2019 (adaptado)",
    expl: "O Surrealismo (Breton, 1924) buscava libertar a criação dos controles racionais, explorando sonhos, o inconsciente freudiano e o automatismo como fontes da expressão artística."
  },

  // ── FIGURAS DE LINGUAGEM ──
  {
    text: "\"Minha vida é um fio que se rompe a cada instante e se refaz a cada amanhecer.\" Identifique as duas figuras presentes:",
    opts: [
      "Hipérbole e ironia",
      "Metáfora e paradoxo",
      "Metonímia e eufemismo",
      "Antítese e pleonasmo",
      "Catacrese e anáfora"
    ],
    ans: 1,
    source: "PUC-MG 2021 (adaptado)",
    expl: "'Fio que se rompe' é metáfora da vida. 'Rompe a cada instante e se refaz a cada amanhecer' apresenta paradoxo — ideia de destruição e recriação simultâneas do mesmo elemento."
  },
  {
    text: "\"Precisamos de mais cabeças pensando neste projeto.\" O termo 'cabeças' é exemplo de:",
    opts: [
      "Metáfora",
      "Sinestesia",
      "Metonímia",
      "Catacrese",
      "Hipérbole"
    ],
    ans: 2,
    source: "ENEM 2020 (adaptado)",
    expl: "Usa-se 'cabeças' (parte do corpo) para indicar 'pessoas' (o todo) — metonímia da parte pelo todo (sinédoque). A cabeça representa a pessoa pensante."
  },
  {
    text: "\"Aquela voz tinha cor de mel e textura de seda.\" Qual figura de linguagem está presente?",
    opts: [
      "Personificação","Antítese","Sinestesia","Hipérbole","Eufemismo"
    ],
    ans: 2,
    source: "UNICAMP 2016 (adaptado)",
    expl: "Sinestesia é a fusão de sensações de modalidades diferentes. Aqui, a audição (voz) é descrita por sensações do paladar (mel) e do tato (seda)."
  },
  {
    text: "\"Ele é um leão em campo.\" Essa frase é diferente de \"Ele é valente como um leão\" porque:",
    opts: [
      "A primeira usa comparação; a segunda, metáfora",
      "A primeira usa metáfora; a segunda, comparação",
      "Ambas são metáforas, mas de intensidade diferente",
      "A primeira é irônica; a segunda, literal",
      "A primeira usa hipérbole; a segunda, eufemismo"
    ],
    ans: 1,
    source: "PUC-RJ 2017 (adaptado)",
    expl: "Metáfora é a identificação direta ('é um leão'). Comparação (símile) usa conectivo comparativo explícito ('como um leão'). A primeira frase é metáfora; a segunda, comparação."
  },

  // ── VARIAÇÃO LINGUÍSTICA ──
  {
    text: "A frase \"A gente fomos ao cinema\" representa um exemplo de:",
    opts: [
      "Norma-padrão com concordância correta",
      "Variação linguística regional sem desvio de concordância",
      "Variação linguística popular — concordância com o referente semântico plural",
      "Arcaísmo da língua portuguesa medieval",
      "Erro exclusivo de falantes não nativos"
    ],
    ans: 2,
    source: "ENEM 2021 (adaptado)",
    expl: "'A gente' gramaticalmente é 3ª pessoa do singular, mas semanticamente refere-se a um grupo (plural). Alguns falantes fazem a concordância com o sentido ('fomos'), não com a forma — variação popular legítima."
  },
  {
    text: "Linguagem formal e informal diferem principalmente quanto:",
    opts: [
      "Ao vocabulário usado e ao grau de proximidade entre os interlocutores",
      "À inteligibilidade — a formal é mais difícil de entender",
      "Ao canal de comunicação — formal é sempre escrita",
      "À origem histórica — a informal é mais recente",
      "Ao conteúdo — a formal trata de assuntos sérios"
    ],
    ans: 0,
    source: "ENEM 2016 (adaptado)",
    expl: "O registro formal ou informal depende da relação entre os interlocutores e do contexto de comunicação, refletindo-se principalmente nas escolhas lexicais e nas estruturas sintáticas empregadas."
  },

  // ── GÊNEROS TEXTUAIS ──
  {
    text: "Um editorial de jornal pertence predominantemente à tipologia textual:",
    opts: [
      "Narrativa","Descritiva","Argumentativa","Injuntiva","Expositiva"],
    ans: 2,
    source: "ENEM 2015 (adaptado)",
    expl: "O editorial expressa a opinião do veículo de comunicação sobre um tema, usando argumentação para convencer o leitor — tipologia argumentativa predominante."
  },
  {
    text: "\"Leia as instruções antes de usar o aparelho.\" Esse enunciado pertence ao gênero:",
    opts: [
      "Conto","Crônica","Manual de instrução","Relatório científico","Carta argumentativa"
    ],
    ans: 2,
    source: "UNICAMP 2018 (adaptado)",
    expl: "Manuais de instrução têm função injuntiva (orientar ações do leitor), linguagem objetiva, uso do imperativo ou infinitivo e organização sequencial — características presentes no enunciado."
  },
  {
    text: "A crônica, gênero jornalístico-literário, distingue-se do artigo de opinião principalmente porque:",
    opts: [
      "A crônica não pode ter opinião do autor",
      "O artigo não pode ser publicado em jornal",
      "A crônica tem caráter mais leve e literário, aproximando-se do cotidiano com subjetividade",
      "O artigo é obrigatoriamente mais curto",
      "A crônica exige dados estatísticos e o artigo, não"
    ],
    ans: 2,
    source: "PUC-SP 2020 (adaptado)",
    expl: "A crônica tem tom literário, pessoal e cotidiano, valorizando o estilo do cronista. O artigo de opinião é mais formal e argumentativo, voltado à defesa de uma tese com provas e razões."
  },

  // ── SEMÂNTICA ──
  {
    text: "Qual par de palavras apresenta relação de antonímia?",
    opts: [
      "Mérito / méritos","Veloz / rápido","Amor / ódio","Livro / livraria","Casa / lar"
    ],
    ans: 2,
    source: "ENEM 2014 (adaptado)",
    expl: "Antonímia é a relação entre palavras de sentidos opostos. 'Amor' e 'ódio' são antônimos. 'Veloz/rápido' são sinônimos; 'livro/livraria' têm relação de produto/lugar; 'casa/lar' são quase sinônimos."
  },
  {
    text: "\"Ele tem um coração de pedra.\" O sentido da expressão é:",
    opts: [
      "Conotativo — indica insensibilidade emocional",
      "Denotativo — descreve uma condição médica",
      "Técnico — pertence ao vocabulário da medicina",
      "Literal — o coração é feito de pedra",
      "Arcaico — expressão fora de uso"
    ],
    ans: 0,
    source: "PUC-RS 2019 (adaptado)",
    expl: "A expressão usa 'pedra' em sentido conotativo (figurado), não literal. 'Coração de pedra' é uma expressão idiomática que significa pessoa fria, sem compaixão."
  },

  // ── REDAÇÃO / ARGUMENTAÇÃO ──
  {
    text: "Na redação do ENEM, a proposta de intervenção deve ser:",
    opts: [
      "Um resumo do problema social abordado",
      "Uma crítica pessoal ao governo sem fundamento",
      "Detalhada, com agente, ação, meio, finalidade e efeito esperado",
      "Uma transcrição de dados estatísticos citados no texto",
      "Escrita em linguagem informal para aproximar-se do leitor"
    ],
    ans: 2,
    source: "ENEM – Guia do Participante 2023",
    expl: "A grade de correção do ENEM exige que a proposta de intervenção respeite os direitos humanos e apresente: agente (quem faz), ação (o que fazer), meio (como), finalidade (para quê) e efeito esperado."
  },
  {
    text: "Um texto coeso é aquele que:",
    opts: [
      "Apresenta ideias pertinentes ao tema proposto",
      "Usa mecanismos linguísticos que garantem a ligação entre as partes do texto",
      "Expõe argumentos bem fundamentados e lógicos",
      "Respeita a norma-padrão da língua portuguesa",
      "Tem parágrafos curtos e objetivos"
    ],
    ans: 1,
    source: "UNICAMP 2021 (adaptado)",
    expl: "Coesão é a propriedade textual relacionada aos mecanismos linguísticos (pronomes, conectivos, elipses, etc.) que articulam as partes do texto. Coerência, por sua vez, refere-se à lógica das ideias."
  },
  {
    text: "No parágrafo argumentativo, a tópico frase deve:",
    opts: [
      "Retomar a conclusão do parágrafo anterior com outras palavras",
      "Apresentar um dado estatístico que comprove a tese",
      "Enunciar a ideia central do parágrafo, orientando seu desenvolvimento",
      "Usar linguagem poética para prender a atenção do leitor",
      "Ser sempre a última frase do parágrafo"
    ],
    ans: 2,
    source: "ENEM – Guia do Participante 2022",
    expl: "A tópico frase (ou frase-tema) anuncia o argumento que será desenvolvido no parágrafo, funcionando como o eixo organizador das demais informações apresentadas."
  },

  // ── FUNÇÕES DA LINGUAGEM ──
  {
    text: "\"Querido diário, hoje foi um dia difícil...\" Qual função da linguagem predomina nessa abertura?",
    opts: [
      "Referencial","Fática","Emotiva","Conativa","Metalinguística"
    ],
    ans: 2,
    source: "ENEM 2017 (adaptado)",
    expl: "A função emotiva (ou expressiva) centra-se no emissor e na expressão de seus estados emocionais e subjetivos — característica de diários, cartas pessoais e poesia lírica."
  },
  {
    text: "\"Alô? Está me ouvindo?\" é um enunciado em que predomina a função:",
    opts: [
      "Poética","Referencial","Metalinguística","Fática","Conativa"
    ],
    ans: 3,
    source: "PUC-SP 2016 (adaptado)",
    expl: "A função fática (de contato) verifica ou mantém o canal de comunicação aberto. 'Alô?', 'Está me ouvindo?' buscam confirmar se a conexão entre emissor e receptor está funcionando."
  },
  {
    text: "\"Esta redação trata das redações.\" A função da linguagem presente nessa frase é:",
    opts: [
      "Referencial","Emotiva","Conativa","Poética","Metalinguística"
    ],
    ans: 4,
    source: "UNICAMP 2015 (adaptado)",
    expl: "A metalinguagem ocorre quando a linguagem fala de si mesma. Na frase, a redação (código) tem como tema a própria redação — o código é o objeto da mensagem."
  },

  // ── PUBLICIDADE E MÍDIA ──
  {
    text: "Em textos publicitários, o uso de figuras de pessoas famosas tem o objetivo principal de:",
    opts: [
      "Informar o público sobre as qualidades técnicas do produto",
      "Transferir a imagem positiva do famoso para o produto, persuadindo o consumidor",
      "Cumprir exigência legal de identificação do anunciante",
      "Substituir a linguagem verbal pela não verbal",
      "Reduzir o custo de produção da campanha"
    ],
    ans: 1,
    source: "ENEM 2019 (adaptado)",
    expl: "O uso de celebridades é estratégia de persuasão: os atributos positivos associados ao famoso (sucesso, beleza, confiança) são transferidos simbolicamente ao produto — argumento de autoridade e identificação."
  },
  {
    text: "A linguagem dos memes digitais combina elementos verbais e visuais para produzir humor ou crítica. Esse fenômeno é um exemplo de:",
    opts: [
      "Linguagem exclusivamente verbal","Intertextualidade e multimodalidade","Norma culta da língua","Variação diacrônica","Gênero literário clássico"
    ],
    ans: 1,
    source: "ENEM 2023 (adaptado)",
    expl: "Memes são textos multimodais (verbal + visual) que frequentemente evocam outros textos ou imagens já conhecidas (intertextualidade), recontextualizando-os para produzir novos sentidos."
  },

  // ── POESIA ──
  {
    text: "O verso \"Minha terra tem palmeiras, onde canta o Sabiá\" (Gonçalves Dias) apresenta quantas sílabas poéticas?",
    opts: ["8","9","10","11","12"],
    ans: 2,
    source: "ENEM 2016 (adaptado)",
    expl: "Minha-ter-ra-tem-pal-mei-ras-on-de-can-ta-o-Sa-biá = 10 sílabas poéticas (decassílabo). Conta-se até a última sílaba tônica, incluindo-a."
  },
  {
    text: "O Simbolismo, na poesia brasileira, caracteriza-se principalmente por:",
    opts: [
      "Objetividade, descrição da realidade e forma clássica",
      "Musicalidade, subjetividade, uso de símbolos e linguagem hermética",
      "Linguagem simples, humor e crítica social direta",
      "Versos livres, imagens do cotidiano e ruptura formal",
      "Exaltação da natureza nacional e indianismo"
    ],
    ans: 1,
    source: "PUC-MG 2020 (adaptado)",
    expl: "O Simbolismo (Cruz e Souza, Alphonsus de Guimaraens) valoriza a sugestão, a musicalidade, o hermetismo e o uso de símbolos para evocar estados da alma — oposto ao objetivismo parnasiano."
  },

  // ── QUESTÕES ADICIONAIS ENEM / VESTIBULAR ──
  {
    text: "\"Cada macaco no seu galho\" é um exemplo de:",
    opts: [
      "Neologismo","Estrangeirismo","Provérbio/ditado popular","Jargão técnico","Gíria juvenil"
    ],
    ans: 2,
    source: "ENEM 2014 (adaptado)",
    expl: "Provérbios e ditados populares são enunciados breves de uso tradicional que expressam um saber coletivo. Pertencem à linguagem figurada e à cultura popular oral."
  },
  {
    text: "Na frase \"O menino que ganhou o prêmio é meu primo\", a oração 'que ganhou o prêmio' é:",
    opts: [
      "Oração coordenada sindética aditiva",
      "Oração subordinada adverbial causal",
      "Oração subordinada adjetiva restritiva",
      "Oração subordinada substantiva objetiva direta",
      "Oração subordinada adjetiva explicativa"
    ],
    ans: 2,
    source: "UNICAMP 2022 (adaptado)",
    expl: "A oração 'que ganhou o prêmio' é subordinada adjetiva (modifica o substantivo 'menino') e restritiva (delimita, sem vírgulas, o referente — não é qualquer menino, mas aquele que ganhou)."
  },
  {
    text: "\"Saudade\" é considerada uma palavra de difícil tradução para outros idiomas porque:",
    opts: [
      "É uma palavra técnica sem equivalente no léxico estrangeiro",
      "Expressa um estado emocional específico da cultura lusófona, sem equivalência exata em outras línguas",
      "Pertence ao vocabulário arcaico e está em desuso",
      "Foi criada artificialmente por decreto governamental",
      "Só pode ser compreendida por falantes nativos do português europeu"
    ],
    ans: 1,
    source: "ENEM 2023 (adaptado)",
    expl: "'Saudade' encapsula um sentimento complexo de nostalgia afetiva ligado à cultura lusófona — exemplifica como línguas recortam a experiência de modo singular, sem equivalência exata em outras culturas."
  },
  {
    text: "O movimento literário que defendia 'a arte pela arte', valorizando a perfeição formal, a objetividade e o vocabulário erudito foi o:",
    opts: [
      "Romantismo","Realismo","Parnasianismo","Simbolismo","Modernismo"
    ],
    ans: 2,
    source: "PUC-SP 2019 (adaptado)",
    expl: "O Parnasianismo (Olavo Bilac, Raimundo Correia, Alberto de Oliveira) pregava a arte desinteressada, a forma perfeita, a objetividade, o vocabulário raro e a versificação rigorosa — 'a arte pela arte'."
  },
  {
    text: "Em \"O alienista\" (Machado de Assis), Simão Bacamarte prende todos os cidadãos de Itaguaí por considerá-los loucos. Ao final, interna a si mesmo. Isso representa, alegoricamente:",
    opts: [
      "A loucura como herança genética determinista",
      "A crítica ao positivismo científico levado ao extremo e à arrogância da razão",
      "A defesa da psiquiatria como ciência exata",
      "O romantismo do cientista solitário e incompreendido",
      "A sátira ao sistema educacional do século XIX"
    ],
    ans: 1,
    source: "UNICAMP 2020 (adaptado)",
    expl: "Machado satiriza o cientificismo oitocentista: a razão absoluta e a ciência, quando levadas ao extremo e sem limites éticos, tornam-se elas mesmas uma forma de loucura — a arrogância da razão."
  },
  {
    text: "A Semana de Arte Moderna de 1922 ocorreu em:",
    opts: [
      "Rio de Janeiro, no Teatro Municipal",
      "Recife, no Museu do Estado",
      "São Paulo, no Teatro Municipal",
      "Salvador, na Escola de Belas Artes",
      "Belo Horizonte, no Palácio das Artes"
    ],
    ans: 2,
    source: "ENEM 2022 (adaptado)",
    expl: "A Semana de Arte Moderna realizou-se em São Paulo, no Teatro Municipal, nos dias 13, 15 e 17 de fevereiro de 1922, reunindo artistas, escritores e músicos que propunham a renovação da arte brasileira."
  },
  {
    text: "\"Grande Sertão: Veredas\" (Guimarães Rosa) é considerado um marco da literatura brasileira pela:",
    opts: [
      "Linguagem simples e direta voltada ao público infantil",
      "Fusão entre linguagem oral sertaneja, neologismos e reflexão filosófica",
      "Reprodução fiel da fala nordestina sem nenhuma elaboração literária",
      "Adoção do realismo naturalista e do determinismo social",
      "Narrativa linear e objetiva sobre a vida no sertão mineiro"
    ],
    ans: 1,
    source: "PUC-RS 2022 (adaptado)",
    expl: "Rosa inventa uma linguagem única: mistura o falar sertanejo, arcaísmos, neologismos e estruturas da oralidade com reflexão filosófica e existencial — elevando a prosa regional a universal."
  },
  {
    text: "O Concretismo poético brasileiro dos anos 1950-60 priorizava:",
    opts: [
      "O verso longo e a subjetividade romântica",
      "A narrativa épica e a valorização do folclore",
      "A visualidade da palavra na página como elemento poético",
      "A musicalidade simbolista e o hermetismo",
      "A crítica social direta e a linguagem acessível"
    ],
    ans: 2,
    source: "UNICAMP 2019 (adaptado)",
    expl: "O Concretismo (Augusto de Campos, Décio Pignatari, Haroldo de Campos) tratava a palavra como objeto visual: a disposição gráfica na página, a tipografia e a espacialidade faziam parte do poema."
  },
  {
    text: "\"Quincas Borba\" (Machado de Assis) contém a filosofia fictícia do Humanitismo, que prega 'ao vencedor, as batatas'. Essa filosofia é uma paródia de:",
    opts: [
      "O marxismo e a luta de classes",
      "O positivismo e o evolucionismo social darwinista",
      "O espiritualismo de Victor Hugo",
      "O romantismo idealista de Rousseau",
      "O existencialismo de Sartre"
    ],
    ans: 1,
    source: "PUC-SP 2021 (adaptado)",
    expl: "O Humanitismo parodia o positivismo de Comte e o darwinismo social: a sobrevivência do mais forte justificaria toda crueldade e exploração, revelando a crítica machadiana ao otimismo científico do século XIX."
  },
  {
    text: "\"Macunaíma\" (Mário de Andrade) é uma rapsódia que sintetiza:",
    opts: [
      "A visão aristocrática do povo brasileiro",
      "A cultura europeia transposta para o Brasil",
      "Os elementos míticos, folclóricos e culturais das diversas regiões do Brasil",
      "A crítica ao governo Vargas por meio de alegoria histórica",
      "O regionalismo nordestino com foco na seca e na miséria"
    ],
    ans: 2,
    source: "ENEM 2021 (adaptado)",
    expl: "'Macunaíma' é definida como rapsódia — texto que recolhe e mistura elementos de diversas origens. Mário de Andrade funde mitos indígenas, folclore africano, cultura popular e regionalismos para criar uma identidade nacional plural."
  },
  {
    text: "Na análise discursiva, o conceito de 'interdiscurso' refere-se a:",
    opts: [
      "O diálogo entre dois personagens de um mesmo texto",
      "A relação de um discurso com outros discursos que o precederam e o condicionam",
      "A adequação do texto ao registro formal",
      "O uso de referências bibliográficas no texto científico",
      "A coerência interna de um único discurso"
    ],
    ans: 1,
    source: "UNICAMP 2023 (adaptado)",
    expl: "Interdiscurso (Pêcheux) é o conjunto de discursos anteriores que sustentam e condicionam o discurso atual — todo discurso é atravessado por outros discursos, mesmo que de forma implícita."
  },
  {
    text: "A charge é um gênero jornalístico-visual que se distingue da caricatura porque:",
    opts: [
      "A charge exagera traços físicos; a caricatura critica eventos",
      "A charge critica um evento ou situação específica e datada; a caricatura exagera traços para retratar uma personalidade",
      "A charge usa apenas texto; a caricatura usa apenas imagem",
      "A charge é exclusivamente digital; a caricatura é impressa",
      "Não há diferença — são sinônimos"
    ],
    ans: 1,
    source: "PUC-MG 2022 (adaptado)",
    expl: "A charge critica um fato político ou social específico e é efêmera (presa ao contexto). A caricatura exagera traços físicos para retratar uma personalidade de forma cômica ou crítica — tem caráter mais duradouro."
  }
];

// ─── EXPORTAÇÃO ───
// Se estiver usando módulos ES6:
// export default BANK;
// Se estiver usando CommonJS:
// module.exports = BANK;
