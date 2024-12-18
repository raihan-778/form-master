import Aunt from "./aunt/Aunty";
import Dad from "./dad/Dad";
import "./Grandpa.css";
import Uncle from "./uncle/Uncle";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>

      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
