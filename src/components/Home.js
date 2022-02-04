import { useState } from 'react'
import PrikazLaptopova from "./PrikazLaptopova";

function Home() {

    const [laptopovi, setLaptopovi] = useState([
        { id: 1, model: 'RAZER Blade 15', procesor: 'Intel® Core™ i7-11800H', graficka: 'GeForce RTX 3060', slika: 'https://img.gigatron.rs/img/products/large/image61ee661c85be1.png', cena: 329999 },
        { id: 2, model: 'HP Spectre x360', procesor: 'Intel® Core™ i7-1065G7', graficka: 'Iris Plus G7', slika: 'https://img.gigatron.rs/img/products/large/image5f7f1cdd52134.png', cena: 240999 },
        { id: 3, model: 'ACER Predator Helios 300', procesor: 'Intel® Core™ i7-11800H ', graficka: 'GeForce RTX 3070', slika: 'https://img.gigatron.rs/img/products/large/image61cc2f1acd484.png', cena: 269999 }
    ]);


    return (
        <div className="home">
            <h1 id="glavni_naslov">Laptop E-commerce</h1>
            <PrikazLaptopova laptopovi={laptopovi} funkcija={setLaptopovi} />


        </div>
    );
}

export default Home;
