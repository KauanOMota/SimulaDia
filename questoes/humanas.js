// ─── SimulaDia · Banco de questões: Ciências Humanas e suas Tecnologias ───
// 186 questões autorais no estilo do ENEM, organizadas por disciplina e tema.
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

window.BANK_HUM = [

  // ══════════ HISTÓRIA DO BRASIL ══════════
  {
    id: "hum-001", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "O Tratado de Tordesilhas (1494), firmado entre Portugal e Espanha, tinha como objetivo principal:",
    opts: [
      "Encerrar a Guerra dos Cem Anos entre as monarquias ibéricas",
      "Garantir a liberdade de navegação a todas as nações europeias",
      "Dividir entre as duas Coroas as terras descobertas e por descobrir fora da Europa",
      "Definir as fronteiras atuais entre o Brasil e seus vizinhos",
      "Proibir a escravização de povos indígenas na América"
    ],
    ans: 2,
    expl: "O tratado traçou um meridiano a 370 léguas de Cabo Verde: as terras a leste caberiam a Portugal e as a oeste, à Espanha. Era uma partilha do mundo extra-europeu entre as duas potências marítimas da época."
  },
  {
    id: "hum-002", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "Em 1534, a Coroa portuguesa dividiu o território americano em faixas de terra entregues a particulares, os donatários. Esse sistema, chamado de capitanias hereditárias, buscava:",
    opts: [
      "Criar províncias autônomas com governo eleito pelos colonos",
      "Dividir o território entre as ordens religiosas para a catequese",
      "Ocupar e explorar a colônia transferindo os custos da colonização para a iniciativa privada",
      "Distribuir terras gratuitamente aos indígenas aliados",
      "Estabelecer zonas neutras para o comércio com franceses e holandeses"
    ],
    ans: 2,
    expl: "Sem recursos para financiar sozinha a ocupação, a Coroa delegou a donatários o povoamento, a defesa e a exploração econômica. A maioria das capitanias fracassou, o que levou à criação do Governo-Geral em 1548."
  },
  {
    id: "hum-003", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "A criação do Governo-Geral, com a chegada de Tomé de Sousa à Bahia em 1549, teve como objetivo:",
    opts: [
      "Extinguir definitivamente as capitanias hereditárias",
      "Centralizar a administração colonial e coordenar a defesa e a colonização",
      "Transferir a sede da monarquia portuguesa para a América",
      "Conceder autonomia política às câmaras municipais",
      "Proibir a entrada de jesuítas no território colonial"
    ],
    ans: 1,
    expl: "O Governo-Geral não extinguiu as capitanias de imediato, mas criou uma autoridade central (com sede em Salvador) para auxiliar os donatários, organizar a defesa e dar unidade à administração. Com Tomé de Sousa vieram os primeiros jesuítas."
  },
  {
    id: "hum-004", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "A economia açucareira do Nordeste colonial nos séculos XVI e XVII estruturou-se principalmente com base em:",
    opts: [
      "Pequenas propriedades familiares e policultura de subsistência",
      "Trabalho assalariado de imigrantes europeus",
      "Latifúndio, monocultura voltada à exportação e trabalho escravo",
      "Manufaturas urbanas abastecidas pelo mercado interno",
      "Cooperativas indígenas organizadas pelos jesuítas"
    ],
    ans: 2,
    expl: "O engenho combinava grandes extensões de terra (latifúndio), um produto principal destinado ao mercado europeu (monocultura de exportação) e mão de obra escravizada, sobretudo africana — a chamada plantation."
  },
  {
    id: "hum-005", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "O Quilombo dos Palmares, na Serra da Barriga (atual Alagoas), resistiu por quase um século. Sua importância histórica está no fato de ter sido:",
    opts: [
      "Um acordo pacífico entre senhores de engenho e escravizados",
      "Uma colônia holandesa formada por africanos libertos",
      "Uma missão jesuítica que acolhia fugitivos",
      "Uma das maiores experiências de resistência à escravidão nas Américas",
      "O primeiro núcleo urbano da Capitania de Pernambuco"
    ],
    ans: 3,
    expl: "Palmares reuniu milhares de pessoas, com organização política e produção agrícola próprias, e enfrentou expedições por décadas até ser destruído em 1694–1695. Zumbi, seu líder, morreu em 20 de novembro de 1695, data hoje lembrada como Dia da Consciência Negra."
  },
  {
    id: "hum-006", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "As bandeiras paulistas dos séculos XVII e XVIII estiveram ligadas principalmente:",
    opts: [
      "À defesa do litoral contra invasões holandesas",
      "À fundação de missões religiosas no sul da colônia",
      "À captura de indígenas, à busca de metais preciosos e à expansão territorial para o interior",
      "Ao transporte do açúcar dos engenhos até os portos",
      "À fiscalização da cobrança de impostos nas Minas"
    ],
    ans: 2,
    expl: "As expedições bandeirantes partiam de São Paulo para apresar indígenas e procurar ouro e pedras preciosas. Um efeito importante foi a ampliação do território para além da linha de Tordesilhas."
  },
  {
    id: "hum-007", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "A descoberta de ouro em Minas Gerais, no fim do século XVII, provocou várias mudanças na colônia. Uma delas foi:",
    opts: [
      "O fim imediato da escravidão nas áreas mineradoras",
      "A independência econômica da colônia em relação a Portugal",
      "A transferência da capital de Salvador para o Rio de Janeiro, em 1763",
      "O abandono do litoral e o fim do comércio atlântico",
      "A proibição da entrada de portugueses na região das Minas"
    ],
    ans: 2,
    expl: "O eixo econômico deslocou-se para o Centro-Sul, e o Rio de Janeiro, porto de escoamento do ouro, tornou-se capital em 1763. A mineração também estimulou a urbanização e o mercado interno."
  },
  {
    id: "hum-008", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "No século XVIII, a Coroa portuguesa cobrava o quinto sobre o ouro extraído nas Minas. A derrama era:",
    opts: [
      "A fundição obrigatória do ouro em barras nas Casas de Fundição",
      "O contrabando de ouro pelos portos do Nordeste",
      "A distribuição de lotes de terra para a mineração",
      "A cobrança forçada dos impostos atrasados quando a cota anual de ouro não era atingida",
      "Um imposto sobre a importação de escravizados"
    ],
    ans: 3,
    expl: "Quando a arrecadação não chegava às 100 arrobas anuais, as autoridades podiam decretar a derrama, confiscando bens da população. O anúncio de uma derrama foi o estopim previsto pelos inconfidentes em 1789."
  },
  {
    id: "hum-009", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "A Inconfidência Mineira (1789) e a Conjuração Baiana (1798) foram movimentos contra o domínio português. Uma diferença importante entre eles é que a Conjuração Baiana:",
    opts: [
      "Foi liderada exclusivamente por grandes proprietários de terras",
      "Pretendia manter a monarquia portuguesa no Brasil",
      "Não teve nenhum de seus participantes punido",
      "Ocorreu após a independência do Brasil",
      "Teve forte participação popular e defendia o fim da escravidão"
    ],
    ans: 4,
    expl: "A Inconfidência foi articulada sobretudo por membros da elite mineira e não propunha abolir a escravidão. A Conjuração Baiana, ou Revolta dos Alfaiates, reuniu alfaiates, soldados e escravizados e defendia república, igualdade e abolição."
  },
  {
    id: "hum-010", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "Tiradentes, executado em 1792, foi transformado em herói nacional sobretudo:",
    opts: [
      "Pelo próprio governo português, logo após sua morte",
      "Por D. Pedro I, no momento da Independência",
      "Pelos jesuítas, que o consideravam um mártir religioso",
      "Pelos senhores de engenho do Nordeste colonial",
      "Pelos republicanos do fim do século XIX, que buscavam um símbolo para o novo regime"
    ],
    ans: 4,
    expl: "Após 1889, a República precisava de símbolos que não estivessem ligados à monarquia. Tiradentes, um conspirador executado pela Coroa, foi associado à ideia de liberdade, e sua imagem passou a lembrar a de Cristo."
  },
  {
    id: "hum-011", disc: "História do Brasil", tema: "Brasil Colônia",
    text: "Leia o trecho:\n“Os indígenas não eram uma só nação: tupis, jês, aruaques e caribes falavam línguas diferentes e tinham modos de vida diversos.”\nA afirmação contribui para combater a ideia de que os povos originários:",
    opts: [
      "Já viviam no território antes da chegada dos portugueses",
      "Formavam um grupo homogêneo, sem diferenças culturais entre si",
      "Possuíam conhecimentos sobre a natureza",
      "Resistiram à colonização",
      "Praticavam agricultura"
    ],
    ans: 1,
    expl: "O trecho destaca a diversidade linguística e cultural dos povos indígenas. A noção genérica de “índio” foi uma construção colonial que apagou essas diferenças."
  },
  {
    id: "hum-012", disc: "História do Brasil", tema: "Período Joanino",
    text: "A vinda da família real portuguesa ao Brasil, em 1808, foi motivada principalmente:",
    opts: [
      "Por uma revolta popular em Lisboa contra a monarquia",
      "Pelo desejo de D. João de proclamar a independência do Brasil",
      "Pela invasão de Portugal pelas tropas de Napoleão",
      "Pela descoberta de novas minas de ouro na colônia",
      "Por um acordo com a Espanha para unificar as colônias"
    ],
    ans: 2,
    expl: "Portugal recusou-se a aderir ao Bloqueio Continental imposto por Napoleão contra a Inglaterra. Com a invasão francesa, a corte partiu para o Rio de Janeiro sob escolta britânica."
  },
  {
    id: "hum-013", disc: "História do Brasil", tema: "Período Joanino",
    text: "A abertura dos portos às nações amigas, decretada por D. João em 1808, teve como consequência imediata:",
    opts: [
      "A proibição do comércio com a Inglaterra",
      "A independência política imediata do Brasil",
      "A extinção do tráfico de escravizados",
      "A transferência da capital para Salvador",
      "O fim do monopólio comercial de Portugal sobre o Brasil, beneficiando sobretudo a Inglaterra"
    ],
    ans: 4,
    expl: "Com a medida, o Brasil passou a comerciar diretamente com outros países. Como a Inglaterra era a principal aliada de Portugal, foi a grande beneficiada, o que se aprofundou com os tratados de 1810, que lhe deram tarifas alfandegárias privilegiadas."
  },
  {
    id: "hum-014", disc: "História do Brasil", tema: "Período Joanino",
    text: "Entre as transformações provocadas pela presença da corte portuguesa no Rio de Janeiro (1808–1821), pode-se citar:",
    opts: [
      "A criação do Banco do Brasil, da Imprensa Régia e do Jardim Botânico",
      "A abolição imediata da escravidão",
      "A proclamação da República",
      "A proibição do comércio com a Inglaterra",
      "O fim da cobrança de impostos na colônia"
    ],
    ans: 0,
    expl: "D. João instalou no Rio instituições típicas de uma sede de monarquia: Banco do Brasil, Imprensa Régia, Biblioteca Real, Jardim Botânico e escolas superiores. Em 1815, o Brasil foi elevado a Reino Unido a Portugal e Algarves."
  },
  {
    id: "hum-015", disc: "História do Brasil", tema: "Independência",
    text: "Em 9 de janeiro de 1822, o príncipe regente D. Pedro decidiu permanecer no Brasil, contrariando as ordens das Cortes de Lisboa. O episódio, conhecido como Dia do Fico, está relacionado:",
    opts: [
      "À abolição da escravidão no Império",
      "À proclamação da República no Rio de Janeiro",
      "À tentativa das Cortes portuguesas de reduzir o Brasil novamente à condição de colônia",
      "À Guerra do Paraguai",
      "Ao retorno de D. João VI ao Brasil"
    ],
    ans: 2,
    expl: "Após a Revolução do Porto (1820), as Cortes exigiam o retorno de D. Pedro e a anulação de órgãos criados no Brasil. A elite do Centro-Sul apoiou sua permanência, passo decisivo rumo à Independência em 7 de setembro de 1822."
  },
  {
    id: "hum-016", disc: "História do Brasil", tema: "Primeiro Reinado",
    text: "A Constituição de 1824, outorgada por D. Pedro I, criou o Poder Moderador. Esse poder:",
    opts: [
      "Era exercido por um conselho eleito pelo povo",
      "Garantia a independência total do Judiciário em relação ao imperador",
      "Estabelecia o voto universal para homens e mulheres",
      "Transformava o Brasil em uma federação de províncias autônomas",
      "Permitia ao imperador intervir nos demais poderes, como dissolver a Câmara e nomear senadores"
    ],
    ans: 4,
    expl: "Inspirado nas ideias de Benjamin Constant, o Poder Moderador era privativo do imperador e lhe dava ampla capacidade de interferência política. A mesma Constituição instituiu o voto censitário, baseado na renda."
  },
  {
    id: "hum-017", disc: "História do Brasil", tema: "Primeiro Reinado",
    text: "A Confederação do Equador (1824), iniciada em Pernambuco, foi uma reação:",
    opts: [
      "À abolição da escravidão decretada pelo imperador",
      "À chegada da família real portuguesa ao Brasil",
      "À Proclamação da República",
      "À cobrança do quinto sobre o ouro",
      "Ao autoritarismo de D. Pedro I e à Constituição outorgada, que centralizava o poder"
    ],
    ans: 4,
    expl: "As províncias do Nordeste rejeitaram a centralização imposta pela Constituição de 1824 e proclamaram uma república confederada. O movimento foi duramente reprimido, e Frei Caneca foi executado."
  },
  {
    id: "hum-018", disc: "História do Brasil", tema: "Período Regencial",
    text: "O Período Regencial (1831–1840) foi marcado por diversas revoltas provinciais, como a Cabanagem, a Sabinada, a Balaiada e a Farroupilha. Um fator comum a esse contexto foi:",
    opts: [
      "A instabilidade política e as disputas entre centralização e autonomia das províncias",
      "A presença de tropas portuguesas tentando recolonizar o Brasil",
      "A crise provocada pela abolição da escravidão",
      "A Guerra do Paraguai, que esvaziou os cofres do Império",
      "A política do café com leite"
    ],
    ans: 0,
    expl: "Com a abdicação de D. Pedro I e um herdeiro menor de idade, o país foi governado por regentes. Grupos locais disputavam poder com o governo central, e as tensões sociais e regionais explodiram em diversas revoltas."
  },
  {
    id: "hum-019", disc: "História do Brasil", tema: "Período Regencial",
    text: "A Revolta dos Malês, ocorrida em Salvador em 1835, teve como característica marcante:",
    opts: [
      "A liderança de africanos escravizados e libertos de religião muçulmana",
      "A participação exclusiva de fazendeiros de gado do Sul",
      "A defesa do retorno de D. Pedro I ao trono",
      "A tentativa de separar a Bahia para anexá-la a Portugal",
      "A liderança de imigrantes italianos anarquistas"
    ],
    ans: 0,
    expl: "“Malê” designava os africanos muçulmanos, muitos deles alfabetizados em árabe. A revolta foi reprimida em poucas horas, mas aumentou o temor das elites diante de levantes de escravizados."
  },
  {
    id: "hum-020", disc: "História do Brasil", tema: "Período Regencial",
    text: "A Revolução Farroupilha (1835–1845), no Rio Grande do Sul, teve entre suas motivações principais:",
    opts: [
      "A luta dos escravizados pela abolição imediata",
      "A defesa da volta do Brasil à condição de colônia",
      "A resistência indígena contra as missões jesuíticas",
      "A revolta de operários contra as fábricas têxteis",
      "A insatisfação dos estancieiros com os impostos sobre o charque e a concorrência platina"
    ],
    ans: 4,
    expl: "Os criadores gaúchos reclamavam que o charque importado da região do Prata era menos taxado que o produzido no Sul. A revolta durou dez anos e terminou com um acordo, o Tratado de Ponche Verde."
  },
  {
    id: "hum-021", disc: "História do Brasil", tema: "Segundo Reinado",
    text: "Em 1850, o Brasil aprovou duas leis que alteraram profundamente sua estrutura econômica: a Lei Eusébio de Queirós e a Lei de Terras. Seus efeitos combinados foram:",
    opts: [
      "O fim do tráfico de africanos e a restrição do acesso à terra, que passou a ser obtida apenas por compra",
      "A abolição imediata da escravidão e a reforma agrária",
      "A libertação dos filhos de escravizadas e a doação de terras a imigrantes",
      "A proibição da imigração europeia e a criação de quilombos legais",
      "O fim do Poder Moderador e a criação do federalismo"
    ],
    ans: 0,
    expl: "A Lei Eusébio de Queirós proibiu o tráfico negreiro, sob forte pressão inglesa. A Lei de Terras determinou que terras devolutas só seriam adquiridas por compra, dificultando o acesso de libertos, pobres e imigrantes à propriedade."
  },
  {
    id: "hum-022", disc: "História do Brasil", tema: "Segundo Reinado",
    text: "A expansão do café no Oeste Paulista, na segunda metade do século XIX, esteve associada:",
    opts: [
      "À decadência das cidades e ao fim do comércio exterior",
      "Ao uso exclusivo de trabalho indígena nas fazendas",
      "Ao abandono da produção para exportação",
      "À mineração de ouro e diamantes",
      "À ferrovia, ao uso crescente de mão de obra imigrante e a investimentos urbanos e industriais"
    ],
    ans: 4,
    expl: "Diferentemente do Vale do Paraíba, o Oeste Paulista adotou o trabalho imigrante (sobretudo italiano), investiu em ferrovias e reinvestiu lucros em bancos, comércio e indústria — base da futura industrialização paulista."
  },
  {
    id: "hum-023", disc: "História do Brasil", tema: "Segundo Reinado",
    text: "A Guerra do Paraguai (1864–1870) opôs o Paraguai à Tríplice Aliança, formada por:",
    opts: [
      "Brasil, Argentina e Uruguai",
      "Brasil, Chile e Bolívia",
      "Argentina, Peru e Uruguai",
      "Brasil, Inglaterra e Argentina",
      "Brasil, Bolívia e Uruguai"
    ],
    ans: 0,
    expl: "O conflito, o maior da América do Sul, devastou o Paraguai. No Brasil, fortaleceu o Exército, aumentou a dívida externa e deu visibilidade à participação de escravizados que lutaram em troca de liberdade."
  },
  {
    id: "hum-024", disc: "História do Brasil", tema: "Segundo Reinado",
    text: "Leis abolicionistas aprovadas antes de 1888 tiveram caráter gradual. A Lei do Ventre Livre (1871) determinava que:",
    opts: [
      "Seriam libertados todos os escravizados com mais de 60 anos",
      "O tráfico de africanos estaria proibido",
      "Todos os escravizados seriam libertos imediatamente",
      "Seriam livres os filhos de mulheres escravizadas nascidos a partir daquela data",
      "Os senhores receberiam indenização pela abolição total"
    ],
    ans: 3,
    expl: "A lei libertava os nascidos a partir de 1871, mas permitia que os senhores usassem seu trabalho até os 21 anos ou entregassem as crianças ao Estado mediante indenização. Em 1885 veio a Lei dos Sexagenários e, em 1888, a Lei Áurea."
  },
  {
    id: "hum-025", disc: "História do Brasil", tema: "Segundo Reinado",
    text: "A Lei Áurea, de 13 de maio de 1888, aboliu a escravidão no Brasil. Uma crítica frequente feita pela historiografia a esse processo é que:",
    opts: [
      "Os ex-escravizados receberam terras, mas não quiseram cultivá-las",
      "A abolição foi imposta por uma invasão estrangeira",
      "Não houve políticas de integração dos libertos, como acesso à terra, à educação e ao trabalho",
      "Os senhores de escravos receberam altas indenizações do governo",
      "A lei libertou apenas os escravizados nascidos no Brasil"
    ],
    ans: 2,
    expl: "A lei tinha apenas dois artigos e não previa nenhuma reparação ou inclusão. Os libertos foram lançados à própria sorte, o que contribuiu para desigualdades raciais que persistem até hoje."
  },
  {
    id: "hum-026", disc: "História do Brasil", tema: "Proclamação da República",
    text: "Entre os fatores que contribuíram para a queda da monarquia em 1889, pode-se citar:",
    opts: [
      "A vitória do Paraguai na guerra contra o Brasil",
      "A pressão dos Estados Unidos para anexar o território brasileiro",
      "A revolta dos escravizados libertos exigindo a volta da monarquia",
      "O apoio unânime da população às ideias anarquistas",
      "O desgaste com o Exército, com a Igreja e com fazendeiros insatisfeitos com a abolição sem indenização"
    ],
    ans: 4,
    expl: "A chamada “questão militar”, a “questão religiosa” e a perda de apoio dos cafeicultores escravistas após 1888 isolaram o Império. Em 15 de novembro de 1889, o marechal Deodoro da Fonseca proclamou a República."
  },
  {
    id: "hum-027", disc: "História do Brasil", tema: "República Velha",
    text: "A Constituição de 1891, a primeira da República, estabeleceu:",
    opts: [
      "Monarquia parlamentar e voto censitário",
      "Presidencialismo, federalismo e voto aberto, vedado a analfabetos e mulheres",
      "Voto secreto e feminino",
      "Um Estado oficialmente católico",
      "A continuidade do Poder Moderador"
    ],
    ans: 1,
    expl: "A Carta de 1891 deu autonomia aos estados (federalismo), separou Estado e Igreja e instituiu o voto aberto para homens alfabetizados maiores de 21 anos — o que excluía a maioria da população e facilitava fraudes."
  },
  {
    id: "hum-028", disc: "História do Brasil", tema: "República Velha",
    text: "O “voto de cabresto”, prática comum na Primeira República, consistia em:",
    opts: [
      "Proibição do voto para todos os trabalhadores rurais",
      "Voto obrigatório e secreto para maiores de 16 anos",
      "Escolha do presidente diretamente pelo Senado",
      "Compra de votos de deputados no Congresso Nacional",
      "Controle do voto dos eleitores pelos coronéis, favorecido pelo voto aberto"
    ],
    ans: 4,
    expl: "Grandes proprietários (os coronéis) usavam favores, ameaças e violência para garantir os votos de quem dependia deles. Como o voto era aberto, era fácil fiscalizar em quem cada eleitor votava."
  },
  {
    id: "hum-029", disc: "História do Brasil", tema: "República Velha",
    text: "A chamada “política do café com leite” refere-se:",
    opts: [
      "À alternância de São Paulo e Minas Gerais no controle da Presidência da República",
      "Ao acordo comercial entre Brasil e Argentina para exportar café e laticínios",
      "À política de valorização do leite como alimento nas escolas",
      "Ao programa de imigração europeia para fazendas de café",
      "À aliança entre militares e operários no governo"
    ],
    ans: 0,
    expl: "As oligarquias paulista (café) e mineira (leite) dominavam a política federal, revezando-se na indicação de presidentes, com apoio da política dos governadores. O arranjo se rompeu em 1930."
  },
  {
    id: "hum-030", disc: "História do Brasil", tema: "República Velha",
    text: "A Guerra de Canudos (1896–1897), no sertão baiano, foi interpretada pelo governo da época como ameaça monarquista. Historiadores atuais tendem a vê-la como:",
    opts: [
      "Uma conspiração organizada por europeus para restaurar a monarquia",
      "Uma revolta de militares contra o presidente",
      "Um conflito entre cafeicultores paulistas e mineiros",
      "Um movimento social de sertanejos pobres, com forte caráter religioso, em busca de terra e sobrevivência",
      "Uma insurreição operária urbana inspirada no socialismo"
    ],
    ans: 3,
    expl: "A comunidade liderada por Antônio Conselheiro reuniu milhares de sertanejos pobres. Foi destruída pelo Exército após quatro expedições, num massacre narrado por Euclides da Cunha em “Os sertões”."
  },
  {
    id: "hum-031", disc: "História do Brasil", tema: "República Velha",
    text: "A Revolta da Vacina (1904), no Rio de Janeiro, ocorreu em um contexto de:",
    opts: [
      "Proibição do carnaval pelo governo federal",
      "Greve geral dos trabalhadores das fábricas paulistas",
      "Reformas urbanas autoritárias e campanha de vacinação obrigatória contra a varíola",
      "Invasão estrangeira na capital federal",
      "Abolição da escravidão no Rio de Janeiro"
    ],
    ans: 2,
    expl: "A reforma do prefeito Pereira Passos demoliu cortiços e expulsou pobres do centro, e a vacinação obrigatória, conduzida por Oswaldo Cruz, foi imposta sem diálogo. A insatisfação popular explodiu em dias de conflitos."
  },
  {
    id: "hum-032", disc: "História do Brasil", tema: "República Velha",
    text: "A Revolta da Chibata (1910), liderada pelo marinheiro João Cândido, reivindicava:",
    opts: [
      "O fim dos castigos físicos na Marinha e melhores condições de trabalho",
      "A volta da monarquia ao Brasil",
      "A independência do Rio Grande do Sul",
      "A redução dos impostos sobre o café",
      "O voto feminino nas eleições federais"
    ],
    ans: 0,
    expl: "Marinheiros, em sua maioria negros e pobres, rebelaram-se contra as chibatadas ainda aplicadas como punição. O governo prometeu anistia, mas depois perseguiu e puniu muitos revoltosos."
  },
  {
    id: "hum-033", disc: "História do Brasil", tema: "República Velha",
    text: "O tenentismo, nos anos 1920, foi um movimento de jovens oficiais do Exército que:",
    opts: [
      "Defendiam a volta da monarquia e do Poder Moderador",
      "Lutavam pela independência dos estados do Nordeste",
      "Criticavam as oligarquias e defendiam reformas como o voto secreto e a moralização política",
      "Apoiavam a política do café com leite",
      "Propunham a abolição do Exército brasileiro"
    ],
    ans: 2,
    expl: "Episódios como os 18 do Forte (1922) e a Coluna Prestes (1925–1927) expressaram a insatisfação dos tenentes com a República oligárquica. Muitos deles apoiaram a Revolução de 1930."
  },
  {
    id: "hum-034", disc: "História do Brasil", tema: "República Velha",
    text: "O Convênio de Taubaté (1906) foi um acordo entre os governos de São Paulo, Minas Gerais e Rio de Janeiro para:",
    opts: [
      "Dividir as terras devolutas entre imigrantes",
      "Proibir a imigração italiana",
      "Acabar com a produção de café no Brasil",
      "Criar a Justiça Eleitoral",
      "Comprar o excedente de café e sustentar seu preço no mercado internacional"
    ],
    ans: 4,
    expl: "Diante da superprodução e da queda dos preços, os governos estaduais passaram a comprar e estocar café com empréstimos estrangeiros. A política de valorização socializava os prejuízos dos cafeicultores."
  },
  {
    id: "hum-035", disc: "História do Brasil", tema: "República Velha",
    text: "A Guerra do Contestado (1912–1916), na divisa entre Paraná e Santa Catarina, envolveu:",
    opts: [
      "Camponeses expulsos de suas terras pela construção de uma ferrovia e por empresas madeireiras",
      "Operários anarquistas das fábricas de São Paulo",
      "Fazendeiros de café contra o governo federal",
      "Marinheiros contra os castigos físicos",
      "Militares tenentistas contra as oligarquias"
    ],
    ans: 0,
    expl: "A concessão de terras à companhia da ferrovia São Paulo–Rio Grande e a uma madeireira estrangeira expulsou posseiros. Liderados por monges, os camponeses resistiram e foram massacrados pelas forças do governo."
  },
  {
    id: "hum-036", disc: "História do Brasil", tema: "Era Vargas",
    text: "A Revolução de 1930, que levou Getúlio Vargas ao poder, está relacionada:",
    opts: [
      "À vitória de Vargas em eleições diretas e secretas",
      "À ruptura entre São Paulo e Minas Gerais e à crise do café após 1929",
      "À invasão do Brasil por tropas estrangeiras",
      "À abolição da escravidão",
      "À renúncia de Jânio Quadros"
    ],
    ans: 1,
    expl: "Washington Luís (SP) indicou outro paulista, Júlio Prestes, rompendo o revezamento com Minas. A Aliança Liberal (MG, RS e PB), derrotada nas urnas, tomou o poder pelas armas em um cenário de crise econômica mundial."
  },
  {
    id: "hum-037", disc: "História do Brasil", tema: "Era Vargas",
    text: "A Revolução Constitucionalista de 1932, em São Paulo, exigia:",
    opts: [
      "A volta da monarquia",
      "A independência de São Paulo como país",
      "O fim do voto feminino",
      "A implantação do socialismo",
      "Uma nova Constituição e o fim do governo provisório de Vargas"
    ],
    ans: 4,
    expl: "As elites paulistas, afastadas do poder em 1930, pegaram em armas por uma Constituinte. Foram derrotadas militarmente, mas Vargas convocou eleições e uma nova Carta foi promulgada em 1934."
  },
  {
    id: "hum-038", disc: "História do Brasil", tema: "Era Vargas",
    text: "Durante o Estado Novo (1937–1945), Getúlio Vargas:",
    opts: [
      "Governou de forma autoritária, com censura pelo DIP, e ampliou a legislação trabalhista, como a CLT",
      "Garantiu eleições livres e ampla liberdade de imprensa",
      "Implantou o parlamentarismo",
      "Reduziu o papel do Estado na economia",
      "Extinguiu os sindicatos e todas as leis trabalhistas"
    ],
    ans: 0,
    expl: "O Estado Novo fechou o Congresso, censurou a imprensa pelo Departamento de Imprensa e Propaganda e perseguiu opositores. Ao mesmo tempo, consolidou direitos trabalhistas (CLT, 1943) e controlou os sindicatos — o chamado trabalhismo."
  },
  {
    id: "hum-039", disc: "História do Brasil", tema: "Era Vargas",
    text: "O voto feminino foi instituído no Brasil:",
    opts: [
      "Pela Constituição de 1824",
      "Pelo Código Eleitoral de 1932, no governo Vargas",
      "Pela Lei Áurea, em 1888",
      "Pela Constituição de 1891",
      "Somente na Constituição de 1988"
    ],
    ans: 1,
    expl: "O Código Eleitoral de 1932 criou a Justiça Eleitoral, o voto secreto e o voto feminino, confirmados pela Constituição de 1934. Antes disso, mulheres não podiam votar em eleições nacionais."
  },
  {
    id: "hum-040", disc: "História do Brasil", tema: "Era Vargas",
    text: "A criação da Companhia Siderúrgica Nacional (1941) e da Petrobras (1953) relaciona-se a um projeto de:",
    opts: [
      "Privatização das empresas estratégicas",
      "Retorno à economia agroexportadora",
      "Abertura total ao capital estrangeiro sem regulação",
      "Desindustrialização planejada do país",
      "Industrialização com forte participação do Estado nos setores de base"
    ],
    ans: 4,
    expl: "Vargas defendia que o Estado deveria investir em siderurgia, energia e petróleo para viabilizar a industrialização. A campanha “O petróleo é nosso” mobilizou a sociedade em favor do monopólio estatal."
  },
  {
    id: "hum-041", disc: "História do Brasil", tema: "Era Vargas",
    text: "A Consolidação das Leis do Trabalho (CLT), de 1943, reuniu direitos como salário mínimo, férias e jornada de oito horas. Em relação aos sindicatos, a política de Vargas caracterizou-se por:",
    opts: [
      "Vinculá-los ao Ministério do Trabalho, sob controle do Estado",
      "Garantir total autonomia sindical e direito irrestrito de greve",
      "Proibir qualquer forma de organização de trabalhadores",
      "Entregar sua gestão a empresários estrangeiros",
      "Transformá-los em partidos políticos"
    ],
    ans: 0,
    expl: "Vargas concedeu direitos ao mesmo tempo em que atrelou os sindicatos ao Estado (sindicato único, imposto sindical, reconhecimento oficial). Essa combinação de benefícios e controle é chamada de trabalhismo ou corporativismo."
  },
  {
    id: "hum-042", disc: "História do Brasil", tema: "República de 1946",
    text: "O governo de Juscelino Kubitschek (1956–1961) ficou conhecido pelo Plano de Metas, que tinha como lema:",
    opts: [
      "“Ordem e progresso”",
      "“Brasil, ame-o ou deixe-o”",
      "“Diretas já”",
      "“50 anos em 5”",
      "“O petróleo é nosso”"
    ],
    ans: 3,
    expl: "O plano priorizou energia, transportes e indústria de base, atraiu capital estrangeiro (indústria automobilística) e incluiu a construção de Brasília, inaugurada em 1960. Em contrapartida, aumentaram a inflação e a dívida externa."
  },
  {
    id: "hum-043", disc: "História do Brasil", tema: "República de 1946",
    text: "As Reformas de Base, defendidas pelo presidente João Goulart no início dos anos 1960, incluíam:",
    opts: [
      "Privatização das estatais e fim dos sindicatos",
      "Reforma agrária, reforma urbana e ampliação do voto aos analfabetos",
      "Fechamento do Congresso e fim das eleições",
      "Volta da monarquia e do voto censitário",
      "Transferência da capital de volta ao Rio de Janeiro"
    ],
    ans: 1,
    expl: "As propostas assustaram setores conservadores, empresários e parte das Forças Armadas, em plena Guerra Fria. Esse clima de polarização contribuiu para o golpe civil-militar de 1964."
  },
  {
    id: "hum-044", disc: "História do Brasil", tema: "Ditadura militar",
    text: "O Ato Institucional nº 5 (AI-5), de dezembro de 1968, é considerado o marco do endurecimento da ditadura porque:",
    opts: [
      "Convocou eleições diretas para presidente",
      "Garantiu ampla liberdade de imprensa",
      "Extinguiu as Forças Armadas",
      "Permitiu fechar o Congresso, cassar mandatos e suspendeu o habeas corpus para crimes políticos",
      "Restabeleceu o pluripartidarismo"
    ],
    ans: 3,
    expl: "Com o AI-5, o Executivo passou a ter poderes quase ilimitados. Seguiram-se anos de censura, perseguição, tortura e desaparecimentos, os chamados “anos de chumbo”."
  },
  {
    id: "hum-045", disc: "História do Brasil", tema: "Ditadura militar",
    text: "O chamado “milagre econômico” (1968–1973) foi um período de alto crescimento do PIB. Uma de suas contradições foi:",
    opts: [
      "A redução da desigualdade social a níveis mínimos",
      "O fim completo da inflação",
      "O aumento da concentração de renda e da dívida externa",
      "A diminuição da presença do Estado na economia",
      "A queda da produção industrial"
    ],
    ans: 2,
    expl: "O crescimento acelerado foi financiado por empréstimos externos e acompanhado de arrocho salarial. O ministro Delfim Netto dizia que era preciso “fazer o bolo crescer para depois dividi-lo” — a divisão não veio."
  },
  {
    id: "hum-046", disc: "História do Brasil", tema: "Ditadura militar",
    text: "A Lei da Anistia, de 1979, é objeto de debate até hoje porque:",
    opts: [
      "Puniu os militares que participaram do golpe de 1964",
      "Beneficiou tanto presos e exilados políticos quanto agentes do Estado acusados de tortura",
      "Proibiu a volta dos exilados ao Brasil",
      "Restabeleceu imediatamente as eleições diretas para presidente",
      "Extinguiu o Poder Judiciário"
    ],
    ans: 1,
    expl: "A lei permitiu a volta de exilados e a libertação de presos políticos, mas foi interpretada de forma a impedir a punição de agentes que torturaram e mataram. A Comissão Nacional da Verdade (2012–2014) investigou esses crimes."
  },
  {
    id: "hum-047", disc: "História do Brasil", tema: "Redemocratização",
    text: "O movimento Diretas Já (1983–1984) mobilizou milhões de brasileiros em defesa:",
    opts: [
      "Da volta da monarquia",
      "Do fechamento do Congresso Nacional",
      "Do voto censitário",
      "Da permanência dos militares no poder",
      "Da eleição direta para presidente da República"
    ],
    ans: 4,
    expl: "A Emenda Dante de Oliveira, que restabeleceria as eleições diretas, foi derrotada na Câmara em 1984. Mesmo assim, o movimento acelerou a transição, e Tancredo Neves foi eleito, indiretamente, em 1985."
  },
  {
    id: "hum-048", disc: "História do Brasil", tema: "Redemocratização",
    text: "A Constituição de 1988, chamada de “Constituição Cidadã”, estabeleceu, entre outros pontos:",
    opts: [
      "O retorno do voto censitário",
      "A proibição de partidos políticos",
      "Ampliação de direitos sociais, voto facultativo aos 16 e 17 anos e racismo como crime inafiançável",
      "A volta do Poder Moderador",
      "A censura prévia à imprensa"
    ],
    ans: 2,
    expl: "Promulgada após a ditadura, a Constituição de 1988 ampliou direitos civis, políticos e sociais (como o SUS), reconheceu direitos indígenas e definiu o racismo como crime inafiançável e imprescritível."
  },
  {
    id: "hum-049", disc: "História do Brasil", tema: "Redemocratização",
    text: "O Plano Real, lançado em 1994, teve como principal objetivo:",
    opts: [
      "Estatizar os bancos privados",
      "Controlar a hiperinflação e estabilizar a moeda",
      "Congelar todos os salários por tempo indeterminado",
      "Substituir a moeda nacional pelo dólar",
      "Confiscar a poupança da população"
    ],
    ans: 1,
    expl: "Após vários planos fracassados (Cruzado, Collor etc.), o Real usou uma moeda de transição (a URV) e a âncora cambial para derrubar a inflação, que havia passado de 2.000% ao ano em 1993."
  },
  {
    id: "hum-050", disc: "História do Brasil", tema: "Redemocratização",
    text: "Em 1992, o presidente Fernando Collor de Mello deixou o cargo em meio a um processo de impeachment. O episódio foi marcado:",
    opts: [
      "Por um golpe militar que fechou o Congresso",
      "Pela volta da monarquia",
      "Por denúncias de corrupção e pela mobilização de estudantes, os “caras-pintadas”",
      "Pela renúncia de todos os deputados",
      "Por uma guerra civil entre estados"
    ],
    ans: 2,
    expl: "Denúncias de corrupção levaram a uma CPI e ao processo de impeachment. Collor renunciou antes da votação final no Senado, que mesmo assim suspendeu seus direitos políticos por oito anos. Itamar Franco assumiu."
  },

  // ══════════ HISTÓRIA GERAL ══════════
  {
    id: "hum-051", disc: "História Geral", tema: "Antiguidade",
    text: "A democracia ateniense, no século V a.C., era considerada direta, mas limitada, porque:",
    opts: [
      "Apenas homens adultos nascidos de pais atenienses eram cidadãos; mulheres, estrangeiros e escravizados ficavam excluídos",
      "Somente os sacerdotes podiam votar nas assembleias",
      "As decisões eram tomadas por um rei eleito anualmente",
      "Os cidadãos elegiam representantes para um parlamento",
      "O voto era censitário e restrito aos grandes comerciantes"
    ],
    ans: 0,
    expl: "Na Eclésia, os próprios cidadãos votavam as leis (democracia direta). Mas a cidadania era restrita a uma minoria: a maior parte da população não participava das decisões."
  },
  {
    id: "hum-052", disc: "História Geral", tema: "Antiguidade",
    text: "Na República Romana, os conflitos entre patrícios e plebeus resultaram em conquistas para a plebe, como:",
    opts: [
      "A abolição completa da escravidão",
      "A criação do Tribunato da Plebe e a publicação da Lei das Doze Tábuas",
      "A eleição direta do imperador pela plebe",
      "O fim do Senado romano",
      "A distribuição igualitária de todas as terras"
    ],
    ans: 1,
    expl: "Por meio de pressões e retiradas (secessões), a plebe obteve tribunos com poder de veto, leis escritas (Doze Tábuas) e, mais tarde, acesso às magistraturas e o fim da escravidão por dívidas."
  },
  {
    id: "hum-053", disc: "História Geral", tema: "Antiguidade",
    text: "A economia do Egito Antigo dependia fortemente do rio Nilo porque:",
    opts: [
      "Suas cheias periódicas fertilizavam as margens com húmus, permitindo a agricultura no deserto",
      "Era a principal fonte de ouro do Mediterrâneo",
      "Servia de fronteira natural contra o Império Romano desde o início",
      "Permitia o cultivo de café para exportação",
      "Suas águas eram usadas exclusivamente para rituais religiosos"
    ],
    ans: 0,
    expl: "Heródoto chamou o Egito de “dádiva do Nilo”: as inundações anuais depositavam um lodo fértil, e obras de irrigação controladas pelo Estado organizavam a produção agrícola."
  },
  {
    id: "hum-054", disc: "História Geral", tema: "Idade Média",
    text: "O feudalismo europeu caracterizou-se por:",
    opts: [
      "Intenso comércio marítimo e uso generalizado de moeda",
      "Governo centralizado em reis absolutistas",
      "Economia agrária, relações de suserania e vassalagem e servos presos à terra",
      "Trabalho assalariado em fábricas urbanas",
      "Igualdade jurídica entre nobres e camponeses"
    ],
    ans: 2,
    expl: "No sistema feudal, o poder era descentralizado entre senhores, ligados por juramentos de fidelidade. Os servos trabalhavam a terra e pagavam obrigações como a corveia e a talha."
  },
  {
    id: "hum-055", disc: "História Geral", tema: "Idade Média",
    text: "As Cruzadas (séculos XI a XIII), além do objetivo religioso de retomar Jerusalém, tiveram como consequência:",
    opts: [
      "O fortalecimento definitivo do feudalismo e o fim das cidades",
      "A reabertura do Mediterrâneo ao comércio europeu e o estímulo ao renascimento comercial e urbano",
      "A conversão dos povos árabes ao cristianismo",
      "A unificação política da Europa sob o papa",
      "O fim das trocas culturais entre Ocidente e Oriente"
    ],
    ans: 1,
    expl: "As expedições intensificaram o contato com o Oriente e favoreceram rotas comerciais controladas por cidades italianas como Veneza e Gênova, contribuindo para o crescimento dos burgos."
  },
  {
    id: "hum-056", disc: "História Geral", tema: "Idade Média",
    text: "A Peste Negra, que atingiu a Europa a partir de 1347, provocou:",
    opts: [
      "A morte de cerca de um terço da população e a crise do sistema feudal",
      "O aumento da oferta de mão de obra e a queda dos salários",
      "O início das Grandes Navegações no mesmo ano",
      "A expansão imediata do Império Romano",
      "O fim da Igreja Católica na Europa"
    ],
    ans: 0,
    expl: "A mortalidade em massa reduziu a mão de obra, valorizou o trabalho dos camponeses sobreviventes e gerou revoltas. Fome, guerra e peste marcaram a crise do século XIV."
  },
  {
    id: "hum-057", disc: "História Geral", tema: "Idade Moderna",
    text: "O Renascimento cultural, iniciado na Itália, valorizava:",
    opts: [
      "O teocentrismo absoluto e a rejeição da Antiguidade",
      "A arte abstrata e o rompimento com a perspectiva",
      "O fim do mecenato e da produção artística urbana",
      "O antropocentrismo, o racionalismo e a retomada de referências greco-romanas",
      "A recusa da ciência em favor da tradição oral"
    ],
    ans: 3,
    expl: "Artistas e pensadores como Leonardo da Vinci, Michelangelo e Maquiavel colocaram o ser humano no centro das reflexões, inspirados na cultura clássica e financiados por mecenas."
  },
  {
    id: "hum-058", disc: "História Geral", tema: "Idade Moderna",
    text: "Em 1517, Martinho Lutero publicou as 95 teses. Entre as críticas que motivaram a Reforma Protestante estava:",
    opts: [
      "A tradução da Bíblia para o latim",
      "A proibição do casamento entre camponeses",
      "A cobrança de impostos pelos reis absolutistas",
      "O fim das Cruzadas",
      "A venda de indulgências pela Igreja Católica"
    ],
    ans: 4,
    expl: "Lutero criticou a venda de indulgências e defendeu a salvação pela fé e a leitura da Bíblia pelos fiéis. A Reforma rompeu a unidade cristã da Europa Ocidental e gerou a Contrarreforma católica."
  },
  {
    id: "hum-059", disc: "História Geral", tema: "Idade Moderna",
    text: "A frase “O Estado sou eu”, atribuída a Luís XIV, sintetiza o:",
    opts: [
      "Liberalismo político",
      "Feudalismo descentralizado",
      "Parlamentarismo inglês",
      "Socialismo utópico",
      "Absolutismo monárquico"
    ],
    ans: 4,
    expl: "No absolutismo, o rei concentrava os poderes do Estado. Teóricos como Jacques Bossuet justificavam essa autoridade pelo direito divino dos reis."
  },
  {
    id: "hum-060", disc: "História Geral", tema: "Idade Moderna",
    text: "O mercantilismo, política econômica dos Estados absolutistas, defendia:",
    opts: [
      "Livre-comércio sem interferência do Estado",
      "Coletivização dos meios de produção",
      "Acúmulo de metais preciosos, balança comercial favorável e exploração de colônias",
      "Abolição das fronteiras alfandegárias",
      "Fim das colônias e da escravidão"
    ],
    ans: 2,
    expl: "O metalismo, o protecionismo e o pacto colonial (monopólio da metrópole sobre o comércio colonial) eram pilares do mercantilismo, que financiava o fortalecimento dos Estados nacionais."
  },
  {
    id: "hum-061", disc: "História Geral", tema: "Idade Moderna",
    text: "O pioneirismo português nas Grandes Navegações do século XV é explicado, entre outros fatores, por:",
    opts: [
      "Domínio do comércio com o Oriente pelo Mediterrâneo",
      "Ausência de interesse em especiarias",
      "Dependência total da tecnologia chinesa",
      "Proibição da Igreja às navegações espanholas",
      "Centralização política precoce, posição geográfica favorável e apoio da burguesia mercantil"
    ],
    ans: 4,
    expl: "Portugal era um Estado unificado desde cedo (Revolução de Avis, 1385), tinha saída para o Atlântico e contava com o interesse da burguesia em alcançar as Índias contornando o monopólio italiano."
  },
  {
    id: "hum-062", disc: "História Geral", tema: "Idade Moderna",
    text: "A colonização espanhola na América utilizou formas de trabalho compulsório indígena como a mita e a encomienda. A mita:",
    opts: [
      "Era o trabalho assalariado de imigrantes europeus",
      "Era uma forma de escravidão exclusiva de africanos",
      "Consistia na doação de terras aos indígenas",
      "Era um sistema de trabalho rotativo e obrigatório, adaptado de práticas incas, usado sobretudo nas minas",
      "Era um imposto pago em ouro pelos colonos à Coroa"
    ],
    ans: 3,
    expl: "A mita convocava comunidades indígenas para trabalhar por turnos, especialmente em minas como as de Potosí, onde as condições eram extremamente duras e a mortalidade, elevada."
  },
  {
    id: "hum-063", disc: "História Geral", tema: "Iluminismo",
    text: "Montesquieu, pensador iluminista, defendeu em “O espírito das leis”:",
    opts: [
      "O poder absoluto do rei por direito divino",
      "A abolição de todo tipo de governo",
      "A união entre Estado e Igreja",
      "O controle da economia pelo Estado",
      "A separação dos poderes em Executivo, Legislativo e Judiciário"
    ],
    ans: 4,
    expl: "Para Montesquieu, o poder só é limitado por outro poder; por isso, as funções do Estado deveriam ser divididas. A ideia influenciou constituições como a dos EUA e a do Brasil."
  },
  {
    id: "hum-064", disc: "História Geral", tema: "Iluminismo",
    text: "Adam Smith, em “A riqueza das nações” (1776), criticou o mercantilismo e defendeu:",
    opts: [
      "O monopólio estatal sobre o comércio exterior",
      "A abolição da propriedade privada",
      "O acúmulo de ouro como única fonte de riqueza",
      "O fim da indústria em favor da agricultura",
      "O livre mercado, regulado pela “mão invisível”, e a divisão do trabalho"
    ],
    ans: 4,
    expl: "Smith é considerado o pai do liberalismo econômico: a busca do interesse individual, em um mercado livre, levaria ao bem-estar coletivo. A riqueza viria do trabalho e da produtividade, não do ouro."
  },
  {
    id: "hum-065", disc: "História Geral", tema: "Revoluções burguesas",
    text: "A Revolução Gloriosa (1688–1689), na Inglaterra, resultou:",
    opts: [
      "Na instauração de uma república socialista",
      "No fortalecimento do absolutismo dos Stuart",
      "Na independência da Escócia",
      "Na Declaração de Direitos (Bill of Rights) e na consolidação da monarquia parlamentar",
      "Na abolição do Parlamento inglês"
    ],
    ans: 3,
    expl: "Guilherme de Orange assumiu o trono aceitando a Declaração de Direitos, que limitava o poder real e garantia a supremacia do Parlamento — base da monarquia constitucional inglesa."
  },
  {
    id: "hum-066", disc: "História Geral", tema: "Revoluções burguesas",
    text: "A Revolução Industrial, iniciada na Inglaterra no século XVIII, teve como uma de suas consequências sociais:",
    opts: [
      "O fim do trabalho infantil em todas as fábricas",
      "A diminuição da população das cidades",
      "A volta generalizada ao trabalho artesanal",
      "A redução da produção de mercadorias",
      "A formação do proletariado urbano, submetido a longas jornadas e baixos salários"
    ],
    ans: 4,
    expl: "A mecanização e o sistema fabril concentraram trabalhadores nas cidades em condições precárias. Surgiram movimentos como o ludismo, o cartismo e os primeiros sindicatos."
  },
  {
    id: "hum-067", disc: "História Geral", tema: "Revoluções burguesas",
    text: "Entre os fatores que explicam o pioneirismo inglês na Revolução Industrial estão:",
    opts: [
      "Ausência de colônias e de comércio exterior",
      "Monarquia absolutista contrária à burguesia",
      "Escassez de matérias-primas e de portos",
      "Proibição do uso de máquinas a vapor",
      "Acúmulo de capitais, reservas de carvão e ferro e mão de obra liberada pelos cercamentos"
    ],
    ans: 4,
    expl: "O comércio colonial gerou capitais; o subsolo tinha carvão e ferro; e os cercamentos (enclosures) expulsaram camponeses, que viraram mão de obra fabril. O regime parlamentar favorecia a burguesia."
  },
  {
    id: "hum-068", disc: "História Geral", tema: "Revoluções burguesas",
    text: "A Revolução Francesa (1789) teve como lema “Liberdade, Igualdade, Fraternidade”. Um documento central desse processo foi:",
    opts: [
      "A Magna Carta",
      "O Manifesto Comunista",
      "A Bula Inter Coetera",
      "O Tratado de Versalhes",
      "A Declaração dos Direitos do Homem e do Cidadão"
    ],
    ans: 4,
    expl: "Aprovada em agosto de 1789, a Declaração afirmou que os homens nascem livres e iguais em direitos e garantiu princípios como a soberania nacional e a liberdade de expressão."
  },
  {
    id: "hum-069", disc: "História Geral", tema: "Revoluções burguesas",
    text: "Na França pré-revolucionária, a sociedade era dividida em três estados. O Terceiro Estado era composto:",
    opts: [
      "Pelo clero e pela nobreza",
      "Pela burguesia, pelos camponeses e pelos trabalhadores urbanos, que pagavam a maior parte dos impostos",
      "Apenas pelos membros da família real",
      "Pelos estrangeiros residentes na França",
      "Exclusivamente pelos militares"
    ],
    ans: 1,
    expl: "O Primeiro Estado (clero) e o Segundo (nobreza) tinham privilégios e isenções fiscais. O Terceiro Estado, a ampla maioria da população, sustentava o Estado com impostos e exigiu mudanças nos Estados Gerais de 1789."
  },
  {
    id: "hum-070", disc: "História Geral", tema: "Revoluções burguesas",
    text: "A Revolução do Haiti (1791–1804) foi singular entre os processos de independência da América porque:",
    opts: [
      "Foi liderada por pessoas escravizadas e resultou na abolição da escravidão e em uma nação governada por negros",
      "Foi conduzida pela elite branca proprietária de engenhos",
      "Manteve a escravidão como base da economia",
      "Resultou na anexação do território pela Espanha",
      "Ocorreu de forma pacífica, por acordo com a França"
    ],
    ans: 0,
    expl: "Sob lideranças como Toussaint Louverture e Jean-Jacques Dessalines, os escravizados derrotaram tropas francesas. O Haiti tornou-se, em 1804, a primeira república negra e o primeiro país a abolir a escravidão nas Américas."
  },
  {
    id: "hum-071", disc: "História Geral", tema: "Revoluções burguesas",
    text: "A independência das Treze Colônias inglesas da América do Norte (1776) foi motivada, entre outros fatores:",
    opts: [
      "Pela tentativa francesa de colonizar a região",
      "Pelo aumento de impostos e restrições impostos pela Inglaterra após a Guerra dos Sete Anos",
      "Pela abolição da escravidão decretada pela Inglaterra",
      "Pela invasão espanhola das colônias do Norte",
      "Pela proibição do comércio de algodão com a Ásia"
    ],
    ans: 1,
    expl: "Leis como a do Selo e a do Chá, criadas sem consulta aos colonos (“nenhuma taxação sem representação”), geraram revolta. A Declaração de Independência, de 4 de julho de 1776, foi influenciada pelo Iluminismo."
  },
  {
    id: "hum-072", disc: "História Geral", tema: "Século XIX",
    text: "A partilha da África entre as potências europeias, formalizada na Conferência de Berlim (1884–1885), ignorou:",
    opts: [
      "Os interesses comerciais das potências industriais",
      "A existência de recursos naturais no continente",
      "As divisões étnicas, culturais e políticas dos povos africanos",
      "A presença de rios navegáveis",
      "Os interesses da Inglaterra e da França"
    ],
    ans: 2,
    expl: "As fronteiras foram traçadas segundo os interesses europeus, separando povos aparentados e reunindo grupos rivais. Essas divisões estão na raiz de vários conflitos pós-independência."
  },
  {
    id: "hum-073", disc: "História Geral", tema: "Século XIX",
    text: "O imperialismo (neocolonialismo) do século XIX diferenciou-se do colonialismo dos séculos XVI–XVIII principalmente por estar ligado:",
    opts: [
      "À procura exclusiva de metais preciosos",
      "À expansão do cristianismo como único objetivo",
      "Ao fim do capitalismo europeu",
      "À busca de matérias-primas, mercados consumidores e áreas de investimento para economias industrializadas",
      "À fuga de populações europeias da peste"
    ],
    ans: 3,
    expl: "A Segunda Revolução Industrial exigia insumos e mercados. Justificativas como o darwinismo social e a “missão civilizadora” legitimaram a dominação da África e da Ásia."
  },
  {
    id: "hum-074", disc: "História Geral", tema: "Século XIX",
    text: "Karl Marx e Friedrich Engels publicaram em 1848 o “Manifesto Comunista”, no qual afirmavam que a história de todas as sociedades até então era a história:",
    opts: [
      "Do progresso contínuo da razão",
      "Da vontade divina",
      "Da luta de classes",
      "Da competição entre nações",
      "Da evolução biológica das raças"
    ],
    ans: 2,
    expl: "Para Marx e Engels, o conflito entre classes (como burguesia e proletariado) move a história. O manifesto conclamava: “Proletários de todos os países, uni-vos!”."
  },
  {
    id: "hum-075", disc: "História Geral", tema: "Século XIX",
    text: "As unificações da Itália e da Alemanha, concluídas em 1870–1871, foram impulsionadas:",
    opts: [
      "Pela Igreja, que desejava um império católico europeu",
      "Pela Inglaterra, que pretendia anexar os dois territórios",
      "Pela Revolução Russa",
      "Pelo fim do capitalismo europeu",
      "Pelo nacionalismo e pelo interesse de burguesias na formação de mercados nacionais"
    ],
    ans: 4,
    expl: "Lideradas pelo Piemonte (Cavour, Garibaldi) e pela Prússia (Bismarck), as unificações criaram Estados fortes. A Alemanha unificada logo se tornou potência industrial, alterando o equilíbrio europeu."
  },
  {
    id: "hum-076", disc: "História Geral", tema: "Primeira Guerra Mundial",
    text: "Entre as causas da Primeira Guerra Mundial (1914–1918), destacam-se:",
    opts: [
      "A crise de 1929 e a ascensão do nazismo",
      "Disputas imperialistas, nacionalismos, corrida armamentista e sistema de alianças",
      "A Guerra Fria entre EUA e URSS",
      "A independência das colônias africanas",
      "A Revolução Francesa e as guerras napoleônicas"
    ],
    ans: 1,
    expl: "Tríplice Aliança e Tríplice Entente rivalizavam por mercados e colônias. O assassinato do arquiduque Francisco Ferdinando, em Sarajevo, foi o estopim de um conflito já preparado por essas tensões."
  },
  {
    id: "hum-077", disc: "História Geral", tema: "Primeira Guerra Mundial",
    text: "O Tratado de Versalhes (1919), que encerrou a Primeira Guerra, impôs à Alemanha:",
    opts: [
      "A anexação da França ao território alemão",
      "Perda de territórios, redução do exército e pesadas indenizações de guerra",
      "O controle sobre as colônias inglesas",
      "O comando da Liga das Nações",
      "A unificação com a Áustria-Hungria"
    ],
    ans: 1,
    expl: "Considerada culpada pela guerra, a Alemanha sofreu duras punições. O ressentimento e a crise econômica posterior foram explorados pelo nazismo nos anos 1930."
  },
  {
    id: "hum-078", disc: "História Geral", tema: "Revolução Russa",
    text: "Em outubro de 1917, os bolcheviques, liderados por Lênin, tomaram o poder na Rússia com o lema:",
    opts: [
      "“Liberdade, igualdade e fraternidade”",
      "“Ordem e progresso”",
      "“Deus, pátria e família”",
      "“Paz, terra e pão”",
      "“Um povo, um império, um líder”"
    ],
    ans: 3,
    expl: "O lema prometia retirar a Rússia da Primeira Guerra, distribuir terras aos camponeses e acabar com a fome. Após a revolução, formou-se a União Soviética (1922)."
  },
  {
    id: "hum-079", disc: "História Geral", tema: "Entreguerras",
    text: "A Crise de 1929, iniciada com a quebra da Bolsa de Nova York, foi causada em grande parte por:",
    opts: [
      "Escassez de mercadorias nos Estados Unidos",
      "Superprodução, especulação financeira e queda do consumo",
      "Guerra entre Estados Unidos e União Soviética",
      "Excesso de intervenção do Estado na economia",
      "Fim do padrão-ouro na Inglaterra em 1900"
    ],
    ans: 1,
    expl: "Nos anos 1920, a produção norte-americana cresceu mais que a capacidade de consumo, enquanto ações eram compradas a crédito. O colapso gerou desemprego em massa e se espalhou pelo mundo."
  },
  {
    id: "hum-080", disc: "História Geral", tema: "Entreguerras",
    text: "O New Deal, implementado pelo presidente Franklin Roosevelt após a Crise de 1929, baseava-se em:",
    opts: [
      "Redução total dos gastos públicos e do papel do Estado",
      "Forte intervenção do Estado na economia, com obras públicas e programas sociais",
      "Coletivização das terras agrícolas",
      "Proibição de sindicatos",
      "Retorno ao padrão mercantilista"
    ],
    ans: 1,
    expl: "Inspirado em ideias próximas às de Keynes, o New Deal gerou empregos com obras públicas, criou seguro-desemprego e previdência e regulou o sistema financeiro."
  },
  {
    id: "hum-081", disc: "História Geral", tema: "Entreguerras",
    text: "O nazismo e o fascismo compartilhavam características como:",
    opts: [
      "Defesa da democracia liberal e do pluripartidarismo",
      "Totalitarismo, nacionalismo extremo, culto ao líder e perseguição aos opositores",
      "Internacionalismo proletário e fim do Estado",
      "Pacifismo e redução das forças armadas",
      "Respeito às minorias e liberdade de imprensa"
    ],
    ans: 1,
    expl: "Mussolini (Itália) e Hitler (Alemanha) instauraram regimes de partido único, com propaganda massiva, militarismo e repressão. O nazismo acrescentou o racismo e o antissemitismo como base, que culminaram no Holocausto."
  },
  {
    id: "hum-082", disc: "História Geral", tema: "Segunda Guerra Mundial",
    text: "O Holocausto, durante a Segunda Guerra Mundial, foi:",
    opts: [
      "Uma batalha naval entre Japão e Estados Unidos",
      "Um acordo de paz entre Alemanha e União Soviética",
      "O bombardeio atômico de Hiroshima e Nagasaki",
      "O extermínio sistemático de cerca de seis milhões de judeus, além de ciganos, homossexuais e outros grupos, pelo regime nazista",
      "A divisão da Alemanha após a guerra"
    ],
    ans: 3,
    expl: "O genocídio foi organizado pelo Estado nazista com campos de concentração e de extermínio, como Auschwitz. O Tribunal de Nuremberg julgou líderes nazistas por crimes contra a humanidade."
  },
  {
    id: "hum-083", disc: "História Geral", tema: "Segunda Guerra Mundial",
    text: "Ao final da Segunda Guerra Mundial, em 1945, foi criada a Organização das Nações Unidas (ONU) com o objetivo de:",
    opts: [
      "Organizar a ocupação militar da União Soviética",
      "Substituir os governos nacionais por um governo mundial",
      "Administrar as colônias africanas",
      "Garantir a hegemonia econômica da Alemanha",
      "Manter a paz e a segurança internacionais e promover a cooperação entre os países"
    ],
    ans: 4,
    expl: "A ONU sucedeu a fracassada Liga das Nações. Em 1948, aprovou a Declaração Universal dos Direitos Humanos. Seu Conselho de Segurança tem cinco membros permanentes com poder de veto."
  },
  {
    id: "hum-084", disc: "História Geral", tema: "Guerra Fria",
    text: "A Guerra Fria (1947–1991) caracterizou-se por:",
    opts: [
      "Guerra declarada entre Estados Unidos e União Soviética no território europeu",
      "Aliança permanente entre capitalistas e socialistas",
      "Disputa ideológica, econômica e militar entre EUA e URSS, sem confronto direto entre eles",
      "Disputa entre Inglaterra e França pelas colônias africanas",
      "Conflito religioso entre católicos e protestantes"
    ],
    ans: 2,
    expl: "As superpotências disputaram influência por meio de corrida armamentista e espacial, propaganda e guerras indiretas, como as da Coreia e do Vietnã, sob a ameaça constante de um conflito nuclear."
  },
  {
    id: "hum-085", disc: "História Geral", tema: "Guerra Fria",
    text: "O Muro de Berlim, construído em 1961 e derrubado em 1989, simbolizava:",
    opts: [
      "A fronteira entre a Alemanha e a França",
      "A separação entre católicos e protestantes",
      "A divisão do mundo entre os blocos capitalista e socialista",
      "O fim da Primeira Guerra Mundial",
      "A resistência alemã à ocupação napoleônica"
    ],
    ans: 2,
    expl: "O muro foi erguido pela Alemanha Oriental para impedir a fuga de pessoas para Berlim Ocidental. Sua queda, em 1989, antecedeu a reunificação alemã (1990) e o fim da URSS (1991)."
  },
  {
    id: "hum-086", disc: "História Geral", tema: "Guerra Fria",
    text: "O Plano Marshall, lançado pelos EUA em 1947, consistia em:",
    opts: [
      "Um acordo militar para invadir a União Soviética",
      "Um programa de colonização da África",
      "Ajuda econômica para reconstruir a Europa Ocidental e conter a influência soviética",
      "A divisão da Coreia em dois países",
      "A corrida espacial para chegar à Lua"
    ],
    ans: 2,
    expl: "Bilhões de dólares foram destinados à reconstrução de países europeus. Além de recuperar economias e mercados para os EUA, o plano buscava evitar o avanço de partidos comunistas."
  },
  {
    id: "hum-087", disc: "História Geral", tema: "Guerra Fria",
    text: "A Revolução Cubana (1959), liderada por Fidel Castro, aproximou-se da União Soviética. Um dos momentos mais tensos dessa relação foi:",
    opts: [
      "A construção do Muro de Berlim em Havana",
      "A invasão soviética dos Estados Unidos",
      "A entrada de Cuba na OTAN",
      "A Crise dos Mísseis, em 1962, quando a URSS instalou mísseis nucleares em Cuba",
      "A Guerra do Vietnã travada no Caribe"
    ],
    ans: 3,
    expl: "A descoberta de mísseis soviéticos em Cuba levou o mundo à beira de uma guerra nuclear. A crise foi resolvida com a retirada dos mísseis em troca do compromisso dos EUA de não invadir a ilha."
  },
  {
    id: "hum-088", disc: "História Geral", tema: "Guerra Fria",
    text: "As ditaduras militares instaladas na América Latina entre as décadas de 1960 e 1980 (Brasil, Chile, Argentina, Uruguai) tiveram em comum:",
    opts: [
      "O apoio da União Soviética e a implantação do socialismo",
      "A realização de eleições livres e diretas",
      "O alinhamento aos EUA no contexto da Guerra Fria e a repressão violenta a opositores",
      "A neutralidade em relação à Guerra Fria",
      "A ampliação da liberdade de imprensa"
    ],
    ans: 2,
    expl: "Justificadas pelo combate ao comunismo, essas ditaduras contaram com apoio norte-americano e chegaram a cooperar entre si na repressão, por meio da Operação Condor."
  },
  {
    id: "hum-089", disc: "História Geral", tema: "Descolonização",
    text: "A independência da Índia, em 1947, teve como principal liderança Mahatma Gandhi, que defendia:",
    opts: [
      "A resistência pacífica e a desobediência civil contra o domínio britânico",
      "A luta armada contra todas as potências europeias",
      "A permanência da Índia como colônia inglesa",
      "A anexação da Índia pela União Soviética",
      "A divisão da Índia em reinos feudais"
    ],
    ans: 0,
    expl: "Gandhi liderou boicotes, marchas (como a Marcha do Sal) e greves sem violência. A independência veio acompanhada da partição entre Índia e Paquistão, com conflitos entre hindus e muçulmanos."
  },
  {
    id: "hum-090", disc: "História Geral", tema: "Descolonização",
    text: "O apartheid, regime vigente na África do Sul entre 1948 e o início dos anos 1990, consistia em:",
    opts: [
      "Igualdade jurídica entre todos os grupos étnicos",
      "Segregação racial institucionalizada, que garantia privilégios à minoria branca",
      "Um governo socialista de partido único",
      "Uma monarquia parlamentar aliada ao Reino Unido",
      "Uma política de incentivo à imigração asiática"
    ],
    ans: 1,
    expl: "Leis separavam brancos e negros em moradia, educação, transporte e direitos políticos. Após forte resistência interna e pressão internacional, o regime acabou, e Nelson Mandela foi eleito presidente em 1994."
  },
  {
    id: "hum-091", disc: "História Geral", tema: "Mundo contemporâneo",
    text: "A dissolução da União Soviética, em 1991, foi precedida pelas reformas de Mikhail Gorbachev, conhecidas como:",
    opts: [
      "New Deal e Plano Marshall",
      "Revolução Cultural e Grande Salto Adiante",
      "Perestroika (reestruturação econômica) e Glasnost (abertura política)",
      "Nova Política Econômica e coletivização",
      "Doutrina Truman e Macarthismo"
    ],
    ans: 2,
    expl: "Gorbachev tentou modernizar a economia e ampliar a transparência política. As reformas, porém, aceleraram a crise do regime, as independências das repúblicas e o fim da URSS."
  },
  {
    id: "hum-092", disc: "História Geral", tema: "Mundo contemporâneo",
    text: "O processo de globalização intensificado após o fim da Guerra Fria caracteriza-se por:",
    opts: [
      "Integração de mercados, fluxo intenso de capitais e informações e expansão de empresas transnacionais",
      "Fechamento das economias nacionais e fim do comércio internacional",
      "Redução do uso de tecnologias de comunicação",
      "Fim das desigualdades entre os países",
      "Volta ao mercantilismo e ao pacto colonial"
    ],
    ans: 0,
    expl: "Avanços em transportes e telecomunicações aceleraram trocas econômicas e culturais. A globalização, porém, é desigual: concentra riquezas e pode aprofundar a exclusão de regiões e grupos."
  },
  {
    id: "hum-093", disc: "História Geral", tema: "Mundo contemporâneo",
    text: "Os atentados de 11 de setembro de 2001, nos Estados Unidos, tiveram como consequência:",
    opts: [
      "O fim imediato da OTAN",
      "A dissolução da ONU",
      "A chamada “guerra ao terror”, com as invasões do Afeganistão e do Iraque",
      "A reunificação da Alemanha",
      "O início da Guerra Fria"
    ],
    ans: 2,
    expl: "Após os ataques da Al-Qaeda, os EUA invadiram o Afeganistão (2001) e, sob a alegação não comprovada de armas de destruição em massa, o Iraque (2003), além de ampliarem medidas de vigilância."
  },

  // ══════════ GEOGRAFIA ══════════
  {
    id: "hum-094", disc: "Geografia", tema: "Cartografia",
    text: "Em um mapa com escala 1:50.000, a distância entre duas cidades é de 8 cm. A distância real entre elas é:",
    opts: ["400 m", "4 km", "40 km", "400 km", "4.000 km"],
    ans: 1,
    expl: "Na escala 1:50.000, 1 cm no mapa equivale a 50.000 cm no real. Logo, 8 cm = 400.000 cm = 4.000 m = 4 km."
  },
  {
    id: "hum-095", disc: "Geografia", tema: "Cartografia",
    text: "Comparando um mapa na escala 1:10.000 com outro na escala 1:1.000.000, é correto afirmar que o primeiro:",
    opts: [
      "Tem escala menor e mostra uma área maior com menos detalhes",
      "Representa obrigatoriamente o mundo inteiro",
      "Não pode ser usado para planejamento urbano",
      "Possui as mesmas características do segundo",
      "Tem escala maior e mostra mais detalhes de uma área menor"
    ],
    ans: 4,
    expl: "Quanto menor o denominador, maior a escala. O mapa 1:10.000 representa uma área pequena com muitos detalhes (útil para bairros e cidades); o 1:1.000.000 cobre áreas extensas com menos detalhes."
  },
  {
    id: "hum-096", disc: "Geografia", tema: "Cartografia",
    text: "A Terra gira 360° em aproximadamente 24 horas, o que define fusos horários de 15° cada. Se em Brasília (UTC−3) são 10h, em Londres (UTC+0), no mesmo instante, são:",
    opts: ["7h", "10h", "12h", "13h", "15h"],
    ans: 3,
    expl: "Londres está 3 fusos a leste de Brasília. Como a Terra gira de oeste para leste, as horas são adiantadas a leste: 10h + 3h = 13h."
  },
  {
    id: "hum-097", disc: "Geografia", tema: "Cartografia",
    text: "As coordenadas geográficas são formadas por latitude e longitude. A latitude corresponde à distância angular de um ponto em relação:",
    opts: [
      "À Linha do Equador, variando de 0° a 90° norte ou sul",
      "Ao Meridiano de Greenwich, variando de 0° a 180° leste ou oeste",
      "Ao nível do mar, medida em metros",
      "Ao Trópico de Capricórnio, variando de 0° a 23° norte",
      "Ao Polo Norte, variando de 0° a 360°"
    ],
    ans: 0,
    expl: "A latitude é medida a partir do Equador (0°) até os polos (90° N ou S). A longitude é medida a partir do Meridiano de Greenwich (0°) até 180° L ou O."
  },
  {
    id: "hum-098", disc: "Geografia", tema: "Cartografia",
    text: "A projeção de Mercator, muito usada em navegação, tem como característica:",
    opts: [
      "Conservar as áreas, distorcendo as formas dos continentes",
      "Conservar os ângulos (conforme), mas exagerar as áreas próximas aos polos",
      "Representar o mundo sem nenhuma distorção",
      "Colocar o hemisfério sul na parte superior do mapa",
      "Ser uma projeção azimutal centrada no Polo Norte"
    ],
    ans: 1,
    expl: "Na projeção cilíndrica de Mercator, a Groenlândia parece do tamanho da África, embora seja cerca de 14 vezes menor. A projeção de Peters, por outro lado, preserva as proporções das áreas."
  },
  {
    id: "hum-099", disc: "Geografia", tema: "Geologia e relevo",
    text: "A teoria da tectônica de placas explica fenômenos como terremotos e vulcanismo. Esses fenômenos são mais frequentes:",
    opts: [
      "Nas bordas das placas tectônicas, como no Círculo de Fogo do Pacífico",
      "No centro das placas, longe de suas bordas",
      "Exclusivamente nas regiões polares",
      "Apenas em áreas de planície sedimentar",
      "Nas regiões de clima equatorial"
    ],
    ans: 0,
    expl: "O encontro entre placas (convergentes, divergentes ou transformantes) concentra tensões. O Brasil está no centro da Placa Sul-Americana, por isso tem poucos tremores e nenhum vulcão ativo."
  },
  {
    id: "hum-100", disc: "Geografia", tema: "Geologia e relevo",
    text: "A Cordilheira dos Andes formou-se a partir:",
    opts: [
      "Da erosão de antigos planaltos pelo vento",
      "Do afastamento entre as placas Africana e Sul-Americana",
      "Da deposição de sedimentos trazidos pelo rio Amazonas",
      "Da convergência entre a Placa de Nazca e a Placa Sul-Americana",
      "Do impacto de meteoritos no período Jurássico"
    ],
    ans: 3,
    expl: "A Placa de Nazca (oceânica, mais densa) mergulha sob a Sul-Americana (subducção), dobrando a crosta e gerando dobramentos modernos, vulcões e terremotos frequentes no Chile e no Peru."
  },
  {
    id: "hum-101", disc: "Geografia", tema: "Geologia e relevo",
    text: "O relevo brasileiro é formado predominantemente por planaltos e depressões, com altitudes modestas. Isso se explica principalmente por:",
    opts: [
      "Intensa atividade vulcânica recente",
      "Choque recente entre placas tectônicas no território",
      "Estruturas geológicas antigas e longo desgaste por agentes erosivos",
      "Glaciações que cobriram todo o país",
      "Ausência total de chuvas ao longo da história geológica"
    ],
    ans: 2,
    expl: "O território brasileiro está sobre escudos cristalinos e bacias sedimentares muito antigos. Sem dobramentos modernos, o relevo foi desgastado por milhões de anos de erosão."
  },
  {
    id: "hum-102", disc: "Geografia", tema: "Geologia e relevo",
    text: "Os agentes externos do relevo (chuva, vento, rios, seres vivos) atuam principalmente:",
    opts: [
      "Desgastando, transportando e depositando materiais, modelando as formas da superfície",
      "Criando cordilheiras por meio de dobramentos",
      "Provocando terremotos e erupções vulcânicas",
      "Movimentando as placas tectônicas",
      "Aumentando a altitude das montanhas"
    ],
    ans: 0,
    expl: "Os agentes internos (tectonismo, vulcanismo) constroem o relevo; os externos (intemperismo e erosão) o esculpem. É a ação contínua desses dois conjuntos que define as paisagens."
  },
  {
    id: "hum-103", disc: "Geografia", tema: "Solos",
    text: "As voçorocas, comuns em áreas desmatadas do Brasil, são:",
    opts: [
      "Grandes sulcos no solo causados pela erosão das águas pluviais",
      "Formações rochosas criadas por vulcões",
      "Depósitos de areia trazidos pelo vento",
      "Lagos formados em áreas de garimpo",
      "Áreas de solo fértil nas várzeas dos rios"
    ],
    ans: 0,
    expl: "Sem cobertura vegetal, a água da chuva escoa com força, abrindo ravinas que podem evoluir para voçorocas, que chegam a dezenas de metros de profundidade e destroem terras agrícolas e estradas."
  },
  {
    id: "hum-104", disc: "Geografia", tema: "Clima",
    text: "Cidades grandes costumam registrar temperaturas mais altas que as áreas rurais ao redor. Esse fenômeno, chamado ilha de calor, é causado por:",
    opts: [
      "Maior proximidade das cidades em relação ao Sol",
      "Concentração de asfalto e concreto, pouca vegetação e intensa emissão de calor por veículos e indústrias",
      "Excesso de áreas verdes e corpos d'água urbanos",
      "Ausência de poluição atmosférica nas metrópoles",
      "Ocorrência de chuvas mais frequentes no campo"
    ],
    ans: 1,
    expl: "Materiais urbanos absorvem e liberam calor, a impermeabilização reduz a evaporação e a vegetação escassa diminui o sombreamento. Mais arborização e áreas permeáveis amenizam o problema."
  },
  {
    id: "hum-105", disc: "Geografia", tema: "Clima",
    text: "A inversão térmica, comum no inverno em cidades como São Paulo, agrava a poluição porque:",
    opts: [
      "O ar quente sobe rapidamente, levando os poluentes para a estratosfera",
      "As chuvas intensas lavam a atmosfera",
      "Os ventos fortes concentram a poluição nas áreas rurais",
      "Uma camada de ar quente se sobrepõe ao ar frio junto ao solo, impedindo a dispersão dos poluentes",
      "A camada de ozônio absorve todos os poluentes"
    ],
    ans: 3,
    expl: "Normalmente o ar próximo ao solo é mais quente e sobe, dispersando poluentes. Na inversão, o ar frio e denso fica preso embaixo da camada quente, acumulando fumaça e gases."
  },
  {
    id: "hum-106", disc: "Geografia", tema: "Clima",
    text: "O efeito estufa é um fenômeno natural fundamental para a vida na Terra. O problema ambiental atual está relacionado:",
    opts: [
      "À destruição completa do efeito estufa natural",
      "Ao resfriamento global causado pelo excesso de oxigênio",
      "À diminuição da concentração de gás carbônico na atmosfera",
      "À ação exclusiva dos vulcões ativos",
      "À intensificação desse efeito pela emissão de gases como CO₂ e metano por atividades humanas"
    ],
    ans: 4,
    expl: "Sem o efeito estufa, a temperatura média do planeta seria cerca de −18 °C. A queima de combustíveis fósseis, o desmatamento e a pecuária intensificam o fenômeno, provocando o aquecimento global."
  },
  {
    id: "hum-107", disc: "Geografia", tema: "Clima",
    text: "A chuva ácida é causada principalmente:",
    opts: [
      "Pelo excesso de oxigênio na atmosfera",
      "Pela evaporação da água dos oceanos",
      "Pela emissão de óxidos de enxofre e de nitrogênio na queima de combustíveis fósseis",
      "Pelo uso de energia solar e eólica",
      "Pela respiração das plantas durante a noite"
    ],
    ans: 2,
    expl: "Esses óxidos reagem com o vapor d'água formando ácidos sulfúrico e nítrico. A chuva ácida corrói monumentos, acidifica solos e rios e prejudica a vegetação, podendo atingir áreas distantes das fontes poluidoras."
  },
  {
    id: "hum-108", disc: "Geografia", tema: "Clima",
    text: "O fenômeno El Niño, caracterizado pelo aquecimento anormal das águas do Pacífico Equatorial, costuma provocar no Brasil:",
    opts: [
      "Neve em todo o litoral brasileiro",
      "Aumento das chuvas no Sertão nordestino",
      "Fim das estações do ano no país",
      "Furacões frequentes no Sudeste",
      "Secas no Norte e no Nordeste e chuvas acima da média no Sul"
    ],
    ans: 4,
    expl: "O El Niño altera a circulação atmosférica: inibe chuvas no Norte e no Nordeste, agravando secas, e intensifica as chuvas na Região Sul. A La Niña tende a provocar efeitos opostos."
  },
  {
    id: "hum-109", disc: "Geografia", tema: "Clima",
    text: "O clima semiárido, predominante no Sertão nordestino, caracteriza-se por:",
    opts: [
      "Chuvas abundantes e bem distribuídas ao longo do ano",
      "Invernos rigorosos com ocorrência de neve",
      "Chuvas escassas e irregulares e temperaturas elevadas o ano todo",
      "Temperaturas baixas e alta umidade",
      "Influência constante da massa Polar Atlântica"
    ],
    ans: 2,
    expl: "Com menos de 800 mm de chuva por ano, concentrados em poucos meses, e alta evaporação, o semiárido enfrenta longos períodos de estiagem. A Caatinga é a vegetação adaptada a esse clima."
  },
  {
    id: "hum-110", disc: "Geografia", tema: "Clima",
    text: "As chuvas orográficas (ou de relevo) ocorrem quando:",
    opts: [
      "O ar quente sobe por convecção em dias de verão sem nuvens",
      "Massas de ar frias e quentes se encontram no oceano",
      "O vento desce a encosta de uma montanha e aquece",
      "Massas de ar úmidas encontram uma serra, sobem, resfriam-se e o vapor se condensa",
      "A umidade do ar diminui drasticamente"
    ],
    ans: 3,
    expl: "É o caso da Serra do Mar: a umidade vinda do oceano é forçada a subir, provocando chuvas abundantes na encosta voltada para o mar. A outra vertente tende a ser mais seca (sombra de chuva)."
  },
  {
    id: "hum-111", disc: "Geografia", tema: "Biomas",
    text: "A Caatinga, bioma exclusivamente brasileiro, apresenta vegetação com adaptações à seca, como:",
    opts: [
      "Perda das folhas na estação seca, raízes profundas e caules que armazenam água",
      "Folhas largas e permanentes durante todo o ano",
      "Árvores de grande porte com copas fechadas",
      "Raízes respiratórias adaptadas a solos alagados",
      "Vegetação rasteira típica de climas frios"
    ],
    ans: 0,
    expl: "Plantas caducifólias, cactáceas (como o mandacaru) e espécies com raízes profundas reduzem a perda e aumentam a captação de água. Na estação seca a paisagem fica esbranquiçada, origem do nome tupi “mata branca”."
  },
  {
    id: "hum-112", disc: "Geografia", tema: "Biomas",
    text: "O Cerrado é chamado de “berço das águas” do Brasil porque:",
    opts: [
      "É o bioma com maior índice de chuvas do país",
      "Abriga nascentes de importantes bacias hidrográficas e áreas de recarga de aquíferos",
      "Fica inteiramente no litoral brasileiro",
      "É cortado pelo rio Amazonas em toda a sua extensão",
      "Não possui estação seca definida"
    ],
    ans: 1,
    expl: "No Planalto Central nascem rios das bacias Amazônica, do São Francisco e do Paraná, e há áreas de recarga do Aquífero Guarani. A expansão agropecuária ameaça esse papel hidrológico."
  },
  {
    id: "hum-113", disc: "Geografia", tema: "Biomas",
    text: "A Mata Atlântica é o bioma brasileiro mais devastado, restando cerca de 12% de sua cobertura original. Isso se explica porque:",
    opts: [
      "Está localizada em áreas desabitadas do interior",
      "Ocupa a área de colonização mais antiga e de maior concentração populacional e urbana do país",
      "Foi destruída por fenômenos naturais como vulcões",
      "Nunca foi explorada economicamente",
      "Ocupa apenas áreas de clima desértico"
    ],
    ans: 1,
    expl: "Desde o pau-brasil, passando pela cana, pelo café e pela urbanização, a faixa litorânea concentrou a ocupação. Mesmo fragmentada, a Mata Atlântica abriga enorme biodiversidade e protege mananciais de grandes cidades."
  },
  {
    id: "hum-114", disc: "Geografia", tema: "Biomas",
    text: "O Pantanal, maior planície alagável do mundo, tem sua dinâmica ecológica definida principalmente:",
    opts: [
      "Pela ocorrência de neve no inverno",
      "Pelo ciclo anual de cheias e vazantes",
      "Pela ausência de rios em seu território",
      "Pela vegetação exclusivamente de tundra",
      "Pela influência do clima semiárido nordestino"
    ],
    ans: 1,
    expl: "Na estação chuvosa, os rios transbordam e inundam vastas áreas; na seca, as águas recuam. Esse pulso de inundação sustenta a alta concentração de fauna. Queimadas e mudanças no Cerrado vizinho ameaçam o bioma."
  },
  {
    id: "hum-115", disc: "Geografia", tema: "Biomas",
    text: "A Floresta Amazônica tem papel importante na regulação climática da América do Sul. Os chamados “rios voadores” são:",
    opts: [
      "Rios subterrâneos que atravessam o continente",
      "Rios que mudam de curso durante as cheias",
      "Fluxos de umidade transportados pela atmosfera, gerados em grande parte pela transpiração da floresta",
      "Correntes marítimas que contornam o litoral norte",
      "Cachoeiras localizadas nos planaltos amazônicos"
    ],
    ans: 2,
    expl: "A evapotranspiração da floresta lança enormes quantidades de vapor, levado pelos ventos até o Centro-Oeste, o Sudeste e o Sul, contribuindo para as chuvas dessas regiões. O desmatamento ameaça esse sistema."
  },
  {
    id: "hum-116", disc: "Geografia", tema: "Hidrografia",
    text: "O Aquífero Guarani, um dos maiores reservatórios de água subterrânea do mundo, estende-se pelo território:",
    opts: [
      "Apenas da Região Norte do Brasil",
      "Do Brasil, da Argentina, do Paraguai e do Uruguai",
      "Do Brasil, da Venezuela e da Colômbia",
      "Do Chile e da Bolívia",
      "Exclusivamente do estado do Amazonas"
    ],
    ans: 1,
    expl: "A maior parte do aquífero está sob o território brasileiro (Centro-Oeste, Sudeste e Sul). Sua gestão compartilhada é importante, pois áreas de recarga estão sujeitas à contaminação por agrotóxicos."
  },
  {
    id: "hum-117", disc: "Geografia", tema: "Hidrografia",
    text: "O rio São Francisco é chamado de “rio da integração nacional” porque:",
    opts: [
      "Nasce na Amazônia e deságua no Rio da Prata",
      "É o único rio navegável da América do Sul",
      "Separa o Brasil da Argentina",
      "Abastece exclusivamente a cidade de São Paulo",
      "Liga o Sudeste ao Nordeste, atravessando áreas do semiárido, onde é fonte de água e energia"
    ],
    ans: 4,
    expl: "Nascendo na Serra da Canastra (MG), o rio atravessa Bahia, Pernambuco, Alagoas e Sergipe. É perene mesmo cruzando o semiárido, abastecendo cidades, irrigação e hidrelétricas como Sobradinho e Xingó."
  },
  {
    id: "hum-118", disc: "Geografia", tema: "Hidrografia",
    text: "A Bacia do Paraná concentra o maior aproveitamento hidrelétrico do Brasil, incluindo Itaipu. Isso ocorre porque:",
    opts: [
      "Seus rios correm em planícies sem nenhuma queda-d'água",
      "Seus rios são de planalto, com desníveis favoráveis, e estão próximos dos maiores centros consumidores",
      "É a bacia com maior volume de água do mundo",
      "Está totalmente localizada no semiárido",
      "Não há cidades em suas margens"
    ],
    ans: 1,
    expl: "Rios de planalto possuem quedas e corredeiras que favorecem a geração de energia, e a proximidade do Centro-Sul industrializado reduz custos de transmissão. A Bacia Amazônica tem potencial maior, mas está longe dos centros de consumo."
  },
  {
    id: "hum-119", disc: "Geografia", tema: "População",
    text: "A transição demográfica brasileira nas últimas décadas tem resultado em:",
    opts: [
      "Aumento das taxas de fecundidade e rejuvenescimento da população",
      "Crescimento acelerado da mortalidade infantil",
      "Fim da migração interna",
      "Queda da natalidade e envelhecimento da população",
      "Pirâmide etária com base cada vez mais larga"
    ],
    ans: 3,
    expl: "Com urbanização, acesso a métodos contraceptivos e inserção feminina no mercado de trabalho, a fecundidade caiu para menos de 2 filhos por mulher. A pirâmide etária estreita na base e alarga no topo."
  },
  {
    id: "hum-120", disc: "Geografia", tema: "População",
    text: "O chamado “bônus demográfico” corresponde a um período em que:",
    opts: [
      "A maior parte da população é composta por idosos",
      "A natalidade é muito maior que a mortalidade infantil",
      "Não há população economicamente ativa",
      "Ocorre grande emigração de jovens para o exterior",
      "A população em idade ativa é proporcionalmente maior que a de crianças e idosos"
    ],
    ans: 4,
    expl: "Com menos dependentes, o país tem oportunidade de crescer economicamente, desde que gere empregos e invista em educação. O Brasil vive o fim desse período, o que traz desafios para a previdência."
  },
  {
    id: "hum-121", disc: "Geografia", tema: "População",
    text: "O êxodo rural intenso no Brasil entre as décadas de 1950 e 1980 teve como causas principais:",
    opts: [
      "A distribuição de terras a pequenos agricultores",
      "A desindustrialização das grandes cidades",
      "O aumento dos empregos no campo",
      "A proibição da agricultura pelo governo",
      "A mecanização do campo, a concentração fundiária e a atração exercida pela industrialização urbana"
    ],
    ans: 4,
    expl: "A modernização agrícola dispensou trabalhadores, e a concentração de terras dificultava a permanência no campo. As cidades industriais, sobretudo do Sudeste, atraíram migrantes, muitos vindos do Nordeste."
  },
  {
    id: "hum-122", disc: "Geografia", tema: "Urbanização",
    text: "A conurbação é um fenômeno urbano que ocorre quando:",
    opts: [
      "Uma cidade perde população para o campo",
      "Uma área rural é transformada em reserva ambiental",
      "Um município é dividido em dois",
      "Uma cidade é construída em local planejado",
      "Cidades vizinhas crescem e suas manchas urbanas se unem fisicamente"
    ],
    ans: 4,
    expl: "Na conurbação, deixa de haver separação visível entre os municípios, como ocorre entre São Paulo e as cidades do ABC. Isso exige gestão integrada de transporte, saneamento e habitação."
  },
  {
    id: "hum-123", disc: "Geografia", tema: "Urbanização",
    text: "A segregação socioespacial nas cidades brasileiras pode ser observada:",
    opts: [
      "Na concentração da população pobre em periferias e favelas com pouca infraestrutura, enquanto áreas centrais concentram serviços",
      "Na distribuição igualitária de serviços públicos em todos os bairros",
      "Na ausência de condomínios fechados nas grandes cidades",
      "Na proibição de moradias em áreas de risco",
      "No fato de todas as pessoas morarem próximo ao local de trabalho"
    ],
    ans: 0,
    expl: "O alto preço da terra urbana empurra a população de baixa renda para áreas distantes ou de risco, com longos deslocamentos diários. Já os grupos de alta renda concentram-se em áreas bem servidas."
  },
  {
    id: "hum-124", disc: "Geografia", tema: "Urbanização",
    text: "A impermeabilização do solo urbano, com asfalto e concreto, contribui diretamente para:",
    opts: [
      "O aumento da recarga dos aquíferos",
      "A redução das temperaturas nas cidades",
      "Enchentes, pois a água da chuva não infiltra e escoa rapidamente para os rios e galerias",
      "O fim da erosão nas encostas",
      "A diminuição das ilhas de calor"
    ],
    ans: 2,
    expl: "Sem áreas permeáveis, a água das chuvas escoa superficialmente em grande volume e velocidade. Canalização de rios e ocupação de várzeas agravam o problema. Parques lineares e pisos permeáveis são algumas soluções."
  },
  {
    id: "hum-125", disc: "Geografia", tema: "Urbanização",
    text: "Uma megalópole é formada quando:",
    opts: [
      "Uma cidade ultrapassa 1 milhão de habitantes",
      "Uma capital é transferida para o interior",
      "Uma cidade é tombada como patrimônio histórico",
      "Um vilarejo rural recebe indústrias",
      "Duas ou mais metrópoles e suas áreas de influência se integram em uma grande região urbanizada"
    ],
    ans: 4,
    expl: "Exemplo clássico é a faixa Boston–Washington, nos EUA. No Brasil, o eixo Rio–São Paulo, com cidades do Vale do Paraíba e da Baixada Santista, forma uma megalópole em consolidação."
  },
  {
    id: "hum-126", disc: "Geografia", tema: "Agropecuária",
    text: "A Revolução Verde, difundida a partir dos anos 1960, introduziu na agricultura:",
    opts: [
      "Técnicas de cultivo orgânico sem uso de insumos",
      "Sementes melhoradas, fertilizantes químicos, agrotóxicos e mecanização",
      "A proibição da monocultura",
      "A distribuição de terras aos camponeses",
      "O retorno ao trabalho exclusivamente manual"
    ],
    ans: 1,
    expl: "O pacote tecnológico aumentou a produtividade, mas também elevou a dependência de insumos, a contaminação ambiental e o endividamento de pequenos produtores, além de favorecer a concentração de terras."
  },
  {
    id: "hum-127", disc: "Geografia", tema: "Agropecuária",
    text: "A estrutura fundiária brasileira é marcada pela concentração de terras. Isso significa que:",
    opts: [
      "Poucos estabelecimentos de grande porte ocupam a maior parte da área agrícola",
      "A maioria das terras pertence a pequenos agricultores",
      "Todas as propriedades rurais têm o mesmo tamanho",
      "Não há latifúndios no Brasil",
      "As terras são todas de propriedade do Estado"
    ],
    ans: 0,
    expl: "Grandes estabelecimentos são minoria em número, mas concentram a maior parte da área. Essa herança colonial está na origem de conflitos no campo e de movimentos pela reforma agrária."
  },
  {
    id: "hum-128", disc: "Geografia", tema: "Agropecuária",
    text: "A agricultura familiar no Brasil tem como característica importante:",
    opts: [
      "Produzir principalmente commodities para exportação, como soja",
      "Ocupar a maior parte das terras agrícolas do país",
      "Não utilizar mão de obra da própria família",
      "Ser responsável por grande parte dos alimentos consumidos internamente, como mandioca, feijão e leite",
      "Estar concentrada exclusivamente na Região Centro-Oeste"
    ],
    ans: 3,
    expl: "Embora ocupe parcela menor das terras, a agricultura familiar responde por grande parte da produção de alimentos básicos e da ocupação no campo. O agronegócio exportador concentra-se em grãos, carnes e cana."
  },
  {
    id: "hum-129", disc: "Geografia", tema: "Agropecuária",
    text: "A expansão da fronteira agrícola em direção ao Cerrado e à Amazônia, impulsionada principalmente pela soja e pela pecuária, tem provocado:",
    opts: [
      "Desmatamento, conflitos fundiários e perda de biodiversidade",
      "Aumento das áreas de floresta nativa",
      "Fim das exportações agrícolas brasileiras",
      "Redução da produção de grãos",
      "Diminuição do uso de máquinas agrícolas"
    ],
    ans: 0,
    expl: "O avanço sobre áreas de vegetação nativa, como na região do Matopiba (MA, TO, PI, BA) e no “arco do desmatamento” amazônico, gera impactos ambientais e disputas com povos indígenas e comunidades tradicionais."
  },
  {
    id: "hum-130", disc: "Geografia", tema: "Indústria",
    text: "O modelo de produção toyotista, que substituiu em parte o fordismo, caracteriza-se por:",
    opts: [
      "Produção flexível, estoque mínimo (just in time) e trabalhadores multifuncionais",
      "Produção em massa padronizada e grandes estoques",
      "Trabalhador especializado em uma única tarefa repetitiva",
      "Ausência de tecnologia e automação",
      "Fábricas que produzem apenas para o mercado interno"
    ],
    ans: 0,
    expl: "O fordismo produzia em grande escala e de forma padronizada. O toyotismo, desenvolvido no Japão, produz conforme a demanda, reduz desperdícios e exige trabalhadores capazes de exercer várias funções."
  },
  {
    id: "hum-131", disc: "Geografia", tema: "Indústria",
    text: "Nas últimas décadas, muitas indústrias deixaram a Região Metropolitana de São Paulo e se instalaram no interior ou em outros estados. Esse processo de desconcentração industrial foi motivado por:",
    opts: [
      "Falta total de energia elétrica na capital paulista",
      "Proibição federal de indústrias em capitais",
      "Incentivos fiscais, terrenos e mão de obra mais baratos e menor atuação sindical",
      "Ausência de rodovias no interior",
      "Aumento da importância da agricultura de subsistência"
    ],
    ans: 2,
    expl: "A “guerra fiscal” entre estados e municípios, os custos elevados da metrópole e os avanços em transportes e comunicações permitiram dispersar a produção, enquanto São Paulo manteve funções de comando e serviços."
  },
  {
    id: "hum-132", disc: "Geografia", tema: "Energia",
    text: "A matriz elétrica brasileira é considerada relativamente limpa em comparação com a média mundial porque:",
    opts: [
      "É baseada principalmente em usinas a carvão mineral",
      "Utiliza energia nuclear como principal fonte",
      "Não utiliza nenhuma fonte renovável",
      "Depende exclusivamente do petróleo importado",
      "Depende majoritariamente de fontes renováveis, sobretudo a hidrelétrica"
    ],
    ans: 4,
    expl: "A maior parte da eletricidade brasileira vem de hidrelétricas, com crescimento rápido das fontes eólica e solar. Mesmo renováveis, grandes hidrelétricas causam impactos, como alagamento de áreas e deslocamento de populações."
  },
  {
    id: "hum-133", disc: "Geografia", tema: "Energia",
    text: "A energia eólica no Brasil concentra-se sobretudo na Região Nordeste porque:",
    opts: [
      "É a região com mais rios caudalosos do país",
      "Possui as maiores reservas de carvão mineral",
      "A região tem ventos constantes e intensos, especialmente no litoral e no interior da Bahia e do Rio Grande do Norte",
      "Não recebe radiação solar significativa",
      "Está protegida da ação dos ventos alísios"
    ],
    ans: 2,
    expl: "Os ventos alísios sopram com regularidade sobre o Nordeste, garantindo alto fator de capacidade. Estados como Bahia e Rio Grande do Norte lideram a produção eólica nacional."
  },
  {
    id: "hum-134", disc: "Geografia", tema: "Geopolítica",
    text: "O Mercosul, criado em 1991 pelo Tratado de Assunção, teve como membros fundadores:",
    opts: [
      "Brasil, Chile, Peru e Colômbia",
      "Brasil, Argentina, Paraguai e Uruguai",
      "Brasil, Estados Unidos, México e Canadá",
      "Argentina, Bolívia, Equador e Venezuela",
      "Brasil, Portugal, Angola e Moçambique"
    ],
    ans: 1,
    expl: "O bloco busca integrar economicamente seus membros, com redução de tarifas e uma tarifa externa comum (união aduaneira imperfeita). A Venezuela aderiu depois e está suspensa desde 2016; a Bolívia teve sua adesão aprovada mais recentemente."
  },
  {
    id: "hum-135", disc: "Geografia", tema: "Geopolítica",
    text: "A União Europeia é considerada o bloco econômico de maior grau de integração porque:",
    opts: [
      "Restringe-se a uma zona de livre comércio sem instituições comuns",
      "Foi criada apenas para fins militares",
      "Não possui parlamento nem regras comuns",
      "Além de livre circulação de mercadorias, permite a circulação de pessoas, serviços e capitais e possui moeda comum em vários países",
      "Reúne apenas países da Europa Oriental"
    ],
    ans: 3,
    expl: "A UE é um mercado comum com união econômica e monetária (o euro, adotado por parte dos membros), além de instituições supranacionais como o Parlamento Europeu. A saída do Reino Unido (Brexit) ocorreu em 2020."
  },
  {
    id: "hum-136", disc: "Geografia", tema: "Geopolítica",
    text: "O conflito israelo-palestino tem como uma de suas questões centrais:",
    opts: [
      "A disputa pelo controle do Canal do Panamá",
      "A independência da Catalunha em relação à Espanha",
      "A divisão da Coreia após a Segunda Guerra",
      "A disputa territorial e a criação de um Estado palestino, envolvendo áreas como Cisjordânia, Gaza e Jerusalém",
      "A disputa por geleiras na Antártida"
    ],
    ans: 3,
    expl: "Desde a criação de Israel (1948), as guerras, a ocupação de territórios e os assentamentos israelenses alimentam o conflito. A soberania sobre Jerusalém e o direito de retorno de refugiados estão entre os pontos mais sensíveis."
  },
  {
    id: "hum-137", disc: "Geografia", tema: "Meio ambiente",
    text: "O conceito de desenvolvimento sustentável, difundido a partir do Relatório Brundtland (1987), propõe:",
    opts: [
      "Atender às necessidades do presente sem comprometer a capacidade das gerações futuras de atender às suas",
      "Interromper todo crescimento econômico mundial",
      "Explorar os recursos naturais ao máximo enquanto existirem",
      "Transferir indústrias poluentes para países pobres",
      "Abandonar o uso de qualquer tecnologia"
    ],
    ans: 0,
    expl: "O conceito busca conciliar crescimento econômico, justiça social e preservação ambiental. Foi central na Conferência Rio-92, que aprovou a Agenda 21 e convenções sobre clima e biodiversidade."
  },
  {
    id: "hum-138", disc: "Geografia", tema: "Meio ambiente",
    text: "O Acordo de Paris (2015), firmado no âmbito da ONU, estabeleceu como meta principal:",
    opts: [
      "Proibir imediatamente o uso de petróleo em todo o mundo",
      "Proteger exclusivamente as florestas tropicais",
      "Reduzir o buraco na camada de ozônio",
      "Limitar o aquecimento global a bem menos de 2 °C, com esforços para não ultrapassar 1,5 °C em relação ao período pré-industrial",
      "Criar um imposto mundial único sobre o carbono"
    ],
    ans: 3,
    expl: "Cada país apresenta metas próprias de redução de emissões (NDCs), revisadas periodicamente. O acordo substituiu a lógica do Protocolo de Kyoto, que impunha metas apenas aos países desenvolvidos."
  },
  {
    id: "hum-139", disc: "Geografia", tema: "Meio ambiente",
    text: "A eutrofização de rios e lagos ocorre principalmente devido:",
    opts: [
      "À falta total de nutrientes na água",
      "Ao excesso de nutrientes, como nitrogênio e fósforo de esgotos e fertilizantes, que provoca proliferação de algas e queda de oxigênio",
      "Ao aumento da quantidade de oxigênio dissolvido",
      "À presença de peixes em excesso",
      "À baixa incidência de luz solar"
    ],
    ans: 1,
    expl: "Os nutrientes favorecem a explosão de algas na superfície. Quando morrem, sua decomposição por bactérias consome o oxigênio dissolvido, levando à mortandade de peixes. Tratar esgotos é a principal forma de prevenção."
  },
  {
    id: "hum-140", disc: "Geografia", tema: "Globalização",
    text: "Uma característica das empresas transnacionais na economia globalizada é:",
    opts: [
      "Produzir exclusivamente no país de origem",
      "Recusar o uso de tecnologia da informação",
      "Atuar apenas no setor agrícola",
      "Distribuir etapas da produção por vários países, buscando menores custos e acesso a mercados",
      "Vender somente para o mercado interno de seu país"
    ],
    ans: 3,
    expl: "As transnacionais fragmentam a produção em cadeias globais de valor: pesquisa em um país, montagem em outro, venda no mundo todo. Elas buscam mão de obra barata, incentivos fiscais e mercados consumidores."
  },
  {
    id: "hum-141", disc: "Geografia", tema: "Globalização",
    text: "A expressão “Sul Global” é usada atualmente para designar:",
    opts: [
      "Apenas os países localizados abaixo da Linha do Equador",
      "As potências industriais do Hemisfério Norte",
      "Os países da União Europeia",
      "Países em desenvolvimento, em sua maioria da América Latina, África e Ásia, com histórico de dependência econômica",
      "As nações sem acesso ao mar"
    ],
    ans: 3,
    expl: "A expressão é socioeconômica, não estritamente geográfica: inclui países ao norte do Equador, como a Índia, e exclui países do sul, como a Austrália. Substitui termos como “Terceiro Mundo”."
  },

  // ══════════ FILOSOFIA ══════════
  {
    id: "hum-142", disc: "Filosofia", tema: "Filosofia antiga",
    text: "Os filósofos pré-socráticos, como Tales de Mileto e Heráclito, ficaram conhecidos por buscar:",
    opts: [
      "A arché, o princípio originário de todas as coisas, por meio de explicações racionais da natureza",
      "A salvação da alma por meio da fé",
      "Regras de conduta para a vida política na pólis",
      "A comprovação da existência de Deus",
      "Técnicas de retórica para vencer debates"
    ],
    ans: 0,
    expl: "Os pré-socráticos romperam com explicações míticas e procuraram na própria natureza (physis) o princípio de tudo: a água para Tales, o fogo e o devir para Heráclito, o ser imutável para Parmênides."
  },
  {
    id: "hum-143", disc: "Filosofia", tema: "Filosofia antiga",
    text: "O método socrático, conhecido como maiêutica, consistia em:",
    opts: [
      "Ensinar por meio de longos discursos decorados",
      "Cobrar dos alunos pelo ensino da retórica",
      "Escrever tratados sistemáticos sobre a natureza",
      "Fazer perguntas que levassem o interlocutor a reconhecer sua ignorância e a “dar à luz” novas ideias",
      "Aceitar sem questionamento as tradições religiosas"
    ],
    ans: 3,
    expl: "Sócrates dizia “só sei que nada sei”. Pelo diálogo, primeiro desmontava certezas falsas (ironia) e depois ajudava o interlocutor a chegar a definições mais consistentes (maiêutica, a “arte do parto”)."
  },
  {
    id: "hum-144", disc: "Filosofia", tema: "Filosofia antiga",
    text: "No “Mito da Caverna”, Platão representa:",
    opts: [
      "A passagem do conhecimento das aparências sensíveis para o conhecimento verdadeiro das Ideias",
      "A origem do universo a partir do caos",
      "A defesa da democracia ateniense",
      "A superioridade dos sentidos sobre a razão",
      "A história da fundação de Atenas"
    ],
    ans: 0,
    expl: "Os prisioneiros acorrentados veem apenas sombras e as tomam como realidade. O que se liberta e sai da caverna representa o filósofo, que alcança, pela razão, o mundo inteligível das Ideias."
  },
  {
    id: "hum-145", disc: "Filosofia", tema: "Filosofia antiga",
    text: "Para Aristóteles, a ética está ligada à busca da felicidade (eudaimonia), alcançada por meio da virtude, entendida como:",
    opts: [
      "A obediência cega às leis divinas",
      "A busca máxima do prazer físico",
      "A renúncia a toda vida em sociedade",
      "O justo meio entre dois extremos, como a coragem entre a covardia e a temeridade",
      "O cumprimento do dever independentemente das consequências"
    ],
    ans: 3,
    expl: "A virtude, para Aristóteles, é um hábito adquirido pela prática e consiste no equilíbrio (mesotés). O ser humano, “animal político”, realiza-se plenamente na vida em comunidade."
  },
  {
    id: "hum-146", disc: "Filosofia", tema: "Filosofia antiga",
    text: "Os sofistas, criticados por Sócrates e Platão, eram conhecidos por:",
    opts: [
      "Viver isolados e recusar qualquer debate público",
      "Defender a existência de verdades absolutas e eternas",
      "Dedicar-se exclusivamente à matemática",
      "Ensinar retórica e argumentação mediante pagamento, defendendo o relativismo",
      "Rejeitar a participação na vida política"
    ],
    ans: 3,
    expl: "Protágoras afirmava que “o homem é a medida de todas as coisas”. Os sofistas preparavam cidadãos para os debates na assembleia, o que os críticos viam como um ensino voltado a persuadir, não a buscar a verdade."
  },
  {
    id: "hum-147", disc: "Filosofia", tema: "Filosofia medieval",
    text: "Santo Agostinho e São Tomás de Aquino, filósofos medievais, tinham como preocupação central:",
    opts: [
      "Conciliar a fé cristã com a razão filosófica",
      "Negar a existência de Deus",
      "Defender a separação total entre Igreja e Estado",
      "Fundar o método científico experimental",
      "Criticar a filosofia grega como inútil"
    ],
    ans: 0,
    expl: "Agostinho aproximou o cristianismo do pensamento de Platão; Tomás de Aquino, do de Aristóteles. Para ambos, razão e fé não se opunham, embora a fé tivesse primazia."
  },
  {
    id: "hum-148", disc: "Filosofia", tema: "Filosofia moderna",
    text: "A frase “Penso, logo existo”, de René Descartes, expressa:",
    opts: [
      "A primeira certeza indubitável alcançada pela dúvida metódica",
      "A defesa de que o conhecimento vem apenas dos sentidos",
      "A crença de que nada pode ser conhecido",
      "A ideia de que a sociedade é anterior ao indivíduo",
      "A rejeição completa da matemática"
    ],
    ans: 0,
    expl: "Descartes duvidou de tudo o que pudesse ser posto em dúvida. Percebeu, porém, que, enquanto duvida, pensa — e, se pensa, existe. O racionalismo cartesiano baseia o conhecimento na razão."
  },
  {
    id: "hum-149", disc: "Filosofia", tema: "Filosofia moderna",
    text: "Para empiristas como John Locke e David Hume, a origem do conhecimento está:",
    opts: [
      "Na experiência sensível; a mente é como uma “tábua rasa” ao nascer",
      "Em ideias inatas presentes na alma desde o nascimento",
      "Na revelação divina",
      "Exclusivamente na intuição matemática",
      "Na tradição e na autoridade dos antigos"
    ],
    ans: 0,
    expl: "Contra o inatismo de Descartes, os empiristas defendiam que todas as ideias derivam da experiência. Hume chegou a questionar a causalidade, que seria apenas um hábito da mente."
  },
  {
    id: "hum-150", disc: "Filosofia", tema: "Filosofia política",
    text: "Para Thomas Hobbes, autor de “Leviatã”, os homens criam o Estado porque:",
    opts: [
      "São naturalmente bons e desejam viver em harmonia",
      "Deus determinou a existência dos reis",
      "Querem proteger apenas a propriedade privada",
      "No estado de natureza vivem em guerra de todos contra todos e precisam de um poder soberano que garanta a paz",
      "A vontade geral exige a democracia direta"
    ],
    ans: 3,
    expl: "Para Hobbes, “o homem é o lobo do homem”: sem um poder comum, a vida seria “solitária, pobre, sórdida, brutal e curta”. Pelo contrato, os indivíduos transferem sua liberdade a um soberano absoluto em troca de segurança."
  },
  {
    id: "hum-151", disc: "Filosofia", tema: "Filosofia política",
    text: "John Locke, contratualista liberal, defendia que o governo deve proteger os direitos naturais, que são:",
    opts: [
      "Ordem, obediência e fé",
      "Igualdade econômica absoluta e fim da propriedade",
      "Poder ilimitado do soberano",
      "Vida, liberdade e propriedade",
      "Honra, glória e conquista"
    ],
    ans: 3,
    expl: "Para Locke, se o governo viola esses direitos, o povo tem direito de resistência. Suas ideias influenciaram a Revolução Gloriosa e a independência dos EUA."
  },
  {
    id: "hum-152", disc: "Filosofia", tema: "Filosofia política",
    text: "Jean-Jacques Rousseau afirmou que “o homem nasce livre, e por toda parte encontra-se acorrentado”. Para ele, um governo legítimo deve basear-se:",
    opts: [
      "Na vontade particular do rei",
      "Na vontade geral, expressão do interesse comum do povo soberano",
      "Na força militar dos mais poderosos",
      "Na tradição religiosa",
      "No mercado livre de interferências"
    ],
    ans: 1,
    expl: "Rousseau via a propriedade privada como origem da desigualdade. No “Contrato social”, propõe que o povo seja soberano e que as leis expressem a vontade geral, não a soma de interesses privados."
  },
  {
    id: "hum-153", disc: "Filosofia", tema: "Filosofia política",
    text: "Nicolau Maquiavel, em “O príncipe”, inovou ao:",
    opts: [
      "Analisar a política como ela é, separando-a da moral religiosa",
      "Defender que o governante deve sempre agir conforme a ética cristã",
      "Propor a abolição de todos os Estados",
      "Afirmar que o poder vem diretamente de Deus",
      "Defender a democracia direta ateniense"
    ],
    ans: 0,
    expl: "Maquiavel descreve como o poder é conquistado e mantido, a partir da realidade efetiva. Para ele, o príncipe precisa de virtù (habilidade) para lidar com a fortuna (circunstâncias), sendo “temido” se não puder ser “amado”."
  },
  {
    id: "hum-154", disc: "Filosofia", tema: "Filosofia política",
    text: "Simone de Beauvoir escreveu em “O segundo sexo” (1949): “Ninguém nasce mulher: torna-se mulher”. A frase sugere que:",
    opts: [
      "As diferenças biológicas definem completamente o comportamento feminino",
      "As mulheres não devem participar da vida pública",
      "O gênero é definido exclusivamente pela religião",
      "Os papéis atribuídos às mulheres são construções sociais e históricas, não determinações naturais",
      "A desigualdade entre homens e mulheres é inevitável"
    ],
    ans: 3,
    expl: "Beauvoir mostrou que a mulher foi construída como “o outro” do homem. A obra é referência do feminismo e da distinção entre sexo biológico e papéis de gênero."
  },
  {
    id: "hum-155", disc: "Filosofia", tema: "Ética",
    text: "Para Immanuel Kant, uma ação moral deve seguir o imperativo categórico, que pode ser formulado como:",
    opts: [
      "“Busque sempre o maior prazer para si mesmo”",
      "“Os fins justificam os meios”",
      "“Faça o que trouxer mais vantagem pessoal”",
      "“Age de tal modo que a máxima de tua ação possa valer como lei universal”",
      "“Obedeça aos costumes de sua sociedade sem questionar”"
    ],
    ans: 3,
    expl: "A moral kantiana é deontológica: vale a intenção de cumprir o dever, não as consequências. Outra formulação manda tratar a humanidade sempre como fim, nunca apenas como meio."
  },
  {
    id: "hum-156", disc: "Filosofia", tema: "Ética",
    text: "O utilitarismo, de Jeremy Bentham e John Stuart Mill, avalia a moralidade de uma ação:",
    opts: [
      "Pelas consequências, buscando a maior felicidade para o maior número de pessoas",
      "Pela intenção do agente, independentemente das consequências",
      "Pela obediência aos mandamentos religiosos",
      "Pela tradição dos antepassados",
      "Pela vontade do governante"
    ],
    ans: 0,
    expl: "É uma ética consequencialista: a ação correta é a que maximiza o bem-estar geral. Críticos apontam o risco de sacrificar direitos de minorias em nome da maioria."
  },
  {
    id: "hum-157", disc: "Filosofia", tema: "Filosofia contemporânea",
    text: "Jean-Paul Sartre afirmou que “a existência precede a essência”. Isso significa que:",
    opts: [
      "Deus define o destino de cada pessoa antes do nascimento",
      "As pessoas nascem com caráter imutável",
      "A sociedade determina completamente o indivíduo",
      "Apenas a razão pura pode conhecer a essência",
      "O ser humano não tem natureza predefinida e se constitui pelas próprias escolhas, sendo responsável por elas"
    ],
    ans: 4,
    expl: "Para o existencialismo sartriano, o homem está “condenado a ser livre”: primeiro existe e depois se define por seus atos. Essa liberdade implica responsabilidade e angústia."
  },
  {
    id: "hum-158", disc: "Filosofia", tema: "Filosofia contemporânea",
    text: "Friedrich Nietzsche criticou a moral tradicional cristã, que considerava uma:",
    opts: [
      "Moral perfeita e universal",
      "“Moral de escravos”, baseada no ressentimento e na negação da vida",
      "Expressão da vontade de potência dos fortes",
      "Ética baseada no justo meio",
      "Forma de racionalismo matemático"
    ],
    ans: 1,
    expl: "Nietzsche anunciou a “morte de Deus” e propôs a transvaloração dos valores, valorizando a afirmação da vida. Sua figura do além-homem expressa a criação de novos valores."
  },
  {
    id: "hum-159", disc: "Filosofia", tema: "Filosofia contemporânea",
    text: "Hannah Arendt, ao acompanhar o julgamento do nazista Adolf Eichmann, formulou o conceito de “banalidade do mal”, segundo o qual:",
    opts: [
      "O mal é sempre praticado por pessoas monstruosas e sádicas",
      "Grandes crimes podem ser cometidos por pessoas comuns que deixam de pensar criticamente e apenas cumprem ordens",
      "O mal não existe na política",
      "Apenas os líderes são responsáveis pelos crimes de Estado",
      "A obediência às leis elimina a responsabilidade moral"
    ],
    ans: 1,
    expl: "Arendt surpreendeu-se ao ver em Eichmann um burocrata medíocre, não um monstro. A ausência de reflexão (a incapacidade de pensar) tornava possível a participação em atrocidades."
  },
  {
    id: "hum-160", disc: "Filosofia", tema: "Filosofia contemporânea",
    text: "Michel Foucault analisou instituições como prisões, escolas e hospitais e mostrou que, na modernidade, o poder:",
    opts: [
      "Concentra-se apenas no rei e nas leis",
      "Desapareceu com o fim do absolutismo",
      "Existe somente nas relações econômicas",
      "Atua de forma disciplinar, vigiando, normalizando e moldando os corpos",
      "É exercido exclusivamente pela violência física"
    ],
    ans: 3,
    expl: "Em “Vigiar e punir”, Foucault usa o modelo do panóptico para mostrar como a vigilância permanente leva os indivíduos a se autocontrolarem. O poder estaria difundido nas relações sociais, não apenas no Estado."
  },
  {
    id: "hum-161", disc: "Filosofia", tema: "Filosofia contemporânea",
    text: "A Escola de Frankfurt (Adorno e Horkheimer) criou o conceito de “indústria cultural” para criticar:",
    opts: [
      "A falta de acesso da população aos meios de comunicação",
      "O excesso de arte erudita nas escolas",
      "O fim da televisão e do cinema",
      "A produção de bens culturais em série, como mercadorias, que padroniza gostos e favorece o conformismo",
      "A valorização da cultura popular tradicional"
    ],
    ans: 3,
    expl: "Para esses autores, filmes, músicas e programas produzidos industrialmente visam o lucro e oferecem entretenimento repetitivo, que distrai e reduz a capacidade crítica do público."
  },
  {
    id: "hum-162", disc: "Filosofia", tema: "Filosofia da ciência",
    text: "Para Karl Popper, uma teoria é científica quando:",
    opts: [
      "É aceita pela maioria das pessoas",
      "Foi formulada por um cientista famoso",
      "Não pode ser contestada por nenhum experimento",
      "Pode ser testada e potencialmente refutada pela experiência (falseabilidade)",
      "Baseia-se apenas na tradição"
    ],
    ans: 3,
    expl: "Popper propôs o critério da falseabilidade: teorias científicas fazem previsões que podem se mostrar falsas. Uma teoria que explica tudo, sem possibilidade de teste, não é científica."
  },
  {
    id: "hum-163", disc: "Filosofia", tema: "Lógica",
    text: "Considere o argumento: “Todo ser humano é mortal. Sócrates é ser humano. Logo, Sócrates é mortal.” Trata-se de:",
    opts: [
      "Um silogismo dedutivo válido",
      "Uma falácia de autoridade",
      "Um argumento indutivo baseado em estatística",
      "Uma contradição lógica",
      "Um argumento circular"
    ],
    ans: 0,
    expl: "No silogismo aristotélico, a conclusão decorre necessariamente das premissas. Se as premissas são verdadeiras e a forma é válida, a conclusão é verdadeira."
  },
  {
    id: "hum-164", disc: "Filosofia", tema: "Lógica",
    text: "Em um debate, alguém responde a uma crítica dizendo: “Você não pode falar de economia, porque nunca teve uma empresa.” Esse raciocínio é uma falácia conhecida como:",
    opts: [
      "Apelo à misericórdia",
      "Falsa causa",
      "Generalização apressada",
      "Espantalho",
      "Ataque à pessoa (ad hominem)"
    ],
    ans: 4,
    expl: "A falácia ad hominem ataca quem argumenta em vez de discutir o argumento. A validade de uma crítica não depende da experiência pessoal de quem a faz."
  },

  // ══════════ SOCIOLOGIA ══════════
  {
    id: "hum-165", disc: "Sociologia", tema: "Clássicos da Sociologia",
    text: "Para Émile Durkheim, fatos sociais são maneiras de agir, pensar e sentir que apresentam as características de:",
    opts: [
      "Exterioridade, coercitividade e generalidade",
      "Individualidade, liberdade e espontaneidade",
      "Racionalidade, eficiência e lucro",
      "Luta de classes, exploração e alienação",
      "Carisma, tradição e legalidade"
    ],
    ans: 0,
    expl: "Os fatos sociais existem fora das consciências individuais, exercem pressão sobre as pessoas e são compartilhados pela coletividade — por exemplo, a língua, as leis e os costumes."
  },
  {
    id: "hum-166", disc: "Sociologia", tema: "Clássicos da Sociologia",
    text: "Durkheim distinguiu dois tipos de solidariedade social. Nas sociedades modernas, com intensa divisão do trabalho, predomina a solidariedade:",
    opts: [
      "Mecânica, baseada na semelhança entre os indivíduos",
      "Religiosa, baseada na obediência a um líder espiritual",
      "Familiar, baseada nos laços de parentesco",
      "Orgânica, baseada na interdependência entre funções diferentes",
      "Militar, baseada na hierarquia"
    ],
    ans: 3,
    expl: "Nas sociedades tradicionais, a coesão vem das semelhanças (solidariedade mecânica). Nas modernas, os indivíduos dependem uns dos outros por exercerem funções especializadas, como órgãos de um corpo."
  },
  {
    id: "hum-167", disc: "Sociologia", tema: "Clássicos da Sociologia",
    text: "Para Karl Marx, a mais-valia corresponde:",
    opts: [
      "Ao imposto cobrado pelo Estado sobre o lucro",
      "Ao valor produzido pelo trabalhador além do que recebe como salário, apropriado pelo capitalista",
      "Ao valor de uso de uma mercadoria",
      "À poupança acumulada pelos trabalhadores",
      "Ao preço de mercado definido pela oferta e procura"
    ],
    ans: 1,
    expl: "O trabalhador produz, em sua jornada, um valor maior que o de seu salário. A diferença é apropriada pelo dono dos meios de produção e constitui a base da exploração no capitalismo."
  },
  {
    id: "hum-168", disc: "Sociologia", tema: "Clássicos da Sociologia",
    text: "O conceito de alienação, em Marx, refere-se à situação em que o trabalhador:",
    opts: [
      "Decide livremente o que, como e quando produzir",
      "Não se reconhece no produto de seu trabalho nem controla o processo produtivo",
      "É dono das máquinas com que trabalha",
      "Recebe todo o valor que produz",
      "Trabalha apenas para consumo próprio"
    ],
    ans: 1,
    expl: "Na fábrica capitalista, o trabalhador executa tarefas fragmentadas, não decide sobre a produção e o produto pertence a outro. O trabalho, que deveria realizá-lo, torna-se algo estranho a ele."
  },
  {
    id: "hum-169", disc: "Sociologia", tema: "Clássicos da Sociologia",
    text: "Max Weber, em “A ética protestante e o espírito do capitalismo”, argumentou que:",
    opts: [
      "O capitalismo surgiu exclusivamente de fatores econômicos, sem influência cultural",
      "A religião impediu qualquer desenvolvimento econômico na Europa",
      "Valores religiosos calvinistas, como disciplina, trabalho e poupança, favoreceram o desenvolvimento do capitalismo moderno",
      "O catolicismo foi o principal motor da industrialização",
      "A luta de classes é o único motor da história"
    ],
    ans: 2,
    expl: "Weber mostrou que ideias também influenciam a economia: a ética do trabalho e da vida regrada, ligada à doutrina da predestinação, criou uma mentalidade favorável à acumulação."
  },
  {
    id: "hum-170", disc: "Sociologia", tema: "Clássicos da Sociologia",
    text: "Max Weber identificou três tipos puros de dominação legítima. A dominação fundamentada em leis e regulamentos impessoais, típica da burocracia moderna, é a:",
    opts: ["Tradicional", "Racional-legal", "Carismática", "Patrimonialista", "Teocrática"],
    ans: 1,
    expl: "Na dominação racional-legal, obedece-se a regras e cargos, não a pessoas. A tradicional baseia-se nos costumes (como em monarquias hereditárias); a carismática, nas qualidades extraordinárias de um líder."
  },
  {
    id: "hum-171", disc: "Sociologia", tema: "Cultura e sociedade",
    text: "O etnocentrismo consiste em:",
    opts: [
      "Respeitar todas as culturas como igualmente válidas",
      "Estudar cientificamente povos indígenas",
      "Defender a mistura entre diferentes culturas",
      "Valorizar culturas estrangeiras em detrimento da própria",
      "Julgar outras culturas a partir dos valores da própria cultura, considerada superior"
    ],
    ans: 4,
    expl: "O etnocentrismo leva a ver costumes diferentes como estranhos ou “atrasados”. O relativismo cultural, ao contrário, procura compreender cada cultura em seus próprios termos."
  },
  {
    id: "hum-172", disc: "Sociologia", tema: "Cultura e sociedade",
    text: "Na Antropologia, o conceito de cultura refere-se a:",
    opts: [
      "Todo o conjunto de conhecimentos, crenças, costumes e práticas aprendidos e compartilhados por um grupo",
      "Apenas às obras de arte eruditas expostas em museus",
      "Ao nível de escolaridade de uma pessoa",
      "Às características biológicas herdadas geneticamente",
      "Exclusivamente às manifestações religiosas"
    ],
    ans: 0,
    expl: "No sentido antropológico, toda sociedade tem cultura: ela inclui língua, técnicas, valores e modos de vida. Não existem povos “sem cultura” ou culturas superiores a outras."
  },
  {
    id: "hum-173", disc: "Sociologia", tema: "Cultura e sociedade",
    text: "A ideia de “democracia racial” no Brasil, difundida a partir dos anos 1930, foi criticada por sociólogos como Florestan Fernandes porque:",
    opts: [
      "Defendia a segregação legal entre brancos e negros",
      "Negava que houvesse miscigenação no país",
      "Ocultava o racismo e as desigualdades sofridas pela população negra",
      "Propunha políticas de cotas raciais",
      "Afirmava que o Brasil era um país sem diversidade étnica"
    ],
    ans: 2,
    expl: "A noção de convivência harmoniosa entre raças escondia a exclusão da população negra no mercado de trabalho, na educação e na política. Estudos mostraram que a desigualdade racial é estrutural."
  },
  {
    id: "hum-174", disc: "Sociologia", tema: "Cultura e sociedade",
    text: "O conceito de racismo estrutural refere-se ao fato de que:",
    opts: [
      "O racismo existe apenas em leis explicitamente segregacionistas",
      "O racismo é um problema exclusivamente psicológico",
      "O racismo está presente no funcionamento normal das instituições e relações sociais, e não apenas em atos individuais",
      "As desigualdades raciais foram superadas com a abolição",
      "O racismo só ocorre entre pessoas de países diferentes"
    ],
    ans: 2,
    expl: "Desigualdades em renda, acesso à educação, violência policial e representação política mostram que o racismo se reproduz mesmo sem intenção explícita. Políticas afirmativas buscam enfrentar essa dimensão."
  },
  {
    id: "hum-175", disc: "Sociologia", tema: "Estratificação social",
    text: "A mobilidade social é a possibilidade de indivíduos mudarem de posição na estrutura social. Ela é praticamente inexistente em sociedades de:",
    opts: [
      "Classes, típicas do capitalismo",
      "Castas, nas quais a posição é definida pelo nascimento",
      "Mercado livre",
      "Democracias representativas",
      "Economias industrializadas"
    ],
    ans: 1,
    expl: "No sistema de castas, como o tradicional indiano, a posição é hereditária e casamentos entre castas são proibidos. Nas sociedades de classes, a mobilidade é possível, embora limitada pelas desigualdades de origem."
  },
  {
    id: "hum-176", disc: "Sociologia", tema: "Cidadania",
    text: "O sociólogo T. H. Marshall descreveu a construção da cidadania na Inglaterra em três etapas de direitos. São elas:",
    opts: [
      "Direitos religiosos, militares e econômicos",
      "Direitos naturais, divinos e históricos",
      "Direitos civis, políticos e sociais",
      "Direitos individuais, familiares e tribais",
      "Direitos trabalhistas, ambientais e digitais"
    ],
    ans: 2,
    expl: "Na Inglaterra vieram primeiro os civis (liberdade, propriedade), depois os políticos (voto) e por último os sociais (educação, saúde). José Murilo de Carvalho mostrou que, no Brasil, a ordem foi diferente: os sociais vieram antes, durante a Era Vargas."
  },
  {
    id: "hum-177", disc: "Sociologia", tema: "Movimentos sociais",
    text: "Os movimentos sociais podem ser definidos como:",
    opts: [
      "Partidos políticos que disputam eleições",
      "Ações coletivas organizadas que buscam transformar ou preservar aspectos da sociedade",
      "Empresas que atuam no setor social",
      "Órgãos do governo responsáveis por políticas públicas",
      "Grupos de amigos sem objetivos comuns"
    ],
    ans: 1,
    expl: "Movimentos operário, feminista, negro, ambientalista, LGBTQIA+ e pela terra são exemplos. Eles pressionam o Estado e a sociedade, ampliando direitos e a própria noção de cidadania."
  },
  {
    id: "hum-178", disc: "Sociologia", tema: "Trabalho",
    text: "A “uberização” do trabalho caracteriza-se por:",
    opts: [
      "Aumento dos direitos trabalhistas garantidos pela CLT",
      "Fim da utilização de tecnologia no trabalho",
      "Trabalhadores sem vínculo empregatício, mediados por plataformas digitais, que assumem custos e riscos da atividade",
      "Jornadas fixas e salários estáveis",
      "Contratação exclusiva por concursos públicos"
    ],
    ans: 2,
    expl: "Motoristas e entregadores de aplicativos são considerados “parceiros”, sem férias, 13º ou previdência garantida. O fenômeno expressa a precarização e a flexibilização das relações de trabalho."
  },
  {
    id: "hum-179", disc: "Sociologia", tema: "Mídia e sociedade",
    text: "As chamadas “bolhas” nas redes sociais são formadas porque:",
    opts: [
      "As redes sociais proíbem a circulação de notícias",
      "Algoritmos priorizam conteúdos semelhantes ao que o usuário já consome, reduzindo o contato com opiniões diferentes",
      "Todos os usuários recebem exatamente o mesmo conteúdo",
      "Os usuários só podem seguir pessoas do mesmo país",
      "A internet não permite a circulação de informações políticas"
    ],
    ans: 1,
    expl: "Ao personalizar o conteúdo para manter a atenção, as plataformas reforçam crenças prévias, o que pode favorecer a polarização e a circulação de desinformação."
  },
  {
    id: "hum-180", disc: "Sociologia", tema: "Sociologia brasileira",
    text: "Sérgio Buarque de Holanda, em “Raízes do Brasil”, descreveu o “homem cordial”. Esse conceito refere-se:",
    opts: [
      "À polidez e gentileza naturais do povo brasileiro",
      "À ausência de conflitos na sociedade brasileira",
      "À tendência de levar relações pessoais e afetivas para a esfera pública, dificultando a impessoalidade",
      "Ao respeito rigoroso às leis e instituições",
      "À herança indígena de vida comunitária"
    ],
    ans: 2,
    expl: "“Cordial” vem de cor (coração): o brasileiro agiria movido por afetos, privilegiando amigos e parentes. Isso favorece práticas como o patrimonialismo e o “jeitinho”, em vez de regras impessoais."
  },
  {
    id: "hum-181", disc: "Sociologia", tema: "Sociologia brasileira",
    text: "Gilberto Freyre, em “Casa-grande & senzala” (1933), destacou:",
    opts: [
      "A ausência de escravidão no período colonial",
      "A superioridade biológica dos europeus",
      "A industrialização como origem da sociedade brasileira",
      "O papel exclusivo dos imigrantes italianos",
      "A contribuição de portugueses, indígenas e africanos na formação cultural brasileira"
    ],
    ans: 4,
    expl: "Freyre valorizou a miscigenação em oposição às teorias racistas da época. Foi criticado, porém, por suavizar a violência da escravidão e contribuir para o mito da democracia racial."
  },
  {
    id: "hum-182", disc: "Sociologia", tema: "Instituições sociais",
    text: "Para Pierre Bourdieu, a escola tende a reproduzir desigualdades sociais porque:",
    opts: [
      "Oferece exatamente as mesmas oportunidades a todos, sem distinção",
      "Não exige nenhum conhecimento prévio dos alunos",
      "É frequentada apenas pelas classes populares",
      "Valoriza o capital cultural das classes dominantes, apresentando como mérito o que é herança social",
      "Rejeita a cultura das elites"
    ],
    ans: 3,
    expl: "Alunos de famílias com mais capital cultural (hábitos de leitura, linguagem, acesso a bens culturais) encontram na escola um ambiente familiar. O sucesso escolar parece mérito individual, mas reflete desigualdades de origem."
  },
  {
    id: "hum-183", disc: "Sociologia", tema: "Instituições sociais",
    text: "A socialização é o processo pelo qual:",
    opts: [
      "O indivíduo aprende normas, valores e comportamentos de seu grupo, por meio de família, escola, mídia e outras instituições",
      "As empresas se tornam propriedade do Estado",
      "Os indivíduos se isolam da vida em sociedade",
      "As pessoas herdam características biológicas",
      "Os governos criam leis trabalhistas"
    ],
    ans: 0,
    expl: "A socialização primária ocorre na infância, principalmente na família; a secundária, ao longo da vida, em instituições como escola, trabalho e grupos de amigos."
  },
  {
    id: "hum-184", disc: "Sociologia", tema: "Estado e política",
    text: "Na democracia representativa, o poder político é exercido:",
    opts: [
      "Diretamente pelos cidadãos reunidos em assembleia para votar todas as leis",
      "Por um monarca absoluto",
      "Por líderes religiosos escolhidos pela tradição",
      "Por representantes eleitos pelos cidadãos para tomar decisões em seu nome",
      "Exclusivamente pelos militares"
    ],
    ans: 3,
    expl: "Em sociedades grandes e complexas, os cidadãos elegem representantes. Mecanismos como plebiscito, referendo e iniciativa popular são instrumentos de democracia participativa que complementam a representação."
  },
  {
    id: "hum-185", disc: "Sociologia", tema: "Gênero",
    text: "A diferença salarial entre homens e mulheres que ocupam cargos semelhantes no Brasil é explicada por estudos sociológicos principalmente:",
    opts: [
      "Pela menor escolaridade média das mulheres",
      "Por diferenças biológicas de capacidade produtiva",
      "Pela escolha voluntária das mulheres de ganhar menos",
      "Pela proibição legal de mulheres em cargos de chefia",
      "Pela desigualdade de gênero estrutural, incluindo a divisão desigual do trabalho doméstico e a discriminação no mercado"
    ],
    ans: 4,
    expl: "No Brasil, as mulheres têm, em média, escolaridade maior que a dos homens, mas recebem menos. A sobrecarga com tarefas domésticas e de cuidado, os estereótipos e a discriminação contribuem para essa diferença."
  },
  {
    id: "hum-186", disc: "Sociologia", tema: "Violência",
    text: "Dados sobre violência no Brasil mostram que a maior parte das vítimas de homicídio é composta por:",
    opts: [
      "Idosos de classe alta",
      "Mulheres brancas de áreas rurais",
      "Jovens, homens, negros e moradores de periferias",
      "Crianças de até 5 anos",
      "Estrangeiros residentes em capitais"
    ],
    ans: 2,
    expl: "Publicações como o Atlas da Violência (Ipea/FBSP) mostram de forma recorrente esse perfil. Os números evidenciam como raça, classe, idade e território se combinam na distribuição da violência."
  }
];
