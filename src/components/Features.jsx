import data from "../assets/data-feactures.json";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {data.map((elt) => (
        <div className="feature-item" key={elt.id}>
          <img src={elt.img} alt={elt.alt} className="feature-icon" />
          <h3 className="feature-item-title">{elt.title}</h3>
          <p>{elt.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
