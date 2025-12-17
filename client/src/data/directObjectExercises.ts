export type MultipleChoiceExercise = {
  id: number;
  sentence: string;
  blank?: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
};

export type RewriteExercise = {
  id: number;
  original: string;
  correctAnswer: string;
  alternativeAnswer?: string;
  explanation: string;
};

export type FillInStoryExercise = {
  id: number;
  title: string;
  segments: { text: string; isBlank: boolean; correctAnswer?: string }[];
  dropdownOptions: string[];
};

// Page 1: Select the correct pronoun
export const directObjectPage1: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "Marta compra un vestido nuevo.",
    blank: "Marta ____ compra",
    options: [
      { id: "a", text: "la" },
      { id: "b", text: "lo" },
      { id: "c", text: "le" },
      { id: "d", text: "me" },
    ],
    correctAnswer: "b",
    explanation: "The direct object is \"un vestido nuevo,\" which is masculine and singular. The pronoun that replaces a masculine singular noun is \"lo.\" That's why we say \"Marta lo compra.\"",
  },
  {
    id: 2,
    sentence: "No encuentro mi pasaporte.",
    blank: "No ____ encuentro",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "le" },
      { id: "c", text: "la" },
      { id: "d", text: "me" },
    ],
    correctAnswer: "a",
    explanation: "The direct object is \"mi pasaporte,\" which is masculine and singular. The correct pronoun to replace it is \"lo.\" That's why we say \"No lo encuentro.\"",
  },
  {
    id: 3,
    sentence: "¿Tienes las llaves del coche?",
    blank: "¿____ tienes?",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "le" },
      { id: "c", text: "las" },
      { id: "d", text: "los" },
    ],
    correctAnswer: "c",
    explanation: "The direct object is \"las llaves,\" which is feminine and plural. The direct object pronoun for a feminine plural noun is \"las.\" That's why the correct form is \"¿Las tienes?\"",
  },
  {
    id: 4,
    sentence: "Ellos leen el periódico cada mañana.",
    blank: "Ellos ____ leen cada mañana.",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "le" },
      { id: "c", text: "las" },
      { id: "d", text: "los" },
    ],
    correctAnswer: "a",
    explanation: "The direct object is \"el periódico,\" which is masculine and singular. The corresponding pronoun is \"lo.\" The correct sentence is \"Ellos lo leen cada mañana.\"",
  },
  {
    id: 5,
    sentence: "Nosotros comemos las manzanas rojas.",
    blank: "Nosotros ____ comemos",
    options: [
      { id: "a", text: "los" },
      { id: "b", text: "les" },
      { id: "c", text: "las" },
      { id: "d", text: "se" },
    ],
    correctAnswer: "c",
    explanation: "The direct object is \"las manzanas rojas,\" which is feminine and plural. The feminine plural direct object pronoun is \"las.\" That's why we say \"Nosotros las comemos.\"",
  },
  {
    id: 6,
    sentence: "Juan quiere ver la película esta noche.",
    blank: "Juan ____ quiere ver esta noche.",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "le" },
      { id: "c", text: "él" },
      { id: "d", text: "la" },
    ],
    correctAnswer: "d",
    explanation: "The direct object is \"la película,\" which is feminine and singular. The corresponding pronoun is \"la,\" and it can be placed either before the conjugated verb or after the infinitive: \"Juan la quiere ver.\" or \"Juan quiere verla.\" Both are correct.",
  },
  {
    id: 7,
    sentence: "No encuentro los libros.",
    blank: "No ____ encuentro.",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "les" },
      { id: "c", text: "los" },
      { id: "d", text: "se" },
    ],
    correctAnswer: "c",
    explanation: "The direct object is \"los libros,\" which is masculine and plural. The direct object pronoun for masculine plural nouns is \"los.\" That's why the correct sentence is \"No los encuentro.\"",
  },
  {
    id: 8,
    sentence: "¿Recuerdas esa canción?",
    blank: "¿____ recuerdas?",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "los" },
      { id: "c", text: "le" },
      { id: "d", text: "la" },
    ],
    correctAnswer: "d",
    explanation: "The direct object is \"esa canción,\" which is feminine and singular. The correct pronoun for a feminine singular noun is \"la.\" The correct form is \"¿La recuerdas?\"",
  },
  {
    id: 9,
    sentence: "Compramos los boletos ayer.",
    blank: "____ compramos ayer.",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "nos" },
      { id: "c", text: "los" },
      { id: "d", text: "les" },
    ],
    correctAnswer: "c",
    explanation: "The direct object is \"los boletos,\" which is masculine and plural. The corresponding direct object pronoun is \"los.\" That's why we say \"Los compramos ayer.\"",
  },
  {
    id: 10,
    sentence: "El profesor explicó la gramática claramente.",
    blank: "El profesor ____ explicó claramente.",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "le" },
      { id: "c", text: "la" },
      { id: "d", text: "nos" },
    ],
    correctAnswer: "c",
    explanation: "The direct object is \"la gramática,\" which is feminine and singular. The pronoun that replaces a feminine singular noun is \"la.\" The correct sentence is \"El profesor la explicó claramente.\"",
  },
];

