import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(res=> res.json())
    .then(questions => setQuestions(questions))
  
  }, [])
    
  

  function handleDeleteQuestion(deletedQuestion){
    const updateQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setQuestions(updateQuestions)
  }




  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => (
          <QuestionItem key={question.id} question={question} onDelete={handleDeleteQuestion}/>
        ))}</ul>
    </section>
  );
}

export default QuestionList;




// function handleDelete(questionId) {
//   fetch(`http://localhost:4000/questions/${questionId}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then(() => {
//       setQuestions(questions.filter((question) => question.id !== questionId));
//     });
// }




// function handleDelete(){
//   fetch(`http://localhost:4000/questions/${question.id}`, {
//     method : "DELETE",
//   })
//   .then(res=>res.json())
//   .then(()=>console.log(questions))
// }




// import React from "react";

// function QuestionList() {
//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>{/* display QuestionItem components here after fetching */}</ul>
//     </section>
//   );
// }

// export default QuestionList;
