export type MultipleChoiceExercise = {
  id: number;
  instruction: string;
  sentence: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
};

export type RewriteExercise = {
  id: number;
  tense: string;
  original: string;
  correctAnswer: string;
  alternativeAnswer?: string;
  explanation: string;
};

// Page 1: Select the correct form
export const verbTensesPage1: MultipleChoiceExercise[] = [
  {
    id: 1,
    instruction: "Change the sentence from present to near future.",
    sentence: "Ellos dan el informe a nosotros.",
    options: [
      { id: "a", text: "Ellos nos van a dar el informe." },
      { id: "b", text: "Ellos van nos a dar el informe." },
      { id: "c", text: "Ellos van a nos dar el informe." },
      { id: "d", text: "Nos ellos van a dar el informe." },
    ],
    correctAnswer: "a",
    explanation: "Indirect object: a nosotros → nos. Direct object: el informe → lo. Correct near-future structure: pronoun + ir + a + infinitive → nos van a dar. You can also place both pronouns after the infinitive: Ellos van a dárnoslo.",
  },
  {
    id: 2,
    instruction: "Change the sentence from present to simple future.",
    sentence: "Yo llevo los documentos a ti.",
    options: [
      { id: "a", text: "Yo llevaré te los." },
      { id: "b", text: "Yo los te llevaré." },
      { id: "c", text: "Yo te los llevaré." },
      { id: "d", text: "Yo llevaré los te." },
    ],
    correctAnswer: "c",
    explanation: "Indirect object: a ti → te. Direct object: los documentos → los. In simple future, pronouns always go before the conjugated verb: → te los llevaré. There is no alternative placement in simple future.",
  },
  {
    id: 3,
    instruction: "Change the sentence from present to present continuous.",
    sentence: "Ella está explicando la tarea a mí.",
    options: [
      { id: "a", text: "Ella me la está explicando." },
      { id: "b", text: "Ella está me la explicando." },
      { id: "c", text: "Ella está explicándomela." },
      { id: "d", text: "Solo a) y c) son correctas." },
    ],
    correctAnswer: "d",
    explanation: "Spanish allows two correct placements in the present continuous: Before the auxiliary verb → me la está explicando. Attached to the gerund → está explicándomela. Option b) is incorrect because pronouns cannot be placed between estar and the gerund.",
  },
  {
    id: 4,
    instruction: "Use correct pronoun placement with the infinitive verb.",
    sentence: "Yo necesito mostrar las fotos a él.",
    options: [
      { id: "a", text: "Yo se las necesito mostrar." },
      { id: "b", text: "Yo necesito se las mostrar." },
      { id: "c", text: "Yo necesito mostrárselas." },
      { id: "d", text: "Ambas a) y c) son correctas." },
    ],
    correctAnswer: "d",
    explanation: "Spanish allows two correct placements with infinitives: Before the main verb → se las necesito mostrar. Attached to the infinitive → necesito mostrárselas. Option b) is incorrect because pronouns cannot be placed between the verb and the infinitive.",
  },
  {
    id: 5,
    instruction: "Change the sentence from present to present perfect.",
    sentence: "Ellos han mandado el paquete a nosotros.",
    options: [
      { id: "a", text: "Ellos nos lo han mandado." },
      { id: "b", text: "Ellos han nos lo mandado." },
      { id: "c", text: "Ellos han mandado lo nos." },
      { id: "d", text: "Ambas a) y c) son correctas." },
    ],
    correctAnswer: "a",
    explanation: "Indirect object: a nosotros → nos. Direct object: el paquete → lo. In compound tenses, pronouns must come before 'haber': → nos lo han mandado. There is no alternative placement in present perfect.",
  },
  {
    id: 6,
    instruction: "Change the sentence from present to affirmative imperative.",
    sentence: "Da el consejo a mí.",
    options: [
      { id: "a", text: "Me da lo." },
      { id: "b", text: "Dámelo." },
      { id: "c", text: "Me lo da." },
      { id: "d", text: "Melodá." },
    ],
    correctAnswer: "b",
    explanation: "In the affirmative imperative: Pronouns are always attached to the end of the verb. Order: verb + IO + DO → da + me + lo → dámelo. This form also requires a written accent to preserve the stress. No other placement is allowed in affirmative commands.",
  },
  {
    id: 7,
    instruction: "Change the sentence from present to negative imperative.",
    sentence: "No digas la verdad a ellos.",
    options: [
      { id: "a", text: "Se no la digas." },
      { id: "b", text: "No digas sela." },
      { id: "c", text: "No se la digas." },
      { id: "d", text: "No digas lo se." },
    ],
    correctAnswer: "c",
    explanation: "In negative commands: Pronouns must appear before the verb: → no + se + la + digas. There is no second correct placement in negative commands.",
  },
  {
    id: 8,
    instruction: "Change the sentence from present to near future.",
    sentence: "Yo explico el problema a ti.",
    options: [
      { id: "a", text: "Yo voy a explicar te lo." },
      { id: "b", text: "Yo voy te lo a explicar." },
      { id: "c", text: "Yo te lo voy a explicar." },
      { id: "d", text: "Yo voy lo te explicar." },
    ],
    correctAnswer: "c",
    explanation: "Indirect object: a ti → te. Direct object: el problema → lo. One correct near future structure is: → te lo voy a explicar. But Spanish allows another correct form: Yo voy a explicártelo. This is equally correct because pronouns may attach to the infinitive.",
  },
  {
    id: 9,
    instruction: "Change the sentence from present to simple future.",
    sentence: "Ellos dan el dinero a su abuela.",
    options: [
      { id: "a", text: "Ellos se lo darán." },
      { id: "b", text: "Ellos lo se darán." },
      { id: "c", text: "Ellos darán selo." },
      { id: "d", text: "Ellos se lo van darán." },
    ],
    correctAnswer: "a",
    explanation: "le/les + lo/la/los/las → se (to avoid le lo). Pronouns must go before the future tense verb: → se lo darán. There is no alternative placement in the simple future.",
  },
  {
    id: 10,
    instruction: "Change the sentence from present to present continuous.",
    sentence: "Yo estoy pidiendo el favor a ti.",
    options: [
      { id: "a", text: "Yo te lo estoy pidiendo." },
      { id: "b", text: "Yo estoy pidiéndotelo." },
      { id: "c", text: "Yo estoy te lo pidiendo." },
      { id: "d", text: "Ambas a) y b) son correctas." },
    ],
    correctAnswer: "d",
    explanation: "Spanish allows two valid placements: Before the auxiliary → te lo estoy pidiendo. Attached to the gerund → estoy pidiéndotelo. Option c) is incorrect because pronouns cannot be placed between 'estar' and the gerund.",
  },
];

