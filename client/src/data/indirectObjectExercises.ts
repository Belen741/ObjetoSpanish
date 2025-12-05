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

// Page 1: Select the correct pronoun
export const indirectObjectPage1: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "La profesora da una lección a los estudiantes.",
    blank: "La profesora ____ da una lección.",
    options: [
      { id: "a", text: "los" },
      { id: "b", text: "les" },
      { id: "c", text: "la" },
      { id: "d", text: "lo" },
    ],
    correctAnswer: "b",
    explanation: "The indirect object is \"a los estudiantes.\" The corresponding pronoun is \"les\" because it replaces \"to them.\"",
  },
  {
    id: 2,
    sentence: "¿Puedes traer un café a mí?",
    blank: "¿____ puedes traer un café?",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "me" },
      { id: "c", text: "le" },
      { id: "d", text: "nos" },
    ],
    correctAnswer: "b",
    explanation: "The indirect object is \"a mí.\" The correct pronoun is \"me.\"",
  },
  {
    id: 3,
    sentence: "Mi madre prepara la cena para nosotros.",
    blank: "Mi madre ____ prepara la cena.",
    options: [
      { id: "a", text: "nos" },
      { id: "b", text: "los" },
      { id: "c", text: "les" },
      { id: "d", text: "la" },
    ],
    correctAnswer: "a",
    explanation: "The indirect object is \"para nosotros.\" The correct pronoun is \"nos.\"",
  },
  {
    id: 4,
    sentence: "Juan escribe una carta a su novia.",
    blank: "Juan ____ escribe una carta.",
    options: [
      { id: "a", text: "la" },
      { id: "b", text: "le" },
      { id: "c", text: "lo" },
      { id: "d", text: "se" },
    ],
    correctAnswer: "b",
    explanation: "The indirect object is \"a su novia.\" The correct pronoun is \"le.\"",
  },
  {
    id: 5,
    sentence: "Voy a mostrar las fotos a ti.",
    blank: "____ voy a mostrar las fotos.",
    options: [
      { id: "a", text: "nos" },
      { id: "b", text: "me" },
      { id: "c", text: "le" },
      { id: "d", text: "te" },
    ],
    correctAnswer: "d",
    explanation: "The indirect object is \"a ti.\" The correct pronoun is \"te.\"",
  },
  {
    id: 6,
    sentence: "El médico explicó el tratamiento al paciente.",
    blank: "El médico ____ explicó el tratamiento.",
    options: [
      { id: "a", text: "lo" },
      { id: "b", text: "le" },
      { id: "c", text: "la" },
      { id: "d", text: "me" },
    ],
    correctAnswer: "b",
    explanation: "The indirect object is \"al paciente.\" The corresponding pronoun is \"le.\"",
  },
  {
    id: 7,
    sentence: "Siempre decimos la verdad a nuestros padres.",
    blank: "Siempre ____ decimos la verdad.",
    options: [
      { id: "a", text: "los" },
      { id: "b", text: "lo" },
      { id: "c", text: "las" },
      { id: "d", text: "les" },
    ],
    correctAnswer: "d",
    explanation: "The indirect object is \"a nuestros padres.\" The correct pronoun is \"les.\"",
  },
  {
    id: 8,
    sentence: "¿Tú regalaste flores a tu abuela?",
    blank: "¿____ regalaste flores?",
    options: [
      { id: "a", text: "le" },
      { id: "b", text: "la" },
      { id: "c", text: "te" },
      { id: "d", text: "se" },
    ],
    correctAnswer: "a",
    explanation: "The indirect object is \"a tu abuela.\" The correct pronoun is \"le.\"",
  },
  {
    id: 9,
    sentence: "Nosotros enviamos un paquete a ustedes.",
    blank: "Nosotros ____ enviamos un paquete.",
    options: [
      { id: "a", text: "nos" },
      { id: "b", text: "los" },
      { id: "c", text: "les" },
      { id: "d", text: "se" },
    ],
    correctAnswer: "c",
    explanation: "The indirect object is \"a ustedes.\" The correct pronoun is \"les.\"",
  },
  {
    id: 10,
    sentence: "El camarero trae la cuenta a mí.",
    blank: "El camarero ____ trae la cuenta.",
    options: [
      { id: "a", text: "nos" },
      { id: "b", text: "le" },
      { id: "c", text: "te" },
      { id: "d", text: "me" },
    ],
    correctAnswer: "d",
    explanation: "The indirect object is \"a mí.\" The correct pronoun is \"me.\"",
  },
];

