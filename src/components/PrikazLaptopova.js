

function PrikazLaptopova(props) {

    var laptopovi = props.laptopovi;

    function obrisiLaptop(id) {

    }

    return (
        <div className="svi-laptopovi-prikaz">
            {
                laptopovi.map((laptop) => (
                    <div className="laptop-prikaz" key={laptop.id}>
                        <h2 id="laptop-model">{laptop.model}</h2>
                        <img src={laptop.slika}></img>
                        <h3 className="laptop-osobine">Procesor: {laptop.procesor}</h3>
                        <h3 className="laptop-osobine">Grafička karta: {laptop.graficka}</h3>
                        <h3 className="laptop-osobine">Cena: {laptop.cena} RSD</h3>
                        <button onClick={() => obrisiLaptop(laptop.id)} id="dugme-obrisi">Obrisi</button>
                    </div>
                ))
            }
        </div>
    );
}

export default PrikazLaptopova;
