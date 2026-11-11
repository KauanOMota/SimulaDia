// ─── SimulaDia · Banco de questões: Linguagens, Códigos e suas Tecnologias ───
// 197 questões autorais no estilo do ENEM, organizadas por disciplina e tema.
//
// Formato de cada questão:
//   id    identificador único (não reutilize nem altere — o histórico do aluno depende dele)
//   disc  disciplina · tema  assunto (usados no treino por tema e nas estatísticas)
//   text  enunciado (use \n para quebrar linha)
//   opts  5 alternativas, na ordem A–E
//   ans   índice da alternativa correta: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E
//   expl  resolução comentada, exibida após a resposta
//
// Para adicionar questões, copie um bloco, use um id novo (ex.: o próximo número livre)
// e rode `node ferramentas/validar-bancos.js` para conferir o banco.

window.BANK_LING = [

  // ══════════ TEXTO E LINGUAGEM ══════════
  {
    id: "lin-001", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "Leia o trecho: \"O texto literário não é um espelho da realidade, mas uma lente que a distorce e amplifica.\" Que recurso de linguagem predomina nessa afirmação?",
    opts: ["Ironia", "Metonímia", "Hipérbole", "Metáfora", "Eufemismo"],
    ans: 3,
    expl: "A frase usa 'espelho' e 'lente' como imagens para falar sobre a literatura, caracterizando a metáfora — comparação implícita sem uso de conectivos comparativos."
  },
  {
    id: "lin-002", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "Leia: \"O governo prometeu melhorias, mas o que chegou ao cidadão foi apenas papel.\" A palavra 'papel' nesse contexto é um exemplo de:",
    opts: ["Metáfora", "Antítese", "Paradoxo", "Pleonasmo", "Metonímia"],
    ans: 4,
    expl: "Usa-se 'papel' (o suporte físico) para representar os documentos e promessas sem efetividade — é metonímia, substituição do todo pela parte ou do concreto pelo abstrato."
  },
  {
    id: "lin-003", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "\"Minha vida é um fio que se rompe a cada instante e se refaz a cada amanhecer.\" Identifique as duas figuras presentes:",
    opts: [
      "Hipérbole e ironia",
      "Metonímia e eufemismo",
      "Antítese e pleonasmo",
      "Catacrese e anáfora",
      "Metáfora e paradoxo"
    ],
    ans: 4,
    expl: "'Fio que se rompe' é metáfora da vida. 'Rompe a cada instante e se refaz a cada amanhecer' apresenta paradoxo — ideia de destruição e recriação simultâneas do mesmo elemento."
  },
  {
    id: "lin-004", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "\"Precisamos de mais cabeças pensando neste projeto.\" O termo 'cabeças' é exemplo de:",
    opts: ["Metáfora", "Sinestesia", "Catacrese", "Metonímia", "Hipérbole"],
    ans: 3,
    expl: "Usa-se 'cabeças' (parte do corpo) para indicar 'pessoas' (o todo) — metonímia da parte pelo todo (sinédoque). A cabeça representa a pessoa pensante."
  },
  {
    id: "lin-005", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "\"Aquela voz tinha cor de mel e textura de seda.\" Qual figura de linguagem está presente?",
    opts: ["Sinestesia", "Personificação", "Antítese", "Hipérbole", "Eufemismo"],
    ans: 0,
    expl: "Sinestesia é a fusão de sensações de modalidades diferentes. Aqui, a audição (voz) é descrita por sensações do paladar (mel) e do tato (seda)."
  },
  {
    id: "lin-006", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "\"Ele é um leão em campo.\" Essa frase é diferente de \"Ele é valente como um leão\" porque:",
    opts: [
      "A primeira usa comparação; a segunda, metáfora",
      "Ambas são metáforas, mas de intensidade diferente",
      "A primeira usa metáfora; a segunda, comparação",
      "A primeira é irônica; a segunda, literal",
      "A primeira usa hipérbole; a segunda, eufemismo"
    ],
    ans: 2,
    expl: "Metáfora é a identificação direta ('é um leão'). Comparação (símile) usa conectivo comparativo explícito ('como um leão'). A primeira frase é metáfora; a segunda, comparação."
  },
  {
    id: "lin-007", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "\"A notícia correu como fogo em palha seca.\" Qual a função da comparação nessa frase?",
    opts: [
      "Informar com precisão a velocidade da propagação da notícia",
      "Criticar os meios de comunicação atuais",
      "Sugerir que a notícia era falsa e perigosa",
      "Intensificar a rapidez e a voracidade com que a notícia se espalha",
      "Descrever o ambiente físico em que a notícia circulou"
    ],
    ans: 3,
    expl: "A comparação 'como fogo em palha seca' intensifica a rapidez e a capacidade de expansão irresistível — o fogo em palha é imagem de velocidade e incontrolabilidade, atribuindo essas qualidades à propagação da notícia."
  },
  {
    id: "lin-008", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "O recurso da ironia funciona porque:",
    opts: [
      "O emissor diz algo falso para enganar o receptor",
      "O receptor não entende o verdadeiro sentido da mensagem",
      "Usa-se vocabulário elevado para falar de assuntos baixos",
      "Existe uma diferença entre o que é dito literalmente e o que se quer comunicar de fato",
      "O emissor exagera propositalmente os fatos narrados"
    ],
    ans: 3,
    expl: "A ironia depende de uma dupla camada de sentido: o que é dito e o que se pretende comunicar são opostos ou divergentes. O receptor reconhece o sentido irônico pelo contexto, pelo tom ou pela incongruência com os fatos."
  },
  {
    id: "lin-009", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "\"Ler é viver outras vidas sem gastar a própria.\" Identifique a figura de linguagem central:",
    opts: ["Hipérbole", "Metáfora", "Metonímia", "Paradoxo", "Personificação"],
    ans: 1,
    expl: "A frase identifica o ato de ler com a experiência de 'viver outras vidas' — comparação implícita (sem conectivo), portanto metáfora. A leitura é o veículo; 'viver outras vidas' é o teor metafórico."
  },
  {
    id: "lin-010", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "O recurso da aliteração consiste na:",
    opts: [
      "Repetição de vogais similares em palavras próximas",
      "Combinação de palavras de sentidos opostos no mesmo verso",
      "Repetição da mesma palavra no início de versos consecutivos",
      "Repetição de consoantes idênticas ou similares em palavras próximas, criando efeito sonoro",
      "Omissão de palavras que podem ser subentendidas pelo contexto"
    ],
    ans: 3,
    expl: "Aliteração é a repetição de sons consonantais em palavras próximas: 'O rato roeu a roupa do rei de Roma' — repetição do /r/. Cria musicalidade, ritmo e pode sugerir sons onomatopaicos."
  },
  {
    id: "lin-011", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "Em “O vento sussurrava segredos entre as árvores”, a figura de linguagem predominante é:",
    opts: ["Metonímia", "Hipérbole", "Personificação (prosopopeia)", "Antítese", "Eufemismo"],
    ans: 2,
    expl: "Atribuir ações ou qualidades humanas (sussurrar segredos) a seres inanimados ou irracionais caracteriza a personificação."
  },
  {
    id: "lin-012", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "Em “Ele partiu desta para melhor”, usa-se uma expressão suave para falar da morte. Essa figura é o:",
    opts: ["Pleonasmo", "Hipérbole", "Paradoxo", "Catacrese", "Eufemismo"],
    ans: 4,
    expl: "O eufemismo atenua uma ideia desagradável ou chocante. O oposto, o disfemismo, intensifica a dureza da expressão."
  },
  {
    id: "lin-013", disc: "Texto e linguagem", tema: "Figuras de linguagem",
    text: "Em “Já te disse um milhão de vezes para arrumar o quarto!”, a figura de linguagem é a:",
    opts: ["Ironia", "Metonímia", "Prosopopeia", "Anáfora", "Hipérbole"],
    ans: 4,
    expl: "A hipérbole é o exagero intencional para dar ênfase. Ninguém repetiu literalmente a ordem um milhão de vezes."
  },
  {
    id: "lin-014", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "A frase \"A gente fomos ao cinema\" representa um exemplo de:",
    opts: [
      "Norma-padrão com concordância correta",
      "Variação linguística regional sem desvio de concordância",
      "Variação linguística popular — concordância com o referente semântico plural",
      "Arcaísmo da língua portuguesa medieval",
      "Erro exclusivo de falantes não nativos"
    ],
    ans: 2,
    expl: "'A gente' gramaticalmente é 3ª pessoa do singular, mas semanticamente refere-se a um grupo (plural). Alguns falantes fazem a concordância com o sentido ('fomos'), não com a forma — variação popular legítima."
  },
  {
    id: "lin-015", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "Linguagem formal e informal diferem principalmente quanto:",
    opts: [
      "À inteligibilidade — a formal é mais difícil de entender",
      "Ao vocabulário usado e ao grau de proximidade entre os interlocutores",
      "Ao canal de comunicação — formal é sempre escrita",
      "À origem histórica — a informal é mais recente",
      "Ao conteúdo — a formal trata de assuntos sérios"
    ],
    ans: 1,
    expl: "O registro formal ou informal depende da relação entre os interlocutores e do contexto de comunicação, refletindo-se principalmente nas escolhas lexicais e nas estruturas sintáticas empregadas."
  },
  {
    id: "lin-016", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "\"No Brasil, a língua portuguesa falada apresenta grandes variações. Cada região tem seu sotaque, seu vocabulário e suas expressões próprias.\" Esse trecho defende a ideia de que:",
    opts: [
      "O português falado no Brasil é incorreto e precisa ser corrigido",
      "Apenas o sotaque carioca é o padrão correto a ser seguido",
      "A variação linguística é um fenômeno natural e enriquecedor da língua",
      "As variações regionais são erros que dificultam a comunicação",
      "O Brasil deveria adotar o português europeu como padrão"
    ],
    ans: 2,
    expl: "O texto descreve as variações sem julgamento de valor negativo — ao apresentá-las como fenômeno natural de cada região, defende implicitamente que a variação linguística é inerente a qualquer língua viva e diversa."
  },
  {
    id: "lin-017", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "O uso de 'nós' e 'a gente' para referir-se ao mesmo grupo é exemplo de:",
    opts: [
      "Erro gramatical a ser corrigido",
      "Uso exclusivo da língua informal baixa",
      "Influência do inglês no português brasileiro",
      "Variação linguística na expressão da primeira pessoa do plural",
      "Fenômeno restrito à fala das crianças"
    ],
    ans: 3,
    expl: "'A gente' como substituto de 'nós' é variação consolidada no português brasileiro — presente em todos os registros e classes sociais. Não é erro; é uma variante que coexiste com 'nós' e segue suas próprias regras de concordância."
  },
  {
    id: "lin-018", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "A língua usada por grupos profissionais específicos (médicos, advogados, informatas) para comunicação interna é chamada de:",
    opts: ["Gíria", "Jargão", "Dialeto", "Língua franca", "Pidgin"],
    ans: 1,
    expl: "Jargão é o conjunto de termos técnicos e expressões específicas de uma área profissional ou grupo especializado. Facilita a comunicação entre especialistas, mas pode excluir leigos — é variação profissional/técnica."
  },
  {
    id: "lin-019", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "\"Tu vai\" e \"Tu vais\" são duas possibilidades de concordância no português brasileiro. A primeira é característica de:",
    opts: [
      "Norma culta escrita",
      "Erro de ortografia",
      "Variação popular — concordância com o sujeito simplificada",
      "Influência do espanhol",
      "Forma exclusiva do português europeu"
    ],
    ans: 2,
    expl: "No português brasileiro falado, 'tu' frequentemente concorda com verbos na 3ª pessoa ('tu vai', 'tu faz') — variante popular amplamente usada em muitas regiões (Nordeste, Sul). 'Tu vais' é a forma da norma padrão."
  },
  {
    id: "lin-020", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "O conceito de 'norma culta' refere-se a:",
    opts: [
      "A língua mais correta e bonita esteticamente",
      "O dialeto da capital federal como modelo a ser seguido",
      "O conjunto de usos linguísticos das pessoas com alto grau de escolaridade em situações formais",
      "A gramática normativa publicada pela Academia Brasileira de Letras",
      "A língua falada pelos professores universitários"
    ],
    ans: 2,
    expl: "Norma culta é descritiva, não prescritiva: refere-se ao conjunto de usos linguísticos observados em falantes com alta escolaridade em situações formais. Não é 'mais correta', mas é a variante de maior prestígio social."
  },
  {
    id: "lin-021", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "Em uma conversa, um falante gaúcho diz “Bah, tchê, que frio!”. O uso de “bah” e “tchê” é um exemplo de variação:",
    opts: [
      "Histórica (diacrônica)",
      "Social de classe",
      "Regional (diatópica)",
      "Situacional entre registro formal e informal",
      "Técnica (jargão profissional)"
    ],
    ans: 2,
    expl: "A variação diatópica está ligada ao lugar onde o falante vive. Expressões, sotaques e vocabulários regionais são legítimos e fazem parte da diversidade do português brasileiro."
  },
  {
    id: "lin-022", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "A palavra “vossa mercê” transformou-se, ao longo dos séculos, em “vosmecê”, “você” e, na fala informal, “cê”. Esse processo exemplifica a variação:",
    opts: [
      "Regional (diatópica)",
      "Situacional",
      "Social (diastrática)",
      "Técnica",
      "Histórica (diacrônica)"
    ],
    ans: 4,
    expl: "As línguas mudam ao longo do tempo. A forma de tratamento reverente “vossa mercê” foi se reduzindo pelo uso até virar pronome comum."
  },
  {
    id: "lin-023", disc: "Texto e linguagem", tema: "Variação linguística",
    text: "O preconceito linguístico manifesta-se quando:",
    opts: [
      "Se ensina a norma-padrão na escola",
      "Se discrimina alguém pelo modo como fala, associando variedades populares a ignorância",
      "Se escolhe a linguagem formal em uma entrevista de emprego",
      "Se estudam os sotaques regionais",
      "Se usa um dicionário para consultar palavras"
    ],
    ans: 1,
    expl: "Como mostra o linguista Marcos Bagno, não existe variedade “errada” do ponto de vista linguístico. O preconceito linguístico costuma mascarar preconceitos sociais e regionais."
  },
  {
    id: "lin-024", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "Um editorial de jornal pertence predominantemente à tipologia textual:",
    opts: ["Narrativa", "Descritiva", "Injuntiva", "Argumentativa", "Expositiva"],
    ans: 3,
    expl: "O editorial expressa a opinião do veículo de comunicação sobre um tema, usando argumentação para convencer o leitor — tipologia argumentativa predominante."
  },
  {
    id: "lin-025", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "\"Leia as instruções antes de usar o aparelho.\" Esse enunciado pertence ao gênero:",
    opts: ["Conto", "Crônica", "Manual de instrução", "Relatório científico", "Carta argumentativa"],
    ans: 2,
    expl: "Manuais de instrução têm função injuntiva (orientar ações do leitor), linguagem objetiva, uso do imperativo ou infinitivo e organização sequencial — características presentes no enunciado."
  },
  {
    id: "lin-026", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "A crônica, gênero jornalístico-literário, distingue-se do artigo de opinião principalmente porque:",
    opts: [
      "A crônica tem caráter mais leve e literário, aproximando-se do cotidiano com subjetividade",
      "A crônica não pode ter opinião do autor",
      "O artigo não pode ser publicado em jornal",
      "O artigo é obrigatoriamente mais curto",
      "A crônica exige dados estatísticos e o artigo, não"
    ],
    ans: 0,
    expl: "A crônica tem tom literário, pessoal e cotidiano, valorizando o estilo do cronista. O artigo de opinião é mais formal e argumentativo, voltado à defesa de uma tese com provas e razões."
  },
  {
    id: "lin-027", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "A charge é um gênero jornalístico-visual que se distingue da caricatura porque:",
    opts: [
      "A charge exagera traços físicos; a caricatura critica eventos",
      "A charge usa apenas texto; a caricatura usa apenas imagem",
      "A charge é exclusivamente digital; a caricatura é impressa",
      "A charge critica um evento ou situação específica e datada; a caricatura exagera traços para retratar uma personalidade",
      "Não há diferença — são sinônimos"
    ],
    ans: 3,
    expl: "A charge critica um fato político ou social específico e é efêmera (presa ao contexto). A caricatura exagera traços físicos para retratar uma personalidade de forma cômica ou crítica — tem caráter mais duradouro."
  },
  {
    id: "lin-028", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "O título de um texto jornalístico tem função primordialmente:",
    opts: [
      "Informativa e atrativa — sintetiza o conteúdo e capta a atenção do leitor",
      "Decorativa — embeleza o layout da página",
      "Argumentativa — defende a tese principal do artigo",
      "Poética — usa figuras de linguagem para criar efeito estético",
      "Injuntiva — orienta o leitor sobre como ler o texto"
    ],
    ans: 0,
    expl: "O título jornalístico cumpre dupla função: informar (indica o tema central) e atrair (desperta a curiosidade para a leitura completa)."
  },
  {
    id: "lin-029", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "Em uma charge política, o exagero dos traços físicos de um político tem função de:",
    opts: [
      "Retratar com fidelidade fotográfica o personagem",
      "Ofender a honra do político sem intenção crítica",
      "Demonstrar as habilidades técnicas do artista gráfico",
      "Satirizar e criticar as características ou ações do personagem de forma cômica e engajada",
      "Informar sobre os acontecimentos políticos de forma neutra"
    ],
    ans: 3,
    expl: "A caricatura/charge usa o exagero (hipérbole visual) como recurso retórico para satirizar — a distorção intencional dos traços físicos representa simbolicamente os defeitos morais, políticos ou pessoais do retratado."
  },
  {
    id: "lin-030", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "Em termos de tipologia textual, qual das sequências abaixo está CORRETA?",
    opts: [
      "Narração: conta fatos; Descrição: argumenta; Dissertação: descreve",
      "Narração: defende teses; Descrição: narra eventos; Injunção: descreve",
      "Expositivo: opina; Argumentativo: informa; Narrativo: instrui",
      "Injunção: argumenta; Narração: instrui; Dissertação: narra",
      "Narração: conta fatos em sequência; Descrição: caracteriza seres e cenas; Dissertação: expõe e defende ideias"
    ],
    ans: 4,
    expl: "As tipologias textuais básicas: Narração (sequência de fatos com personagens e tempo), Descrição (caracterização de seres, objetos, espaços), Dissertação (exposição e defesa de ideias), Injunção (instrução para ação), Predição (projeção de fatos futuros)."
  },
  {
    id: "lin-031", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "Uma notícia de jornal costuma apresentar no primeiro parágrafo (lide) as informações essenciais do fato. Essas informações respondem às perguntas:",
    opts: [
      "Qual a opinião do jornalista sobre o fato",
      "Quanto custou o jornal",
      "Qual é a moral da história",
      "O quê, quem, quando, onde, como e por quê",
      "Quem é o leitor do jornal"
    ],
    ans: 3,
    expl: "O lide resume o fato para o leitor apressado. A notícia privilegia a impessoalidade e a ordem decrescente de importância (pirâmide invertida)."
  },
  {
    id: "lin-032", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "O artigo de opinião e o editorial são gêneros argumentativos. A principal diferença entre eles é que:",
    opts: [
      "O editorial é sempre assinado por um leitor",
      "O artigo de opinião não pode apresentar argumentos",
      "O editorial é um texto narrativo de ficção",
      "Apenas o artigo de opinião é publicado em jornais",
      "O artigo de opinião é assinado e expressa a visão de seu autor; o editorial expressa a posição do próprio veículo"
    ],
    ans: 4,
    expl: "O editorial, geralmente sem assinatura, representa a voz institucional do jornal ou revista. O artigo de opinião é de responsabilidade de quem o assina, que pode ou não concordar com o veículo."
  },
  {
    id: "lin-033", disc: "Texto e linguagem", tema: "Gêneros textuais",
    text: "Um texto que circula nas redes sociais apresenta título alarmista, nenhuma fonte identificável e pede para ser compartilhado “antes que apaguem”. Um leitor crítico deve:",
    opts: [
      "Compartilhar imediatamente para alertar outras pessoas",
      "Acreditar, pois textos virais costumam ser verdadeiros",
      "Desconfiar e verificar a informação em fontes confiáveis antes de compartilhar",
      "Confiar no texto porque usa letras maiúsculas",
      "Considerar a informação verdadeira por ter muitas curtidas"
    ],
    ans: 2,
    expl: "Apelo à urgência, ausência de autoria e de fontes são indícios de desinformação. Checar em veículos reconhecidos e agências de checagem é parte do letramento digital."
  },
  {
    id: "lin-034", disc: "Texto e linguagem", tema: "Semântica",
    text: "Qual par de palavras apresenta relação de antonímia?",
    opts: ["Mérito / méritos", "Veloz / rápido", "Amor / ódio", "Livro / livraria", "Casa / lar"],
    ans: 2,
    expl: "Antonímia é a relação entre palavras de sentidos opostos. 'Amor' e 'ódio' são antônimos. 'Veloz/rápido' são sinônimos; 'livro/livraria' têm relação de produto/lugar; 'casa/lar' são quase sinônimos."
  },
  {
    id: "lin-035", disc: "Texto e linguagem", tema: "Semântica",
    text: "\"Ele tem um coração de pedra.\" O sentido da expressão é:",
    opts: [
      "Denotativo — descreve uma condição médica",
      "Conotativo — indica insensibilidade emocional",
      "Técnico — pertence ao vocabulário da medicina",
      "Literal — o coração é feito de pedra",
      "Arcaico — expressão fora de uso"
    ],
    ans: 1,
    expl: "A expressão usa 'pedra' em sentido conotativo (figurado), não literal. 'Coração de pedra' é uma expressão idiomática que significa pessoa fria, sem compaixão."
  },
  {
    id: "lin-036", disc: "Texto e linguagem", tema: "Semântica",
    text: "\"Cada macaco no seu galho\" é um exemplo de:",
    opts: [
      "Neologismo",
      "Provérbio/ditado popular",
      "Estrangeirismo",
      "Jargão técnico",
      "Gíria juvenil"
    ],
    ans: 1,
    expl: "Provérbios e ditados populares são enunciados breves de uso tradicional que expressam um saber coletivo. Pertencem à linguagem figurada e à cultura popular oral."
  },
  {
    id: "lin-037", disc: "Texto e linguagem", tema: "Semântica",
    text: "\"Saudade\" é considerada uma palavra de difícil tradução para outros idiomas porque:",
    opts: [
      "É uma palavra técnica sem equivalente no léxico estrangeiro",
      "Expressa um estado emocional específico da cultura lusófona, sem equivalência exata em outras línguas",
      "Pertence ao vocabulário arcaico e está em desuso",
      "Foi criada artificialmente por decreto governamental",
      "Só pode ser compreendida por falantes nativos do português europeu"
    ],
    ans: 1,
    expl: "'Saudade' encapsula um sentimento complexo de nostalgia afetiva ligado à cultura lusófona — exemplifica como línguas recortam a experiência de modo singular, sem equivalência exata em outras culturas."
  },
  {
    id: "lin-038", disc: "Texto e linguagem", tema: "Semântica",
    text: "\"O pão que o diabo amassou\" — essa expressão idiomática significa:",
    opts: [
      "Uma receita de pão muito difícil",
      "Uma situação muito trabalhosa e sofrida",
      "Um produto alimentício de má qualidade",
      "Uma pessoa extremamente malvada",
      "Uma punição severa e injusta"
    ],
    ans: 1,
    expl: "Expressões idiomáticas têm sentido figurado não dedutível das palavras isoladas. 'O pão que o diabo amassou' equivale a 'muito sofrimento', 'situação muito difícil de suportar' — registro popular da língua."
  },
  {
    id: "lin-039", disc: "Texto e linguagem", tema: "Semântica",
    text: "\"O crime não compensa\" — a frase usa a palavra 'crime' em sentido:",
    opts: [
      "Denotativo literal — ato ilegal",
      "Técnico-jurídico preciso",
      "Conotativo amplo — qualquer coisa muito prejudicial",
      "Irônico — insinua que o crime pode compensar",
      "Eufemístico — substitui palavra mais grave"
    ],
    ans: 0,
    expl: "Em seu sentido mais direto, 'crime' aqui é denotativo: refere-se a atos ilegais. A frase é um provérbio no sentido literal — praticar crimes não traz vantagem a longo prazo."
  },
  {
    id: "lin-040", disc: "Texto e linguagem", tema: "Coesão e coerência",
    text: "Um texto coeso é aquele que:",
    opts: [
      "Apresenta ideias pertinentes ao tema proposto",
      "Expõe argumentos bem fundamentados e lógicos",
      "Usa mecanismos linguísticos que garantem a ligação entre as partes do texto",
      "Respeita a norma-padrão da língua portuguesa",
      "Tem parágrafos curtos e objetivos"
    ],
    ans: 2,
    expl: "Coesão é a propriedade textual relacionada aos mecanismos linguísticos (pronomes, conectivos, elipses, etc.) que articulam as partes do texto. Coerência, por sua vez, refere-se à lógica das ideias."
  },
  {
    id: "lin-041", disc: "Texto e linguagem", tema: "Coesão e coerência",
    text: "Um texto com boa coerência é aquele que:",
    opts: [
      "Usa muitos conectivos para ligar as frases",
      "Apresenta ideias logicamente articuladas e sem contradições, formando um todo com sentido",
      "Tem parágrafos de tamanho uniforme",
      "Segue rigorosamente as regras gramaticais",
      "Usa vocabulário variado sem repetição"
    ],
    ans: 1,
    expl: "Coerência textual é a propriedade semântica do texto: as ideias devem ser logicamente compatíveis, sem contradições, e devem se articular em torno de um fio condutor que dê unidade e sentido ao todo."
  },
  {
    id: "lin-042", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "\"Querido diário, hoje foi um dia difícil...\" Qual função da linguagem predomina nessa abertura?",
    opts: ["Referencial", "Fática", "Conativa", "Emotiva", "Metalinguística"],
    ans: 3,
    expl: "A função emotiva (ou expressiva) centra-se no emissor e na expressão de seus estados emocionais e subjetivos — característica de diários, cartas pessoais e poesia lírica."
  },
  {
    id: "lin-043", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "\"Alô? Está me ouvindo?\" é um enunciado em que predomina a função:",
    opts: ["Poética", "Referencial", "Fática", "Metalinguística", "Conativa"],
    ans: 2,
    expl: "A função fática (de contato) verifica ou mantém o canal de comunicação aberto. 'Alô?', 'Está me ouvindo?' buscam confirmar se a conexão entre emissor e receptor está funcionando."
  },
  {
    id: "lin-044", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "\"Esta redação trata das redações.\" A função da linguagem presente nessa frase é:",
    opts: ["Referencial", "Emotiva", "Conativa", "Poética", "Metalinguística"],
    ans: 4,
    expl: "A metalinguagem ocorre quando a linguagem fala de si mesma. Na frase, a redação (código) tem como tema a própria redação — o código é o objeto da mensagem."
  },
  {
    id: "lin-045", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "Em um poema, a preocupação com a sonoridade, o ritmo, as rimas e a disposição gráfica das palavras indica predominância da função:",
    opts: ["Poética", "Referencial", "Fática", "Emotiva", "Conativa"],
    ans: 0,
    expl: "A função poética (Jakobson) centra-se na mensagem em si — na forma do enunciado, na sonoridade, no ritmo, na escolha das palavras como elementos de prazer estético. É a função dominante na literatura."
  },
  {
    id: "lin-046", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "\"Vote no candidato X — ele vai mudar o Brasil!\" Que função da linguagem predomina?",
    opts: ["Referencial", "Poética", "Metalinguística", "Fática", "Conativa"],
    ans: 4,
    expl: "A função conativa (apelativa) visa influenciar o comportamento do receptor — é voltada para o destinatário. O imperativo ('Vote'), o pronome 'você' implícito e a intenção persuasiva caracterizam essa função."
  },
  {
    id: "lin-047", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "\"A gramática é o conjunto de regras que descrevem o funcionamento de uma língua.\" Nessa definição, a linguagem fala sobre si mesma — isso é a função:",
    opts: ["Referencial", "Metalinguística", "Fática", "Poética", "Emotiva"],
    ans: 1,
    expl: "Função metalinguística: o código (linguagem) é usado para explicar o próprio código. Definições, gramáticas, dicionários e textos que falam sobre como a língua funciona são exemplos de metalinguagem."
  },
  {
    id: "lin-048", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "— Oi, tudo bem?\n— Tudo, e você?\n— Tudo certo, tudo certo...\nNesse diálogo, predomina a função da linguagem:",
    opts: ["Fática", "Poética", "Referencial", "Emotiva", "Conativa"],
    ans: 0,
    expl: "As falas não trazem informação nova: servem para abrir e manter o contato entre os interlocutores. Essa é a função fática, centrada no canal de comunicação."
  },
  {
    id: "lin-049", disc: "Texto e linguagem", tema: "Funções da linguagem",
    text: "Um verbete de dicionário que explica o significado da palavra “palavra” apresenta predominantemente a função:",
    opts: ["Metalinguística", "Emotiva", "Fática", "Poética", "Conativa"],
    ans: 0,
    expl: "Quando o código explica o próprio código, há metalinguagem. Dicionários e gramáticas são exemplos típicos."
  },
  {
    id: "lin-050", disc: "Texto e linguagem", tema: "Argumentação",
    text: "Em textos publicitários, o uso de figuras de pessoas famosas tem o objetivo principal de:",
    opts: [
      "Transferir a imagem positiva do famoso para o produto, persuadindo o consumidor",
      "Informar o público sobre as qualidades técnicas do produto",
      "Cumprir exigência legal de identificação do anunciante",
      "Substituir a linguagem verbal pela não verbal",
      "Reduzir o custo de produção da campanha"
    ],
    ans: 0,
    expl: "O uso de celebridades é estratégia de persuasão: os atributos positivos associados ao famoso (sucesso, beleza, confiança) são transferidos simbolicamente ao produto — argumento de autoridade e identificação."
  },
  {
    id: "lin-051", disc: "Texto e linguagem", tema: "Argumentação",
    text: "\"Embora o acesso à internet tenha crescido, a exclusão digital ainda atinge milhões de brasileiros.\" Esse período é um bom exemplo de:",
    opts: [
      "Introdução de parágrafo com tópico frase afirmativa direta",
      "Conclusão que retoma a tese principal",
      "Argumento de autoridade baseado em dados",
      "Uso de concessão para apresentar a complexidade do tema",
      "Exemplificação de um conceito abstrato"
    ],
    ans: 3,
    expl: "'Embora...' introduz uma concessão: reconhece o avanço (o que o adversário diria) para depois mostrar a limitação real. É estratégia argumentativa eficaz que demonstra visão crítica e não superficial do tema."
  },
  {
    id: "lin-052", disc: "Texto e linguagem", tema: "Argumentação",
    text: "\"Drummond é o maior poeta brasileiro do século XX.\" Essa afirmação é:",
    opts: [
      "Juízo de valor — opinião que pode ser sustentada por argumentos mas não comprovada como fato",
      "Fato objetivo comprovável por critérios universais",
      "Falácia argumentativa que generaliza sem base",
      "Metáfora sobre a grandeza da poesia",
      "Dado estatístico baseado em pesquisas de preferência"
    ],
    ans: 0,
    expl: "Julgamentos estéticos ('o maior', 'o melhor') são juízos de valor, não fatos verificáveis objetivamente. Podem ser sustentados por argumentos (crítica literária, influência, reconhecimento), mas pertencem ao domínio da opinião fundamentada."
  },
  {
    id: "lin-053", disc: "Texto e linguagem", tema: "Argumentação",
    text: "Em uma redação, o autor escreve: “Segundo dados do IBGE, cerca de 7% dos brasileiros com 15 anos ou mais são analfabetos.” Esse recurso argumentativo baseia-se em:",
    opts: [
      "Opinião pessoal sem fundamento",
      "Narração de uma experiência íntima",
      "Dados estatísticos de fonte reconhecida",
      "Apelo emocional exagerado",
      "Ironia e humor"
    ],
    ans: 2,
    expl: "Citar dados de instituições confiáveis (argumento por evidência) torna o texto mais convincente. A taxa de analfabetismo de 15 anos ou mais ficou em torno de 7% no Censo 2022."
  },
  {
    id: "lin-054", disc: "Texto e linguagem", tema: "Argumentação",
    text: "O argumento “Todo mundo está comprando esse celular, então ele deve ser o melhor” é uma falácia porque:",
    opts: [
      "A popularidade de algo não comprova sua qualidade (apelo à maioria)",
      "Apresenta dados técnicos detalhados",
      "Cita uma autoridade no assunto",
      "Usa uma comparação entre dois produtos",
      "Baseia-se em uma pesquisa científica"
    ],
    ans: 0,
    expl: "O apelo à maioria (argumentum ad populum) tenta provar algo pelo número de pessoas que o aceitam. Publicidades usam esse recurso com frequência."
  },
  {
    id: "lin-055", disc: "Texto e linguagem", tema: "Intertextualidade",
    text: "A linguagem dos memes digitais combina elementos verbais e visuais para produzir humor ou crítica. Esse fenômeno é um exemplo de:",
    opts: [
      "Linguagem exclusivamente verbal",
      "Norma culta da língua",
      "Variação diacrônica",
      "Intertextualidade e multimodalidade",
      "Gênero literário clássico"
    ],
    ans: 3,
    expl: "Memes são textos multimodais (verbal + visual) que frequentemente evocam outros textos ou imagens já conhecidas (intertextualidade), recontextualizando-os para produzir novos sentidos."
  },
  {
    id: "lin-056", disc: "Texto e linguagem", tema: "Intertextualidade",
    text: "Na análise discursiva, o conceito de 'interdiscurso' refere-se a:",
    opts: [
      "O diálogo entre dois personagens de um mesmo texto",
      "A adequação do texto ao registro formal",
      "A relação de um discurso com outros discursos que o precederam e o condicionam",
      "O uso de referências bibliográficas no texto científico",
      "A coerência interna de um único discurso"
    ],
    ans: 2,
    expl: "Interdiscurso (Pêcheux) é o conjunto de discursos anteriores que sustentam e condicionam o discurso atual — todo discurso é atravessado por outros discursos, mesmo que de forma implícita."
  },
  {
    id: "lin-057", disc: "Texto e linguagem", tema: "Intertextualidade",
    text: "Um anúncio de agência de viagens diz: “Minha terra tem palmeiras... e pacotes com 30% de desconto!”. O texto faz referência à “Canção do exílio”, de Gonçalves Dias, por meio de:",
    opts: [
      "Citação literal com indicação de autoria",
      "Tradução do poema para outro idioma",
      "Paráfrase que mantém o sentido original",
      "Paródia, que retoma o texto original alterando seu sentido com fins persuasivos e humorísticos",
      "Plágio sem relação com o texto original"
    ],
    ans: 3,
    expl: "A paródia recria um texto conhecido com novo sentido, muitas vezes crítico ou cômico. A “Canção do exílio” é um dos textos mais parodiados da literatura brasileira."
  },
  {
    id: "lin-058", disc: "Texto e linguagem", tema: "Interpretação",
    text: "Leia o anúncio:\n“Antes de imprimir, pense na sua responsabilidade com o meio ambiente.”\nO principal objetivo desse texto, comum em rodapés de e-mails, é:",
    opts: [
      "Informar o preço do papel",
      "Influenciar o comportamento do leitor para reduzir o consumo de papel",
      "Narrar uma experiência pessoal do remetente",
      "Ensinar como usar uma impressora",
      "Descrever o processo de fabricação do papel"
    ],
    ans: 1,
    expl: "O texto apela ao leitor (função conativa), buscando mudar uma ação — evitar impressões desnecessárias. É um exemplo de texto publicitário de conscientização."
  },
  {
    id: "lin-059", disc: "Texto e linguagem", tema: "Interpretação",
    text: "Uma tirinha mostra um menino diante de uma pilha de livros, dizendo: “Vou ler todos eles!”. No último quadro, ele aparece dormindo sobre o primeiro livro, ainda na página 1. O humor da tirinha resulta:",
    opts: [
      "Da descrição objetiva de um hábito de leitura",
      "Da crítica ao preço dos livros",
      "Da exaltação do esforço do personagem",
      "Da linguagem técnica usada pelo menino",
      "Da quebra de expectativa entre a promessa ambiciosa e o resultado"
    ],
    ans: 4,
    expl: "O humor nasce do contraste entre o que se anuncia e o que acontece. A tirinha combina linguagem verbal e não verbal, e o último quadro desfaz a expectativa criada no primeiro."
  },

  // ══════════ GRAMÁTICA ══════════
  {
    id: "lin-060", disc: "Gramática", tema: "Conjunções e coesão",
    text: "\"A língua é o maior bem imaterial de um povo.\" O conectivo implícito que melhor relaciona essa frase com \"Por isso, devemos preservá-la\" é de:",
    opts: ["Oposição", "Concessão", "Conclusão", "Adição", "Explicação"],
    ans: 2,
    expl: "'Por isso' é conjunção conclusiva: a segunda oração conclui o raciocínio iniciado na primeira."
  },
  {
    id: "lin-061", disc: "Gramática", tema: "Conjunções e coesão",
    text: "Leia: \"O governo anunciou medidas para combater a inflação. Tais medidas, porém, foram criticadas pelos economistas.\" O conectivo 'porém' estabelece relação de:",
    opts: ["Oposição/adversidade", "Conclusão", "Adição", "Causa", "Explicação"],
    ans: 0,
    expl: "'Porém' é conjunção coordenativa adversativa — introduz uma ideia que se opõe ou contrasta com a anterior. Equivale a 'mas', 'contudo', 'entretanto', 'todavia'."
  },
  {
    id: "lin-062", disc: "Gramática", tema: "Conjunções e coesão",
    text: "\"Mal ele entrou, a festa acabou.\" Nessa frase, 'mal' equivale a:",
    opts: [
      "Logo que / assim que",
      "Embora / mesmo que",
      "Porque / já que",
      "Se / caso",
      "Antes que / para que"
    ],
    ans: 0,
    expl: "'Mal' como conjunção temporal equivale a 'assim que', 'logo que', 'no momento em que' — indica simultaneidade ou imediatidade entre as duas ações."
  },
  {
    id: "lin-063", disc: "Gramática", tema: "Concordância",
    text: "Assinale a alternativa em que a concordância verbal está correta segundo a norma-padrão:",
    opts: [
      "Fazem cinco anos que não o vejo.",
      "Deve haver muitos candidatos inscritos.",
      "Existem muita gente disposta a ajudar.",
      "Houveram muitos problemas na eleição.",
      "Fazem anos que não nos falamos, e precisamos conversar."
    ],
    ans: 1,
    expl: "'Haver' no sentido de existir é impessoal — fica no singular. 'Deve haver' está correto. 'Fazem'/'Houveram' seriam erros; o certo é 'Faz'/'Houve'."
  },
  {
    id: "lin-064", disc: "Gramática", tema: "Concordância",
    text: "Qual das frases abaixo apresenta ERRO de concordância nominal?",
    opts: [
      "As alunas estavam satisfeitas com o resultado.",
      "É necessário bastantes explicações para entender o tema.",
      "Havia muitas pessoas no evento.",
      "Ficaram ambas caladas diante da pergunta.",
      "Eles próprios resolveram o problema."
    ],
    ans: 1,
    expl: "Em “É necessário bastantes explicações”, o sujeito (“bastantes explicações”) vem determinado e no plural, então o predicativo deve concordar com ele: “São necessárias bastantes explicações”. As outras frases seguem a norma-padrão."
  },
  {
    id: "lin-065", disc: "Gramática", tema: "Pronomes",
    text: "Em \"Ele se feriu\", o pronome 'se' indica:",
    opts: [
      "Reflexividade — o sujeito pratica e sofre a ação",
      "Reciprocidade entre dois sujeitos",
      "Voz passiva sintética",
      "Índice de indeterminação do sujeito",
      "Partícula expletiva sem função sintática"
    ],
    ans: 0,
    expl: "O sujeito ('Ele') pratica e recebe a mesma ação — reflexividade. Se fosse 'Vendem-se casas', seria partícula apassivadora; 'Come-se bem aqui', índice de indeterminação."
  },
  {
    id: "lin-066", disc: "Gramática", tema: "Pronomes",
    text: "\"Cuide-se\" — o pronome 'se' nessa construção é:",
    opts: [
      "Pronome reflexivo — o sujeito implícito pratica e recebe a ação",
      "Partícula apassivadora",
      "Índice de indeterminação do sujeito",
      "Pronome recíproco",
      "Expletivo sem função"
    ],
    ans: 0,
    expl: "'Cuide-se' (imperativo + se): o sujeito implícito (você) deve cuidar de si mesmo — é uso reflexivo. Compare: 'Vende-se casa' (apassivador) ou 'Come-se bem aqui' (indeterminação)."
  },
  {
    id: "lin-067", disc: "Gramática", tema: "Pronomes",
    text: "Em \"Todos os alunos foram aprovados, inclusive eu\", o pronome 'eu' está correto porque:",
    opts: [
      "Após 'inclusive', usa-se sempre o pronome reto",
      "O pronome exerce função de sujeito da oração implícita '(inclusive) eu fui aprovado'",
      "Em final de frase, usa-se sempre o pronome reto",
      "Após vírgula, o pronome oblíquo seria errado",
      "É regra da língua culta usar 'eu' após 'inclusive'"
    ],
    ans: 1,
    expl: "'Inclusive eu' = 'inclusive eu fui aprovado' — o pronome exerce função de sujeito da oração subentendida. Pronomes retos exercem função de sujeito; oblíquos, de objeto. Por isso 'eu' (reto/sujeito), não 'mim'."
  },
  {
    id: "lin-068", disc: "Gramática", tema: "Crase",
    text: "Qual das frases abaixo apresenta crase obrigatória?",
    opts: [
      "Ele foi a pé até a escola.",
      "Refiro-me a uma questão importante.",
      "Às três horas, a reunião terá início.",
      "A carta foi enviada a ela.",
      "Ele chegou a tempo."
    ],
    ans: 2,
    expl: "Crase ocorre com locução adverbial de tempo feminina determinada: 'às três horas' = a + as. Pronomes pessoais, substantivos sem artigo e locuções masculinas não admitem crase."
  },
  {
    id: "lin-069", disc: "Gramática", tema: "Tempos e modos verbais",
    text: "\"Se eu soubesse a resposta, teria respondido.\" Essa frase expressa uma condição:",
    opts: [
      "Real e possível no presente",
      "Irreal no passado — hipótese que não se realizou",
      "Possível no futuro",
      "Necessária e certa",
      "Habitual no passado"
    ],
    ans: 1,
    expl: "O imperfeito do subjuntivo ('soubesse') + futuro do pretérito ('teria respondido') forma período hipotético irreal no passado: a condição não foi atendida."
  },
  {
    id: "lin-070", disc: "Gramática", tema: "Período composto",
    text: "Indique a oração em que 'que' funciona como conjunção integrante:",
    opts: [
      "Espero que você venha.",
      "O livro que comprei é ótimo.",
      "Que bela paisagem!",
      "Ele correu tanto que caiu.",
      "Já que choveu, ficamos em casa."
    ],
    ans: 0,
    expl: "Em 'Espero que você venha', o 'que' introduz uma oração subordinada substantiva objetiva direta — é conjunção integrante, sem função sintática dentro da oração que introduz."
  },
  {
    id: "lin-071", disc: "Gramática", tema: "Período composto",
    text: "Na frase \"O menino que ganhou o prêmio é meu primo\", a oração 'que ganhou o prêmio' é:",
    opts: [
      "Oração coordenada sindética aditiva",
      "Oração subordinada adjetiva restritiva",
      "Oração subordinada adverbial causal",
      "Oração subordinada substantiva objetiva direta",
      "Oração subordinada adjetiva explicativa"
    ],
    ans: 1,
    expl: "A oração 'que ganhou o prêmio' é subordinada adjetiva (modifica o substantivo 'menino') e restritiva (delimita, sem vírgulas, o referente — não é qualquer menino, mas aquele que ganhou)."
  },
  {
    id: "lin-072", disc: "Gramática", tema: "Período composto",
    text: "\"Ela chegou, sorriu e saiu.\" Os verbos coordenados indicam:",
    opts: [
      "Ações simultâneas",
      "Ações condicionadas entre si",
      "Ações em sequência temporal",
      "Ações opostas",
      "Ações hipotéticas"
    ],
    ans: 2,
    expl: "A coordenação aditiva com 'e' entre verbos do pretérito perfeito indica uma sequência temporal: primeiro chegou, depois sorriu, depois saiu — eventos sucessivos narrados na ordem em que ocorreram."
  },
  {
    id: "lin-073", disc: "Gramática", tema: "Período composto",
    text: "Em “Embora estivesse cansado, ele terminou o trabalho”, a oração destacada estabelece com a principal uma relação de:",
    opts: ["Causa", "Concessão", "Condição", "Finalidade", "Consequência"],
    ans: 1,
    expl: "A oração concessiva apresenta um fato que poderia impedir o outro, mas não impede. Equivalentes de “embora”: “ainda que”, “mesmo que”, “apesar de que”."
  },
  {
    id: "lin-074", disc: "Gramática", tema: "Período composto",
    text: "No período “Estudou tanto que passou no vestibular”, a oração “que passou no vestibular” exprime:",
    opts: ["Consequência", "Causa", "Concessão", "Comparação", "Tempo"],
    ans: 0,
    expl: "A estrutura “tanto... que” indica que o segundo fato é resultado da intensidade do primeiro: oração subordinada adverbial consecutiva."
  },
  {
    id: "lin-075", disc: "Gramática", tema: "Classes de palavras",
    text: "A função sintática de 'muito' em \"Ela trabalhou muito\" é de:",
    opts: [
      "Adjetivo que modifica o sujeito",
      "Substantivo predicativo",
      "Objeto direto do verbo",
      "Advérbio que modifica o verbo",
      "Adjunto adnominal do sujeito"
    ],
    ans: 3,
    expl: "'Muito' modifica o verbo 'trabalhou' — indica intensidade da ação. Quando modifica verbo, adjetivo ou outro advérbio, 'muito' é advérbio."
  },
  {
    id: "lin-076", disc: "Gramática", tema: "Classes de palavras",
    text: "\"Correu muito\" e \"Ela é muito bonita\" — em qual das frases 'muito' é advérbio?",
    opts: [
      "Em ambas, pois modifica verbo e adjetivo respectivamente",
      "Apenas na primeira",
      "Apenas na segunda",
      "Em nenhuma — é pronome indefinido em ambas",
      "Em ambas, mas com funções de adjetivo"
    ],
    ans: 0,
    expl: "Advérbio modifica verbo, adjetivo ou outro advérbio. Na 1ª frase, 'muito' modifica o verbo 'correu'; na 2ª, modifica o adjetivo 'bonita'. Em ambos os casos é advérbio de intensidade."
  },
  {
    id: "lin-077", disc: "Gramática", tema: "Classes de palavras",
    text: "Em “Ela estava meio cansada”, a palavra “meio” é:",
    opts: [
      "Numeral, que deveria concordar: “meia cansada”",
      "Advérbio, invariável, equivalente a “um pouco”",
      "Substantivo, que significa “centro”",
      "Adjetivo, que deveria ir para o plural",
      "Preposição"
    ],
    ans: 1,
    expl: "Quando modifica um adjetivo com o sentido de “um pouco”, “meio” é advérbio e não varia. Já em “meia garrafa”, é numeral e concorda com o substantivo."
  },
  {
    id: "lin-078", disc: "Gramática", tema: "Pontuação",
    text: "Em qual alternativa o uso das aspas está INCORRETO?",
    opts: [
      "Ele disse: \"Não vou comparecer à reunião.\"",
      "O \"saudosismo\" é tema recorrente na poesia de Bandeira.",
      "\"Qual é a data da prova\"? perguntou o aluno.",
      "Ela usou a palavra \"saudade\" três vezes no discurso.",
      "O filme \"Cidadão Kane\" é considerado o melhor de todos os tempos."
    ],
    ans: 2,
    expl: "Quando a interrogação faz parte do discurso direto, o ponto de interrogação fica dentro das aspas: '\"Qual é a data da prova?\" perguntou o aluno.' O ponto de interrogação após as aspas estaria errado."
  },
  {
    id: "lin-079", disc: "Gramática", tema: "Pontuação",
    text: "\"Comprei frutas, verduras e legumes.\" Nessa frase, a vírgula separa:",
    opts: [
      "Orações coordenadas",
      "Oração principal de subordinada",
      "Aposto explicativo",
      "Adjunto adverbial antecipado",
      "Termos de uma enumeração (elementos em série)"
    ],
    ans: 4,
    expl: "Quando há enumeração de termos de mesma função sintática, separam-se com vírgulas. 'Frutas, verduras e legumes' são três objetos diretos em série — vírgulas separam os termos até o último, precedido de 'e'."
  },
  {
    id: "lin-080", disc: "Gramática", tema: "Pontuação",
    text: "Em “Pedro, venha jantar!”, a vírgula separa:",
    opts: ["O aposto", "O vocativo", "O sujeito do verbo", "O adjunto adverbial", "O objeto direto"],
    ans: 1,
    expl: "Vocativo é o termo usado para chamar ou interpelar alguém. Ele sempre vem isolado por vírgula. Não se deve separar sujeito e verbo por vírgula: em “Pedro veio jantar”, não há vírgula."
  },
  {
    id: "lin-081", disc: "Gramática", tema: "Pontuação",
    text: "Na frase “Machado de Assis, fundador da Academia Brasileira de Letras, nasceu no Rio de Janeiro”, o trecho entre vírgulas é:",
    opts: [
      "Um vocativo",
      "O predicado da oração",
      "Um adjunto adverbial de lugar",
      "Um aposto explicativo",
      "O objeto indireto"
    ],
    ans: 3,
    expl: "O aposto explicativo acrescenta uma informação sobre o termo anterior e vem isolado por vírgulas, travessões ou parênteses."
  },
  {
    id: "lin-082", disc: "Gramática", tema: "Vozes verbais",
    text: "\"O livro foi lido pela professora\" está na voz passiva analítica. Para transformá-la em passiva sintética, seria:",
    opts: [
      "\"A professora leu o livro\"",
      "\"O livro leu-se pela professora\"",
      "\"Leu-se o livro\"",
      "\"Foi lido o livro\"",
      "\"O livro que foi lido\""
    ],
    ans: 2,
    expl: "Voz passiva sintética = verbo + partícula 'se': 'Leu-se o livro' (equivale a 'O livro foi lido'). O agente da passiva ('pela professora') é omitido. A passiva analítica usa 'ser + particípio'."
  },
  {
    id: "lin-083", disc: "Gramática", tema: "Regência",
    text: "De acordo com a norma-padrão, a frase com regência verbal correta é:",
    opts: [
      "Assistimos o filme ontem à noite.",
      "Prefiro mais cinema do que teatro.",
      "Ele namora com a vizinha.",
      "Esqueci do seu aniversário.",
      "Assistimos ao filme ontem à noite."
    ],
    ans: 4,
    expl: "No sentido de ver, “assistir” pede a preposição “a”. “Preferir” dispensa “mais” e pede “a” (prefiro cinema a teatro), “namorar” é transitivo direto e “esquecer” sem pronome não leva “de”."
  },
  {
    id: "lin-084", disc: "Gramática", tema: "Ortografia",
    text: "Assinale a frase em que o uso de “porque”, “por que”, “porquê” ou “por quê” está de acordo com a norma-padrão:",
    opts: [
      "Ele saiu cedo por quê estava cansado.",
      "Porque você não veio à aula?",
      "Ninguém entendeu o por que da decisão.",
      "Não sei por que ele saiu tão cedo.",
      "Você faltou porquê?"
    ],
    ans: 3,
    expl: "“Por que” (separado, sem acento) é usado em perguntas e quando equivale a “pelo qual” ou “motivo pelo qual”. “Porque” introduz explicação; “porquê” é substantivo; “por quê” aparece no fim de frase."
  },
  {
    id: "lin-085", disc: "Gramática", tema: "Ortografia",
    text: "Em qual alternativa as palavras destacadas estão empregadas corretamente?",
    opts: [
      "A sessão de cinema começou; a seção de livros fica no 2º andar.",
      "A seção de cinema começou; a sessão de livros fica no 2º andar.",
      "A cessão de cinema começou; a sessão de livros fica no 2º andar.",
      "A sessão de cinema começou; a cessão de livros fica no 2º andar.",
      "A seção de cinema começou; a cessão de livros fica no 2º andar."
    ],
    ans: 0,
    expl: "Sessão é o intervalo de tempo de um evento; seção (ou secção) é divisão, departamento; cessão é o ato de ceder. São palavras homófonas, com mesmo som e significados diferentes."
  },
  {
    id: "lin-086", disc: "Gramática", tema: "Sintaxe",
    text: "Em “Roubaram minha bicicleta”, o sujeito é classificado como:",
    opts: ["Oculto", "Indeterminado", "Simples", "Composto", "Inexistente"],
    ans: 1,
    expl: "O verbo na 3ª pessoa do plural, sem referência a quem praticou a ação, indica sujeito indeterminado: sabe-se que alguém roubou, mas não se identifica quem."
  },
  {
    id: "lin-087", disc: "Gramática", tema: "Sintaxe",
    text: "Em “Choveu muito ontem”, a oração não tem sujeito porque:",
    opts: [
      "O sujeito está oculto na desinência",
      "O sujeito é indeterminado",
      "O verbo indica fenômeno da natureza e é impessoal",
      "O sujeito é “muito”",
      "O sujeito é “ontem”"
    ],
    ans: 2,
    expl: "Verbos que exprimem fenômenos naturais (chover, ventar, nevar) são impessoais em sentido próprio e formam orações sem sujeito. Em sentido figurado (“Choveram críticas”), passam a ter sujeito."
  },
  {
    id: "lin-088", disc: "Gramática", tema: "Semântica",
    text: "A frase “O policial deteve o suspeito em sua casa” é ambígua porque:",
    opts: [
      "O verbo deter tem dois sujeitos",
      "Falta o objeto direto",
      "Há um erro de concordância",
      "O pronome “sua” está no plural",
      "Não se sabe se a casa é do policial ou do suspeito"
    ],
    ans: 4,
    expl: "O possessivo “sua” pode se referir a qualquer um dos dois. Para desfazer a ambiguidade, pode-se dizer “na casa dele” ou “na casa do suspeito”."
  },
  {
    id: "lin-089", disc: "Gramática", tema: "Semântica",
    text: "A frase “Pedro parou de fumar” permite concluir, sem que isso esteja dito explicitamente, que Pedro fumava antes. Essa informação implícita é um(a):",
    opts: ["Ambiguidade", "Pleonasmo", "Pressuposto", "Neologismo", "Vocativo"],
    ans: 2,
    expl: "Pressupostos são informações implícitas garantidas por palavras do enunciado (aqui, “parou de”). Subentendidos, ao contrário, dependem da interpretação do contexto."
  },
  {
    id: "lin-090", disc: "Gramática", tema: "Colocação pronominal",
    text: "De acordo com a norma-padrão, a frase com colocação pronominal adequada é:",
    opts: [
      "Nunca esquecerei-te.",
      "Nunca te esquecerei.",
      "Me empresta o livro?",
      "Não deu-me nenhuma resposta.",
      "Ninguém contou-me a verdade."
    ],
    ans: 1,
    expl: "Palavras de sentido negativo (não, nunca, ninguém) atraem o pronome para antes do verbo (próclise). No início de frase, a norma-padrão recomenda a ênclise (“Empresta-me”), embora a próclise seja comum na fala brasileira."
  },
  {
    id: "lin-091", disc: "Gramática", tema: "Acentuação",
    text: "As palavras “ideia”, “heroico” e “assembleia” perderam o acento agudo com o Acordo Ortográfico de 1990, em vigor no Brasil desde 2009, porque:",
    opts: [
      "Todas as paroxítonas deixaram de ser acentuadas",
      "Os ditongos abertos “ei” e “oi” deixaram de ser acentuados nas paroxítonas",
      "O acento agudo foi extinto da língua portuguesa",
      "São oxítonas terminadas em vogal",
      "Passaram a ser escritas com trema"
    ],
    ans: 1,
    expl: "A regra vale apenas para paroxítonas. Nas oxítonas e monossílabos tônicos, os ditongos abertos continuam acentuados: “herói”, “papéis”, “céu”."
  },

  // ══════════ LITERATURA ══════════
  {
    id: "lin-092", disc: "Literatura", tema: "Modernismo",
    text: "\"Vou-me embora pra Pasárgada / Lá sou amigo do rei\". Nesses versos de Manuel Bandeira, Pasárgada representa:",
    opts: [
      "Uma cidade real do Oriente Médio visitada pelo poeta",
      "A crítica ao governo autoritário da época",
      "A saudade da infância no Recife",
      "Um lugar utópico de liberdade e realização pessoal",
      "O desejo de conquista territorial"
    ],
    ans: 3,
    expl: "Pasárgada é um espaço imaginário que simboliza a fuga da realidade opressiva e a realização dos desejos — liberdade plena, característica do Modernismo de Bandeira."
  },
  {
    id: "lin-093", disc: "Literatura", tema: "Modernismo",
    text: "No poema \"No meio do caminho\" (Drummond), a repetição do verso 'no meio do caminho tinha uma pedra' tem função predominantemente:",
    opts: [
      "Informativa, para descrever um obstáculo literal",
      "Argumentativa, para convencer o leitor de algo",
      "Injuntiva, para dar instruções ao leitor",
      "Referencial, para situar geograficamente o poema",
      "Expressiva, para criar ritmo e ênfase poética"
    ],
    ans: 4,
    expl: "A repetição anafórica não tem fim informativo, mas expressivo: cria cadência, martela a ideia do obstáculo existencial e gera o efeito poético central do poema."
  },
  {
    id: "lin-094", disc: "Literatura", tema: "Modernismo",
    text: "O Modernismo brasileiro de 1922 propunha, entre outras coisas:",
    opts: [
      "Retorno à linguagem elevada e clássica",
      "Ruptura com o purismo gramatical e valorização do falar popular",
      "Imitação dos modelos europeus do século XIX",
      "Abandono da temática nacional em favor do universalismo",
      "Defesa do parnasianismo e da arte pela arte"
    ],
    ans: 1,
    expl: "A Semana de Arte Moderna de 1922 pregava, entre outros pontos, o uso da língua falada, o abandono da retórica parnasiana e a valorização da cultura e identidade brasileiras."
  },
  {
    id: "lin-095", disc: "Literatura", tema: "Modernismo",
    text: "A obra \"Vidas Secas\", de Graciliano Ramos, pertence ao Modernismo de:",
    opts: [
      "Primeira geração — experimental e antropofágica",
      "Terceira geração — introspecção e poesia social",
      "Pré-modernismo — transição entre séculos",
      "Segunda geração — romance social e regionalista de 1930",
      "Realismo naturalista do século XIX"
    ],
    ans: 3,
    expl: "“Vidas secas” (1938) é obra da 2ª geração modernista, o romance de 30: prosa regionalista, denúncia das condições sociais do Nordeste, linguagem enxuta e objetiva."
  },
  {
    id: "lin-096", disc: "Literatura", tema: "Modernismo",
    text: "A Semana de Arte Moderna de 1922 ocorreu em:",
    opts: [
      "Rio de Janeiro, no Teatro Municipal",
      "Recife, no Museu do Estado",
      "Salvador, na Escola de Belas Artes",
      "Belo Horizonte, no Palácio das Artes",
      "São Paulo, no Teatro Municipal"
    ],
    ans: 4,
    expl: "A Semana de Arte Moderna realizou-se em São Paulo, no Teatro Municipal, nos dias 13, 15 e 17 de fevereiro de 1922, reunindo artistas, escritores e músicos que propunham a renovação da arte brasileira."
  },
  {
    id: "lin-097", disc: "Literatura", tema: "Modernismo",
    text: "\"Grande Sertão: Veredas\" (Guimarães Rosa) é considerado um marco da literatura brasileira pela:",
    opts: [
      "Linguagem simples e direta voltada ao público infantil",
      "Reprodução fiel da fala nordestina sem nenhuma elaboração literária",
      "Adoção do realismo naturalista e do determinismo social",
      "Narrativa linear e objetiva sobre a vida no sertão mineiro",
      "Fusão entre linguagem oral sertaneja, neologismos e reflexão filosófica"
    ],
    ans: 4,
    expl: "Rosa inventa uma linguagem única: mistura o falar sertanejo, arcaísmos, neologismos e estruturas da oralidade com reflexão filosófica e existencial — elevando a prosa regional a universal."
  },
  {
    id: "lin-098", disc: "Literatura", tema: "Modernismo",
    text: "\"Macunaíma\" (Mário de Andrade) é uma rapsódia que sintetiza:",
    opts: [
      "A visão aristocrática do povo brasileiro",
      "A cultura europeia transposta para o Brasil",
      "A crítica ao governo Vargas por meio de alegoria histórica",
      "O regionalismo nordestino com foco na seca e na miséria",
      "Os elementos míticos, folclóricos e culturais das diversas regiões do Brasil"
    ],
    ans: 4,
    expl: "'Macunaíma' é definida como rapsódia — texto que recolhe e mistura elementos de diversas origens. Mário de Andrade funde mitos indígenas, folclore africano, cultura popular e regionalismos para criar uma identidade nacional plural."
  },
  {
    id: "lin-099", disc: "Literatura", tema: "Modernismo",
    text: "\"O Tempo e o Vento\" (Érico Veríssimo) retrata a história do Rio Grande do Sul ao longo de gerações. Esse tipo de romance é chamado de:",
    opts: [
      "Saga ou romance de geração",
      "Romance policial",
      "Romance de formação (Bildungsroman)",
      "Romance epistolar",
      "Romance histórico de tese"
    ],
    ans: 0,
    expl: "Sagas ou romances de geração acompanham uma família ou comunidade ao longo de várias gerações, ligando destinos individuais à história coletiva. 'O Tempo e o Vento' é o exemplo mais famoso da literatura gaúcha."
  },
  {
    id: "lin-100", disc: "Literatura", tema: "Modernismo",
    text: "\"Gabriela, Cravo e Canela\", \"Dona Flor e seus dois maridos\" — Jorge Amado pertence à tradição literária do:",
    opts: [
      "Romance psicológico introspectivo à la Clarice",
      "Romance histórico documental",
      "Experimentalismo formal do Concretismo",
      "Romance social engajado com traços populares, sensuais e carnavalescos",
      "Minimalismo da geração de 45"
    ],
    ans: 3,
    expl: "Jorge Amado, especialmente em sua segunda fase, cria um universo literário baiano marcado pela sensualidade, humor, cultura popular afro-brasileira e carnaval — herdeiro do realismo social com forte sabor regional."
  },
  {
    id: "lin-101", disc: "Literatura", tema: "Modernismo",
    text: "\"Morte e Vida Severina\" é classificado como auto de Natal. Essa denominação remete a:",
    opts: [
      "A tradição do teatro popular religioso ibérico medieval",
      "O texto ser escrito automaticamente, sem revisão",
      "A data de publicação ser no Natal de 1955",
      "O texto ser uma peça musical, sem diálogos",
      "O auto ser dedicado à cidade de Natal (RN)"
    ],
    ans: 0,
    expl: "'Auto' é um gênero dramático do teatro medieval ibérico (Gil Vicente), geralmente de tema religioso ou alegórico. João Cabral retoma a forma do auto de Natal para narrar a peregrinação de Severino — morte e nascimento entrelaçados."
  },
  {
    id: "lin-102", disc: "Literatura", tema: "Modernismo",
    text: "O movimento Pau-Brasil (Oswald de Andrade, 1924) propunha:",
    opts: [
      "O retorno à poesia épica colonial",
      "A adoção do Surrealismo francês como modelo estético",
      "A pureza gramatical da língua portuguesa europeia",
      "Uma poesia de exportação — brasileira, primitiva, moderna — que valorizasse o Brasil sem complexo de inferioridade",
      "A poesia social de denúncia da desigualdade"
    ],
    ans: 3,
    expl: "O Manifesto Pau-Brasil de Oswald (1924) propunha uma poesia 'de exportação' — síntese do primitivo e do moderno, do índio e da máquina, sem imitar modelos europeus. O Brasil deveria ser visto como produto genuíno, não cópia."
  },
  {
    id: "lin-103", disc: "Literatura", tema: "Modernismo",
    text: "\"Grande Sertão: Veredas\" usa o monólogo de Riobaldo, que narra sua vida a um interlocutor silencioso. O interlocutor nunca fala, mas sua presença é marcada por:",
    opts: [
      "Travessões que indicam as falas não reproduzidas e pontos de reticência",
      "Capítulos narrados em segunda pessoa",
      "Cartas intercaladas ao monólogo principal",
      "Notas de rodapé explicativas do autor",
      "Flashbacks visuais descritos detalhadamente"
    ],
    ans: 0,
    expl: "Guimarães Rosa usa travessões e reticências para indicar as intervenções do interlocutor que nunca ouvimos — apenas Riobaldo responde. Esse recurso cria o efeito de diálogo real sem dar voz ao outro lado."
  },
  {
    id: "lin-104", disc: "Literatura", tema: "Modernismo",
    text: "\"A Hora e a Vez de Augusto Matraga\" (Guimarães Rosa) usa a conversão religiosa para explorar o tema:",
    opts: [
      "Da hipocrisia da Igreja Católica no sertão",
      "Da redenção e da violência — o bem que nasce do mal, a transformação humana impossível de prever",
      "Da reforma agrária no Nordeste",
      "Do amor impossível entre pessoas de classes diferentes",
      "Da crítica à política coronelista"
    ],
    ans: 1,
    expl: "Augusto Matraga passa de violento e cruel a contemplativo e religioso — e volta à violência em ato de redenção final. Rosa explora a ambiguidade entre bem e mal, violência e redenção, como forças inseparáveis da condição humana sertaneja."
  },
  {
    id: "lin-105", disc: "Literatura", tema: "Modernismo",
    text: "Em \"Fogo Morto\" (José Lins do Rego), o engenho em decadência simboliza:",
    opts: [
      "O progresso da industrialização no Brasil",
      "A corrupção política da República Velha",
      "A decadência do sistema patriarcal e aristocrático do Nordeste canavieiro",
      "A luta dos trabalhadores rurais por direitos",
      "O abandono da cultura nordestina pela geração jovem"
    ],
    ans: 2,
    expl: "José Lins do Rego pertence ao Romance de 30 regionalista. 'Fogo Morto' retrata o declínio dos engenhos de açúcar e da aristocracia rural nordestina — a modernização que não chegou, o mundo patriarcal que se desintegra."
  },
  {
    id: "lin-106", disc: "Literatura", tema: "Modernismo",
    text: "A expressão \"terceira margem do rio\" (Guimarães Rosa) tornou-se símbolo literário que representa:",
    opts: [
      "A margem direita de um rio caudaloso",
      "A pobreza das margens fluviais do Brasil central",
      "O espaço impossível — o entre-lugar, a transcendência, aquilo que está além das categorias conhecidas",
      "A morte como passagem para outro estado",
      "A terceira geração de uma família ribeirinha"
    ],
    ans: 2,
    expl: "No conto, o pai vive indefinidamente num barco no rio — nem na margem direita nem na esquerda. A 'terceira margem' é metáfora do inominável, do além da razão, do mistério da existência — espaço que não existe geograficamente mas existe como símbolo."
  },
  {
    id: "lin-107", disc: "Literatura", tema: "Modernismo",
    text: "No “Manifesto Antropófago” (1928), Oswald de Andrade propõe:",
    opts: [
      "Rejeitar qualquer contato com a cultura europeia",
      "Imitar fielmente os modelos europeus",
      "“Devorar” criticamente a cultura estrangeira e transformá-la em algo brasileiro",
      "Retornar à poesia parnasiana",
      "Exaltar exclusivamente a cultura portuguesa"
    ],
    ans: 2,
    expl: "A metáfora vem do ritual antropofágico tupi. A frase “Tupi or not tupi, that is the question” resume a proposta de assimilar e reinventar influências externas."
  },
  {
    id: "lin-108", disc: "Literatura", tema: "Modernismo",
    text: "“O Quinze” (1930), de Rachel de Queiroz, insere-se no romance regionalista de 30 por retratar:",
    opts: [
      "A vida da aristocracia cafeeira paulista",
      "Os conflitos amorosos da corte imperial",
      "A colonização alemã no Sul do país",
      "A seca de 1915 no Ceará e a migração dos retirantes",
      "O cotidiano das metrópoles industriais"
    ],
    ans: 3,
    expl: "O romance acompanha a família de Chico Bento na fuga da seca. Rachel de Queiroz tinha 19 anos quando o publicou e, em 1977, tornou-se a primeira mulher eleita para a Academia Brasileira de Letras."
  },
  {
    id: "lin-109", disc: "Literatura", tema: "Modernismo",
    text: "Na obra de Clarice Lispector, é comum que uma personagem, diante de um acontecimento banal, tenha uma súbita revelação sobre si mesma e sobre o mundo. Esse momento é chamado de:",
    opts: ["Catarse", "Clímax", "Anticlímax", "Desfecho", "Epifania"],
    ans: 4,
    expl: "Em contos como “Amor”, uma cena cotidiana (um cego mascando chiclete) desestabiliza a protagonista. A prosa introspectiva de Clarice explora o fluxo de consciência e a crise da identidade."
  },
  {
    id: "lin-110", disc: "Literatura", tema: "Modernismo",
    text: "Em “A hora da estrela” (1977), de Clarice Lispector, o narrador Rodrigo S.M. conta a história de Macabéa, uma jovem nordestina no Rio de Janeiro. Um dos temas centrais da obra é:",
    opts: [
      "A ascensão social de uma jovem rica",
      "A exaltação da vida no campo",
      "A invisibilidade social e a dificuldade de narrar a vida de alguém à margem",
      "Uma aventura heroica em terras estrangeiras",
      "A crítica ao Romantismo indianista"
    ],
    ans: 2,
    expl: "Macabéa é datilógrafa, pobre e quase ignorada por todos. O narrador reflete sobre o próprio ato de escrever, questionando como representar uma vida tão apagada."
  },
  {
    id: "lin-111", disc: "Literatura", tema: "Modernismo",
    text: "Leia os versos de Carlos Drummond de Andrade:\n“E agora, José?\nA festa acabou,\na luz apagou,\no povo sumiu,\na noite esfriou”\nA repetição da pergunta e a enumeração de perdas expressam:",
    opts: [
      "A celebração de uma festa popular",
      "A exaltação da natureza brasileira",
      "A crítica à escravidão",
      "O sentimento de desamparo e falta de perspectiva do indivíduo moderno",
      "O amor idealizado pela mulher"
    ],
    ans: 3,
    expl: "O poema “José” (1942) usa um nome comum para representar qualquer pessoa diante do vazio e da solidão. A pergunta reiterada intensifica a sensação de impasse."
  },
  {
    id: "lin-112", disc: "Literatura", tema: "Modernismo",
    text: "Em “Romanceiro da Inconfidência” (1953), Cecília Meireles revisita a Inconfidência Mineira em poemas que:",
    opts: [
      "Rejeitam qualquer referência à história do Brasil",
      "Combinam lirismo e narrativa histórica, refletindo sobre liberdade, traição e morte",
      "Imitam o estilo satírico de Gregório de Matos",
      "Narram em prosa a vida de Tiradentes",
      "Exaltam a Coroa portuguesa"
    ],
    ans: 1,
    expl: "Inspirada na forma do romanceiro ibérico, Cecília dá voz a personagens conhecidos e anônimos da Vila Rica do século XVIII. Versos como “Liberdade, essa palavra / que o sonho humano alimenta” tornaram-se célebres."
  },
  {
    id: "lin-113", disc: "Literatura", tema: "Romantismo",
    text: "O Romantismo brasileiro caracterizou-se, em sua primeira geração, pelo(a):",
    opts: [
      "Crítica social e linguagem coloquial",
      "Indianismo e valorização da natureza nacional",
      "Culto ao amor platônico e à morte",
      "Análise científica do comportamento humano",
      "Ruptura total com a tradição europeia"
    ],
    ans: 1,
    expl: "A 1ª geração romântica (Gonçalves Dias, Alencar) é marcada pelo indianismo — valorização do índio como herói nacional — e exaltação da natureza brasileira como símbolo de identidade."
  },
  {
    id: "lin-114", disc: "Literatura", tema: "Romantismo",
    text: "Castro Alves é o principal poeta da 3ª geração romântica, chamada condoreirista. Seus poemas são marcados por:",
    opts: [
      "Subjetivismo exacerbado e culto da morte",
      "Objetividade parnasiana e perfeição formal",
      "Indianismo e exaltação da natureza nacional",
      "Abolicionismo, oratória e temática social de largo alcance",
      "Misticismo e linguagem hermética"
    ],
    ans: 3,
    expl: "Castro Alves (3ª geração romântica/condoreirismo): o poeta usa a metáfora do condor (ave de voo alto) para representar a poesia engajada. Principal tema: abolicionismo ('O Navio Negreiro', 'Vozes d'África') e retórica grandiosa."
  },
  {
    id: "lin-115", disc: "Literatura", tema: "Romantismo",
    text: "A segunda geração romântica brasileira, chamada ultrarromântica ou “mal do século”, tem em Álvares de Azevedo seu principal nome. São marcas dessa geração:",
    opts: [
      "Nacionalismo indianista e exaltação da pátria",
      "Poesia social e abolicionista",
      "Objetividade e crítica social",
      "Linguagem coloquial e humor",
      "Pessimismo, tédio, obsessão pela morte e idealização da mulher amada"
    ],
    ans: 4,
    expl: "Influenciados por Byron e Musset, os ultrarromânticos exploraram o subjetivismo extremo, a melancolia e o desejo de evasão pela morte. Muitos morreram jovens, como o próprio Álvares de Azevedo."
  },
  {
    id: "lin-116", disc: "Literatura", tema: "Romantismo",
    text: "Em “Iracema” (1865), de José de Alencar, o nome da protagonista é um anagrama de “América”. Essa escolha reforça a leitura do romance como:",
    opts: [
      "Crítica naturalista ao comportamento humano",
      "Romance urbano sobre a corte do Rio de Janeiro",
      "Sátira ao nacionalismo romântico",
      "Alegoria da formação do Brasil a partir do encontro entre o indígena e o colonizador europeu",
      "Relato histórico rigoroso da colonização"
    ],
    ans: 3,
    expl: "A união de Iracema, “a virgem dos lábios de mel”, com o português Martim gera Moacir, “filho da dor”, considerado simbolicamente o primeiro brasileiro. O indígena é idealizado como herói nacional."
  },
  {
    id: "lin-117", disc: "Literatura", tema: "Realismo",
    text: "\"Dom Casmurro\", de Machado de Assis, é narrado em primeira pessoa por Bentinho. Esse recurso cria:",
    opts: [
      "Onisciência total e visão objetiva dos fatos",
      "Distância temporal que garante imparcialidade",
      "Narrador não confiável, cuja versão é parcial e suspeita",
      "Identificação imediata do leitor com Capitu",
      "Visão naturalista e determinista dos personagens"
    ],
    ans: 2,
    expl: "Bentinho/Dom Casmurro é um narrador-personagem com motivações claras de se justificar. O leitor não pode confirmar a traição de Capitu — a ambiguidade é construída pela parcialidade do narrador."
  },
  {
    id: "lin-118", disc: "Literatura", tema: "Realismo",
    text: "Em \"O alienista\" (Machado de Assis), Simão Bacamarte prende todos os cidadãos de Itaguaí por considerá-los loucos. Ao final, interna a si mesmo. Isso representa, alegoricamente:",
    opts: [
      "A loucura como herança genética determinista",
      "A crítica ao positivismo científico levado ao extremo e à arrogância da razão",
      "A defesa da psiquiatria como ciência exata",
      "O romantismo do cientista solitário e incompreendido",
      "A sátira ao sistema educacional do século XIX"
    ],
    ans: 1,
    expl: "Machado satiriza o cientificismo oitocentista: a razão absoluta e a ciência, quando levadas ao extremo e sem limites éticos, tornam-se elas mesmas uma forma de loucura — a arrogância da razão."
  },
  {
    id: "lin-119", disc: "Literatura", tema: "Realismo",
    text: "\"Quincas Borba\" (Machado de Assis) contém a filosofia fictícia do Humanitismo, que prega 'ao vencedor, as batatas'. Essa filosofia é uma paródia de:",
    opts: [
      "O positivismo e o evolucionismo social darwinista",
      "O marxismo e a luta de classes",
      "O espiritualismo de Victor Hugo",
      "O romantismo idealista de Rousseau",
      "O existencialismo de Sartre"
    ],
    ans: 0,
    expl: "O Humanitismo parodia o positivismo de Comte e o darwinismo social: a sobrevivência do mais forte justificaria toda crueldade e exploração, revelando a crítica machadiana ao otimismo científico do século XIX."
  },
  {
    id: "lin-120", disc: "Literatura", tema: "Realismo",
    text: "\"Iaiá Garcia\" e \"Helena\" são romances de Machado de Assis da fase chamada:",
    opts: [
      "Realista — com análise psicológica e ironia fina",
      "Naturalista — com determinismo social",
      "Romântica — com idealismo e sentimentalismo",
      "Simbolista — com musicalidade e hermetismo",
      "Modernista — com ruptura formal"
    ],
    ans: 2,
    expl: "A 1ª fase de Machado (Helena, Iaiá Garcia, A Mão e a Luva) é considerada romântica: enredos sentimentais, personagens idealizados, conflitos amorosos e sociais com desfecho moralizante — antes da virada com 'Memórias Póstumas'."
  },
  {
    id: "lin-121", disc: "Literatura", tema: "Realismo",
    text: "“Memórias póstumas de Brás Cubas” (1881), de Machado de Assis, inova ao apresentar:",
    opts: [
      "Um “defunto autor”, que narra a própria vida depois de morto, com ironia e digressões",
      "Um narrador onisciente e totalmente imparcial",
      "Uma história de amor idealizado com final feliz",
      "A exaltação do indígena como herói nacional",
      "Uma narrativa linear sem interferência do narrador"
    ],
    ans: 0,
    expl: "Morto, Brás Cubas se diz livre para falar sem pudores. A ironia, as conversas com o leitor e a crítica à elite marcam o início do Realismo no Brasil."
  },
  {
    id: "lin-122", disc: "Literatura", tema: "Naturalismo",
    text: "Em \"O Cortiço\" (Aluísio Azevedo), o ambiente exerce influência determinante sobre os personagens. Isso reflete o pressuposto teórico do:",
    opts: [
      "Romantismo — liberdade individual e emoção",
      "Simbolismo — sugestão e musicalidade",
      "Modernismo — ruptura com as convenções",
      "Parnasianismo — culto à forma e impessoalidade",
      "Naturalismo — determinismo do meio e da raça"
    ],
    ans: 4,
    expl: "O Naturalismo, influenciado pelo positivismo de Taine, defende que o comportamento humano é determinado pelo meio, pela raça e pelo momento histórico — o cortiço 'cria' os personagens."
  },
  {
    id: "lin-123", disc: "Literatura", tema: "Literatura universal",
    text: "\"Hamlet\", de Shakespeare, pertence ao gênero:",
    opts: [
      "Comédia de costumes",
      "Épico medieval",
      "Drama naturalista",
      "Farsa popular",
      "Tragédia renascentista"
    ],
    ans: 4,
    expl: "Hamlet é uma tragédia do Renascimento inglês (período elisabetano): conflito moral, destino funesto e um protagonista nobre arruinado por uma falha trágica."
  },
  {
    id: "lin-124", disc: "Literatura", tema: "Literatura universal",
    text: "\"A Divina Comédia\" (Dante Alighieri) é uma obra do período:",
    opts: [
      "Barroco — século XVII",
      "Renascimento — século XV/XVI",
      "Romantismo — século XIX",
      "Medievalismo — século XIV (transição Medievo/Renascimento)",
      "Classicismo grego — século V a.C."
    ],
    ans: 3,
    expl: "'A Divina Comédia' (c.1307-1321) é obra do Trecento italiano — período de transição entre o pensamento medieval e o Renascimento. Dante é considerado o pai da língua italiana e precursor do humanismo renascentista."
  },
  {
    id: "lin-125", disc: "Literatura", tema: "Vanguardas europeias",
    text: "O Surrealismo literário, movimento do século XX, caracteriza-se por:",
    opts: [
      "Representação fiel da realidade cotidiana",
      "Exploração do inconsciente, sonhos e automatismo psíquico",
      "Retorno à métrica clássica e ao equilíbrio formal",
      "Crítica social de base marxista e linguagem direta",
      "Exaltação do nacionalismo e dos valores tradicionais"
    ],
    ans: 1,
    expl: "O Surrealismo (Breton, 1924) buscava libertar a criação dos controles racionais, explorando sonhos, o inconsciente freudiano e o automatismo como fontes da expressão artística."
  },
  {
    id: "lin-126", disc: "Literatura", tema: "Versificação",
    text: "Quantas sílabas poéticas tem o verso “Minha terra tem palmeiras”, de Gonçalves Dias?",
    opts: ["5", "6", "7", "8", "10"],
    ans: 2,
    expl: "Mi-nha-ter-ra-tem-pal-MEI-(ras): a contagem para na última sílaba tônica, somando 7 sílabas. É a redondilha maior, metro da “Canção do exílio” e de muita poesia popular."
  },
  {
    id: "lin-127", disc: "Literatura", tema: "Simbolismo",
    text: "O Simbolismo, na poesia brasileira, caracteriza-se principalmente por:",
    opts: [
      "Objetividade, descrição da realidade e forma clássica",
      "Linguagem simples, humor e crítica social direta",
      "Versos livres, imagens do cotidiano e ruptura formal",
      "Exaltação da natureza nacional e indianismo",
      "Musicalidade, subjetividade, uso de símbolos e linguagem hermética"
    ],
    ans: 4,
    expl: "O Simbolismo (Cruz e Souza, Alphonsus de Guimaraens) valoriza a sugestão, a musicalidade, o hermetismo e o uso de símbolos para evocar estados da alma — oposto ao objetivismo parnasiano."
  },
  {
    id: "lin-128", disc: "Literatura", tema: "Simbolismo",
    text: "Leia os versos de Cruz e Sousa:\n“Ó Formas alvas, brancas, Formas claras\nDe luares, de neves, de neblinas!”\nA repetição de sons e a evocação de imagens vagas e luminosas são típicas do:",
    opts: [
      "Parnasianismo, que busca a descrição objetiva",
      "Arcadismo, que valoriza o bucolismo",
      "Modernismo, que adota o verso livre e o coloquial",
      "Realismo, que analisa a sociedade",
      "Simbolismo, que busca a musicalidade e a sugestão"
    ],
    ans: 4,
    expl: "Os versos abrem “Antífona”, poema de “Broquéis” (1893), marco do Simbolismo brasileiro. Aliterações, maiúsculas alegorizantes e imagens etéreas sugerem estados de alma, em vez de descrevê-los."
  },
  {
    id: "lin-129", disc: "Literatura", tema: "Parnasianismo",
    text: "O movimento literário que defendia 'a arte pela arte', valorizando a perfeição formal, a objetividade e o vocabulário erudito foi o:",
    opts: ["Romantismo", "Realismo", "Parnasianismo", "Simbolismo", "Modernismo"],
    ans: 2,
    expl: "O Parnasianismo (Olavo Bilac, Raimundo Correia, Alberto de Oliveira) pregava a arte desinteressada, a forma perfeita, a objetividade, o vocabulário raro e a versificação rigorosa — 'a arte pela arte'."
  },
  {
    id: "lin-130", disc: "Literatura", tema: "Poesia concreta",
    text: "O Concretismo poético brasileiro dos anos 1950-60 priorizava:",
    opts: [
      "O verso longo e a subjetividade romântica",
      "A narrativa épica e a valorização do folclore",
      "A musicalidade simbolista e o hermetismo",
      "A crítica social direta e a linguagem acessível",
      "A visualidade da palavra na página como elemento poético"
    ],
    ans: 4,
    expl: "O Concretismo (Augusto de Campos, Décio Pignatari, Haroldo de Campos) tratava a palavra como objeto visual: a disposição gráfica na página, a tipografia e a espacialidade faziam parte do poema."
  },
  {
    id: "lin-131", disc: "Literatura", tema: "Teoria literária",
    text: "Em um poema, o eu lírico é diferente do autor porque:",
    opts: [
      "O eu lírico sempre tem gênero oposto ao do autor",
      "O eu lírico é sempre um personagem fictício com nome próprio",
      "O autor não participa da criação do eu lírico",
      "São sempre idênticos na poesia confessional",
      "É uma voz poética construída no texto, não necessariamente idêntica à pessoa biográfica do escritor"
    ],
    ans: 4,
    expl: "O eu lírico é uma construção textual — a voz que enuncia o poema. Mesmo que se pareça autobiográfico, é um 'eu' literário. Confundir autor e eu lírico é o mesmo erro de confundir narrador e autor em prosa."
  },
  {
    id: "lin-132", disc: "Literatura", tema: "Pré-modernismo",
    text: "O conceito de 'sertanismo' ou 'regionalismo' na literatura brasileira tem em Euclides da Cunha ('Os Sertões') seu monumento fundador porque:",
    opts: [
      "É o primeiro texto escrito em prosa sobre o Nordeste",
      "Defende a superioridade cultural do sertanejo sobre o homem urbano",
      "É escrito com linguagem popular e acessível ao povo",
      "Documenta a Guerra de Canudos revelando o Brasil profundo que a República ignorava",
      "Cria um romance ficcional sobre a seca nordestina"
    ],
    ans: 3,
    expl: "'Os Sertões' (1902) é relato jornalístico e literário da Guerra de Canudos — revela ao Brasil urbano e litorâneo a existência de um Brasil sertanejo profundo, ignorado e violentado pela República nascente. É o fundador do pensamento regionalista crítico."
  },
  {
    id: "lin-133", disc: "Literatura", tema: "Pré-modernismo",
    text: "A obra de Lima Barreto é considerada pré-modernista e se destaca por:",
    opts: [
      "Perfeição formal parnasiana e vocabulário erudito",
      "Romance indianista de exaltação nacional",
      "Prosa poética simbolista e hermética",
      "Experimentalismo vanguardista avant la lettre",
      "Crítica social corrosiva à sociedade carioca, com linguagem simples e perspectiva do marginalizado"
    ],
    ans: 4,
    expl: "Lima Barreto ('Triste Fim de Policarpo Quaresma', 'Clara dos Anjos') faz crítica feroz à República, ao racismo e à burocracia brasileira com linguagem simples e perspectiva dos excluídos — antecipando o Modernismo sem fazer parte dele."
  },
  {
    id: "lin-134", disc: "Literatura", tema: "Pré-modernismo",
    text: "A poesia de Augusto dos Anjos, reunida no livro “Eu” (1912), surpreende pelo uso de:",
    opts: [
      "Linguagem simples e temas cotidianos alegres",
      "Vocabulário científico e temas como a decomposição da matéria e a morte, com tom pessimista",
      "Exaltação da natureza tropical",
      "Humor e crítica política direta",
      "Versos livres sem métrica"
    ],
    ans: 1,
    expl: "Em versos metrificados, Augusto dos Anjos combina termos da biologia e da química com angústia existencial: “Ah! Um urubu pousou na minha sorte!”. É uma obra difícil de enquadrar em escolas literárias."
  },
  {
    id: "lin-135", disc: "Literatura", tema: "Pré-modernismo",
    text: "Em 1917, Monteiro Lobato publicou um artigo que criticou duramente uma exposição de Anita Malfatti, intitulado “Paranoia ou mistificação?”. O episódio é importante porque:",
    opts: [
      "Encerrou a carreira de Anita Malfatti definitivamente",
      "Marcou o início do Parnasianismo no Brasil",
      "Acirrou o debate entre arte tradicional e arte moderna e mobilizou os futuros modernistas de 1922",
      "Levou à proibição da arte moderna pelo governo",
      "Uniu Lobato aos organizadores da Semana de 22"
    ],
    ans: 2,
    expl: "A reação a favor de Anita aproximou jovens artistas e escritores, como Mário e Oswald de Andrade, que cinco anos depois organizariam a Semana de Arte Moderna."
  },
  {
    id: "lin-136", disc: "Literatura", tema: "Literatura popular",
    text: "A literatura de cordel nordestina é uma manifestação que se caracteriza por:",
    opts: [
      "Prosa longa e técnica narrativa sofisticada",
      "Teatro épico de engajamento político",
      "Romance epistolar de temática amorosa",
      "Poesia rimada e metrificada vendida em folhetos, com temáticas populares, heróicas e religiosas",
      "Poesia concreta de experimentação visual"
    ],
    ans: 3,
    expl: "A literatura de cordel é poesia popular nordestina: versos rimados (geralmente sextilhas ou décimas), vendidos em folhetos pendurados em cordas, com temáticas que vão do cangaço ao sobrenatural, do humorístico ao religioso."
  },
  {
    id: "lin-137", disc: "Literatura", tema: "Quinhentismo",
    text: "A Carta de Pero Vaz de Caminha (1500) é considerada a “certidão de nascimento” do Brasil. Do ponto de vista literário, ela pertence ao Quinhentismo e se caracteriza como:",
    opts: [
      "Poesia lírica sobre o amor cortês",
      "Literatura de informação, que descreve a terra e seus habitantes ao rei de Portugal",
      "Romance indianista do século XIX",
      "Teatro religioso jesuítico",
      "Sermão barroco de crítica social"
    ],
    ans: 1,
    expl: "Caminha relata a D. Manuel a chegada da esquadra de Cabral, descrevendo a natureza e os indígenas com olhar europeu e interesse na exploração e na catequese."
  },
  {
    id: "lin-138", disc: "Literatura", tema: "Barroco",
    text: "Leia os versos de Gregório de Matos:\n“Nasce o Sol, e não dura mais que um dia,\nDepois da Luz se segue a noite escura,\nEm tristes sombras morre a formosura,\nEm contínuas tristezas a alegria.”\nA oposição entre luz e sombra, alegria e tristeza revela uma característica barroca:",
    opts: [
      "A exaltação da natureza tropical e do indígena",
      "O objetivismo e a impessoalidade da arte pela arte",
      "A linguagem coloquial e o verso livre",
      "O uso de antíteses para expressar a consciência da fugacidade da vida",
      "A crítica científica e determinista à sociedade"
    ],
    ans: 3,
    expl: "O Barroco expressa o conflito entre o terreno e o espiritual e a angústia diante da passagem do tempo. Antíteses e paradoxos são recursos centrais desse estilo."
  },
  {
    id: "lin-139", disc: "Literatura", tema: "Barroco",
    text: "Gregório de Matos recebeu o apelido de “Boca do Inferno” por causa:",
    opts: [
      "De sua poesia satírica, que criticava com dureza a sociedade baiana do século XVII",
      "De seus sermões religiosos proferidos em igrejas",
      "De seus romances sobre a vida no sertão",
      "De sua defesa da monarquia portuguesa",
      "Da exaltação dos senhores de engenho"
    ],
    ans: 0,
    expl: "Além da poesia lírica e religiosa, Gregório escreveu sátiras ferinas contra autoridades, clero e costumes da Bahia colonial, o que lhe rendeu inimigos e o exílio em Angola."
  },
  {
    id: "lin-140", disc: "Literatura", tema: "Barroco",
    text: "O Padre Antônio Vieira, autor do “Sermão da Sexagésima”, é o principal representante do conceptismo barroco em língua portuguesa. O conceptismo caracteriza-se:",
    opts: [
      "Pelo jogo de palavras e pelo excesso de ornamentos sonoros",
      "Pela descrição objetiva da realidade social",
      "Pela linguagem simples e coloquial",
      "Pela valorização do amor platônico",
      "Pelo jogo de ideias e pelo raciocínio lógico e argumentativo"
    ],
    ans: 4,
    expl: "O conceptismo privilegia o conceito, a argumentação engenhosa; o cultismo (ou gongorismo), a forma rebuscada, cheia de metáforas e trocadilhos. Vieira usava a lógica para persuadir seus ouvintes."
  },
  {
    id: "lin-141", disc: "Literatura", tema: "Arcadismo",
    text: "Leia os versos de Tomás Antônio Gonzaga:\n“Eu, Marília, não sou algum vaqueiro,\nQue viva de guardar alheio gado.”\nO uso de um nome pastoril para a amada e a ambientação campestre revelam a tendência árcade de:",
    opts: [
      "Exaltar a vida agitada nas grandes cidades",
      "Expressar o pessimismo e o culto à morte",
      "Criticar cientificamente a sociedade",
      "Valorizar a vida simples no campo (bucolismo) e adotar convenções pastoris",
      "Romper com a tradição clássica greco-latina"
    ],
    ans: 3,
    expl: "O Arcadismo (século XVIII) retomou modelos clássicos: os poetas se apresentavam como pastores, buscavam a simplicidade (fugere urbem), o lugar ameno (locus amoenus) e a vida equilibrada (aurea mediocritas)."
  },
  {
    id: "lin-142", disc: "Literatura", tema: "Arcadismo",
    text: "A expressão latina “carpe diem”, frequente na poesia árcade, significa:",
    opts: [
      "“Fuja da cidade”, valorização da vida rural",
      "“Lugar ameno”, idealização da natureza",
      "“Mediocridade de ouro”, elogio da vida simples",
      "“Memento mori”, lembrança constante da morte",
      "“Aproveite o dia”, convite a desfrutar o presente diante da passagem do tempo"
    ],
    ans: 4,
    expl: "O tema, herdado do poeta latino Horácio, aparece em Gonzaga quando o eu lírico convida Marília a aproveitar a juventude antes que o tempo a consuma."
  },
  {
    id: "lin-143", disc: "Literatura", tema: "Literatura contemporânea",
    text: "Carolina Maria de Jesus publicou em 1960 “Quarto de despejo: diário de uma favelada”, que se tornou um grande sucesso. A obra é relevante porque:",
    opts: [
      "É um romance de ficção científica sobre o futuro",
      "Descreve a vida da elite paulistana",
      "Registra, a partir da experiência de uma mulher negra e catadora, o cotidiano da fome e da exclusão na favela",
      "Foi escrita por um jornalista que nunca visitou a favela",
      "Exalta a vida no campo nordestino"
    ],
    ans: 2,
    expl: "Carolina escrevia em cadernos encontrados no lixo, na favela do Canindé, em São Paulo. O livro foi traduzido para mais de dez idiomas e é hoje referência da literatura brasileira."
  },
  {
    id: "lin-144", disc: "Literatura", tema: "Literatura contemporânea",
    text: "A escritora Conceição Evaristo criou o conceito de “escrevivência” para nomear:",
    opts: [
      "Um tipo de poema concreto visual",
      "A técnica de escrever sem pontuação",
      "A literatura produzida exclusivamente na internet",
      "A tradução de obras estrangeiras",
      "Uma escrita construída a partir das vivências, especialmente das mulheres negras, unindo memória individual e coletiva"
    ],
    ans: 4,
    expl: "Em obras como “Ponciá Vicêncio” e “Olhos d'água”, a autora transforma experiências de exclusão e resistência em literatura, dando protagonismo a vozes historicamente silenciadas."
  },
  {
    id: "lin-145", disc: "Literatura", tema: "Literatura portuguesa",
    text: "“Os Lusíadas” (1572), de Luís de Camões, é uma epopeia que narra:",
    opts: [
      "A colonização do Brasil pelos jesuítas",
      "A viagem de Vasco da Gama às Índias e exalta a história de Portugal",
      "Os amores do poeta por uma pastora",
      "A Guerra de Troia",
      "A independência das colônias portuguesas"
    ],
    ans: 1,
    expl: "Escrita em versos decassílabos e oitava rima, a obra mistura história e mitologia greco-romana para glorificar o “peito ilustre lusitano”. É o maior poema épico da língua portuguesa."
  },
  {
    id: "lin-146", disc: "Literatura", tema: "Literatura portuguesa",
    text: "Fernando Pessoa criou heterônimos, como Alberto Caeiro, Ricardo Reis e Álvaro de Campos. Os heterônimos são:",
    opts: [
      "Pseudônimos usados apenas para esconder a identidade",
      "Personagens de um romance de Pessoa",
      "Autores fictícios com biografia, estilo e visão de mundo próprios",
      "Poetas reais que colaboraram com Pessoa",
      "Nomes dos capítulos de “Mensagem”"
    ],
    ans: 2,
    expl: "Caeiro é o poeta das sensações e da natureza; Reis, o clássico que retoma o carpe diem; Campos, o engenheiro moderno e angustiado. Pessoa também escreveu em seu próprio nome (ortônimo)."
  },

  // ══════════ REDAÇÃO ══════════
  {
    id: "lin-147", disc: "Redação", tema: "Proposta de intervenção",
    text: "Na redação do ENEM, a proposta de intervenção deve ser:",
    opts: [
      "Um resumo do problema social abordado",
      "Uma crítica pessoal ao governo sem fundamento",
      "Detalhada, com agente, ação, meio, finalidade e efeito esperado",
      "Uma transcrição de dados estatísticos citados no texto",
      "Escrita em linguagem informal para aproximar-se do leitor"
    ],
    ans: 2,
    expl: "A grade de correção do ENEM exige que a proposta de intervenção respeite os direitos humanos e apresente: agente (quem faz), ação (o que fazer), meio (como), finalidade (para quê) e efeito esperado."
  },
  {
    id: "lin-148", disc: "Redação", tema: "Proposta de intervenção",
    text: "Qual das opções apresenta uma proposta de intervenção completa segundo os critérios do ENEM?",
    opts: [
      "O governo deve fazer mais pelos jovens.",
      "É necessário investir em educação no Brasil.",
      "Os jovens precisam se esforçar mais para ter sucesso na vida.",
      "A sociedade deve conscientizar-se da importância da educação.",
      "O Ministério da Educação deve ampliar o acesso à educação de qualidade por meio de políticas de permanência escolar, a fim de reduzir a evasão entre estudantes em situação de vulnerabilidade social."
    ],
    ans: 4,
    expl: "A proposta completa traz: agente (Ministério da Educação), ação (ampliar o acesso), meio (políticas de permanência), finalidade (reduzir a evasão) e efeito (beneficiar vulneráveis). As outras são vagas, sem detalhamento."
  },
  {
    id: "lin-149", disc: "Redação", tema: "Estrutura do texto",
    text: "No parágrafo argumentativo, a tópico frase deve:",
    opts: [
      "Retomar a conclusão do parágrafo anterior com outras palavras",
      "Enunciar a ideia central do parágrafo, orientando seu desenvolvimento",
      "Apresentar um dado estatístico que comprove a tese",
      "Usar linguagem poética para prender a atenção do leitor",
      "Ser sempre a última frase do parágrafo"
    ],
    ans: 1,
    expl: "A tópico frase (ou frase-tema) anuncia o argumento que será desenvolvido no parágrafo, funcionando como o eixo organizador das demais informações apresentadas."
  },
  {
    id: "lin-150", disc: "Redação", tema: "Estrutura do texto",
    text: "No ENEM, o texto dissertativo-argumentativo deve ser escrito em:",
    opts: [
      "Primeira pessoa, com uso de 'eu' para marcar a subjetividade",
      "Segunda pessoa, dirigindo-se diretamente ao leitor",
      "Qualquer pessoa, conforme o estilo do candidato",
      "Terceira pessoa ou de forma impessoal, mantendo distância do enunciado",
      "Primeira pessoa do plural para incluir o leitor na argumentação"
    ],
    ans: 3,
    expl: "O texto dissertativo-argumentativo exige objetividade e impessoalidade. O uso excessivo de 'eu' pode indicar falta de fundamentação. Deve-se usar 3ª pessoa ('observa-se', 'nota-se') ou construções impessoais."
  },
  {
    id: "lin-151", disc: "Redação", tema: "Estrutura do texto",
    text: "O parágrafo de introdução de uma dissertação deve conter:",
    opts: [
      "Todos os argumentos que serão desenvolvidos no texto",
      "A conclusão do texto antecipada para o leitor",
      "A tese (ponto de vista a ser defendido) e a contextualização do tema",
      "Citações de autores famosos sobre o tema",
      "A proposta de intervenção detalhada"
    ],
    ans: 2,
    expl: "A introdução deve contextualizar o tema (situá-lo para o leitor) e apresentar a tese (a posição que será defendida). Não deve esgotar os argumentos — isso é função do desenvolvimento — nem apresentar a solução prematuramente."
  },

  // ══════════ ARTES ══════════
  {
    id: "lin-152", disc: "Artes", tema: "Artes visuais",
    text: "A tela “Abaporu” (1928), de Tarsila do Amaral, inspirou o Movimento Antropofágico. O nome da obra, de origem tupi, significa:",
    opts: [
      "“Terra das palmeiras”",
      "“Sol do sertão”",
      "“Mulher do campo”",
      "“Rio que corre para o mar”",
      "“Homem que come gente”"
    ],
    ans: 4,
    expl: "A figura de pés e mãos enormes e cabeça pequena, ao lado de um cacto, foi presente de Tarsila a Oswald de Andrade, que a tomou como símbolo do Manifesto Antropófago."
  },
  {
    id: "lin-153", disc: "Artes", tema: "Artes visuais",
    text: "As esculturas dos doze profetas em pedra-sabão, no Santuário de Bom Jesus de Matosinhos, em Congonhas (MG), são obras de Aleijadinho, principal artista do:",
    opts: [
      "Modernismo paulista",
      "Impressionismo francês",
      "Renascimento italiano",
      "Barroco mineiro",
      "Concretismo brasileiro"
    ],
    ans: 3,
    expl: "Antônio Francisco Lisboa, o Aleijadinho, atuou no século XVIII, durante o ciclo do ouro. Sua obra une a tradição europeia a soluções próprias, com expressividade dramática."
  },
  {
    id: "lin-154", disc: "Artes", tema: "Artes visuais",
    text: "O Impressionismo, movimento artístico francês do século XIX (Monet, Renoir, Degas), caracterizou-se por:",
    opts: [
      "Reproduzir com precisão fotográfica cenas históricas",
      "Decompor as figuras em formas geométricas",
      "Representar sonhos e o inconsciente",
      "Usar apenas preto e branco",
      "Pintar ao ar livre, captando os efeitos da luz e das cores em pinceladas rápidas e soltas"
    ],
    ans: 4,
    expl: "O nome veio da tela “Impressão, nascer do sol”, de Monet (1872). Os impressionistas buscavam registrar a percepção momentânea da luz, influenciados também pela fotografia."
  },
  {
    id: "lin-155", disc: "Artes", tema: "Artes visuais",
    text: "“Guernica” (1937), de Pablo Picasso, retrata:",
    opts: [
      "O bombardeio de uma cidade basca durante a Guerra Civil Espanhola",
      "Uma paisagem tranquila do interior da França",
      "A coroação de um rei espanhol",
      "A chegada de Colombo à América",
      "Uma festa popular em Barcelona"
    ],
    ans: 0,
    expl: "Com figuras fragmentadas, em tons de cinza, Picasso denuncia o horror da guerra e o sofrimento de civis. A linguagem cubista intensifica a sensação de caos e dor."
  },
  {
    id: "lin-156", disc: "Artes", tema: "Artes visuais",
    text: "Em 1917, Marcel Duchamp apresentou um mictório de louça, assinado “R. Mutt”, com o título “A Fonte”. Essa obra, um ready-made, provocou o debate sobre:",
    opts: [
      "A importância da técnica do óleo sobre tela",
      "O que define uma obra de arte: a habilidade manual ou a escolha e o contexto atribuídos pelo artista",
      "A necessidade de retratar a natureza com fidelidade",
      "O valor dos materiais nobres, como mármore e ouro",
      "A volta aos padrões renascentistas"
    ],
    ans: 1,
    expl: "Ao deslocar um objeto industrial para o espaço da arte, Duchamp questionou a tradição e abriu caminho para a arte conceitual, na qual a ideia é mais importante que a execução."
  },
  {
    id: "lin-157", disc: "Artes", tema: "Artes visuais",
    text: "A Pop Art, com artistas como Andy Warhol, utilizou imagens de latas de sopa, celebridades e histórias em quadrinhos para:",
    opts: [
      "Valorizar a pintura religiosa medieval",
      "Rejeitar qualquer elemento do cotidiano",
      "Refletir sobre a cultura de massa, o consumo e a repetição das imagens na sociedade industrial",
      "Retratar paisagens naturais intocadas",
      "Defender o retorno da arte acadêmica"
    ],
    ans: 2,
    expl: "Warhol reproduzia imagens em série, com serigrafia, imitando a produção industrial. A Pop Art borrou as fronteiras entre arte erudita e cultura popular."
  },
  {
    id: "lin-158", disc: "Artes", tema: "Artes visuais",
    text: "Hélio Oiticica criou os Parangolés, capas e estandartes coloridos para serem vestidos e movimentados pelo público. Essa proposta valoriza:",
    opts: [
      "A participação do espectador, que deixa de ser apenas observador e se torna parte da obra",
      "A contemplação silenciosa da obra em museus",
      "A pintura tradicional em tela",
      "A escultura em bronze",
      "A arte exclusivamente religiosa"
    ],
    ans: 0,
    expl: "Os Parangolés, criados nos anos 1960 em diálogo com passistas da Mangueira, integram cor, corpo e movimento. A arte participativa questiona a separação entre obra e público."
  },
  {
    id: "lin-159", disc: "Artes", tema: "Artes visuais",
    text: "O grafite e a pichação são temas de debate sobre arte urbana. Um argumento usado por quem defende o grafite como arte é que ele:",
    opts: [
      "É sempre feito sem autorização e com a intenção de danificar",
      "Não utiliza cores nem técnicas",
      "Existe apenas em ambientes fechados",
      "Ocupa o espaço público com imagens elaboradas, democratizando o acesso à arte fora de museus e galerias",
      "Só pode ser visto mediante pagamento de ingresso"
    ],
    ans: 3,
    expl: "Artistas como OSGEMEOS e Eduardo Kobra levaram o grafite brasileiro a galerias do mundo. No Brasil, o grafite autorizado não é crime desde 2011, ao contrário da pichação."
  },
  {
    id: "lin-160", disc: "Artes", tema: "Música",
    text: "A Tropicália, movimento cultural do fim dos anos 1960 liderado por Caetano Veloso e Gilberto Gil, caracterizou-se por:",
    opts: [
      "Misturar referências da música brasileira com rock, guitarras elétricas e cultura pop, em diálogo com a antropofagia",
      "Rejeitar qualquer influência estrangeira na música",
      "Defender exclusivamente o samba tradicional",
      "Produzir apenas música erudita para orquestra",
      "Apoiar abertamente a censura do regime militar"
    ],
    ans: 0,
    expl: "O álbum “Tropicália ou Panis et Circencis” (1968) reuniu Caetano, Gil, Gal Costa, Os Mutantes e outros. O movimento foi perseguido pela ditadura, e Caetano e Gil foram presos e exilados."
  },
  {
    id: "lin-161", disc: "Artes", tema: "Música",
    text: "A Bossa Nova, surgida no fim dos anos 1950 com João Gilberto, Tom Jobim e Vinicius de Moraes, caracteriza-se por:",
    opts: [
      "Batida de violão sincopada, canto suave e harmonias sofisticadas influenciadas pelo jazz",
      "Uso de tambores e cantos de origem indígena",
      "Letras de protesto contra a ditadura militar",
      "Ritmo acelerado com guitarras distorcidas",
      "Execução apenas por grandes orquestras sinfônicas"
    ],
    ans: 0,
    expl: "“Chega de saudade” é considerada a canção marco do gênero. A Bossa Nova projetou a música brasileira internacionalmente, com sucessos como “Garota de Ipanema”."
  },
  {
    id: "lin-162", disc: "Artes", tema: "Teatro e cinema",
    text: "O Teatro do Oprimido, criado por Augusto Boal, propõe que:",
    opts: [
      "O espectador permaneça em silêncio absoluto",
      "As peças sejam encenadas apenas por atores profissionais em grandes teatros",
      "O público intervenha na cena, tornando-se “espect-ator” e ensaiando transformações sociais",
      "O teatro trate apenas de temas mitológicos",
      "O texto dramático seja seguido sem nenhuma alteração"
    ],
    ans: 2,
    expl: "Técnicas como o Teatro-Fórum convidam a plateia a substituir personagens e propor soluções para situações de opressão. O método é usado em vários países."
  },
  {
    id: "lin-163", disc: "Artes", tema: "Teatro e cinema",
    text: "O Cinema Novo, movimento dos anos 1960 liderado por Glauber Rocha, ficou conhecido pelo lema:",
    opts: [
      "“Uma câmera na mão e uma ideia na cabeça”",
      "“A arte pela arte”",
      "“Tupi or not tupi”",
      "“Menos é mais”",
      "“Luz, câmera, ação”"
    ],
    ans: 0,
    expl: "Com poucos recursos, os cineastas do Cinema Novo retrataram a realidade social brasileira, como a miséria e a violência no sertão, em filmes como “Deus e o diabo na terra do sol” (1964)."
  },
  {
    id: "lin-164", disc: "Artes", tema: "Patrimônio cultural",
    text: "O frevo, o samba de roda do Recôncavo Baiano e a roda de capoeira são reconhecidos como patrimônio cultural imaterial. Isso significa que se valorizam:",
    opts: [
      "Práticas, saberes e expressões transmitidos entre gerações e recriados pelas comunidades",
      "Apenas edifícios históricos e monumentos de pedra",
      "Objetos guardados em museus, sem uso",
      "Obras de artistas estrangeiros",
      "Bens que pertencem a uma única pessoa"
    ],
    ans: 0,
    expl: "O patrimônio imaterial inclui celebrações, danças, músicas, modos de fazer e lugares de práticas culturais. Seu reconhecimento ajuda a garantir a continuidade dessas tradições."
  },

  // ══════════ EDUCAÇÃO FÍSICA ══════════
  {
    id: "lin-165", disc: "Educação Física", tema: "Cultura corporal",
    text: "A capoeira, reconhecida como Patrimônio Cultural Imaterial da Humanidade, pode ser definida como:",
    opts: [
      "Uma manifestação afro-brasileira que reúne luta, dança, música e jogo, criada como forma de resistência",
      "Um esporte olímpico de origem europeia",
      "Uma dança de salão do século XX",
      "Uma arte marcial japonesa trazida por imigrantes",
      "Um jogo de tabuleiro indígena"
    ],
    ans: 0,
    expl: "Desenvolvida por africanos escravizados e seus descendentes, a capoeira foi perseguida e chegou a ser crime no início da República. Hoje é praticada em mais de 150 países."
  },
  {
    id: "lin-166", disc: "Educação Física", tema: "Cultura corporal",
    text: "Brincadeiras como amarelinha, pega-pega e pião fazem parte da cultura corporal de movimento porque:",
    opts: [
      "Foram inventadas recentemente pela indústria de brinquedos",
      "Servem apenas para gastar calorias",
      "Não envolvem regras nem interação social",
      "São praticadas exclusivamente por atletas profissionais",
      "São práticas corporais construídas historicamente e transmitidas entre gerações, com significados culturais"
    ],
    ans: 4,
    expl: "Jogos e brincadeiras populares variam conforme a região e a época e carregam valores, regras e formas de convivência. A Educação Física escolar trata esses saberes como conteúdo cultural."
  },
  {
    id: "lin-167", disc: "Educação Física", tema: "Saúde e atividade física",
    text: "A Organização Mundial da Saúde recomenda que adultos pratiquem semanalmente pelo menos:",
    opts: [
      "10 minutos de atividade física por mês",
      "150 minutos de atividade física aeróbica moderada (ou 75 minutos de atividade vigorosa)",
      "Exercícios apenas aos fins de semana, sem tempo mínimo",
      "6 horas diárias de musculação",
      "Nenhuma atividade, apenas dieta"
    ],
    ans: 1,
    expl: "As diretrizes falam em 150 a 300 minutos de atividade moderada por semana, além de fortalecimento muscular em dois ou mais dias. Qualquer quantidade de movimento é melhor que nenhuma."
  },
  {
    id: "lin-168", disc: "Educação Física", tema: "Saúde e atividade física",
    text: "O uso de esteroides anabolizantes sem prescrição médica, para ganho rápido de massa muscular, pode causar:",
    opts: [
      "Apenas benefícios, sem nenhum efeito colateral",
      "Problemas no fígado, alterações hormonais, doenças cardiovasculares e efeitos psicológicos",
      "Melhora garantida da saúde do coração",
      "Diminuição do risco de lesões",
      "Aumento da fertilidade sem riscos"
    ],
    ans: 1,
    expl: "Os anabolizantes alteram o equilíbrio hormonal e podem provocar infertilidade, acne, agressividade, lesões hepáticas e infartos. A busca por padrões corporais midiáticos contribui para esse uso."
  },
  {
    id: "lin-169", disc: "Educação Física", tema: "Saúde e atividade física",
    text: "O aquecimento antes de uma atividade física intensa é recomendado porque:",
    opts: [
      "Eleva gradualmente a temperatura corporal e a frequência cardíaca, preparando músculos e articulações e reduzindo o risco de lesões",
      "Diminui a circulação sanguínea nos músculos",
      "Substitui a necessidade de hidratação",
      "Faz o corpo gastar toda a energia antes do exercício",
      "Impede o aumento da frequência cardíaca"
    ],
    ans: 0,
    expl: "Exercícios leves e movimentos semelhantes aos da atividade principal aumentam a elasticidade muscular e a lubrificação das articulações, melhorando o desempenho e a segurança."
  },
  {
    id: "lin-170", disc: "Educação Física", tema: "Esporte e sociedade",
    text: "O esporte de rendimento e o esporte de participação (lazer) diferenciam-se porque:",
    opts: [
      "Apenas o esporte de participação tem regras",
      "O esporte de rendimento não exige treinamento",
      "O esporte de participação é proibido nas escolas",
      "O primeiro visa resultados e recordes em competições; o segundo, o prazer, a saúde e a sociabilidade",
      "Não há diferença entre eles"
    ],
    ans: 3,
    expl: "No esporte de rendimento, a performance é o objetivo central. No de participação, as regras podem ser adaptadas para incluir todos. A escola deve trabalhar o esporte de forma educativa."
  },
  {
    id: "lin-171", disc: "Educação Física", tema: "Esporte e sociedade",
    text: "Os Jogos Paralímpicos contribuem para a inclusão social porque:",
    opts: [
      "Dão visibilidade ao alto rendimento de atletas com deficiência e combatem estereótipos de incapacidade",
      "Excluem atletas com deficiência das competições",
      "Têm regras idênticas às dos Jogos Olímpicos em todas as modalidades",
      "São disputados apenas por atletas amadores",
      "Não possuem transmissão nem público"
    ],
    ans: 0,
    expl: "As modalidades paralímpicas têm classificações funcionais para garantir disputas justas. O Brasil está entre as potências paralímpicas, com destaque no atletismo e na natação."
  },

  // ══════════ INGLÊS ══════════
  {
    id: "lin-172", disc: "Inglês", tema: "Grammar",
    text: "Choose the correct option: \"By the time she arrived, he ___ for two hours.\"",
    opts: ["was waiting", "has been waiting", "will have waited", "is waiting", "had been waiting"],
    ans: 4,
    expl: "Past Perfect Continuous (had been + V-ing) is used for an action that was in progress before a specific moment in the past. 'By the time she arrived' indicates that reference point in the past."
  },
  {
    id: "lin-173", disc: "Inglês", tema: "Grammar",
    text: "\"I wish I had studied harder.\" This sentence expresses:",
    opts: [
      "A plan for the future",
      "Advice to another person",
      "A condition that is still possible",
      "Regret about a past action — the speaker didn't study hard enough",
      "Satisfaction with a past decision"
    ],
    ans: 3,
    expl: "'Wish + past perfect' expresses regret about a past situation that cannot be changed. The speaker is unhappy about not studying hard enough — it's too late to change it now."
  },
  {
    id: "lin-174", disc: "Inglês", tema: "Grammar",
    text: "\"She's been living in São Paulo since 2018.\" The use of Present Perfect Continuous suggests:",
    opts: [
      "She no longer lives in São Paulo",
      "She started living there in 2018 and still lives there now",
      "She lived there temporarily in 2018",
      "She will move to São Paulo in 2018",
      "She visited São Paulo in 2018"
    ],
    ans: 1,
    expl: "Present Perfect Continuous with 'since' + point in time indicates an action that began at that time and continues up to now. 'Since 2018' marks when the action started; the continuous aspect implies it's ongoing."
  },
  {
    id: "lin-175", disc: "Inglês", tema: "Grammar",
    text: "\"The company's new product, which was launched last month, has already sold out.\" The clause 'which was launched last month' is:",
    opts: [
      "A restrictive relative clause — identifying which product",
      "An adverbial clause of time",
      "A noun clause acting as subject",
      "A conditional clause",
      "A non-restrictive relative clause — adding extra information"
    ],
    ans: 4,
    expl: "Non-restrictive (non-defining) relative clauses are set off by commas and add extra information about a noun already identified. The product is identified ('the company's new product') — the clause adds details, not identification."
  },
  {
    id: "lin-176", disc: "Inglês", tema: "Grammar",
    text: "In “You should drink more water”, the modal verb “should” is used to:",
    opts: [
      "Give advice",
      "Express a past action",
      "Ask for permission",
      "Express impossibility",
      "Talk about obligation in the past"
    ],
    ans: 0,
    expl: "“Should” expressa conselho ou recomendação (“você deveria”). Para obrigação forte, usa-se “must” ou “have to”; para permissão, “can” ou “may”."
  },
  {
    id: "lin-177", disc: "Inglês", tema: "Grammar",
    text: "Choose the correct option: “If it rains tomorrow, we ___ the picnic.”",
    opts: ["will cancel", "cancelled", "would have cancelled", "cancelling", "had cancelled"],
    ans: 0,
    expl: "Na first conditional (situação possível no futuro), usa-se “if + presente simples” e “will + verbo” na outra oração: “If it rains, we will cancel”."
  },
  {
    id: "lin-178", disc: "Inglês", tema: "Vocabulary",
    text: "The word 'although' introduces a clause of:",
    opts: ["Reason", "Contrast/concession", "Result", "Condition", "Time"],
    ans: 1,
    expl: "'Although' (= even though, despite the fact that) introduces a concessive clause — it presents a contrast or unexpected result. 'Although it was raining, they continued playing' — rain didn't prevent the action."
  },
  {
    id: "lin-179", disc: "Inglês", tema: "Vocabulary",
    text: "In the sentence “Actually, I didn't like the movie”, the word “actually” means:",
    opts: ["Atualmente", "Rapidamente", "Felizmente", "Na verdade", "Ultimamente"],
    ans: 3,
    expl: "“Actually” é um falso cognato: parece “atualmente”, mas significa “na verdade”. “Atualmente” em inglês é “currently” ou “nowadays”."
  },
  {
    id: "lin-180", disc: "Inglês", tema: "Vocabulary",
    text: "In “She pretended to be asleep when her mother came in”, the verb “pretended” means:",
    opts: ["Pretendeu", "Preferiu", "Precisou", "Prometeu", "Fingiu"],
    ans: 4,
    expl: "“To pretend” é falso cognato e significa “fingir”. “Pretender” (ter a intenção) em inglês é “to intend”."
  },
  {
    id: "lin-181", disc: "Inglês", tema: "Vocabulary",
    text: "Read: “The weather was terrible. However, we decided to go to the beach.” The word “however” expresses:",
    opts: ["Addition", "Cause", "Contrast", "Time", "Example"],
    ans: 2,
    expl: "“However” (no entanto, contudo) introduz uma ideia que contrasta com a anterior: o tempo estava ruim, mas mesmo assim foram à praia."
  },
  {
    id: "lin-182", disc: "Inglês", tema: "Vocabulary",
    text: "In a recipe, you read: “Stir the mixture for two minutes.” The verb “stir” means:",
    opts: ["Cortar", "Assar", "Mexer", "Congelar", "Lavar"],
    ans: 2,
    expl: "Em receitas, “stir” significa mexer. Outros verbos comuns: “bake” (assar), “chop” (picar), “boil” (ferver), “freeze” (congelar)."
  },
  {
    id: "lin-183", disc: "Inglês", tema: "Reading",
    text: "Read the sign:\n“PLEASE DO NOT FEED THE ANIMALS. Human food can make them sick.”\nThe sign was probably found in a:",
    opts: ["Bank", "Library", "Hospital", "Zoo", "Supermarket"],
    ans: 3,
    expl: "The sign asks visitors not to give food to the animals and explains why: human food can make them ill. This kind of notice is typical of zoos and parks."
  },
  {
    id: "lin-184", disc: "Inglês", tema: "Reading",
    text: "Read the text:\n“Plastic bags take hundreds of years to decompose. Many supermarkets now encourage customers to bring their own reusable bags.”\nAccording to the text, supermarkets encourage customers to:",
    opts: [
      "Buy more plastic bags",
      "Throw bags in the ocean",
      "Stop going to supermarkets",
      "Pay for decomposition",
      "Use bags they can use many times"
    ],
    ans: 4,
    expl: "“Reusable” means that can be used again (re- + use + -able). The text connects the long decomposition time of plastic with the incentive to bring one's own bags."
  },
  {
    id: "lin-185", disc: "Inglês", tema: "Reading",
    text: "Read the quote:\n“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela\nIn this quote, education is compared to a weapon because it:",
    opts: [
      "Is dangerous and should be avoided",
      "Is used only in wars",
      "Has the power to transform society",
      "Can be bought in stores",
      "Is a physical object"
    ],
    ans: 2,
    expl: "A metáfora associa a educação a uma “arma” no sentido de instrumento poderoso de transformação, não de violência."
  },
  {
    id: "lin-186", disc: "Inglês", tema: "Reading",
    text: "Read the text:\n“Brazil has the largest rainforest in the world. The Amazon is home to millions of species, and many of them have not been discovered yet.”\nThe expression “have not been discovered yet” means that many species:",
    opts: [
      "Have already disappeared",
      "Live only in zoos",
      "Were discovered a long time ago",
      "Are still unknown to science",
      "Do not live in the Amazon"
    ],
    ans: 3,
    expl: "“Not ... yet” indica algo que ainda não aconteceu. O texto afirma que muitas espécies ainda não foram descobertas."
  },

  // ══════════ ESPANHOL ══════════
  {
    id: "lin-187", disc: "Espanhol", tema: "Gramática",
    text: "\"Cuando llegues, llámame.\" El verbo 'llegues' está en subjuntivo porque:",
    opts: [
      "Es una acción pasada narrada con distancia",
      "La conjunción 'cuando' con referencia futura exige subjuntivo",
      "El hablante duda de que la persona llegue",
      "Es un mandato indirecto al interlocutor",
      "La oración principal tiene verbo en imperativo"
    ],
    ans: 1,
    expl: "En español, las oraciones temporales con referencia futura ('cuando', 'hasta que', 'en cuanto') van en subjuntivo: 'Cuando llegues' (futuro) vs. 'Cuando llegaba' (hábito pasado, indicativo)."
  },
  {
    id: "lin-188", disc: "Espanhol", tema: "Gramática",
    text: "\"Me duele la cabeza\" — el verbo 'doler' en esta construcción funciona de manera similar al verbo:",
    opts: ["Gustar", "Tener", "Ser", "Estar", "Hacer"],
    ans: 0,
    expl: "Como 'gustar', el verbo 'doler' invierte la estructura sujeto-verbo-objeto del español: el sujeto gramatical es 'la cabeza' (cosa que duele) y el objeto indirecto es 'me' (quien siente el dolor). Gustar/doler/molestar/encantar siguen este patrón."
  },
  {
    id: "lin-189", disc: "Espanhol", tema: "Gramática",
    text: "\"Hace tres años que vivo en Brasil\" — la estructura con 'hace' expresa:",
    opts: [
      "Una acción que dura hace tres años y continúa en el presente",
      "Una acción terminada hace tres años",
      "Una acción que ocurrirá en tres años",
      "Una condición hipotética",
      "Una acción habitual del pasado"
    ],
    ans: 0,
    expl: "'Hace + tiempo + que + presente' expresa duración de una acción que comenzó en el pasado y continúa en el presente. Equivale al Present Perfect Continuous en inglés o ao 'faz X que' do português."
  },
  {
    id: "lin-190", disc: "Espanhol", tema: "Gramática",
    text: "No trecho “Estudió mucho; sin embargo, no aprobó el examen”, a expressão “sin embargo” indica:",
    opts: [
      "Adição (além disso)",
      "Conclusão (portanto)",
      "Causa (porque)",
      "Oposição (contudo, no entanto)",
      "Tempo (enquanto)"
    ],
    ans: 3,
    expl: "“Sin embargo” equivale a “no entanto” e introduz um contraste: apesar de ter estudado, não foi aprovado."
  },
  {
    id: "lin-191", disc: "Espanhol", tema: "Gramática",
    text: "Em espanhol, palavras como “el puente”, “la leche” e “el viaje” têm gênero diferente do português. Elas são chamadas de:",
    opts: ["Heterossemânticas", "Heterotônicas", "Sinônimas", "Onomatopeias", "Heterogenéricas"],
    ans: 4,
    expl: "Heterogenéricos são palavras de mesma origem com gênero diferente nas duas línguas: “a ponte” / “el puente”; “o leite” / “la leche”; “a viagem” / “el viaje”."
  },
  {
    id: "lin-192", disc: "Espanhol", tema: "Vocabulário",
    text: "Em espanhol, a frase “La comida estaba exquisita” significa que a comida estava:",
    opts: ["Deliciosa", "Estranha", "Estragada", "Fria", "Salgada"],
    ans: 0,
    expl: "“Exquisito” é falso amigo (heterossemântico): em espanhol significa delicioso, refinado. O “esquisito” do português corresponde a “raro” ou “extraño”."
  },
  {
    id: "lin-193", disc: "Espanhol", tema: "Vocabulário",
    text: "No espanhol, “Mi hermana está embarazada” significa que a irmã está:",
    opts: ["Envergonhada", "Atrapalhada", "Cansada", "Grávida", "Doente"],
    ans: 3,
    expl: "“Embarazada” é um dos falsos amigos mais conhecidos. Para dizer “envergonhada”, usa-se “avergonzada”."
  },
  {
    id: "lin-194", disc: "Espanhol", tema: "Vocabulário",
    text: "Leia: “Trabajo en una oficina en el centro de la ciudad.” A palavra “oficina” significa:",
    opts: ["Escritório", "Oficina mecânica", "Fábrica", "Loja", "Escola"],
    ans: 0,
    expl: "Em espanhol, “oficina” é escritório. A oficina mecânica do português é “taller”."
  },
  {
    id: "lin-195", disc: "Espanhol", tema: "Vocabulário",
    text: "Na frase “Espérame un rato, ya vuelvo”, a palavra “rato” significa:",
    opts: ["Rato (animal)", "Carro", "Dinheiro", "Caminho", "Momento, instante"],
    ans: 4,
    expl: "“Un rato” é um curto período de tempo. O animal rato, em espanhol, é “ratón” ou “rata”."
  },
  {
    id: "lin-196", disc: "Espanhol", tema: "Leitura",
    text: "Leia o aviso:\n“Se prohíbe fumar en todo el recinto.”\nO aviso informa que:",
    opts: [
      "Só é permitido fumar na entrada",
      "É obrigatório fumar no recinto",
      "Não é permitido fumar em nenhuma parte do local",
      "Há uma área reservada para fumantes",
      "Os cigarros estão à venda no local"
    ],
    ans: 2,
    expl: "“Se prohíbe” = é proibido; “en todo el recinto” = em todo o local. Construções com “se” impessoal são comuns em avisos públicos em espanhol."
  },
  {
    id: "lin-197", disc: "Espanhol", tema: "Leitura",
    text: "Leia o texto:\n“El mate es una infusión tradicional de Argentina, Uruguay y Paraguay. Se comparte entre amigos y familiares como símbolo de hospitalidad.”\nSegundo o texto, o mate:",
    opts: [
      "É uma comida típica do México",
      "É uma bebida tradicional compartilhada como sinal de acolhimento",
      "É consumido apenas por turistas",
      "É proibido em reuniões familiares",
      "É uma bebida alcoólica europeia"
    ],
    ans: 1,
    expl: "O texto apresenta o mate como “infusión” (bebida feita com ervas) e destaca seu valor social: “se comparte” (é compartilhado) como símbolo de “hospitalidad”."
  }
];
