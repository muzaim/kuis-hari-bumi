import React, { useState } from "react";

export default function App() {
  // const image =
  //   "https://www.google.com/logos/2015/earthdayquiz/answers/v3/02-01-fruit-insects.png";
  const questions = [
    {
      questionText: "Apa yang biasa kamu lakukan di jumat malam?",
      answerOptions: [
        {
          answerText: "Menyendiri",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/00-00-burrow.jpg",
        },
        {
          answerText: "Jarang keluar",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/00-01-rarely-out.jpg",
        },
        {
          answerText: "Unjuk gigi",
          isCorrect: true,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/00-03-herd.jpg",
        },
        {
          answerText: "Jadi pengikut",
          isCorrect: false,
          image:
            "https://www.google.com/logos/2015/earthdayquiz/answers/v3/02-01-fruit-insects.png",
        },
      ],
    },
    {
      questionText:
        "Jika bertemu teman yang menggunakan pakaian yang sama dalam pesta, apa reaksimu?",
      answerOptions: [
        {
          answerText: "Bukan masalah besar",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/01-00-nbd.jpg",
        },
        {
          answerText: "Sangat memalukan",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/01-01-embarassing.jpg",
        },
        {
          answerText: "Semangat",
          isCorrect: true,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/01-02-fight.jpg",
        },
        {
          answerText: "Ganti pakaian",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/01-03-change-outfits.jpg",
        },
      ],
    },
    {
      questionText: "Pilih camilanmu:",
      answerOptions: [
        {
          answerText: "Hidangan laut",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/02-00-seafood.png",
        },
        {
          answerText: "Buah daun/serangga",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/00-01-rarely-out.jpg",
        },
        {
          answerText: "Daging",
          isCorrect: true,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/02-02-meat.png",
        },
        {
          answerText: "Salad",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/02-03-salad.png",
        },
      ],
    },
    {
      questionText: "Apa yang kamu harapkan dari pasangan?",
      answerOptions: [
        {
          answerText: "Warna terang",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/03-00-bright-colors.png",
        },
        {
          answerText: "Suara dengkuran yang keras",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/03-01-loud.png",
        },
        {
          answerText: "Sistem kelenjar kompleks",
          isCorrect: true,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/03-02-complex-system.png",
        },
        {
          answerText: "Nilai nilai tradisional",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/03-03-old-fashion.png",
        },
      ],
    },
    {
      questionText: "Pilih hobimu:",
      answerOptions: [
        {
          answerText: "Kekuatan",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/04-00-feats-of-strength.png",
        },
        {
          answerText: "Mengerjakan tugas di rumah",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/04-01-house.png",
        },
        {
          answerText: "Berenang",
          isCorrect: true,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/04-02-swimming.png",
        },
        {
          answerText: "Tidak ada yang cocok",
          isCorrect: false,
          image:
            "//www.google.com/logos/2015/earthdayquiz/answers/v3/04-03-none.png",
        },
      ],
    },
  ];
  const result = [
    {
      resultText: "Kamu adalah karang",
      resultDesc:
        "Kecantikan tersembunyimu menarik banyak pengagum. Tahu nggak sih kalau kamu itu seekor hewan?",
    },
    {
      resultText: "Kamu adalah udang setandu!",
      resultDesc:
        "Misterius dan cantik, kamu tidak pernah ragu untuk menyerang menggunakan cakarmu yang kuat, menyengat, dan mencabik mangsa.",
    },
    {
      resultText: "Kamu adalah lebah madu!",
      resultDesc:
        "Meski pada dasarnya kamu adalah pekerja keras, kamu masih menyisihkan waktu untuk menyerbuki bunga.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <text>Pertanyaan {currentQuestion + 1}</text>/{questions.length}
            </div>

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <>
                <span
                  className="answer-span"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  <img src={answerOption.image} alt="" />
                  <text className="answer-text">
                    {" "}
                    {answerOption.answerText}
                  </text>
                </span>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