// Page 2: Rewrite the sentence
export const indirectObjectPage2: RewriteExercise[] = [
  {
    id: 1,
    original: "La profesora explica la gramática a los estudiantes.",
    correctAnswer: "La profesora les explica la gramática.",
    explanation: "\"A los estudiantes\" is the indirect object → use \"les.\"",
  },
  {
    id: 2,
    original: "Voy a dar un regalo a ti.",
    correctAnswer: "Te voy a dar un regalo.",
    alternativeAnswer: "Voy a darte un regalo.",
    explanation: "\"A ti\" is the indirect object → use \"te.\" The pronoun can go before the conjugated verb or attached to the infinitive.",
  },
  {
    id: 3,
    original: "Mi madre prepara el desayuno para mí.",
    correctAnswer: "Mi madre me prepara el desayuno.",
    explanation: "\"Para mí\" is the indirect object → use \"me.\"",
  },
  {
    id: 4,
    original: "Juan envió una carta a su abuela.",
    correctAnswer: "Juan le envió una carta.",
    explanation: "\"A su abuela\" is the indirect object → use \"le.\"",
  },
  {
    id: 5,
    original: "El camarero trae el postre a nosotros.",
    correctAnswer: "El camarero nos trae el postre.",
    explanation: "\"A nosotros\" is the indirect object → use \"nos.\"",
  },
  {
    id: 6,
    original: "Ellos contaron la historia a sus amigos.",
    correctAnswer: "Ellos les contaron la historia.",
    explanation: "\"A sus amigos\" is the indirect object → use \"les.\"",
  },
  {
    id: 7,
    original: "Marta va a mostrar las fotos a mí.",
    correctAnswer: "Marta me va a mostrar las fotos.",
    alternativeAnswer: "Marta va a mostrarme las fotos.",
    explanation: "\"A mí\" is the indirect object → use \"me.\" The pronoun can be placed before \"va a\" or attached to the infinitive.",
  },
  {
    id: 8,
    original: "Voy a decir la verdad a ti.",
    correctAnswer: "Te voy a decir la verdad.",
    alternativeAnswer: "Voy a decirte la verdad.",
    explanation: "\"A ti\" is the indirect object → use \"te.\" It can appear before the conjugated verb or attached to the infinitive.",
  },
  {
    id: 9,
    original: "Mis padres compran juguetes para nosotros cada año.",
    correctAnswer: "Mis padres nos compran juguetes cada año.",
    explanation: "\"Para nosotros\" is the indirect object → use \"nos.\"",
  },
  {
    id: 10,
    original: "El médico explicó el diagnóstico al paciente.",
    correctAnswer: "El médico le explicó el diagnóstico.",
    explanation: "\"Al paciente\" is the indirect object → use \"le.\"",
  },
];

