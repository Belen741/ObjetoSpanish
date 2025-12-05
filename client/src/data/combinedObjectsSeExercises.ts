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

// Page 1: Select the correct pronouns
export const combinedObjectsSePage1: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "Marta compra un regalo para su hermana.",
    blank: "Marta ____ compra",
    options: [
      { id: "a", text: "te lo" },
      { id: "b", text: "se lo" },
      { id: "c", text: "le lo" },
      { id: "d", text: "se la" },
    ],
    correctAnswer: "b",
    explanation: "Direct object = un regalo → lo. Indirect object = a su hermana → le, but le + lo = se lo.",
  },
  {
    id: 2,
    sentence: "No doy mi número de teléfono a ellos.",
    blank: "No ____ doy",
    options: [
      { id: "a", text: "les lo" },
      { id: "b", text: "me lo" },
      { id: "c", text: "se la" },
      { id: "d", text: "se lo" },
    ],
    correctAnswer: "d",
    explanation: "Indirect = a ellos → les, but les + lo = se lo.",
  },
  {
    id: 3,
    sentence: "¿Tienes las llaves para tu madre?",
    blank: "¿____ tienes?",
    options: [
      { id: "a", text: "se las" },
      { id: "b", text: "le las" },
      { id: "c", text: "te las" },
      { id: "d", text: "se los" },
    ],
    correctAnswer: "a",
    explanation: "Direct = las llaves → las. Indirect = a tu madre → le, so le + las = se las.",
  },
  {
    id: 4,
    sentence: "Ellos leen el mensaje a su profesor.",
    blank: "Ellos ____ leen.",
    options: [
      { id: "a", text: "les lo" },
      { id: "b", text: "le lo" },
      { id: "c", text: "se lo" },
      { id: "d", text: "nos lo" },
    ],
    correctAnswer: "c",
    explanation: "Indirect = a su profesor → le. Direct = el mensaje → lo. Correct combination: se lo.",
  },
  {
    id: 5,
    sentence: "Nosotros explicamos las reglas a los visitantes.",
    blank: "Nosotros ____ explicamos",
    options: [
      { id: "a", text: "les las" },
      { id: "b", text: "se las" },
      { id: "c", text: "nos las" },
      { id: "d", text: "le las" },
    ],
    correctAnswer: "b",
    explanation: "Indirect = a los visitantes → les, but les + las = se las.",
  },
  {
    id: 6,
    sentence: "Juan quiere mostrar la casa a sus amigos.",
    blank: "Juan ____ quiere mostrar.",
    options: [
      { id: "a", text: "las se" },
      { id: "b", text: "les la" },
      { id: "c", text: "se lo" },
      { id: "d", text: "se la" },
    ],
    correctAnswer: "d",
    explanation: "Direct = la casa → la. Indirect = a sus amigos → les, so se la. Also valid after infinitive: Juan quiere mostrársela.",
  },
  {
    id: 7,
    sentence: "No envié las invitaciones a mis primos.",
    blank: "No ____ envié.",
    options: [
      { id: "a", text: "les las" },
      { id: "b", text: "se las" },
      { id: "c", text: "te las" },
      { id: "d", text: "se los" },
    ],
    correctAnswer: "b",
    explanation: "Direct object = las invitaciones → las. Indirect object = a mis primos → les → se. Correct combination: se las.",
  },
  {
    id: 8,
    sentence: "¿Enviaste el paquete a tus abuelos?",
    blank: "¿____ enviaste?",
    options: [
      { id: "a", text: "se lo" },
      { id: "b", text: "les lo" },
      { id: "c", text: "te lo" },
      { id: "d", text: "se la" },
    ],
    correctAnswer: "a",
    explanation: "Direct object = el paquete → lo. Indirect object = a tus abuelos → les → se. Correct combination: se lo.",
  },
  {
    id: 9,
    sentence: "Compramos los boletos para mis padres.",
    blank: "____ compramos.",
    options: [
      { id: "a", text: "se los" },
      { id: "b", text: "les los" },
      { id: "c", text: "nos los" },
      { id: "d", text: "se lo" },
    ],
    correctAnswer: "a",
    explanation: "Direct = los boletos → los. Indirect = a mis padres → les → se. Correct: se los.",
  },
  {
    id: 10,
    sentence: "El profesor explicó la lección a los estudiantes.",
    blank: "El profesor ____ explicó claramente.",
    options: [
      { id: "a", text: "se lo" },
      { id: "b", text: "les la" },
      { id: "c", text: "se la" },
      { id: "d", text: "se las" },
    ],
    correctAnswer: "c",
    explanation: "Direct = la lección → la. Indirect = a los estudiantes → les → se. Correct: se la.",
  },
];

