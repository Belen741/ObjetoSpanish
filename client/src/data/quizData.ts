export type Question = {
  id: number;
  original: string;
  instruction?: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    original: "Veo a María todos los días.",
    instruction: "Which is the correct form with the pronoun?",
    options: [
      { id: "a", text: "Lo veo todos los días." },
      { id: "b", text: "La veo todos los días." },
      { id: "c", text: "Le veo todos los días." },
      { id: "d", text: "Me la veo todos los días." },
    ],
    correctAnswer: "b",
  },
  {
    id: 2,
    original: "Escribo una carta a mi madre",
    instruction: "Which is the correct form with the pronoun?",
    options: [
      { id: "a", text: "La escribo una carta." },
      { id: "b", text: "Lo escribo a mi madre" },
      { id: "c", text: "Me la escribo." },
      { id: "d", text: "Le escribo una carta." },
    ],
    correctAnswer: "d",
  },
  {
    id: 3,
    original: "Pedro me dio el libro",
    instruction: "Which is the correct form with the pronoun?",
    options: [
      { id: "a", text: "Pedro me la dio." },
      { id: "b", text: "Pedro lo me dio." },
      { id: "c", text: "Pedro me lo dio." },
      { id: "d", text: "Pedro se lo dio." },
    ],
    correctAnswer: "c",
  },
  {
    id: 4,
    original: "Yo entregué el reporte a mi jefe",
    instruction: "Which is the correct form with the pronoun?",
    options: [
      { id: "a", text: "Le lo entregué." },
      { id: "b", text: "Se lo entregué." },
      { id: "c", text: "Lo se entregué." },
      { id: "d", text: "Lo le entregué." },
    ],
    correctAnswer: "b",
  },
  {
    id: 5,
    original: "Ellos ven a nosotros en el aeropuerto.",
    instruction: "Change the sentence from present to near future.",
    options: [
      { id: "a", text: "Ellos nos van a ver en el aeropuerto." },
      { id: "b", text: "Ellos van nos a ver en el aeropuerto." },
      { id: "c", text: "Ellos van a nos ver en el aeropuerto." },
      { id: "d", text: "Nos ellos van a ver en el aeropuerto." },
    ],
    correctAnswer: "a",
  },
  {
    id: 6,
    original: "Yo dije la verdad ayer a ti",
    instruction: "Change the sentence from present to simple past.",
    options: [
      { id: "a", text: "Yo te dije lo ayer." },
      { id: "b", text: "Yo dije te lo ayer." },
      { id: "c", text: "Yo te lo dije ayer." },
      { id: "d", text: "Yo lo te dije ayer." },
    ],
    correctAnswer: "c",
  },
  {
    id: 7,
    original: "Yo estoy diciendo la verdad a ti",
    instruction: "Change the sentence from present to present continuous.",
    options: [
      { id: "a", text: "Yo te la estoy diciendo." },
      { id: "b", text: "Yo estoy te la diciendo." },
      { id: "c", text: "Yo estoy diciéndotela." },
      { id: "d", text: "Ambas a) y c) son correctas." },
    ],
    correctAnswer: "d",
  },
  {
    id: 8,
    original: "Yo quiero comprar un regalo a ti",
    instruction: "Use the correct pronoun placement with the infinitive verb.",
    options: [
      { id: "a", text: "Yo lo quiero te comprar." },
      { id: "b", text: "Yo te lo quiero comprar." },
      { id: "c", text: "Yo quiero te lo comprar." },
      { id: "d", text: "Yo lo te quiero comprar." },
    ],
    correctAnswer: "b",
  },
  {
    id: 9,
    original: "Ella ha enviado los mensajes a mí",
    instruction: "Change the sentence from present to present perfect.",
    options: [
      { id: "a", text: "Ella los me ha enviado." },
      { id: "b", text: "Ella me ha los enviados." },
      { id: "c", text: "Ella ha me los enviado." },
      { id: "d", text: "Ella me los ha enviado." },
    ],
    correctAnswer: "d",
  },
  {
    id: 10,
    original: "Di la recomendación a mí",
    instruction: "Change the sentence from present to affirmative imperative.",
    options: [
      { id: "a", text: "Dime la." },
      { id: "b", text: "Dímela." },
      { id: "c", text: "Me la di." },
      { id: "d", text: "Di me la." },
    ],
    correctAnswer: "b",
  },
  {
    id: 11,
    original: "No digas el secreto a él",
    instruction: "Change the sentence from present to negative imperative.",
    options: [
      { id: "a", text: "No digaselo." },
      { id: "b", text: "No digas se lo." },
      { id: "c", text: "No se lo digas." },
      { id: "d", text: "No lo se digas." },
    ],
    correctAnswer: "c",
  },
];

