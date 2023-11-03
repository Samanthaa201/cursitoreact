import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect() {
    console.log('Ay, me pinchaste!');
}
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Dale vieja dale</h2>
          <ul>
            {/** 
            * ! LA VERSION SIN TRAER DE UN ARRAY EXTERNO SINO PONIENDO LOS VALORES AQUÍ MISMO 
            */}

            {/* <CoreConcept
              title="Hola"
              description="Soy la primer forma de hacerlo"
              image={componentsImg}
            /> */}

            {/* FORMA #1 DE IMPORTAR CON PROPS DE UN ARRAY EXTERNO */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            {/* FORMA #2 DE IMPORTAR CON PROPS DE UN ARRAY EXTERNO PARA OPTIMIZAR ESPACIO Y HACERLO MÁS CORTO */}
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;


/** from
 * * hola, esto es un comentario resaltado
 * ! esto es un comentario importante
 * ? esto es un comentario pregunta
 * TODO: esto es un comentario To Do
 * // este es un comentario tachada NO SE VE UNA VERGA!!!
 */
