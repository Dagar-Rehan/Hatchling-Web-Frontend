import '../AboutPage.css';
import NavBar from "../components/NavBar.jsx"


export default function AboutPage() {

  const information_1 = "The Hatchling Programming Languages main purpose is to teach kids how to code and help develope fundemental concepts such as"

  const information_2 = "which can be used in more advanced programming languages at latter levels. The language is easy to use and consistent with its\
  key words as to reduce the learning curve of the language."

  const about_us = "The team for the Hatchling Programming Language consists of Tyler Martinez, Maksym Petrutsa, Melody Sharp, and Dagar Rehan."

  const license = "The programming language is under the MIT license."

  const abstract = " \
  The field of programming is becoming more and more competitive hence firmly understanding the basics of coding is a very important skill to develop and nurture. The education system of the United States of America known as the K12 teaches Python or Java to 8th graders and above but there is a lack of programming languages that are text based for late elementary to early middle schoolers(4th - 7th). In developing the Hatchling programming language the primary audience is the late elementary to early middle schoolers with a focus not on learning the syntax but the logic behind coding which can carry over to other languages. The team intends to create a language that is text based but with clear and concise syntax so that the children can focus on improving their logic skills and also develop a habit of writing code instead of the approach other projects such as Scratch have taken. Furthermore the language will have a visual element such as Scratch to retain the audience's attention for longer periods of time. The way to access the visual elements will be through text primarily but some functionality will be embedded in the webpage. In addition the programming language will run on browsers to make it more accessible to schools and individuals. \
  "
  
  return (
    <>
      <NavBar />
      <body className="AboutPage-div">
        <h1 className="AboutPage-title">AboutPage</h1>

        <div className="AboutPage-abstract">
          <h2>Information</h2>
          <p>{information_1}</p>

          
          <ul type="circle" className="AboutPage-abstract-concepts">
          <li> Arithmetic </li>
          <li> Conditionals </li>
          <li> Data Types </li>
          <li> Functions </li>
          </ul>

          <p>{information_2}</p>

          <h2>About Us</h2>
          <p>{about_us}</p>

          <h2>License</h2>
          <p>{license}</p>

          <h2>Abstract</h2>
          <p className="AboutPage-abstract-passage">{abstract}</p>
        </div>

      </body>
    </>
  );

}