// Page 2: Rewrite the sentence
export const combinedObjectsSePage2: RewriteExercise[] = [
  {
    id: 1,
    original: "María prepara la cena para su esposo.",
    correctAnswer: "María se la prepara.",
    explanation: "Direct object = la cena → la. Indirect object = a su esposo (le) → se → se la.",
  },
  {
    id: 2,
    original: "No encuentro mis llaves para mi hermana.",
    correctAnswer: "No se las encuentro.",
    explanation: "Direct = mis llaves → las. Indirect = a mi hermana (le) → se.",
  },
  {
    id: 3,
    original: "Pedro les mostró las fotos a sus amigos.",
    correctAnswer: "Pedro se las mostró.",
    explanation: "Direct = las fotos → las. Indirect = a sus amigos (les) → se.",
  },
  {
    id: 4,
    original: "¿Tienes mi número de teléfono para tus primos?",
    correctAnswer: "¿Se lo tienes?",
    explanation: "Direct = mi número de teléfono → lo. Indirect = a tus primos (les) → se.",
  },
  {
    id: 5,
    original: "Ana está leyendo una novela a su sobrina.",
    correctAnswer: "Ana se la está leyendo.",
    alternativeAnswer: "Ana está leyéndosela.",
    explanation: "Direct = una novela → la. Indirect = a su sobrina (le) → se. Posición: antes del verbo o después del infinitivo.",
  },
  {
    id: 6,
    original: "Compramos las entradas para nuestros padres.",
    correctAnswer: "Se las compramos.",
    explanation: "Direct = las entradas → las. Indirect = a nuestros padres (les) → se.",
  },
  {
    id: 7,
    original: "Ellos van a limpiar la casa para la abuela.",
    correctAnswer: "Ellos se la van a limpiar.",
    alternativeAnswer: "Ellos van a limpiársela.",
    explanation: "Direct = la casa → la. Indirect = a la abuela (le) → se.",
  },
  {
    id: 8,
    original: "¿Ya enviaste los documentos a tu jefe?",
    correctAnswer: "¿Ya se los enviaste?",
    explanation: "Direct = los documentos → los. Indirect = a tu jefe (le) → se.",
  },
  {
    id: 9,
    original: "No recuerdo esa canción para mis alumnos.",
    correctAnswer: "No se la recuerdo.",
    explanation: "Direct = esa canción → la. Indirect = a mis alumnos (les) → se.",
  },
  {
    id: 10,
    original: "El profesor explicó la lección a los estudiantes otra vez.",
    correctAnswer: "El profesor se la explicó otra vez.",
    explanation: "Direct = la lección → la. Indirect = a los estudiantes (les) → se.",
  },
];

