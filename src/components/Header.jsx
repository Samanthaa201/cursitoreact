import reactImg from '../assets/react-core-concepts.png';
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

 export default function Header() {
  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>¡Los Fundamentos Reactivos!</h1>
        <p>
          {reactDescriptions[getRandomInt(2)]}  Chapter
        </p>
      </header>
  );
}