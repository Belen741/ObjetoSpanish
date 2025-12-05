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
export const combinedObjectsPage1: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "Yo doy las llaves a ti.",
    blank: "Yo ____ ____ doy.",
    options: [
      { id: "a", text: "le las" },
      { id: "b", text: "te los" },
      { id: "c", text: "te las" },
      { id: "d", text: "me las" },
    ],
    correctAnswer: "c",
    explanation: "Indirect object = a ti → te. Direct object = las llaves → las. Combinación permitida: te las.",
  },
  {
    id: 2,
    sentence: "Ella muestra el libro a mí.",
    blank: "Ella ____ ____ muestra.",
    options: [
      { id: "a", text: "me lo" },
      { id: "b", text: "me la" },
      { id: "c", text: "le lo" },
      { id: "d", text: "me los" },
    ],
    correctAnswer: "a",
    explanation: "Indirect = a mí → me. Direct = el libro → lo. Combinación: me lo.",
  },
  {
    id: 3,
    sentence: "Yo doy mis notas a ti.",
    blank: "Yo ____ ____ doy.",
    options: [
      { id: "a", text: "me las" },
      { id: "b", text: "le las" },
      { id: "c", text: "las te" },
      { id: "d", text: "te las" },
    ],
    correctAnswer: "d",
    explanation: "Indirect object = a ti → te. Direct object = mis notas (feminine plural) → las. Combinación válida: te las.",
  },
  {
    id: 4,
    sentence: "Yo presto dinero a ti.",
    blank: "Yo ____ ____ presto.",
    options: [
      { id: "a", text: "me lo" },
      { id: "b", text: "te la" },
      { id: "c", text: "te lo" },
      { id: "d", text: "le lo" },
    ],
    correctAnswer: "c",
    explanation: "Indirect = a ti → te. Direct = dinero → lo. Combinación válida: te lo.",
  },
  {
    id: 5,
    sentence: "Ellos leen la carta a nosotros.",
    blank: "Ellos ____ ____ leen.",
    options: [
      { id: "a", text: "nos la" },
      { id: "b", text: "nos lo" },
      { id: "c", text: "les la" },
      { id: "d", text: "la nos" },
    ],
    correctAnswer: "a",
    explanation: "Indirect = a nosotros → nos. Direct = la carta → la. Combinación válida: nos la.",
  },
  {
    id: 6,
    sentence: "Tú preparas la comida para mí.",
    blank: "Tú ____ ____ preparas.",
    options: [
      { id: "a", text: "le la" },
      { id: "b", text: "me lo" },
      { id: "c", text: "me la" },
      { id: "d", text: "te la" },
    ],
    correctAnswer: "c",
    explanation: "Indirect = para mí → me. Direct = la comida → la. Combinación válida: me la.",
  },
  {
    id: 7,
    sentence: "Yo compro un regalo para ti.",
    blank: "Yo ____ ____ compro.",
    options: [
      { id: "a", text: "te lo" },
      { id: "b", text: "te la" },
      { id: "c", text: "me lo" },
      { id: "d", text: "le lo" },
    ],
    correctAnswer: "a",
    explanation: "Indirect = para ti → te. Direct = un regalo → lo. Combinación válida: te lo.",
  },
  {
    id: 8,
    sentence: "Nosotros mandamos el mensaje a mí.",
    blank: "Nosotros ____ ____ mandamos.",
    options: [
      { id: "a", text: "nos lo" },
      { id: "b", text: "me la" },
      { id: "c", text: "le lo" },
      { id: "d", text: "me lo" },
    ],
    correctAnswer: "d",
    explanation: "Indirect = a mí → me. Direct = el mensaje → lo. Combinación válida: me lo.",
  },
  {
    id: 9,
    sentence: "La maestra explica la tarea a nosotros.",
    blank: "La maestra ____ ____ explica.",
    options: [
      { id: "a", text: "nos la" },
      { id: "b", text: "nos lo" },
      { id: "c", text: "me la" },
      { id: "d", text: "le la" },
    ],
    correctAnswer: "a",
    explanation: "Indirect = a nosotros → nos. Direct = la tarea → la. Combinación válida: nos la.",
  },
  {
    id: 10,
    sentence: "Yo muestro las fotografías a ti.",
    blank: "Yo ____ ____ muestro.",
    options: [
      { id: "a", text: "te los" },
      { id: "b", text: "te las" },
      { id: "c", text: "me las" },
      { id: "d", text: "le las" },
    ],
    correctAnswer: "b",
    explanation: "Indirect = a ti → te. Direct = las fotografías → las. Combinación válida: te las.",
  },
];

