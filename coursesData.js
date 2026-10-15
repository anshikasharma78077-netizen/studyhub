// ==========================================================================
// StudyHub Educational Data Store
// Curricula for Indian School Education (Classes 6 to 12)
// ==========================================================================

export const CLASSES_DATA = [
  {
    id: '6',
    title: 'Class 6',
    tagline: 'Middle School Foundation',
    level: 'Middle School',
    badge: 'Foundation',
    color: '#0284c7',
    description: 'Build foundational understanding in Science, Mathematics, Social Studies and Languages with interactive notes.',
    streams: null,
    subjects: [
      {
        id: 'c6-maths',
        name: 'Mathematics',
        icon: 'Calculator',
        themeColor: '#0284c7',
        chaptersCount: 12,
        description: 'Numbers, basic geometry, integers, fractions, mensuration, and introductory algebra.',
        chapters: [
          {
            id: 'c6-math-ch1',
            number: 1,
            title: 'Knowing Our Numbers',
            estimatedTime: '25 mins',
            difficulty: 'Easy',
            summary: 'Comparing large numbers, Indian and International place value systems, estimation and Roman numerals.',
            notes: {
              overview: 'Numbers are the foundation of mathematics. In this chapter, we learn to compare large numbers up to crores, understand place value systems, and work with estimation and Roman numerals.',
              keyPoints: [
                '1 Lakh = 100 Thousands = 1,00,000 (5 zeros)',
                '1 Crore = 100 Lakhs = 10 Millions = 1,00,00,000 (7 zeros)',
                'Indian Place Value: Ones, Tens, Hundreds, Thousands, Ten Thousands, Lakhs, Ten Lakhs, Crores.',
                'International Place Value: Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions, Ten Millions.',
                'Estimation Rule: Numbers with units 1, 2, 3, 4 are rounded down to 0; numbers 5, 6, 7, 8, 9 are rounded up to 10.',
                'Roman Numerals: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.'
              ],
              formulae: [
                '1 km = 1,000 m = 1,00,000 cm = 10,00,000 mm',
                '1 kg = 1,000 g = 10,00,000 mg',
                '1 Litre = 1,000 millilitres'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'How many thousands make one million?',
                options: ['10', '100', '1000', '10000'],
                correctAnswer: 2,
                explanation: '1 Million = 1,000,000 = 1,000 thousands. Hence, 1,000 thousands make one million.'
              },
              {
                id: 2,
                question: 'Which of the following Roman numerals is invalid?',
                options: ['XIV', 'VL', 'LX', 'CX'],
                correctAnswer: 1,
                explanation: 'The symbols V, L, and D are never subtracted from any symbol. Therefore, VL is invalid.'
              },
              {
                id: 3,
                question: 'Round off 75,847 to the nearest thousands:',
                options: ['75,000', '76,000', '75,800', '80,000'],
                correctAnswer: 1,
                explanation: 'The digit at hundreds place is 8 (>=5), so we round up to 76,000.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Insert commas suitably and write the number name in the Indian and International System: 87595762',
                answer: 'Indian System: 8,75,95,762 (Eight crore seventy-five lakh ninety-five thousand seven hundred sixty-two).\\nInternational System: 87,595,762 (Eighty-seven million five hundred ninety-five thousand seven hundred sixty-two).'
              },
              {
                marks: 5,
                question: 'A machine, on an average, manufactures 2,825 screws a day. How many screws did it produce in the month of January 2024?',
                answer: 'Number of screws produced per day = 2,825.\\nDays in January = 31 days.\\nTotal screws = 2,825 × 31 = 87,575 screws.\\nStep-by-step: 2,825 × 30 = 84,750; 2,825 × 1 = 2,825; 84,750 + 2,825 = 87,575.'
              }
            ],
            revisionSheet: [
              'Remember: V, L, D are never repeated or subtracted.',
              '1 Billion = 1,000 Millions = 100 Crores.',
              'Brackets rule: Solve innermost brackets first: ( ) then { } then [ ].'
            ],
            samplePaper: {
              paperTitle: 'Class 6 Mathematics Periodic Test Paper (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: [
                'Section A: 10 MCQs (1 mark each)',
                'Section B: 5 Short Answer Questions (2 marks each)',
                'Section C: 4 Long Answer Questions (3 marks each)',
                'Section D: 2 Case/Word Problems (4 marks each)'
              ]
            }
          },
          {
            id: 'c6-math-ch2',
            number: 2,
            title: 'Whole Numbers & Integers',
            estimatedTime: '30 mins',
            difficulty: 'Medium',
            summary: 'Natural numbers vs whole numbers, number line operations, properties of whole numbers and negative numbers.',
            notes: {
              overview: 'Whole numbers consist of zero and natural numbers. We explore addition, subtraction on number lines, and properties like closure, commutative, associative and distributive properties.',
              keyPoints: [
                'Natural Numbers (N) = {1, 2, 3, 4, ...}',
                'Whole Numbers (W) = {0, 1, 2, 3, 4, ...}',
                'Smallest natural number is 1; smallest whole number is 0.',
                'Integers (Z) = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
                'Distributive Property: a × (b + c) = (a × b) + (a × c).'
              ],
              formulae: [
                'Additive Identity: a + 0 = a',
                'Multiplicative Identity: a × 1 = a'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following is the additive identity for whole numbers?',
                options: ['1', '0', '-1', '10'],
                correctAnswer: 1,
                explanation: 'Adding 0 to any whole number leaves the number unchanged, so 0 is the additive identity.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Find the product using suitable properties: 738 × 103',
                answer: '738 × (100 + 3) = (738 × 100) + (738 × 3) = 73,800 + 2,214 = 76,014.'
              }
            ],
            revisionSheet: [
              'Zero is neither positive nor negative.',
              'Product of two negative integers is always positive.'
            ],
            samplePaper: {
              paperTitle: 'Class 6 Whole Numbers Assessment (Demo)',
              duration: '45 mins',
              totalMarks: 20,
              sections: ['Section A: 5 MCQs (1M)', 'Section B: 3 Qs (3M), Section C: 1 Q (6M)']
            }
          }
        ]
      },
      {
        id: 'c6-sci',
        name: 'Science',
        icon: 'FlaskConical',
        themeColor: '#10b981',
        chaptersCount: 11,
        description: 'Components of food, sorting materials, plants, body movements, light, electricity and circuits.',
        chapters: [
          {
            id: 'c6-sci-ch1',
            number: 1,
            title: 'Components of Food',
            estimatedTime: '25 mins',
            difficulty: 'Easy',
            summary: 'Carbohydrates, fats, proteins, vitamins, minerals, balanced diet, and deficiency diseases.',
            notes: {
              overview: 'Food gives us energy and nutrients required for growth, repair, and immunity. This chapter covers macronutrients, micronutrients, dietary fiber, water, and deficiency diseases.',
              keyPoints: [
                'Carbohydrates and Fats provide energy (Fats yield more energy than carbs).',
                'Proteins are body-building foods needed for growth and tissue repair.',
                'Vitamins and Minerals protect our body against illnesses.',
                'Vitamin A deficiency causes Night Blindness; Vitamin C causes Scurvy; Vitamin D causes Rickets.',
                'Iodine deficiency causes Goitre; Iron deficiency causes Anaemia.'
              ],
              formulae: [
                'Test for Starch: Iodine solution turns blue-black.',
                'Test for Protein: Copper sulphate + Caustic soda gives violet color.'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which vitamin helps our body to use calcium for bones and teeth?',
                options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
                correctAnswer: 2,
                explanation: 'Vitamin D facilitates calcium absorption in intestines and promotes healthy bone mineralization.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'What is a balanced diet? Why is dietary fiber important?',
                answer: 'A balanced diet contains all essential nutrients in proper amounts along with adequate roughage (dietary fiber) and water. Dietary fiber adds bulk to food, aids digestion, and prevents constipation.'
              }
            ],
            revisionSheet: [
              'Starch + Iodine = Blue-black color.',
              'Vitamin C gets easily destroyed by heat during cooking.'
            ],
            samplePaper: {
              paperTitle: 'Class 6 Science Unit Test (Demo)',
              duration: '1 Hour',
              totalMarks: 25,
              sections: ['MCQs: 5 Marks', 'Short Answers: 12 Marks', 'Long Answers: 8 Marks']
            }
          }
        ]
      },
      {
        id: 'c6-sst',
        name: 'Social Science',
        icon: 'Globe',
        themeColor: '#f59e0b',
        chaptersCount: 14,
        description: 'History (Our Pasts I), Geography (The Earth: Our Habitat), and Civics (Social & Political Life I).',
        chapters: [
          {
            id: 'c6-sst-ch1',
            number: 1,
            title: 'What, Where, How and When? (History)',
            estimatedTime: '20 mins',
            difficulty: 'Easy',
            summary: 'Early human settlements, rivers, manuscripts, inscriptions, archaeology and tracking historical dates.',
            notes: {
              overview: 'Introduction to historical evidence. How historians trace human activities along the banks of the Narmada, Indus, and Ganga rivers.',
              keyPoints: [
                'Early gatherers lived along the banks of river Narmada.',
                'Sulaiman and Kirthar hills: Early agriculture where wheat and barley were grown 8000 years ago.',
                'Manuscripts: Hand-written books on palm leaves or birch bark.',
                'Inscriptions: Writings on hard surfaces like stone or metal.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Manuscripts were traditionally written on:',
                options: ['Paper sheets', 'Palm leaves and birch bark', 'Clay tablets', 'Wood blocks'],
                correctAnswer: 1,
                explanation: 'Manuscripts were hand-written on specially prepared palm leaves or the bark of the birch tree.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Differentiate between manuscripts and inscriptions.',
                answer: 'Manuscripts were written by hand on fragile palm leaves or bark. Inscriptions are engraved records on hard, durable surfaces like stone slabs or metal pillars.'
              }
            ],
            revisionSheet: ['BC = Before Christ / BCE = Before Common Era', 'AD = Anno Domini / CE = Common Era'],
            samplePaper: {
              paperTitle: 'Class 6 Social Science Term Assessment (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['History: 15 Marks', 'Geography: 15 Marks', 'Civics: 10 Marks']
            }
          }
        ]
      },
      {
        id: 'c6-eng',
        name: 'English',
        icon: 'BookOpen',
        themeColor: '#8b5cf6',
        chaptersCount: 10,
        description: 'Honeysuckle & A Pact with the Sun - Prose, poetry, reading comprehension, and grammar essentials.',
        chapters: [
          {
            id: 'c6-eng-ch1',
            number: 1,
            title: "Who Did Patrick's Homework?",
            estimatedTime: '20 mins',
            difficulty: 'Easy',
            summary: 'A delightful story about a boy named Patrick who hated homework and the mysterious elf who helped him.',
            notes: {
              overview: 'Patrick never did homework because he found it boring. When he saves a little elf from a cat, the elf promises to do Patrick’s homework for 35 days.',
              keyPoints: [
                'Theme: Self-help is the best help.',
                'The elf did not know English words, history facts, or math tables.',
                'Patrick had to sit beside the elf and guide him, unknowingly doing all the hard work himself.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Who actually did Patrick’s homework at the end?',
                options: ['The elf', 'His parents', 'Patrick himself', 'His teacher'],
                correctAnswer: 2,
                explanation: 'Patrick had to read dictionaries, solve sums, and research history himself to instruct the elf.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Why did Patrick think the elf was helping him?',
                answer: 'Patrick believed the little elf was using magic to complete his assignments, whereas in reality, Patrick did all the reading, calculating, and writing to assist the elf.'
              }
            ],
            revisionSheet: ['Vocabulary: Ignoramus (an uneducated person), Shrieked (screamed in a high pitch).'],
            samplePaper: {
              paperTitle: 'Class 6 English Periodic Test (Demo)',
              duration: '1.5 Hours',
              totalMarks: 30,
              sections: ['Reading: 8M', 'Writing & Grammar: 10M', 'Literature: 12M']
            }
          }
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'Class 7',
    tagline: 'Middle School Intermediate',
    level: 'Middle School',
    badge: 'Intermediate',
    color: '#0284c7',
    description: 'Advance your skills in algebraic concepts, plant nutrition, Delhi Sultans, and prose analysis.',
    streams: null,
    subjects: [
      {
        id: 'c7-maths',
        name: 'Mathematics',
        icon: 'Calculator',
        themeColor: '#0284c7',
        chaptersCount: 13,
        description: 'Integers, fractions & decimals, data handling, simple equations, lines & angles, triangles.',
        chapters: [
          {
            id: 'c7-math-ch1',
            number: 1,
            title: 'Integers & Arithmetic Laws',
            estimatedTime: '30 mins',
            difficulty: 'Medium',
            summary: 'Properties of addition, subtraction and multiplication of integers; BODMAS rules and applications.',
            notes: {
              overview: 'Reviewing positive and negative numbers, additive inverses, and applying the sign conventions during multiplication and division.',
              keyPoints: [
                '(+) × (+) = (+)',
                '(-) × (-) = (+)',
                '(+) × (-) = (-)',
                'Division by zero is undefined.',
                '(-1) raised to an odd power is -1; raised to an even power is +1.'
              ],
              formulae: ['a - (-b) = a + b', 'a × (b + c) = a × b + a × c']
            },
            mcqs: [
              {
                id: 1,
                question: 'What is the value of (-25) × (-4) × (-2)?',
                options: ['200', '-200', '100', '-100'],
                correctAnswer: 1,
                explanation: '(-25) × (-4) = +100; then 100 × (-2) = -200.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'In a class test containing 15 questions, 4 marks are given for every correct answer and (-2) marks for every incorrect answer. Gurpreet attempts all questions but only 9 of her answers are correct. What is her total score?',
                answer: 'Marks for 9 correct = 9 × 4 = 36 marks.\\nIncorrect questions = 15 - 9 = 6.\\nMarks deducted = 6 × (-2) = -12 marks.\\nTotal score = 36 + (-12) = 24 marks.'
              }
            ],
            revisionSheet: ['Additive identity is 0.', 'Multiplicative identity is 1.'],
            samplePaper: {
              paperTitle: 'Class 7 Mathematics Practice Test (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['Section A: 10 MCQs', 'Section B: 4 Short Qs', 'Section C: 4 Long Qs']
            }
          }
        ]
      },
      {
        id: 'c7-sci',
        name: 'Science',
        icon: 'FlaskConical',
        themeColor: '#10b981',
        chaptersCount: 13,
        description: 'Nutrition in plants and animals, heat, acids, bases and salts, respiration and electric current.',
        chapters: [
          {
            id: 'c7-sci-ch1',
            number: 1,
            title: 'Nutrition in Plants',
            estimatedTime: '25 mins',
            difficulty: 'Medium',
            summary: 'Autotrophic and heterotrophic modes of nutrition, photosynthesis mechanism, and parasitic plants.',
            notes: {
              overview: 'Green plants synthesize their food through photosynthesis using carbon dioxide, water, chlorophyll and sunlight.',
              keyPoints: [
                'Photosynthesis Equation: 6CO2 + 6H2O + Sunlight (Chlorophyll) -> C6H12O6 + 6O2',
                'Stomata are tiny pores on leaves guarded by guard cells for gas exchange.',
                'Cuscuta (Amarbel) is a parasite with no chlorophyll.',
                'Pitcher plant is an insectivorous plant that feeds on insects to obtain nitrogen.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following is an example of a saprotroph?',
                options: ['Mushroom (Fungus)', 'Cuscuta', 'Algae', 'Rose'],
                correctAnswer: 0,
                explanation: 'Mushrooms secrete digestive juices on dead and decaying matter and absorb nutrients in solution form.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Explain the symbiotic relationship seen in Lichens.',
                answer: 'A lichen is a symbiotic partnership between an alga and a fungus. The alga contains chlorophyll and provides food through photosynthesis, while the fungus provides shelter, water, and minerals.'
              }
            ],
            revisionSheet: ['Chlorophyll absorbs blue and red light.', 'Rhizobium bacteria fix atmospheric nitrogen in legume roots.'],
            samplePaper: {
              paperTitle: 'Class 7 Science Mock Exam (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['Objective: 10M', 'Subjective: 30M']
            }
          }
        ]
      },
      {
        id: 'c7-sst',
        name: 'Social Science',
        icon: 'Globe',
        themeColor: '#f59e0b',
        chaptersCount: 12,
        description: 'Medieval Indian History, Our Environment, and State Government institutions.',
        chapters: [
          {
            id: 'c7-sst-ch1',
            number: 1,
            title: 'Tracing Changes Through a Thousand Years',
            estimatedTime: '25 mins',
            difficulty: 'Easy',
            summary: 'Cartography changes from al-Idrisi to French cartographers, evolving terms like Hindustan, and historical sources.',
            notes: {
              overview: 'Covers the period 700 to 1750 CE, emergence of new social and political groups like Rajputs, and changing meanings of words over centuries.',
              keyPoints: [
                'Term "Hindustan" used by Minhaj-i-Siraj in 13th century meant lands of Punjab, Haryana, and between Ganga and Yamuna.',
                'Babar used Hindustan to describe geography, fauna, and culture of the subcontinent in the 16th century.',
                'Archives are places where documents and manuscripts are stored.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Al-Idrisi was an Arab:',
                options: ['Cartographer', 'Poet', 'Physician', 'Astronomer'],
                correctAnswer: 0,
                explanation: 'Al-Idrisi was an Arab cartographer who made a map of the world in 1154 CE.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Why did the meaning of the term "foreigner" differ in the medieval period compared to today?',
                answer: 'Today, a foreigner is someone who is not an Indian citizen. In the medieval period, any stranger who appeared in a given village and was not part of that society or culture was considered a foreigner (ajnabi or pardesi).'
              }
            ],
            revisionSheet: ['Cartography = The science or practice of drawing maps.'],
            samplePaper: {
              paperTitle: 'Class 7 Social Science Assessment (Demo)',
              duration: '1 Hour',
              totalMarks: 30,
              sections: ['MCQs: 10M', 'Short Notes: 20M']
            }
          }
        ]
      },
      {
        id: 'c7-eng',
        name: 'English',
        icon: 'BookOpen',
        themeColor: '#8b5cf6',
        chaptersCount: 10,
        description: 'Honeycomb & An Alien Hand - Prose, poetry, composition, and writing skills.',
        chapters: [
          {
            id: 'c7-eng-ch1',
            number: 1,
            title: 'Three Questions (Leo Tolstoy)',
            estimatedTime: '20 mins',
            difficulty: 'Easy',
            summary: 'A king seeks answers to three fundamental life questions: the right time, the right people, and the most important thing to do.',
            notes: {
              overview: 'Leo Tolstoy’s classic parable shows how helping a wounded enemy in the present moment provides the ultimate answers to life’s greatest questions.',
              keyPoints: [
                'Most important time: NOW (the present moment).',
                'Most important person: The person you are with right now.',
                'Most important business: To do good for that person.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Where did the wise hermit live in the story?',
                options: ['In a palace', 'In a wooden hut in the forest', 'In a temple', 'On a mountain'],
                correctAnswer: 1,
                explanation: 'The hermit lived in a simple hut in the woods and received only common folk.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'What were the three questions the king wanted answered?',
                answer: '1. What is the right time to begin something? 2. Which people should he listen to? 3. What is the most important thing for him to do?'
              }
            ],
            revisionSheet: ['Moral: Live in the present and help those around you.'],
            samplePaper: {
              paperTitle: 'Class 7 English Periodic Test (Demo)',
              duration: '1 Hour',
              totalMarks: 25,
              sections: ['Comprehension: 5M', 'Grammar: 10M', 'Literature: 10M']
            }
          }
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Class 8',
    tagline: 'Middle School Senior Stage',
    level: 'Middle School',
    badge: 'Upper Middle',
    color: '#0284c7',
    description: 'Master rational numbers, linear equations, cell biology, combustion, and the Indian Constitution.',
    streams: null,
    subjects: [
      {
        id: 'c8-maths',
        name: 'Mathematics',
        icon: 'Calculator',
        themeColor: '#0284c7',
        chaptersCount: 13,
        description: 'Rational numbers, linear equations in one variable, quadrilaterals, square roots, cubes, algebraic identities.',
        chapters: [
          {
            id: 'c8-math-ch1',
            number: 1,
            title: 'Rational Numbers',
            estimatedTime: '30 mins',
            difficulty: 'Medium',
            summary: 'Representation on number line, closure, commutativity, associativity, and finding rational numbers between two numbers.',
            notes: {
              overview: 'A rational number is any number expressible in the form p/q where p and q are integers and q ≠ 0.',
              keyPoints: [
                'Closure Property: Rational numbers are closed under addition, subtraction, and multiplication (not division by 0).',
                'Additive Inverse of p/q is -p/q.',
                'Multiplicative Inverse (reciprocal) of p/q is q/p (q ≠ 0).',
                'There are infinitely many rational numbers between any two given rational numbers.'
              ],
              formulae: ['Mean method: Between a and b, (a + b)/2 is a rational number.']
            },
            mcqs: [
              {
                id: 1,
                question: 'What is the multiplicative inverse of -13/19?',
                options: ['13/19', '-19/13', '19/13', '0'],
                correctAnswer: 1,
                explanation: 'The reciprocal of -13/19 is -19/13 such that (-13/19) × (-19/13) = 1.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Find five rational numbers between 2/3 and 4/5.',
                answer: 'LCM of 3 and 5 is 15. Make denominators common: 2/3 = 10/15 and 4/5 = 12/15.\\nMultiply numerator and denominator by 4: 10/15 = 40/60; 12/15 = 48/60.\\nFive rational numbers: 41/60, 42/60, 43/60, 44/60, 45/60.'
              }
            ],
            revisionSheet: ['Zero has no reciprocal.', '1 and -1 are their own reciprocals.'],
            samplePaper: {
              paperTitle: 'Class 8 Mathematics Mid-Term Mock (Demo)',
              duration: '2 Hours',
              totalMarks: 50,
              sections: ['Section A: 12 MCQs (12M)', 'Section B: 6 Short Qs (18M)', 'Section C: 4 Long Qs (20M)']
            }
          }
        ]
      },
      {
        id: 'c8-sci',
        name: 'Science',
        icon: 'FlaskConical',
        themeColor: '#10b981',
        chaptersCount: 13,
        description: 'Crop production, microorganisms, coal and petroleum, combustion, cell structure and reproduction.',
        chapters: [
          {
            id: 'c8-sci-ch1',
            number: 1,
            title: 'Cell: Structure and Functions',
            estimatedTime: '30 mins',
            difficulty: 'Medium',
            summary: 'Discovery of cell by Robert Hooke, plant vs animal cells, cell membrane, cytoplasm, nucleus, and organelles.',
            notes: {
              overview: 'The cell is the basic structural and functional unit of all living organisms. We compare prokaryotic vs eukaryotic cells and plant vs animal cells.',
              keyPoints: [
                'Robert Hooke observed cork cells in 1665.',
                'Plant cells have an outer cell wall made of cellulose for rigidity; animal cells lack cell wall.',
                'Chloroplasts containing chlorophyll are present only in plant cells.',
                'Nucleus contains chromosomes carrying genes that transfer hereditary characteristics.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Which cell organelle is known as the powerhouse of the cell?',
                options: ['Ribosome', 'Mitochondria', 'Golgi apparatus', 'Lysosome'],
                correctAnswer: 1,
                explanation: 'Mitochondria produce cellular energy in the form of ATP (adenosine triphosphate).'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Draw a comparison table highlighting 3 differences between plant and animal cells.',
                answer: '1. Plant cells have a rigid cellulose cell wall; animal cells do not.\\n2. Plant cells possess plastids (chloroplasts); animal cells do not.\\n3. Plant cells have large central vacuoles; animal cells have tiny or no vacuoles.'
              }
            ],
            revisionSheet: ['Amoeba is a single-celled organism with pseudopodia.', 'Genes are units of inheritance.'],
            samplePaper: {
              paperTitle: 'Class 8 Science Periodic Assessment (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['Section A: MCQs (10M)', 'Section B: Concept Qs (15M)', 'Section C: Diagrams (15M)']
            }
          }
        ]
      },
      {
        id: 'c8-sst',
        name: 'Social Science',
        icon: 'Globe',
        themeColor: '#f59e0b',
        chaptersCount: 14,
        description: 'Modern Indian History (Colonialism & Revolt of 1857), Geography (Resources), and Indian Constitution.',
        chapters: [
          {
            id: 'c8-sst-ch1',
            number: 1,
            title: 'The Indian Constitution & Secularism',
            estimatedTime: '25 mins',
            difficulty: 'Medium',
            summary: 'Why a country needs a constitution, fundamental rights, directive principles, and the federal structure.',
            notes: {
              overview: 'A constitution lays out ideals that form the basis of a country’s governance. It safeguards minorities and prevents tyrannical majority rule.',
              keyPoints: [
                'Key features: Federalism, Parliamentary form of government, Separation of Powers, Fundamental Rights, Secularism.',
                '6 Fundamental Rights: Right to Equality, Freedom, Against Exploitation, Freedom of Religion, Cultural & Educational Rights, Constitutional Remedies.',
                'Father of the Indian Constitution: Dr. B.R. Ambedkar.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Which article is referred to as the heart and soul of the Constitution by Dr. B.R. Ambedkar?',
                options: ['Right to Equality', 'Right to Constitutional Remedies', 'Right to Freedom of Speech', 'Right to Education'],
                correctAnswer: 1,
                explanation: 'Right to Constitutional Remedies allows citizens to move to high courts or Supreme Court if fundamental rights are violated.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Explain what is meant by "Separation of Powers" in the Indian Constitution.',
                answer: 'The Constitution divides power into three organs: 1. Legislature (elected representatives making laws), 2. Executive (smaller group implementing laws and running government), 3. Judiciary (system of courts). This ensures no single organ abuses authority.'
              }
            ],
            revisionSheet: ['Preamble: Sovereign, Socialist, Secular, Democratic, Republic.'],
            samplePaper: {
              paperTitle: 'Class 8 Civics & History Mock Paper (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['MCQs: 10M', 'Descriptive: 30M']
            }
          }
        ]
      },
      {
        id: 'c8-eng',
        name: 'English',
        icon: 'BookOpen',
        themeColor: '#8b5cf6',
        chaptersCount: 10,
        description: 'Honeydew & It So Happened - Prose, poetry, formal letters, and diary entries.',
        chapters: [
          {
            id: 'c8-eng-ch1',
            number: 1,
            title: 'The Best Christmas Present in the World',
            estimatedTime: '25 mins',
            difficulty: 'Medium',
            summary: 'Michael Morpurgo’s touching story of a wartime Christmas truce in 1914 between British and German soldiers.',
            notes: {
              overview: 'The narrator finds a secret letter in an old roll-top desk written by Captain Jim Macpherson to his wife Connie describing the 1914 World War I Christmas truce.',
              keyPoints: [
                'No Man’s Land became a playground for football, carols, and sharing schnapps and sausage.',
                'Shows the universal human yearning for peace over the horrors of warfare.',
                'The narrator visits Connie Macpherson in a nursing home to return the letter.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'What game did the British and German soldiers play during the Christmas truce?',
                options: ['Cricket', 'Football (Soccer)', 'Chess', 'Cards'],
                correctAnswer: 1,
                explanation: 'Soldiers threw down their rifles and played football together on No Man’s Land.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'What was Connie’s Christmas present? Why was it the "best present in the world"?',
                answer: 'Connie mistook the narrator for her husband Jim returning home as promised on Christmas. Her lifelong dream of seeing Jim reunited brought her immense joy and peace in her final years.'
              }
            ],
            revisionSheet: ['Themes: Peace, empathy, human connection across frontlines.'],
            samplePaper: {
              paperTitle: 'Class 8 English Term 1 Test (Demo)',
              duration: '2 Hours',
              totalMarks: 50,
              sections: ['Reading: 15M', 'Writing: 15M', 'Literature: 20M']
            }
          }
        ]
      }
    ]
  },
  {
    id: '9',
    title: 'Class 9',
    tagline: 'Secondary School Foundation',
    level: 'Secondary School',
    badge: 'Secondary Stage',
    color: '#0284c7',
    description: 'Master CBSE Class 9 concepts: polynomials, coordinate geometry, tissue histology, laws of motion, and French revolution.',
    streams: null,
    subjects: [
      {
        id: 'c9-maths',
        name: 'Mathematics',
        icon: 'Calculator',
        themeColor: '#0284c7',
        chaptersCount: 12,
        description: 'Number systems, polynomials, coordinate geometry, linear equations, Euclidean geometry, circles, Heron’s formula, statistics.',
        chapters: [
          {
            id: 'c9-math-ch1',
            number: 1,
            title: 'Number Systems',
            estimatedTime: '35 mins',
            difficulty: 'Medium',
            summary: 'Irrational numbers, real numbers on the number line, rationalization of surds, and laws of exponents.',
            notes: {
              overview: 'Comprehensive study of real numbers. Proving irrationality of √2, √3, decimal expansions (terminating, non-terminating recurring vs non-recurring), and denominator rationalization.',
              keyPoints: [
                'Rational numbers have terminating or non-terminating recurring decimal representations.',
                'Irrational numbers have non-terminating non-recurring decimal expansions.',
                'Sum or product of a non-zero rational and an irrational number is always irrational.',
                'Rationalizing Factor of (√a + √b) is (√a - √b).'
              ],
              formulae: [
                'a^m × a^n = a^(m+n)',
                '(a^m)^n = a^(mn)',
                '(a + b)(a - b) = a² - b²'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following numbers is irrational?',
                options: ['√4', '0.3796', '√23', '√225'],
                correctAnswer: 2,
                explanation: '23 is not a perfect square, so √23 is an irrational number with a non-terminating, non-repeating decimal expansion.'
              },
              {
                id: 2,
                question: 'Value of 1 / (√7 - √6) after rationalization is:',
                options: ['√7 - √6', '√7 + √6', '1', '7 - 6'],
                correctAnswer: 1,
                explanation: 'Multiply numerator and denominator by (√7 + √6): (√7 + √6) / (7 - 6) = √7 + √6.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Express 0.2353535... (0.235 bar on 35) in the form p/q, where p and q are integers and q ≠ 0.',
                answer: 'Let x = 0.23535... (1)\\n10x = 2.3535... (2)\\n1000x = 235.3535... (3)\\nSubtract (2) from (3): 990x = 233 => x = 233/990.'
              },
              {
                marks: 5,
                question: 'Simplify by rationalizing denominators: 1/(3 - √8) - 1/(√8 - √7) + 1/(√7 - √6) - 1/(√6 - √5) + 1/(√5 - 2).',
                answer: 'Rationalizing each term gives: (3 + √8) - (√8 + √7) + (√7 + √6) - (√6 + √5) + (√5 + 2).\\nTerms cancel out: 3 + √8 - √8 - √7 + √7 + √6 - √6 - √5 + √5 + 2 = 3 + 2 = 5.'
              }
            ],
            revisionSheet: [
              'Pi (π) is irrational, while 22/7 is rational (approximate representation).',
              'a^0 = 1 for any non-zero real number a.'
            ],
            samplePaper: {
              paperTitle: 'Class 9 Mathematics Term 1 Solved Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Section A: 20 MCQs', 'Section B: 5 Very Short Qs (2M)', 'Section C: 6 Short Qs (3M)', 'Section D: 4 Long Qs (5M)', 'Section E: 3 Case Studies (4M)']
            }
          },
          {
            id: 'c9-math-ch2',
            number: 2,
            title: 'Polynomials',
            estimatedTime: '40 mins',
            difficulty: 'Hard',
            summary: 'Zeros of polynomial, Remainder & Factor Theorems, algebraic identities, and cubic polynomial factorization.',
            notes: {
              overview: 'Study of polynomials of one variable, degrees, coefficients, factor theorem, and algebraic identities for quadratic and cubic polynomials.',
              keyPoints: [
                'Degree of a non-zero constant polynomial is 0; degree of zero polynomial is undefined.',
                'Factor Theorem: (x - a) is a factor of p(x) if and only if p(a) = 0.',
                'Quadratic polynomial has at most 2 zeros; cubic polynomial has at most 3 zeros.'
              ],
              formulae: [
                '(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx',
                'x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)',
                'If x + y + z = 0, then x³ + y³ + z³ = 3xyz'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'If x + 1 is a factor of 2x² + kx, then k equals:',
                options: ['-2', '2', '-1', '1'],
                correctAnswer: 1,
                explanation: 'Since x + 1 = 0 => x = -1. p(-1) = 2(-1)² + k(-1) = 2 - k = 0 => k = 2.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Factorize: 6x² + 17x + 5 by splitting the middle term.',
                answer: 'Product = 6 × 5 = 30. Factors of 30 that add to 17 are 15 and 2.\\n6x² + 15x + 2x + 5 = 3x(2x + 5) + 1(2x + 5) = (2x + 5)(3x + 1).'
              }
            ],
            revisionSheet: ['Linear: degree 1, Quadratic: degree 2, Cubic: degree 3.'],
            samplePaper: {
              paperTitle: 'Class 9 Polynomials Unit Test (Demo)',
              duration: '1 Hour',
              totalMarks: 25,
              sections: ['MCQs: 5M', 'Factorization Qs: 20M']
            }
          }
        ]
      },
      {
        id: 'c9-sci',
        name: 'Science',
        icon: 'FlaskConical',
        themeColor: '#10b981',
        chaptersCount: 12,
        description: 'Matter in our surroundings, atoms & molecules, structure of atom, cell biology, tissues, motion, force, gravitation, work.',
        chapters: [
          {
            id: 'c9-sci-ch1',
            number: 1,
            title: 'Motion & Kinematics',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Distance vs displacement, speed and velocity, uniform motion, equations of motion by graphical method.',
            notes: {
              overview: 'Kinematics deals with describing motion without reference to the forces causing it. Understanding scalar vs vector quantities and derivation of motion equations.',
              keyPoints: [
                'Distance is scalar (actual path length); Displacement is vector (shortest straight line between initial and final position).',
                'Acceleration a = (v - u) / t.',
                'Slope of distance-time graph represents speed; slope of velocity-time graph represents acceleration.',
                'Area under v-t graph represents distance/displacement covered.'
              ],
              formulae: [
                'v = u + at',
                's = ut + (1/2)at²',
                'v² - u² = 2as'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'A car accelerates uniformly from 18 km/h to 36 km/h in 5 s. The acceleration is:',
                options: ['1 m/s²', '2 m/s²', '3.6 m/s²', '0.5 m/s²'],
                correctAnswer: 0,
                explanation: 'u = 18 × 5/18 = 5 m/s; v = 36 × 5/18 = 10 m/s. a = (10 - 5)/5 = 1 m/s².'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Derive graphically the second equation of motion: s = ut + (1/2)at².',
                answer: 'Let object travel distance s in time t with initial velocity u and uniform acceleration a.\\nIn velocity-time graph, distance s = Area of trapezium OABD = Area of rectangle OACD + Area of triangle ABD.\\nArea of OACD = u × t.\\nArea of ABD = 1/2 × base × height = 1/2 × t × (v - u) = 1/2 × t × (at) = 1/2 at².\\nHence, s = ut + 1/2 at².'
              }
            ],
            revisionSheet: ['1 km/h = 5/18 m/s', 'Uniform circular motion is an accelerated motion with changing velocity direction.'],
            samplePaper: {
              paperTitle: 'Class 9 Science Physics Paper (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['Section A: 10 MCQs', 'Section B: Numerical Problems (20M)', 'Section C: Derivations (10M)']
            }
          }
        ]
      },
      {
        id: 'c9-sst',
        name: 'Social Science',
        icon: 'Globe',
        themeColor: '#f59e0b',
        chaptersCount: 15,
        description: 'History (French & Russian Revolutions), Geography (India Size & Physical Features), Civics (Democracy), Economics.',
        chapters: [
          {
            id: 'c9-sst-ch1',
            number: 1,
            title: 'The French Revolution (1789)',
            estimatedTime: '35 mins',
            difficulty: 'Medium',
            summary: 'Estates system, storming of the Bastille, Reign of Terror by Robespierre, and legacy of liberty and equality.',
            notes: {
              overview: 'The French Revolution began in 1789 and transformed feudal France into a nation championing liberty, equality, and fraternity.',
              keyPoints: [
                'French society divided into 3 Estates: Clergy (1st), Nobility (2nd), Commoners/Bourgeoisie (3rd).',
                'Only the 3rd Estate paid taxes (Tithe to church, Taille to state).',
                'Storming of the Bastille prison: 14 July 1789.',
                'Declaration of the Rights of Man and of the Citizen proclaimed in 1789.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Who wrote the influential treatise "The Social Contract"?',
                options: ['Montesquieu', 'Jean-Jacques Rousseau', 'John Locke', 'Voltaire'],
                correctAnswer: 1,
                explanation: 'Jean-Jacques Rousseau wrote The Social Contract proposing government based on social contract between people and representatives.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'What circumstances led to the outbreak of the French Revolution in 1789?',
                answer: '1. Financial Bankruptcy: Wars, Versailles upkeep, and American war aid emptied royal treasury.\\n2. Social Inequality: Third Estate bore all taxes while 1st & 2nd had feudal privileges.\\n3. Subsistence Crisis: Rapid population growth and bad harvests caused bread shortages.\\n4. Influence of Philosophers: Ideas of Locke, Rousseau, and Montesquieu inspired people.'
              }
            ],
            revisionSheet: ['Guillotine: Device invented by Dr. Guillotin used for executions during Reign of Terror.'],
            samplePaper: {
              paperTitle: 'Class 9 History Mock Paper (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['MCQs: 10M', 'Source-based Qs: 10M', 'Long Essays: 20M']
            }
          }
        ]
      },
      {
        id: 'c9-eng',
        name: 'English',
        icon: 'BookOpen',
        themeColor: '#8b5cf6',
        chaptersCount: 10,
        description: 'Beehive & Moments - Literature, reading comprehension, descriptive paragraphs, and diary entries.',
        chapters: [
          {
            id: 'c9-eng-ch1',
            number: 1,
            title: 'The Fun They Had (Isaac Asimov)',
            estimatedTime: '20 mins',
            difficulty: 'Easy',
            summary: 'Set in 2157, Margie and Tommy discover an ancient printed book and marvel at old-fashioned human school classrooms.',
            notes: {
              overview: 'Isaac Asimov’s science fiction vision of futuristic education with mechanical tele-teachers and virtual textbooks.',
              keyPoints: [
                'Set on 17 May 2157.',
                'Margie hates her mechanical teacher who tests her continuously in geography.',
                'Contrasts isolated screen learning with the communal joy of children learning together in a school building.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'According to Margie, why was the old kind of school fun?',
                options: ['There was no homework', 'All kids learned together and helped each other', 'Tests were optional', 'Teachers were robots'],
                correctAnswer: 1,
                explanation: 'Children from the entire neighborhood gathered, laughed, shouted, and could talk about homework together.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Describe the characteristics of Margie’s mechanical teacher.',
                answer: 'The mechanical teacher was a large black screen installed in a room next to Margie’s bedroom. It flashed lessons, gave homework via punch cards, and calculated marks instantly without empathy.'
              }
            ],
            revisionSheet: ['Theme: Social interaction is central to joyful learning.'],
            samplePaper: {
              paperTitle: 'Class 9 English Periodic Test (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['Reading: 10M', 'Writing: 10M', 'Literature: 20M']
            }
          }
        ]
      }
    ]
  },
  {
    id: '10',
    title: 'Class 10',
    tagline: 'CBSE Secondary Board Exam Special',
    level: 'Secondary Board',
    badge: 'Board Exam Special',
    color: '#0284c7',
    description: 'High-yield Board Exam preparation: Real numbers, quadratic equations, trigonometry, chemical reactions, life processes, and nationalism.',
    streams: null,
    subjects: [
      {
        id: 'c10-maths',
        name: 'Mathematics',
        icon: 'Calculator',
        themeColor: '#0284c7',
        chaptersCount: 14,
        description: 'Real Numbers, Polynomials, Linear Equations, Quadratic Equations, AP, Triangles, Coordinate Geometry, Trigonometry, Circles, Statistics, Probability.',
        chapters: [
          {
            id: 'c10-math-ch1',
            number: 1,
            title: 'Real Numbers & Fundamental Theorem of Arithmetic',
            estimatedTime: '35 mins',
            difficulty: 'Medium',
            summary: 'Fundamental Theorem of Arithmetic, proving irrationality of √2, √3, √5, and HCF-LCM relationships.',
            notes: {
              overview: 'The Fundamental Theorem of Arithmetic states that every composite number can be uniquely expressed as a product of primes, apart from the order of factors.',
              keyPoints: [
                'Fundamental Theorem of Arithmetic: Uniqueness of prime factorization.',
                'For any two positive integers a and b: HCF(a, b) × LCM(a, b) = a × b.',
                'Proof of irrationality uses method of contradiction (supposing √p = a/b where a and b are co-prime integers).',
                'If prime p divides a², then p divides a.'
              ],
              formulae: [
                'HCF(a, b) × LCM(a, b) = a × b',
                'LCM(a, b) = (a × b) / HCF(a, b)'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'If two positive integers a and b are written as a = x³y² and b = xy³, where x, y are prime numbers, then HCF(a, b) is:',
                options: ['xy', 'xy²', 'x³y³', 'x²y²'],
                correctAnswer: 1,
                explanation: 'HCF is product of smallest power of each common prime factor: x¹ × y² = xy².'
              },
              {
                id: 2,
                question: 'Given HCF(306, 657) = 9, find LCM(306, 657):',
                options: ['22338', '22340', '18560', '21338'],
                correctAnswer: 0,
                explanation: 'LCM = (306 × 657) / 9 = 34 × 657 = 22,338.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Prove that √5 is an irrational number. (High Board Exam Frequency)',
                answer: 'Let √5 be rational, so √5 = a/b where a, b are co-prime integers and b ≠ 0.\\nSquaring both sides: 5 = a²/b² => a² = 5b².\\nThus 5 divides a², so 5 divides a. Let a = 5c.\\nSubstitute: (5c)² = 5b² => 25c² = 5b² => b² = 5c².\\nThus 5 divides b², so 5 divides b.\\nHence, both a and b have 5 as a common factor, which contradicts our assumption that a and b are co-prime.\\nTherefore, √5 is irrational.'
              },
              {
                marks: 5,
                question: 'An army contingent of 616 members is to march behind an army band of 32 members in a parade. Find the maximum number of columns in which they can march.',
                answer: 'Maximum number of columns = HCF(616, 32).\\nPrime factorization: 616 = 2³ × 7 × 11; 32 = 2⁵.\\nCommon prime factor with lowest power = 2³ = 8.\\nTherefore, the maximum number of columns is 8.'
              }
            ],
            revisionSheet: [
              'HCF(a, b) × LCM(a, b) = a × b (valid only for 2 numbers, not 3).',
              'Product of non-zero rational and irrational is always irrational.'
            ],
            samplePaper: {
              paperTitle: 'CBSE Class 10 Standard Mathematics Sample Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Section A: 20 MCQs (20M)', 'Section B: 5 Very Short (10M)', 'Section C: 6 Short (18M)', 'Section D: 4 Long (20M)', 'Section E: 3 Case Studies (12M)']
            }
          },
          {
            id: 'c10-math-ch8',
            number: 8,
            title: 'Introduction to Trigonometry',
            estimatedTime: '45 mins',
            difficulty: 'Hard',
            summary: 'Trigonometric ratios of acute angles, standard angles (0°, 30°, 45°, 60°, 90°), and proving trigonometric identities.',
            notes: {
              overview: 'Trigonometry studies relationships between side lengths and angles of triangles. Understanding sin, cos, tan, cosec, sec, and cot with fundamental identities.',
              keyPoints: [
                'sin θ = Opposite / Hypotenuse ; cos θ = Adjacent / Hypotenuse',
                'tan θ = sin θ / cos θ = Opposite / Adjacent',
                'cosec θ = 1/sin θ ; sec θ = 1/cos θ ; cot θ = 1/tan θ',
                'Values at 30°: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3',
                'Values at 45°: sin 45° = 1/√2, cos 45° = 1/√2, tan 45° = 1',
                'Values at 60°: sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3'
              ],
              formulae: [
                'sin² θ + cos² θ = 1',
                '1 + tan² θ = sec² θ',
                '1 + cot² θ = cosec² θ'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'If tan A = 4/3, then sin A is:',
                options: ['3/5', '4/5', '5/4', '3/4'],
                correctAnswer: 1,
                explanation: 'Opposite = 4k, Adjacent = 3k. Hypotenuse = √(4² + 3²) = 5k. sin A = 4/5.'
              },
              {
                id: 2,
                question: 'The value of (sin² 30° + cos² 30°) is:',
                options: ['0', '1', '1/2', '2'],
                correctAnswer: 1,
                explanation: 'Identity sin² θ + cos² θ = 1 holds for all valid angles θ.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Prove that: (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ.',
                answer: 'LHS = [sin θ (1 - 2 sin² θ)] / [cos θ (2 cos² θ - 1)].\\nReplace 1 with (sin² θ + cos² θ) in numerator:\\n1 - 2 sin² θ = sin² θ + cos² θ - 2 sin² θ = cos² θ - sin² θ.\\nIn denominator: 2 cos² θ - (sin² θ + cos² θ) = cos² θ - sin² θ.\\nLHS = [sin θ (cos² θ - sin² θ)] / [cos θ (cos² θ - sin² θ)] = sin θ / cos θ = tan θ = RHS. Proved.'
              }
            ],
            revisionSheet: ['sin² θ + cos² θ = 1', 'sec² θ - tan² θ = 1', 'cosec² θ - cot² θ = 1'],
            samplePaper: {
              paperTitle: 'Class 10 Trigonometry Chapter Test (Demo)',
              duration: '1 Hour',
              totalMarks: 30,
              sections: ['MCQs: 5M', 'Identities Proofs: 25M']
            }
          }
        ]
      },
      {
        id: 'c10-sci',
        name: 'Science',
        icon: 'FlaskConical',
        themeColor: '#10b981',
        chaptersCount: 13,
        description: 'Chemical Reactions, Acids & Bases, Metals & Non-metals, Carbon Compounds, Life Processes, Heredity, Light, Electricity.',
        chapters: [
          {
            id: 'c10-sci-ch1',
            number: 1,
            title: 'Chemical Reactions and Equations',
            estimatedTime: '35 mins',
            difficulty: 'Medium',
            summary: 'Balancing chemical equations, combination, decomposition, displacement, double displacement, redox, corrosion, rancidity.',
            notes: {
              overview: 'Chemical reactions involve bond breaking and forming. Conservation of mass mandates balancing chemical equations. Types of reactions and oxidation-reduction mechanisms.',
              keyPoints: [
                'Law of Conservation of Mass: Mass can neither be created nor destroyed in a chemical reaction.',
                'Combination: A + B -> AB (e.g. CaO + H2O -> Ca(OH)2 + Heat).',
                'Decomposition: AB -> A + B (Thermal, Electrolytic, Photolytic).',
                'Displacement: More reactive element displaces less reactive element (Fe + CuSO4 -> FeSO4 + Cu).',
                'Oxidation: Gain of Oxygen or loss of Hydrogen / electrons; Reduction: Loss of Oxygen or gain of Hydrogen.'
              ],
              formulae: [
                'Quicklime + Water: CaO(s) + H2O(l) -> Ca(OH)2(aq) + Heat',
                'Photosynthesis: 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O',
                'Respiration: C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following is an endothermic process?',
                options: ['Dilution of sulphuric acid', 'Sublimation of dry ice', 'Respiration', 'Combustion of coal'],
                correctAnswer: 1,
                explanation: 'Sublimation of dry ice absorbs heat from surroundings, making it an endothermic process.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Why is respiration considered an exothermic reaction?',
                answer: 'During digestion, food is broken down into glucose. In cellular respiration, glucose combines with oxygen in cells and releases significant energy (in the form of ATP): C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy. Hence it is exothermic.'
              },
              {
                marks: 5,
                question: 'Balance the following equations: (a) Fe + H2O -> Fe3O4 + H2; (b) HNO3 + Ca(OH)2 -> Ca(NO3)2 + H2O.',
                answer: '(a) 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g).\\n(b) 2HNO3(aq) + Ca(OH)2(aq) -> Ca(NO3)2(aq) + 2H2O(l).'
              }
            ],
            revisionSheet: ['Rancidity is prevented using antioxidants (BHA, BHT) and flushing with Nitrogen gas.'],
            samplePaper: {
              paperTitle: 'Class 10 CBSE Science Board Mock Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Section A: 20 MCQs', 'Section B: 6 Short (2M)', 'Section C: 7 Short (3M)', 'Section D: 3 Long (5M)', 'Section E: 3 Case Studies (4M)']
            }
          },
          {
            id: 'c10-sci-ch6',
            number: 6,
            title: 'Life Processes (Nutrition & Respiration)',
            estimatedTime: '45 mins',
            difficulty: 'Hard',
            summary: 'Nutrition in plants and humans, human digestive system, respiratory pathways (aerobic vs anaerobic), xylem/phloem transport.',
            notes: {
              overview: 'Essential life maintenance processes: nutrition, respiration, transportation, and excretion in humans and plants.',
              keyPoints: [
                'Human Digestion: Salivary amylase breaks starch into maltose; Pepsin in stomach digests proteins in acidic medium (HCl).',
                'Bile juice emulsifies fats and neutralizes stomach acid.',
                'Aerobic respiration produces 38 ATP; Anaerobic respiration in yeast produces Ethanol + CO2 + 2 ATP; in muscle cells produces Lactic acid.',
                'Xylem transports water and minerals unidirectionally; Phloem translocates sucrose bidirectionally.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Accumulation of which substance causes muscle cramps during intense exercise?',
                options: ['Ethanol', 'Lactic acid', 'Pyruvate', 'Carbon dioxide'],
                correctAnswer: 1,
                explanation: 'Lack of oxygen in human muscle cells causes anaerobic conversion of pyruvate into lactic acid.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Explain the role of bile juice and pancreatic enzymes in the small intestine.',
                answer: 'Bile juice from the liver: 1. Neutralizes acidic chyme from stomach into alkaline medium, 2. Emulsifies large fat globules into tiny droplets.\\nPancreatic enzymes: 1. Pancreatic amylase digests remaining carbohydrates, 2. Trypsin digests proteins into peptides, 3. Lipase breaks emulsified fats into fatty acids and glycerol.'
              }
            ],
            revisionSheet: ['Nephron is the basic structural and functional unit of kidney.'],
            samplePaper: {
              paperTitle: 'Class 10 Biology Board Blueprint Test (Demo)',
              duration: '1.5 Hours',
              totalMarks: 40,
              sections: ['MCQs: 10M', 'Descriptive & Diagrams: 30M']
            }
          }
        ]
      },
      {
        id: 'c10-sst',
        name: 'Social Science',
        icon: 'Globe',
        themeColor: '#f59e0b',
        chaptersCount: 16,
        description: 'Rise of Nationalism in Europe, Nationalism in India, Resources, Power Sharing, Federalism, Money and Credit.',
        chapters: [
          {
            id: 'c10-sst-ch1',
            number: 1,
            title: 'Nationalism in India',
            estimatedTime: '40 mins',
            difficulty: 'Hard',
            summary: 'First World War impact, Satyagraha, Non-Cooperation Movement, Civil Disobedience Movement, Salt March, sense of collective belonging.',
            notes: {
              overview: 'The growth of modern nationalism in India was intimately connected to the anti-colonial movement led by Mahatma Gandhi and the Congress.',
              keyPoints: [
                'Rowlatt Act (1919) authorized detention without trial; led to Jallianwala Bagh massacre on 13 April 1919.',
                'Non-Cooperation Movement launched in 1920; suspended after Chauri Chaura incident in February 1922.',
                'Salt March (Dandi March): Started on 12 March 1930 from Sabarmati to Dandi (240 miles) to break the salt law.',
                'Poona Pact (1932) signed between Gandhiji and Dr. B.R. Ambedkar for reserved seats for depressed classes.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Who organized the Dalits into the Depressed Classes Association in 1930?',
                options: ['Mahatma Gandhi', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Jyotirao Phule'],
                correctAnswer: 1,
                explanation: 'Dr. B.R. Ambedkar organized the Depressed Classes Association in 1930.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Why did Mahatma Gandhi choose Salt as a powerful symbol of resistance against British rule?',
                answer: '1. Salt was consumed by both rich and poor alike as an indispensable dietary item.\\n2. The tax on salt and the British government monopoly over its manufacture revealed the most oppressive face of colonial rule.\\n3. It resonated across caste, religious, and class divisions, uniting Indians under a common emotional banner.'
              }
            ],
            revisionSheet: ['1919: Rowlatt Act & Jallianwala Bagh', '1920: Non-Cooperation launched', '1930: Dandi March'],
            samplePaper: {
              paperTitle: 'Class 10 CBSE Social Science Board Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 20M', 'Short Qs: 18M', 'Long Qs: 20M', 'Case-based: 12M', 'Map Skill: 5M']
            }
          }
        ]
      },
      {
        id: 'c10-eng',
        name: 'English Language & Literature',
        icon: 'BookOpen',
        themeColor: '#8b5cf6',
        chaptersCount: 11,
        description: 'First Flight & Footprints Without Feet - Prose, poetry, analytical paragraphs, formal letters.',
        chapters: [
          {
            id: 'c10-eng-ch1',
            number: 1,
            title: 'A Letter to God (G.L. Fuentes)',
            estimatedTime: '25 mins',
            difficulty: 'Easy',
            summary: 'Lencho, a hardworking farmer, loses his ripe corn harvest in a hailstorm and writes a letter directly to God asking for 100 pesos.',
            notes: {
              overview: 'Explores unwavering, innocent faith contrasted with ironic cynicism. The postmaster and postal staff collect 70 pesos to help, but Lencho calls them a "bunch of crooks".',
              keyPoints: [
                'Lencho lives on the crest of a low hill.',
                'A heavy hailstorm destroys his entire corn crop.',
                'His steadfast faith leads him to write a letter to God.',
                'Irony: The people who generously pooled money to help him are accused of stealing the missing 30 pesos.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'How much money did the postmaster manage to collect for Lencho?',
                options: ['100 pesos', '70 pesos', '50 pesos', '30 pesos'],
                correctAnswer: 1,
                explanation: 'The postmaster gave part of his salary and collected 70 pesos from colleagues and friends.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Discuss the irony at the end of the story "A Letter to God".',
                answer: 'Irony occurs when the outcome contradicts expectations. The postmaster and his employees showed great human kindness by sending 70 pesos so Lencho’s faith in God would not be shaken. However, when Lencho counted 70 pesos instead of 100, he believed the post office clerks had stolen 30 pesos and called them a "bunch of crooks".'
              }
            ],
            revisionSheet: ['Theme: Faith can move mountains, but human prejudice blinds us to true kindness.'],
            samplePaper: {
              paperTitle: 'Class 10 CBSE English Mock Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Section A: Reading (20M)', 'Section B: Writing & Grammar (20M)', 'Section C: Literature (40M)']
            }
          }
        ]
      }
    ]
  },
  {
    id: '11',
    title: 'Class 11',
    tagline: 'Senior Secondary Core Foundation',
    level: 'Senior Secondary',
    badge: 'Senior Secondary',
    color: '#0284c7',
    description: 'Specialized streams for higher secondary education in India: Science (PCM/PCB), Commerce, and Humanities.',
    streams: ['Science', 'Commerce', 'Humanities'],
    subjects: [
      // Science Stream Subjects
      {
        id: 'c11-phy',
        name: 'Physics',
        stream: 'Science',
        icon: 'Atom',
        themeColor: '#0284c7',
        chaptersCount: 14,
        description: 'Kinematics, Laws of Motion, Work Energy Power, Rotational Dynamics, Gravitation, Thermodynamics, Oscillations & Waves.',
        chapters: [
          {
            id: 'c11-phy-ch1',
            number: 1,
            title: 'Units and Measurements',
            estimatedTime: '35 mins',
            difficulty: 'Easy',
            summary: 'SI units, dimensional analysis, dimensional formulas, checking correctness of equations, and error estimation.',
            notes: {
              overview: 'Physics is an exact science based on measurement. Understanding base SI units, derived units, dimensional consistency, and significant figures.',
              keyPoints: [
                '7 Fundamental SI Units: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd).',
                'Principle of Homogeneity of Dimensions: Dimensions of each term on both sides of a physical equation must be identical.',
                'Dimensional analysis can convert units between systems and deduce relations among physical quantities.'
              ],
              formulae: [
                'Force: [F] = [M L T⁻²]',
                'Energy/Work: [W] = [M L² T⁻²]',
                'Pressure: [P] = [M L⁻¹ T⁻²]'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following pairs has the same dimensions?',
                options: ['Force and Work', 'Work and Torque', 'Impulse and Force', 'Power and Energy'],
                correctAnswer: 1,
                explanation: 'Both Work and Torque have dimensions [M L² T⁻²].'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Check the dimensional consistency of the equation: v² = u² + 2as.',
                answer: 'Dimensions of LHS [v²] = [L T⁻¹]² = [L² T⁻²].\\nDimensions of RHS terms:\\n[u²] = [L T⁻¹]² = [L² T⁻²].\\n[2as] = [L T⁻²] [L] = [L² T⁻²].\\nSince every term has the dimension [L² T⁻²], the equation is dimensionally consistent.'
              }
            ],
            revisionSheet: ['Gravitational constant G = [M⁻¹ L³ T⁻²]', 'Planck constant h = [M L² T⁻¹]'],
            samplePaper: {
              paperTitle: 'Class 11 Physics Term Exam Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 70,
              sections: ['Section A: 16 MCQs', 'Section B: 5 Very Short (2M)', 'Section C: 7 Short (3M)', 'Section D: 2 Case-based (4M)', 'Section E: 3 Long (5M)']
            }
          },
          {
            id: 'c11-phy-ch3',
            number: 3,
            title: 'Laws of Motion & Friction',
            estimatedTime: '45 mins',
            difficulty: 'Hard',
            summary: 'Newton’s three laws, inertia, momentum, impulse, conservation of linear momentum, and static vs kinetic friction.',
            notes: {
              overview: 'Forces and cause of motion. Newton’s laws, free body diagrams, impulse-momentum theorem, and laws of limiting friction.',
              keyPoints: [
                'Newton’s 2nd Law: F = dp/dt = m(dv/dt) = ma.',
                'Newton’s 3rd Law: To every action there is an equal and opposite reaction acting on different bodies.',
                'Limiting static friction fs(max) = μs N; Kinetic friction fk = μk N (where μk < μs).'
              ],
              formulae: [
                'Impulse J = F Δt = Δp = m(v - u)',
                'Centripetal acceleration ac = v²/r',
                'Maximum speed on banked road: v_max = √[rg (tan θ + μ) / (1 - μ tan θ)]'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Why does a cricketer pull his hands backward while catching a fast-moving ball?',
                options: ['To increase force', 'To increase contact time and decrease force', 'To avoid catching the ball', 'To increase momentum'],
                correctAnswer: 1,
                explanation: 'Increasing the time of stopping decreases the rate of change of momentum (force) exerted on hands (F = Δp/Δt).'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'State the law of conservation of linear momentum and prove it using Newton’s third law of motion.',
                answer: 'Law: The total linear momentum of an isolated system remains conserved if no net external force acts upon it.\\nProof: Consider two colliding bodies A and B. During collision of time Δt, force exerted by A on B is FAB and by B on A is FBA.\\nBy Newton’s 3rd Law: FAB = -FBA.\\nFAB Δt = -FBA Δt => ΔpB = -ΔpA => ΔpA + ΔpB = 0.\\nHence, total change in momentum is zero, meaning total initial momentum = total final momentum.'
              }
            ],
            revisionSheet: ['Static friction is a self-adjusting force up to limiting friction.'],
            samplePaper: {
              paperTitle: 'Class 11 Physics Mid-Term Solved Blueprint (Demo)',
              duration: '3 Hours',
              totalMarks: 70,
              sections: ['Theory: 70 Marks', 'Practicals: 30 Marks']
            }
          }
        ]
      },
      {
        id: 'c11-chem',
        name: 'Chemistry',
        stream: 'Science',
        icon: 'TestTube2',
        themeColor: '#059669',
        chaptersCount: 14,
        description: 'Some Basic Concepts, Structure of Atom, Periodic Classification, Chemical Bonding, Thermodynamics, Equilibrium, Redox, Organic Basics.',
        chapters: [
          {
            id: 'c11-chem-ch1',
            number: 1,
            title: 'Some Basic Concepts of Chemistry (Mole Concept)',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Mole concept, molar mass, empirical and molecular formulas, stoichiometry, and limiting reagents.',
            notes: {
              overview: 'The mole is the chemist’s counting unit. Stoichiometric calculations, molarity, molality, mole fraction, and determining limiting reagents.',
              keyPoints: [
                '1 Mole = 6.022 × 10²³ entities (Avogadro’s Constant NA).',
                'Molar Mass: Mass of 1 mole of substance in grams.',
                'Molarity (M) = Moles of solute / Volume of solution in litres.',
                'Molality (m) = Moles of solute / Mass of solvent in kilograms.',
                'Limiting Reagent: The reactant that is completely consumed in a reaction and limits the amount of product formed.'
              ],
              formulae: [
                'n = Given Mass (w) / Molar Mass (M)',
                'Molarity M = (wB × 1000) / (MB × V_mL)'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following concentration terms does not change with temperature?',
                options: ['Molarity', 'Molality', 'Normality', 'Volume percent'],
                correctAnswer: 1,
                explanation: 'Molality involves mass of solvent (kg), which is independent of temperature changes.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Calculate the molarity of NaOH in the solution prepared by dissolving 4 g of NaOH in enough water to form 250 mL of solution.',
                answer: 'Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol.\\nMoles of NaOH = 4 g / 40 g/mol = 0.1 mol.\\nVolume of solution = 250 mL = 0.25 L.\\nMolarity = Moles / Volume (L) = 0.1 / 0.25 = 0.4 M.'
              }
            ],
            revisionSheet: ['1 mole of any ideal gas occupies 22.4 L at STP.'],
            samplePaper: {
              paperTitle: 'Class 11 Chemistry Term Exam Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 70,
              sections: ['MCQs: 16M', 'Short Qs: 24M', 'Long Qs: 30M']
            }
          }
        ]
      },
      {
        id: 'c11-maths',
        name: 'Mathematics',
        stream: 'Science',
        icon: 'Calculator',
        themeColor: '#0284c7',
        chaptersCount: 14,
        description: 'Sets, Relations & Functions, Trigonometric Functions, Complex Numbers, Permutations & Combinations, Binomial Theorem, Sequences, Straight Lines, Limits.',
        chapters: [
          {
            id: 'c11-math-ch1',
            number: 1,
            title: 'Sets, Relations and Functions',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Roster and set-builder form, subsets, power sets, Venn diagrams, Cartesian products, domain, and range.',
            notes: {
              overview: 'Foundational language of modern mathematics. Union, intersection, complement of sets, Cartesian products A × B, and defining functions.',
              keyPoints: [
                'Power set P(A) contains 2^n elements if A has n elements.',
                'De Morgan’s Laws: (A ∪ B)′ = A′ ∩ B′ ; (A ∩ B)′ = A′ ∪ B′.',
                'A relation f from A to B is a function if every element of set A has one and only one image in set B.'
              ],
              formulae: ['n(A ∪ B) = n(A) + n(B) - n(A ∩ B)']
            },
            mcqs: [
              {
                id: 1,
                question: 'If set A has 3 elements, how many subsets does power set P(A) have?',
                options: ['6', '8', '9', '16'],
                correctAnswer: 1,
                explanation: 'Number of elements in power set is 2ⁿ = 2³ = 8 subsets.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'If n(A) = 30, n(B) = 45 and n(A ∪ B) = 60, find n(A ∩ B).',
                answer: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)\\n60 = 30 + 45 - n(A ∩ B)\\n60 = 75 - n(A ∩ B) => n(A ∩ B) = 15.'
              }
            ],
            revisionSheet: ['Empty set φ is a subset of every set.'],
            samplePaper: {
              paperTitle: 'Class 11 Mathematics Blueprint Test (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 20M', 'Descriptive: 60M']
            }
          }
        ]
      },
      // Commerce Stream Subjects
      {
        id: 'c11-acc',
        name: 'Accountancy',
        stream: 'Commerce',
        icon: 'FileSpreadsheet',
        themeColor: '#0284c7',
        chaptersCount: 13,
        description: 'Introduction to Accounting, Theory Base, Journal, Ledger, Cash Book, Bank Reconciliation Statement, Trial Balance, Depreciation, Financial Statements.',
        chapters: [
          {
            id: 'c11-acc-ch1',
            number: 1,
            title: 'Introduction to Accounting & Principles',
            estimatedTime: '35 mins',
            difficulty: 'Medium',
            summary: 'Meaning, objectives, GAAP principles (Going Concern, Consistency, Accrual), double-entry system, and basic accounting equation.',
            notes: {
              overview: 'Accounting is the art of recording, classifying, and summarizing financial transactions. Understanding GAAP concepts that underpin the double-entry system.',
              keyPoints: [
                'Fundamental Accounting Assumptions: Going Concern, Consistency, and Accrual.',
                'Dual Aspect Principle: Every transaction affects at least two accounts (Assets = Liabilities + Capital).',
                'Money Measurement Concept: Only transactions expressible in monetary terms are recorded.',
                'Prudence/Conservatism Concept: Anticipate no profit, but provide for all possible losses.'
              ],
              formulae: [
                'Accounting Equation: Assets = Liabilities + Capital',
                'Closing Capital = Opening Capital + Profit - Drawings'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which accounting concept requires making a provision for doubtful debts?',
                options: ['Going Concern', 'Conservatism (Prudence)', 'Matching Principle', 'Cost Concept'],
                correctAnswer: 1,
                explanation: 'Prudence principle requires providing for all probable losses while not anticipating unearned profits.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Show the effect of the following on the Accounting Equation: (i) Started business with cash ₹50,000; (ii) Purchased goods for cash ₹20,000; (iii) Sold goods costing ₹10,000 for ₹14,000.',
                answer: '(i) Cash (+50,000) = Capital (+50,000).\\n(ii) Cash (-20,000) + Stock (+20,000) = Capital (50,000).\\n(iii) Cash (+14,000) + Stock (-10,000) = Capital (+4,000 profit).\\nFinal Equation: Cash (44,000) + Stock (10,000) = Capital (54,000).'
              }
            ],
            revisionSheet: ['Golden Rules: Personal Account (Debit the receiver, credit the giver); Real Account (Debit what comes in, credit what goes out); Nominal Account (Debit all expenses and losses, credit all incomes and gains).'],
            samplePaper: {
              paperTitle: 'Class 11 Accountancy Solved Exam Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 20M', 'Short Journal Qs: 20M', 'Ledger & Trial Balance: 40M']
            }
          }
        ]
      },
      {
        id: 'c11-bst',
        name: 'Business Studies',
        stream: 'Commerce',
        icon: 'Briefcase',
        themeColor: '#d97706',
        chaptersCount: 11,
        description: 'Nature of Business, Forms of Business Organisations (Sole Prop, Partnership, Company), Private & Public Enterprises, Business Services.',
        chapters: [
          {
            id: 'c11-bst-ch1',
            number: 1,
            title: 'Nature and Purpose of Business',
            estimatedTime: '30 mins',
            difficulty: 'Easy',
            summary: 'Economic vs non-economic activities, concept of business, profession, employment, business risks, and classification of industries.',
            notes: {
              overview: 'Business is an economic activity involving continuous production or purchase and sale of goods/services with the primary objective of earning profit.',
              keyPoints: [
                'Primary Industry (Extraction & Genetic), Secondary Industry (Manufacturing & Construction), Tertiary Industry (Banking, Insurance, Transport).',
                'Profit is essential for survival, growth, expansion, and as an index of performance.',
                'Business risks arise due to uncertainties like market demand shifts, technological changes, and natural calamities.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following is NOT an economic activity?',
                options: ['Doctor treating patients in clinic', 'Teacher teaching in school', 'Mother cooking dinner for her family', 'Farmer growing wheat for market'],
                correctAnswer: 2,
                explanation: 'A mother cooking for her family is performed out of love and affection (non-economic), without monetary compensation.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Distinguish between Business, Profession, and Employment on the basis of: (a) Mode of establishment, (b) Qualification, (c) Return/Reward, (d) Risk.',
                answer: '1. Mode of establishment: Business starts with entrepreneur decision; Profession requires membership in professional body; Employment starts with appointment letter.\\n2. Qualification: No minimum for business; Specialized degree needed for profession; Prescribed qualification for employment.\\n3. Reward: Profit in business; Professional fee in profession; Salary/wages in employment.\\n4. Risk: High and uncertain in business; Low in profession; None in employment.'
              }
            ],
            revisionSheet: ['Commerce = Trade + Auxiliaries to trade (Transport, Banking, Insurance, Warehousing, Advertising).'],
            samplePaper: {
              paperTitle: 'Class 11 Business Studies Sample Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 20M', 'Short Qs: 24M', 'Case Studies: 36M']
            }
          }
        ]
      },
      {
        id: 'c11-eco',
        name: 'Economics',
        stream: 'Commerce',
        icon: 'TrendingUp',
        themeColor: '#2563eb',
        chaptersCount: 14,
        description: 'Microeconomics (Consumer Equilibrium, Demand, Elasticity, Production) and Statistics for Economics (Central Tendency, Dispersion).',
        chapters: [
          {
            id: 'c11-eco-ch1',
            number: 1,
            title: 'Consumer Equilibrium & Demand',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Utility analysis, Law of Diminishing Marginal Utility, Indifference Curve analysis, Law of Demand, and price elasticity.',
            notes: {
              overview: 'Consumer behavior analysis. Law of Diminishing Marginal Utility states that as more units of a good are consumed, the marginal utility derived from each additional unit declines.',
              keyPoints: [
                'Total Utility (TU) is sum of marginal utilities. TU is maximum when MU = 0.',
                'Law of Demand: Other things remaining constant, inverse relationship between price and quantity demanded.',
                'Price Elasticity of Demand (Ed) = (% change in quantity demanded) / (% change in price).',
                'Indifference curves are convex to origin due to diminishing marginal rate of substitution (MRSxy).'
              ],
              formulae: ['Ed = - (ΔQ / ΔP) × (P / Q)', 'TU_n = MU_1 + MU_2 + ... + MU_n']
            },
            mcqs: [
              {
                id: 1,
                question: 'When marginal utility is zero, total utility is:',
                options: ['Zero', 'Minimum', 'Maximum', 'Negative'],
                correctAnswer: 2,
                explanation: 'Total utility reaches its peak (point of satiety) when marginal utility equals zero.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Why does a demand curve typically slope downwards from left to right?',
                answer: '1. Law of Diminishing Marginal Utility (consumer pays less for extra units).\\n2. Income effect (drop in price increases real purchasing power).\\n3. Substitution effect (cheaper good replaces relatively dearer substitutes).\\n4. Entry of new consumers.'
              }
            ],
            revisionSheet: ['Inelastic demand: Ed < 1; Elastic demand: Ed > 1; Unitary: Ed = 1.'],
            samplePaper: {
              paperTitle: 'Class 11 Economics Mock Assessment (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Microeconomics: 40M', 'Statistics: 40M']
            }
          }
        ]
      },
      // Humanities Stream Subjects
      {
        id: 'c11-hist',
        name: 'History',
        stream: 'Humanities',
        icon: 'Landmark',
        themeColor: '#b45309',
        chaptersCount: 11,
        description: 'Themes in World History: Writing and City Life (Mesopotamia), An Empire Across Three Continents (Rome), Nomadic Empires, Three Orders.',
        chapters: [
          {
            id: 'c11-hist-ch1',
            number: 1,
            title: 'Writing and City Life (Early Mesopotamia)',
            estimatedTime: '35 mins',
            difficulty: 'Medium',
            summary: 'Urbanization between Tigris and Euphrates, cuneiform script on clay tablets, Uruk and Ur excavations, social hierarchy.',
            notes: {
              overview: 'Mesopotamia (modern-day Iraq) witnessed the birth of the earliest cities, monumental temples (ziggurats), mathematics, and cuneiform writing around 3200 BCE.',
              keyPoints: [
                'Mesopotamia means the land between two rivers: Tigris and Euphrates.',
                'Cuneiform writing derived from Latin "cuneus" (wedge) and "forma" (shape).',
                'Written on wet clay tablets using a sharp reed stylus and baked hard in the sun.',
                'Hammurabi’s Code of Laws: Famous legal code inscribed on stone stelae.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Mesopotamian cuneiform script was written on tablets made of:',
                options: ['Papyrus', 'Wet clay', 'Bronze sheets', 'Animal hide'],
                correctAnswer: 1,
                explanation: 'Scribes pressed wedge-shaped marks onto soft, damp clay tablets before drying them.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Why is the development of writing considered a turning point in Mesopotamian civilization?',
                answer: '1. Urban economy required accurate records of transactions, trade contracts, land deeds, and royal decrees.\\n2. Allowed preservation of historical annals, legal codes (such as Hammurabi’s Code), and epic literature (Epic of Gilgamesh).\\n3. Enabled complex temple administrations to manage rations, grain distribution, and tax collection.'
              }
            ],
            revisionSheet: ['Sexagesimal numeral system (base 60) gave us 60 minutes in an hour and 360 degrees in a circle.'],
            samplePaper: {
              paperTitle: 'Class 11 History World Themes Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 16M', 'Source-based: 15M', 'Long Essays: 40M', 'Map Work: 9M']
            }
          }
        ]
      },
      {
        id: 'c11-pol',
        name: 'Political Science',
        stream: 'Humanities',
        icon: 'Scale',
        themeColor: '#7c3aed',
        chaptersCount: 12,
        description: 'Indian Constitution at Work (Constitution, Rights, Elections, Executive, Judiciary, Federalism) and Political Theory.',
        chapters: [
          {
            id: 'c11-pol-ch1',
            number: 1,
            title: 'Constitution: Why and How?',
            estimatedTime: '35 mins',
            difficulty: 'Medium',
            summary: 'Functions of a constitution, authority of constituent assembly, debates, and borrowing best practices across world constitutions.',
            notes: {
              overview: 'A constitution provides the basic rules allowing coordination in a diverse society, specifies decision-making authority, limits governmental tyranny, and realizes public aspirations.',
              keyPoints: [
                'First sitting of Constituent Assembly: 9 December 1946; Adopted on 26 November 1949; Came into force on 26 January 1950.',
                'Drafting Committee Chairman: Dr. B.R. Ambedkar.',
                'Substantive provisions: Institutional checks, judicial independence, and democratic accountability.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Who moved the historic "Objectives Resolution" in the Constituent Assembly in December 1946?',
                options: ['Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', 'Dr. Rajendra Prasad'],
                correctAnswer: 1,
                explanation: 'Jawaharlal Nehru moved the historic Objectives Resolution outlining the guiding principles of the Republic.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'What are the core functions that a national constitution performs for a society?',
                answer: '1. Provides a set of basic rules allowing minimal coordination among diverse citizens.\\n2. Specifies who has the power to make decisions in society.\\n3. Sets limits on what a government can impose on its citizens (Fundamental Rights).\\n4. Enables the government to fulfill the aspirations of society and create conditions for a just society.'
              }
            ],
            revisionSheet: ['Borrowed features: Parliamentary system from UK; Fundamental Rights from USA; Directive Principles from Ireland.'],
            samplePaper: {
              paperTitle: 'Class 11 Political Science Board Prep Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 20M', 'Descriptive Qs: 60M']
            }
          }
        ]
      },
      {
        id: 'c11-eng',
        name: 'English Core',
        stream: 'All Streams',
        icon: 'BookOpen',
        themeColor: '#8b5cf6',
        chaptersCount: 10,
        description: 'Hornbill & Snapshots - The Portrait of a Lady, We’re Not Afraid to Die, Note-making, Summarizing, and Speech Writing.',
        chapters: [
          {
            id: 'c11-eng-ch1',
            number: 1,
            title: 'The Portrait of a Lady (Khushwant Singh)',
            estimatedTime: '25 mins',
            difficulty: 'Easy',
            summary: 'An affectionate autobiographical memoir of the author’s relationship with his pious grandmother from village life to city living.',
            notes: {
              overview: 'Traces three distinct phases of relationship: village companionship, turning point when they move to the city, and university days where common link of friendship snaps.',
              keyPoints: [
                'Grandmother was deeply religious, constantly chanting rosary beads.',
                'In the village, she fed stray dogs chapattis; in the city courtyard, she fed sparrows.',
                'Sparrows mourned in absolute silence when she passed away, refusing bread crumbs.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'How did the sparrows react on the death of the grandmother?',
                options: ['They chirped loudly', 'They sat quietly and did not touch the bread crumbs', 'They flew away immediately', 'They sang songs'],
                correctAnswer: 1,
                explanation: 'Thousands of sparrows sat quietly around her body in grieving silence and did not eat the bread crumbs scattered by author’s mother.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Describe the three phases of the author’s relationship with his grandmother before he left for abroad.',
                answer: '1. Village Childhood: Author and grandmother were inseparable companions. She woke him up, dressed him, and accompanied him to the temple school.\\n2. City School Life: Turning point. Author attended English medium school by bus. Grandmother could no longer help in lessons and disapproved of science and music lessons.\\n3. University Years: Author got a separate room; common link of friendship was snapped. She accepted her seclusion with quiet resignation and spent time spinning wheel and feeding sparrows.'
              }
            ],
            revisionSheet: ['Theme: Deep emotional bond between grandparents and grandchildren amidst inevitable generational transitions.'],
            samplePaper: {
              paperTitle: 'Class 11 English Core Sample Test (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Reading & Note Making: 26M', 'Creative Writing: 23M', 'Literature: 31M']
            }
          }
        ]
      }
    ]
  },
  {
    id: '12',
    title: 'Class 12',
    tagline: 'CBSE Senior Secondary Board Exam Special',
    level: 'Senior Secondary Board',
    badge: 'Class 12 Board Prep',
    color: '#0284c7',
    description: 'Premier preparation for Class 12 CBSE Board Exams, CUET & Entrance Foundations across Science, Commerce, and Humanities.',
    streams: ['Science', 'Commerce', 'Humanities'],
    subjects: [
      // Science Stream Class 12
      {
        id: 'c12-phy',
        name: 'Physics',
        stream: 'Science',
        icon: 'Atom',
        themeColor: '#0284c7',
        chaptersCount: 14,
        description: 'Electrostatics, Current Electricity, Magnetism, EMI, AC Currents, Optics, Dual Nature, Atoms, Nuclei, Semiconductors.',
        chapters: [
          {
            id: 'c12-phy-ch1',
            number: 1,
            title: 'Electric Charges and Fields',
            estimatedTime: '45 mins',
            difficulty: 'Hard',
            summary: 'Coulomb’s Law, electric field lines, electric dipole, Gauss’s Theorem and its applications (infinite wire, charged sheet, spherical shell).',
            notes: {
              overview: 'Electrostatics deals with charges at rest. Gauss’s law provides an elegant method to calculate electric fields for symmetric charge distributions.',
              keyPoints: [
                'Coulomb’s Law: F = (1 / 4πε₀) × (|q₁ q₂| / r²) where 1 / 4πε₀ = 9 × 10⁹ N m²/C².',
                'Electric flux Φ = ∮ E · dA = q_enclosed / ε₀ (Gauss’s Theorem).',
                'Electric field due to infinitely long thin charged wire: E = λ / (2πε₀r).',
                'Electric field due to uniformly charged infinite thin plane sheet: E = σ / (2ε₀).'
              ],
              formulae: [
                'Dipole Moment: p = q × (2a)',
                'Torque on Dipole: τ = p × E = p E sin θ',
                'Field on axial line: E_axial = (2kp) / r³ ; Field on equatorial line: E_eq = (kp) / r³'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Electric field inside a uniformly charged conducting spherical shell is:',
                options: ['Zero', 'Constant non-zero', 'Inversely proportional to r', 'Directly proportional to r'],
                correctAnswer: 0,
                explanation: 'Since all charges reside on the outer surface of conductor, enclosed charge inside is zero, making electric field zero.'
              },
              {
                id: 2,
                question: 'The SI unit of electric flux is:',
                options: ['N/C', 'N m²/C', 'C/m²', 'V/m'],
                correctAnswer: 1,
                explanation: 'Φ = E · A = (N/C) × m² = N m²/C (or Volt · metre).'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'State Gauss’s law in electrostatics. Using this law, derive the expression for the electric field due to an infinitely long straight wire of uniform linear charge density λ.',
                answer: 'Gauss’s Law: The total electric flux through any closed Gaussian surface in free space is equal to 1/ε₀ times the net electric charge enclosed by that surface: Φ = ∮ E · dA = q/ε₀.\\nDerivation:\\n1. Consider a thin wire of linear charge density λ. Draw a cylindrical Gaussian surface of radius r and length l coaxial with wire.\\n2. Electric field E is radially outward. Flux through two circular end faces is zero because E is perpendicular to normal area vector (cos 90° = 0).\\n3. Flux through curved cylindrical surface: Φ = E × (2πr l).\\n4. By Gauss’s law: Φ = q_enclosed / ε₀ = (λ l) / ε₀.\\n5. Equating: E × 2πr l = (λ l) / ε₀ => E = λ / (2πε₀ r).'
              }
            ],
            revisionSheet: ['E inside a conductor = 0', 'Potential V is constant inside a charged conducting shell and equal to value at surface.'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Board Physics Official Model Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 70,
              sections: ['Section A: 16 MCQs (16M)', 'Section B: 5 Very Short (10M)', 'Section C: 7 Short (21M)', 'Section D: 2 Case Studies (8M)', 'Section E: 3 Long (15M)']
            }
          },
          {
            id: 'c12-phy-ch3',
            number: 3,
            title: 'Current Electricity & Kirchhoff’s Laws',
            estimatedTime: '45 mins',
            difficulty: 'Medium',
            summary: 'Ohm’s law, drift velocity, resistivity and temperature dependence, Kirchhoff’s rules, Wheatstone bridge, and internal resistance of cells.',
            notes: {
              overview: 'Electric current and circuit analysis. Microscopic view of conduction, drift velocity, relaxation time, and Kirchhoff’s circuit laws.',
              keyPoints: [
                'Current I = n e A vd, where vd = (e E τ) / m.',
                'Kirchhoff’s Current Law (KCL): Sum of currents meeting at any junction is zero (Conservation of Charge).',
                'Kirchhoff’s Voltage Law (KVL): Algebraic sum of potential differences in any closed loop is zero (Conservation of Energy).',
                'Balanced Wheatstone Bridge: P/Q = R/S (no current flows through galvanometer).'
              ],
              formulae: [
                'vd = (e E τ) / m',
                'Resistance R = ρ L / A',
                'Cell Terminal Voltage V = E - I r'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Kirchhoff’s first rule (ΣI = 0) at a junction is based on the conservation of:',
                options: ['Energy', 'Charge', 'Momentum', 'Mass'],
                correctAnswer: 1,
                explanation: 'Current entering a junction must equal current exiting, following the principle of conservation of electric charge.'
              }
            ],
            importantQuestions: [
              {
                marks: 3,
                question: 'Define drift velocity. Write its relation with electric current density.',
                answer: 'Drift velocity (vd) is the average velocity acquired by conduction electrons opposite to the applied electric field due to repeated collisions with lattice ions.\\nCurrent density j = I/A = n e vd, where n is electron number density and e is electronic charge.'
              }
            ],
            revisionSheet: ['Potentiometer is preferred over voltmeter because it draws no current at balance point (infinite internal resistance).'],
            samplePaper: {
              paperTitle: 'Class 12 Current Electricity Chapter Test (Demo)',
              duration: '1 Hour',
              totalMarks: 35,
              sections: ['MCQs: 7M', 'Numericals: 18M', 'Derivation: 10M']
            }
          }
        ]
      },
      {
        id: 'c12-chem',
        name: 'Chemistry',
        stream: 'Science',
        icon: 'TestTube2',
        themeColor: '#059669',
        chaptersCount: 10,
        description: 'Solutions, Electrochemistry, Chemical Kinetics, d & f Block, Coordination Compounds, Haloalkanes, Alcohols, Aldehydes & Ketones, Amines, Biomolecules.',
        chapters: [
          {
            id: 'c12-chem-ch1',
            number: 1,
            title: 'Solutions & Colligative Properties',
            estimatedTime: '45 mins',
            difficulty: 'Hard',
            summary: 'Henry’s law, Raoult’s law, ideal and non-ideal solutions, colligative properties (ΔTb, ΔTf, osmotic pressure), van ’t Hoff factor.',
            notes: {
              overview: 'Colligative properties depend solely on the number of solute particles relative to total molecules present, independent of their chemical nature.',
              keyPoints: [
                'Raoult’s Law: For a solution of volatile liquids, partial vapour pressure of each component is directly proportional to its mole fraction (p₁ = x₁ p₁°).',
                'Positive Deviation: A-B interactions are weaker than A-A and B-B (e.g., Ethanol + Acetone).',
                'Negative Deviation: A-B interactions are stronger than A-A and B-B (e.g., Chloroform + Acetone).',
                'Colligative Properties: Relative lowering of vapour pressure, Elevation of boiling point, Depression of freezing point, Osmotic pressure.'
              ],
              formulae: [
                'Elevation of Boiling Point: ΔTb = i × Kb × m',
                'Depression of Freezing Point: ΔTf = i × Kf × m',
                'Osmotic Pressure: Π = i C R T'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following aqueous solutions has the highest boiling point?',
                options: ['0.1 M Glucose', '0.1 M NaCl', '0.1 M BaCl2', '0.1 M Sucrose'],
                correctAnswer: 2,
                explanation: 'BaCl2 dissociates into 3 ions (Ba²⁺ + 2Cl⁻), giving the highest van ’t Hoff factor (i ≈ 3), producing maximum boiling point elevation.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Define osmotic pressure. Explain why measurement of osmotic pressure is preferred for determining molar masses of polymers and biomolecules.',
                answer: 'Osmotic pressure is the excess pressure applied to solution side to prevent the inward flow of solvent across a semipermeable membrane.\\nAdvantages for polymers and biomolecules:\\n1. Measured at room temperature (unlike boiling point elevation which can denature sensitive proteins).\\n2. Magnitude of osmotic pressure is large even for very dilute solutions of high molar mass substances, ensuring accurate measurement.'
              }
            ],
            revisionSheet: ['van ’t Hoff factor i = Normal Molar Mass / Abnormal Molar Mass = Total particles after association/dissociation / Initial particles.'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Board Chemistry Model Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 70,
              sections: ['Section A: 16 MCQs (16M)', 'Section B: 5 Qs (10M)', 'Section C: 7 Qs (21M)', 'Section D: 2 Case Studies (8M)', 'Section E: 3 Long (15M)']
            }
          }
        ]
      },
      {
        id: 'c12-maths',
        name: 'Mathematics',
        stream: 'Science',
        icon: 'Calculator',
        themeColor: '#0284c7',
        chaptersCount: 13,
        description: 'Matrices, Determinants, Continuity & Differentiability, Application of Derivatives, Integrals, Differential Equations, Vectors, 3D Geometry, Linear Programming, Probability.',
        chapters: [
          {
            id: 'c12-math-ch1',
            number: 1,
            title: 'Matrices and Determinants',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Matrix algebra, transpose, symmetric & skew-symmetric matrices, minors, cofactors, adjoint, inverse of a matrix, solving system of linear equations.',
            notes: {
              overview: 'Matrices and determinants form the bedrock of linear algebra and higher technical computing. Matrix inversion method for solving simultaneous linear equations.',
              keyPoints: [
                'Matrix multiplication is associative but NOT commutative in general (AB ≠ BA).',
                'A square matrix A is symmetric if Aᵀ = A; skew-symmetric if Aᵀ = -A.',
                'Inverse exists if and only if |A| ≠ 0 (non-singular matrix): A⁻¹ = (1/|A|) adj(A).',
                'Solving AX = B: If |A| ≠ 0, unique solution is X = A⁻¹ B.'
              ],
              formulae: [
                '|adj(A)| = |A|^(n-1) for an n × n matrix',
                'A · adj(A) = adj(A) · A = |A| I',
                '(AB)⁻¹ = B⁻¹ A⁻¹'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'If A is a 3 × 3 matrix with |A| = 4, then value of |adj(A)| is:',
                options: ['4', '12', '16', '64'],
                correctAnswer: 2,
                explanation: '|adj(A)| = |A|^(n-1) = 4^(3-1) = 4² = 16.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Solve the system of linear equations using matrix method:\\n2x + 3y + 3z = 5\\nx - 2y + z = -4\\n3x - y - 2z = 3',
                answer: 'Write in form AX = B where A = [[2,3,3],[1,-2,1],[3,-1,-2]], X = [[x],[y],[z]], B = [[5],[-4],[3]].\\nCalculate |A| = 2(4 + 1) - 3(-2 - 3) + 3(-1 + 6) = 10 + 15 + 15 = 40 ≠ 0.\\nCompute cofactors and find adj(A).\\nApply X = A⁻¹ B = (1/40) adj(A) B.\\nSolving yields: x = 1, y = 2, z = -1.'
              }
            ],
            revisionSheet: ['A square matrix is singular if its determinant is zero.'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Board Mathematics Solved Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Section A: 20 MCQs', 'Section B: 5 Very Short', 'Section C: 6 Short', 'Section D: 4 Long (5M)', 'Section E: 3 Case Studies (4M)']
            }
          }
        ]
      },
      // Commerce Stream Class 12
      {
        id: 'c12-acc',
        name: 'Accountancy',
        stream: 'Commerce',
        icon: 'FileSpreadsheet',
        themeColor: '#0284c7',
        chaptersCount: 12,
        description: 'Partnership Accounting (Goodwill, Admission, Retirement, Dissolution), Share Capital, Debentures, Financial Statement Analysis, Cash Flow Statement.',
        chapters: [
          {
            id: 'c12-acc-ch1',
            number: 1,
            title: 'Accounting for Partnership: Basic Concepts & Admission',
            estimatedTime: '45 mins',
            difficulty: 'Hard',
            summary: 'Partnership deed provisions, Profit and Loss Appropriation Account, partner capital accounts (Fixed vs Fluctuating), Goodwill valuation, sacrificing ratio on admission.',
            notes: {
              overview: 'Comprehensive rules of partnership. Absence of deed clauses, calculating interest on drawings, sacrificing ratio, and revaluation of assets and liabilities upon admitting a new partner.',
              keyPoints: [
                'In absence of Partnership Deed: Equal profits/losses, no interest on capital/drawings, no salary, 6% p.a. interest on partner loan.',
                'Sacrificing Ratio = Old Profit Share - New Profit Share.',
                'Revaluation Account is a nominal account prepared to record changes in asset values and liabilities upon reconstitution.'
              ],
              formulae: [
                'Sacrificing Ratio = Old Share - New Share',
                'Super Profit = Average Maintainable Profit - Normal Profit',
                'Goodwill = Super Profit × Number of Years’ Purchase'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'In the absence of a partnership agreement, at what rate is interest on a partner’s loan provided?',
                options: ['No interest', '6% per annum', '10% per annum', '12% per annum'],
                correctAnswer: 1,
                explanation: 'Under Indian Partnership Act 1932, partners are entitled to 6% p.a. interest on advances/loans given to the firm.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'A and B are partners sharing profits in ratio 3:2. They admit C into partnership for 1/5th share which he acquires equally from A and B. Calculate the new profit-sharing ratio and sacrificing ratio.',
                answer: 'Share acquired from A = 1/5 × 1/2 = 1/10; from B = 1/5 × 1/2 = 1/10.\\nSacrificing ratio of A and B = 1/10 : 1/10 = 1:1.\\nNew share of A = Old share - Sacrificed share = 3/5 - 1/10 = 5/10.\\nNew share of B = 2/5 - 1/10 = 3/10.\\nShare of C = 1/5 = 2/10.\\nNew Profit Sharing Ratio = 5 : 3 : 2.'
              }
            ],
            revisionSheet: ['Interest on drawings under product method: Total Product × (Rate/100) × (1/12).'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Accountancy Solved Board Blueprint (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Part A: Partnership & Company Accounts (60M)', 'Part B: Financial Statement Analysis (20M)']
            }
          }
        ]
      },
      {
        id: 'c12-bst',
        name: 'Business Studies',
        stream: 'Commerce',
        icon: 'Briefcase',
        themeColor: '#d97706',
        chaptersCount: 12,
        description: 'Principles of Management (Taylor & Fayol), Business Environment, Planning, Organising, Staffing, Directing, Controlling, Financial Management, Marketing Management.',
        chapters: [
          {
            id: 'c12-bst-ch1',
            number: 1,
            title: 'Principles of Management & Scientific Management',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Henri Fayol’s 14 principles of general management vs F.W. Taylor’s scientific management techniques (Time study, Motion study, Differential piece wage).',
            notes: {
              overview: 'Management principles are broad guidelines for managerial decision-making. Comparing Fayol’s administrative principles with Taylor’s scientific management tools.',
              keyPoints: [
                'Fayol’s Top Principles: Unity of Command (one boss for one employee), Unity of Direction (one head, one plan), Scalar Chain (formal line of authority), Espirit de Corps (team spirit).',
                'Taylor’s Scientific Principles: Science not rule of thumb; Harmony not discord; Cooperation not individualism; Maximum development of each person.',
                'Taylor’s Techniques: Functional foremanship, Standardization, Time & Motion studies, Differential piece wage system.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Which principle states that an employee should receive orders from only one superior?',
                options: ['Unity of Direction', 'Unity of Command', 'Scalar Chain', 'Order'],
                correctAnswer: 1,
                explanation: 'Unity of Command prevents dual subordination and ensures clarity of accountability.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Distinguish between Unity of Command and Unity of Direction on the basis of: (a) Meaning, (b) Aim, (c) Implications, (d) Scope.',
                answer: '1. Meaning: Unity of Command means one subordinate receives orders from one superior. Unity of Direction means each group of activities having same objective must have one head and one plan.\\n2. Aim: Unity of Command prevents dual subordination and conflict; Unity of Direction prevents overlapping of activities.\\n3. Implications: Unity of Command affects individual employee performance; Unity of Direction affects the entire organisation.\\n4. Scope: Unity of Command relates to functioning of personnel; Unity of Direction relates to functioning of departments/divisions.'
              }
            ],
            revisionSheet: ['Gang Plank: Direct emergency communication line bypassing the formal scalar chain in urgent circumstances.'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Board Business Studies Model Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 20M', 'Short Qs: 24M', 'Comprehensive Case Studies: 36M']
            }
          }
        ]
      },
      {
        id: 'c12-eco',
        name: 'Economics',
        stream: 'Commerce',
        icon: 'TrendingUp',
        themeColor: '#2563eb',
        chaptersCount: 12,
        description: 'Introductory Macroeconomics (National Income, Money & Banking, Income Determination, Government Budget) and Indian Economic Development.',
        chapters: [
          {
            id: 'c12-eco-ch1',
            number: 1,
            title: 'National Income and Related Aggregates',
            estimatedTime: '45 mins',
            difficulty: 'Hard',
            summary: 'Circular flow of income, GDP, GNP, NNP at factor cost, Value Added method, Income method, Expenditure method, and Real vs Nominal GDP.',
            notes: {
              overview: 'Macroeconomic foundation. National income is the net monetary value of all final goods and services produced by the normal residents of a country during a year.',
              keyPoints: [
                'National Income = NNP at Factor Cost (NNP_FC).',
                'Gross - Depreciation = Net.',
                'Domestic + NFIA (Net Factor Income from Abroad) = National.',
                'Market Price - Net Indirect Taxes (NIT) = Factor Cost.',
                'GDP Deflator = (Nominal GDP / Real GDP) × 100.'
              ],
              formulae: [
                'Value Added = Value of Output - Intermediate Consumption',
                'NNP_FC = GDP_MP - Depreciation + NFIA - NIT'
              ]
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following is NOT included in the estimation of National Income?',
                options: ['Salaries of government doctors', 'Profits earned by Indian bank branches abroad', 'Old-age pension transfer payments', 'Rental income of house property'],
                correctAnswer: 2,
                explanation: 'Old-age pension is a unilateral transfer payment without any reciprocal productive contribution to current output, so it is excluded.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Explain the three phases in the circular flow of income in a simple two-sector economy with a neat diagrammatic representation.',
                answer: '1. Generation Phase (Production): Firms produce goods and services by employing factor services (land, labour, capital, entrepreneurship) provided by households.\\n2. Distribution Phase (Factor Income): Firms pay factor payments (rent, wages, interest, profit) to households for their factor services.\\n3. Disposition Phase (Expenditure): Households spend factor incomes on consumption goods and services produced by firms.\\nThis creates a continuous, unbroken circular flow: Production = Income = Expenditure.'
              }
            ],
            revisionSheet: ['Real GDP reflects actual physical volume of output, adjusted for inflation.'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Board Economics Solved Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Macroeconomics: 40M', 'Indian Economic Development: 40M']
            }
          }
        ]
      },
      // Humanities Stream Class 12
      {
        id: 'c12-hist',
        name: 'History',
        stream: 'Humanities',
        icon: 'Landmark',
        themeColor: '#b45309',
        chaptersCount: 12,
        description: 'Themes in Indian History: Harappan Civilisation, Early States & Economies, Kinship & Caste, Bhakti-Sufi Traditions, Vijayanagara, Mahatma Gandhi.',
        chapters: [
          {
            id: 'c12-hist-ch1',
            number: 1,
            title: 'Bricks, Beads and Bones: The Harappan Civilisation',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Urban planning at Mohenjo-daro, citadel vs lower town, Great Bath, drainage system, subsistence strategies, craft production at Chanhudaro, script and seals.',
            notes: {
              overview: 'The Mature Indus Valley (Harappan) Civilisation (c. 2600-1900 BCE) is celebrated for its extraordinary town planning, brick architecture, drainage, and standardized weights.',
              keyPoints: [
                'Mohenjo-daro layout: Citadel (raised platform for public/ritual structures like Great Bath and Warehouse) and Lower Town (residential sectors).',
                'Advanced drainage: Streets laid out on a grid pattern cutting at right angles, houses connected to covered street drains.',
                'Craft production: Bead-making at Chanhudaro and Lothal using carnelian, jasper, crystal, copper, bronze, and shell.',
                'Harappan script remains undeciphered (pictographic, right-to-left direction).'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'Which of the following Harappan sites has yielded evidence of a ploughed agricultural field?',
                options: ['Mohenjo-daro', 'Kalibangan', 'Lothal', 'Harappa'],
                correctAnswer: 1,
                explanation: 'Kalibangan in Rajasthan has revealed evidence of furrow marks on an early Harappan ploughed field.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'Describe the key architectural and civic features of the domestic architecture and drainage system of Mohenjo-daro.',
                answer: '1. Lower Town Residential Architecture: Houses were centered around a courtyard with rooms on all sides. Courtyard was center of activities like cooking and weaving.\\n2. Privacy: No windows on ground-level walls, main entrance did not give direct view of interior.\\n3. Private Bathrooms: Every house had its own bathroom paved with bricks, with drains connected through the wall to the street drains.\\n4. Systematic Drainage: Carefully planned grid system. Street drains were covered with loose bricks or limestone slabs that could be removed for periodic cleaning.'
              }
            ],
            revisionSheet: ['Cunningham’s confusion: First Director-General of ASI misunderstood Harappan artifacts because he searched for early historic chronology.'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Board History Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 21M', 'Short Qs: 18M', 'Long Essays: 24M', 'Source-based: 12M', 'Map Work: 5M']
            }
          }
        ]
      },
      {
        id: 'c12-pol',
        name: 'Political Science',
        stream: 'Humanities',
        icon: 'Scale',
        themeColor: '#7c3aed',
        chaptersCount: 14,
        description: 'Contemporary World Politics (End of Bipolarity, Alternative Centres of Power, South Asia, UN) and Politics in India Since Independence.',
        chapters: [
          {
            id: 'c12-pol-ch1',
            number: 1,
            title: 'The End of Bipolarity (Disintegration of USSR)',
            estimatedTime: '40 mins',
            difficulty: 'Medium',
            summary: 'Soviet system features, Gorbachev’s reforms (Glasnost & Perestroika), fall of Berlin Wall (1989), collapse of Soviet Union (1991), Shock Therapy and consequences.',
            notes: {
              overview: 'The collapse of the Soviet Union in 1991 marked the dramatic conclusion of the Cold War, ushering in US hegemony and new sovereign post-communist republics.',
              keyPoints: [
                'Soviet System: State ownership of production, guaranteed employment, extensive welfare, but bureaucratic authoritarianism and lack of consumer goods.',
                'Mikhail Gorbachev introduced Perestroika (restructuring) and Glasnost (openness).',
                'Shock Therapy: Painful transition from authoritarian socialist system to democratic capitalist system led by World Bank and IMF.',
                'Consequences: Dramatic collapse of Russian industrial economy, currency devaluation, mafia emergence, and US unipolar hegemony.'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'In which year did the historic fall of the Berlin Wall take place?',
                options: ['1985', '1989', '1991', '1993'],
                correctAnswer: 1,
                explanation: 'The Berlin Wall was toppled by the public on 9 November 1989, symbolizing the end of the Cold War division of Europe.'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'What were the major reasons that led to the disintegration of the Soviet Union in 1991?',
                answer: '1. Internal Weakness of Soviet Institutions: Failure to meet economic aspirations of citizens, leading to chronic shortages of food and consumer goods.\\n2. Enormous Military Burden: USSR channeled disproportionate resources into nuclear arms race and space rivalry with the US, draining the domestic economy.\\n3. Stifling Bureaucracy & Authoritarianism: The Communist Party enjoyed unaccountable monopoly over power, denying free speech and administrative autonomy.\\n4. Gorbachev’s Reforms and Nationalist Upsurge: Policies of Glasnost and Perestroika loosened government grip, unleashing pent-up nationalist feelings in Baltic states, Ukraine, and Georgia.'
              }
            ],
            revisionSheet: ['CIS = Commonwealth of Independent States formed in 1991 following USSR collapse.'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE Board Political Science Solved Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['MCQs: 12M', 'Short Qs: 24M', 'Passage/Cartoon-based: 12M', 'Long Essays: 32M']
            }
          }
        ]
      },
      {
        id: 'c12-eng',
        name: 'English Core',
        stream: 'All Streams',
        icon: 'BookOpen',
        themeColor: '#8b5cf6',
        chaptersCount: 12,
        description: 'Flamingo & Vistas - The Last Lesson, Lost Spring, Deep Water, The Rattrap, Indigo, Notice Writing, Letter to Editor, Article Writing.',
        chapters: [
          {
            id: 'c12-eng-ch1',
            number: 1,
            title: 'The Last Lesson (Alphonse Daudet)',
            estimatedTime: '25 mins',
            difficulty: 'Easy',
            summary: 'Set during Franco-Prussian War (1870), Alsace and Lorraine schools are ordered to teach only German. M. Hamel delivers his poignant final French lesson.',
            notes: {
              overview: 'Explores linguistic chauvinism, love for one’s mother tongue, and the bitter human regret of procrastinating on education until freedom is stripped away.',
              keyPoints: [
                'Narrator: Franz, a young schoolboy who feared being scolded for not learning participles.',
                'Prussian order: Only German to be taught in schools of Alsace and Lorraine.',
                'M. Hamel dressed in his finest Sunday green coat, frilled shirt, and black silk cap.',
                'Elderly villagers sat on back benches to honor M. Hamel’s 40 years of dedicated service.',
                'M. Hamel writes on the blackboard in giant letters: "Vive La France!"'
              ],
              formulae: []
            },
            mcqs: [
              {
                id: 1,
                question: 'What did M. Hamel write on the blackboard before ending his last class?',
                options: ['Long Live Prussia', 'Vive La France!', 'Freedom Forever', 'Farewell Alsace'],
                correctAnswer: 1,
                explanation: 'With deep patriotic emotion, M. Hamel took a piece of chalk and wrote as large as he could: "Vive La France!" (Long Live France!).'
              }
            ],
            importantQuestions: [
              {
                marks: 5,
                question: 'How did Franz’s feelings about M. Hamel and school undergo a complete change on the day of the last lesson?',
                answer: 'Earlier, Franz found grammar boring, carried his heavy books like a nuisance, and dreaded M. Hamel’s iron ruler. When he learned this was their final French lesson due to the Prussian decree, shock and sorrow overwhelmed him. His books instantly felt like old friends he could never abandon. He felt immense sympathy for M. Hamel’s heartbreak over leaving after 40 years, forgetting his strictness, and listened with rapt attention, realizing how beautiful and clear French was.'
              }
            ],
            revisionSheet: ['Quote: "When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison."'],
            samplePaper: {
              paperTitle: 'Class 12 CBSE English Core Board Exam Paper (Demo)',
              duration: '3 Hours',
              totalMarks: 80,
              sections: ['Section A: Reading Skills (22M)', 'Section B: Creative Writing Skills (18M)', 'Section C: Literature Textbooks (40M)']
            }
          }
        ]
      }
    ]
  }
];

