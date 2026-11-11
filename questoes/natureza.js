// ─── SimulaDia · Banco de questões: Ciências da Natureza e suas Tecnologias ───
// 178 questões autorais no estilo do ENEM, organizadas por disciplina e tema.
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

window.BANK_NAT = [

  // ══════════ FÍSICA ══════════
  {
    id: "nat-001", disc: "Física", tema: "Cinemática",
    text: "Um carro trafega a 72 km/h. Essa velocidade, em metros por segundo, corresponde a:",
    opts: ["7,2 m/s", "10 m/s", "20 m/s", "36 m/s", "72 m/s"],
    ans: 2,
    expl: "Para converter km/h em m/s, divide-se por 3,6: 72 ÷ 3,6 = 20 m/s."
  },
  {
    id: "nat-002", disc: "Física", tema: "Cinemática",
    text: "Um ciclista percorre 100 km a 50 km/h e, em seguida, mais 100 km a 100 km/h. Sua velocidade média no percurso total é:",
    opts: ["60 km/h", "≈ 66,7 km/h", "70 km/h", "75 km/h", "80 km/h"],
    ans: 1,
    expl: "Tempo no 1º trecho: 100/50 = 2 h; no 2º: 100/100 = 1 h. Vm = distância total / tempo total = 200/3 ≈ 66,7 km/h. A média simples das velocidades (75 km/h) é uma armadilha comum."
  },
  {
    id: "nat-003", disc: "Física", tema: "Cinemática",
    text: "Um carro parte do repouso com aceleração constante de 2 m/s². A distância percorrida nos primeiros 5 segundos é:",
    opts: ["10 m", "20 m", "25 m", "50 m", "100 m"],
    ans: 2,
    expl: "No MUV a partir do repouso: d = a·t²/2 = 2·25/2 = 25 m."
  },
  {
    id: "nat-004", disc: "Física", tema: "Cinemática",
    text: "Um objeto é abandonado do alto de um prédio de 20 m. Desprezando a resistência do ar (g = 10 m/s²), a velocidade com que atinge o solo é:",
    opts: ["10 m/s", "14 m/s", "20 m/s", "40 m/s", "200 m/s"],
    ans: 2,
    expl: "Pela equação de Torricelli: v² = 2·g·h = 2·10·20 = 400 → v = 20 m/s. A queda dura t = v/g = 2 s."
  },
  {
    id: "nat-005", disc: "Física", tema: "Cinemática",
    text: "Em uma demonstração feita na Lua, um astronauta soltou ao mesmo tempo, da mesma altura, um martelo e uma pena. Observou-se que:",
    opts: [
      "O martelo chegou primeiro, pois é mais pesado",
      "Ambos chegaram ao solo juntos, pois na ausência de ar a aceleração da gravidade é igual para todos os corpos",
      "A pena chegou primeiro, pois é mais leve",
      "Nenhum dos dois caiu, pois na Lua não há gravidade",
      "A pena flutuou e o martelo caiu lentamente"
    ],
    ans: 1,
    expl: "Sem resistência do ar, todos os corpos caem com a mesma aceleração, independentemente da massa, como previu Galileu. A demonstração foi feita na missão Apollo 15, em 1971."
  },
  {
    id: "nat-006", disc: "Física", tema: "Dinâmica",
    text: "Quando um ônibus freia bruscamente, os passageiros em pé são projetados para a frente. Esse fenômeno é explicado:",
    opts: [
      "Pela 2ª Lei de Newton (princípio fundamental da dinâmica)",
      "Pela 3ª Lei de Newton (ação e reação)",
      "Pela Lei da Gravitação Universal",
      "Pela 1ª Lei de Newton (princípio da inércia)",
      "Pela Lei de Ohm"
    ],
    ans: 3,
    expl: "Os corpos tendem a manter seu estado de movimento. Quando o ônibus para, os passageiros tendem a continuar em movimento — por isso o cinto de segurança é essencial."
  },
  {
    id: "nat-007", disc: "Física", tema: "Dinâmica",
    text: "Uma força resultante de 10 N é aplicada a um corpo de massa 2 kg. A aceleração adquirida pelo corpo é:",
    opts: ["2 m/s²", "5 m/s²", "8 m/s²", "12 m/s²", "20 m/s²"],
    ans: 1,
    expl: "Pela 2ª Lei de Newton: F = m·a → a = F/m = 10/2 = 5 m/s²."
  },
  {
    id: "nat-008", disc: "Física", tema: "Dinâmica",
    text: "Um foguete se move no espaço, onde não há ar para “empurrar”. Sua propulsão é explicada pela:",
    opts: [
      "3ª Lei de Newton: o foguete empurra os gases para trás e os gases empurram o foguete para a frente",
      "1ª Lei de Newton, pois o foguete não tem massa",
      "Lei da Gravitação, pois o Sol atrai o foguete",
      "Lei de Coulomb, por causa das cargas elétricas dos gases",
      "Primeira Lei da Termodinâmica, pois o foguete esfria"
    ],
    ans: 0,
    expl: "Ação e reação atuam em corpos diferentes: o foguete exerce força sobre os gases expelidos, e estes exercem força de mesma intensidade e sentido oposto sobre o foguete."
  },
  {
    id: "nat-009", disc: "Física", tema: "Dinâmica",
    text: "Um astronauta de massa 70 kg vai à Lua, onde g ≈ 1,6 m/s². Na Lua, sua massa e seu peso são, respectivamente:",
    opts: ["70 kg e 700 N", "11,2 kg e 112 N", "112 kg e 70 N", "0 kg e 0 N", "70 kg e 112 N"],
    ans: 4,
    expl: "A massa é a quantidade de matéria e não muda com o local: 70 kg. O peso é a força gravitacional: P = m·g = 70·1,6 = 112 N. Na Terra (g = 10 m/s²), seria 700 N."
  },
  {
    id: "nat-010", disc: "Física", tema: "Dinâmica",
    text: "Um bloco de 10 kg é puxado sobre uma superfície horizontal por uma força de 50 N. O coeficiente de atrito cinético é 0,3 (g = 10 m/s²). A aceleração do bloco é:",
    opts: ["1 m/s²", "2 m/s²", "3 m/s²", "5 m/s²", "8 m/s²"],
    ans: 1,
    expl: "Atrito: Fat = μ·N = 0,3·100 = 30 N. Resultante: 50 − 30 = 20 N. Aceleração: a = 20/10 = 2 m/s²."
  },
  {
    id: "nat-011", disc: "Física", tema: "Dinâmica",
    text: "Em uma curva plana, o que mantém um carro em trajetória circular é:",
    opts: [
      "A força centrífuga produzida pelo motor",
      "A inércia, que puxa o carro para o centro da curva",
      "A força de atrito entre os pneus e o asfalto, que atua como força centrípeta",
      "O peso do carro, que atua na horizontal",
      "A resistência do ar, que empurra o carro para dentro"
    ],
    ans: 2,
    expl: "Para fazer a curva, é preciso uma força resultante apontando para o centro (centrípeta). Em pista plana, ela é fornecida pelo atrito. Com pista molhada, o atrito diminui e o carro tende a sair pela tangente."
  },
  {
    id: "nat-012", disc: "Física", tema: "Energia",
    text: "A energia cinética de um carro de 1.000 kg a 20 m/s vale:",
    opts: ["20 kJ", "100 kJ", "200 kJ", "400 kJ", "2.000 kJ"],
    ans: 2,
    expl: "Ec = m·v²/2 = 1.000·400/2 = 200.000 J = 200 kJ. Como depende do quadrado da velocidade, dobrar a velocidade quadruplica a energia — e a gravidade de um acidente."
  },
  {
    id: "nat-013", disc: "Física", tema: "Energia",
    text: "Um carrinho de montanha-russa parte do repouso a 45 m de altura. Desprezando atritos (g = 10 m/s²), sua velocidade no ponto mais baixo do percurso será:",
    opts: ["15 m/s", "20 m/s", "30 m/s", "45 m/s", "90 m/s"],
    ans: 2,
    expl: "Conservação da energia mecânica: m·g·h = m·v²/2 → v = √(2gh) = √900 = 30 m/s."
  },
  {
    id: "nat-014", disc: "Física", tema: "Energia",
    text: "Um elevador ergue uma carga de 500 kg a 20 m de altura em 10 s, com velocidade constante (g = 10 m/s²). A potência útil desenvolvida é:",
    opts: ["1 kW", "5 kW", "10 kW", "20 kW", "100 kW"],
    ans: 2,
    expl: "Trabalho = m·g·h = 500·10·20 = 100.000 J. Potência = trabalho/tempo = 100.000/10 = 10.000 W = 10 kW."
  },
  {
    id: "nat-015", disc: "Física", tema: "Energia",
    text: "Um motor elétrico recebe 1.000 W de potência e fornece 800 W de potência mecânica. Seu rendimento é:",
    opts: ["8%", "20%", "60%", "80%", "125%"],
    ans: 3,
    expl: "η = potência útil / potência total = 800/1.000 = 0,8 = 80%. Os 200 W restantes são dissipados, principalmente como calor."
  },
  {
    id: "nat-016", disc: "Física", tema: "Energia",
    text: "Em uma usina hidrelétrica, a sequência principal de transformações de energia é:",
    opts: [
      "Química → térmica → elétrica",
      "Nuclear → térmica → cinética",
      "Elétrica → cinética → potencial",
      "Potencial gravitacional → cinética → elétrica",
      "Luminosa → química → elétrica"
    ],
    ans: 3,
    expl: "A água acumulada na represa tem energia potencial gravitacional. Ao descer, ganha energia cinética e gira as turbinas acopladas a geradores, que produzem energia elétrica por indução."
  },
  {
    id: "nat-017", disc: "Física", tema: "Energia",
    text: "Os airbags e as zonas de deformação dos carros reduzem os ferimentos em colisões porque:",
    opts: [
      "Aumentam o tempo de interação durante a parada, diminuindo a força média sobre os ocupantes",
      "Diminuem a massa dos ocupantes no momento da batida",
      "Anulam completamente a quantidade de movimento",
      "Aumentam a velocidade do carro antes da colisão",
      "Transformam a energia cinética em energia elétrica"
    ],
    ans: 0,
    expl: "Pelo teorema do impulso, F·Δt = Δq. A variação da quantidade de movimento é a mesma; se o tempo de parada aumenta, a força média diminui."
  },
  {
    id: "nat-018", disc: "Física", tema: "Energia",
    text: "Comparadas às lâmpadas incandescentes, as lâmpadas de LED são mais eficientes porque:",
    opts: [
      "Consomem mais energia para produzir a mesma luz",
      "Funcionam sem eletricidade",
      "Convertem maior parte da energia elétrica em luz e menos em calor",
      "Produzem luz por aquecimento de um filamento",
      "Têm potência maior"
    ],
    ans: 2,
    expl: "Nas incandescentes, a maior parte da energia vira calor no filamento. O LED emite luz por um processo eletrônico, com muito menos perdas, e dura bem mais."
  },
  {
    id: "nat-019", disc: "Física", tema: "Gravitação",
    text: "Astronautas na Estação Espacial Internacional parecem flutuar. Isso ocorre porque:",
    opts: [
      "Não existe gravidade a 400 km de altitude",
      "A Lua anula a gravidade da Terra",
      "A estação está parada no espaço",
      "Os astronautas usam roupas que repelem a gravidade",
      "Eles e a estação estão em queda livre contínua em torno da Terra"
    ],
    ans: 4,
    expl: "A essa altitude, a gravidade ainda é cerca de 90% da sentida na superfície. Estação e astronautas “caem” juntos ao redor da Terra, em órbita, por isso não há contato entre eles e o piso — a chamada imponderabilidade."
  },
  {
    id: "nat-020", disc: "Física", tema: "Gravitação",
    text: "O ano-luz é uma unidade usada em Astronomia para medir:",
    opts: [
      "Distância — a percorrida pela luz no vácuo em um ano",
      "Tempo — a duração de um ano em outros planetas",
      "Velocidade das estrelas",
      "Brilho das galáxias",
      "Massa dos planetas"
    ],
    ans: 0,
    expl: "Um ano-luz equivale a cerca de 9,5 trilhões de quilômetros. A estrela mais próxima do Sol, Proxima Centauri, está a cerca de 4,2 anos-luz."
  },
  {
    id: "nat-021", disc: "Física", tema: "Hidrostática",
    text: "Uma faca bem afiada corta com mais facilidade do que uma faca cega porque:",
    opts: [
      "A força aplicada se torna maior",
      "A massa da faca aumenta quando afiada",
      "A pressão diminui quando a área diminui",
      "A área de contato é menor, o que aumenta a pressão para a mesma força",
      "O atrito com o alimento desaparece"
    ],
    ans: 3,
    expl: "Pressão = força/área. Com a mesma força, uma área de contato menor resulta em pressão maior. O raciocínio inverso explica por que raquetes de neve evitam que a pessoa afunde."
  },
  {
    id: "nat-022", disc: "Física", tema: "Hidrostática",
    text: "A pressão em um líquido aumenta cerca de 1 atm a cada 10 m de profundidade na água. Um mergulhador a 30 m de profundidade, ao nível do mar, está submetido a uma pressão total de aproximadamente:",
    opts: ["1 atm", "2 atm", "3 atm", "4 atm", "30 atm"],
    ans: 3,
    expl: "Pela Lei de Stevin, soma-se a pressão atmosférica (1 atm) à pressão da coluna d'água (3 atm para 30 m): total de 4 atm."
  },
  {
    id: "nat-023", disc: "Física", tema: "Hidrostática",
    text: "Em um elevador hidráulico, o pistão menor tem área de 10 cm² e o maior, de 500 cm². Aplicando 100 N no pistão menor, a força no maior será de:",
    opts: ["500 N", "1.000 N", "2.500 N", "5.000 N", "50.000 N"],
    ans: 3,
    expl: "Pelo Princípio de Pascal, a pressão se transmite integralmente: F₁/A₁ = F₂/A₂ → F₂ = 100·(500/10) = 5.000 N."
  },
  {
    id: "nat-024", disc: "Física", tema: "Hidrostática",
    text: "Um navio de aço, material mais denso que a água, flutua porque:",
    opts: [
      "O aço perde massa quando colocado na água",
      "A água do mar não exerce empuxo",
      "O motor do navio o mantém acima da água",
      "Seu formato oco faz com que a densidade média do conjunto seja menor que a da água, e o empuxo equilibra o peso",
      "O peso do navio é sempre zero no mar"
    ],
    ans: 3,
    expl: "Pelo Princípio de Arquimedes, o empuxo é igual ao peso do líquido deslocado. O casco desloca um grande volume de água, e o navio flutua quando o empuxo iguala seu peso."
  },
  {
    id: "nat-025", disc: "Física", tema: "Hidrostática",
    text: "A panela de pressão cozinha os alimentos mais rapidamente porque:",
    opts: [
      "A pressão diminui o ponto de ebulição da água",
      "O vapor é retirado da panela continuamente",
      "A panela impede que a água ferva",
      "O aumento da pressão interna eleva a temperatura de ebulição da água acima de 100 °C",
      "O metal da panela produz calor próprio"
    ],
    ans: 3,
    expl: "Com a pressão interna maior que a atmosférica, a água só ferve por volta de 120 °C. A temperatura mais alta acelera o cozimento."
  },
  {
    id: "nat-026", disc: "Física", tema: "Termologia",
    text: "Em La Paz, na Bolívia, a cerca de 3.600 m de altitude, a água ferve a aproximadamente 88 °C. Isso ocorre porque:",
    opts: [
      "A pressão atmosférica é menor em grandes altitudes, reduzindo a temperatura de ebulição",
      "O ar de montanha é mais quente",
      "A água de montanha possui mais sais dissolvidos",
      "A gravidade é maior nas altitudes elevadas",
      "Há mais oxigênio no ar das montanhas"
    ],
    ans: 0,
    expl: "A temperatura de ebulição depende da pressão sobre o líquido. Com menos ar acima, a pressão é menor, e a água ferve a uma temperatura mais baixa — o que torna o cozimento mais lento."
  },
  {
    id: "nat-027", disc: "Física", tema: "Termologia",
    text: "A temperatura de 40 °C, na escala Fahrenheit, corresponde a:",
    opts: ["72 °F", "88 °F", "104 °F", "112 °F", "140 °F"],
    ans: 2,
    expl: "Usando F = 1,8·C + 32: F = 1,8·40 + 32 = 72 + 32 = 104 °F."
  },
  {
    id: "nat-028", disc: "Física", tema: "Termologia",
    text: "Para aquecer 500 g de água de 20 °C a 70 °C (calor específico da água = 1 cal/g·°C), a quantidade de calor necessária é:",
    opts: ["2,5 kcal", "10 kcal", "25 kcal", "35 kcal", "50 kcal"],
    ans: 2,
    expl: "Q = m·c·ΔT = 500·1·50 = 25.000 cal = 25 kcal."
  },
  {
    id: "nat-029", disc: "Física", tema: "Termologia",
    text: "Misturam-se 200 g de água a 80 °C com 200 g de água a 20 °C, em um recipiente isolado. A temperatura final de equilíbrio será:",
    opts: ["40 °C", "50 °C", "60 °C", "70 °C", "100 °C"],
    ans: 1,
    expl: "Calor cedido = calor recebido: 200·(80 − T) = 200·(T − 20) → 80 − T = T − 20 → T = 50 °C. Com massas iguais da mesma substância, a temperatura final é a média."
  },
  {
    id: "nat-030", disc: "Física", tema: "Termologia",
    text: "Durante a fusão do gelo a 0 °C, sob pressão constante, mesmo recebendo calor, a temperatura não se altera. Isso acontece porque:",
    opts: [
      "O gelo não absorve calor durante a fusão",
      "O termômetro deixa de funcionar a 0 °C",
      "O calor é transformado em massa",
      "A água líquida é mais fria que o gelo",
      "O calor recebido é usado para romper as ligações entre as moléculas, mudando o estado físico (calor latente)"
    ],
    ans: 4,
    expl: "Durante a mudança de estado, a energia recebida altera a organização das moléculas, e não sua agitação média. Por isso a temperatura fica constante até todo o gelo derreter."
  },
  {
    id: "nat-031", disc: "Física", tema: "Termologia",
    text: "O congelador fica na parte de cima das geladeiras tradicionais para favorecer a circulação do ar frio. Esse processo de transmissão de calor é a:",
    opts: ["Convecção", "Condução", "Irradiação", "Sublimação", "Dilatação"],
    ans: 0,
    expl: "O ar resfriado próximo ao congelador fica mais denso e desce; o ar mais quente de baixo sobe. Essas correntes de convecção distribuem o frio pelo interior da geladeira."
  },
  {
    id: "nat-032", disc: "Física", tema: "Termologia",
    text: "Uma garrafa térmica possui paredes duplas espelhadas com vácuo entre elas. Essas características dificultam, respectivamente, a perda de calor por:",
    opts: [
      "Irradiação (espelhamento) e condução e convecção (vácuo)",
      "Condução (espelhamento) e irradiação (vácuo)",
      "Convecção (espelhamento) e irradiação (vácuo)",
      "Apenas condução, nos dois casos",
      "Evaporação, nos dois casos"
    ],
    ans: 0,
    expl: "Superfícies espelhadas refletem a radiação térmica. O vácuo, sem matéria, impede a condução e a convecção, que precisam de um meio material."
  },
  {
    id: "nat-033", disc: "Física", tema: "Termologia",
    text: "Nos trilhos de trem e em pontes, deixam-se pequenos espaços entre as peças metálicas. Esse cuidado serve para:",
    opts: [
      "Permitir a dilatação térmica dos materiais nos dias quentes, evitando deformações",
      "Economizar metal na construção",
      "Facilitar o escoamento da água da chuva",
      "Diminuir o peso da estrutura",
      "Aumentar o atrito com as rodas"
    ],
    ans: 0,
    expl: "Os metais se expandem quando aquecidos. Sem as juntas de dilatação, a expansão poderia empenar trilhos ou provocar rachaduras em pontes e calçadas."
  },
  {
    id: "nat-034", disc: "Física", tema: "Termodinâmica",
    text: "Um gás recebe 500 J de calor e realiza um trabalho de 200 J sobre o meio externo. A variação de sua energia interna é:",
    opts: ["−300 J", "200 J", "300 J", "500 J", "700 J"],
    ans: 2,
    expl: "Pela 1ª Lei da Termodinâmica: ΔU = Q − τ = 500 − 200 = 300 J. A energia se conserva: parte do calor vira trabalho, o resto aumenta a energia interna."
  },
  {
    id: "nat-035", disc: "Física", tema: "Termodinâmica",
    text: "Uma máquina térmica ideal (de Carnot) opera entre uma fonte quente a 600 K e uma fonte fria a 300 K. Seu rendimento máximo é:",
    opts: ["25%", "40%", "50%", "75%", "100%"],
    ans: 2,
    expl: "η = 1 − Tfria/Tquente = 1 − 300/600 = 0,5 = 50%. Nenhuma máquina real atinge esse valor."
  },
  {
    id: "nat-036", disc: "Física", tema: "Termodinâmica",
    text: "A Segunda Lei da Termodinâmica implica que:",
    opts: [
      "Nenhuma máquina térmica operando em ciclos converte integralmente calor em trabalho",
      "A energia pode ser criada a partir do nada",
      "O calor flui espontaneamente do corpo frio para o quente",
      "Todas as máquinas térmicas têm rendimento de 100%",
      "A temperatura de um corpo nunca muda"
    ],
    ans: 0,
    expl: "Sempre há calor rejeitado para a fonte fria. Por isso motores a combustão desperdiçam grande parte da energia do combustível como calor."
  },
  {
    id: "nat-037", disc: "Física", tema: "Óptica",
    text: "A imagem de uma pessoa em um espelho plano é:",
    opts: [
      "Real, maior e invertida de cabeça para baixo",
      "Real, menor e direita",
      "Virtual, menor e invertida de cabeça para baixo",
      "Virtual, do mesmo tamanho e com inversão entre direita e esquerda",
      "Virtual e sempre maior que o objeto"
    ],
    ans: 3,
    expl: "No espelho plano, a imagem é virtual (formada pelo prolongamento dos raios), do mesmo tamanho e à mesma distância do espelho. Por isso a palavra AMBULÂNCIA é escrita invertida na frente das ambulâncias."
  },
  {
    id: "nat-038", disc: "Física", tema: "Óptica",
    text: "Um lápis parcialmente mergulhado em um copo com água parece “quebrado”. Esse efeito é causado pela:",
    opts: [
      "Reflexão total da luz na superfície da água",
      "Difração da luz nas bordas do lápis",
      "Absorção da luz pela água",
      "Polarização da luz pelo vidro do copo",
      "Refração da luz, que muda de velocidade ao passar da água para o ar"
    ],
    ans: 4,
    expl: "Ao mudar de meio, a luz muda de velocidade e de direção. Nosso cérebro interpreta os raios como se viessem em linha reta, e a parte submersa parece deslocada."
  },
  {
    id: "nat-039", disc: "Física", tema: "Óptica",
    text: "Uma camiseta vermelha, observada em um ambiente iluminado apenas por luz verde, parecerá:",
    opts: ["Vermelha", "Verde", "Amarela", "Preta (escura)", "Branca"],
    ans: 3,
    expl: "Um objeto vermelho reflete principalmente a luz vermelha e absorve as demais. Sob luz verde, ele absorve quase toda a luz incidente e não tem vermelho para refletir — por isso parece escuro."
  },
  {
    id: "nat-040", disc: "Física", tema: "Óptica",
    text: "Uma pessoa míope enxerga mal de longe porque a imagem se forma antes da retina. Para corrigir a miopia, usam-se lentes:",
    opts: [
      "Convergentes",
      "Divergentes",
      "Cilíndricas convergentes",
      "Bifocais convergentes",
      "Planas"
    ],
    ans: 1,
    expl: "Na miopia, o olho é convergente demais (ou alongado). A lente divergente afasta a imagem, levando-a até a retina. A hipermetropia, ao contrário, é corrigida com lentes convergentes."
  },
  {
    id: "nat-041", disc: "Física", tema: "Óptica",
    text: "O arco-íris é formado quando a luz do Sol atravessa gotas de chuva e se separa em várias cores. Esse fenômeno é chamado de:",
    opts: [
      "Difração do som",
      "Polarização da luz",
      "Reflexão difusa",
      "Dispersão da luz",
      "Interferência sonora"
    ],
    ans: 3,
    expl: "Cada cor (frequência) sofre um desvio diferente ao refratar na gota, pois o índice de refração da água varia com a frequência. Assim a luz branca se decompõe nas cores do espectro."
  },
  {
    id: "nat-042", disc: "Física", tema: "Ondulatória",
    text: "Uma rádio FM transmite na frequência de 100 MHz. Sabendo que as ondas de rádio se propagam a 3 × 10⁸ m/s, o comprimento de onda é:",
    opts: ["0,3 m", "3 m", "30 m", "300 m", "3.000 m"],
    ans: 1,
    expl: "v = λ·f → λ = v/f = (3 × 10⁸)/(1 × 10⁸) = 3 m."
  },
  {
    id: "nat-043", disc: "Física", tema: "Ondulatória",
    text: "Nos filmes de ficção, explosões no espaço sideral costumam ser acompanhadas de grandes estrondos. Fisicamente, isso é incorreto porque:",
    opts: [
      "O som é uma onda mecânica e precisa de um meio material para se propagar",
      "O som se propaga mais rápido no vácuo",
      "A luz da explosão anula o som",
      "No espaço o som vira luz",
      "O som só se propaga na água"
    ],
    ans: 0,
    expl: "Ondas mecânicas, como o som, propagam-se pela vibração das partículas do meio. No vácuo não há partículas, então não há som. A luz, onda eletromagnética, propaga-se no vácuo."
  },
  {
    id: "nat-044", disc: "Física", tema: "Ondulatória",
    text: "Quando uma ambulância se aproxima, o som da sirene parece mais agudo; quando se afasta, mais grave. Esse fenômeno é o:",
    opts: [
      "Efeito fotoelétrico",
      "Efeito estufa",
      "Efeito Doppler",
      "Efeito Joule",
      "Efeito Tyndall"
    ],
    ans: 2,
    expl: "No efeito Doppler, o movimento relativo entre fonte e observador altera a frequência percebida: aumenta na aproximação e diminui no afastamento. Radares de velocidade usam o mesmo princípio."
  },
  {
    id: "nat-045", disc: "Física", tema: "Ondulatória",
    text: "Uma cantora consegue quebrar uma taça de cristal emitindo uma nota específica. Esse fenômeno é explicado pela:",
    opts: [
      "Refração do som no cristal",
      "Reflexão total do som",
      "Polarização das ondas sonoras",
      "Ressonância, quando a frequência do som coincide com a frequência natural de vibração da taça",
      "Dispersão da luz no cristal"
    ],
    ans: 3,
    expl: "Quando uma estrutura é excitada em sua frequência natural, a amplitude de vibração aumenta muito. O mesmo fenômeno explica o colapso da ponte de Tacoma, nos EUA, em 1940."
  },
  {
    id: "nat-046", disc: "Física", tema: "Ondulatória",
    text: "Uma pessoa grita diante de um paredão e ouve o eco 2 segundos depois. Sendo a velocidade do som no ar 340 m/s, a distância até o paredão é de:",
    opts: ["170 m", "340 m", "680 m", "1.360 m", "3.400 m"],
    ans: 1,
    expl: "Em 2 s, o som percorre 340·2 = 680 m — ida e volta. A distância até o paredão é metade: 340 m."
  },
  {
    id: "nat-047", disc: "Física", tema: "Ondulatória",
    text: "Em ordem crescente de frequência, as radiações eletromagnéticas são:",
    opts: [
      "Raios gama, raios X, ultravioleta, luz visível, infravermelho, micro-ondas e rádio",
      "Luz visível, rádio, raios X, micro-ondas e ultravioleta",
      "Ondas de rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e raios gama",
      "Infravermelho, raios gama, rádio, luz visível e micro-ondas",
      "Ultravioleta, infravermelho, rádio, raios X e luz visível"
    ],
    ans: 2,
    expl: "Quanto maior a frequência, maior a energia da radiação e menor o comprimento de onda. Por isso ultravioleta, raios X e gama são ionizantes ou potencialmente danosos às células."
  },
  {
    id: "nat-048", disc: "Física", tema: "Eletricidade",
    text: "Um resistor de 20 Ω é percorrido por uma corrente de 2 A. A tensão elétrica entre seus terminais é:",
    opts: ["10 V", "20 V", "40 V", "80 V", "200 V"],
    ans: 2,
    expl: "Pela 1ª Lei de Ohm: U = R·i = 20·2 = 40 V."
  },
  {
    id: "nat-049", disc: "Física", tema: "Eletricidade",
    text: "Um chuveiro de 5.500 W funciona ligado a uma rede de 220 V. A corrente elétrica que o atravessa é de:",
    opts: ["10 A", "20 A", "25 A", "40 A", "55 A"],
    ans: 2,
    expl: "P = U·i → i = P/U = 5.500/220 = 25 A. Por isso chuveiros exigem fios mais grossos e disjuntores adequados."
  },
  {
    id: "nat-050", disc: "Física", tema: "Eletricidade",
    text: "Um chuveiro de 4.000 W é usado 30 minutos por dia durante 30 dias. O consumo de energia no mês é:",
    opts: ["6 kWh", "15 kWh", "30 kWh", "60 kWh", "120 kWh"],
    ans: 3,
    expl: "E = P·t = 4 kW × 0,5 h × 30 = 60 kWh. É assim que a conta de luz é calculada: potência em quilowatts multiplicada pelo tempo em horas."
  },
  {
    id: "nat-051", disc: "Física", tema: "Eletricidade",
    text: "Ao mudar a chave do chuveiro da posição “verão” para “inverno”, a água sai mais quente. Isso acontece porque, sob a mesma tensão:",
    opts: [
      "A resistência elétrica diminui, aumentando a corrente e a potência dissipada",
      "A resistência aumenta, diminuindo a potência",
      "A tensão da rede dobra automaticamente",
      "A água passa mais rápido pela resistência",
      "O chuveiro deixa de usar energia elétrica"
    ],
    ans: 0,
    expl: "Com tensão constante, P = U²/R: quanto menor a resistência, maior a potência. Na posição inverno, um trecho menor do resistor é usado."
  },
  {
    id: "nat-052", disc: "Física", tema: "Eletricidade",
    text: "Nas instalações elétricas residenciais, lâmpadas e tomadas são ligadas em paralelo. Uma vantagem dessa ligação é que:",
    opts: [
      "Se uma lâmpada queimar, todas as outras se apagam",
      "Todos os aparelhos recebem a mesma tensão e funcionam de forma independente",
      "A corrente é a mesma em todos os aparelhos",
      "A resistência total aumenta a cada aparelho ligado",
      "Os aparelhos funcionam com tensão reduzida"
    ],
    ans: 1,
    expl: "Em paralelo, cada aparelho fica submetido à tensão da rede (127 V ou 220 V) e pode ser ligado ou desligado sem afetar os demais. Em série, a falha de um interromperia todo o circuito."
  },
  {
    id: "nat-053", disc: "Física", tema: "Eletricidade",
    text: "Dois resistores, de 10 Ω e 30 Ω, são ligados em série a uma fonte de 120 V. A corrente no circuito é de:",
    opts: ["1 A", "3 A", "4 A", "12 A", "40 A"],
    ans: 1,
    expl: "Em série, as resistências se somam: Req = 10 + 30 = 40 Ω. Pela Lei de Ohm: i = U/R = 120/40 = 3 A."
  },
  {
    id: "nat-054", disc: "Física", tema: "Eletricidade",
    text: "A função de um disjuntor em uma instalação elétrica é:",
    opts: [
      "Aumentar a tensão fornecida aos aparelhos",
      "Interromper automaticamente o circuito quando a corrente ultrapassa um valor seguro",
      "Armazenar energia para quedas de luz",
      "Converter corrente alternada em contínua",
      "Reduzir o consumo de energia dos aparelhos"
    ],
    ans: 1,
    expl: "Correntes excessivas aquecem os fios (efeito Joule) e podem causar incêndios. O disjuntor desarma nessas situações, protegendo a instalação."
  },
  {
    id: "nat-055", disc: "Física", tema: "Eletricidade",
    text: "O fio terra em aparelhos como máquinas de lavar e chuveiros serve para:",
    opts: [
      "Conduzir para o solo eventuais correntes de fuga, protegendo o usuário de choques",
      "Aumentar a potência do aparelho",
      "Diminuir o valor da conta de energia",
      "Fornecer a energia necessária ao funcionamento",
      "Transformar a tensão de 220 V em 127 V"
    ],
    ans: 0,
    expl: "Se houver falha de isolamento e a carcaça metálica ficar energizada, a corrente segue pelo fio terra, de baixa resistência, em vez de passar pelo corpo de quem toca o aparelho."
  },
  {
    id: "nat-056", disc: "Física", tema: "Eletromagnetismo",
    text: "Se um ímã em forma de barra for quebrado ao meio, obtém-se:",
    opts: [
      "Um polo norte e um polo sul separados",
      "Dois pedaços de metal sem magnetismo",
      "Dois polos norte",
      "Um ímã e um pedaço sem magnetismo",
      "Dois ímãs menores, cada um com polo norte e polo sul"
    ],
    ans: 4,
    expl: "Não existem monopolos magnéticos conhecidos: cada fragmento de um ímã continua tendo dois polos, por menor que seja."
  },
  {
    id: "nat-057", disc: "Física", tema: "Eletromagnetismo",
    text: "A agulha de uma bússola aponta aproximadamente para o norte geográfico porque:",
    opts: [
      "O Sol atrai a agulha durante o dia",
      "A agulha é feita de material radioativo",
      "A Lua exerce atração magnética sobre o ferro",
      "A Terra se comporta como um grande ímã, cujo polo sul magnético fica próximo ao polo norte geográfico",
      "Os polos geográficos e magnéticos são exatamente o mesmo ponto"
    ],
    ans: 3,
    expl: "Polos opostos se atraem: o polo norte da agulha é atraído pelo polo sul magnético da Terra, situado perto do norte geográfico. Os polos magnético e geográfico não coincidem exatamente (declinação magnética)."
  },
  {
    id: "nat-058", disc: "Física", tema: "Eletromagnetismo",
    text: "Geradores de usinas elétricas funcionam com base no fenômeno da indução eletromagnética, descoberto por Faraday, segundo o qual:",
    opts: [
      "Cargas elétricas paradas geram campos magnéticos",
      "A variação do fluxo magnético através de um circuito induz nele uma corrente elétrica",
      "A luz arranca elétrons de metais",
      "O calor é transformado diretamente em eletricidade sem movimento",
      "Ímãs perdem o magnetismo quando aquecidos"
    ],
    ans: 1,
    expl: "Ao girar bobinas em um campo magnético (ou ímãs perto de bobinas), o fluxo varia e surge corrente. É assim que turbinas movidas por água, vapor ou vento produzem eletricidade."
  },
  {
    id: "nat-059", disc: "Física", tema: "Eletromagnetismo",
    text: "Transformadores, usados para elevar ou reduzir tensões na rede elétrica, só funcionam com corrente alternada porque:",
    opts: [
      "A corrente contínua é perigosa demais",
      "A corrente alternada não produz campo magnético",
      "Dependem da variação do campo magnético para induzir corrente na outra bobina",
      "A corrente contínua não transporta energia",
      "Os fios só conduzem corrente alternada"
    ],
    ans: 2,
    expl: "A corrente alternada gera um campo magnético variável no núcleo, que induz tensão no enrolamento secundário. Corrente contínua gera campo constante e, portanto, não induz corrente."
  },
  {
    id: "nat-060", disc: "Física", tema: "Física moderna",
    text: "O efeito fotoelétrico, explicado por Einstein em 1905, consiste na emissão de elétrons por uma superfície metálica iluminada. Sua explicação mostrou que a luz:",
    opts: [
      "É exclusivamente uma onda mecânica",
      "Não transporta energia",
      "Comporta-se também como partícula, formada por pacotes de energia chamados fótons",
      "Só existe na faixa visível do espectro",
      "Viaja mais devagar no vácuo do que no vidro"
    ],
    ans: 2,
    expl: "A emissão depende da frequência da luz, não da intensidade: cada fóton tem energia E = h·f. Esse trabalho rendeu o Nobel a Einstein e é base de sensores e células fotovoltaicas."
  },
  {
    id: "nat-061", disc: "Física", tema: "Física moderna",
    text: "O forno de micro-ondas aquece os alimentos porque as micro-ondas:",
    opts: [
      "Tornam os alimentos radioativos",
      "Aquecem primeiro o prato, que transmite o calor ao alimento",
      "Produzem uma chama invisível dentro do forno",
      "Ionizam os átomos do alimento",
      "Fazem as moléculas de água vibrarem e girarem, aumentando sua energia térmica"
    ],
    ans: 4,
    expl: "As micro-ondas são radiação não ionizante. As moléculas de água, polares, tentam se alinhar ao campo elétrico oscilante, e essa agitação vira calor. Alimentos aquecidos no micro-ondas não ficam radioativos."
  },
  {
    id: "nat-062", disc: "Física", tema: "Física moderna",
    text: "Painéis solares fotovoltaicos transformam:",
    opts: [
      "Energia térmica em energia nuclear",
      "Energia elétrica em energia luminosa",
      "Energia luminosa diretamente em energia elétrica",
      "Energia cinética do vento em eletricidade",
      "Energia química em energia luminosa"
    ],
    ans: 2,
    expl: "As células fotovoltaicas, geralmente de silício, liberam elétrons ao absorver fótons, gerando corrente. Já os aquecedores solares transformam luz em calor para aquecer água."
  },
  {
    id: "nat-063", disc: "Física", tema: "Estática",
    text: "Em uma gangorra, uma criança de 30 kg está a 2 m do apoio. Para equilibrar a gangorra, uma criança de 40 kg deve sentar-se, do outro lado, a uma distância do apoio de:",
    opts: ["1,0 m", "1,5 m", "2,0 m", "2,5 m", "2,7 m"],
    ans: 1,
    expl: "No equilíbrio, os momentos (torques) se igualam: 30·2 = 40·d → d = 60/40 = 1,5 m. A criança mais pesada deve ficar mais perto do apoio."
  },

  // ══════════ QUÍMICA ══════════
  {
    id: "nat-064", disc: "Química", tema: "Matéria e separação de misturas",
    text: "Água com sal, ar atmosférico filtrado e álcool hidratado são exemplos de:",
    opts: [
      "Substâncias simples",
      "Substâncias compostas",
      "Misturas heterogêneas",
      "Elementos químicos",
      "Misturas homogêneas"
    ],
    ans: 4,
    expl: "Os três sistemas apresentam uma única fase visível (aspecto uniforme), mas são formados por mais de uma substância — por isso são misturas homogêneas, também chamadas de soluções."
  },
  {
    id: "nat-065", disc: "Química", tema: "Matéria e separação de misturas",
    text: "Para obter água potável a partir da água do mar em pequena escala, um método adequado é a:",
    opts: ["Filtração", "Decantação", "Catação", "Destilação simples", "Peneiração"],
    ans: 3,
    expl: "O sal está dissolvido, portanto não fica retido em filtros. Na destilação, a água evapora, é condensada e recolhida, enquanto o sal permanece no recipiente original."
  },
  {
    id: "nat-066", disc: "Química", tema: "Matéria e separação de misturas",
    text: "Nas refinarias, o petróleo é separado em frações como gás de cozinha, gasolina, querosene e diesel por meio de:",
    opts: [
      "Destilação fracionada, que separa os componentes por diferenças de temperatura de ebulição",
      "Filtração simples",
      "Decantação em funil de separação",
      "Imantação",
      "Centrifugação"
    ],
    ans: 0,
    expl: "O petróleo aquecido entra em uma torre; os componentes com menor temperatura de ebulição sobem mais e são recolhidos no alto (gases, gasolina), e os mais pesados ficam embaixo (óleos, asfalto)."
  },
  {
    id: "nat-067", disc: "Química", tema: "Matéria e separação de misturas",
    text: "Nas estações de tratamento de água, adiciona-se sulfato de alumínio para que partículas de sujeira se aglutinem em flocos, que depois vão ao fundo dos tanques. Essas etapas são chamadas de:",
    opts: [
      "Floculação e decantação",
      "Destilação e condensação",
      "Cloração e fluoretação",
      "Evaporação e cristalização",
      "Fusão e solidificação"
    ],
    ans: 0,
    expl: "Após a floculação e a decantação, a água passa por filtração, recebe cloro (desinfecção) e flúor (prevenção de cáries) e tem o pH corrigido antes da distribuição."
  },
  {
    id: "nat-068", disc: "Química", tema: "Matéria e separação de misturas",
    text: "Ao deixar roupas molhadas no varal, elas secam mesmo sem a água atingir 100 °C. Esse processo é a:",
    opts: ["Evaporação", "Ebulição", "Calefação", "Sublimação", "Fusão"],
    ans: 0,
    expl: "A evaporação ocorre a qualquer temperatura, na superfície do líquido, de forma lenta. A ebulição ocorre em toda a massa do líquido, a uma temperatura definida (100 °C ao nível do mar, para a água)."
  },
  {
    id: "nat-069", disc: "Química", tema: "Matéria e separação de misturas",
    text: "A naftalina, usada contra traças, diminui de tamanho com o tempo sem deixar resíduo líquido. Essa mudança de estado é a:",
    opts: ["Fusão", "Sublimação", "Condensação", "Solidificação", "Liquefação"],
    ans: 1,
    expl: "Na sublimação, a substância passa diretamente do estado sólido para o gasoso. O mesmo ocorre com o gelo-seco (CO₂ sólido)."
  },
  {
    id: "nat-070", disc: "Química", tema: "Estrutura atômica",
    text: "O modelo atômico de Rutherford, proposto a partir do bombardeio de uma lâmina de ouro com partículas alfa, concluiu que:",
    opts: [
      "O átomo é uma esfera maciça e indivisível",
      "O átomo é uma esfera positiva com elétrons incrustados, como um “pudim de passas”",
      "Os elétrons ficam no núcleo",
      "O átomo não possui partículas com carga elétrica",
      "O átomo tem um núcleo pequeno e denso, com carga positiva, e uma grande região vazia onde ficam os elétrons"
    ],
    ans: 4,
    expl: "A maioria das partículas atravessou a lâmina, mas algumas sofreram grandes desvios. Isso indicou que a massa e a carga positiva se concentram em um núcleo muito pequeno."
  },
  {
    id: "nat-071", disc: "Química", tema: "Estrutura atômica",
    text: "No modelo de Bohr, os elétrons ocupam níveis de energia definidos. Quando um elétron excitado retorna a um nível de menor energia:",
    opts: [
      "Absorve energia do núcleo",
      "Emite energia na forma de luz (fóton)",
      "Transforma-se em próton",
      "É expulso do átomo",
      "Perde massa e desaparece"
    ],
    ans: 1,
    expl: "A energia liberada corresponde à diferença entre os níveis e determina a cor da luz emitida. É o que se vê nos fogos de artifício e no teste de chama: cada elemento emite cores características."
  },
  {
    id: "nat-072", disc: "Química", tema: "Estrutura atômica",
    text: "O átomo de sódio tem número atômico 11 e número de massa 23. O número de nêutrons em seu núcleo é:",
    opts: ["1", "11", "12", "23", "34"],
    ans: 2,
    expl: "Número de massa A = prótons + nêutrons. Como Z = 11 prótons, nêutrons = 23 − 11 = 12."
  },
  {
    id: "nat-073", disc: "Química", tema: "Estrutura atômica",
    text: "O carbono-12 e o carbono-14 são isótopos. Isso significa que possuem:",
    opts: [
      "O mesmo número de prótons e diferente número de nêutrons",
      "O mesmo número de nêutrons e diferente número de prótons",
      "Diferentes números atômicos",
      "O mesmo número de massa",
      "Propriedades químicas totalmente diferentes"
    ],
    ans: 0,
    expl: "Isótopos são átomos do mesmo elemento (mesmo Z) com massas diferentes. O carbono-14, radioativo, é usado na datação de materiais orgânicos de até cerca de 50 mil anos."
  },
  {
    id: "nat-074", disc: "Química", tema: "Tabela periódica",
    text: "Os gases nobres, como hélio, neônio e argônio, são pouco reativos porque:",
    opts: [
      "Têm apenas um elétron na camada de valência",
      "São metais muito densos",
      "Não possuem elétrons",
      "Têm núcleo instável",
      "Possuem a camada de valência completa, configuração eletrônica estável"
    ],
    ans: 4,
    expl: "Com oito elétrons na última camada (ou dois, no caso do hélio), esses elementos raramente formam ligações. Por isso o argônio é usado em lâmpadas e o hélio em balões."
  },
  {
    id: "nat-075", disc: "Química", tema: "Tabela periódica",
    text: "Sódio e potássio pertencem à família dos metais alcalinos (grupo 1). Uma característica desses elementos é:",
    opts: [
      "Tendência a ganhar elétrons e formar ânions",
      "Alta reatividade, tendendo a perder um elétron e formar cátions de carga +1",
      "Serem gases à temperatura ambiente",
      "Não reagirem com a água",
      "Possuírem oito elétrons na camada de valência"
    ],
    ans: 1,
    expl: "Com um único elétron de valência, os metais alcalinos o perdem facilmente. Reagem violentamente com água, formando hidróxidos e liberando gás hidrogênio."
  },
  {
    id: "nat-076", disc: "Química", tema: "Ligações químicas",
    text: "O cloreto de sódio (sal de cozinha) é formado por ligação iônica. Isso explica por que esse composto:",
    opts: [
      "Conduz corrente elétrica quando dissolvido em água ou fundido",
      "É gasoso à temperatura ambiente",
      "Não se dissolve em água",
      "Conduz eletricidade no estado sólido",
      "Tem baixo ponto de fusão"
    ],
    ans: 0,
    expl: "Na ligação iônica, o sódio cede um elétron ao cloro, formando íons Na⁺ e Cl⁻. No sólido, os íons estão presos no retículo; dissolvidos ou fundidos, ficam livres para conduzir corrente."
  },
  {
    id: "nat-077", disc: "Química", tema: "Ligações químicas",
    text: "A água possui ponto de ebulição muito mais alto que o de outras substâncias de massa molecular semelhante, como o metano. Isso se deve:",
    opts: [
      "À ligação iônica entre hidrogênio e oxigênio",
      "Ao fato de a água ser apolar",
      "Às ligações de hidrogênio entre suas moléculas",
      "À presença de metais dissolvidos",
      "Ao baixo número de elétrons do oxigênio"
    ],
    ans: 2,
    expl: "O oxigênio, muito eletronegativo, torna a molécula polar, e o hidrogênio de uma molécula é atraído pelo oxigênio de outra. Essas interações fortes exigem mais energia para serem rompidas."
  },
  {
    id: "nat-078", disc: "Química", tema: "Ligações químicas",
    text: "Óleo e água não se misturam porque:",
    opts: [
      "Ambos são substâncias iônicas",
      "O óleo é formado por moléculas apolares e a água por moléculas polares",
      "O óleo é mais denso que a água",
      "A água é apolar e o óleo é polar",
      "Ambos são misturas homogêneas"
    ],
    ans: 1,
    expl: "A regra “semelhante dissolve semelhante” explica o fenômeno. O sabão funciona porque suas moléculas têm uma parte polar (que interage com a água) e uma apolar (que interage com a gordura)."
  },
  {
    id: "nat-079", disc: "Química", tema: "Funções inorgânicas",
    text: "Uma solução de pH igual a 3 é classificada como:",
    opts: ["Básica", "Neutra", "Alcalina forte", "Salina neutra", "Ácida"],
    ans: 4,
    expl: "Na escala de pH (a 25 °C), valores menores que 7 indicam meio ácido, 7 é neutro e acima de 7 é básico. Refrigerantes e suco de limão têm pH entre 2 e 3."
  },
  {
    id: "nat-080", disc: "Química", tema: "Funções inorgânicas",
    text: "O suco de limão tem pH próximo de 2, e a água pura tem pH 7. A concentração de íons H⁺ no suco de limão é maior que a da água pura em:",
    opts: ["5 vezes", "10 vezes", "500 vezes", "1.000 vezes", "100.000 vezes"],
    ans: 4,
    expl: "A escala de pH é logarítmica: cada unidade a menos corresponde a 10 vezes mais H⁺. De 7 para 2 são 5 unidades: 10⁵ = 100.000 vezes."
  },
  {
    id: "nat-081", disc: "Química", tema: "Funções inorgânicas",
    text: "Para aliviar a azia, causada pelo excesso de ácido clorídrico no estômago, usa-se um antiácido como o hidróxido de magnésio. A reação que ocorre é de:",
    opts: [
      "Combustão, liberando gás carbônico",
      "Oxidação do magnésio metálico",
      "Fusão nuclear",
      "Neutralização entre ácido e base, formando sal e água",
      "Polimerização"
    ],
    ans: 3,
    expl: "Ácido + base → sal + água. O hidróxido de magnésio reage com o HCl formando cloreto de magnésio e água, reduzindo a acidez estomacal."
  },
  {
    id: "nat-082", disc: "Química", tema: "Funções inorgânicas",
    text: "Solos muito ácidos prejudicam a agricultura. Para corrigi-los, os agricultores fazem a calagem, que consiste em adicionar:",
    opts: [
      "Calcário (carbonato de cálcio), que neutraliza a acidez",
      "Ácido sulfúrico, que aumenta a acidez",
      "Sal de cozinha, que fertiliza o solo",
      "Água destilada, que remove os ácidos",
      "Areia, que dilui os ácidos"
    ],
    ans: 0,
    expl: "O carbonato de cálcio reage com os ácidos do solo, elevando o pH. Solos do Cerrado, naturalmente ácidos, tornaram-se produtivos em grande parte graças à calagem."
  },
  {
    id: "nat-083", disc: "Química", tema: "Reações químicas",
    text: "Na equação não balanceada N₂ + H₂ → NH₃ (síntese da amônia), a soma dos menores coeficientes inteiros após o balanceamento é:",
    opts: ["3", "4", "5", "6", "7"],
    ans: 3,
    expl: "Balanceada: 1 N₂ + 3 H₂ → 2 NH₃. Soma: 1 + 3 + 2 = 6. A amônia é base para a produção de fertilizantes nitrogenados."
  },
  {
    id: "nat-084", disc: "Química", tema: "Reações químicas",
    text: "A Lei de Lavoisier afirma que, em um sistema fechado, a massa total dos reagentes é igual à massa total dos produtos. Ao queimar um pedaço de palha de aço em um recipiente aberto, sua massa aumenta porque:",
    opts: [
      "A massa é criada pelo calor da combustão",
      "O ferro se combina com o oxigênio do ar, incorporando sua massa ao produto",
      "A palha de aço perde água durante a queima",
      "O fogo transforma ferro em ouro",
      "A lei de Lavoisier não vale para metais"
    ],
    ans: 1,
    expl: "A palha de aço reage com O₂ formando óxido de ferro. A massa do oxigênio incorporado explica o aumento. Em sistema fechado, a massa total se conservaria."
  },
  {
    id: "nat-085", disc: "Química", tema: "Estequiometria",
    text: "A massa molar da água (H₂O) é 18 g/mol. A quantidade de matéria presente em 36 g de água é:",
    opts: ["0,5 mol", "1 mol", "2 mol", "18 mol", "36 mol"],
    ans: 2,
    expl: "n = massa / massa molar = 36/18 = 2 mol, o que corresponde a cerca de 1,2 × 10²⁴ moléculas."
  },
  {
    id: "nat-086", disc: "Química", tema: "Estequiometria",
    text: "Na combustão completa do metano, CH₄ + 2 O₂ → CO₂ + 2 H₂O, 16 g de metano produzem 44 g de gás carbônico. A queima de 32 g de metano produzirá:",
    opts: ["22 g de CO₂", "44 g de CO₂", "66 g de CO₂", "88 g de CO₂", "176 g de CO₂"],
    ans: 3,
    expl: "As massas são proporcionais (Lei de Proust): dobrando o metano, dobra o CO₂. 32 g de CH₄ → 2 × 44 = 88 g de CO₂."
  },
  {
    id: "nat-087", disc: "Química", tema: "Estequiometria",
    text: "A constante de Avogadro indica que 1 mol de qualquer substância contém aproximadamente:",
    opts: [
      "6,0 × 10²³ entidades (átomos, moléculas ou íons)",
      "1.000 entidades",
      "22,4 entidades",
      "1 grama da substância",
      "6,0 × 10⁻²³ entidades"
    ],
    ans: 0,
    expl: "O mol é uma unidade de contagem, como a dúzia, só que muito maior: 6,02 × 10²³. Isso permite relacionar massas medidas em laboratório com números de partículas."
  },
  {
    id: "nat-088", disc: "Química", tema: "Soluções",
    text: "Dissolvem-se 20 g de sal em água até completar 500 mL de solução. A concentração comum dessa solução é:",
    opts: ["10 g/L", "20 g/L", "40 g/L", "100 g/L", "10.000 g/L"],
    ans: 2,
    expl: "C = massa do soluto / volume da solução = 20 g / 0,5 L = 40 g/L."
  },
  {
    id: "nat-089", disc: "Química", tema: "Soluções",
    text: "100 mL de uma solução de concentração 2 mol/L são diluídos com água até o volume de 400 mL. A nova concentração é:",
    opts: ["0,25 mol/L", "0,5 mol/L", "1 mol/L", "4 mol/L", "8 mol/L"],
    ans: 1,
    expl: "Na diluição, a quantidade de soluto não muda: C₁·V₁ = C₂·V₂ → 2·100 = C₂·400 → C₂ = 0,5 mol/L."
  },
  {
    id: "nat-090", disc: "Química", tema: "Soluções",
    text: "Em regiões frias, joga-se sal nas estradas cobertas de gelo. Isso funciona porque a adição de um soluto à água:",
    opts: [
      "Eleva a temperatura de congelamento",
      "Torna a água mais densa e impede a fusão",
      "Provoca uma reação de combustão que derrete o gelo",
      "Elimina toda a água por evaporação",
      "Abaixa a temperatura de congelamento da água (efeito crioscópico)"
    ],
    ans: 4,
    expl: "As partículas de soluto dificultam a organização das moléculas de água em cristais de gelo. A solução só congela abaixo de 0 °C, e o gelo derrete."
  },
  {
    id: "nat-091", disc: "Química", tema: "Termoquímica",
    text: "Bolsas de compressa fria instantânea contêm água e nitrato de amônio. Ao serem misturados, a bolsa esfria porque a dissolução é um processo:",
    opts: [
      "Exotérmico, que libera calor",
      "Endotérmico, que absorve calor do ambiente",
      "Nuclear, que consome energia atômica",
      "De combustão incompleta",
      "Que não envolve troca de energia"
    ],
    ans: 1,
    expl: "Processos endotérmicos absorvem energia (ΔH > 0). Ao retirar calor da vizinhança, a bolsa e a pele em contato com ela esfriam. A combustão, ao contrário, é exotérmica."
  },
  {
    id: "nat-092", disc: "Química", tema: "Termoquímica",
    text: "A combustão do etanol libera energia para mover um motor. Essa reação é classificada como:",
    opts: [
      "Endotérmica, com variação de entalpia positiva",
      "Exotérmica, com variação de entalpia negativa",
      "Nuclear, com transformação de elementos",
      "De neutralização ácido-base",
      "De decomposição por eletrólise"
    ],
    ans: 1,
    expl: "Na combustão, a energia das ligações formadas (CO₂ e H₂O) é maior que a das ligações rompidas, e o excedente é liberado como calor (ΔH < 0)."
  },
  {
    id: "nat-093", disc: "Química", tema: "Cinética química",
    text: "Alimentos se conservam por mais tempo na geladeira porque:",
    opts: [
      "A redução da temperatura diminui a velocidade das reações químicas e da ação de microrganismos",
      "O frio elimina completamente todas as bactérias",
      "A geladeira aumenta a concentração de oxigênio",
      "O frio é um catalisador da conservação",
      "A temperatura não influencia a velocidade das reações"
    ],
    ans: 0,
    expl: "Em temperaturas mais baixas, as partículas têm menos energia e colidem menos eficazmente. Assim, reações de decomposição e o metabolismo de fungos e bactérias ficam mais lentos."
  },
  {
    id: "nat-094", disc: "Química", tema: "Cinética química",
    text: "Um comprimido efervescente se dissolve mais rápido quando triturado do que inteiro. Isso acontece porque:",
    opts: [
      "A trituração aumenta a massa do comprimido",
      "A trituração aumenta a superfície de contato com a água",
      "O comprimido inteiro tem mais reagentes",
      "A água muda de temperatura ao receber o pó",
      "A reação passa a ser endotérmica"
    ],
    ans: 1,
    expl: "Com mais superfície exposta, ocorrem mais colisões entre os reagentes por unidade de tempo, e a reação fica mais rápida. Pelo mesmo motivo, lenha em gravetos queima mais rápido que um tronco."
  },
  {
    id: "nat-095", disc: "Química", tema: "Cinética química",
    text: "Os catalisadores, como os presentes nos escapamentos dos carros, aumentam a velocidade das reações porque:",
    opts: [
      "São consumidos totalmente durante a reação",
      "Aumentam a temperatura do sistema",
      "Alteram os produtos finais da reação",
      "Diminuem a energia de ativação, oferecendo um caminho de reação alternativo, sem serem consumidos",
      "Aumentam a energia de ativação"
    ],
    ans: 3,
    expl: "O catalisador participa da reação, mas é regenerado ao final. No escapamento, metais como platina e paládio convertem CO, NOx e hidrocarbonetos em CO₂, N₂ e H₂O mais rapidamente."
  },
  {
    id: "nat-096", disc: "Química", tema: "Equilíbrio químico",
    text: "Segundo o Princípio de Le Chatelier, quando se perturba um sistema em equilíbrio:",
    opts: [
      "O sistema se desloca no sentido de minimizar a perturbação",
      "O equilíbrio é destruído definitivamente",
      "As reações direta e inversa param",
      "A constante de equilíbrio sempre dobra",
      "Nada acontece com as concentrações"
    ],
    ans: 0,
    expl: "Se aumentamos a concentração de um reagente, o equilíbrio se desloca para formar mais produtos. Variações de pressão e de temperatura também deslocam o equilíbrio."
  },
  {
    id: "nat-097", disc: "Química", tema: "Eletroquímica",
    text: "Em uma pilha, a energia química é convertida em energia elétrica. Nesse processo:",
    opts: [
      "Não há transferência de elétrons",
      "Ocorre redução no ânodo e oxidação no cátodo",
      "A energia elétrica é convertida em energia química",
      "Ocorre oxidação no ânodo e redução no cátodo, com fluxo de elétrons pelo circuito externo",
      "Os elétrons passam pela ponte salina"
    ],
    ans: 3,
    expl: "Na pilha (processo espontâneo), o ânodo perde elétrons (oxidação), que fluem pelo fio até o cátodo, onde ocorre redução. A ponte salina transporta íons, não elétrons."
  },
  {
    id: "nat-098", disc: "Química", tema: "Eletroquímica",
    text: "A ferrugem forma-se quando o ferro é exposto a:",
    opts: [
      "Apenas luz solar, sem ar",
      "Vácuo e baixa temperatura",
      "Gás nitrogênio puro e seco",
      "Óleo e graxa",
      "Oxigênio e umidade, sofrendo oxidação"
    ],
    ans: 4,
    expl: "A corrosão do ferro é uma reação de oxirredução que exige oxigênio e água. Ambientes salinos, como o litoral, aceleram o processo. Tintas e óleos funcionam como barreiras protetoras."
  },
  {
    id: "nat-099", disc: "Química", tema: "Eletroquímica",
    text: "A galvanização protege peças de ferro recobrindo-as com zinco. O zinco protege o ferro porque:",
    opts: [
      "É mais nobre que o ferro e nunca se oxida",
      "Impede a passagem da luz",
      "Reage com o ferro formando ouro",
      "Aumenta a umidade ao redor da peça",
      "Oxida-se preferencialmente, atuando como metal de sacrifício"
    ],
    ans: 4,
    expl: "O zinco tem maior tendência a oxidar que o ferro. Mesmo se a camada for riscada, é ele que se corrói primeiro, preservando o ferro. Cascos de navios usam blocos de zinco ou magnésio pelo mesmo princípio."
  },
  {
    id: "nat-100", disc: "Química", tema: "Radioatividade",
    text: "Uma amostra de 80 g de um isótopo radioativo tem meia-vida de 5 anos. Após 15 anos, restarão desse isótopo:",
    opts: ["5 g", "10 g", "20 g", "40 g", "60 g"],
    ans: 1,
    expl: "15 anos correspondem a 3 meias-vidas: 80 → 40 → 20 → 10 g."
  },
  {
    id: "nat-101", disc: "Química", tema: "Radioatividade",
    text: "Das radiações emitidas por núcleos radioativos, a de maior poder de penetração, que exige barreiras de chumbo ou concreto para ser bloqueada, é a:",
    opts: [
      "Partícula alfa",
      "Partícula beta",
      "Radiação gama",
      "Radiação infravermelha",
      "Luz visível"
    ],
    ans: 2,
    expl: "Partículas alfa são barradas por uma folha de papel; beta, por uma placa fina de alumínio. A radiação gama é eletromagnética, de alta energia, e atravessa materiais muito mais espessos."
  },
  {
    id: "nat-102", disc: "Química", tema: "Radioatividade",
    text: "Nas usinas nucleares, como Angra 1 e Angra 2, a energia é obtida pela:",
    opts: [
      "Fusão de núcleos de hidrogênio, como no Sol",
      "Queima de carvão mineral",
      "Combustão do urânio com oxigênio",
      "Reação química entre urânio e água",
      "Fissão de núcleos de urânio, que libera calor para gerar vapor e mover turbinas"
    ],
    ans: 4,
    expl: "Na fissão, um nêutron quebra um núcleo pesado em núcleos menores, liberando energia e mais nêutrons (reação em cadeia). A fusão ocorre nas estrelas e ainda não é usada comercialmente."
  },
  {
    id: "nat-103", disc: "Química", tema: "Radioatividade",
    text: "O acidente radiológico de Goiânia (1987), um dos maiores do mundo fora de usinas, foi causado:",
    opts: [
      "Pela explosão de um reator nuclear",
      "Pela abertura de um aparelho de radioterapia abandonado contendo césio-137",
      "Por um teste de bomba atômica",
      "Pelo vazamento de petróleo de uma plataforma",
      "Pela queda de um satélite com urânio"
    ],
    ans: 1,
    expl: "Catadores retiraram de uma clínica abandonada uma cápsula com cloreto de césio-137, que brilhava em azul e foi manipulado por várias pessoas. Houve mortes, centenas de contaminados e toneladas de rejeitos."
  },
  {
    id: "nat-104", disc: "Química", tema: "Química orgânica",
    text: "O carbono forma uma enorme variedade de compostos porque:",
    opts: [
      "É um gás nobre muito estável",
      "Só faz ligações iônicas",
      "É tetravalente e forma cadeias estáveis ligando-se a outros átomos de carbono",
      "Possui apenas um elétron de valência",
      "Não se liga ao hidrogênio"
    ],
    ans: 2,
    expl: "O carbono faz quatro ligações covalentes e forma cadeias longas, ramificadas e cíclicas, com ligações simples, duplas ou triplas. Isso explica a diversidade dos compostos orgânicos."
  },
  {
    id: "nat-105", disc: "Química", tema: "Química orgânica",
    text: "O etanol (CH₃CH₂OH), usado como combustível no Brasil, pertence à função orgânica:",
    opts: ["Ácido carboxílico", "Éster", "Cetona", "Álcool", "Amina"],
    ans: 3,
    expl: "Os álcoois possuem o grupo hidroxila (−OH) ligado a carbono saturado. O etanol brasileiro é produzido principalmente pela fermentação da cana-de-açúcar."
  },
  {
    id: "nat-106", disc: "Química", tema: "Química orgânica",
    text: "O vinagre é uma solução aquosa de ácido acético (CH₃COOH). O grupo funcional que caracteriza esse composto é:",
    opts: [
      "Hidroxila ligada a anel aromático",
      "Carbonila entre dois carbonos",
      "Amino (−NH₂)",
      "Carboxila (−COOH)",
      "Éter (−O−)"
    ],
    ans: 3,
    expl: "A carboxila é o grupo característico dos ácidos carboxílicos. O ácido acético é formado pela oxidação do etanol, por isso vinho exposto ao ar pode virar vinagre."
  },
  {
    id: "nat-107", disc: "Química", tema: "Química orgânica",
    text: "O aroma de muitas frutas e essências artificiais deve-se a compostos da função:",
    opts: ["Éster", "Amina", "Hidrocarboneto", "Álcool", "Haleto orgânico"],
    ans: 0,
    expl: "Ésteres são formados pela reação entre ácido carboxílico e álcool (esterificação). O acetato de isoamila, por exemplo, tem cheiro de banana."
  },
  {
    id: "nat-108", disc: "Química", tema: "Química orgânica",
    text: "Os hidrocarbonetos, principais componentes do petróleo e do gás natural, são compostos formados:",
    opts: [
      "Apenas por átomos de carbono e hidrogênio",
      "Por carbono, hidrogênio e oxigênio",
      "Por carbono e nitrogênio",
      "Apenas por átomos de carbono",
      "Por hidrogênio e oxigênio"
    ],
    ans: 0,
    expl: "Metano (CH₄), propano e butano (gás de cozinha) e os componentes da gasolina são hidrocarbonetos. Sua combustão completa produz CO₂ e água."
  },
  {
    id: "nat-109", disc: "Química", tema: "Química orgânica",
    text: "O biodiesel é produzido por meio da reação de óleos vegetais ou gorduras com um álcool. Essa reação é chamada de:",
    opts: [
      "Transesterificação",
      "Fissão nuclear",
      "Neutralização",
      "Destilação fracionada",
      "Eletrólise"
    ],
    ans: 0,
    expl: "Os triglicerídeos do óleo reagem com metanol ou etanol, formando ésteres (o biodiesel) e glicerina. É um combustível renovável que pode substituir parte do diesel de petróleo."
  },
  {
    id: "nat-110", disc: "Química", tema: "Química orgânica",
    text: "Plásticos como polietileno e PVC são polímeros. Polímeros são:",
    opts: [
      "Macromoléculas formadas pela união de muitas unidades menores, os monômeros",
      "Metais com alta condutividade elétrica",
      "Moléculas com apenas dois átomos",
      "Misturas de gases nobres",
      "Substâncias inorgânicas iônicas"
    ],
    ans: 0,
    expl: "O polietileno é formado pela adição de milhares de moléculas de eteno. A durabilidade dos plásticos é útil, mas faz com que persistam no ambiente por séculos."
  },
  {
    id: "nat-111", disc: "Química", tema: "Química orgânica",
    text: "Isômeros são compostos que possuem:",
    opts: [
      "Fórmulas moleculares diferentes e a mesma estrutura",
      "O mesmo número de nêutrons",
      "A mesma fórmula molecular, mas estruturas diferentes",
      "Massas moleculares diferentes",
      "A mesma estrutura e o mesmo nome"
    ],
    ans: 2,
    expl: "O etanol (CH₃CH₂OH) e o éter dimetílico (CH₃OCH₃) têm a mesma fórmula C₂H₆O, mas propriedades bem diferentes: o primeiro é líquido e o segundo, gás à temperatura ambiente."
  },
  {
    id: "nat-112", disc: "Química", tema: "Química ambiental",
    text: "Os CFCs (clorofluorcarbonetos), usados no passado em aerossóis e geladeiras, foram proibidos pelo Protocolo de Montreal porque:",
    opts: [
      "Causam chuva ácida",
      "São os principais causadores das ilhas de calor",
      "Aumentam a camada de ozônio",
      "Destroem a camada de ozônio, que filtra a radiação ultravioleta",
      "Provocam a eutrofização de rios"
    ],
    ans: 3,
    expl: "Na estratosfera, a radiação UV libera cloro dos CFCs, que destrói moléculas de ozônio em reações em cadeia. Com a proibição, a camada de ozônio está em lenta recuperação."
  },
  {
    id: "nat-113", disc: "Química", tema: "Química ambiental",
    text: "A queima de combustíveis fósseis contribui para o aquecimento global principalmente pela emissão de:",
    opts: [
      "Dióxido de carbono (CO₂)",
      "Oxigênio (O₂)",
      "Nitrogênio (N₂)",
      "Gás hélio (He)",
      "Vapor de mercúrio"
    ],
    ans: 0,
    expl: "O carbono armazenado por milhões de anos no petróleo, no carvão e no gás é liberado como CO₂, intensificando o efeito estufa. Biocombustíveis reduzem o saldo de emissões porque as plantas absorvem CO₂ ao crescer."
  },
  {
    id: "nat-114", disc: "Química", tema: "Química ambiental",
    text: "A combustão incompleta de combustíveis, comum em ambientes pouco ventilados, é perigosa porque produz:",
    opts: [
      "Oxigênio puro em excesso",
      "Água oxigenada",
      "Gás nitrogênio, que é tóxico",
      "Monóxido de carbono (CO), gás tóxico que se liga à hemoglobina e impede o transporte de oxigênio",
      "Ozônio, que protege o pulmão"
    ],
    ans: 3,
    expl: "Com pouco oxigênio, forma-se CO em vez de CO₂. Por ser incolor e inodoro, o CO é especialmente perigoso, por exemplo, em aquecedores a gás instalados em banheiros fechados."
  },
  {
    id: "nat-115", disc: "Química", tema: "Química ambiental",
    text: "Metais pesados como o mercúrio, usado em garimpos ilegais na Amazônia, são especialmente perigosos porque:",
    opts: [
      "Evaporam rapidamente sem deixar resíduos",
      "São eliminados facilmente pelo organismo",
      "Não se dissolvem em nenhuma condição",
      "Só afetam plantas aquáticas",
      "Acumulam-se nos organismos e aumentam de concentração ao longo da cadeia alimentar (bioacumulação e biomagnificação)"
    ],
    ans: 4,
    expl: "O mercúrio contamina rios e peixes e chega em concentrações maiores aos predadores do topo, incluindo populações ribeirinhas e indígenas, causando danos neurológicos."
  },
  {
    id: "nat-116", disc: "Química", tema: "Química no cotidiano",
    text: "O fermento químico usado em bolos contém bicarbonato de sódio. Ao ser aquecido, ele faz a massa crescer porque:",
    opts: [
      "Libera oxigênio que queima a massa",
      "Absorve a água da massa",
      "Produz álcool que evapora",
      "Transforma o açúcar em sal",
      "Libera gás carbônico (CO₂), que forma bolhas na massa"
    ],
    ans: 4,
    expl: "A decomposição térmica do bicarbonato (2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂) libera gás. O fermento biológico produz CO₂ por fermentação realizada por leveduras."
  },
  {
    id: "nat-117", disc: "Química", tema: "Química no cotidiano",
    text: "A água sanitária, usada na desinfecção, tem como princípio ativo o hipoclorito de sódio. Misturá-la com produtos à base de amônia é perigoso porque:",
    opts: [
      "A mistura torna-se um ótimo desinfetante",
      "Os dois produtos se neutralizam e perdem o efeito",
      "A mistura explode imediatamente ao contato com o ar",
      "A amônia transforma o hipoclorito em água pura",
      "A reação libera gases tóxicos, como as cloraminas"
    ],
    ans: 4,
    expl: "Misturas de produtos de limpeza podem gerar gases irritantes e tóxicos. Com ácidos, a água sanitária libera gás cloro; com amônia, cloraminas."
  },
  {
    id: "nat-118", disc: "Química", tema: "Química no cotidiano",
    text: "Sabões e detergentes removem gorduras porque suas moléculas:",
    opts: [
      "São totalmente apolares",
      "São totalmente polares",
      "Dissolvem a gordura por reação nuclear",
      "Têm uma parte polar, que interage com a água, e uma parte apolar, que interage com a gordura",
      "Transformam gordura em água"
    ],
    ans: 3,
    expl: "As moléculas de sabão formam micelas que envolvem a gordura com a parte apolar e expõem a parte polar à água. Assim, a sujeira é carregada pelo enxágue."
  },

  // ══════════ BIOLOGIA ══════════
  {
    id: "nat-119", disc: "Biologia", tema: "Citologia",
    text: "A principal diferença entre células procariontes e eucariontes é que as procariontes:",
    opts: [
      "Não possuem material genético",
      "Não possuem núcleo organizado delimitado por membrana (carioteca)",
      "Não possuem membrana plasmática",
      "São sempre maiores que as eucariontes",
      "Possuem mitocôndrias e cloroplastos"
    ],
    ans: 1,
    expl: "Nas procariontes (bactérias e arqueas), o DNA fica disperso no citoplasma, numa região chamada nucleoide. Elas também não têm organelas membranosas, como mitocôndrias. Mas têm ribossomos e membrana plasmática."
  },
  {
    id: "nat-120", disc: "Biologia", tema: "Citologia",
    text: "A organela responsável pela respiração celular aeróbica, que produz a maior parte do ATP da célula, é:",
    opts: ["O ribossomo", "O complexo golgiense", "O lisossomo", "O vacúolo", "A mitocôndria"],
    ans: 4,
    expl: "Na mitocôndria ocorrem o ciclo de Krebs e a cadeia respiratória, que produzem a maior parte do ATP. Células com alta demanda de energia, como as musculares, têm muitas mitocôndrias."
  },
  {
    id: "nat-121", disc: "Biologia", tema: "Citologia",
    text: "Os ribossomos são estruturas celulares responsáveis pela:",
    opts: [
      "Produção de energia por fotossíntese",
      "Digestão intracelular",
      "Armazenamento de água",
      "Duplicação do DNA",
      "Síntese de proteínas"
    ],
    ans: 4,
    expl: "Os ribossomos traduzem a mensagem do RNA mensageiro em sequências de aminoácidos. Podem estar livres no citoplasma ou aderidos ao retículo endoplasmático rugoso."
  },
  {
    id: "nat-122", disc: "Biologia", tema: "Citologia",
    text: "Ao colocar uma hemácia em água destilada, ela incha e pode se romper. Isso ocorre porque:",
    opts: [
      "O sal sai da célula por transporte ativo",
      "A membrana da hemácia é impermeável à água",
      "A água destilada é hipertônica em relação à hemácia",
      "A hemácia realiza fotossíntese em excesso",
      "A água entra na célula por osmose, já que o meio externo é hipotônico"
    ],
    ans: 4,
    expl: "Na osmose, a água atravessa a membrana do meio menos concentrado para o mais concentrado. Por isso o soro fisiológico usado em hospitais é isotônico (0,9% de NaCl)."
  },
  {
    id: "nat-123", disc: "Biologia", tema: "Citologia",
    text: "Salgar carnes e peixes ajuda a conservá-los porque o sal:",
    opts: [
      "Cria um meio hipertônico que desidrata os microrganismos por osmose",
      "Mata as bactérias por radiação",
      "Aumenta a quantidade de água disponível",
      "Funciona como antibiótico específico",
      "Acelera a decomposição da carne"
    ],
    ans: 0,
    expl: "Com muito sal, a água sai das células dos microrganismos por osmose, impedindo sua proliferação. O mesmo princípio vale para doces em calda muito concentrada."
  },
  {
    id: "nat-124", disc: "Biologia", tema: "Citologia",
    text: "As células-tronco embrionárias despertam interesse na medicina porque:",
    opts: [
      "Já são totalmente especializadas",
      "Não possuem material genético",
      "São encontradas apenas em plantas",
      "Podem se diferenciar em diversos tipos de células do corpo",
      "Não se dividem"
    ],
    ans: 3,
    expl: "Por serem indiferenciadas e capazes de originar vários tecidos, podem ajudar a regenerar órgãos danificados. Seu uso envolve debates éticos, e pesquisas também exploram células-tronco adultas e induzidas."
  },
  {
    id: "nat-125", disc: "Biologia", tema: "Metabolismo energético",
    text: "Na fotossíntese, as plantas utilizam luz, gás carbônico e água para produzir:",
    opts: [
      "Gás carbônico e água",
      "Proteínas e nitrogênio",
      "Álcool e gás carbônico",
      "ATP e ácido lático",
      "Glicose e oxigênio"
    ],
    ans: 4,
    expl: "Equação geral: 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂. O oxigênio liberado vem da quebra da água (fotólise), não do CO₂."
  },
  {
    id: "nat-126", disc: "Biologia", tema: "Metabolismo energético",
    text: "A fermentação alcoólica, realizada por leveduras na produção de pães e bebidas, produz:",
    opts: [
      "Ácido lático e oxigênio",
      "Glicose e oxigênio",
      "Grande quantidade de ATP, como a respiração aeróbica",
      "Proteínas e água",
      "Etanol e gás carbônico, com baixo rendimento de ATP"
    ],
    ans: 4,
    expl: "Sem oxigênio, as leveduras convertem glicose em etanol e CO₂, obtendo apenas 2 ATP por glicose. O CO₂ faz a massa do pão crescer; o álcool evapora no forno."
  },
  {
    id: "nat-127", disc: "Biologia", tema: "Metabolismo energético",
    text: "Durante exercícios intensos, as células musculares podem realizar fermentação lática. Isso acontece porque:",
    opts: [
      "O músculo passa a fazer fotossíntese",
      "O excesso de oxigênio inibe a respiração",
      "A glicose acaba completamente no sangue",
      "As mitocôndrias se multiplicam rapidamente",
      "O fornecimento de oxigênio não é suficiente para a demanda de energia"
    ],
    ans: 4,
    expl: "Quando falta oxigênio, o músculo produz ATP de forma rápida e pouco eficiente, gerando ácido lático. O desconforto muscular durante o esforço está associado a esse metabolismo anaeróbico."
  },
  {
    id: "nat-128", disc: "Biologia", tema: "Divisão celular",
    text: "A meiose é um tipo de divisão celular que:",
    opts: [
      "Origina duas células idênticas à célula-mãe",
      "Ocorre apenas em bactérias",
      "Mantém o número de cromossomos e serve ao crescimento dos tecidos",
      "Origina quatro células com metade do número de cromossomos, importante na formação de gametas",
      "Não envolve a duplicação do DNA"
    ],
    ans: 3,
    expl: "A meiose reduz o número de cromossomos (de 46 para 23, em humanos) e promove variabilidade genética por meio do crossing-over e da segregação independente. A mitose, por sua vez, gera células idênticas."
  },
  {
    id: "nat-129", disc: "Biologia", tema: "Divisão celular",
    text: "O câncer está relacionado a alterações no controle da divisão celular, que levam a:",
    opts: [
      "Multiplicação descontrolada de células, que podem invadir outros tecidos",
      "Interrupção total da divisão celular no organismo",
      "Destruição de todas as células do sangue",
      "Transformação de células humanas em bactérias",
      "Aumento da produção de gametas"
    ],
    ans: 0,
    expl: "Mutações em genes que regulam o ciclo celular fazem as células se dividirem sem controle, formando tumores. Fatores como tabagismo, radiação UV e alguns vírus aumentam o risco."
  },
  {
    id: "nat-130", disc: "Biologia", tema: "Genética molecular",
    text: "No DNA, as bases nitrogenadas se emparelham de forma específica. A adenina sempre se liga à:",
    opts: ["Citosina", "Guanina", "Timina", "Uracila", "Adenina"],
    ans: 2,
    expl: "No DNA, A pareia com T e C com G. No RNA, a timina é substituída pela uracila (U). Essa complementaridade permite a replicação fiel do material genético."
  },
  {
    id: "nat-131", disc: "Biologia", tema: "Genética molecular",
    text: "A sequência correta do fluxo da informação genética (dogma central da Biologia) é:",
    opts: [
      "Proteína → RNA → DNA",
      "RNA → proteína → DNA",
      "DNA → RNA → proteína",
      "DNA → proteína → RNA",
      "Proteína → DNA → RNA"
    ],
    ans: 2,
    expl: "O DNA é transcrito em RNA mensageiro, que é traduzido em proteína nos ribossomos. Alguns vírus, como o HIV, fazem transcrição reversa (RNA → DNA)."
  },
  {
    id: "nat-132", disc: "Biologia", tema: "Genética molecular",
    text: "Uma mutação gênica pode ser definida como:",
    opts: [
      "A troca de órgãos entre indivíduos",
      "Uma mudança de comportamento aprendida",
      "O crescimento normal de um organismo",
      "Uma alteração na sequência de bases do DNA, que pode ser herdada se ocorrer em células germinativas",
      "A transformação de uma espécie em outra durante a vida"
    ],
    ans: 3,
    expl: "Mutações podem ser neutras, prejudiciais ou vantajosas. São a fonte primária de variabilidade genética, sobre a qual atua a seleção natural."
  },
  {
    id: "nat-133", disc: "Biologia", tema: "Genética mendeliana",
    text: "Em ervilhas, a cor amarela (V) é dominante sobre a verde (v). Do cruzamento entre duas plantas heterozigotas (Vv × Vv), espera-se a proporção fenotípica de:",
    opts: [
      "1 amarela : 1 verde",
      "1 amarela : 3 verdes",
      "Todas amarelas",
      "1 amarela : 2 verdes : 1 intermediária",
      "3 amarelas : 1 verde"
    ],
    ans: 4,
    expl: "Genótipos esperados: 1 VV : 2 Vv : 1 vv. Como V é dominante, VV e Vv são amarelas (3/4) e vv é verde (1/4). É a 1ª Lei de Mendel."
  },
  {
    id: "nat-134", disc: "Biologia", tema: "Genética mendeliana",
    text: "Um casal em que ambos são heterozigotos para o albinismo (Aa), condição recessiva, deseja ter um filho. A probabilidade de a criança ser albina é:",
    opts: ["0%", "25%", "50%", "75%", "100%"],
    ans: 1,
    expl: "Aa × Aa gera AA, Aa, Aa e aa. Apenas aa manifesta o albinismo: 1/4 = 25%."
  },
  {
    id: "nat-135", disc: "Biologia", tema: "Genética mendeliana",
    text: "Uma pessoa com sangue tipo O é considerada doadora universal (em relação ao sistema ABO) porque suas hemácias:",
    opts: [
      "Possuem antígenos A e B",
      "Possuem anticorpos anti-A e anti-B",
      "Não possuem hemoglobina",
      "Possuem apenas o antígeno A",
      "Não possuem antígenos A nem B"
    ],
    ans: 4,
    expl: "Sem antígenos A e B nas hemácias, elas não são atacadas pelos anticorpos do receptor. Já o tipo AB, sem anticorpos anti-A e anti-B no plasma, é receptor universal."
  },
  {
    id: "nat-136", disc: "Biologia", tema: "Genética mendeliana",
    text: "O daltonismo é uma condição recessiva ligada ao cromossomo X. Ela é mais frequente em homens porque:",
    opts: [
      "Eles possuem dois cromossomos X",
      "O gene está no cromossomo Y",
      "As mulheres não herdam cromossomos X do pai",
      "A condição é transmitida apenas de pai para filho",
      "Eles possuem apenas um cromossomo X, e um único alelo recessivo já manifesta a condição"
    ],
    ans: 4,
    expl: "Homens são XY: se o X tiver o alelo, manifestam o daltonismo. Mulheres XX precisam de dois alelos recessivos para manifestá-lo. A hemofilia segue o mesmo padrão."
  },
  {
    id: "nat-137", disc: "Biologia", tema: "Genética mendeliana",
    text: "Uma mulher Rh negativo grávida de um bebê Rh positivo pode desenvolver anticorpos que atacam as hemácias de um próximo filho Rh positivo. Essa condição é a:",
    opts: [
      "Anemia falciforme",
      "Hemofilia",
      "Síndrome de Down",
      "Diabetes gestacional",
      "Eritroblastose fetal (doença hemolítica do recém-nascido)"
    ],
    ans: 4,
    expl: "Na primeira gestação, a mãe pode ser sensibilizada no parto. A aplicação de imunoglobulina anti-Rh após o parto impede a produção de anticorpos e previne a doença."
  },
  {
    id: "nat-138", disc: "Biologia", tema: "Biotecnologia",
    text: "Organismos transgênicos são aqueles que:",
    opts: [
      "Surgiram naturalmente por seleção natural",
      "Foram produzidos por cruzamento entre raças da mesma espécie",
      "Não possuem DNA",
      "Foram cultivados sem agrotóxicos",
      "Receberam genes de outra espécie por técnicas de engenharia genética"
    ],
    ans: 4,
    expl: "Exemplos são plantas resistentes a pragas e bactérias modificadas para produzir insulina humana. O debate envolve benefícios produtivos e preocupações ambientais, econômicas e de biossegurança."
  },
  {
    id: "nat-139", disc: "Biologia", tema: "Biotecnologia",
    text: "A produção de insulina humana por bactérias geneticamente modificadas representou um avanço porque:",
    opts: [
      "Curou definitivamente o diabetes",
      "Permitiu produzir em larga escala um hormônio idêntico ao humano para pacientes com diabetes",
      "Eliminou a necessidade de pâncreas no organismo",
      "Substituiu a alimentação dos pacientes",
      "Transformou bactérias em células humanas"
    ],
    ans: 1,
    expl: "O gene humano da insulina foi inserido em bactérias, que passaram a produzir o hormônio. Antes, usava-se insulina extraída de pâncreas de porcos e bois."
  },
  {
    id: "nat-140", disc: "Biologia", tema: "Biotecnologia",
    text: "Testes de DNA usados em investigações de paternidade e na perícia criminal baseiam-se no fato de que:",
    opts: [
      "Todos os seres humanos têm DNA idêntico",
      "Cada pessoa possui um padrão de sequências de DNA praticamente único, exceto gêmeos idênticos",
      "O DNA muda completamente a cada ano",
      "O DNA está presente apenas no sangue",
      "Filhos possuem DNA idêntico ao do pai"
    ],
    ans: 1,
    expl: "Regiões repetitivas do DNA variam muito entre pessoas. O filho herda metade do material genético de cada genitor, o que permite comparar padrões e confirmar parentescos."
  },
  {
    id: "nat-141", disc: "Biologia", tema: "Evolução",
    text: "Para Darwin, a evolução das espécies ocorre principalmente por meio da seleção natural, segundo a qual:",
    opts: [
      "Os organismos mudam porque desejam se adaptar",
      "Características adquiridas durante a vida são transmitidas aos filhos",
      "O ambiente cria as variações de que os organismos precisam",
      "Indivíduos com características vantajosas em determinado ambiente têm mais chances de sobreviver e se reproduzir",
      "Todas as espécies foram criadas já adaptadas e nunca mudam"
    ],
    ans: 3,
    expl: "A variação existe antes da seleção. O ambiente “seleciona” as variantes mais adaptadas, que deixam mais descendentes. A ideia de herança de características adquiridas pelo uso é de Lamarck."
  },
  {
    id: "nat-142", disc: "Biologia", tema: "Evolução",
    text: "Para Lamarck, as girafas teriam pescoço longo porque seus ancestrais esticavam o pescoço para alcançar folhas altas, e essa característica era transmitida aos descendentes. Essa explicação baseia-se:",
    opts: [
      "Na seleção natural",
      "Na genética mendeliana",
      "Na deriva genética",
      "Na teoria sintética da evolução",
      "Na lei do uso e desuso e na herança dos caracteres adquiridos"
    ],
    ans: 4,
    expl: "Lamarck foi um dos primeiros a propor que as espécies se transformam, mas a ideia de que características adquiridas pelo uso são herdadas não é aceita hoje. Músculos desenvolvidos em academia, por exemplo, não passam aos filhos."
  },
  {
    id: "nat-143", disc: "Biologia", tema: "Evolução",
    text: "O uso indiscriminado de antibióticos tem favorecido o surgimento de “superbactérias”. Esse fenômeno é explicado porque:",
    opts: [
      "O antibiótico elimina as bactérias sensíveis, e as que já eram resistentes sobrevivem e se multiplicam",
      "O antibiótico ensina as bactérias a se tornarem resistentes",
      "As bactérias se transformam em vírus",
      "Os antibióticos aumentam a imunidade das bactérias por vacinação",
      "As bactérias resistentes surgem do nada após o tratamento"
    ],
    ans: 0,
    expl: "É um exemplo de seleção natural em tempo real: a resistência já existia em poucas bactérias, por mutação. Interromper o tratamento ou usar antibiótico sem necessidade favorece a seleção dessas linhagens."
  },
  {
    id: "nat-144", disc: "Biologia", tema: "Evolução",
    text: "Órgãos homólogos, como o braço humano, a asa do morcego e a nadadeira da baleia, são considerados evidências da evolução porque:",
    opts: [
      "Têm a mesma função, mas origens diferentes",
      "Surgiram ao mesmo tempo em todas as espécies",
      "Não possuem ossos",
      "Têm a mesma origem embrionária e estrutura semelhante, indicando ancestralidade comum, apesar de funções diferentes",
      "Provam que as espécies nunca mudam"
    ],
    ans: 3,
    expl: "A semelhança dos ossos internos revela um ancestral comum, e as diferenças refletem adaptações a modos de vida distintos (divergência). Já órgãos análogos, como asa de inseto e de ave, têm mesma função e origens diferentes (convergência)."
  },
  {
    id: "nat-145", disc: "Biologia", tema: "Evolução",
    text: "A especiação alopátrica ocorre quando:",
    opts: [
      "Populações de uma espécie ficam isoladas geograficamente, acumulam diferenças e perdem a capacidade de se cruzar",
      "Duas espécies diferentes se fundem em uma só",
      "Um indivíduo muda de espécie durante a vida",
      "Uma espécie é extinta pela caça",
      "Duas populações vivem no mesmo local e se cruzam livremente"
    ],
    ans: 0,
    expl: "Uma barreira geográfica (rio, montanha, oceano) separa populações, que evoluem de forma independente. Com o tempo, surge o isolamento reprodutivo, e elas se tornam espécies distintas."
  },
  {
    id: "nat-146", disc: "Biologia", tema: "Ecologia",
    text: "Em uma cadeia alimentar, apenas cerca de 10% da energia de um nível trófico é transferida ao nível seguinte. Isso explica por que:",
    opts: [
      "Os produtores têm menos energia que os consumidores",
      "As cadeias alimentares raramente têm mais de 4 ou 5 níveis",
      "A energia é reciclada continuamente no ecossistema",
      "Os decompositores ficam no topo da cadeia",
      "Os herbívoros têm mais energia que as plantas"
    ],
    ans: 1,
    expl: "A maior parte da energia é gasta em respiração e perdida como calor. Por isso o fluxo de energia é unidirecional e decrescente, e há pouca energia disponível para níveis tróficos muito altos."
  },
  {
    id: "nat-147", disc: "Biologia", tema: "Ecologia",
    text: "Na cadeia alimentar capim → gafanhoto → sapo → cobra → gavião, o sapo ocupa a posição de:",
    opts: [
      "Produtor",
      "Consumidor primário",
      "Consumidor terciário",
      "Decompositor",
      "Consumidor secundário"
    ],
    ans: 4,
    expl: "O capim é produtor, o gafanhoto é consumidor primário (herbívoro), o sapo é consumidor secundário, a cobra é terciária e o gavião é quaternário."
  },
  {
    id: "nat-148", disc: "Biologia", tema: "Ecologia",
    text: "Os fungos e as bactérias decompositoras são fundamentais nos ecossistemas porque:",
    opts: [
      "Produzem energia pela fotossíntese",
      "Ocupam sempre o primeiro nível trófico",
      "Impedem a reciclagem de nutrientes",
      "Alimentam-se apenas de organismos vivos",
      "Devolvem ao ambiente os nutrientes minerais presentes na matéria orgânica morta"
    ],
    ans: 4,
    expl: "Sem decompositores, a matéria orgânica se acumularia e nutrientes como nitrogênio e fósforo não voltariam ao solo para serem absorvidos pelas plantas."
  },
  {
    id: "nat-149", disc: "Biologia", tema: "Ecologia",
    text: "As plantas leguminosas, como feijão e soja, enriquecem o solo com nitrogênio porque:",
    opts: [
      "Suas raízes abrigam bactérias que fixam o nitrogênio do ar, em uma relação de mutualismo",
      "Absorvem nitrogênio diretamente do ar pelas folhas",
      "Produzem nitrogênio pela fotossíntese",
      "Liberam nitrogênio por meio da transpiração",
      "Transformam o gás carbônico em nitrogênio"
    ],
    ans: 0,
    expl: "Bactérias do gênero Rhizobium, em nódulos nas raízes, convertem o N₂ atmosférico em compostos utilizáveis. Por isso a rotação de culturas com leguminosas reduz o uso de fertilizantes."
  },
  {
    id: "nat-150", disc: "Biologia", tema: "Ecologia",
    text: "A relação entre abelhas e flores, em que as abelhas obtêm néctar e as flores são polinizadas, é exemplo de:",
    opts: ["Parasitismo", "Mutualismo", "Predação", "Competição", "Amensalismo"],
    ans: 1,
    expl: "No mutualismo, as duas espécies se beneficiam. O declínio das populações de abelhas, por agrotóxicos e perda de hábitat, ameaça a produção de muitos alimentos."
  },
  {
    id: "nat-151", disc: "Biologia", tema: "Ecologia",
    text: "A relação entre o carrapato e o cachorro é classificada como:",
    opts: [
      "Mutualismo, pois os dois se beneficiam",
      "Comensalismo, pois o cachorro não é afetado",
      "Predação, pois o carrapato mata o cachorro imediatamente",
      "Parasitismo, pois o carrapato se beneficia e o cachorro é prejudicado",
      "Cooperação, pois não há prejuízo para nenhum deles"
    ],
    ans: 3,
    expl: "O parasita vive à custa do hospedeiro, alimentando-se de seu sangue, sem matá-lo de imediato. Carrapatos ainda transmitem doenças, como a febre maculosa."
  },
  {
    id: "nat-152", disc: "Biologia", tema: "Ecologia",
    text: "A introdução de espécies exóticas invasoras, como o caramujo-gigante-africano no Brasil, é um problema ambiental porque essas espécies:",
    opts: [
      "Sempre aumentam a biodiversidade local",
      "Não conseguem se reproduzir em novos ambientes",
      "São todas produtoras e aumentam a fotossíntese",
      "Muitas vezes não encontram predadores naturais e competem com espécies nativas, desequilibrando o ecossistema",
      "Eliminam apenas espécies também invasoras"
    ],
    ans: 3,
    expl: "Sem inimigos naturais, a espécie exótica pode se multiplicar rapidamente, ocupar nichos de nativas e transmitir doenças. O caramujo africano, trazido para criação, tornou-se praga agrícola e urbana."
  },
  {
    id: "nat-153", disc: "Biologia", tema: "Ecologia",
    text: "A sucessão ecológica em uma área de rocha nua geralmente se inicia com:",
    opts: [
      "Árvores de grande porte",
      "Grandes mamíferos herbívoros",
      "Liquens, organismos pioneiros capazes de colonizar a rocha e iniciar a formação de solo",
      "Peixes de água doce",
      "Fungos que se alimentam de animais mortos"
    ],
    ans: 2,
    expl: "Os liquens (associação entre fungo e alga) secretam substâncias que desgastam a rocha. Com o tempo, forma-se solo, e comunidades cada vez mais complexas se instalam até a comunidade clímax."
  },
  {
    id: "nat-154", disc: "Biologia", tema: "Ecologia",
    text: "No ciclo do carbono, o CO₂ é retirado da atmosfera principalmente pela:",
    opts: ["Respiração celular", "Combustão", "Decomposição", "Fermentação", "Fotossíntese"],
    ans: 4,
    expl: "Produtores fixam o carbono do CO₂ em matéria orgânica. Respiração, decomposição e combustão devolvem o carbono à atmosfera. O desmatamento e a queima de combustíveis fósseis desequilibram esse ciclo."
  },
  {
    id: "nat-155", disc: "Biologia", tema: "Ecologia",
    text: "A bioacumulação explica por que concentrações de inseticidas como o DDT eram maiores em aves de rapina do que nos insetos. Isso acontece porque essas substâncias:",
    opts: [
      "São produzidas pelas próprias aves",
      "Desaparecem rapidamente no ambiente",
      "Estão presentes apenas nos produtores",
      "Diminuem de concentração a cada nível trófico",
      "Não são eliminadas facilmente pelos organismos e se acumulam ao longo da cadeia alimentar"
    ],
    ans: 4,
    expl: "Cada predador consome muitas presas contaminadas, acumulando o poluente. O DDT afinou a casca dos ovos de aves de rapina, provocando declínio de suas populações, como denunciou Rachel Carson em “Primavera silenciosa” (1962)."
  },
  {
    id: "nat-156", disc: "Biologia", tema: "Fisiologia humana",
    text: "No sistema digestório humano, a maior parte da absorção de nutrientes ocorre:",
    opts: [
      "No estômago, por meio do ácido clorídrico",
      "Na boca, pela ação da saliva",
      "No intestino delgado, cujas vilosidades aumentam a superfície de absorção",
      "No esôfago, durante a deglutição",
      "No intestino grosso, que absorve todos os nutrientes"
    ],
    ans: 2,
    expl: "As vilosidades e microvilosidades do intestino delgado ampliam enormemente a área de contato. O intestino grosso absorve principalmente água e sais minerais."
  },
  {
    id: "nat-157", disc: "Biologia", tema: "Fisiologia humana",
    text: "A bile, produzida pelo fígado e armazenada na vesícula biliar, atua na digestão:",
    opts: [
      "Digerindo as proteínas no estômago",
      "Emulsificando as gorduras, o que facilita a ação das lipases",
      "Transformando o amido em glicose na boca",
      "Absorvendo a água no intestino grosso",
      "Produzindo insulina"
    ],
    ans: 1,
    expl: "A bile não contém enzimas digestivas: ela quebra grandes gotas de gordura em gotículas menores, aumentando a superfície para a ação das lipases pancreáticas."
  },
  {
    id: "nat-158", disc: "Biologia", tema: "Fisiologia humana",
    text: "Nos alvéolos pulmonares ocorre a hematose, que consiste:",
    opts: [
      "Na produção de hemácias",
      "Na filtração do sangue e formação da urina",
      "Na digestão dos alimentos",
      "Na troca de gases: o oxigênio passa do ar para o sangue e o gás carbônico do sangue para o ar",
      "No bombeamento do sangue para o corpo"
    ],
    ans: 3,
    expl: "A troca ocorre por difusão, através das finas paredes dos alvéolos e dos capilares. A enorme área alveolar torna o processo eficiente."
  },
  {
    id: "nat-159", disc: "Biologia", tema: "Fisiologia humana",
    text: "A insulina, hormônio produzido pelo pâncreas, tem como principal função:",
    opts: [
      "Aumentar a quantidade de glicose no sangue",
      "Facilitar a entrada de glicose nas células, reduzindo a glicemia",
      "Estimular a produção de hemácias",
      "Controlar o ritmo cardíaco",
      "Produzir enzimas digestivas no estômago"
    ],
    ans: 1,
    expl: "Na falta de insulina (diabetes tipo 1) ou na resistência à sua ação (tipo 2), a glicose se acumula no sangue. O glucagon, também pancreático, tem efeito oposto."
  },
  {
    id: "nat-160", disc: "Biologia", tema: "Fisiologia humana",
    text: "Os rins participam da homeostase do organismo porque:",
    opts: [
      "Produzem a bile para digerir gorduras",
      "Realizam as trocas gasosas",
      "Armazenam glicose na forma de glicogênio",
      "Produzem anticorpos contra vírus",
      "Filtram o sangue, eliminando ureia e excessos de sais e água na urina"
    ],
    ans: 4,
    expl: "Nos néfrons, o sangue é filtrado e substâncias úteis são reabsorvidas. Os rins regulam o volume de água, a concentração de sais e o pH do sangue."
  },
  {
    id: "nat-161", disc: "Biologia", tema: "Fisiologia humana",
    text: "O sangue rico em oxigênio, vindo dos pulmões, chega ao coração pelas veias pulmonares e entra:",
    opts: [
      "No átrio direito",
      "No ventrículo direito",
      "No átrio esquerdo",
      "Na veia cava",
      "Na artéria pulmonar"
    ],
    ans: 2,
    expl: "Circulação pulmonar: o ventrículo direito envia sangue pobre em O₂ aos pulmões; o sangue oxigenado volta ao átrio esquerdo, passa ao ventrículo esquerdo e sai pela aorta para o corpo (circulação sistêmica)."
  },
  {
    id: "nat-162", disc: "Biologia", tema: "Imunologia",
    text: "A diferença fundamental entre vacina e soro é que:",
    opts: [
      "A vacina fornece anticorpos prontos e o soro estimula sua produção",
      "A vacina estimula o organismo a produzir seus próprios anticorpos e memória imunológica, enquanto o soro fornece anticorpos prontos",
      "Ambos são usados apenas para tratar doenças já instaladas",
      "O soro gera memória imunológica duradoura",
      "A vacina é usada somente contra venenos de cobra"
    ],
    ans: 1,
    expl: "A vacina (imunização ativa) previne doenças e gera memória. O soro (imunização passiva) age rapidamente, sendo usado em emergências, como picadas de animais peçonhentos, mas seu efeito é temporário."
  },
  {
    id: "nat-163", disc: "Biologia", tema: "Imunologia",
    text: "A imunidade de rebanho (coletiva) é alcançada quando:",
    opts: [
      "Apenas os idosos são vacinados",
      "Todas as pessoas contraem a doença ao mesmo tempo",
      "Uma parcela grande da população está imunizada, dificultando a circulação do agente infeccioso e protegendo também quem não pode se vacinar",
      "Os animais domésticos recebem vacinas",
      "As pessoas tomam antibióticos preventivamente"
    ],
    ans: 2,
    expl: "Quando a maioria está protegida, o vírus ou a bactéria encontra poucos hospedeiros suscetíveis. Quedas na cobertura vacinal permitem o retorno de doenças como o sarampo."
  },
  {
    id: "nat-164", disc: "Biologia", tema: "Imunologia",
    text: "O HIV, vírus causador da aids, compromete o sistema imunológico porque infecta principalmente:",
    opts: [
      "Hemácias, responsáveis pelo transporte de oxigênio",
      "Neurônios do cérebro",
      "Células da pele",
      "Linfócitos T CD4, que coordenam a resposta imune",
      "Plaquetas, responsáveis pela coagulação"
    ],
    ans: 3,
    expl: "Com a destruição dos linfócitos T auxiliares, o organismo fica vulnerável a infecções oportunistas. O tratamento antirretroviral controla a carga viral e permite vida longa e saudável."
  },
  {
    id: "nat-165", disc: "Biologia", tema: "Saúde e doenças",
    text: "Antibióticos não devem ser usados para tratar gripes e resfriados porque:",
    opts: [
      "Essas doenças são causadas por vírus, e os antibióticos agem contra bactérias",
      "Os antibióticos fortalecem os vírus",
      "Gripes são causadas por fungos",
      "Os antibióticos só funcionam em crianças",
      "Os vírus são organismos multicelulares complexos"
    ],
    ans: 0,
    expl: "Vírus são acelulares e usam a maquinaria da célula hospedeira; antibióticos atacam estruturas bacterianas, como a parede celular. O uso desnecessário favorece a resistência bacteriana."
  },
  {
    id: "nat-166", disc: "Biologia", tema: "Saúde e doenças",
    text: "A dengue, a zika e a chikungunya são doenças virais transmitidas no Brasil principalmente pelo mosquito:",
    opts: [
      "Anopheles",
      "Culex (pernilongo comum)",
      "Aedes aegypti",
      "Barbeiro (Triatoma)",
      "Flebotomíneo (mosquito-palha)"
    ],
    ans: 2,
    expl: "O Aedes aegypti se reproduz em água parada e limpa. Eliminar criadouros em pneus, vasos e caixas-d'água é a principal forma de prevenção."
  },
  {
    id: "nat-167", disc: "Biologia", tema: "Saúde e doenças",
    text: "A doença de Chagas é causada por um protozoário e transmitida principalmente:",
    opts: [
      "Pela picada do mosquito Aedes aegypti",
      "Pelo contato com água contaminada por caramujos",
      "Pelo ar, por meio de gotículas de saliva",
      "Pelas fezes do inseto barbeiro e pela ingestão de alimentos contaminados, como caldo de cana e açaí",
      "Pela mordida de cães infectados"
    ],
    ans: 3,
    expl: "O Trypanosoma cruzi está nas fezes do barbeiro, que defeca ao picar; o parasita penetra pela ferida ou mucosas. A transmissão oral, por alimentos contaminados, causou surtos recentes na Amazônia."
  },
  {
    id: "nat-168", disc: "Biologia", tema: "Saúde e doenças",
    text: "A esquistossomose, conhecida como “barriga-d'água”, tem como forma de prevenção mais eficaz:",
    opts: [
      "Saneamento básico e evitar contato com águas onde vivem caramujos infectados",
      "Uso de repelentes contra mosquitos",
      "Vacinação de cães",
      "Combate ao barbeiro nas casas de pau a pique",
      "Uso de máscaras em ambientes fechados"
    ],
    ans: 0,
    expl: "O verme Schistosoma mansoni tem o caramujo como hospedeiro intermediário. As larvas penetram pela pele de quem entra em rios e lagos contaminados por esgoto."
  },
  {
    id: "nat-169", disc: "Biologia", tema: "Saúde e doenças",
    text: "A malária é causada por protozoários do gênero Plasmodium e transmitida:",
    opts: [
      "Pela picada do Aedes aegypti",
      "Pela água contaminada por esgoto",
      "Pela picada da fêmea do mosquito Anopheles",
      "Pelo contato com fezes de ratos",
      "Pelo consumo de carne mal cozida"
    ],
    ans: 2,
    expl: "No Brasil, a malária concentra-se na Região Amazônica. O mosquito Anopheles, conhecido como mosquito-prego, transmite o parasita, que se multiplica no fígado e nas hemácias."
  },
  {
    id: "nat-170", disc: "Biologia", tema: "Microbiologia",
    text: "Os vírus são considerados por muitos cientistas como seres no limite entre o vivo e o não vivo porque:",
    opts: [
      "Realizam fotossíntese",
      "Possuem núcleo organizado e muitas organelas",
      "Reproduzem-se sozinhos em qualquer ambiente",
      "São maiores que as bactérias",
      "Não têm células e só se reproduzem dentro de células hospedeiras"
    ],
    ans: 4,
    expl: "Vírus são formados por material genético (DNA ou RNA) envolto por proteínas e, às vezes, um envelope. Fora de uma célula, não têm metabolismo próprio."
  },
  {
    id: "nat-171", disc: "Biologia", tema: "Microbiologia",
    text: "A penicilina, primeiro antibiótico descoberto (Alexander Fleming, 1928), é produzida por:",
    opts: [
      "Um fungo do gênero Penicillium",
      "Uma bactéria do solo",
      "Um vírus bacteriófago",
      "Uma alga marinha",
      "Um protozoário intestinal"
    ],
    ans: 0,
    expl: "Fleming observou que um mofo havia impedido o crescimento de bactérias em uma placa de cultura. A produção em escala, nos anos 1940, revolucionou o tratamento de infecções."
  },
  {
    id: "nat-172", disc: "Biologia", tema: "Botânica",
    text: "As angiospermas são o grupo de plantas mais diversificado atualmente. Uma característica exclusiva desse grupo é a presença de:",
    opts: [
      "Sementes nuas, sem fruto",
      "Flores e frutos que envolvem as sementes",
      "Esporos como única forma de reprodução",
      "Ausência de vasos condutores",
      "Dependência total da água para a fecundação"
    ],
    ans: 1,
    expl: "As gimnospermas (como o pinheiro-do-paraná) têm sementes nuas. Nas angiospermas, o fruto protege a semente e ajuda na dispersão, muitas vezes com auxílio de animais."
  },
  {
    id: "nat-173", disc: "Biologia", tema: "Botânica",
    text: "Musgos (briófitas) vivem geralmente em ambientes úmidos e têm pequeno porte porque:",
    opts: [
      "Não possuem vasos condutores, e a água se desloca lentamente de célula a célula",
      "Possuem flores muito grandes",
      "Produzem sementes pesadas",
      "Realizam fotossíntese apenas à noite",
      "Vivem exclusivamente no deserto"
    ],
    ans: 0,
    expl: "Sem xilema e floema, as briófitas dependem da difusão para distribuir a água, o que limita seu tamanho. Também precisam de água para que os gametas masculinos alcancem os femininos."
  },
  {
    id: "nat-174", disc: "Biologia", tema: "Botânica",
    text: "Em dias quentes e secos, as plantas fecham seus estômatos. Isso ocorre para:",
    opts: [
      "Reduzir a perda de água por transpiração",
      "Aumentar a absorção de gás carbônico",
      "Liberar mais oxigênio",
      "Acelerar a fotossíntese",
      "Absorver água pelas folhas"
    ],
    ans: 0,
    expl: "Os estômatos regulam as trocas gasosas e a transpiração. Fechá-los economiza água, mas também reduz a entrada de CO₂ e, consequentemente, a fotossíntese."
  },
  {
    id: "nat-175", disc: "Biologia", tema: "Zoologia",
    text: "Os anfíbios, como sapos e rãs, dependem de ambientes úmidos porque:",
    opts: [
      "Possuem escamas que impedem a perda de água",
      "Respiram exclusivamente por brânquias durante toda a vida",
      "Produzem ovos com casca rígida",
      "Têm pele fina e permeável, que participa da respiração, e geralmente se reproduzem na água",
      "São animais endotérmicos"
    ],
    ans: 3,
    expl: "A pele úmida permite trocas gasosas, mas também perde água facilmente. Os ovos sem casca e as larvas aquáticas (girinos) também exigem água. A metamorfose marca a passagem para a vida adulta."
  },
  {
    id: "nat-176", disc: "Biologia", tema: "Zoologia",
    text: "Aves e mamíferos são animais endotérmicos. Isso significa que:",
    opts: [
      "Dependem do Sol para regular a temperatura do corpo",
      "Possuem sangue frio",
      "Mantêm a temperatura corporal relativamente constante, produzindo calor pelo metabolismo",
      "Não conseguem viver em ambientes frios",
      "Sua temperatura varia de acordo com o ambiente"
    ],
    ans: 2,
    expl: "Penas, pelos e gordura ajudam a conservar o calor produzido pelo metabolismo. Répteis, anfíbios e peixes são, em geral, ectotérmicos e dependem do ambiente."
  },
  {
    id: "nat-177", disc: "Biologia", tema: "Reprodução",
    text: "A camisinha (preservativo) é o único método contraceptivo que também:",
    opts: [
      "Impede a ovulação por ação hormonal",
      "Elimina os espermatozoides após a relação",
      "Previne infecções sexualmente transmissíveis, como HIV, sífilis e HPV",
      "Garante 100% de proteção sem uso correto",
      "Deve ser usada apenas por mulheres"
    ],
    ans: 2,
    expl: "Métodos hormonais, como a pílula, evitam a gravidez, mas não protegem contra ISTs. O preservativo masculino ou feminino, usado corretamente, oferece dupla proteção."
  },
  {
    id: "nat-178", disc: "Biologia", tema: "Reprodução",
    text: "Na espécie humana, o sexo biológico do bebê é determinado no momento da fecundação pelo:",
    opts: [
      "Óvulo, que pode carregar o cromossomo X ou o Y",
      "Espermatozoide, que pode carregar o cromossomo X ou o Y",
      "Tipo sanguíneo da mãe",
      "Período da gestação",
      "Número de óvulos liberados"
    ],
    ans: 1,
    expl: "Os óvulos sempre carregam um cromossomo X. Se o espermatozoide trouxer um X, forma-se XX; se trouxer Y, forma-se XY."
  }
];
