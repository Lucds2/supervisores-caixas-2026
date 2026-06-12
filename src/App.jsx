import React, { useState } from "react";
import listaVoluntarios from "./voluntarios.json";
import "./App.css";
import logoImg from "./Logo.png";

// --- TELA DO SUPERVISOR ---
function TelaSupervisor() {
  const [nomeSelecionado, setNomeSelecionado] = useState("");

  const listaOrdenada = [...listaVoluntarios].sort((a, b) =>
    a.nome.localeCompare(b.nome)
  );
  
  const voluntarioEncontrado = listaVoluntarios.find(
    (v) => v.nome === nomeSelecionado
  );

  return (
    <div className="search-section">
      <label>Selecione seu nome:</label>
      <select
        className="select-field"
        value={nomeSelecionado}
        onChange={(e) => setNomeSelecionado(e.target.value)}
      >
        <option value="">-- Escolha seu nome --</option>
        {listaOrdenada.map((v) => (
          <option key={v.nome} value={v.nome}>
            {v.nome}
          </option>
        ))}
      </select>

      {nomeSelecionado && (
        <button
          className="btn-limpar"
          onClick={() => setNomeSelecionado("")}
          style={{ marginTop: "10px", display: "block", width: "100%" }}
        >
          Limpar Seleção
        </button>
      )}

      {voluntarioEncontrado && (
        <div className="card-designacao" style={{ marginTop: "20px" }}>
          <h3>{voluntarioEncontrado.nome}</h3>
          <p className="badge-congregacao">{voluntarioEncontrado.congregacao}</p>
          <p className="txt-celular">{voluntarioEncontrado.celular}</p>

          <h4>Suas Escalas:</h4>
          {voluntarioEncontrado.escalas.map((esc, index) => (
            <div
              key={index}
              className="escala-item"
              style={{ 
                marginBottom: "15px", 
                padding: "10px",
                borderLeft: "5px solid #2E7D32",
                backgroundColor: "#f9f9f9" 
              }}
            >
              <div>
                <span className="tag-dia" style={{ fontWeight: "bold" }}>{esc.dia}</span>
                <span className="tag-horario" style={{ marginLeft: "10px" }}>{esc.horario}</span>
              </div>
              <div style={{ marginTop: "5px" }}>
                <span className="txt-setor"><strong>Setor:</strong> {esc.setor}</span>
              </div>
              {/* CAMPO POSIÇÃO EXIBIDO AQUI */}
              <div className="txt-posicao" style={{ color: "blue", fontSize: "0.95em" }}>
                <strong>Posição:</strong> {esc.posicao}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Logo" className="logo-app" />
        <h1>Escala dos Supervisores</h1>
      </header>

      <TelaSupervisor />

      <footer className="footer" style={{ marginTop: "40px", textAlign: "center" }}>
        Congresso Internacional Curitiba 2026 <br /><br />
        Desenvolvido por{" "}
        <a
          href="https://wa.me/5541984000638"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2E7D32", textDecoration: "none", fontWeight: "bold" }}
        >
          LS DEV - (41) 98400-0638 - Luciano
        </a>
      </footer>
    </div>
  );
}

export default App;