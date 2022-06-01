
import { Routes, Route, Link } from "react-router-dom";
import { Container , Image} from "react-bootstrap";
function About() {
    return (
        <Container>
        <main>
          <h2>Who are we?</h2>
          <Image src="/turtle1.jpg" alt="turtle photo"fluid/>
          <p>
          Turtles are an order of reptiles known as Testudines, characterized by a shell developed mainly from their ribs. Modern turtles are divided into two major groups, the side-necked turtles and hidden neck turtles, which differ in the way the head retracts. There are 360 living and recently extinct species of turtles, including land-dwelling tortoises and freshwater terrapins. They are found on most continents, some islands and, in the case of sea turtles, much of the ocean. Like other reptiles, birds, and mammals, they breathe air and do not lay eggs underwater, although many species live in or around water. Genetic evidence typically places them in close relation to crocodilians and birds.
          </p>
        </main>
        
        </Container>
    );
  }

  export default About