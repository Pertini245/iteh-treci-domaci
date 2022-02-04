import { useState } from 'react'

function KontaktStrana() {

    const [imeiprezime, setImeiprezime] = useState('');
    const [brtelefona, setBrtelefona] = useState('');
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');

    function submitFormu(e) {
        e.preventDefault();
        console.log('Ime i prezime:' + imeiprezime + ' Broj telefona:' + brtelefona + ' Email:' + email + ' Poruka:' + poruka);
    }

    return (
        <div className="kontaktstrana">
            <h1>Kontakt forma</h1>
            <form onSubmit={submitFormu}>
                <label id='ime'>Ime i prezime:</label>
                <input
                    type="text"
                    required
                    value={imeiprezime}
                    className="input-polja"
                    onChange={(e) => setImeiprezime(e.target.value)}
                />
                <label id='kurac'>Broj telefona:</label>
                <input
                    type="text"
                    required
                    value={brtelefona}
                    className="input-polja"
                    onChange={(e) => setBrtelefona(e.target.value)}
                />
                <label>Email:</label>
                <input
                    required
                    value={email}
                    className="input-polja"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email:</label>
                <textarea
                    required
                    value={poruka}
                    onChange={(e) => setPoruka(e.target.value)}
                />
                <button id="dugme">Pošalji</button>
            </form >
        </div>
    );
}

export default KontaktStrana;