// Page 2: Rewrite the sentence
export const combinedObjectsPage2: RewriteExercise[] = [
  {
    id: 1,
    original: "Yo explico la tarea a ti.",
    correctAnswer: "Yo te la explico.",
    explanation: "Indirect: a ti → te. Direct: la tarea → la.",
  },
  {
    id: 2,
    original: "Mi madre prepara la comida para mí.",
    correctAnswer: "Mi madre me la prepara.",
    explanation: "Indirect: para mí → me. Direct: la comida → la.",
  },
  {
    id: 3,
    original: "Nosotros damos el dinero a ti.",
    correctAnswer: "Nosotros te lo damos.",
    explanation: "Indirect: a ti → te. Direct: el dinero → lo.",
  },
  {
    id: 4,
    original: "Ella muestra las fotos a mí.",
    correctAnswer: "Ella me las muestra.",
    explanation: "Indirect: a mí → me. Direct: las fotos → las.",
  },
  {
    id: 5,
    original: "Yo compro un regalo para ti.",
    correctAnswer: "Yo te lo compro.",
    explanation: "Indirect: para ti → te. Direct: un regalo → lo.",
  },
  {
    id: 6,
    original: "Nosotros contamos la historia a nosotros.",
    correctAnswer: "Nosotros nos la contamos.",
    explanation: "Indirect: a nosotros → nos. Direct: la historia → la.",
  },
  {
    id: 7,
    original: "Yo paso los apuntes a ti.",
    correctAnswer: "Yo te los paso.",
    explanation: "Indirect: a ti → te. Direct: los apuntes → los.",
  },
  {
    id: 8,
    original: "Tú prestas la computadora a mí.",
    correctAnswer: "Tú me la prestas.",
    explanation: "Indirect: a mí → me. Direct: la computadora → la.",
  },
  {
    id: 9,
    original: "El profesor lee el mensaje a nosotros.",
    correctAnswer: "El profesor nos lo lee.",
    explanation: "Indirect: a nosotros → nos. Direct: el mensaje → lo.",
  },
  {
    id: 10,
    original: "Yo preparo las presentaciones para ti.",
    correctAnswer: "Yo te las preparo.",
    explanation: "Indirect: para ti → te. Direct: las presentaciones → las.",
  },
];