// Page 2: Rewrite the sentence
export const directObjectPage2: RewriteExercise[] = [
  {
    id: 1,
    original: "María prepara la cena todas las noches.",
    correctAnswer: "María la prepara todas las noches.",
    explanation: "\"La cena\" is feminine singular → use \"la\" as the direct object pronoun.",
  },
  {
    id: 2,
    original: "No encuentro mis llaves.",
    correctAnswer: "No las encuentro.",
    explanation: "\"Las llaves\" is feminine plural → use \"las.\"",
  },
  {
    id: 3,
    original: "Pedro vio a sus amigos en el parque.",
    correctAnswer: "Pedro los vio en el parque.",
    explanation: "\"A sus amigos\" is masculine plural → use \"los.\"",
  },
  {
    id: 4,
    original: "¿Tienes mi número de teléfono?",
    correctAnswer: "¿Lo tienes?",
    explanation: "\"Número\" is masculine singular → use \"lo.\"",
  },
  {
    id: 5,
    original: "Ana está leyendo una novela muy interesante.",
    correctAnswer: "Ana la está leyendo.",
    alternativeAnswer: "Ana está leyéndola.",
    explanation: "\"Novela\" is feminine singular → use \"la.\" The pronoun can go before the conjugated verb or attached to the infinitive.",
  },
  {
    id: 6,
    original: "Compramos las entradas para el concierto.",
    correctAnswer: "Las compramos para el concierto.",
    explanation: "\"Las entradas\" is feminine plural → use \"las.\"",
  },
  {
    id: 7,
    original: "Ellos van a limpiar la casa mañana.",
    correctAnswer: "Ellos la van a limpiar mañana.",
    alternativeAnswer: "Ellos van a limpiarla mañana.",
    explanation: "\"La casa\" is feminine singular → use \"la.\" The pronoun can appear before \"van a\" or attached to \"limpiar.\"",
  },
  {
    id: 8,
    original: "¿Ya enviaste los documentos?",
    correctAnswer: "¿Ya los enviaste?",
    explanation: "\"Los documentos\" is masculine plural → use \"los.\"",
  },
  {
    id: 9,
    original: "No recuerdo esa canción.",
    correctAnswer: "No la recuerdo.",
    explanation: "\"Esa canción\" is feminine singular → use \"la.\"",
  },
  {
    id: 10,
    original: "El profesor explicó la lección otra vez.",
    correctAnswer: "El profesor la explicó otra vez.",
    explanation: "\"La lección\" is feminine singular → use \"la.\"",
  },
];

// Page 3: Multiple choice with full sentences
export const directObjectPage3: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "¿Compraste la comida?",
    options: [
      { id: "a", text: "Sí, yo la compré." },
      { id: "b", text: "Sí, yo lo compré." },
      { id: "c", text: "Sí, yo nos compré." },
      { id: "d", text: "Sí, yo le compré." },
    ],
    correctAnswer: "a",
    explanation: "La comida is feminine singular, so we replace it with \"la.\" Direct object pronouns agree in gender and number with the noun they replace.",
  },
  {
    id: 2,
    sentence: "¿Viste a tus amigos ayer?",
    options: [
      { id: "a", text: "Sí, le vi en el parque" },
      { id: "b", text: "Sí, se vi en el parque" },
      { id: "c", text: "Sí, les vi en el parque" },
      { id: "d", text: "Sí, los vi en el parque." },
    ],
    correctAnswer: "d",
    explanation: "A tus amigos is masculine plural, so we use \"los.\" Even though it refers to people introduced by a, it's still a direct object.",
  },
  {
    id: 3,
    sentence: "¿Encontraron ustedes las llaves?",
    options: [
      { id: "a", text: "No, no nos encontramos." },
      { id: "b", text: "No, no los encontramos." },
      { id: "c", text: "No, no las encontramos." },
      { id: "d", text: "No, no les encontramos." },
    ],
    correctAnswer: "c",
    explanation: "Las llaves is feminine plural, so the correct pronoun is \"las.\" Direct object pronouns always go before the conjugated verb (encontramos).",
  },
  {
    id: 4,
    sentence: "¿Tu padre lavó los platos?",
    options: [
      { id: "a", text: "Sí, los lavó." },
      { id: "b", text: "Sí, les lavó." },
      { id: "c", text: "Sí, nos lavó." },
      { id: "d", text: "Sí, le lavó." },
    ],
    correctAnswer: "a",
    explanation: "Los platos is masculine plural, so we use \"los.\" The pronoun replaces the noun completely.",
  },
  {
    id: 5,
    sentence: "¿Ellos invitaron a Marta?",
    options: [
      { id: "a", text: "Sí, le invitaron" },
      { id: "b", text: "Sí, las invitaron" },
      { id: "c", text: "Sí, la invitaron." },
      { id: "d", text: "Sí, les invitaron" },
    ],
    correctAnswer: "c",
    explanation: "A Marta refers to a female person, so the correct pronoun is \"la.\" Remember: we use la (direct object), not le, because invitar takes a direct object.",
  },
  {
    id: 6,
    sentence: "¿Tú leíste el mensaje?",
    options: [
      { id: "a", text: "No sé si te leí." },
      { id: "b", text: "No sé si los leí." },
      { id: "c", text: "No sé si le leí." },
      { id: "d", text: "No sé si lo leí." },
    ],
    correctAnswer: "d",
    explanation: "El mensaje is masculine singular, so we use \"lo.\" The pronoun appears before the conjugated verb leí.",
  },
  {
    id: 7,
    sentence: "¿Vieron ustedes las noticias hoy?",
    options: [
      { id: "a", text: "No, no la vimos." },
      { id: "b", text: "No, no las vimos." },
      { id: "c", text: "No, no los vimos." },
      { id: "d", text: "No, no les vimos." },
    ],
    correctAnswer: "b",
    explanation: "Las noticias is feminine plural, so we use \"las.\" In the past tense, the pronoun always comes before the verb.",
  },
  {
    id: 8,
    sentence: "¿El profesor explicó la lección?",
    options: [
      { id: "a", text: "No sé si lo explicó." },
      { id: "b", text: "No sé si se explicó." },
      { id: "c", text: "No sé si te explicó." },
      { id: "d", text: "No sé si la explicó." },
    ],
    correctAnswer: "d",
    explanation: "La lección is feminine singular, so we use \"la.\" It replaces the direct object noun completely.",
  },
  {
    id: 9,
    sentence: "¿Tú hiciste la tarea?",
    options: [
      { id: "a", text: "No, no lo hice." },
      { id: "b", text: "No, no la hice." },
      { id: "c", text: "No, no los hice." },
      { id: "d", text: "No, no las hice." },
    ],
    correctAnswer: "b",
    explanation: "La tarea is feminine singular, so we use \"la.\" Direct object pronouns precede the conjugated verb hice.",
  },
  {
    id: 10,
    sentence: "¿Ustedes vieron la película nueva?",
    options: [
      { id: "a", text: "Sí, nos vimos." },
      { id: "b", text: "Sí, le vimos." },
      { id: "c", text: "Sí, la vimos." },
      { id: "d", text: "Sí, te vimos." },
    ],
    correctAnswer: "c",
    explanation: "La película is feminine singular, so we use \"la.\" The pronoun agrees in gender and number with the replaced noun.",
  },
];