// Page 3: Multiple choice with full sentences
export const indirectObjectPage3: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "¿Diste el libro a tu hermana?",
    options: [
      { id: "a", text: "Sí, yo la di." },
      { id: "b", text: "Sí, yo lo di." },
      { id: "c", text: "Sí, yo le di." },
      { id: "d", text: "Sí, yo me di." },
    ],
    correctAnswer: "c",
    explanation: "\"A tu hermana\" is the indirect object, so we use \"le.\"",
  },
  {
    id: 2,
    sentence: "¿Enviaste el correo a tus profesores?",
    options: [
      { id: "a", text: "No, yo no les envié." },
      { id: "b", text: "No, yo no los envié." },
      { id: "c", text: "No, yo no las envié." },
      { id: "d", text: "No, yo no se envié." },
    ],
    correctAnswer: "a",
    explanation: "\"A tus profesores\" is plural → use \"les.\"",
  },
  {
    id: 3,
    sentence: "¿Mostraste las fotos a mí?",
    options: [
      { id: "a", text: "Sí, te mostré." },
      { id: "b", text: "Sí, me mostraste." },
      { id: "c", text: "Sí, le mostraste." },
      { id: "d", text: "Sí, nos mostraste." },
    ],
    correctAnswer: "b",
    explanation: "\"A mí\" is the indirect object → use \"me.\"",
  },
  {
    id: 4,
    sentence: "¿El médico explicó el tratamiento al paciente?",
    options: [
      { id: "a", text: "No sé si le explicó." },
      { id: "b", text: "No sé si lo explicó." },
      { id: "c", text: "No sé si la explicó." },
      { id: "d", text: "No sé si se explicó." },
    ],
    correctAnswer: "a",
    explanation: "\"Al paciente\" is singular → use \"le.\"",
  },
  {
    id: 5,
    sentence: "¿Vas a dar un regalo a nosotros?",
    options: [
      { id: "a", text: "Sí, te voy a dar." },
      { id: "b", text: "No sé si nos voy a dar." },
      { id: "c", text: "No, no les voy a dar." },
      { id: "d", text: "Sí, me voy a dar." },
    ],
    correctAnswer: "b",
    explanation: "\"A nosotros\" is the indirect object → use \"nos.\"",
  },
  {
    id: 6,
    sentence: "¿Contaste el secreto a tus padres?",
    options: [
      { id: "a", text: "Sí, se conté." },
      { id: "b", text: "Sí, les conté." },
      { id: "c", text: "Sí, los conté." },
      { id: "d", text: "Sí, la conté." },
    ],
    correctAnswer: "b",
    explanation: "\"A tus padres\" is plural → use \"les.\"",
  },
  {
    id: 7,
    sentence: "¿El camarero trajo el postre a ti?",
    options: [
      { id: "a", text: "No, no te trajo." },
      { id: "b", text: "Sí, le trajo." },
      { id: "c", text: "No sé si se trajo." },
      { id: "d", text: "Sí, nos trajo." },
    ],
    correctAnswer: "a",
    explanation: "\"A ti\" is the indirect object → use \"te.\"",
  },
  {
    id: 8,
    sentence: "¿Dijiste la verdad a tus amigos?",
    options: [
      { id: "a", text: "No sé si les dije." },
      { id: "b", text: "No sé si los dije." },
      { id: "c", text: "No sé si la dije." },
      { id: "d", text: "No sé si se dije." },
    ],
    correctAnswer: "a",
    explanation: "\"A tus amigos\" → plural indirect object → \"les.\"",
  },
  {
    id: 9,
    sentence: "¿Tu madre compró un juguete a ti?",
    options: [
      { id: "a", text: "Sí, me compró." },
      { id: "b", text: "Sí, te compró." },
      { id: "c", text: "Sí, le compró." },
      { id: "d", text: "Sí, nos compró." },
    ],
    correctAnswer: "a",
    explanation: "\"A ti\" → indirect object → \"me.\"",
  },
  {
    id: 10,
    sentence: "¿Mandaste el mensaje a Juan?",
    options: [
      { id: "a", text: "Sí, lo mandé." },
      { id: "b", text: "Sí, le mandé." },
      { id: "c", text: "Sí, te mandé." },
      { id: "d", text: "Sí, me mandé." },
    ],
    correctAnswer: "b",
    explanation: "\"A Juan\" → singular indirect object → \"le.\"",
  },
];