// Page 3: Multiple choice with full sentences
export const combinedObjectsPage3: MultipleChoiceExercise[] = [
  {
    id: 1,
    sentence: "¿Me diste las llaves ayer?",
    options: [
      { id: "a", text: "Sí, yo me las di." },
      { id: "b", text: "Sí, yo te las di." },
      { id: "c", text: "Sí, yo me los di." },
      { id: "d", text: "Sí, yo te los di." },
    ],
    correctAnswer: "b",
    explanation: "Direct object: las llaves → las. Indirect object in the final sentence: a ti → te. Correct order with two pronouns: te las.",
  },
  {
    id: 2,
    sentence: "¿Me explicaste la tarea de matemáticas?",
    options: [
      { id: "a", text: "Sí, yo te la expliqué." },
      { id: "b", text: "Sí, yo me la explicaste." },
      { id: "c", text: "Sí, yo te la explicaste." },
      { id: "d", text: "Sí, yo te lo expliqué." },
    ],
    correctAnswer: "a",
    explanation: "Direct object: la tarea → la. Indirect object in the answer: a ti → te. Correct combination: te la (indirect before direct).",
  },
  {
    id: 3,
    sentence: "¿Me enviaste los documentos por correo?",
    options: [
      { id: "a", text: "Sí, yo te lo envié." },
      { id: "b", text: "Sí, yo me los enviaste." },
      { id: "c", text: "Sí, yo te las envié." },
      { id: "d", text: "Sí, yo te los envié." },
    ],
    correctAnswer: "d",
    explanation: "Direct object: los documentos → los. Indirect object: a ti → te. Two pronouns together: te los.",
  },
  {
    id: 4,
    sentence: "¿Me compraste el libro que te pedí?",
    options: [
      { id: "a", text: "Sí, yo te la compré." },
      { id: "b", text: "Sí, yo me lo compré." },
      { id: "c", text: "Sí, yo te lo compré." },
      { id: "d", text: "Sí, yo te los compré." },
    ],
    correctAnswer: "c",
    explanation: "Direct object: el libro → lo. Indirect object: a ti → te. Correct form: te lo.",
  },
  {
    id: 5,
    sentence: "¿Me mostraste las fotos del viaje?",
    options: [
      { id: "a", text: "Sí, yo me las mostré." },
      { id: "b", text: "Sí, yo te las mostré." },
      { id: "c", text: "Sí, yo te los mostré." },
      { id: "d", text: "Sí, yo te la mostré." },
    ],
    correctAnswer: "b",
    explanation: "Direct object: las fotos → las. Indirect object: a ti → te. Correct pair: te las.",
  },
  {
    id: 6,
    sentence: "¿Me preparaste la cena anoche?",
    options: [
      { id: "a", text: "Sí, yo te lo preparé." },
      { id: "b", text: "Sí, yo te las preparé." },
      { id: "c", text: "Sí, yo me la preparé." },
      { id: "d", text: "Sí, yo te la preparé." },
    ],
    correctAnswer: "d",
    explanation: "Direct object: la cena → la. Indirect object: a ti → te. Correct answer: te la preparé.",
  },
  {
    id: 7,
    sentence: "¿Me trajiste el café esta mañana?",
    options: [
      { id: "a", text: "Sí, yo me lo trajiste." },
      { id: "b", text: "Sí, yo te la traje." },
      { id: "c", text: "Sí, yo te lo traje." },
      { id: "d", text: "Sí, yo te los traje." },
    ],
    correctAnswer: "c",
    explanation: "Direct object: el café → lo. Indirect object: a ti → te. Two pronouns: te lo.",
  },
  {
    id: 8,
    sentence: "¿Me contaste la historia completa?",
    options: [
      { id: "a", text: "Sí, yo te las conté." },
      { id: "b", text: "Sí, yo me la conté." },
      { id: "c", text: "Sí, yo te lo conté." },
      { id: "d", text: "Sí, yo te la conté." },
    ],
    correctAnswer: "d",
    explanation: "Direct object: la historia → la. Indirect object: a ti → te. Correct structure: te la conté.",
  },
  {
    id: 9,
    sentence: "¿Me reservaste los boletos para el concierto?",
    options: [
      { id: "a", text: "Sí, yo me los reservé." },
      { id: "b", text: "Sí, yo te las reservé." },
      { id: "c", text: "Sí, yo te los reservé." },
      { id: "d", text: "Sí, yo te lo reservé." },
    ],
    correctAnswer: "c",
    explanation: "Direct object: los boletos → los. Indirect object: a ti → te. Correct combination: te los.",
  },
  {
    id: 10,
    sentence: "¿Me escribiste la respuesta en un mensaje?",
    options: [
      { id: "a", text: "Sí, yo te la escribí." },
      { id: "b", text: "Sí, yo te lo escribí." },
      { id: "c", text: "Sí, yo me la escribí." },
      { id: "d", text: "Sí, yo te las escribí." },
    ],
    correctAnswer: "a",
    explanation: "Direct object: la respuesta → la. Indirect object: a ti → te. Correct pair of pronouns: te la.",
  },
];