// Page 4: Fill in the blanks with dropdown
export const directObjectPage4: FillInStoryExercise[] = [
  {
    id: 1,
    title: "La rutina diaria de María",
    segments: [
      { text: "Un día María ve la televisión muy temprano. Ella ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "la" },
      { text: " ve mientras desayuna. Después prepara el desayuno para ella misma y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "lo" },
      { text: " come con calma. Más tarde limpia la casa y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "la" },
      { text: " deja muy ordenada. Al mediodía llama a su amiga y ven una película juntas; ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "la" },
      { text: " ven hasta el final. Por la tarde María revisa los correos del trabajo y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "los" },
      { text: " responde con atención. Antes de dormir lee un libro interesante y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "lo" },
      { text: " termina en la noche.", isBlank: false },
    ],
    dropdownOptions: ["me", "te", "lo", "la", "las", "los", "nos"],
  },
  {
    id: 2,
    title: "Una reunión en casa de Laura",
    segments: [
      { text: "Ayer mis amigos y yo nos reunimos en casa de Laura. Primero Juan me llamó por teléfono y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "me" },
      { text: " invitó a la reunión. Luego yo te vi en la calle y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "te" },
      { text: " saludé con una sonrisa. Cuando llegamos a la casa, Laura preparó el café y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "lo" },
      { text: " sirvió caliente. Después puso la música y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "la" },
      { text: " subió un poco el volumen. Más tarde sacó los juegos de mesa y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "los" },
      { text: " colocó sobre la mesa. También preparó las botanas y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "las" },
      { text: " dejó listas para todos. Al final, esa tarde tan divertida ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "la" },
      { text: " recordaremos siempre.", isBlank: false },
    ],
    dropdownOptions: ["me", "te", "lo", "la", "las", "los", "nos"],
  },
  {
    id: 3,
    title: "Un domingo diferente",
    segments: [
      { text: "El domingo por la mañana preparamos las cosas para salir temprano y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "las" },
      { text: " dejamos listas desde la noche anterior. Antes de irnos, mi hermano me vio apurada y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "me" },
      { text: " ayudó a cerrar la casa. En el camino yo te encontré en el mercado y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "te" },
      { text: " saludé rápidamente. Más tarde compramos los regalos para la fiesta y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "los" },
      { text: " envolvimos con cuidado. Al llegar al parque vimos un espectáculo interesante y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "lo" },
      { text: " disfrutamos mucho. Después tomamos la foto del grupo y ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "la" },
      { text: " subimos a redes sociales. Al final del día, todos ", isBlank: false },
      { text: "", isBlank: true, correctAnswer: "nos" },
      { text: " despedimos con alegría.", isBlank: false },
    ],
    dropdownOptions: ["me", "te", "lo", "la", "las", "los", "nos"],
  },
];
