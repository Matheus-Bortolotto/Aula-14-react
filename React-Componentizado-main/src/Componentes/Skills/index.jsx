import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML", 
      nivel : "Avançado",
      tempo: "7 meses",
      color : "red"
    },
    {
      titulo: "CSS", 
      nivel : "Avançado",
      tempo: "7 meses",
      color : "blue"
    },
    {
      titulo: "JavaScript", 
      nivel : "Intermediario",
      tempo: "7 meses",
      color : "yellow"
    },
    {
      titulo: "Python", 
      nivel : "Intermediario",
      tempo: "7 meses",
      color : "green"
    },
    {
      titulo: "C++", 
      nivel : "Intermediario",
      tempo: "7 meses",
      color : "purple"
    }
  ]
  
  return (
    <div className="skills">
      <h2>Habilidades</h2>
                <Card dados={habilidades}/>
                {/* <Card titulo="CSS!" nivel="Avançado" tempo="7 meses"/>
                <Card titulo="JavaScrip" nivel="Intermediario" tempo="7 meses"/>
                <Card titulo="React" nivel="Basico" tempo="1 meses"/> */}
    </div>
  );
}

export default Skills;