// Page 2: Rewrite the sentence
export const verbTensesPage2: RewriteExercise[] = [
  {
    id: 1,
    tense: "Futuro próximo (near future)",
    original: "Ellos explican el problema a mí.",
    correctAnswer: "Ellos me lo van a explicar.",
    alternativeAnswer: "Ellos van a explicármelo.",
    explanation: "In near future you can place the pronouns before 'ir' or attached to the infinitive.",
  },
  {
    id: 2,
    tense: "Futuro próximo (near future)",
    original: "Yo doy el dinero a ellos.",
    correctAnswer: "Yo se lo voy a dar.",
    alternativeAnswer: "Yo voy a dárselo.",
    explanation: "les + lo → se lo; both positions (before 'ir' / attached to infinitive) are correct.",
  },
  {
    id: 3,
    tense: "Condicional (simple conditional)",
    original: "Yo enviaría los documentos a usted.",
    correctAnswer: "Yo se los enviaría.",
    explanation: "In conditional, pronouns always go before the verb.",
  },
  {
    id: 4,
    tense: "Presente continuo (present continuous)",
    original: "Ella está diciendo la verdad a nosotros.",
    correctAnswer: "Ella nos la está diciendo.",
    alternativeAnswer: "Ella está diciéndonosla.",
    explanation: "With the present continuous, pronouns may go before 'estar' or attached to the gerund.",
  },
  {
    id: 5,
    tense: "Presente continuo (present continuous)",
    original: "Yo estoy leyendo el mensaje a ti.",
    correctAnswer: "Yo te lo estoy leyendo.",
    alternativeAnswer: "Yo estoy leyéndotelo.",
    explanation: "Both placements are correct in this tense.",
  },
  {
    id: 6,
    tense: "Infinitivo",
    original: "Nosotros necesitamos dar las noticias a ellos.",
    correctAnswer: "Nosotros se las necesitamos dar.",
    alternativeAnswer: "Nosotros necesitamos dárselas.",
    explanation: "With an infinitive, pronouns may go before the main verb or attached to the infinitive.",
  },
  {
    id: 7,
    tense: "Pretérito perfecto (present perfect)",
    original: "Ella ha explicado la tarea a ustedes.",
    correctAnswer: "Ella se la ha explicado.",
    explanation: "In compound tenses, pronouns always go before 'haber'.",
  },
  {
    id: 8,
    tense: "Pretérito perfecto (present perfect)",
    original: "Yo he enviado los archivos a ti.",
    correctAnswer: "Yo te los he enviado.",
    explanation: "IO + DO must appear before 'haber'.",
  },
  {
    id: 9,
    tense: "Imperativo positivo (affirmative imperative)",
    original: "Da la recomendación a él.",
    correctAnswer: "Dásela.",
    explanation: "In positive commands, pronouns attach to the verb: verbo + IO + DO.",
  },
  {
    id: 10,
    tense: "Imperativo negativo (negative imperative)",
    original: "No digas el secreto a ellos.",
    correctAnswer: "No se lo digas.",
    explanation: "In negative commands, pronouns go before the verb: no + se + lo + digas.",
  },
];