export function getRecommendation(answers: Record<number, boolean>): string {
  const wrong = (id: number) => answers[id] === false;
  const right = (id: number) => answers[id] === true;
  
  // Basic Logic Checks
  if (wrong(1) && right(2)) {
    return "Te recomendamos practicar desde el principio- “Identificar objeto directo”";
  }
  if (right(1) && wrong(2)) {
    return "Sabes cómo sustituir el objeto directo, te recomendamos empezar a aprender desde “Identificar objeto Indirecto”";
  }
  
  // Check stop condition 1 failure
  if (wrong(1) || wrong(2)) {
    // Fallback if they got both wrong or some other combination not covered exactly above but failed early
    return "Te recomendamos repasar los fundamentos de objeto directo e indirecto.";
  }

  // Stop condition 2 checks
  if (right(1) && right(2) && right(4) && wrong(3)) {
    return "Sabes cómo sustituir el objeto directo e indirecto, te recomendamos empezar a aprender desde “sustituir dos objetos en una sola oración”";
  }
  if (right(1) && right(2) && right(3) && wrong(4)) {
    return "Sabes cómo sustituir el objeto directo e indirecto, te recomendamos empezar a aprender desde “sustituir dos objetos en una sola oración 2”";
  }
  
  if (wrong(3) || wrong(4)) {
     // Fallback for other failures in this block
     return "Te recomendamos practicar la sustitución de dos objetos.";
  }

  // Advanced checks (Q5+)
  const wrongCountFrom5 = [5,6,7,8,9,10,11].filter(id => wrong(id)).length;

  if (wrongCountFrom5 >= 2) {
    return "Parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente te falta practicar su posición en distintos tiempos verbales, te recomiendo repasar “Usarlos en diferentes tiempos verbales”";
  }

  if (wrong(5)) return "Felicidades, parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en oraciones en futuro próximo, te recomendamos repasar “Posición en futuro próximo”";
  if (wrong(6)) return "Parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en distintos tiempos verbales, te recomendamos empezar desde “Usarlo en diferentes tiempos verbales”";
  if (wrong(7)) return "Felicidades, parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en oraciones en Presente continuo, te recomendamos repasar “Presente continuo”";
  if (wrong(8)) return "Felicidades, parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en oraciones con infinitivo, te recomendamos repasar “Posición de objeto directo e indirecto con infinitivo”";
  if (wrong(9)) return "Felicidades, parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en oraciones en pretérito compuesto, te recomendamos repasar “Posición de objeto directo e indirecto en pretérito compuesto”";
  
  if (wrong(10) && wrong(11)) return "Felicidades, parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en oraciones en imperativo positivo y negativo, te recomendamos repasar “Posición de objeto directo e indirecto en imperativo positivo” y “Posición de objeto directo e indirecto en imperativo negativo”";
  if (wrong(10)) return "Felicidades, parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en oraciones en imperativo positivo, te recomendamos repasar “Posición de objeto directo e indirecto en imperativo positivo”";
  if (wrong(11)) return "Felicidades, parece que sabes cómo manejar los pronombres de objeto directo e indirecto, solamente de falta practicar su posición en oraciones en imperativo negativo, te recomendamos repasar “Posición de objeto directo e indirecto en imperativo negativo”";

  return "¡Felicidades! Has completado el test perfectamente. ¡Eres un maestro de los objetos directos e indirectos!";
}
