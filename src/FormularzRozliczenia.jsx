
import { useState } from 'react';

function FormularzRozliczenia() {
  const [kurier, setKurier] = useState('');
  const [liczbaPrzesylek, setLiczbaPrzesylek] = useState('');
  const [stawka, setStawka] = useState('');
  const [wynik, setWynik] = useState(null);

  function obliczRozliczenie(e) {
    e.preventDefault();
    const suma = Number(liczbaPrzesylek) * Number(stawka);
    setWynik(suma);
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>Rozliczenie kuriera</h2>
      <form onSubmit={obliczRozliczenie}>
        <div style={{ marginBottom: 10 }}>
          <label>Imię kuriera:</label><br />
          <input
            type="text"
            value={kurier}
            onChange={(e) => setKurier(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Liczba przesyłek:</label><br />
          <input
            type="number"
            value={liczbaPrzesylek}
            onChange={(e) => setLiczbaPrzesylek(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Stawka za przesyłkę (zł):</label><br />
          <input
            type="number"
            value={stawka}
            onChange={(e) => setStawka(e.target.value)}
            required
          />
        </div>
        <button type="submit">Oblicz</button>
      </form>

      {wynik !== null && (
        <p style={{ marginTop: 20, fontSize: 18 }}>
          <strong>{kurier}</strong> do wypłaty: <strong>{wynik} zł</strong>
        </p>
      )}
    </div>
  );
}

export default FormularzRozliczenia;