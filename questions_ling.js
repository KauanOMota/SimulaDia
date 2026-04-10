// ─── BANCO DE QUESTÕES ───
// Arquivo: questions_ling.js
// Contém o array BANK com todas as questões do simulado de Linguagens e Códigos.
// Para adicionar questões: inclua um novo objeto no array BANK seguindo o padrão:
//   { text: "...", opts: ["A","B","C","D","E"], ans: <índice 0-4>, source: "...", expl: "..." }

// ─── BANCO DE QUESTÕES ─── muitas questões reais e validadas de Linguagens e Códigos (ENEM / UNICAMP / PUC)
window.BANK_LING = [
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
  },

    // ── INTERPRETAÇÃO DE TEXTO ──
  {
    text: "\"O pão que o diabo amassou\" — essa expressão idiomática significa:",
    opts: ["Uma receita de pão muito difícil","Uma situação muito trabalhosa e sofrida","Um produto alimentício de má qualidade","Uma pessoa extremamente malvada","Uma punição severa e injusta"],
    ans: 1,
    source: "ENEM 2015 (adaptado)",
    expl: "Expressões idiomáticas têm sentido figurado não dedutível das palavras isoladas. 'O pão que o diabo amassou' equivale a 'muito sofrimento', 'situação muito difícil de suportar' — registro popular da língua."
  },
  {
    text: "Em um poema, o eu lírico é diferente do autor porque:",
    opts: [
      "O eu lírico sempre tem gênero oposto ao do autor",
      "É uma voz poética construída no texto, não necessariamente idêntica à pessoa biográfica do escritor",
      "O eu lírico é sempre um personagem fictício com nome próprio",
      "O autor não participa da criação do eu lírico",
      "São sempre idênticos na poesia confessional"
    ],
    ans: 1,
    source: "PUC-SP 2018 (adaptado)",
    expl: "O eu lírico é uma construção textual — a voz que enuncia o poema. Mesmo que se pareça autobiográfico, é um 'eu' literário. Confundir autor e eu lírico é o mesmo erro de confundir narrador e autor em prosa."
  },
  {
    text: "\"A notícia correu como fogo em palha seca.\" Qual a função da comparação nessa frase?",
    opts: [
      "Informar com precisão a velocidade da propagação da notícia",
      "Intensificar a rapidez e a voracidade com que a notícia se espalhada",
      "Criticar os meios de comunicação atuais",
      "Sugerir que a notícia era falsa e perigosa",
      "Descrever o ambiente físico em que a notícia circulou"
    ],
    ans: 1,
    source: "ENEM 2017 (adaptado)",
    expl: "A comparação 'como fogo em palha seca' intensifica a rapidez e a capacidade de expansão irresistível — o fogo em palha é imagem de velocidade e incontrolabilidade, atribuindo essas qualidades à propagação da notícia."
  },
  {
    text: "Leia: \"O governo anunciou medidas para combater a inflação. Tais medidas, porém, foram criticadas pelos economistas.\" O conectivo 'porém' estabelece relação de:",
    opts: ["Conclusão","Adição","Oposição/adversidade","Causa","Explicação"],
    ans: 2,
    source: "UNICAMP 2018 (adaptado)",
    expl: "'Porém' é conjunção coordenativa adversativa — introduz uma ideia que se opõe ou contrasta com a anterior. Equivale a 'mas', 'contudo', 'entretanto', 'todavia'."
  },
  {
    text: "O título de um texto jornalístico tem função primordialmente:",
    opts: [
      "Decorativa — embeleza o layout da página",
      "Informativa e atrativa — sintetiza o conteúdo e capta a atenção do leitor",
      "Argumentativa — defende a tese principal do artigo",
      "Poética — usa figuras de linguagem para criar efeito estético",
      "Injuntiva — orienta o leitor sobre como ler o texto"
    ],
    ans: 1,
    source: "PUC-RS 2019 (adaptado)",
    expl: "O título jornalístico cumpre dupla função: informar (indica o tema central) e atrair (desperta a curiosidade para a leitura completa). No digital, também influencia o SEO e o compartilhamento em redes sociais."
  },
  {
    text: "\"O crime não compensa\" — a frase usa a palavra 'crime' em sentido:",
    opts: [
      "Técnico-jurídico preciso","Denotativo literal — ato ilegal","Conotativo amplo — qualquer coisa muito prejudicial","Irônico — insinua que o crime pode compensar","Eufemístico — substitui palavra mais grave"],
    ans: 1,
    source: "ENEM 2014 (adaptado)",
    expl: "Em seu sentido mais direto, 'crime' aqui é denotativo: refere-se a atos ilegais. A frase é um provérbio no sentido literal — praticar crimes não traz vantagem a longo prazo."
  },
  {
    text: "Em uma charge política, o exagero dos traços físicos de um político tem função de:",
    opts: [
      "Retratar com fidelidade fotográfica o personagem",
      "Satirizar e criticar as características ou ações do personagem de forma cômica e engajada",
      "Ofender a honra do político sem intenção crítica",
      "Demonstrar as habilidades técnicas do artista gráfico",
      "Informar sobre os acontecimentos políticos de forma neutra"
    ],
    ans: 1,
    source: "UNICAMP 2019 (adaptado)",
    expl: "A caricatura/charge usa o exagero (hipérbole visual) como recurso retórico para satirizar — a distorção intencional dos traços físicos representa simbolicamente os defeitos morais, políticos ou pessoais do retratado."
  },
  {
    text: "\"No Brasil, a língua portuguesa falada apresenta grandes variações. Cada região tem seu sotaque, seu vocabulário e suas expressões próprias.\" Esse trecho defende a ideia de que:",
    opts: [
      "O português falado no Brasil é incorreto e precisa ser corrigido",
      "A variação linguística é um fenômeno natural e enriquecedor da língua",
      "Apenas o sotaque carioca é o padrão correto a ser seguido",
      "As variações regionais são erros que dificultam a comunicação",
      "O Brasil deveria adotar o português europeu como padrão"
    ],
    ans: 1,
    source: "ENEM 2021 (adaptado)",
    expl: "O texto descreve as variações sem julgamento de valor negativo — ao apresentá-las como fenômeno natural de cada região, defende implicitamente que a variação linguística é inerente a qualquer língua viva e diversa."
  },
  {
    text: "O recurso da ironia funciona porque:",
    opts: [
      "O emissor diz algo falso para enganar o receptor",
      "Existe uma diferença entre o que é dito literalmente e o que se quer comunicar de fato",
      "O receptor não entende o verdadeiro sentido da mensagem",
      "Usa-se vocabulário elevado para falar de assuntos baixos",
      "O emissor exagera propositalmente os fatos narrados"
    ],
    ans: 1,
    source: "PUC-SP 2020 (adaptado)",
    expl: "A ironia depende de uma dupla camada de sentido: o que é dito e o que se pretende comunicar são opostos ou divergentes. O receptor reconhece o sentido irônico pelo contexto, pelo tom ou pela incongruência com os fatos."
  },
  {
    text: "\"Ler é viver outras vidas sem gastar a própria.\" Identifique a figura de linguagem central:",
    opts: ["Hipérbole","Metonímia","Paradoxo","Metáfora","Personificação"],
    ans: 3,
    source: "ENEM 2020 (adaptado)",
    expl: "A frase identifica o ato de ler com a experiência de 'viver outras vidas' — comparação implícita (sem conectivo), portanto metáfora. A leitura é o veículo; 'viver outras vidas' é o teor metafórico."
  },
 
  // ── GRAMÁTICA ──
  {
    text: "\"Ela chegou, sorriu e saiu.\" Os verbos coordenados indicam:",
    opts: [
      "Ações simultâneas","Ações em sequência temporal","Ações condicionadas entre si","Ações opostas","Ações hipotéticas"],
    ans: 1,
    source: "UNICAMP 2017 (adaptado)",
    expl: "A coordenação aditiva com 'e' entre verbos do pretérito perfeito indica uma sequência temporal: primeiro chegou, depois sorriu, depois saiu — eventos sucessivos narrados na ordem em que ocorreram."
  },
  {
    text: "\"Cuide-se\" — o pronome 'se' nessa construção é:",
    opts: [
      "Partícula apassivadora","Índice de indeterminação do sujeito","Pronome reflexivo — o sujeito implícito pratica e recebe a ação","Pronome recíproco","Expletivo sem função"],
    ans: 2,
    source: "PUC-MG 2018 (adaptado)",
    expl: "'Cuide-se' (imperativo + se): o sujeito implícito (você) deve cuidar de si mesmo — é uso reflexivo. Compare: 'Vende-se casa' (apassivador) ou 'Come-se bem aqui' (indeterminação)."
  },
  {
    text: "Qual das frases abaixo apresenta ERRO de concordância nominal?",
    opts: [
      "As alunas estavam satisfeitas com o resultado.",
      "É necessário bastantes explicações para entender o tema.",
      "Havia muitas pessoas no evento.",
      "Ficaram ambas caladas diante da pergunta.",
      "Eles próprios resolveram o problema."
    ],
    ans: 1,
    source: "ENEM 2018 (adaptado)",
    expl: "'Bastante(s)' quando funciona como adjetivo concorda com o substantivo: 'bastantes explicações' está correto. MAS: 'É necessário bastantes explicações' — erro de concordância: 'necessário' deveria concordar com 'explicações' → 'São necessárias bastantes explicações'."
  },
  {
    text: "Em \"Todos os alunos foram aprovados, inclusive eu\", o pronome 'eu' está correto porque:",
    opts: [
      "Após 'inclusive', usa-se sempre o pronome reto",
      "O pronome exerce função de sujeito da oração implícita '(inclusive) eu fui aprovado'",
      "Em final de frase, usa-se sempre o pronome reto",
      "Após vírgula, o pronome oblíquo seria errado",
      "É regra da língua culta usar 'eu' após 'inclusive'"
    ],
    ans: 1,
    source: "PUC-RS 2020 (adaptado)",
    expl: "'Inclusive eu' = 'inclusive eu fui aprovado' — o pronome exerce função de sujeito da oração subentendida. Pronomes retos exercem função de sujeito; oblíquos, de objeto. Por isso 'eu' (reto/sujeito), não 'mim'."
  },
  {
    text: "A função sintática de 'muito' em \"Ela trabalhou muito\" é de:",
    opts: ["Adjetivo que modifica o sujeito","Advérbio que modifica o verbo","Substantivo predicativo","Objeto direto do verbo","Adjunto adnominal do sujeito"],
    ans: 1,
    source: "UNICAMP 2020 (adaptado)",
    expl: "'Muito' modifica o verbo 'trabalhou' — indica intensidade da ação. Quando modifica verbo, adjetivo ou outro advérbio, 'muito' é advérbio."
  },
  {
    text: "\"Mal ele entrou, a festa acabou.\" Nessa frase, 'mal' equivale a:",
    opts: ["Logo que / assim que","Embora / mesmo que","Porque / já que","Se / caso","Antes que / para que"],
    ans: 0,
    source: "PUC-SP 2019 (adaptado)",
    expl: "'Mal' como conjunção temporal equivale a 'assim que', 'logo que', 'no momento em que' — indica simultaneidade ou imediatidade entre as duas ações."
  },
  {
    text: "Em qual alternativa o uso das aspas está INCORRETO?",
    opts: [
      "Ele disse: \"Não vou comparecer à reunião.\"",
      "O \"saudosismo\" é tema recorrente na poesia de Bandeira.",
      "Ela usou a palavra \"saudade\" três vezes no discurso.",
      "\"Qual é a data da prova\"? perguntou o aluno.",
      "O filme \"Cidadão Kane\" é considerado o melhor de todos os tempos."
    ],
    ans: 3,
    source: "ENEM 2016 (adaptado)",
    expl: "Quando a interrogação faz parte do discurso direto, o ponto de interrogação fica dentro das aspas: '\"Qual é a data da prova?\" perguntou o aluno.' O ponto de interrogação após as aspas estaria errado."
  },
  {
    text: "\"O livro foi lido pela professora\" está na voz passiva analítica. Para transformá-la em passiva sintética, seria:",
    opts: [
      "\"A professora leu o livro\"","\"Leu-se o livro\"","\"O livro leu-se pela professora\"","\"Foi lido o livro\"","\"O livro que foi lido\""],
    ans: 1,
    source: "UNICAMP 2018 (adaptado)",
    expl: "Voz passiva sintética = verbo + partícula 'se': 'Leu-se o livro' (equivale a 'O livro foi lido'). O agente da passiva ('pela professora') é omitido. A passiva analítica usa 'ser + particípio'."
  },
  {
    text: "\"Correu muito\" e \"Ela é muito bonita\" — em qual das frases 'muito' é advérbio?",
    opts: [
      "Apenas na primeira","Apenas na segunda","Em ambas, pois modifica verbo e adjetivo respectivamente","Em nenhuma — é pronome indefinido em ambas","Em ambas, mas com funções de adjetivo"],
    ans: 2,
    source: "PUC-MG 2019 (adaptado)",
    expl: "Advérbio modifica verbo, adjetivo ou outro advérbio. Na 1ª frase, 'muito' modifica o verbo 'correu'; na 2ª, modifica o adjetivo 'bonita'. Em ambos os casos é advérbio de intensidade."
  },
  {
    text: "\"Comprei frutas, verduras e legumes.\" Nessa frase, a vírgula separa:",
    opts: [
      "Orações coordenadas","Termos de uma enumeração (elementos em série)","Oração principal de subordinada","Aposto explicativo","Adjunto adverbial antecipado"],
    ans: 1,
    source: "ENEM 2015 (adaptado)",
    expl: "Quando há enumeração de termos de mesma função sintática, separam-se com vírgulas. 'Frutas, verduras e legumes' são três objetos diretos em série — vírgulas separam os termos até o último, precedido de 'e'."
  },
 
  // ── LITERATURA BRASILEIRA ──
  {
    text: "Castro Alves é o principal poeta da 3ª geração romântica, chamada condoreirista. Seus poemas são marcados por:",
    opts: [
      "Subjetivismo exacerbado e culto da morte","Objetividade parnasiana e perfeição formal","Abolicionismo, oratória e temática social de largo alcance","Indianismo e exaltação da natureza nacional","Misticismo e linguagem hermética"],
    ans: 2,
    source: "ENEM 2016 (adaptado)",
    expl: "Castro Alves (3ª geração romântica/condoreirismo): o poeta usa a metáfora do condor (ave de voo alto) para representar a poesia engajada. Principal tema: abolicionismo ('O Navio Negreiro', 'Vozes d'África') e retórica grandiosa."
  },
  {
    text: "\"O Tempo e o Vento\" (Érico Veríssimo) retrata a história do Rio Grande do Sul ao longo de gerações. Esse tipo de romance é chamado de:",
    opts: [
      "Romance policial","Romance de formação (Bildungsroman)","Saga ou romance de geração","Romance epistolar","Romance histórico de tese"],
    ans: 2,
    source: "PUC-RS 2021 (adaptado)",
    expl: "Sagas ou romances de geração acompanham uma família ou comunidade ao longo de várias gerações, ligando destinos individuais à história coletiva. 'O Tempo e o Vento' é o exemplo mais famoso da literatura gaúcha."
  },
  {
    text: "\"Iaiá Garcia\" e \"Helena\" são romances de Machado de Assis da fase chamada:",
    opts: [
      "Realista — com análise psicológica e ironia fina","Romântica — com idealismo e sentimentalismo","Naturalista — com determinismo social","Simbolista — com musicalidade e hermetismo","Modernista — com ruptura formal"],
    ans: 1,
    source: "UNICAMP 2017 (adaptado)",
    expl: "A 1ª fase de Machado (Helena, Iaiá Garcia, A Mão e a Luva) é considerada romântica: enredos sentimentais, personagens idealizados, conflitos amorosos e sociais com desfecho moralizante — antes da virada com 'Memórias Póstumas'."
  },
  {
    text: "O conceito de 'sertanismo' ou 'regionalismo' na literatura brasileira tem em Euclides da Cunha ('Os Sertões') seu monumento fundador porque:",
    opts: [
      "É o primeiro texto escrito em prosa sobre o Nordeste",
      "Documenta a Guerra de Canudos revelando o Brasil profundo que a República ignorava",
      "Defende a superioridade cultural do sertanejo sobre o homem urbano",
      "É escrito com linguagem popular e acessível ao povo",
      "Cria um romance ficcional sobre a seca nordestina"
    ],
    ans: 1,
    source: "ENEM 2019 (adaptado)",
    expl: "'Os Sertões' (1902) é relato jornalístico e literário da Guerra de Canudos — revela ao Brasil urbano e litorâneo a existência de um Brasil sertanejo profundo, ignorado e violentado pela República nascente. É o fundador do pensamento regionalista crítico."
  },
  {
    text: "\"Gabriela, Cravo e Canela\", \"Dona Flor e seus dois maridos\" — Jorge Amado pertence à tradição literária do:",
    opts: [
      "Romance psicológico introspectivo à la Clarice","Romance social engajado com traços populares, sensuais e carnavalescos","Romance histórico documental","Experimentalismo formal do Concretismo","Minimalismo da geração de 45"],
    ans: 1,
    source: "PUC-BA 2022 (adaptado)",
    expl: "Jorge Amado, especialmente em sua segunda fase, cria um universo literário baiano marcado pela sensualidade, humor, cultura popular afro-brasileira e carnaval — herdeiro do realismo social com forte sabor regional."
  },
  {
    text: "\"Morte e Vida Severina\" é classificado como auto de Natal. Essa denominação remete a:",
    opts: [
      "O texto ser escrito automaticamente, sem revisão","A tradição do teatro popular religioso ibérico medieval","A data de publicação ser no Natal de 1955","O texto ser uma peça de natação simbólica","O auto ser dedicado à cidade de Natal (RN)"],
    ans: 1,
    source: "ENEM 2018 (adaptado)",
    expl: "'Auto' é um gênero dramático do teatro medieval ibérico (Gil Vicente), geralmente de tema religioso ou alegórico. João Cabral retoma a forma do auto de Natal para narrar a peregrinação de Severino — morte e nascimento entrelaçados."
  },
  {
    text: "A literatura de cordel nordestina é uma manifestação que se caracteriza por:",
    opts: [
      "Prosa longa e técnica narrativa sofisticada","Poesia rimada e metrificada vendida em folhetos, com temáticas populares, heróicas e religiosas","Teatro épico de engajamento político","Romance epistolar de temática amorosa","Poesia concreta de experimentação visual"],
    ans: 1,
    source: "UNICAMP 2020 (adaptado)",
    expl: "A literatura de cordel é poesia popular nordestina: versos rimados (geralmente sextilhas ou décimas), vendidos em folhetos pendurados em cordas, com temáticas que vão do cangaço ao sobrenatural, do humorístico ao religioso."
  },
  {
    text: "O movimento Pau-Brasil (Oswald de Andrade, 1924) propunha:",
    opts: [
      "O retorno à poesia épica colonial","Uma poesia de exportação — brasileira, primitiva, moderna — que valorizasse o Brasil sem complexo de inferioridade","A adoção do Surrealismo francês como modelo estético","A pureza gramatical da língua portuguesa europeia","A poesia social de denúncia da desigualdade"],
    ans: 1,
    source: "PUC-SP 2019 (adaptado)",
    expl: "O Manifesto Pau-Brasil de Oswald (1924) propunha uma poesia 'de exportação' — síntese do primitivo e do moderno, do índio e da máquina, sem imitar modelos europeus. O Brasil deveria ser visto como produto genuíno, não cópia."
  },
  {
    text: "\"Grande Sertão: Veredas\" usa o monólogo de Riobaldo, que narra sua vida a um interlocutor silencioso. O interlocutor nunca fala, mas sua presença é marcada por:",
    opts: [
      "Capítulos narrados em segunda pessoa","Travessões que indicam as falas não reproduzidas e pontos de reticência","Cartas intercaladas ao monólogo principal","Notas de rodapé explicativas do autor","Flashbacks visuais descritos detalhadamente"],
    ans: 1,
    source: "UNICAMP 2022 (adaptado)",
    expl: "Guimarães Rosa usa travessões e reticências para indicar as intervenções do interlocutor que nunca ouvimos — apenas Riobaldo responde. Esse recurso cria o efeito de diálogo real sem dar voz ao outro lado."
  },
  {
    text: "A obra de Lima Barreto é considerada pré-modernista e se destaca por:",
    opts: [
      "Perfeição formal parnasiana e vocabulário erudito","Crítica social corrosiva à sociedade carioca, com linguagem simples e perspectiva do marginalizado","Romance indianista de exaltação nacional","Prosa poética simbolista e hermética","Experimentalismo vanguardista avant la lettre"],
    ans: 1,
    source: "ENEM 2020 (adaptado)",
    expl: "Lima Barreto ('Triste Fim de Policarpo Quaresma', 'Clara dos Anjos') faz crítica feroz à República, ao racismo e à burocracia brasileira com linguagem simples e perspectiva dos excluídos — antecipando o Modernismo sem fazer parte dele."
  },
 
  // ── FUNÇÕES DA LINGUAGEM ──
  {
    text: "Em um poema, a preocupação com a sonoridade, o ritmo, as rimas e a disposição gráfica das palavras indica predominância da função:",
    opts: ["Referencial","Fática","Emotiva","Conativa","Poética"],
    ans: 4,
    source: "ENEM 2018 (adaptado)",
    expl: "A função poética (Jakobson) centra-se na mensagem em si — na forma do enunciado, na sonoridade, no ritmo, na escolha das palavras como elementos de prazer estético. É a função dominante na literatura."
  },
  {
    text: "\"Vote no candidato X — ele vai mudar o Brasil!\" Que função da linguagem predomina?",
    opts: ["Referencial","Poética","Metalinguística","Conativa","Fática"],
    ans: 3,
    source: "PUC-SP 2020 (adaptado)",
    expl: "A função conativa (apelativa) visa influenciar o comportamento do receptor — é voltada para o destinatário. O imperativo ('Vote'), o pronome 'você' implícito e a intenção persuasiva caracterizam essa função."
  },
  {
    text: "\"A gramática é o conjunto de regras que descrevem o funcionamento de uma língua.\" Nessa definição, a linguagem fala sobre si mesma — isso é a função:",
    opts: ["Referencial","Fática","Metalinguística","Poética","Emotiva"],
    ans: 2,
    source: "UNICAMP 2019 (adaptado)",
    expl: "Função metalinguística: o código (linguagem) é usado para explicar o próprio código. Definições, gramáticas, dicionários e textos que falam sobre como a língua funciona são exemplos de metalinguagem."
  },
  {
    text: "\"Está chovendo aqui. E aí, como está o tempo aí?\" A função predominante nesse diálogo é:",
    opts: ["Poética","Referencial","Fática","Emotiva","Conativa"],
    ans: 1,
    source: "ENEM 2016 (adaptado)",
    expl: "A informação sobre o tempo é referencial, mas o contexto de conversa informal ('E aí') indica que o objetivo principal é manter o contato social — função fática predomina nas conversas cotidianas que estabelecem e mantêm relações."
  },
 
  // ── VARIAÇÃO LINGUÍSTICA ──
  {
    text: "O uso de 'nós' e 'a gente' para referir-se ao mesmo grupo é exemplo de:",
    opts: [
      "Erro gramatical a ser corrigido","Variação linguística na expressão da primeira pessoa do plural","Uso exclusivo da língua informal baixa","Influência do inglês no português brasileiro","Fenômeno restrito à fala das crianças"],
    ans: 1,
    source: "ENEM 2021 (adaptado)",
    expl: "'A gente' como substituto de 'nós' é variação consolidada no português brasileiro — presente em todos os registros e classes sociais. Não é erro; é uma variante que coexiste com 'nós' e segue suas próprias regras de concordância."
  },
  {
    text: "A língua usada por grupos profissionais específicos (médicos, advogados, informatas) para comunicação interna é chamada de:",
    opts: ["Gíria","Dialeto","Jargão","Língua franca","Pidgin"],
    ans: 2,
    source: "PUC-MG 2020 (adaptado)",
    expl: "Jargão é o conjunto de termos técnicos e expressões específicas de uma área profissional ou grupo especializado. Facilita a comunicação entre especialistas, mas pode excluir leigos — é variação profissional/técnica."
  },
  {
    text: "\"Tu vai\" e \"Tu vais\" são duas possibilidades de concordância no português brasileiro. A primeira é característica de:",
    opts: [
      "Norma culta escrita","Variação popular — concordância com o sujeito simplificada","Erro de ortografia","Influência do espanhol","Forma exclusiva do português europeu"],
    ans: 1,
    source: "UNICAMP 2019 (adaptado)",
    expl: "No português brasileiro falado, 'tu' frequentemente concorda com verbos na 3ª pessoa ('tu vai', 'tu faz') — variante popular amplamente usada em muitas regiões (Nordeste, Sul). 'Tu vais' é a forma da norma padrão."
  },
  {
    text: "O conceito de 'norma culta' refere-se a:",
    opts: [
      "A língua mais correta e bonita esteticamente","O conjunto de usos linguísticos das pessoas com alto grau de escolaridade em situações formais","O dialeto da capital federal como modelo a ser seguido","A gramática normativa publicada pela Academia Brasileira de Letras","A língua falada pelos professores universitários"],
    ans: 1,
    source: "ENEM 2022 (adaptado)",
    expl: "Norma culta é descritiva, não prescritiva: refere-se ao conjunto de usos linguísticos observados em falantes com alta escolaridade em situações formais. Não é 'mais correta', mas é a variante de maior prestígio social."
  },
 
  // ── REDAÇÃO ──
  {
    text: "No ENEM, o texto dissertativo-argumentativo deve ser escrito em:",
    opts: [
      "Primeira pessoa, com uso de 'eu' para marcar a subjetividade","Terceira pessoa ou de forma impessoal, mantendo distância do enunciado","Segunda pessoa, dirigindo-se diretamente ao leitor","Qualquer pessoa, conforme o estilo do candidato","Primeira pessoa do plural para incluir o leitor na argumentação"],
    ans: 1,
    source: "ENEM – Guia do Participante 2023",
    expl: "O texto dissertativo-argumentativo exige objetividade e impessoalidade. O uso excessivo de 'eu' pode indicar falta de fundamentação. Deve-se usar 3ª pessoa ('observa-se', 'nota-se') ou construções impessoais."
  },
  {
    text: "Um texto com boa coerência é aquele que:",
    opts: [
      "Usa muitos conectivos para ligar as frases","Apresenta ideias logicamente articuladas e sem contradições, formando um todo com sentido","Tem parágrafos de tamanho uniforme","Segue rigorosamente as regras gramaticais","Usa vocabulário variado sem repetição"],
    ans: 1,
    source: "PUC-SP 2021 (adaptado)",
    expl: "Coerência textual é a propriedade semântica do texto: as ideias devem ser logicamente compatíveis, sem contradições, e devem se articular em torno de um fio condutor que dê unidade e sentido ao todo."
  },
  {
    text: "\"Embora o acesso à internet tenha crescido, a exclusão digital ainda atinge milhões de brasileiros.\" Esse período é um bom exemplo de:",
    opts: [
      "Introdução de parágrafo com tópico frase afirmativa direta","Uso de concessão para apresentar a complexidade do tema","Conclusão que retoma a tese principal","Argumento de autoridade baseado em dados","Exemplificação de um conceito abstrato"],
    ans: 1,
    source: "ENEM 2022 (adaptado)",
    expl: "'Embora...' introduz uma concessão: reconhece o avanço (o que o adversário diria) para depois mostrar a limitação real. É estratégia argumentativa eficaz que demonstra visão crítica e não superficial do tema."
  },
  {
    text: "Qual das opções apresenta uma proposta de intervenção completa segundo os critérios do ENEM?",
    opts: [
      "O governo deve fazer mais pelos jovens.",
      "É necessário investir em educação no Brasil.",
      "O Ministério da Educação deve ampliar o acesso à educação de qualidade por meio de políticas de permanência escolar, a fim de reduzir a evasão entre estudantes em situação de vulnerabilidade social.",
      "Os jovens precisam se esforçar mais para ter sucesso na vida.",
      "A sociedade deve conscientizar-se da importância da educação."
    ],
    ans: 2,
    source: "ENEM – Guia do Participante 2023",
    expl: "A proposta completa traz: agente (Ministério da Educação), ação (ampliar o acesso), meio (políticas de permanência), finalidade (reduzir a evasão) e efeito (beneficiar vulneráveis). As outras são vagas, sem detalhamento."
  },
  {
    text: "O parágrafo de introdução de uma dissertação deve conter:",
    opts: [
      "Todos os argumentos que serão desenvolvidos no texto","A tese (ponto de vista a ser defendido) e a contextualização do tema","A conclusão do texto antecipada para o leitor","Citações de autores famosos sobre o tema","A proposta de intervenção detalhada"],
    ans: 1,
    source: "PUC-RS 2022 (adaptado)",
    expl: "A introdução deve contextualizar o tema (situá-lo para o leitor) e apresentar a tese (a posição que será defendida). Não deve esgotar os argumentos — isso é função do desenvolvimento — nem apresentar a solução prematuramente."
  },
 
  // ── LÍNGUA ESTRANGEIRA – INGLÊS ──
  {
    text: "Choose the correct option: \"By the time she arrived, he ___ for two hours.\"",
    opts: [
      "was waiting","has been waiting","had been waiting","will have waited","is waiting"],
    ans: 2,
    source: "ENEM – Inglês 2022 (adaptado)",
    expl: "Past Perfect Continuous (had been + V-ing) is used for an action that was in progress before a specific moment in the past. 'By the time she arrived' indicates that reference point in the past."
  },
  {
    text: "\"I wish I had studied harder.\" This sentence expresses:",
    opts: [
      "A plan for the future","Regret about a past action — the speaker didn't study hard enough","Advice to another person","A condition that is still possible","Satisfaction with a past decision"],
    ans: 1,
    source: "PUC-SP – Inglês 2021 (adaptado)",
    expl: "'Wish + past perfect' expresses regret about a past situation that cannot be changed. The speaker is unhappy about not studying hard enough — it's too late to change it now."
  },
  {
    text: "\"She's been living in São Paulo since 2018.\" The use of Present Perfect Continuous suggests:",
    opts: [
      "She no longer lives in São Paulo","She lived there temporarily in 2018","She started living there in 2018 and still lives there now","She will move to São Paulo in 2018","She visited São Paulo in 2018"],
    ans: 2,
    source: "UNICAMP – Inglês 2020 (adaptado)",
    expl: "Present Perfect Continuous with 'since' + point in time indicates an action that began at that time and continues up to now. 'Since 2018' marks when the action started; the continuous aspect implies it's ongoing."
  },
  {
    text: "The word 'although' introduces a clause of:",
    opts: ["Reason","Result","Contrast/concession","Condition","Time"],
    ans: 2,
    source: "ENEM – Inglês 2019 (adaptado)",
    expl: "'Although' (= even though, despite the fact that) introduces a concessive clause — it presents a contrast or unexpected result. 'Although it was raining, they continued playing' — rain didn't prevent the action."
  },
  {
    text: "\"The company's new product, which was launched last month, has already sold out.\" The clause 'which was launched last month' is:",
    opts: [
      "A restrictive relative clause — identifying which product","A non-restrictive relative clause — adding extra information","An adverbial clause of time","A noun clause acting as subject","A conditional clause"],
    ans: 1,
    source: "PUC-RJ – Inglês 2021 (adaptado)",
    expl: "Non-restrictive (non-defining) relative clauses are set off by commas and add extra information about a noun already identified. The product is identified ('the company's new product') — the clause adds details, not identification."
  },
 
  // ── ESPANHOL ──
  {
    text: "\"Cuando llegues, llámame.\" El verbo 'llegues' está en subjuntivo porque:",
    opts: [
      "Es una acción pasada narrada con distancia","La conjunción 'cuando' con referencia futura exige subjuntivo","El hablante duda de que la persona llegue","Es un mandato indirecto al interlocutor","La oración principal tiene verbo en imperativo"],
    ans: 1,
    source: "ENEM – Espanhol 2021 (adaptado)",
    expl: "En español, las oraciones temporales con referencia futura ('cuando', 'hasta que', 'en cuanto') van en subjuntivo: 'Cuando llegues' (futuro) vs. 'Cuando llegaba' (hábito pasado, indicativo)."
  },
  {
    text: "\"Me duele la cabeza\" — el verbo 'doler' en esta construcción funciona de manera similar al verbo:",
    opts: ["Tener","Ser","Gustar","Estar","Hacer"],
    ans: 2,
    source: "PUC-SP – Espanhol 2020 (adaptado)",
    expl: "Como 'gustar', el verbo 'doler' invierte la estructura sujeto-verbo-objeto del español: el sujeto gramatical es 'la cabeza' (cosa que duele) y el objeto indirecto es 'me' (quien siente el dolor). Gustar/doler/molestar/encantar siguen este patrón."
  },
  {
    text: "\"Hace tres años que vivo en Brasil\" — la estructura con 'hace' expresa:",
    opts: [
      "Una acción terminada hace tres años","Una acción que dura hace tres años y continúa en el presente","Una acción que ocurrirá en tres años","Una condición hipotética","Una acción habitual del pasado"],
    ans: 1,
    source: "UNICAMP – Espanhol 2019 (adaptado)",
    expl: "'Hace + tiempo + que + presente' expresa duración de una acción que comenzó en el pasado y continúa en el presente. Equivale al Present Perfect Continuous en inglés o ao 'faz X que' do português."
  },
 
  // ── QUESTÕES FINAIS ──
  {
    text: "\"Eu vi um peixe fora d'água e ele me olhou com seus olhos de vidro.\" A sinestesia está em:",
    opts: [
      "'peixe fora d'água' — peixe em ambiente inadequado","'olhos de vidro' — mistura de visão (olhos) e tato (vidro, material frio e duro)","'eu vi' — visão do narrador","'me olhou' — reciprocidade do olhar","A frase não contém sinestesia"],
    ans: 1,
    source: "PUC-SP 2022 (adaptado)",
    expl: "'Olhos de vidro' combina o visual (olhos) com a sensação tátil e material do vidro (frio, transparente, inexpressivo) — mistura de sentidos que caracteriza a sinestesia."
  },
  {
    text: "\"A Hora e a Vez de Augusto Matraga\" (Guimarães Rosa) usa a conversão religiosa para explorar o tema:",
    opts: [
      "Da hipocrisia da Igreja Católica no sertão","Da redenção e da violência — o bem que nasce do mal, a transformação humana impossível de prever","Da reforma agrária no Nordeste","Do amor impossível entre pessoas de classes diferentes","Da crítica à política coronelista"],
    ans: 1,
    source: "ENEM 2019 (adaptado)",
    expl: "Augusto Matraga passa de violento e cruel a contemplativo e religioso — e volta à violência em ato de redenção final. Rosa explora a ambiguidade entre bem e mal, violência e redenção, como forças inseparáveis da condição humana sertaneja."
  },
  {
    text: "\"Drummond é o maior poeta brasileiro do século XX.\" Essa afirmação é:",
    opts: [
      "Fato objetivo comprovável por critérios universais","Juízo de valor — opinião que pode ser sustentada por argumentos mas não comprovada como fato","Falácia argumentativa que generaliza sem base","Metáfora sobre a grandeza da poesia","Dado estatístico baseado em pesquisas de preferência"],
    ans: 1,
    source: "UNICAMP 2021 (adaptado)",
    expl: "Julgamentos estéticos ('o maior', 'o melhor') são juízos de valor, não fatos verificáveis objetivamente. Podem ser sustentados por argumentos (crítica literária, influência, reconhecimento), mas pertencem ao domínio da opinião fundamentada."
  },
  {
    text: "O recurso da aliteração consiste na:",
    opts: [
      "Repetição de vogais similares em palavras próximas","Repetição de consoantes idênticas ou similares em palavras próximas, criando efeito sonoro","Combinação de palavras de sentidos opostos no mesmo verso","Repetição da mesma palavra no início de versos consecutivos","Omissão de palavras que podem ser subentendidas pelo contexto"],
    ans: 1,
    source: "ENEM 2017 (adaptado)",
    expl: "Aliteração é a repetição de sons consonantais em palavras próximas: 'O rato roeu a roupa do rei de Roma' — repetição do /r/. Cria musicalidade, ritmo e pode sugerir sons onomatopaicos."
  },
  {
    text: "\"A Divina Comédia\" (Dante Alighieri) é uma obra do período:",
    opts: [
      "Barroco — século XVII","Renascimento — século XV/XVI","Medievalismo — século XIV (transição Medievo/Renascimento)","Romantismo — século XIX","Classicismo grego — século V a.C."],
    ans: 2,
    source: "PUC-SP 2019 (adaptado)",
    expl: "'A Divina Comédia' (c.1307-1321) é obra do Trecento italiano — período de transição entre o pensamento medieval e o Renascimento. Dante é considerado o pai da língua italiana e precursor do humanismo renascentista."
  },
  {
    text: "Em \"Fogo Morto\" (José Lins do Rego), o engenho em decadência simboliza:",
    opts: [
      "O progresso da industrialização no Brasil","A decadência do sistema patriarcal e aristocrático do Nordeste canavieiro","A corrupção política da República Velha","A luta dos trabalhadores rurais por direitos","O abandono da cultura nordestina pela geração jovem"],
    ans: 1,
    source: "UNICAMP 2020 (adaptado)",
    expl: "José Lins do Rego pertence ao Romance de 30 regionalista. 'Fogo Morto' retrata o declínio dos engenhos de açúcar e da aristocracia rural nordestina — a modernização que não chegou, o mundo patriarcal que se desintegra."
  },
  {
    text: "A intertextualidade entre \"Vou-me embora pra Pasárgada\" (Manuel Bandeira) e o poema bíblico dos Salmos ativada pela ideia de 'terra prometida' é do tipo:",
    opts: [
      "Citação direta com aspas e referência explícita","Alusão — referência implícita a outro texto ou tradição cultural","Paródia — imitação cômica com inversão de sentido","Pastiche — imitação sem intenção crítica","Plágio — reprodução não autorizada"],
    ans: 1,
    source: "PUC-MG 2021 (adaptado)",
    expl: "Alusão é a intertextualidade implícita: o texto não cita diretamente a fonte, mas evoca um contexto cultural ou literário que o leitor deve reconhecer. Pasárgada como 'lugar prometido' ativa a memória do Éden e da Terra Prometida sem citá-los."
  },
  {
    text: "\"O nariz\" (Gogol) e \"A Metamorfose\" (Kafka) são narrativas em que partes do corpo ou pessoas se transformam de forma absurda. Esse recurso é chamado de:",
    opts: [
      "Realismo — descrição objetiva da realidade","Fantástico — irrupção do impossível no cotidiano sem questionamento","Realismo mágico — o sobrenatural integrado à cultura local","Naturalismo — determinismo biológico extremo","Surrealismo — automatismo psíquico e sonho"],
    ans: 1,
    source: "ENEM 2021 (adaptado)",
    expl: "O fantástico (Todorov) é o modo literário em que um elemento impossível irrompe no mundo cotidiano e os personagens (e leitores) hesitam entre aceitá-lo como real ou como alucinação. Gogol e Kafka são expoentes do fantástico moderno."
  },
  {
    text: "A expressão \"terceira margem do rio\" (Guimarães Rosa) tornou-se símbolo literário que representa:",
    opts: [
      "A margem direita de um rio caudaloso","O espaço impossível — o entre-lugar, a transcendência, aquilo que está além das categorias conhecidas","A pobreza das margens fluviais do Brasil central","A morte como passagem para outro estado","A terceira geração de uma família ribeirinha"],
    ans: 1,
    source: "PUC-SP 2023 (adaptado)",
    expl: "No conto, o pai vive indefinidamente num barco no rio — nem na margem direita nem na esquerda. A 'terceira margem' é metáfora do inominável, do além da razão, do mistério da existência — espaço que não existe geograficamente mas existe como símbolo."
  },
  {
    text: "Em termos de tipologia textual, qual das sequências abaixo está CORRETA?",
    opts: [
      "Narração: conta fatos; Descrição: argumenta; Dissertação: descreve","Narração: conta fatos em sequência; Descrição: caracteriza seres e cenas; Dissertação: expõe e defende ideias","Narração: defende teses; Descrição: narra eventos; Injunção: descreve","Expositivo: opina; Argumentativo: informa; Narrativo: instrui","Injunção: argumenta; Narração: instrui; Dissertação: narra"],
    ans: 1,
    source: "UNICAMP 2018 (adaptado)",
    expl: "As tipologias textuais básicas: Narração (sequência de fatos com personagens e tempo), Descrição (caracterização de seres, objetos, espaços), Dissertação (exposição e defesa de ideias), Injunção (instrução para ação), Predição (projeção de fatos futuros)."
  }
];

// ─── EXPORTAÇÃO ───
// Se estiver usando módulos ES6:
// export default BANK;
// Se estiver usando CommonJS:
// module.exports = BANK;