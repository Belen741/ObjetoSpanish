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
      { id: "b", text: "Yo dije te la ayer." },
      { id: "c", text: "Yo te la dije ayer." },
      { id: "d", text: "Yo la te dije ayer." },
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

export type RecommendationLink = {
  text: string;
  href: string;
};

export type Recommendation = {
  message: string;
  links: RecommendationLink[];
};

export function getRecommendation(answers: Record<number, boolean>): Recommendation {
  const wrong = (id: number) => answers[id] === false;
  const right = (id: number) => answers[id] === true;
  
  // Basic Logic Checks
  if (wrong(1) && right(2)) {
    return {
      message: "We recommend that you start practicing from the beginning:",
      links: [{ text: "Direct Object Practice", href: "/practice/exercises/direct-object" }]
    };
  }
  if (right(1) && wrong(2)) {
    return {
      message: "Since you already know how to replace the direct object, we recommend starting with:",
      links: [{ text: "Indirect Object Practice", href: "/practice/exercises/indirect-object" }]
    };
  }
  
  // Check stop condition 1 failure (Q1 & Q2)
  if (wrong(1) || wrong(2)) {
    return {
      message: "We recommend that you start practicing from the beginning:",
      links: [{ text: "Direct Object Practice", href: "/practice/exercises/direct-object" }]
    };
  }

  // Stop condition 2 checks (Q3 & Q4)
  if (right(1) && right(2) && right(4) && wrong(3)) {
    return {
      message: "Since you already know how to replace both direct and indirect objects, we recommend starting with:",
      links: [{ text: "Combined Objects Practice", href: "/practice/exercises/combined-objects" }]
    };
  }
  if (right(1) && right(2) && right(3) && wrong(4)) {
    return {
      message: "Since you already know how to replace direct and indirect objects, we recommend starting with:",
      links: [{ text: "Combined Objects with Se", href: "/practice/exercises/combined-objects-se" }]
    };
  }
  
  if (wrong(3) || wrong(4)) {
    return {
      message: "Since you already know how to replace both direct and indirect objects, we recommend starting with:",
      links: [{ text: "Combined Objects Practice", href: "/practice/exercises/combined-objects" }]
    };
  }

  // Advanced checks (Q5+) - If 2 or more incorrect from Q5 onwards
  const wrongCountFrom5 = [5,6,7,8,9,10,11].filter(id => wrong(id)).length;
  if (wrongCountFrom5 >= 2) {
    return {
      message: "It seems you already know how to use direct and indirect object pronouns; you just need to practice their placement in different verb tenses. We recommend reviewing:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }

  if (wrong(5)) {
    return {
      message: "Congratulations! It seems you already know how to use direct and indirect object pronouns. You just need to practice their placement in sentences in the near future tense. We recommend reviewing:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }
  if (wrong(6)) {
    return {
      message: "It seems you already know how to use direct and indirect object pronouns; you just need to practice their placement in different verb tenses. We recommend starting with:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }
  if (wrong(7)) {
    return {
      message: "Congratulations! It seems you already know how to use direct and indirect object pronouns; you just need to practice their placement in sentences in the present continuous tense. We recommend reviewing:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }
  if (wrong(8)) {
    return {
      message: "Congratulations! It seems you already know how to use direct and indirect object pronouns; you just need to practice their placement in sentences with an infinitive. We recommend reviewing:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }
  if (wrong(9)) {
    return {
      message: "Congratulations! It seems you already know how to use direct and indirect object pronouns; you just need to practice their placement in sentences in the present perfect. We recommend reviewing:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }
  
  // Q10 & Q11 Combined Check
  if (wrong(10) && wrong(11)) {
    return {
      message: "Congratulations, it seems you know how to handle direct and indirect object pronouns, you just need to practice their position in positive and negative imperative sentences. We recommend you review:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }
  
  if (wrong(10)) {
    return {
      message: "Congratulations, it seems you know how to handle direct and indirect object pronouns, you just need to practice their position in positive imperative sentences. We recommend you review:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }
  
  if (wrong(11)) {
    return {
      message: "Congratulations, it seems you know how to handle direct and indirect object pronouns, you just need to practice their position in negative imperative sentences. We recommend you review:",
      links: [{ text: "Pronouns in Different Verb Tenses", href: "/practice/exercises/verb-tenses" }]
    };
  }

  return {
    message: "Congratulations! You have mastered Direct and Indirect Objects in Spanish!",
    links: []
  };
}