// Helper functions for easy querying
export function getAllClasses() {
  return CLASSES_DATA;
}

export function getClassById(classId) {
  return CLASSES_DATA.find((c) => c.id === String(classId));
}

export function getSubjectById(classId, subjectId) {
  const classItem = getClassById(classId);
  if (!classItem) return null;
  return classItem.subjects.find((s) => s.id === subjectId);
}

export function getChapterById(classId, subjectId, chapterId) {
  const subject = getSubjectById(classId, subjectId);
  if (!subject) return null;
  return subject.chapters.find((ch) => ch.id === chapterId);
}

// Generate or retrieve interactive flashcards for any chapter
export function getChapterFlashcards(chapter, subjectName = '', className = '') {
  if (!chapter) return [];

  if (chapter.flashcards && chapter.flashcards.length > 0) {
    return chapter.flashcards;
  }

  const cards = [];
  let cardId = 1;

  // 1. Add formula cards if present
  if (chapter.notes?.formulae && chapter.notes.formulae.length > 0) {
    chapter.notes.formulae.forEach((formula, i) => {
      const parts = formula.split(':');
      cards.push({
        id: cardId++,
        category: 'Formula & Equation',
        front: parts[0] ? `Formula: ${parts[0].trim()}` : `Key Equation ${i + 1}`,
        back: parts[1] ? parts[1].trim() : formula,
        hint: 'Mathematical or chemical relationship'
      });
    });
  }

  // 2. Add concept cards from key points
  if (chapter.notes?.keyPoints && chapter.notes.keyPoints.length > 0) {
    chapter.notes.keyPoints.forEach((point, i) => {
      const parts = point.split(':');
      if (parts.length > 1) {
        cards.push({
          id: cardId++,
          category: 'Key Definition',
          front: `Define: ${parts[0].trim()}`,
          back: parts.slice(1).join(':').trim(),
          hint: 'Core syllabus definition'
        });
      } else {
        cards.push({
          id: cardId++,
          category: 'Core Principle',
          front: `Key Concept ${i + 1} of ${chapter.title}`,
          back: point,
          hint: 'High-yield exam concept'
        });
      }
    });
  }

  // 3. Add revision sheet points
  if (chapter.revisionSheet && chapter.revisionSheet.length > 0) {
    chapter.revisionSheet.forEach((item, i) => {
      cards.push({
        id: cardId++,
        category: 'Exam Memory Tip',
        front: `Exam Tip ${i + 1}: ${chapter.title}`,
        back: item,
        hint: 'Quick recall mnemonic or rule'
      });
    });
  }

  return cards;
}

