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
  segments: { text: string; isBlank: boolean; correctAnswers?: string[]; explanation?: string }[];
  dropdownOptions: string[];
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

// Page 4: Fill in the blanks with dropdown
export const combinedObjectsPage4: FillInStoryExercise[] = [
  {
    id: 1,
    title: "Un evento cultural en la escuela",
    segments: [
      { text: "El lunes llegamos temprano para organizar el evento cultural de la escuela. Primero María imprimió los carteles y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["nos", "los"], explanation: "nos los – Nos = to us (indirect object) + los = the posters (direct object). María gave the posters to us → she gave us them." },
      { text: " repartió a nosotros antes de la reunión. Después yo preparé las invitaciones y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "las"], explanation: "te las – Te = to you + las = the invitations. I showed the invitations to you → I showed you them." },
      { text: " mostré a ti para recibir tu opinión. Más tarde el profesor ordenó los instrumentos musicales y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["los"], explanation: "los – Los = the instruments (direct object). No double pronoun possible without \"se\". He placed them on the stage." },
      { text: " colocó en el escenario con ayuda del equipo. En el descanso tú compraste los bocadillos y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["me", "los"], explanation: "me los – Me = to me + los = the snacks. You gave the snacks to me → you gave me them." },
      { text: " diste a mí en una caja pequeña. Por la tarde los alumnos decoraron el salón y la directora ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["les"], explanation: "les – Les = to them (indirect object). She took photos of them." },
      { text: " tomó fotos. Al final yo armé la lista de actividades y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "la"], explanation: "te la – Te = to you + la = the list. I sent the list to you → I sent you it." },
      { text: " envié por mensaje.", isBlank: false },
    ],
    dropdownOptions: ["me", "te", "le", "la", "lo", "les", "las", "los", "nos"],
  },
  {
    id: 2,
    title: "Conversación: Libros y materiales",
    segments: [
      { text: "Ana: —¿Viste los libros nuevos del curso?\nCarlos: —Sí, ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["me", "los"], explanation: "me los – Me = to me (IO) + los = the books (DO). Laura showed the books to me → she showed me them." },
      { text: " mostró Laura ayer.\n\nAna: —Genial. Yo preparé las tarjetas. Más tarde ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "las"], explanation: "te las – Te = to you + las = the cards. I will give the cards to you → I'll give you them." },
      { text: " doy para revisarlas.\nCarlos: —Perfecto. Ayer ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["nos", "los"], explanation: "nos los – Nos = to us + los = the certificates. The director gave the certificates to us → gave us them." },
      { text: " dio el director, los certificados también.\nAna: —Ah, qué bueno. Y la presentación, ¿quién ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["la"], explanation: "la – \"La presentación\" = direct object. Who shared it with you all?" },
      { text: " compartió a ustedes?\nCarlos: —Ana, la compañera del equipo ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["nos"], explanation: "nos – To us = nos. She shared the presentation to us by email." },
      { text: " la compartió por correo.\nAna: —Excelente. Yo ya guardé los materiales del salón, ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["los"], explanation: "los – \"Los materiales\" = direct object. I already kept them in the classroom." },
      { text: " dejé en su lugar.", isBlank: false },
    ],
    dropdownOptions: ["me", "te", "le", "la", "lo", "les", "las", "los", "nos"],
  },
  {
    id: 3,
    title: "Conversación: Preparando el taller",
    segments: [
      { text: "Yo: —Oye, ayer preparé el material del taller. ¿Recuerdas que ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "lo"], explanation: "te lo – Te = to you (IO) + lo = the material (DO). I taught the material to you → I taught you it." },
      { text: " enseñé en la mañana?\n\nTú: —Sí, claro, ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["me", "lo"], explanation: "me lo – Me = to me + lo = the material/info. You explained it to me → you explained me it." },
      { text: " explicaste muy bien. Por cierto, traje las hojas impresas. ¿Quieres que ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "las"], explanation: "te las – Te = to you + las = the printed sheets. Do you want me to give them to you?" },
      { text: " dé en este momento?\n\nYo: —Sí, por favor. También hice los ejemplos y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "los"], explanation: "te los – Te = to you + los = the examples. I will show them to you later." },
      { text: " mostraré después de la comida.\n\nTú: —Perfecto. Yo organicé los libros y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["los"], explanation: "los – Los = the books (direct object). I placed them on the table." },
      { text: " puse en la mesa de trabajo. Ah, y mañana ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "los"], explanation: "te los – Te = to you + los = the audios. I will send them to you tomorrow." },
      { text: " enviaré por correo, los audios del ejercicio final.\n\nYo: —Genial. Hoy grabé los diálogos y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te", "los"], explanation: "te los – Te = to you + los = the dialogues. I will share them with you this afternoon." },
      { text: " compartiré a ti por la tarde para que los revises.\n\nTú: —Súper. Ayer la coordinadora revisó el plan y ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["nos", "lo"], explanation: "nos lo – Nos = to us + lo = the plan. She gave it to us with corrections." },
      { text: " entregó a nosotros con algunas correcciones. ¿Quieres que ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["te"], explanation: "te – Te = to you (IO). DO is missing in the question (implicit: the document). Do you want me to show you (the document)?" },
      { text: " muestre el documento nuevo ahora?\n\nYo: —Sí, muéstralo. De hecho, ", isBlank: false },
      { text: "", isBlank: true, correctAnswers: ["lo"], explanation: "lo – Lo = the document (DO). I saved it in my folder." },
      { text: " guardé en mi carpeta para tenerlo a la mano.", isBlank: false },
    ],
    dropdownOptions: ["me", "te", "le", "la", "lo", "les", "las", "los", "nos"],
  },
];
