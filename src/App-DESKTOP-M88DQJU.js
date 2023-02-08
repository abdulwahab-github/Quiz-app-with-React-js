import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./App.css"
// import Button from './Button';
import Option from './Option';



function App() {
  const [indexnumber , setindexnumber] = useState(0);
  const [quizdata , setquestion] = useState({
QuizName : "React Quiz",
TotalMarks :60, 
perQuestion : 10,

question:[
    {
        question: "Html Stands For _______",
        options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _________",
        options: [
            "Hypertext markup language",
            "Java",
            "Ram",
            "Casecading Style Sheet",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]
  })
  const {question , score} = quizdata ;
  return (
    <>
    
  <Box className='bg-dark color container mt-2 ' >
  <div className='d-flex'>
<Typography className='Quiz' variant='h3'>{quizdata.QuizName}</Typography>

<Typography className=' matgin2 color2'  variant='p'>Question no {indexnumber + 1}/{quizdata.question.length}  </Typography>
</div>
<br/>
<div className='d-flex'>

<Typography variant='h5'>Total Question: {quizdata.TotalMarks}</Typography>
<Typography className=' matgin ' variant='h6'>Quiz Marks {quizdata.perQuestion} </Typography>



</div>

  </Box>
  <Box className="bg-light rounded shadow">
  <Typography variant='h5' className=' text-center mt-3' >question</Typography>

    <Typography variant='h2' className=' text-center mt-3' >{question[indexnumber].question}</Typography>
  </Box> 
  <br/>


      <Box  className='side container'>
      <Option onclicko={(e) => {
      if((indexnumber +1) === question.length){

        }else{
          setindexnumber(indexnumber +1);
        }
        if(e == question[indexnumber].correctAns){
          
        }
        console.log(e)} } 
         data={question[indexnumber].options}></Option>

      </Box>












































         


    </>
  )
}

export default App