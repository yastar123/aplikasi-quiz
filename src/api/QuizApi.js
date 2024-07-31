import axios from 'axios';

const getQuiz = (callback) => {
  axios
    .get('https://opentdb.com/api.php?amount=10')
    .then((res) => {
      const quizData = res.data.results.map((question) => {
        const options = [...question.incorrect_answers];
        const randomIndex = Math.floor(Math.random() * (options.length + 1));
        options.splice(randomIndex, 0, question.correct_answer);
        return { ...question, options };
      });
      callback(quizData);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getQuiz;