// Page 3: Multiple choice with full sentences
export const combinedObjectsSePage3: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "¿Compraste la comida para tu mamá?",
    options: [
      { id: "a", text: "Sí, yo le la compré." },
      { id: "b", text: "Sí, yo se la compré." },
      { id: "c", text: "Sí, yo te la compré." },
      { id: "d", text: "Sí, yo se lo compré." },
    ],
    correctAnswer: "b",
    explanation: "DO = la comida → la. IO = a tu mamá (le) → se → se la.",
  },
  {
    id: 2,
    sentence: "¿Diste el dinero a tus amigos?",
    options: [
      { id: "a", text: "Sí, yo se lo di." },
      { id: "b", text: "Sí, yo les lo di." },
      { id: "c", text: "Sí, yo te lo di." },
      { id: "d", text: "Sí, yo se los di." },
    ],
    correctAnswer: "a",
    explanation: "DO = el dinero → lo. IO = a tus amigos (les) → se → se lo.",
  },
  {
    id: 3,
    sentence: "¿Entregaron ustedes las llaves al dueño?",
    options: [
      { id: "a", text: "No, no les los entregamos." },
      { id: "b", text: "No, no les las entregamos." },
      { id: "c", text: "No, no se los entregamos." },
      { id: "d", text: "No, no se las entregamos." },
    ],
    correctAnswer: "d",
    explanation: "DO = las llaves → las. IO = al dueño (le) → se → se las.",
  },
  {
    id: 4,
    sentence: "¿Tu padre lavó los platos para tu abuela?",
    options: [
      { id: "a", text: "No sé si se las lavó." },
      { id: "b", text: "No sé si le los lavó." },
      { id: "c", text: "No sé si se los lavó." },
      { id: "d", text: "No sé si te los lavó." },
    ],
    correctAnswer: "c",
    explanation: "DO = los platos → los. IO = a tu abuela (le) → se → se los.",
  },
  {
    id: 5,
    sentence: "¿Ellos trajeron el regalo a Marta?",
    options: [
      { id: "a", text: "Sí, le lo trajeron." },
      { id: "b", text: "Sí, la trajeron." },
      { id: "c", text: "No sé si se lo trajeron." },
      { id: "d", text: "Sí, se la trajeron." },
    ],
    correctAnswer: "c",
    explanation: "DO = el regalo → lo. IO = a Marta (le) → se → se lo.",
  },
  {
    id: 6,
    sentence: "¿Tú enviaste el mensaje al profesor?",
    options: [
      { id: "a", text: "No sé si se lo envié." },
      { id: "b", text: "No sé si te lo envié." },
      { id: "c", text: "No sé si se lo enviaste." },
      { id: "d", text: "No sé si se lo envié." },
    ],
    correctAnswer: "d",
    explanation: "DO = el mensaje → lo. IO = al profesor (le) → se → se lo.",
  },
  {
    id: 7,
    sentence: "¿Leíste tú el cuento a los niños?",
    options: [
      { id: "a", text: "No, no se lo leí." },
      { id: "b", text: "No, no les lo leí." },
      { id: "c", text: "No, no se la leí." },
      { id: "d", text: "No, no lo les leí." },
    ],
    correctAnswer: "a",
    explanation: "Direct object = el cuento → lo. Indirect object = a los niños (les) → se → se lo.",
  },
  {
    id: 8,
    sentence: "¿El profesor explicó la lección a los estudiantes?",
    options: [
      { id: "a", text: "No sé si se la explicó." },
      { id: "b", text: "No sé si les la explicó." },
      { id: "c", text: "No sé si te la explicó." },
      { id: "d", text: "No sé si se la explicaste." },
    ],
    correctAnswer: "a",
    explanation: "DO = la lección → la. IO = a los estudiantes (les) → se → se la.",
  },
  {
    id: 9,
    sentence: "¿Tú hiciste la tarea para tu hermano?",
    options: [
      { id: "a", text: "No, no le la hice." },
      { id: "b", text: "No, no se la hice." },
      { id: "c", text: "No, no se lo hice." },
      { id: "d", text: "No, no se las hice." },
    ],
    correctAnswer: "b",
    explanation: "DO = la tarea → la. IO = a tu hermano (le) → se → se la.",
  },
  {
    id: 10,
    sentence: "¿Ustedes trajeron la película a los niños?",
    options: [
      { id: "a", text: "Sí, se la trajimos." },
      { id: "b", text: "Sí, se la trajeron." },
      { id: "c", text: "Sí, le la trajeron." },
      { id: "d", text: "Sí, te la trajeron." },
    ],
    correctAnswer: "b",
    explanation: "DO = la película → la. IO = a los niños (les) → se → se la.",
  },
];
