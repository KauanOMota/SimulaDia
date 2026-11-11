// ─── SimulaDia · Banco de questões: Matemática e suas Tecnologias ───
// 331 questões autorais no estilo do ENEM, organizadas por disciplina e tema.
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

window.BANK_MAT = [

  // ══════════ ARITMÉTICA ══════════
  {
    id: "mat-001", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um trem percorre 360 km em 4 horas. Sua velocidade média é:",
    opts: ["72 km/h", "80 km/h", "90 km/h", "95 km/h", "100 km/h"],
    ans: 2,
    expl: "v = d/t = 360/4 = 90 km/h."
  },
  {
    id: "mat-002", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um carro viaja a 80 km/h. Em 2h30min, percorre:",
    opts: ["140 km", "160 km", "180 km", "200 km", "220 km"],
    ans: 3,
    expl: "2h30min = 2,5 h. d = v·t = 80·2,5 = 200 km."
  },
  {
    id: "mat-003", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um carro percorre 300 km em 4 horas. Sua velocidade média é:",
    opts: ["60 km/h", "70 km/h", "75 km/h", "80 km/h", "100 km/h"],
    ans: 2,
    expl: "v = d/t = 300/4 = 75 km/h."
  },
  {
    id: "mat-004", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Uma piscina de 24.000 L é abastecida por uma bomba de 400 L/min. Em quanto tempo estará cheia?",
    opts: ["20 min", "30 min", "40 min", "50 min", "60 min"],
    ans: 4,
    expl: "t = 24000/400 = 60 minutos."
  },
  {
    id: "mat-005", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um trem sai às 8h e chega às 11h30. A duração da viagem é:",
    opts: ["3h30min", "2h", "2h30min", "3h", "4h"],
    ans: 0,
    expl: "De 8h a 11h30 = 3 horas e 30 minutos."
  },
  {
    id: "mat-006", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um objeto pesa 2,5 kg. Em gramas, isso equivale a:",
    opts: ["25 g", "250 g", "25.000 g", "0,25 g", "2.500 g"],
    ans: 4,
    expl: "1 kg = 1.000 g. 2,5 × 1.000 = 2.500 g."
  },
  {
    id: "mat-007", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Quantos meses há em 3 anos e 4 meses?",
    opts: ["36", "38", "40", "42", "48"],
    ans: 2,
    expl: "3 × 12 + 4 = 36 + 4 = 40 meses."
  },
  {
    id: "mat-008", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Se uma impressora faz 30 cópias por minuto, quantas cópias faz em 2,5 horas?",
    opts: ["750", "1.500", "3.000", "4.500", "9.000"],
    ans: 3,
    expl: "2,5 h = 150 min. 30 × 150 = 4.500 cópias."
  },
  {
    id: "mat-009", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Uma moto percorre 180 km com 3 litros de combustível. Quantos km por litro ela faz?",
    opts: ["30", "40", "50", "60", "90"],
    ans: 3,
    expl: "180 / 3 = 60 km/L."
  },
  {
    id: "mat-010", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um ônibus sai de São Paulo às 22h40 e a viagem dura 7 horas e 35 minutos. O horário de chegada, no dia seguinte, é:",
    opts: ["5h15", "5h40", "6h05", "6h15", "7h15"],
    ans: 3,
    expl: "22h40 + 7h = 5h40 do dia seguinte; 5h40 + 35 min = 6h15."
  },
  {
    id: "mat-011", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um terreno rural tem área de 2,5 hectares. Sabendo que 1 hectare equivale a 10.000 m², a área do terreno é:",
    opts: ["25 m²", "250 m²", "2.500 m²", "25.000 m²", "250.000 m²"],
    ans: 3,
    expl: "2,5 × 10.000 = 25.000 m². O hectare corresponde à área de um quadrado de 100 m de lado."
  },
  {
    id: "mat-012", disc: "Aritmética", tema: "Grandezas e medidas",
    text: "Um medicamento deve ser administrado na dose de 5 mg por quilograma de massa corporal. Para uma criança de 18 kg, a dose é:",
    opts: ["45 mg", "90 mg", "180 mg", "360 mg", "900 mg"],
    ans: 1,
    expl: "Dose = 5 mg × 18 kg = 90 mg. Doses proporcionais à massa são comuns em pediatria."
  },
  {
    id: "mat-013", disc: "Aritmética", tema: "Potências e raízes",
    text: "O valor de 2⁵ é:",
    opts: ["32", "10", "16", "64", "25"],
    ans: 0,
    expl: "2⁵ = 2×2×2×2×2 = 32."
  },
  {
    id: "mat-014", disc: "Aritmética", tema: "Potências e raízes",
    text: "O resultado de (3² + 4²)^(1/2) é:",
    opts: ["3", "4", "5", "7", "25"],
    ans: 2,
    expl: "√(3² + 4²) = √(9 + 16) = √25 = 5."
  },
  {
    id: "mat-015", disc: "Aritmética", tema: "Potências e raízes",
    text: "Em notação científica, 0,00045 é igual a:",
    opts: ["4,5 × 10⁻²", "4,5 × 10⁻³", "4,5 × 10⁻⁵", "4,5 × 10³", "4,5 × 10⁻⁴"],
    ans: 4,
    expl: "0,00045 = 4,5 × 10⁻⁴ (move a vírgula 4 casas para a direita)."
  },
  {
    id: "mat-016", disc: "Aritmética", tema: "Potências e raízes",
    text: "O valor de 3² + 4² é:",
    opts: ["7", "49", "14", "12", "25"],
    ans: 4,
    expl: "9 + 16 = 25."
  },
  {
    id: "mat-017", disc: "Aritmética", tema: "Potências e raízes",
    text: "Qual é a raiz cúbica de 27?",
    opts: ["9", "3", "√27", "6", "4"],
    ans: 1,
    expl: "³√27 = 3, pois 3³ = 27."
  },
  {
    id: "mat-018", disc: "Aritmética", tema: "Potências e raízes",
    text: "O resultado de (−3)³ é:",
    opts: ["9", "−9", "27", "81", "−27"],
    ans: 4,
    expl: "(−3)³ = −3 × −3 × −3 = −27."
  },
  {
    id: "mat-019", disc: "Aritmética", tema: "Potências e raízes",
    text: "Qual é o valor de 2⁰ + 3¹ + 4²?",
    opts: ["14", "16", "18", "20", "24"],
    ans: 3,
    expl: "1 + 3 + 16 = 20."
  },
  {
    id: "mat-020", disc: "Aritmética", tema: "Potências e raízes",
    text: "Qual é o valor de √144?",
    opts: ["12", "13", "14", "15", "16"],
    ans: 0,
    expl: "12² = 144 → √144 = 12."
  },
  {
    id: "mat-021", disc: "Aritmética", tema: "Potências e raízes",
    text: "O valor de (√5)⁴ é:",
    opts: ["5", "10", "20", "25", "100"],
    ans: 3,
    expl: "(√5)⁴ = ((√5)²)² = 5² = 25."
  },
  {
    id: "mat-022", disc: "Aritmética", tema: "Potências e raízes",
    text: "A expressão 0,001 em potência de 10 é:",
    opts: ["10⁻¹", "10⁻²", "10⁻⁴", "10⁻³", "10³"],
    ans: 3,
    expl: "0,001 = 1/1000 = 10⁻³."
  },
  {
    id: "mat-023", disc: "Aritmética", tema: "Potências e raízes",
    text: "O valor de √(9/16) é:",
    opts: ["9/16", "3/16", "9/4", "3/8", "3/4"],
    ans: 4,
    expl: "√(9/16) = √9/√16 = 3/4."
  },
  {
    id: "mat-024", disc: "Aritmética", tema: "Potências e raízes",
    text: "O cubo perfeito mais próximo de 200 (por excesso) é:",
    opts: ["125", "216", "243", "196", "225"],
    ans: 1,
    expl: "5³ = 125 e 6³ = 216. O mais próximo por excesso é 216."
  },
  {
    id: "mat-025", disc: "Aritmética", tema: "Potências e raízes",
    text: "Qual é o resultado de (−2)⁴?",
    opts: ["−16", "−8", "8", "16", "32"],
    ans: 3,
    expl: "(−2)⁴ = (−2)·(−2)·(−2)·(−2) = 16 (expoente par → positivo)."
  },
  {
    id: "mat-026", disc: "Aritmética", tema: "Potências e raízes",
    text: "O valor de 2³ × 2² é:",
    opts: ["16", "32", "64", "1.024", "36"],
    ans: 1,
    expl: "2³ × 2² = 2^(3+2) = 2⁵ = 32."
  },
  {
    id: "mat-027", disc: "Aritmética", tema: "Potências e raízes",
    text: "Quantos algarismos tem o número 10^6?",
    opts: ["3", "4", "5", "6", "7"],
    ans: 4,
    expl: "10^6 = 1.000.000 → 7 algarismos."
  },
  {
    id: "mat-028", disc: "Aritmética", tema: "Potências e raízes",
    text: "Qual é o valor de (1/2)⁻³?",
    opts: ["8", "−8", "−1/8", "1/8", "3/2"],
    ans: 0,
    expl: "(1/2)⁻³ = 2³ = 8."
  },
  {
    id: "mat-029", disc: "Aritmética", tema: "Potências e raízes",
    text: "O valor de (√3)² é:",
    opts: ["√3", "9", "3/2", "6", "3"],
    ans: 4,
    expl: "(√3)² = 3, por definição de raiz quadrada."
  },
  {
    id: "mat-030", disc: "Aritmética", tema: "Potências e raízes",
    text: "O resultado de √(0,25) é:",
    opts: ["0,025", "0,05", "0,5", "2,5", "5"],
    ans: 2,
    expl: "0,25 = 1/4. √(1/4) = 1/2 = 0,5."
  },
  {
    id: "mat-031", disc: "Aritmética", tema: "Potências e raízes",
    text: "A expressão 8^(1/3) é igual a:",
    opts: ["4", "8/3", "√8", "4/3", "2"],
    ans: 4,
    expl: "8^(1/3) = ³√8 = 2, pois 2³ = 8."
  },
  {
    id: "mat-032", disc: "Aritmética", tema: "Potências e raízes",
    text: "Qual é o valor de 4^(3/2)?",
    opts: ["4", "6", "8", "12", "16"],
    ans: 2,
    expl: "4^(3/2) = (√4)³ = 2³ = 8."
  },
  {
    id: "mat-033", disc: "Aritmética", tema: "Potências e raízes",
    text: "Qual é o valor de 5^0 + 5^1?",
    opts: ["5", "6", "10", "25", "26"],
    ans: 1,
    expl: "5⁰ = 1 e 5¹ = 5. Soma = 6."
  },
  {
    id: "mat-034", disc: "Aritmética", tema: "Divisibilidade",
    text: "O MDC entre 36 e 48 é:",
    opts: ["4", "6", "8", "12", "24"],
    ans: 3,
    expl: "36 = 2²·3² e 48 = 2⁴·3. MDC = 2²·3 = 12."
  },
  {
    id: "mat-035", disc: "Aritmética", tema: "Divisibilidade",
    text: "O MMC entre 4, 6 e 10 é:",
    opts: ["20", "30", "40", "60", "120"],
    ans: 3,
    expl: "4 = 2², 6 = 2·3, 10 = 2·5. MMC = 2²·3·5 = 60."
  },
  {
    id: "mat-036", disc: "Aritmética", tema: "Divisibilidade",
    text: "Qual é o MDC de 12 e 18?",
    opts: ["2", "3", "4", "6", "9"],
    ans: 3,
    expl: "12 = 2²·3; 18 = 2·3². MDC = 2·3 = 6."
  },
  {
    id: "mat-037", disc: "Aritmética", tema: "Divisibilidade",
    text: "Qual é o MMC de 4 e 6?",
    opts: ["2", "4", "8", "12", "24"],
    ans: 3,
    expl: "4 = 2²; 6 = 2·3. MMC = 2²·3 = 12."
  },
  {
    id: "mat-038", disc: "Aritmética", tema: "Divisibilidade",
    text: "Quantos números primos existem entre 1 e 20?",
    opts: ["4", "5", "6", "7", "8"],
    ans: 4,
    expl: "Primos: 2, 3, 5, 7, 11, 13, 17, 19 → 8 primos."
  },
  {
    id: "mat-039", disc: "Aritmética", tema: "Divisibilidade",
    text: "O número 91 é primo?",
    opts: [
      "Sim",
      "Não, é divisível por 11",
      "Não, é divisível por 3",
      "Não, é par",
      "Não, é divisível por 7"
    ],
    ans: 4,
    expl: "91 = 7 × 13. Não é primo."
  },
  {
    id: "mat-040", disc: "Aritmética", tema: "Números e operações",
    text: "O valor de |−7| + |3| é:",
    opts: ["−10", "−4", "4", "10", "14"],
    ans: 3,
    expl: "|−7| = 7 e |3| = 3. Soma = 10."
  },
  {
    id: "mat-041", disc: "Aritmética", tema: "Números e operações",
    text: "O número π (pi) é:",
    opts: [
      "Racional e inteiro",
      "Racional e fracionário",
      "Natural",
      "Inteiro negativo",
      "Irracional"
    ],
    ans: 4,
    expl: "π é um número irracional (não pode ser expresso como fração de inteiros)."
  },
  {
    id: "mat-042", disc: "Aritmética", tema: "Números e operações",
    text: "O número 0,333... em fração é:",
    opts: ["1/3", "1/2", "3/10", "33/100", "1/4"],
    ans: 0,
    expl: "0,333... = 1/3 (dízima periódica simples)."
  },
  {
    id: "mat-043", disc: "Aritmética", tema: "Números e operações",
    text: "Se cada ônibus comporta 40 passageiros, quantos ônibus são necessários para 340 passageiros?",
    opts: ["5", "6", "7", "8", "9"],
    ans: 4,
    expl: "340/40 = 8,5 → arredondando para cima = 9 ônibus."
  },
  {
    id: "mat-044", disc: "Aritmética", tema: "Números e operações",
    text: "Se hoje é terça-feira, daqui a 100 dias será:",
    opts: ["Domingo", "Segunda", "Terça", "Sexta", "Quinta"],
    ans: 4,
    expl: "100 = 14·7 + 2. Dois dias depois de terça = quinta-feira."
  },
  {
    id: "mat-045", disc: "Aritmética", tema: "Números e operações",
    text: "Qual é o valor de (3/4) ÷ (1/2)?",
    opts: ["3/2", "3/8", "2/3", "3/4", "1/8"],
    ans: 0,
    expl: "(3/4) ÷ (1/2) = (3/4) × 2 = 6/4 = 3/2."
  },
  {
    id: "mat-046", disc: "Aritmética", tema: "Números e operações",
    text: "O produto de dois números é 48 e um deles é 6. O outro é:",
    opts: ["5", "6", "7", "8", "9"],
    ans: 3,
    expl: "48 / 6 = 8."
  },
  {
    id: "mat-047", disc: "Aritmética", tema: "Números e operações",
    text: "A soma dos dígitos de 2.025 é:",
    opts: ["8", "9", "10", "11", "12"],
    ans: 1,
    expl: "2 + 0 + 2 + 5 = 9."
  },
  {
    id: "mat-048", disc: "Aritmética", tema: "Números e operações",
    text: "O oposto aditivo de −7 é:",
    opts: ["7", "−7", "1/7", "−1/7", "0"],
    ans: 0,
    expl: "Oposto aditivo de a é −a. Oposto de −7 é 7."
  },
  {
    id: "mat-049", disc: "Aritmética", tema: "Números e operações",
    text: "Qual é o inverso multiplicativo de 5?",
    opts: ["−5", "1/5", "5", "−1/5", "25"],
    ans: 1,
    expl: "O inverso multiplicativo de a é 1/a. De 5 é 1/5."
  },
  {
    id: "mat-050", disc: "Aritmética", tema: "Números e operações",
    text: "O valor de |3 − 8| + |−5| é:",
    opts: ["0", "5", "−10", "10", "−5"],
    ans: 3,
    expl: "|3−8| = |−5| = 5. |−5| = 5. Soma = 5 + 5 = 10."
  },
  {
    id: "mat-051", disc: "Aritmética", tema: "Conjuntos",
    text: "O conjunto dos números naturais inclui:",
    opts: ["−2", "0,5", "√2", "0", "−1"],
    ans: 3,
    expl: "ℕ = {0, 1, 2, 3, ...}. O zero é natural."
  },
  {
    id: "mat-052", disc: "Aritmética", tema: "Conjuntos",
    text: "A interseção dos conjuntos A = {1, 2, 3} e B = {2, 3, 4} é:",
    opts: ["{1, 2, 3, 4}", "{1, 4}", "{1}", "{4}", "{2, 3}"],
    ans: 4,
    expl: "A ∩ B = elementos comuns = {2, 3}."
  },
  {
    id: "mat-053", disc: "Aritmética", tema: "Conjuntos",
    text: "Dado o conjunto A = {vogais do alfabeto}, o número de elementos de A é:",
    opts: ["4", "5", "6", "7", "26"],
    ans: 1,
    expl: "Vogais: a, e, i, o, u → 5 elementos."
  },
  {
    id: "mat-054", disc: "Aritmética", tema: "Conjuntos",
    text: "Se A ⊂ B e B ⊂ A, então A e B são:",
    opts: ["Iguais", "Disjuntos", "Complementares", "Subconjuntos próprios", "Unitários"],
    ans: 0,
    expl: "Se A ⊂ B e B ⊂ A simultaneamente, então A = B."
  },

  // ══════════ PORCENTAGEM E PROPORÇÃO ══════════
  {
    id: "mat-055", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Uma torneira enche um tanque em 6 horas; outra, em 3 horas. Trabalhando juntas, em quanto tempo encherão o tanque?",
    opts: ["1 h", "1 h 30 min", "2 h 30 min", "2 h", "3 h"],
    ans: 3,
    expl: "Capacidade conjunta: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 por hora. Tempo = 2 horas."
  },
  {
    id: "mat-056", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Dois operários, trabalhando no mesmo ritmo, constroem um muro em 6 dias. Quantos dias levaria um deles sozinho?",
    opts: ["3", "6", "9", "12", "18"],
    ans: 3,
    expl: "1 operário faz metade por dia. Sozinho leva 12 dias."
  },
  {
    id: "mat-057", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Uma receita para 4 pessoas usa 200 g de farinha. Para 10 pessoas, serão necessários:",
    opts: ["400 g", "450 g", "500 g", "600 g", "800 g"],
    ans: 2,
    expl: "Proporção direta: (200/4) × 10 = 50 × 10 = 500 g."
  },
  {
    id: "mat-058", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Três torneiras enchem um tanque em 2h, 3h e 6h respectivamente. Juntas enchem em:",
    opts: ["1h", "30 min", "45 min", "1h15min", "2h"],
    ans: 0,
    expl: "1/2+1/3+1/6 = 3/6+2/6+1/6 = 6/6 = 1. Então enchem em 1 hora."
  },
  {
    id: "mat-059", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Um arquiteto construiu a maquete de um prédio na escala 1:50. Se o prédio real tem 6 m de altura, a altura da maquete é:",
    opts: ["1,2 cm", "3 cm", "6 cm", "12 cm", "30 cm"],
    ans: 3,
    expl: "Na escala 1:50, cada medida real é dividida por 50: 6 m = 600 cm; 600 ÷ 50 = 12 cm."
  },
  {
    id: "mat-060", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Seis pintores, trabalhando no mesmo ritmo, pintam um prédio em 10 dias. Quatro pintores, no mesmo ritmo, levariam:",
    opts: ["12 dias", "15 dias", "18 dias", "20 dias", "24 dias"],
    ans: 1,
    expl: "Número de pintores e tempo são inversamente proporcionais: 6 × 10 = 4 × d → d = 60/4 = 15 dias."
  },
  {
    id: "mat-061", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Uma cidade tem 500.000 habitantes e área de 250 km². Sua densidade demográfica é de:",
    opts: ["200 hab/km²", "500 hab/km²", "1.250 hab/km²", "2.000 hab/km²", "5.000 hab/km²"],
    ans: 3,
    expl: "Densidade = população / área = 500.000 / 250 = 2.000 habitantes por km²."
  },
  {
    id: "mat-062", disc: "Porcentagem e proporção", tema: "Razão e proporção",
    text: "Um corredor completou 10 km em 50 minutos. Mantendo o mesmo ritmo, quanto tempo ele leva, em média, para correr cada quilômetro?",
    opts: ["4 min", "5 min", "6 min", "10 min", "50 min"],
    ans: 1,
    expl: "Ritmo (pace) = tempo / distância = 50 min / 10 km = 5 minutos por quilômetro."
  },
  {
    id: "mat-063", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Uma loja oferece 20% de desconto em um produto de R$ 150. O preço final é:",
    opts: ["R$ 110", "R$ 120", "R$ 125", "R$ 130", "R$ 135"],
    ans: 1,
    expl: "Desconto = 20% de 150 = R$ 30. Preço final = 150 − 30 = R$ 120."
  },
  {
    id: "mat-064", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Um produto custa R$ 200 e sofre reajuste de 15%. O novo preço é:",
    opts: ["R$ 225", "R$ 230", "R$ 235", "R$ 240", "R$ 245"],
    ans: 1,
    expl: "Novo preço = 200·1,15 = R$ 230."
  },
  {
    id: "mat-065", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Numa classe de 30 alunos, 40% passaram na prova. Quantos passaram?",
    opts: ["8", "10", "12", "14", "15"],
    ans: 2,
    expl: "40% de 30 = 0,4·30 = 12 alunos."
  },
  {
    id: "mat-066", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Um produto custa R$ 200 e tem desconto de 15%. O preço final é:",
    opts: ["R$ 165", "R$ 170", "R$ 175", "R$ 180", "R$ 185"],
    ans: 1,
    expl: "Desconto = 0,15 × 200 = R$ 30. Preço final = 200 − 30 = R$ 170."
  },
  {
    id: "mat-067", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Um salário de R$ 2.000 teve aumento de 8%. O novo salário é:",
    opts: ["R$ 2.016", "R$ 2.080", "R$ 2.160", "R$ 2.200", "R$ 2.400"],
    ans: 2,
    expl: "Aumento = 0,08 × 2000 = R$ 160. Novo = 2000 + 160 = R$ 2.160."
  },
  {
    id: "mat-068", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Um produto com preço original de R$ 80 foi aumentado para R$ 100. O aumento percentual é:",
    opts: ["20%", "25%", "30%", "40%", "50%"],
    ans: 1,
    expl: "Aumento = 20. % = (20/80)·100 = 25%."
  },
  {
    id: "mat-069", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "A taxa de desconto equivale a 20% sobre R$ 350. O valor do desconto é:",
    opts: ["R$ 50", "R$ 60", "R$ 70", "R$ 75", "R$ 80"],
    ans: 2,
    expl: "0,20 × 350 = R$ 70."
  },
  {
    id: "mat-070", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Qual é o percentual de 30 em 120?",
    opts: ["15%", "20%", "25%", "30%", "40%"],
    ans: 2,
    expl: "(30/120)·100 = 25%."
  },
  {
    id: "mat-071", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Uma loja deu 10% de desconto e depois mais 10%. O desconto total sobre o preço original é:",
    opts: ["20%", "18%", "21%", "22%", "19%"],
    ans: 4,
    expl: "Fator: 0,9 × 0,9 = 0,81 → desconto total = 19%."
  },
  {
    id: "mat-072", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Se o preço subiu de R$ 200 para R$ 250, o aumento em % é:",
    opts: ["20%", "25%", "30%", "40%", "50%"],
    ans: 1,
    expl: "(50/200)·100 = 25%."
  },
  {
    id: "mat-073", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Maria tem R$ 150 e gasta 40% em alimentação. Quanto sobra?",
    opts: ["R$ 90", "R$ 100", "R$ 110", "R$ 120", "R$ 130"],
    ans: 0,
    expl: "40% de 150 = R$ 60. Sobra = 150 − 60 = R$ 90."
  },
  {
    id: "mat-074", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Uma loja tem 120 itens e 25% estão em promoção. Quantos itens estão em promoção?",
    opts: ["25", "30", "35", "40", "45"],
    ans: 1,
    expl: "25% de 120 = 0,25 × 120 = 30."
  },
  {
    id: "mat-075", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Numa pesquisa com 200 pessoas, 60% preferem a opção A. Quantas preferiram a opção A?",
    opts: ["60", "100", "120", "140", "160"],
    ans: 2,
    expl: "60% de 200 = 0,6 × 200 = 120."
  },
  {
    id: "mat-076", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Qual é o valor de 100% de um número se 25% dele é 50?",
    opts: ["100", "150", "200", "250", "400"],
    ans: 2,
    expl: "25% → 50. 100% → 50 × 4 = 200."
  },
  {
    id: "mat-077", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Num total de 400 questões, 80 foram de Matemática. O percentual foi:",
    opts: ["20%", "25%", "30%", "35%", "40%"],
    ans: 0,
    expl: "(80/400) × 100 = 20%."
  },
  {
    id: "mat-078", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "O preço de um produto aumentou 20% em janeiro e, em fevereiro, sofreu uma redução de 20%. Em relação ao preço inicial, o preço final é:",
    opts: ["Igual ao inicial", "4% maior", "20% menor", "40% menor", "4% menor"],
    ans: 4,
    expl: "Fatores sucessivos se multiplicam: 1,20 × 0,80 = 0,96. O preço final é 96% do inicial, ou seja, 4% menor. Aumentos e descontos de mesma taxa não se anulam."
  },
  {
    id: "mat-079", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Uma regra prática diz que abastecer com etanol compensa quando seu preço é, no máximo, 70% do preço da gasolina. Se a gasolina custa R$ 6,00 e o etanol R$ 4,50, é correto concluir que:",
    opts: [
      "Compensa abastecer com gasolina, pois o etanol custa 75% do preço dela",
      "Compensa abastecer com etanol, pois ele é mais barato",
      "Tanto faz, pois o etanol custa exatamente 70% da gasolina",
      "Compensa abastecer com etanol, pois custa 65% da gasolina",
      "Não é possível comparar os preços"
    ],
    ans: 0,
    expl: "4,50 ÷ 6,00 = 0,75 = 75%. Como passa do limite de 70%, a gasolina é mais vantajosa: o rendimento menor do etanol (km por litro) não é compensado pelo preço."
  },
  {
    id: "mat-080", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Em uma pesquisa com 1.200 eleitores, 45% declararam voto no candidato A, e a margem de erro é de 3 pontos percentuais. Isso significa que a intenção de voto em A está, provavelmente, entre:",
    opts: ["45% e 48%", "42% e 45%", "40% e 50%", "44,97% e 45,03%", "42% e 48%"],
    ans: 4,
    expl: "A margem de erro de 3 pontos é aplicada para mais e para menos: 45 − 3 = 42% e 45 + 3 = 48%."
  },
  {
    id: "mat-081", disc: "Porcentagem e proporção", tema: "Porcentagem",
    text: "Uma pessoa de 70 kg e 1,75 m de altura quer calcular seu índice de massa corporal (IMC = massa ÷ altura²). Seu IMC é aproximadamente:",
    opts: ["18,5", "22,9", "25,0", "30,4", "40,0"],
    ans: 1,
    expl: "IMC = 70 ÷ (1,75)² = 70 ÷ 3,0625 ≈ 22,9. Pela classificação da OMS, valores entre 18,5 e 24,9 são considerados peso normal para adultos."
  },

  // ══════════ MATEMÁTICA FINANCEIRA ══════════
  {
    id: "mat-082", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Um capital de R$ 1.000 é aplicado a juros simples de 5% ao mês. Após 4 meses, o montante é:",
    opts: ["R$ 1.200", "R$ 1.250", "R$ 1.300", "R$ 1.350", "R$ 1.400"],
    ans: 0,
    expl: "M = C(1 + i·t) = 1000·(1 + 0,05·4) = 1000·1,2 = R$ 1.200."
  },
  {
    id: "mat-083", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Um capital de R$ 2.000 é aplicado a juros compostos de 10% ao ano. Após 2 anos, o montante é:",
    opts: ["R$ 2.200", "R$ 2.400", "R$ 2.420", "R$ 2.440", "R$ 2.480"],
    ans: 2,
    expl: "M = 2000·(1,10)² = 2000·1,21 = R$ 2.420."
  },
  {
    id: "mat-084", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "R$ 500 aplicados a 10% de juros simples ao ano. Após 3 anos, o montante é:",
    opts: ["R$ 550", "R$ 600", "R$ 650", "R$ 665", "R$ 700"],
    ans: 2,
    expl: "J = 500 · 0,1 · 3 = 150. M = 500 + 150 = R$ 650."
  },
  {
    id: "mat-085", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Se R$ 1.000 rendem R$ 100 em juros simples em 1 ano, a taxa anual é:",
    opts: ["5%", "8%", "10%", "12%", "15%"],
    ans: 2,
    expl: "i = J/(C·t) = 100/(1000·1) = 0,10 = 10%."
  },
  {
    id: "mat-086", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Em juros compostos, R$ 1.000 a 10% ao ano por 2 anos resulta em:",
    opts: ["R$ 1.100", "R$ 1.200", "R$ 1.210", "R$ 1.220", "R$ 1.250"],
    ans: 2,
    expl: "M = 1000 · (1,10)² = 1000 · 1,21 = R$ 1.210."
  },
  {
    id: "mat-087", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Um artigo custa R$ 450 à vista ou em 3 parcelas sem juros. Cada parcela vale:",
    opts: ["R$ 100", "R$ 130", "R$ 150", "R$ 160", "R$ 180"],
    ans: 2,
    expl: "450 / 3 = R$ 150."
  },
  {
    id: "mat-088", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Uma pessoa aplicou R$ 10.000,00 a juros compostos de 1% ao mês. Após 2 meses, o montante será:",
    opts: ["R$ 10.020,00", "R$ 10.100,00", "R$ 10.200,00", "R$ 10.201,00", "R$ 10.210,00"],
    ans: 3,
    expl: "M = C·(1 + i)ⁿ = 10.000 × 1,01² = 10.000 × 1,0201 = R$ 10.201,00. Nos juros compostos, os juros do 2º mês incidem também sobre os juros do 1º."
  },
  {
    id: "mat-089", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Um celular custa R$ 1.200,00. A loja oferece duas opções: à vista com 5% de desconto, ou em 4 parcelas de R$ 330,00. A diferença entre o valor total parcelado e o valor à vista é:",
    opts: ["R$ 60,00", "R$ 120,00", "R$ 140,00", "R$ 180,00", "R$ 200,00"],
    ans: 3,
    expl: "À vista: 1.200 × 0,95 = R$ 1.140,00. Parcelado: 4 × 330 = R$ 1.320,00. Diferença: 1.320 − 1.140 = R$ 180,00."
  },
  {
    id: "mat-090", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Um trabalhador recebeu reajuste salarial de 8% em um ano em que a inflação foi de 8%. Em relação ao ano anterior, seu poder de compra:",
    opts: [
      "Aumentou 8%",
      "Permaneceu praticamente o mesmo",
      "Aumentou 16%",
      "Diminuiu 8%",
      "Diminuiu 16%"
    ],
    ans: 1,
    expl: "O aumento real é a diferença entre o reajuste e a perda causada pela inflação. Quando as taxas são iguais, o salário apenas recupera o valor perdido, e o poder de compra se mantém."
  },
  {
    id: "mat-091", disc: "Matemática financeira", tema: "Juros e parcelas",
    text: "Um carro faz 12 km por litro de gasolina. Para uma viagem de 300 km, com a gasolina a R$ 6,00 o litro, o gasto com combustível será de:",
    opts: ["R$ 120,00", "R$ 150,00", "R$ 180,00", "R$ 200,00", "R$ 250,00"],
    ans: 1,
    expl: "Litros necessários: 300 ÷ 12 = 25 L. Custo: 25 × 6,00 = R$ 150,00."
  },

  // ══════════ ÁLGEBRA ══════════
  {
    id: "mat-092", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "log₁₀(1000) é igual a:",
    opts: ["1", "2", "3", "4", "100"],
    ans: 2,
    expl: "10³ = 1000, portanto log₁₀(1000) = 3."
  },
  {
    id: "mat-093", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "O valor de log₂(64) é:",
    opts: ["5", "6", "7", "8", "9"],
    ans: 1,
    expl: "2⁶ = 64, portanto log₂(64) = 6."
  },
  {
    id: "mat-094", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "Se 2^x = 32, então x vale:",
    opts: ["1", "2", "3", "4", "5"],
    ans: 4,
    expl: "2^5 = 32 → x = 5."
  },
  {
    id: "mat-095", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "Se 9^x = 27, então x vale:",
    opts: ["1", "3/2", "2", "2/3", "3"],
    ans: 1,
    expl: "9^x = 3^(2x) e 27 = 3³. Logo 2x = 3 → x = 3/2."
  },
  {
    id: "mat-096", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "log₃(81) vale:",
    opts: ["2", "3", "4", "9", "27"],
    ans: 2,
    expl: "3⁴ = 81 → log₃(81) = 4."
  },
  {
    id: "mat-097", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "Se log(2) ≈ 0,301, então log(8) vale aproximadamente:",
    opts: ["0,602", "1,204", "0,301", "1,505", "0,903"],
    ans: 4,
    expl: "log(8) = log(2³) = 3 · log(2) ≈ 3 · 0,301 = 0,903."
  },
  {
    id: "mat-098", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "A solução de 4^x = 64 é:",
    opts: ["x = 2", "x = 3", "x = 4", "x = 6", "x = 16"],
    ans: 1,
    expl: "4^x = 4³ (pois 4³ = 64) → x = 3."
  },
  {
    id: "mat-099", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "log₅(1) vale:",
    opts: ["−1", "1", "5", "indefinido", "0"],
    ans: 4,
    expl: "5⁰ = 1 → log₅(1) = 0."
  },
  {
    id: "mat-100", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "Se logₐ(a) = 1, então log₇(7) vale:",
    opts: ["0", "7", "49", "1", "1/7"],
    ans: 3,
    expl: "Por definição, logₐ(a) = 1. Portanto log₇(7) = 1."
  },
  {
    id: "mat-101", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "log₂(32) + log₂(2) vale:",
    opts: ["5", "6", "7", "8", "10"],
    ans: 1,
    expl: "log₂(32) = 5, log₂(2) = 1. Soma = 6."
  },
  {
    id: "mat-102", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "Se log(a) = 2 e log(b) = 3, então log(a·b) vale:",
    opts: ["6", "2/3", "3/2", "1", "5"],
    ans: 4,
    expl: "log(a·b) = log(a) + log(b) = 2 + 3 = 5."
  },
  {
    id: "mat-103", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "Se 3^(x+1) = 27, então x vale:",
    opts: ["1", "2", "3", "4", "6"],
    ans: 1,
    expl: "27 = 3³. Logo x + 1 = 3 → x = 2."
  },
  {
    id: "mat-104", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "O valor de log₁₀(10⁵) é:",
    opts: ["1", "2", "5", "10", "100"],
    ans: 2,
    expl: "log₁₀(10⁵) = 5."
  },
  {
    id: "mat-105", disc: "Álgebra", tema: "Exponencial e logaritmo",
    text: "Se log₂(x) = 4, então x vale:",
    opts: ["4", "8", "12", "16", "32"],
    ans: 3,
    expl: "x = 2⁴ = 16."
  },
  {
    id: "mat-106", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "A solução da equação 2x + 6 = 14 é:",
    opts: ["x = 2", "x = 3", "x = 4", "x = 5", "x = 10"],
    ans: 2,
    expl: "2x = 14 − 6 = 8 → x = 4."
  },
  {
    id: "mat-107", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "Se 3x − 2y = 10 e x = 4, qual é o valor de y?",
    opts: ["y = 0", "y = 1", "y = 2", "y = 3", "y = 4"],
    ans: 1,
    expl: "3·4 − 2y = 10 → 12 − 2y = 10 → 2y = 2 → y = 1."
  },
  {
    id: "mat-108", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "Qual é o valor de x na equação 3x − 9 = 0?",
    opts: ["x = 0", "x = 1", "x = 3", "x = 6", "x = 9"],
    ans: 2,
    expl: "3x = 9 → x = 3."
  },
  {
    id: "mat-109", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "A equação 5x + 10 = 0 tem solução:",
    opts: ["x = −2", "x = 5", "x = 2", "x = −5", "x = 10"],
    ans: 0,
    expl: "5x = −10 → x = −2."
  },
  {
    id: "mat-110", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "Resolva: 2(x + 3) = 14.",
    opts: ["x = 4", "x = 5", "x = 6", "x = 7", "x = 8"],
    ans: 0,
    expl: "2x + 6 = 14 → 2x = 8 → x = 4."
  },
  {
    id: "mat-111", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "Se 4x − 3 = 2x + 7, então x vale:",
    opts: ["2", "4", "5", "6", "8"],
    ans: 2,
    expl: "4x − 2x = 7 + 3 → 2x = 10 → x = 5."
  },
  {
    id: "mat-112", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "O valor de x que satisfaz |2x − 4| = 6 é:",
    opts: ["x = −1 ou x = 5", "x = 1 ou x = 5", "x = 1 ou x = −5", "x = 5 apenas", "x = −1 apenas"],
    ans: 0,
    expl: "2x − 4 = 6 → x = 5; ou 2x − 4 = −6 → x = −1."
  },
  {
    id: "mat-113", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "Qual é o valor de x em: x/3 + x/6 = 5?",
    opts: ["5", "8", "10", "12", "15"],
    ans: 2,
    expl: "2x/6 + x/6 = 5 → 3x/6 = 5 → x/2 = 5 → x = 10."
  },
  {
    id: "mat-114", disc: "Álgebra", tema: "Equação do 1º grau",
    text: "Se a·b = 0, então:",
    opts: ["a = 0 ou b = 0", "a = 0 e b = 0", "a + b = 0", "a = b", "a/b = 0"],
    ans: 0,
    expl: "Pelo teorema do produto nulo, pelo menos um dos fatores é zero."
  },
  {
    id: "mat-115", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "Qual é a raiz da equação x² − 5x + 6 = 0?",
    opts: [
      "x = 1 ou x = 6",
      "x = −2 ou x = −3",
      "x = 3 ou x = −2",
      "x = 2 ou x = 3",
      "x = 1 ou x = 5"
    ],
    ans: 3,
    expl: "(x−2)(x−3) = 0 → x = 2 ou x = 3."
  },
  {
    id: "mat-116", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "A equação 2x² − 8 = 0 tem como solução:",
    opts: ["x = ±1", "x = ±4", "x = ±8", "x = ±√2", "x = ±2"],
    ans: 4,
    expl: "2x² = 8 → x² = 4 → x = ±2."
  },
  {
    id: "mat-117", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "A soma das raízes da equação x² − 5x + 6 = 0 é:",
    opts: ["2", "3", "5", "6", "11"],
    ans: 2,
    expl: "Pela relação de Girard, soma das raízes = −b/a = 5/1 = 5."
  },
  {
    id: "mat-118", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "O produto das raízes de x² + 3x − 10 = 0 é:",
    opts: ["−10", "−3", "3", "10", "13"],
    ans: 0,
    expl: "Produto das raízes = c/a = −10/1 = −10."
  },
  {
    id: "mat-119", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "Quantas raízes reais tem a equação x² + 4x + 5 = 0?",
    opts: ["Uma", "Duas", "Três", "Nenhuma", "Quatro"],
    ans: 3,
    expl: "Δ = 16 − 20 = −4 < 0. Sem raízes reais."
  },
  {
    id: "mat-120", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "A equação (x − 2)(x + 5) = 0 tem raízes:",
    opts: ["x = 2 e x = 5", "x = 2 e x = −5", "x = −2 e x = 5", "x = −2 e x = −5", "x = 0 e x = 2"],
    ans: 1,
    expl: "x − 2 = 0 → x = 2; x + 5 = 0 → x = −5."
  },
  {
    id: "mat-121", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "A equação x² = 49 tem soluções:",
    opts: ["x = 7 apenas", "x = −7 apenas", "x = ±√7", "Sem solução real", "x = 7 e x = −7"],
    ans: 4,
    expl: "x² = 49 → x = ±7."
  },
  {
    id: "mat-122", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "O conjunto {x ∈ ℝ | x² = 4} é:",
    opts: ["{4}", "{2}", "{−2}", "Vazio", "{−2, 2}"],
    ans: 4,
    expl: "x² = 4 → x = ±2. O conjunto é {−2, 2}."
  },
  {
    id: "mat-123", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "Qual é a solução da inequação x² − 1 > 0?",
    opts: ["x > 1", "x < −1", "−1 < x < 1", "x > 1 ou x < −1", "x = ±1"],
    ans: 3,
    expl: "x² > 1 → |x| > 1 → x > 1 ou x < −1."
  },
  {
    id: "mat-124", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "Na equação 3x² − 12 = 0, os valores de x são:",
    opts: ["x = ±1", "x = ±2", "x = ±4", "x = ±6", "x = ±√12"],
    ans: 1,
    expl: "3x² = 12 → x² = 4 → x = ±2."
  },
  {
    id: "mat-125", disc: "Álgebra", tema: "Equação do 2º grau",
    text: "Se o discriminante Δ = 0, a equação quadrática tem:",
    opts: [
      "Nenhuma raiz real",
      "Duas raízes reais distintas",
      "Duas raízes complexas",
      "Infinitas raízes",
      "Uma raiz real repetida"
    ],
    ans: 4,
    expl: "Δ = 0 → a equação tem uma raiz real com multiplicidade 2."
  },
  {
    id: "mat-126", disc: "Álgebra", tema: "Sistemas",
    text: "Qual é a solução do sistema: x + y = 7 e x − y = 3?",
    opts: ["x=2, y=5", "x=5, y=2", "x=3, y=4", "x=4, y=3", "x=6, y=1"],
    ans: 1,
    expl: "Somando: 2x = 10 → x = 5. Subtraindo: y = 7−5 = 2."
  },
  {
    id: "mat-127", disc: "Álgebra", tema: "Sistemas",
    text: "Se x + y = 10 e x − y = 4, então x · y vale:",
    opts: ["16", "21", "24", "30", "36"],
    ans: 1,
    expl: "x = 7, y = 3 (somando e subtraindo). x · y = 21."
  },
  {
    id: "mat-128", disc: "Álgebra", tema: "Sistemas",
    text: "Quantas soluções naturais tem x + y = 5 (x, y ∈ ℕ)?",
    opts: ["5", "6", "7", "8", "9"],
    ans: 1,
    expl: "(0,5),(1,4),(2,3),(3,2),(4,1),(5,0) → 6 soluções."
  },
  {
    id: "mat-129", disc: "Álgebra", tema: "Inequações",
    text: "O conjunto solução de 3x − 1 < 8 em ℝ é:",
    opts: ["x > 3", "x < 2", "x > 2", "x < 3", "x ≤ 3"],
    ans: 3,
    expl: "3x < 9 → x < 3."
  },
  {
    id: "mat-130", disc: "Álgebra", tema: "Inequações",
    text: "Quantas soluções inteiras tem −3 ≤ x < 2?",
    opts: ["4", "5", "6", "7", "8"],
    ans: 1,
    expl: "x ∈ {−3, −2, −1, 0, 1} → 5 soluções."
  },
  {
    id: "mat-131", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "Qual é o valor de (x + y)² se x = 3 e y = −1?",
    opts: ["8", "16", "10", "2", "4"],
    ans: 4,
    expl: "(3 + (−1))² = 2² = 4."
  },
  {
    id: "mat-132", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "Simplifique: (x² − 9) / (x − 3) para x ≠ 3.",
    opts: ["x − 3", "x + 3", "x + 9", "x² + 3", "x − 9"],
    ans: 1,
    expl: "x² − 9 = (x−3)(x+3). Dividindo por (x−3) → x + 3."
  },
  {
    id: "mat-133", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "Fatore: x² − 16.",
    opts: ["(x−4)²", "(x+4)²", "(x−2)(x+8)", "(x+2)(x+8)", "(x−4)(x+4)"],
    ans: 4,
    expl: "Diferença de quadrados: x² − 16 = (x−4)(x+4)."
  },
  {
    id: "mat-134", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "Se a + b = 7 e a·b = 12, quanto vale a² + b²?",
    opts: ["25", "37", "49", "61", "73"],
    ans: 0,
    expl: "a² + b² = (a+b)² − 2ab = 49 − 24 = 25."
  },
  {
    id: "mat-135", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "A expressão (2x)³ é igual a:",
    opts: ["2x³", "8x³", "6x³", "2x³+6", "6x"],
    ans: 1,
    expl: "(2x)³ = 2³ · x³ = 8x³."
  },
  {
    id: "mat-136", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "Qual é o quadrado de (a + b)?",
    opts: ["a² + b²", "a² − b²", "a² + ab + b²", "2a² + 2b²", "a² + 2ab + b²"],
    ans: 4,
    expl: "(a + b)² = a² + 2ab + b² (produto notável)."
  },
  {
    id: "mat-137", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "O produto (x + 2)(x − 2) é igual a:",
    opts: ["x² + 4", "x² − 4", "x² + 4x + 4", "x² − 4x − 4", "2x"],
    ans: 1,
    expl: "Diferença de quadrados: (x+2)(x−2) = x² − 4."
  },
  {
    id: "mat-138", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "Se a + b = 5 e a − b = 3, então a² − b² vale:",
    opts: ["15", "8", "16", "25", "9"],
    ans: 0,
    expl: "a² − b² = (a+b)(a−b) = 5·3 = 15."
  },
  {
    id: "mat-139", disc: "Álgebra", tema: "Produtos notáveis e fatoração",
    text: "Qual é a forma fatorada de x² + 6x + 9?",
    opts: ["(x−3)²", "(x+3)(x−3)", "(x+9)(x+1)", "(x+6)(x+1)", "(x+3)²"],
    ans: 4,
    expl: "Trinômio quadrado perfeito: x² + 6x + 9 = (x+3)²."
  },
  {
    id: "mat-140", disc: "Álgebra", tema: "Matrizes",
    text: "O determinante da matriz [[2, 1], [3, 4]] é:",
    opts: ["5", "7", "8", "11", "14"],
    ans: 0,
    expl: "det = 2·4 − 1·3 = 8 − 3 = 5."
  },
  {
    id: "mat-141", disc: "Álgebra", tema: "Matrizes",
    text: "A matriz [[1, 0], [0, 1]] é chamada de:",
    opts: ["Nula", "Transposta", "Diagonal", "Quadrada", "Identidade"],
    ans: 4,
    expl: "A matriz com 1s na diagonal principal e 0s fora é a matriz identidade."
  },
  {
    id: "mat-142", disc: "Álgebra", tema: "Matrizes",
    text: "Se A = [[2, 3], [1, 4]] e B = [[1, 0], [0, 1]], então A + B é:",
    opts: [
      "[[3, 3], [1, 5]]",
      "[[2, 3], [1, 4]]",
      "[[3, 4], [1, 5]]",
      "[[2, 4], [2, 5]]",
      "[[1, 3], [0, 4]]"
    ],
    ans: 0,
    expl: "Soma elemento a elemento: [[2+1, 3+0], [1+0, 4+1]] = [[3, 3], [1, 5]]."
  },
  {
    id: "mat-143", disc: "Álgebra", tema: "Números complexos",
    text: "O número imaginário i é definido como:",
    opts: ["i = 1", "i = −1", "i = √(−1)", "i = √1", "i = −√1"],
    ans: 2,
    expl: "Por definição, i = √(−1), logo i² = −1."
  },
  {
    id: "mat-144", disc: "Álgebra", tema: "Números complexos",
    text: "i² vale:",
    opts: ["1", "i", "−1", "−i", "0"],
    ans: 2,
    expl: "i² = (√(−1))² = −1."
  },
  {
    id: "mat-145", disc: "Álgebra", tema: "Números complexos",
    text: "O módulo do número complexo z = 3 + 4i é:",
    opts: ["3", "4", "5", "7", "12"],
    ans: 2,
    expl: "|z| = √(3² + 4²) = √25 = 5."
  },
  {
    id: "mat-146", disc: "Álgebra", tema: "Números complexos",
    text: "Qual é o valor de i⁴ (i = √(−1))?",
    opts: ["1", "−1", "i", "−i", "0"],
    ans: 0,
    expl: "i² = −1; i⁴ = (i²)² = (−1)² = 1."
  },

  // ══════════ FUNÇÕES ══════════
  {
    id: "mat-147", disc: "Funções", tema: "Função quadrática",
    text: "Para f(x) = 2x² − 4x + 6, a coordenada y do vértice da parábola vale:",
    opts: ["4", "6", "8", "10", "12"],
    ans: 0,
    expl: "yᵥ = (4ac − b²) / 4a = (4·2·6 − 16) / 8 = (48−16)/8 = 32/8 = 4."
  },
  {
    id: "mat-148", disc: "Funções", tema: "Função quadrática",
    text: "A função f(x) = x² − 4 tem zeros em:",
    opts: ["x = ±2", "x = ±1", "x = ±4", "x = 2 apenas", "x = −4 apenas"],
    ans: 0,
    expl: "x² − 4 = 0 → x² = 4 → x = ±2."
  },
  {
    id: "mat-149", disc: "Funções", tema: "Função quadrática",
    text: "Se f(x) = x² − 2x − 3, os zeros de f são:",
    opts: ["x = 1 e x = 3", "x = 1 e x = −3", "x = −1 e x = −3", "x = 2 e x = 3", "x = −1 e x = 3"],
    ans: 4,
    expl: "x² − 2x − 3 = 0; Δ = 4+12 = 16; x = (2 ± 4)/2 → x = 3 ou x = −1."
  },
  {
    id: "mat-150", disc: "Funções", tema: "Função quadrática",
    text: "A função g(x) = x² − 6x + 9 tem vértice em x =",
    opts: ["−9", "−6", "−3", "0", "3"],
    ans: 4,
    expl: "xᵥ = −b/2a = 6/2 = 3."
  },
  {
    id: "mat-151", disc: "Funções", tema: "Função quadrática",
    text: "A função f(x) = −x² tem gráfico:",
    opts: [
      "Parábola com concavidade para baixo",
      "Parábola com concavidade para cima",
      "Reta crescente",
      "Reta decrescente",
      "Hipérbole"
    ],
    ans: 0,
    expl: "Como a = −1 < 0, a concavidade é para baixo."
  },
  {
    id: "mat-152", disc: "Funções", tema: "Função quadrática",
    text: "O valor mínimo de f(x) = x² − 4x + 7 é:",
    opts: ["1", "2", "3", "4", "7"],
    ans: 2,
    expl: "yᵥ = (4·1·7 − 16)/4 = (28−16)/4 = 12/4 = 3."
  },
  {
    id: "mat-153", disc: "Funções", tema: "Função quadrática",
    text: "Qual é a imagem da função f(x) = x² para domínio ℝ?",
    opts: [
      "Todos os reais",
      "Reais negativos",
      "Apenas inteiros",
      "Reais não-negativos",
      "Apenas positivos"
    ],
    ans: 3,
    expl: "x² ≥ 0 para todo real x. Imagem = [0, +∞)."
  },
  {
    id: "mat-154", disc: "Funções", tema: "Função quadrática",
    text: "A altura (em metros) de uma bola chutada para cima é dada por h(t) = −5t² + 20t, com t em segundos. A altura máxima atingida pela bola é:",
    opts: ["15 m", "20 m", "25 m", "30 m", "40 m"],
    ans: 1,
    expl: "O máximo ocorre no vértice: tᵥ = −b/(2a) = −20/(−10) = 2 s. h(2) = −5·4 + 20·2 = −20 + 40 = 20 m."
  },
  {
    id: "mat-155", disc: "Funções", tema: "Função quadrática",
    text: "O lucro mensal de uma pequena fábrica, em milhares de reais, é dado por L(x) = −x² + 40x − 300, em que x é a quantidade de peças produzidas, em centenas. O lucro máximo possível é de:",
    opts: ["R$ 100 mil", "R$ 200 mil", "R$ 300 mil", "R$ 400 mil", "R$ 800 mil"],
    ans: 0,
    expl: "O vértice ocorre em x = −40/(2·(−1)) = 20 (centenas de peças). L(20) = −400 + 800 − 300 = 100, ou seja, R$ 100 mil."
  },
  {
    id: "mat-156", disc: "Funções", tema: "Função afim",
    text: "Para f(x) = 3x − 1, o valor de f(4) é:",
    opts: ["8", "9", "10", "11", "12"],
    ans: 3,
    expl: "f(4) = 3·4 − 1 = 12 − 1 = 11."
  },
  {
    id: "mat-157", disc: "Funções", tema: "Função afim",
    text: "Uma função afim f(x) = 2x + 1 é crescente ou decrescente?",
    opts: [
      "Decrescente, pois a = 2 > 0",
      "Constante",
      "Decrescente, pois b = 1 > 0",
      "Não é possível determinar",
      "Crescente, pois a = 2 > 0"
    ],
    ans: 4,
    expl: "Função afim f(x) = ax + b é crescente quando a > 0. Aqui a = 2 > 0, então é crescente."
  },
  {
    id: "mat-158", disc: "Funções", tema: "Função afim",
    text: "O domínio de f(x) = √(x − 4) em ℝ é:",
    opts: ["x > 4", "x < 4", "x ≤ 4", "x ≠ 4", "x ≥ 4"],
    ans: 4,
    expl: "Para raiz real, x − 4 ≥ 0 → x ≥ 4."
  },
  {
    id: "mat-159", disc: "Funções", tema: "Função afim",
    text: "Para f(x) = 5x + 2, a equação f(x) = 17 tem solução:",
    opts: ["x = 3", "x = 4", "x = 5", "x = 6", "x = 7"],
    ans: 0,
    expl: "5x + 2 = 17 → 5x = 15 → x = 3."
  },
  {
    id: "mat-160", disc: "Funções", tema: "Função afim",
    text: "Uma função linear f(x) = kx passa pela origem. Se f(3) = 12, o valor de k é:",
    opts: ["3", "4", "6", "9", "36"],
    ans: 1,
    expl: "k = f(3)/3 = 12/3 = 4."
  },
  {
    id: "mat-161", disc: "Funções", tema: "Função afim",
    text: "A função f(x) = |x − 2| tem valor mínimo:",
    opts: ["−2", "0", "1", "2", "4"],
    ans: 1,
    expl: "O valor mínimo de |x − 2| é 0, atingido quando x = 2."
  },
  {
    id: "mat-162", disc: "Funções", tema: "Função afim",
    text: "Se f(x) = 2x + 3 e g(x) = x − 1, então f(g(2)) vale:",
    opts: ["5", "7", "9", "11", "13"],
    ans: 0,
    expl: "g(2) = 2 − 1 = 1. Então f(g(2)) = f(1) = 2·1 + 3 = 5."
  },
  {
    id: "mat-163", disc: "Funções", tema: "Função afim",
    text: "Se f(x) = 4x − 3 e f(a) = 9, então a vale:",
    opts: ["1", "2", "3", "4", "6"],
    ans: 2,
    expl: "4a − 3 = 9 → 4a = 12 → a = 3."
  },
  {
    id: "mat-164", disc: "Funções", tema: "Função afim",
    text: "Uma função afim f(x) = ax + b com a = 0 é:",
    opts: ["Constante", "Crescente", "Decrescente", "Quadrática", "Exponencial"],
    ans: 0,
    expl: "Com a = 0, f(x) = b para todo x — a função é constante."
  },
  {
    id: "mat-165", disc: "Funções", tema: "Função afim",
    text: "Em uma cidade, a corrida de táxi custa R$ 5,00 de bandeirada mais R$ 2,50 por quilômetro rodado. Uma corrida de 12 km custa:",
    opts: ["R$ 30,00", "R$ 35,00", "R$ 40,00", "R$ 60,00", "R$ 65,00"],
    ans: 1,
    expl: "O preço é uma função afim: P(x) = 5 + 2,5x. Para x = 12: P = 5 + 30 = R$ 35,00."
  },
  {
    id: "mat-166", disc: "Funções", tema: "Função afim",
    text: "O plano A de celular cobra R$ 50,00 fixos mais R$ 0,50 por minuto de ligação; o plano B cobra R$ 80,00 fixos, com ligações ilimitadas. O plano B passa a ser mais vantajoso para quem fala mais de:",
    opts: ["30 minutos", "50 minutos", "60 minutos", "80 minutos", "160 minutos"],
    ans: 2,
    expl: "O plano A custa 50 + 0,5x. Ele fica mais caro que B quando 50 + 0,5x > 80 → 0,5x > 30 → x > 60 minutos."
  },
  {
    id: "mat-167", disc: "Funções", tema: "Conceitos de função",
    text: "Uma função é par se f(−x) = f(x). Entre as opções, qual é par?",
    opts: ["f(x) = x", "f(x) = x³", "f(x) = 2x + 1", "f(x) = x² + x", "f(x) = x²"],
    ans: 4,
    expl: "f(−x) = (−x)² = x² = f(x). Portanto f(x) = x² é par."
  },
  {
    id: "mat-168", disc: "Funções", tema: "Conceitos de função",
    text: "Se h(x) = x/(x−1), o valor proibido de x é:",
    opts: ["x = 0", "x = −1", "x = 1/2", "Nenhum", "x = 1"],
    ans: 4,
    expl: "Denominador nulo: x − 1 = 0 → x = 1 é excluído do domínio."
  },
  {
    id: "mat-169", disc: "Funções", tema: "Conceitos de função",
    text: "Se f(x) = 1/x, então f(1/2) vale:",
    opts: ["2", "1/2", "1", "4", "1/4"],
    ans: 0,
    expl: "f(1/2) = 1/(1/2) = 2."
  },
  {
    id: "mat-170", disc: "Funções", tema: "Conceitos de função",
    text: "O gráfico de y = |x| tem formato de:",
    opts: ["Letra V", "Reta horizontal", "Parábola", "Letra U", "Hipérbole"],
    ans: 0,
    expl: "y = |x| forma um 'V' com vértice na origem."
  },
  {
    id: "mat-171", disc: "Funções", tema: "Conceitos de função",
    text: "Se f(x) = x³, então f(−2) vale:",
    opts: ["6", "−8", "8", "−6", "4"],
    ans: 1,
    expl: "f(−2) = (−2)³ = −8."
  },
  {
    id: "mat-172", disc: "Funções", tema: "Conceitos de função",
    text: "Uma função é bijetora quando é:",
    opts: [
      "Apenas injetora",
      "Injetora e sobrejetora",
      "Apenas sobrejetora",
      "Nem injetora nem sobrejetora",
      "Constante"
    ],
    ans: 1,
    expl: "Bijetora = ao mesmo tempo injetora (um a um) e sobrejetora (todo contradomínio é atingido)."
  },
  {
    id: "mat-173", disc: "Funções", tema: "Conceitos de função",
    text: "O conjunto imagem de f(x) = −|x| é:",
    opts: ["ℝ", "Reais positivos", "Reais não-negativos", "Apenas {0}", "Reais não-positivos"],
    ans: 4,
    expl: "|x| ≥ 0, logo −|x| ≤ 0. Imagem = (−∞, 0]."
  },
  {
    id: "mat-174", disc: "Funções", tema: "Conceitos de função",
    text: "Uma função f é crescente se, para x₁ < x₂:",
    opts: ["f(x₁) > f(x₂)", "f(x₁) = f(x₂)", "f(x₁) ≥ f(x₂)", "f(x₁) ≤ f(x₂)", "f(x₁) < f(x₂)"],
    ans: 4,
    expl: "Crescente: se x₁ < x₂, então f(x₁) < f(x₂)."
  },
  {
    id: "mat-175", disc: "Funções", tema: "Conceitos de função",
    text: "Qual é o valor mínimo de f(x) = (x−3)² + 1?",
    opts: ["0", "1", "3", "4", "9"],
    ans: 1,
    expl: "(x−3)² ≥ 0. Mínimo em x = 3: f(3) = 0 + 1 = 1."
  },
  {
    id: "mat-176", disc: "Funções", tema: "Função exponencial",
    text: "Se f(x) = 2^x, então f(3) − f(2) vale:",
    opts: ["2", "4", "6", "8", "12"],
    ans: 1,
    expl: "f(3) = 8, f(2) = 4. 8 − 4 = 4."
  },
  {
    id: "mat-177", disc: "Funções", tema: "Função exponencial",
    text: "A função f(x) = a·bˣ é exponencial. Se a = 1 e b = 3, f(4) vale:",
    opts: ["12", "27", "64", "81", "243"],
    ans: 3,
    expl: "f(4) = 1 · 3⁴ = 81."
  },
  {
    id: "mat-178", disc: "Funções", tema: "Função exponencial",
    text: "Uma cultura de bactérias começa com 500 indivíduos e dobra de tamanho a cada hora. Após 5 horas, a população será de:",
    opts: ["2.500", "5.000", "8.000", "16.000", "32.000"],
    ans: 3,
    expl: "P(t) = 500 × 2ᵗ. Para t = 5: 500 × 32 = 16.000. O crescimento exponencial é muito mais rápido que o linear (que daria 2.500)."
  },
  {
    id: "mat-179", disc: "Funções", tema: "Função exponencial",
    text: "Na escala Richter, cada aumento de 1 ponto corresponde a uma amplitude de onda sísmica 10 vezes maior. Um terremoto de magnitude 7, comparado a um de magnitude 5, tem amplitude:",
    opts: [
      "2 vezes maior",
      "20 vezes maior",
      "100 vezes maior",
      "200 vezes maior",
      "1.000 vezes maior"
    ],
    ans: 2,
    expl: "A escala é logarítmica: 2 pontos de diferença correspondem a 10 × 10 = 10² = 100 vezes mais amplitude."
  },

  // ══════════ SEQUÊNCIAS ══════════
  {
    id: "mat-180", disc: "Sequências", tema: "Progressão aritmética",
    text: "Em uma progressão aritmética, o primeiro termo é 3 e a razão é 4. Qual é o décimo termo?",
    opts: ["39", "41", "43", "45", "47"],
    ans: 0,
    expl: "Na PA, aₙ = a₁ + (n−1)·r. Logo a₁₀ = 3 + 9×4 = 3 + 36 = 39."
  },
  {
    id: "mat-181", disc: "Sequências", tema: "Progressão aritmética",
    text: "Em uma PA com primeiro termo 5 e razão 3, o 8° termo vale:",
    opts: ["22", "24", "26", "28", "30"],
    ans: 2,
    expl: "a₈ = 5 + (8−1)·3 = 5 + 21 = 26."
  },
  {
    id: "mat-182", disc: "Sequências", tema: "Progressão aritmética",
    text: "Qual é a soma da PA finita: 2 + 4 + 6 + 8 + ... + 20?",
    opts: ["100", "110", "120", "130", "140"],
    ans: 1,
    expl: "São 10 termos. Sₙ = n·(a₁+aₙ)/2 = 10·(2+20)/2 = 10·11 = 110."
  },
  {
    id: "mat-183", disc: "Sequências", tema: "Progressão aritmética",
    text: "Na PA (2, 5, 8, 11, ...), o 8º termo é:",
    opts: ["23", "24", "25", "26", "27"],
    ans: 0,
    expl: "a₈ = 2 + 7·3 = 2 + 21 = 23."
  },
  {
    id: "mat-184", disc: "Sequências", tema: "Progressão aritmética",
    text: "A soma dos 10 primeiros termos da PA (1, 3, 5, ...) é:",
    opts: ["50", "75", "100", "110", "125"],
    ans: 2,
    expl: "S₁₀ = 10·(1+19)/2 = 10·10 = 100."
  },
  {
    id: "mat-185", disc: "Sequências", tema: "Progressão aritmética",
    text: "Numa PA, o 1º termo é 10 e a razão é −2. O 6º termo é:",
    opts: ["2", "−2", "−10", "20", "0"],
    ans: 4,
    expl: "a₆ = 10 + 5·(−2) = 10 − 10 = 0."
  },
  {
    id: "mat-186", disc: "Sequências", tema: "Progressão aritmética",
    text: "A soma de todos os inteiros de 1 a 100 é:",
    opts: ["4500", "5000", "5050", "5100", "10100"],
    ans: 2,
    expl: "S = n·(a₁+aₙ)/2 = 100·(1+100)/2 = 5050."
  },
  {
    id: "mat-187", disc: "Sequências", tema: "Progressão aritmética",
    text: "Numa PA com 5 termos, o primeiro é 3 e o último é 11. A razão é:",
    opts: ["1", "2", "3", "4", "8"],
    ans: 1,
    expl: "r = (aₙ − a₁)/(n−1) = (11−3)/4 = 8/4 = 2."
  },
  {
    id: "mat-188", disc: "Sequências", tema: "Progressão aritmética",
    text: "A PA tem termos 3, x, 15. O valor de x é:",
    opts: ["8", "9", "10", "11", "12"],
    ans: 1,
    expl: "Em PA, x = (3+15)/2 = 9."
  },
  {
    id: "mat-189", disc: "Sequências", tema: "Progressão aritmética",
    text: "Numa PA de 7 termos, o termo central é 10. A soma da PA é:",
    opts: ["50", "60", "70", "80", "100"],
    ans: 2,
    expl: "Em PA com n ímpar, soma = n × termo central = 7 × 10 = 70."
  },
  {
    id: "mat-190", disc: "Sequências", tema: "Progressão aritmética",
    text: "A sequência 1, 1, 2, 3, 5, 8, 13... é conhecida como:",
    opts: ["PA", "PG", "Harmônica", "Geométrica alternada", "Fibonacci"],
    ans: 4,
    expl: "Cada termo é a soma dos dois anteriores — é a sequência de Fibonacci."
  },
  {
    id: "mat-191", disc: "Sequências", tema: "Progressão aritmética",
    text: "Quantos termos tem a PA (2, 5, 8, ..., 29)?",
    opts: ["6", "7", "8", "9", "10"],
    ans: 4,
    expl: "aₙ = 2 + (n−1)·3 = 29 → (n−1)·3 = 27 → n−1 = 9 → n = 10."
  },
  {
    id: "mat-192", disc: "Sequências", tema: "Progressão aritmética",
    text: "Uma pessoa começou a caminhar 10 minutos no primeiro dia e decidiu aumentar 5 minutos a cada dia. No 10º dia, ela caminhará:",
    opts: ["50 minutos", "55 minutos", "60 minutos", "65 minutos", "100 minutos"],
    ans: 1,
    expl: "Os tempos formam uma PA com a₁ = 10 e r = 5. a₁₀ = 10 + 9 × 5 = 55 minutos."
  },
  {
    id: "mat-193", disc: "Sequências", tema: "Progressão geométrica",
    text: "Em uma PG com primeiro termo 2 e razão 3, qual é o 4° termo?",
    opts: ["18", "24", "54", "162", "486"],
    ans: 2,
    expl: "a₄ = a₁·q^(n−1) = 2·3³ = 2·27 = 54."
  },
  {
    id: "mat-194", disc: "Sequências", tema: "Progressão geométrica",
    text: "Na PG (2, 6, 18, 54, ...), a razão é:",
    opts: ["2", "3", "4", "6", "9"],
    ans: 1,
    expl: "q = 6/2 = 3."
  },
  {
    id: "mat-195", disc: "Sequências", tema: "Progressão geométrica",
    text: "O 5º termo da PG (1, 2, 4, 8, ...) é:",
    opts: ["14", "16", "18", "20", "22"],
    ans: 1,
    expl: "a₅ = 1 · 2⁴ = 16."
  },
  {
    id: "mat-196", disc: "Sequências", tema: "Progressão geométrica",
    text: "Em uma PG, o primeiro termo é 3 e a razão é 2. O 4º termo é:",
    opts: ["24", "12", "18", "48", "6"],
    ans: 0,
    expl: "a₄ = 3 · 2³ = 3 · 8 = 24."
  },
  {
    id: "mat-197", disc: "Sequências", tema: "Progressão geométrica",
    text: "Numa PG de razão 3, a soma dos dois primeiros termos é 8. O 3º termo é:",
    opts: ["9", "12", "18", "27", "36"],
    ans: 2,
    expl: "a₁ + a₁·3 = 8 → 4a₁ = 8 → a₁ = 2. Então a₃ = a₁·q² = 2·9 = 18."
  },
  {
    id: "mat-198", disc: "Sequências", tema: "Progressão geométrica",
    text: "A progressão 3, 6, 12, 24 é:",
    opts: [
      "PA com razão 3",
      "PA com razão 6",
      "PG com razão 2",
      "PG com razão 3",
      "Nenhuma das anteriores"
    ],
    ans: 2,
    expl: "Cada termo é o dobro do anterior: razão q = 2. É uma PG."
  },
  {
    id: "mat-199", disc: "Sequências", tema: "Progressão geométrica",
    text: "Qual é a razão de uma PG cujos três primeiros termos são 5, 10 e 20?",
    opts: ["2", "4", "5", "10", "15"],
    ans: 0,
    expl: "q = 10/5 = 2."
  },
  {
    id: "mat-200", disc: "Sequências", tema: "Progressão geométrica",
    text: "Uma mensagem foi enviada a 3 pessoas. Cada pessoa que recebe repassa para outras 3 no dia seguinte. No 5º dia, contando a partir do primeiro envio, o número de pessoas que recebem a mensagem naquele dia é:",
    opts: ["15", "45", "81", "243", "729"],
    ans: 3,
    expl: "Os números formam uma PG de razão 3: 3, 9, 27, 81, 243. No 5º dia, 3⁵ = 243 pessoas recebem a mensagem."
  },
  {
    id: "mat-201", disc: "Sequências", tema: "Sequências",
    text: "Na expressão an = 2n + 1, o 10º termo da sequência é:",
    opts: ["17", "18", "19", "20", "21"],
    ans: 4,
    expl: "a₁₀ = 2·10 + 1 = 21."
  },

  // ══════════ GEOMETRIA PLANA ══════════
  {
    id: "mat-202", disc: "Geometria plana", tema: "Triângulos",
    text: "Em um triângulo retângulo, os catetos medem 3 cm e 4 cm. A hipotenusa mede:",
    opts: ["2 cm", "3 cm", "4 cm", "5 cm", "6 cm"],
    ans: 3,
    expl: "Pelo teorema de Pitágoras: h² = 9 + 16 = 25 → h = 5 cm."
  },
  {
    id: "mat-203", disc: "Geometria plana", tema: "Triângulos",
    text: "Uma escada de 5 m está apoiada em uma parede, com a base a 3 m dela. A que altura a escada toca a parede?",
    opts: ["4 m", "2 m", "3 m", "√34 m", "√28 m"],
    ans: 0,
    expl: "h² = 5² − 3² = 25 − 9 = 16 → h = 4 m."
  },
  {
    id: "mat-204", disc: "Geometria plana", tema: "Triângulos",
    text: "A área de um triângulo de base 10 cm e altura 6 cm é:",
    opts: ["30 cm²", "40 cm²", "60 cm²", "80 cm²", "120 cm²"],
    ans: 0,
    expl: "A = (b·h)/2 = (10·6)/2 = 60/2 = 30 cm²."
  },
  {
    id: "mat-205", disc: "Geometria plana", tema: "Triângulos",
    text: "Um triângulo tem ângulos de 60° e 80°. O terceiro ângulo mede:",
    opts: ["40°", "50°", "60°", "70°", "80°"],
    ans: 0,
    expl: "Soma dos ângulos internos = 180°. Terceiro ângulo = 180 − 60 − 80 = 40°."
  },
  {
    id: "mat-206", disc: "Geometria plana", tema: "Triângulos",
    text: "A diagonal de um quadrado com lado 1 mede:",
    opts: ["1", "√2", "2", "√3", "2√2"],
    ans: 1,
    expl: "d = lado·√2 = 1·√2 = √2."
  },
  {
    id: "mat-207", disc: "Geometria plana", tema: "Triângulos",
    text: "Dois triângulos são semelhantes com razão de semelhança 1:3. Se o menor tem área 4 cm², o maior tem área:",
    opts: ["12 cm²", "16 cm²", "24 cm²", "36 cm²", "48 cm²"],
    ans: 3,
    expl: "Áreas em triângulos semelhantes crescem com o quadrado da razão: 4 · 3² = 36 cm²."
  },
  {
    id: "mat-208", disc: "Geometria plana", tema: "Triângulos",
    text: "Em um triângulo retângulo com hipotenusa 10 e cateto 6, o outro cateto mede:",
    opts: ["4", "6", "7", "8", "9"],
    ans: 3,
    expl: "c² = 10² − 6² = 100 − 36 = 64 → c = 8."
  },
  {
    id: "mat-209", disc: "Geometria plana", tema: "Triângulos",
    text: "Num triângulo retângulo, se os ângulos agudos são α e β, então α + β =",
    opts: ["45°", "60°", "90°", "120°", "180°"],
    ans: 2,
    expl: "Soma dos ângulos internos = 180°. Um ângulo é 90°, então α + β = 90°."
  },
  {
    id: "mat-210", disc: "Geometria plana", tema: "Triângulos",
    text: "Qual é a soma dos ângulos internos de um triângulo?",
    opts: ["90°", "120°", "180°", "270°", "360°"],
    ans: 2,
    expl: "A soma dos ângulos internos de qualquer triângulo é 180°."
  },
  {
    id: "mat-211", disc: "Geometria plana", tema: "Triângulos",
    text: "O número de triângulos que se pode formar com segmentos de 2, 5 e 4 cm é:",
    opts: [
      "0 — não forma triângulo",
      "2 — formam dois triângulos",
      "Depende do ângulo",
      "Impossível determinar",
      "1 — forma triângulo"
    ],
    ans: 4,
    expl: "Verificando: 2+4=6>5; 2+5=7>4; 4+5=9>2. A condição vale. Forma 1 triângulo."
  },
  {
    id: "mat-212", disc: "Geometria plana", tema: "Triângulos",
    text: "Às 15h, uma pessoa de 1,80 m projeta uma sombra de 1,20 m. No mesmo instante, a sombra de um poste mede 4 m. A altura do poste é:",
    opts: ["2,7 m", "4 m", "5 m", "6 m", "7,2 m"],
    ans: 3,
    expl: "Os raios solares são paralelos, formando triângulos semelhantes: 1,80/1,20 = h/4 → h = 1,5 × 4 = 6 m."
  },
  {
    id: "mat-213", disc: "Geometria plana", tema: "Triângulos",
    text: "Um cabo de aço vai do topo de um poste de 8 m até um ponto do chão a 6 m da base do poste. O comprimento do cabo é:",
    opts: ["10 m", "12 m", "14 m", "48 m", "100 m"],
    ans: 0,
    expl: "Poste, chão e cabo formam um triângulo retângulo. Pelo Teorema de Pitágoras: c² = 8² + 6² = 64 + 36 = 100 → c = 10 m."
  },
  {
    id: "mat-214", disc: "Geometria plana", tema: "Círculo",
    text: "A área de um círculo de raio 7 cm (use π ≈ 22/7) é:",
    opts: ["44 cm²", "88 cm²", "154 cm²", "176 cm²", "220 cm²"],
    ans: 2,
    expl: "A = π·r² = (22/7)·49 = 22·7 = 154 cm²."
  },
  {
    id: "mat-215", disc: "Geometria plana", tema: "Círculo",
    text: "O perímetro de um círculo de raio 5 cm (π ≈ 3,14) é aproximadamente:",
    opts: ["15,7 cm", "25,1 cm", "31,4 cm", "50,2 cm", "78,5 cm"],
    ans: 2,
    expl: "C = 2·π·r = 2·3,14·5 = 31,4 cm."
  },
  {
    id: "mat-216", disc: "Geometria plana", tema: "Círculo",
    text: "A área de um círculo de raio 5 cm é (use π ≈ 3,14):",
    opts: ["15,7 cm²", "31,4 cm²", "78,5 cm²", "157 cm²", "314 cm²"],
    ans: 2,
    expl: "A = π·r² = 3,14 · 25 = 78,5 cm²."
  },
  {
    id: "mat-217", disc: "Geometria plana", tema: "Círculo",
    text: "Uma bicicleta tem roda de diâmetro 70 cm. Quantas voltas ela dá em 1 km? (π ≈ 3,14)",
    opts: ["≈ 350", "≈ 420", "≈ 455", "≈ 500", "≈ 560"],
    ans: 2,
    expl: "Circunferência ≈ 3,14 × 0,70 ≈ 2,198 m. Voltas = 1000/2,198 ≈ 455."
  },
  {
    id: "mat-218", disc: "Geometria plana", tema: "Círculo",
    text: "Se o perímetro de um círculo é 6π cm, seu raio é:",
    opts: ["2 cm", "4 cm", "6 cm", "π cm", "3 cm"],
    ans: 4,
    expl: "P = 2πr = 6π → r = 3 cm."
  },
  {
    id: "mat-219", disc: "Geometria plana", tema: "Círculo",
    text: "O segmento que une dois pontos numa circunferência passando pelo centro é chamado de:",
    opts: ["Diâmetro", "Corda", "Arco", "Raio", "Secante"],
    ans: 0,
    expl: "O segmento que passa pelo centro e tem extremos na circunferência é o diâmetro."
  },
  {
    id: "mat-220", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "A soma dos ângulos internos de um pentágono convexo é:",
    opts: ["270°", "360°", "450°", "540°", "630°"],
    ans: 3,
    expl: "S = (n−2)·180° = (5−2)·180° = 3·180° = 540°."
  },
  {
    id: "mat-221", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Um retângulo tem lados 8 cm e 5 cm. Seu perímetro é:",
    opts: ["13 cm", "26 cm", "40 cm", "45 cm", "52 cm"],
    ans: 1,
    expl: "P = 2·(l+L) = 2·(8+5) = 2·13 = 26 cm."
  },
  {
    id: "mat-222", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "O número de diagonais de um hexágono é:",
    opts: ["6", "8", "9", "12", "15"],
    ans: 2,
    expl: "Diagonais = n(n−3)/2 = 6·(6−3)/2 = 6·3/2 = 9."
  },
  {
    id: "mat-223", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "A área de um retângulo com base 8 cm e altura 5 cm é:",
    opts: ["13 cm²", "20 cm²", "26 cm²", "40 cm²", "64 cm²"],
    ans: 3,
    expl: "A = base × altura = 8 × 5 = 40 cm²."
  },
  {
    id: "mat-224", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Dois ângulos são suplementares. Um mede 70°. O outro mede:",
    opts: ["20°", "70°", "90°", "110°", "160°"],
    ans: 3,
    expl: "Suplementares somam 180°. 180 − 70 = 110°."
  },
  {
    id: "mat-225", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Dois ângulos são complementares. Um mede 35°. O outro mede:",
    opts: ["35°", "45°", "55°", "65°", "145°"],
    ans: 2,
    expl: "Complementares somam 90°. 90 − 35 = 55°."
  },
  {
    id: "mat-226", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Um retângulo tem perímetro 28 cm e um lado de 6 cm. O outro lado mede:",
    opts: ["4 cm", "6 cm", "7 cm", "8 cm", "14 cm"],
    ans: 3,
    expl: "2(6 + x) = 28 → 6 + x = 14 → x = 8 cm."
  },
  {
    id: "mat-227", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Num polígono regular, a soma dos ângulos internos de um hexágono é:",
    opts: ["360°", "540°", "600°", "720°", "900°"],
    ans: 3,
    expl: "Soma = (n−2)·180° = (6−2)·180° = 720°."
  },
  {
    id: "mat-228", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Quantos lados tem um polígono cuja soma dos ângulos internos é 1080°?",
    opts: ["4", "5", "6", "7", "8"],
    ans: 4,
    expl: "(n−2)·180 = 1080 → n−2 = 6 → n = 8."
  },
  {
    id: "mat-229", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Um segmento de reta tem 12 cm. Seu ponto médio divide-o em segmentos de:",
    opts: ["6 cm cada", "4 cm cada", "5 cm cada", "8 cm cada", "3 cm cada"],
    ans: 0,
    expl: "12 / 2 = 6 cm cada parte."
  },
  {
    id: "mat-230", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Qual é a área de um losango com diagonais de 10 cm e 6 cm?",
    opts: ["16 cm²", "30 cm²", "60 cm²", "80 cm²", "100 cm²"],
    ans: 1,
    expl: "A = (d₁ · d₂)/2 = (10 · 6)/2 = 30 cm²."
  },
  {
    id: "mat-231", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "O ângulo central de um círculo que corresponde a 1/4 da circunferência mede:",
    opts: ["45°", "60°", "90°", "120°", "180°"],
    ans: 2,
    expl: "1/4 de 360° = 90°."
  },
  {
    id: "mat-232", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Um relógio marca 3h. O ângulo entre os ponteiros é:",
    opts: ["90°", "120°", "150°", "180°", "210°"],
    ans: 0,
    expl: "Cada hora = 30°. As 3h → 3 × 30° = 90°."
  },
  {
    id: "mat-233", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Um segmento de reta divide um ângulo reto ao meio. Cada parte mede:",
    opts: ["30°", "40°", "45°", "50°", "60°"],
    ans: 2,
    expl: "90° / 2 = 45°."
  },
  {
    id: "mat-234", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "A soma dos ângulos externos de qualquer polígono convexo é:",
    opts: ["180°", "270°", "360°", "540°", "720°"],
    ans: 2,
    expl: "A soma dos ângulos externos de qualquer polígono convexo é sempre 360°."
  },
  {
    id: "mat-235", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "A diagonal de um retângulo 3 × 4 mede:",
    opts: ["6", "5", "7", "3√2", "4√2"],
    ans: 1,
    expl: "d = √(3² + 4²) = √25 = 5."
  },
  {
    id: "mat-236", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Um polígono regular de 5 lados tem cada ângulo interno medindo:",
    opts: ["90°", "100°", "108°", "120°", "135°"],
    ans: 2,
    expl: "Ângulo interno = (n−2)·180°/n = 3·180°/5 = 540°/5 = 108°."
  },
  {
    id: "mat-237", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Quantas diagonais tem um pentágono (5 lados)?",
    opts: ["3", "4", "5", "6", "10"],
    ans: 2,
    expl: "Diagonais = n(n−3)/2 = 5·2/2 = 5."
  },
  {
    id: "mat-238", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Qual é a área do setor circular com raio 6 cm e ângulo central 90°? (π ≈ 3)",
    opts: ["9 cm²", "18 cm²", "27 cm²", "36 cm²", "54 cm²"],
    ans: 2,
    expl: "A = (θ/360°)·π·r² = (1/4)·3·36 = 27 cm²."
  },
  {
    id: "mat-239", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Dois ângulos opostos pelo vértice são sempre:",
    opts: ["Suplementares", "Complementares", "Retos", "Obtuso e agudo", "Congruentes"],
    ans: 4,
    expl: "Ângulos opostos pelo vértice são iguais (congruentes)."
  },
  {
    id: "mat-240", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "A área de um hexágono regular com lado 2 cm é (√3 ≈ 1,73):",
    opts: ["6 cm²", "10,38 cm²", "12 cm²", "20,76 cm²", "24 cm²"],
    ans: 1,
    expl: "A = (3√3/2)·l² = (3·1,73/2)·4 ≈ 2,595·4 ≈ 10,38 cm²."
  },
  {
    id: "mat-241", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "Cada ângulo interno de um polígono regular de 12 lados (dodecágono) mede:",
    opts: ["120°", "135°", "144°", "150°", "160°"],
    ans: 3,
    expl: "Ângulo = (12−2)·180/12 = 1800/12 = 150°."
  },
  {
    id: "mat-242", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "O complementar de um ângulo de 30° tem medida:",
    opts: ["60°", "90°", "120°", "150°", "180°"],
    ans: 0,
    expl: "Complementares somam 90°. 90 − 30 = 60°."
  },
  {
    id: "mat-243", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "O número de diagonais de um quadrilátero é:",
    opts: ["2", "3", "4", "5", "6"],
    ans: 0,
    expl: "Diagonais = n(n−3)/2 = 4·1/2 = 2."
  },
  {
    id: "mat-244", disc: "Geometria plana", tema: "Ângulos e polígonos",
    text: "A soma de dois ângulos suplementares é:",
    opts: ["90°", "270°", "360°", "180°", "Variável"],
    ans: 3,
    expl: "Por definição, dois ângulos suplementares somam 180°."
  },
  {
    id: "mat-245", disc: "Geometria plana", tema: "Áreas e perímetros",
    text: "O perímetro de um quadrado com lado 7 cm é:",
    opts: ["14 cm", "21 cm", "28 cm", "49 cm", "56 cm"],
    ans: 2,
    expl: "P = 4 × 7 = 28 cm."
  },
  {
    id: "mat-246", disc: "Geometria plana", tema: "Áreas e perímetros",
    text: "Um trapézio tem bases 4 cm e 8 cm e altura 5 cm. Sua área é:",
    opts: ["20 cm²", "25 cm²", "30 cm²", "40 cm²", "60 cm²"],
    ans: 2,
    expl: "A = (B + b) · h / 2 = (8 + 4) · 5 / 2 = 60/2 = 30 cm²."
  },
  {
    id: "mat-247", disc: "Geometria plana", tema: "Áreas e perímetros",
    text: "Um terreno retangular tem 30 m de frente e 20 m de fundo. Sua área em hectares (1 ha = 10.000 m²) é:",
    opts: ["0,006 ha", "0,06 ha", "0,6 ha", "6 ha", "60 ha"],
    ans: 1,
    expl: "A = 30 × 20 = 600 m². 600/10.000 = 0,06 ha."
  },
  {
    id: "mat-248", disc: "Geometria plana", tema: "Áreas e perímetros",
    text: "Uma sala retangular de 4 m por 5 m será coberta com lajotas quadradas de 50 cm de lado. Desconsiderando perdas, serão necessárias:",
    opts: ["40 lajotas", "80 lajotas", "100 lajotas", "200 lajotas", "400 lajotas"],
    ans: 1,
    expl: "Área da sala: 4 × 5 = 20 m². Área de cada lajota: 0,5 × 0,5 = 0,25 m². Número de lajotas: 20 ÷ 0,25 = 80."
  },
  {
    id: "mat-249", disc: "Geometria plana", tema: "Áreas e perímetros",
    text: "Uma parede de 3 m de altura por 8 m de comprimento tem uma porta de 2 m². Cada lata de tinta cobre 10 m². O número mínimo de latas para pintar a parede (sem a porta) é:",
    opts: ["2", "3", "4", "5", "6"],
    ans: 1,
    expl: "Área a pintar: 3 × 8 − 2 = 22 m². 22 ÷ 10 = 2,2 latas. Como não se compram frações de lata, são necessárias 3."
  },

  // ══════════ GEOMETRIA ESPACIAL ══════════
  {
    id: "mat-250", disc: "Geometria espacial", tema: "Sólidos",
    text: "O volume de um cubo de aresta 3 cm é:",
    opts: ["9 cm³", "18 cm³", "27 cm³", "36 cm³", "54 cm³"],
    ans: 2,
    expl: "V = a³ = 3³ = 27 cm³."
  },
  {
    id: "mat-251", disc: "Geometria espacial", tema: "Sólidos",
    text: "Se um cubo tem volume 125 cm³, sua aresta mede:",
    opts: ["4 cm", "5 cm", "6 cm", "10 cm", "25 cm"],
    ans: 1,
    expl: "V = a³ → 125 = a³ → a = ∛125 = 5 cm."
  },
  {
    id: "mat-252", disc: "Geometria espacial", tema: "Sólidos",
    text: "Qual é o volume de um paralelepípedo com 4 cm × 3 cm × 2 cm?",
    opts: ["9 cm³", "12 cm³", "18 cm³", "24 cm³", "36 cm³"],
    ans: 3,
    expl: "V = 4 × 3 × 2 = 24 cm³."
  },
  {
    id: "mat-253", disc: "Geometria espacial", tema: "Sólidos",
    text: "O volume de um cone com raio 3 cm e altura 4 cm (π ≈ 3) é aproximadamente:",
    opts: ["12 cm³", "108 cm³", "144 cm³", "36 cm³", "48 cm³"],
    ans: 3,
    expl: "V = πr²h/3 ≈ 3·9·4/3 = 36 cm³."
  },
  {
    id: "mat-254", disc: "Geometria espacial", tema: "Sólidos",
    text: "Qual é a área lateral de um cilindro com raio 2 cm e altura 5 cm? (π ≈ 3)",
    opts: ["60 cm²", "20 cm²", "30 cm²", "120 cm²", "90 cm²"],
    ans: 0,
    expl: "A_lat = 2πrh ≈ 2·3·2·5 = 60 cm²."
  },
  {
    id: "mat-255", disc: "Geometria espacial", tema: "Sólidos",
    text: "Qual é a superfície total de um cubo com aresta 3 cm?",
    opts: ["18 cm²", "27 cm²", "36 cm²", "54 cm²", "108 cm²"],
    ans: 3,
    expl: "6 faces × 3² = 6 × 9 = 54 cm²."
  },
  {
    id: "mat-256", disc: "Geometria espacial", tema: "Sólidos",
    text: "O volume de uma esfera de raio 3 cm (π ≈ 3) é aproximadamente:",
    opts: ["36 cm³", "72 cm³", "108 cm³", "113 cm³", "339 cm³"],
    ans: 2,
    expl: "V = (4/3)·π·r³ ≈ (4/3)·3·27 = 4·27 = 108 cm³."
  },
  {
    id: "mat-257", disc: "Geometria espacial", tema: "Sólidos",
    text: "Uma caixa d'água cúbica tem lado 2 m. Sua capacidade em litros (1 m³ = 1.000 L) é:",
    opts: ["2.000 L", "4.000 L", "6.000 L", "8.000 L", "16.000 L"],
    ans: 3,
    expl: "V = 2³ = 8 m³. 8 × 1.000 = 8.000 L."
  },
  {
    id: "mat-258", disc: "Geometria espacial", tema: "Sólidos",
    text: "O número de faces de um tetraedro é:",
    opts: ["3", "4", "5", "6", "8"],
    ans: 1,
    expl: "Um tetraedro (pirâmide triangular) tem 4 faces triangulares."
  },
  {
    id: "mat-259", disc: "Geometria espacial", tema: "Sólidos",
    text: "Uma caixa-d'água tem forma de paralelepípedo com dimensões internas de 1 m × 1 m × 1,5 m. Uma família consome 300 litros por dia. Com a caixa cheia e sem reabastecimento, a água dura:",
    opts: ["1,5 dia", "3 dias", "4 dias", "5 dias", "6 dias"],
    ans: 3,
    expl: "Volume: 1 × 1 × 1,5 = 1,5 m³ = 1.500 L (1 m³ = 1.000 L). Duração: 1.500 ÷ 300 = 5 dias."
  },
  {
    id: "mat-260", disc: "Geometria espacial", tema: "Sólidos",
    text: "Uma lata cilíndrica tem raio da base de 5 cm e altura de 12 cm. Usando π ≈ 3, sua capacidade é de:",
    opts: ["300 mL", "450 mL", "600 mL", "900 mL", "1.800 mL"],
    ans: 3,
    expl: "V = π·r²·h ≈ 3 × 25 × 12 = 900 cm³. Como 1 cm³ = 1 mL, a capacidade é de 900 mL."
  },

  // ══════════ GEOMETRIA ANALÍTICA ══════════
  {
    id: "mat-261", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "Qual é a inclinação (coeficiente angular) da reta y = 3x − 2?",
    opts: ["−3", "−2", "2", "3", "6"],
    ans: 3,
    expl: "Na forma y = mx + b, m = 3 é o coeficiente angular."
  },
  {
    id: "mat-262", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A distância entre os pontos A(1, 2) e B(4, 6) no plano cartesiano é:",
    opts: ["1", "2", "3", "4", "5"],
    ans: 4,
    expl: "d = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5."
  },
  {
    id: "mat-263", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "O ponto médio do segmento de A(0, 0) a B(6, 4) é:",
    opts: ["(3, 2)", "(2, 1)", "(4, 2)", "(6, 4)", "(1, 2)"],
    ans: 0,
    expl: "M = ((0+6)/2, (0+4)/2) = (3, 2)."
  },
  {
    id: "mat-264", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A equação da reta que passa por (0, 3) com coeficiente angular 2 é:",
    opts: ["y = x + 3", "y = 2x", "y = 3x + 2", "y = 2x + 3", "y = 2x − 3"],
    ans: 3,
    expl: "y = mx + b = 2x + 3."
  },
  {
    id: "mat-265", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "Duas retas paralelas têm coeficientes angulares m₁ e m₂. Então:",
    opts: ["m₁ = m₂", "m₁ + m₂ = 0", "m₁ · m₂ = −1", "m₁ · m₂ = 1", "m₁ ≠ m₂"],
    ans: 0,
    expl: "Retas paralelas têm o mesmo coeficiente angular: m₁ = m₂."
  },
  {
    id: "mat-266", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A distância de um ponto P(3, 4) à origem é:",
    opts: ["3", "4", "5", "7", "12"],
    ans: 2,
    expl: "d = √(3² + 4²) = √25 = 5."
  },
  {
    id: "mat-267", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "Duas retas são perpendiculares. Se m₁ = 2, então m₂ vale:",
    opts: ["2", "−2", "1/2", "−1/2", "−1"],
    ans: 3,
    expl: "Para perpendiculares: m₁ · m₂ = −1 → m₂ = −1/2."
  },
  {
    id: "mat-268", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A circunferência de centro (0, 0) e raio 4 tem equação:",
    opts: ["x + y = 4", "x² + y² = 16", "x² + y² = 4", "x² − y² = 16", "(x+y)² = 16"],
    ans: 1,
    expl: "x² + y² = r² = 16."
  },
  {
    id: "mat-269", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "O ponto (2, 3) pertence à reta y = x + 1?",
    opts: [
      "Sim, pois 3 = 2+1",
      "Não, pois 3 ≠ 2−1",
      "Não, pois 3 ≠ 2+1",
      "Sim, pois 2 = 3−1",
      "Não é possível determinar"
    ],
    ans: 0,
    expl: "y = 2 + 1 = 3. Sim, o ponto pertence à reta."
  },
  {
    id: "mat-270", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "Num plano cartesiano, o ponto (−3, 2) está no quadrante:",
    opts: ["I", "II", "III", "IV", "Eixo y"],
    ans: 1,
    expl: "x < 0 e y > 0 → Quadrante II."
  },
  {
    id: "mat-271", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A fórmula da distância entre dois pontos P(x₁,y₁) e Q(x₂,y₂) é:",
    opts: [
      "√((x₂−x₁)²+(y₂−y₁)²)",
      "(x₂−x₁)+(y₂−y₁)",
      "√((x₂+x₁)²+(y₂+y₁)²)",
      "(x₂−x₁)²+(y₂−y₁)²",
      "(x₂·x₁)+(y₂·y₁)"
    ],
    ans: 0,
    expl: "d(P,Q) = √((x₂−x₁)² + (y₂−y₁)²)."
  },
  {
    id: "mat-272", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "O coeficiente angular da reta que passa por (1, 2) e (3, 8) é:",
    opts: ["3", "4", "5", "6", "7"],
    ans: 0,
    expl: "m = (8−2)/(3−1) = 6/2 = 3."
  },
  {
    id: "mat-273", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A distância de A(1, 1) a B(4, 5) é:",
    opts: ["1", "2", "3", "4", "5"],
    ans: 4,
    expl: "d = √((4−1)² + (5−1)²) = √(9+16) = √25 = 5."
  },
  {
    id: "mat-274", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "O declive de uma rampa que sobe 3 m a cada 15 m de comprimento é:",
    opts: ["1/5", "1/3", "1/4", "1/6", "1/15"],
    ans: 0,
    expl: "Declive = 3/15 = 1/5."
  },
  {
    id: "mat-275", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A reta y = −3x + 6 corta o eixo x em:",
    opts: ["x = 2", "x = 3", "x = 6", "x = −2", "x = −3"],
    ans: 0,
    expl: "Fazendo y = 0: 3x = 6 → x = 2."
  },
  {
    id: "mat-276", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "Qual é o coeficiente angular de uma reta horizontal?",
    opts: ["0", "1", "−1", "Indefinido", "∞"],
    ans: 0,
    expl: "Reta horizontal não possui inclinação: m = 0."
  },
  {
    id: "mat-277", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "A equação da reta vertical que passa por x = 3 é:",
    opts: ["y = 3", "y = 3x", "x + y = 3", "y = x − 3", "x = 3"],
    ans: 4,
    expl: "Reta vertical: todos os pontos têm x = 3."
  },
  {
    id: "mat-278", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "O ponto (0, 0) pertence à reta y = 2x − 1?",
    opts: [
      "Sim, pois 0 = 2·0 − 1",
      "Depende do valor de x",
      "Sim, pois passa pela origem",
      "Não é possível determinar",
      "Não, pois 0 ≠ 2·0 − 1"
    ],
    ans: 4,
    expl: "y = 2·0 − 1 = −1 ≠ 0. O ponto (0,0) não pertence à reta."
  },
  {
    id: "mat-279", disc: "Geometria analítica", tema: "Geometria analítica",
    text: "Se uma reta tem coeficiente angular negativo, ela é:",
    opts: ["Decrescente", "Horizontal", "Vertical", "Crescente", "Constante"],
    ans: 0,
    expl: "Coeficiente angular negativo → função afim decrescente."
  },

  // ══════════ TRIGONOMETRIA ══════════
  {
    id: "mat-280", disc: "Trigonometria", tema: "Trigonometria",
    text: "O valor de sen(30°) é:",
    opts: ["√3/2", "√2/2", "1", "0", "1/2"],
    ans: 4,
    expl: "No triângulo 30-60-90°, o cateto oposto ao ângulo de 30° mede metade da hipotenusa: sen 30° = 1/2."
  },
  {
    id: "mat-281", disc: "Trigonometria", tema: "Trigonometria",
    text: "O valor de cos(60°) é:",
    opts: ["0", "√2/2", "√3/2", "1/2", "1"],
    ans: 3,
    expl: "No triângulo 30-60-90°, cos 60° = cateto adjacente / hipotenusa = 1/2."
  },
  {
    id: "mat-282", disc: "Trigonometria", tema: "Trigonometria",
    text: "Qual é o valor de tg(45°)?",
    opts: ["1", "0", "1/2", "√3/2", "√3"],
    ans: 0,
    expl: "tg 45° = sen 45° / cos 45° = (√2/2)/(√2/2) = 1."
  },
  {
    id: "mat-283", disc: "Trigonometria", tema: "Trigonometria",
    text: "O seno de 90° vale:",
    opts: ["1", "0", "1/2", "√2/2", "√3/2"],
    ans: 0,
    expl: "sen 90° = 1."
  },
  {
    id: "mat-284", disc: "Trigonometria", tema: "Trigonometria",
    text: "O cosseno de 0° vale:",
    opts: ["0", "1/2", "1", "√2/2", "√3/2"],
    ans: 2,
    expl: "cos 0° = 1."
  },
  {
    id: "mat-285", disc: "Trigonometria", tema: "Trigonometria",
    text: "Num triângulo retângulo com cateto oposto 3 e hipotenusa 5, sen θ vale:",
    opts: ["3/5", "4/5", "5/3", "5/4", "3/4"],
    ans: 0,
    expl: "sen θ = cateto oposto / hipotenusa = 3/5."
  },
  {
    id: "mat-286", disc: "Trigonometria", tema: "Trigonometria",
    text: "O valor de sen²(30°) + cos²(30°) é:",
    opts: ["1/2", "√3/2", "2", "√3", "1"],
    ans: 4,
    expl: "Identidade fundamental: sen²θ + cos²θ = 1 para qualquer θ."
  },
  {
    id: "mat-287", disc: "Trigonometria", tema: "Trigonometria",
    text: "Em graus, π/4 radianos equivalem a:",
    opts: ["30°", "45°", "60°", "90°", "180°"],
    ans: 1,
    expl: "π rad = 180°. Então π/4 rad = 180°/4 = 45°."
  },
  {
    id: "mat-288", disc: "Trigonometria", tema: "Trigonometria",
    text: "O valor de tg(0°) é:",
    opts: ["−1", "1/2", "1", "indefinido", "0"],
    ans: 4,
    expl: "tg 0° = sen 0° / cos 0° = 0 / 1 = 0."
  },
  {
    id: "mat-289", disc: "Trigonometria", tema: "Trigonometria",
    text: "Qual é o período da função f(x) = sen(x)?",
    opts: ["2π", "π", "π/2", "4π", "1"],
    ans: 0,
    expl: "A função seno tem período 2π (360°)."
  },
  {
    id: "mat-290", disc: "Trigonometria", tema: "Trigonometria",
    text: "A amplitude da função f(x) = 3·sen(x) é:",
    opts: ["3", "1", "2", "6", "π"],
    ans: 0,
    expl: "A amplitude é o coeficiente multiplicador = 3."
  },
  {
    id: "mat-291", disc: "Trigonometria", tema: "Trigonometria",
    text: "Se senθ = 0,6 e cosθ > 0, então cosθ vale:",
    opts: ["0,4", "0,6", "0,64", "1,0", "0,8"],
    ans: 4,
    expl: "sen²θ + cos²θ = 1 → cos²θ = 1 − 0,36 = 0,64 → cosθ = 0,8."
  },
  {
    id: "mat-292", disc: "Trigonometria", tema: "Trigonometria",
    text: "A tangente do ângulo de 60° vale:",
    opts: ["√3", "1/2", "√2/2", "1", "2"],
    ans: 0,
    expl: "tg 60° = sen 60° / cos 60° = (√3/2)/(1/2) = √3."
  },

  // ══════════ ESTATÍSTICA ══════════
  {
    id: "mat-293", disc: "Estatística", tema: "Medidas estatísticas",
    text: "A média aritmética de 8, 12, 10, 6 e 14 é:",
    opts: ["6", "7", "8", "9", "10"],
    ans: 4,
    expl: "Soma = 8+12+10+6+14 = 50. Média = 50/5 = 10."
  },
  {
    id: "mat-294", disc: "Estatística", tema: "Medidas estatísticas",
    text: "A média aritmética de 4, 8, 12 e 16 é:",
    opts: ["6", "7", "8", "9", "10"],
    ans: 4,
    expl: "(4 + 8 + 12 + 16)/4 = 40/4 = 10."
  },
  {
    id: "mat-295", disc: "Estatística", tema: "Medidas estatísticas",
    text: "A mediana do conjunto {3, 7, 2, 9, 5} é:",
    opts: ["3", "7", "9", "5", "2"],
    ans: 3,
    expl: "Ordenado: 2, 3, 5, 7, 9. Mediana = elemento central = 5."
  },
  {
    id: "mat-296", disc: "Estatística", tema: "Medidas estatísticas",
    text: "A moda do conjunto {1, 2, 2, 3, 3, 3, 4} é:",
    opts: ["3", "1", "2", "4", "2 e 3"],
    ans: 0,
    expl: "O valor que mais se repete é 3 (aparece 3 vezes)."
  },
  {
    id: "mat-297", disc: "Estatística", tema: "Medidas estatísticas",
    text: "A variância de um conjunto é 9. O desvio padrão é:",
    opts: ["3", "4,5", "9", "18", "81"],
    ans: 0,
    expl: "Desvio padrão = √variância = √9 = 3."
  },
  {
    id: "mat-298", disc: "Estatística", tema: "Medidas estatísticas",
    text: "Numa classe, as notas foram 5, 6, 7, 8 e 9. A amplitude é:",
    opts: ["2", "3", "4", "5", "9"],
    ans: 2,
    expl: "Amplitude = maior − menor = 9 − 5 = 4."
  },
  {
    id: "mat-299", disc: "Estatística", tema: "Medidas estatísticas",
    text: "A média ponderada de notas 6, 8 e 10 com pesos 1, 2, 3 é:",
    opts: ["7", "8", "8,5", "≈ 8,67", "9"],
    ans: 3,
    expl: "MP = (6·1 + 8·2 + 10·3)/(1 + 2 + 3) = (6 + 16 + 30)/6 = 52/6 ≈ 8,67."
  },
  {
    id: "mat-300", disc: "Estatística", tema: "Medidas estatísticas",
    text: "Se a média de x e 12 é 9, então x vale:",
    opts: ["2", "3", "4", "5", "6"],
    ans: 4,
    expl: "(x + 12)/2 = 9 → x + 12 = 18 → x = 6."
  },
  {
    id: "mat-301", disc: "Estatística", tema: "Medidas estatísticas",
    text: "A média geométrica de 4 e 9 é:",
    opts: ["6", "6,5", "7", "13", "36"],
    ans: 0,
    expl: "MG = √(4·9) = √36 = 6. (6,5 seria a média aritmética.)"
  },
  {
    id: "mat-302", disc: "Estatística", tema: "Medidas estatísticas",
    text: "Em uma pequena empresa, os salários mensais de cinco funcionários são: R$ 1.500, R$ 1.500, R$ 2.000, R$ 2.500 e R$ 12.500. A média e a mediana desses salários são, respectivamente:",
    opts: [
      "R$ 2.000 e R$ 4.000",
      "R$ 4.000 e R$ 1.500",
      "R$ 2.500 e R$ 2.000",
      "R$ 1.500 e R$ 2.000",
      "R$ 4.000 e R$ 2.000"
    ],
    ans: 4,
    expl: "Média = 20.000 ÷ 5 = R$ 4.000. Mediana = valor central dos dados ordenados = R$ 2.000. Um valor extremo puxa a média para cima; a mediana representa melhor o salário típico."
  },
  {
    id: "mat-303", disc: "Estatística", tema: "Medidas estatísticas",
    text: "As notas de um aluno em seis provas foram: 6, 8, 5, 9, 7 e 10. A mediana dessas notas é:",
    opts: ["6,5", "7", "7,5", "8", "8,5"],
    ans: 2,
    expl: "Ordenando: 5, 6, 7, 8, 9, 10. Com número par de dados, a mediana é a média dos dois centrais: (7 + 8) ÷ 2 = 7,5."
  },
  {
    id: "mat-304", disc: "Estatística", tema: "Medidas estatísticas",
    text: "Uma loja de calçados registrou as vendas de um dia: números 36, 37, 38, 38, 38, 39, 40, 40, 41. Para decidir qual número repor em maior quantidade, a medida mais útil é a moda, que vale:",
    opts: ["37", "38", "39", "40", "41"],
    ans: 1,
    expl: "A moda é o valor mais frequente: o número 38 aparece três vezes. Nesse contexto, a média (que poderia nem ser um número de calçado existente) seria menos útil."
  },
  {
    id: "mat-305", disc: "Estatística", tema: "Medidas estatísticas",
    text: "Uma tabela mostra o número de visitantes de um museu em quatro meses: janeiro, 120; fevereiro, 150; março, 180; abril, 150. A média mensal de visitantes nesse período foi:",
    opts: ["130", "140", "145", "150", "160"],
    ans: 3,
    expl: "Média = (120 + 150 + 180 + 150) ÷ 4 = 600 ÷ 4 = 150 visitantes por mês."
  },

  // ══════════ PROBABILIDADE E COMBINATÓRIA ══════════
  {
    id: "mat-306", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Uma urna tem 4 bolas vermelhas e 6 azuis. A probabilidade de sortear uma bola vermelha é:",
    opts: ["2/5", "1/4", "3/5", "4/6", "1/2"],
    ans: 0,
    expl: "P = 4/10 = 2/5."
  },
  {
    id: "mat-307", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "A probabilidade de tirar cara ao lançar uma moeda honesta 3 vezes seguidas é:",
    opts: ["1/2", "1/4", "1/6", "1/3", "1/8"],
    ans: 4,
    expl: "Eventos independentes: P = (1/2)·(1/2)·(1/2) = 1/8."
  },
  {
    id: "mat-308", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Numa sala de 30 alunos, 12 gostam de matemática. A probabilidade de sortear um que goste é:",
    opts: ["1/5", "3/5", "1/3", "2/5", "2/3"],
    ans: 3,
    expl: "P = 12/30 = 2/5."
  },
  {
    id: "mat-309", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Qual é a probabilidade de tirar um número par ao lançar um dado honesto?",
    opts: ["1/2", "1/6", "1/3", "2/3", "5/6"],
    ans: 0,
    expl: "Números pares: {2, 4, 6}. P = 3/6 = 1/2."
  },
  {
    id: "mat-310", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Um baralho tem 52 cartas. A probabilidade de sortear um ás é:",
    opts: ["1/52", "1/26", "1/4", "4/13", "1/13"],
    ans: 4,
    expl: "4 ases em 52 cartas: P = 4/52 = 1/13."
  },
  {
    id: "mat-311", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "A probabilidade de ocorrer PELO MENOS um evento com P(A) = 0,7 e P(B) = 0,4, independentes, é:",
    opts: ["0,28", "0,72", "1,1", "0,82", "0,3"],
    ans: 3,
    expl: "P(A∪B) = P(A)+P(B)−P(A∩B) = 0,7+0,4−0,28 = 0,82."
  },
  {
    id: "mat-312", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Um dado honesto é lançado. A probabilidade de sair um número maior que 4 é:",
    opts: ["1/6", "1/2", "2/3", "5/6", "1/3"],
    ans: 4,
    expl: "Números > 4: {5, 6}. P = 2/6 = 1/3."
  },
  {
    id: "mat-313", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Se duas moedas são lançadas, a probabilidade de saírem duas caras é:",
    opts: ["1/2", "1/3", "2/4", "3/4", "1/4"],
    ans: 4,
    expl: "P = (1/2) × (1/2) = 1/4."
  },
  {
    id: "mat-314", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Se P(A) = 0,3, a probabilidade do complementar P(Aᶜ) é:",
    opts: ["0,3", "0,5", "1,3", "0,03", "0,7"],
    ans: 4,
    expl: "P(Aᶜ) = 1 − P(A) = 1 − 0,3 = 0,7."
  },
  {
    id: "mat-315", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Se A e B são eventos independentes com P(A) = 0,5 e P(B) = 0,4, então P(A ∩ B) =",
    opts: ["0,1", "0,45", "0,9", "0,02", "0,2"],
    ans: 4,
    expl: "Independentes: P(A∩B) = P(A)·P(B) = 0,5·0,4 = 0,2."
  },
  {
    id: "mat-316", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Lançando dois dados comuns, a probabilidade de a soma dos resultados ser 7 é:",
    opts: ["1/12", "1/9", "1/6", "7/36", "1/4"],
    ans: 2,
    expl: "Há 36 resultados possíveis. Somam 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — 6 casos. P = 6/36 = 1/6. É a soma mais provável com dois dados."
  },
  {
    id: "mat-317", disc: "Probabilidade e combinatória", tema: "Probabilidade",
    text: "Em uma turma de 40 alunos, 15 usam óculos: 10 meninas e 5 meninos. Sorteando-se um aluno que usa óculos, a probabilidade de ser uma menina é:",
    opts: ["1/4", "1/3", "2/5", "2/3", "3/4"],
    ans: 3,
    expl: "O espaço amostral fica restrito aos 15 alunos de óculos (probabilidade condicional). Meninas entre eles: 10. P = 10/15 = 2/3."
  },
  {
    id: "mat-318", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Quantos anagramas distintos podem ser formados com as letras da palavra AMOR?",
    opts: ["8", "12", "24", "48", "120"],
    ans: 2,
    expl: "São 4 letras distintas: 4! = 4×3×2×1 = 24 anagramas."
  },
  {
    id: "mat-319", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Quantas combinações de 3 elementos podem ser formadas a partir de um conjunto de 6 elementos?",
    opts: ["15", "20", "30", "60", "120"],
    ans: 1,
    expl: "C(6,3) = 6!/(3!·3!) = 720/(6·6) = 20."
  },
  {
    id: "mat-320", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Num grupo de 5 pessoas, quantos apertos de mão distintos são possíveis (cada par só uma vez)?",
    opts: ["5", "8", "10", "12", "20"],
    ans: 2,
    expl: "C(5,2) = 5!/(2!·3!) = 10 apertos de mão."
  },
  {
    id: "mat-321", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Dois dados distintos são lançados. Quantos resultados possíveis existem?",
    opts: ["6", "12", "24", "36", "72"],
    ans: 3,
    expl: "6 × 6 = 36 resultados possíveis."
  },
  {
    id: "mat-322", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "De quantas maneiras diferentes 3 pessoas podem se sentar numa fila com 3 cadeiras?",
    opts: ["3", "6", "9", "12", "27"],
    ans: 1,
    expl: "3! = 3 × 2 × 1 = 6 maneiras."
  },
  {
    id: "mat-323", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Num grupo de 4 pessoas, quantas comissões de 2 pessoas podem ser formadas?",
    opts: ["4", "6", "8", "12", "16"],
    ans: 1,
    expl: "C(4,2) = 4!/(2!·2!) = 6."
  },
  {
    id: "mat-324", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Qual é o valor de 5! (fatorial de 5)?",
    opts: ["25", "60", "100", "120", "720"],
    ans: 3,
    expl: "5! = 5·4·3·2·1 = 120."
  },
  {
    id: "mat-325", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "O número de subconjuntos de um conjunto com 4 elementos é:",
    opts: ["4", "8", "12", "16", "24"],
    ans: 3,
    expl: "Número de subconjuntos = 2⁴ = 16."
  },
  {
    id: "mat-326", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Numa eleição com 3 candidatos, o eleitor pode votar em um deles ou anular o voto. Quantas opções ele tem?",
    opts: ["4", "5", "6", "7", "8"],
    ans: 0,
    expl: "Votar em A, B, C ou nulo = 4 opções."
  },
  {
    id: "mat-327", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Cinco pontos estão num plano, e três deles nunca estão alinhados. Quantas retas distintas passam por dois desses pontos?",
    opts: ["5", "8", "10", "12", "15"],
    ans: 2,
    expl: "C(5,2) = 10 retas."
  },
  {
    id: "mat-328", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "O valor de C(6,2) é:",
    opts: ["12", "15", "18", "30", "36"],
    ans: 1,
    expl: "C(6,2) = 6!/(2!·4!) = 30/2 = 15."
  },
  {
    id: "mat-329", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Quantos anagramas distintos tem a palavra NATA?",
    opts: ["4", "6", "24", "8", "12"],
    ans: 4,
    expl: "4 letras, A repetido 2 vezes: 4!/2! = 24/2 = 12."
  },
  {
    id: "mat-330", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Uma senha de banco é formada por 4 algarismos, de 0 a 9, podendo haver repetição. O número de senhas possíveis é:",
    opts: ["40", "5.040", "6.561", "10.000", "100.000"],
    ans: 3,
    expl: "Pelo princípio multiplicativo, há 10 opções para cada posição: 10 × 10 × 10 × 10 = 10.000. Sem repetição, seriam 10 × 9 × 8 × 7 = 5.040."
  },
  {
    id: "mat-331", disc: "Probabilidade e combinatória", tema: "Análise combinatória",
    text: "Uma lanchonete oferece 3 tipos de pão, 4 tipos de recheio e 2 tipos de molho. Escolhendo um de cada, quantos sanduíches diferentes podem ser montados?",
    opts: ["9", "12", "18", "24", "36"],
    ans: 3,
    expl: "Pelo princípio fundamental da contagem: 3 × 4 × 2 = 24 combinações."
  }
];