// Page 3: Multiple choice with full sentences
export const verbTensesPage3: MultipleChoiceExercise[] = [
  {
    id: 1,
    instruction: "",
    sentence: "¿Vas a darme el reporte mañana?",
    options: [
      { id: "a", text: "Sí, voy a te lo dar." },
      { id: "b", text: "Sí, voy te lo a dar." },
      { id: "c", text: "Sí, te lo voy a dar." },
      { id: "d", text: "Sí, lo te voy a dar." },
    ],
    correctAnswer: "c",
    explanation: "In the near future, pronouns may go before 'ir' (te lo voy a dar). También existe la forma válida 'voy a dártelo', pero no aparece como opción.",
  },
  {
    id: 2,
    instruction: "",
    sentence: "¿Ellos enviarán los documentos a su jefe?",
    options: [
      { id: "a", text: "Sí, los se enviarán." },
      { id: "b", text: "Sí, se los enviarán." },
      { id: "c", text: "Sí, enviaránselos." },
      { id: "d", text: "Sí, se enviarán los." },
    ],
    correctAnswer: "b",
    explanation: "In simple future, pronouns go before the conjugated verb → se los enviarán.",
  },
  {
    id: 3,
    instruction: "",
    sentence: "¿Podrías mostrarme la información?",
    options: [
      { id: "a", text: "Sí, te la podría mostrar." },
      { id: "b", text: "Sí, podría mostrártela." },
      { id: "c", text: "Ambas a) y b) son correctas." },
      { id: "d", text: "Sí, la te podría mostrar." },
    ],
    correctAnswer: "c",
    explanation: "Pronouns can appear before the verb (te la podría mostrar) or attached to the infinitive (podría mostrártela).",
  },
  {
    id: 4,
    instruction: "",
    sentence: "¿Estás explicándonos el plan?",
    options: [
      { id: "a", text: "Sí, se lo estoy explicando." },
      { id: "b", text: "Sí, estoy explicándoselo." },
      { id: "c", text: "Ambas a) y b) son correctas." },
      { id: "d", text: "Sí, estoy se lo explicando." },
    ],
    correctAnswer: "c",
    explanation: "In the present continuous, pronouns can go before 'estar' or attached to the gerund.",
  },
  {
    id: 5,
    instruction: "",
    sentence: "¿Estás leyéndome el mensaje?",
    options: [
      { id: "a", text: "Sí, te lo estoy leyendo." },
      { id: "b", text: "Sí, estoy leyéndotelo." },
      { id: "c", text: "Ambas a) y b) son correctas." },
      { id: "d", text: "Sí, estoy te lo leyendo." },
    ],
    correctAnswer: "c",
    explanation: "Both placements are valid: before estar or attached to the gerund.",
  },
  {
    id: 6,
    instruction: "",
    sentence: "¿Quieres mandarle las fotos a tu prima?",
    options: [
      { id: "a", text: "Sí, quiero mandárselas." },
      { id: "b", text: "Sí, se las quiero mandar." },
      { id: "c", text: "Ambas a) y b) son correctas." },
      { id: "d", text: "Sí, quiero se las mandar." },
    ],
    correctAnswer: "c",
    explanation: "With infinitives, pronouns may attach to the infinitive or go before the main verb.",
  },
  {
    id: 7,
    instruction: "",
    sentence: "¿Has dado los detalles a tus estudiantes?",
    options: [
      { id: "a", text: "Sí, se los has dado." },
      { id: "b", text: "Sí, has dadoselos." },
      { id: "c", text: "Ambas a) y b) son correctas." },
      { id: "d", text: "Sí, se los dado has." },
    ],
    correctAnswer: "a",
    explanation: "In compound tenses, pronouns always go before 'haber'.",
  },
  {
    id: 8,
    instruction: "",
    sentence: "¿Han enviado ustedes el archivo a mí?",
    options: [
      { id: "a", text: "Sí, han enviado me lo." },
      { id: "b", text: "Sí, lo me han enviado." },
      { id: "c", text: "Sí, han me lo enviado." },
      { id: "d", text: "Sí, me lo han enviado." },
    ],
    correctAnswer: "d",
    explanation: "Correct order → pronoun + haber + participle.",
  },
  {
    id: 9,
    instruction: "",
    sentence: "¿Quieres que le de la información a ellos?",
    options: [
      { id: "a", text: "Sí, se la das." },
      { id: "b", text: "Sí, dásela." },
      { id: "c", text: "Sí, se la da." },
      { id: "d", text: "Sí, dasela." },
    ],
    correctAnswer: "b",
    explanation: "In affirmative commands, pronouns attach to the verb in this order: verb + IO + DO.",
  },
  {
    id: 10,
    instruction: "",
    sentence: "¿Le digo el secreto a ella?",
    options: [
      { id: "a", text: "No se lo digas." },
      { id: "b", text: "No digas selo." },
      { id: "c", text: "Ambas a) y b) son correctas." },
      { id: "d", text: "No se lo dices." },
    ],
    correctAnswer: "a",
    explanation: "In negative commands, pronouns go before the verb → no + se + lo + digas.",
  },
];
