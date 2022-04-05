import data from "../assets/data-account.json";

function Accounts() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {data.map((elt) => (
        <section className="account" key={elt.id}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{elt.title}</h3>
            <p className="account-amount">{elt.amount}</p>
            <p className="account-amount-description">{elt.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </>
  );
}

export default Accounts;
