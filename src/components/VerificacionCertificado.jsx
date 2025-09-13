import { useState } from "react";
import certificados from "../assets/certificados.json";

export default function VerificacionCertificado() {
  const [codigo, setCodigo] = useState("");
  const [resultado, setResultado] = useState(null);

  const verificarCodigo = () => {
    const encontrado = certificados.find(
      (cert) => cert.codigo.toLowerCase() === codigo.toLowerCase()
    );
    setResultado(encontrado || false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Verificación de Certificados
      </h1>

      <input
        type="text"
        placeholder="Ingresa el código de tu certificado"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        className="border p-2 rounded w-80 text-center mb-3"
      />

      <button
        onClick={verificarCodigo}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Verificar
      </button>

      {resultado !== null && (
        <div className="mt-6 p-4 border rounded w-80 text-center bg-white shadow">
          {resultado ? (
            <>
              <h2 className="text-green-600 font-bold">✅ Certificado válido</h2>
              <p><strong>Nombre:</strong> {resultado.nombre}</p>
              <p><strong>Rol:</strong> {resultado.rol}</p>
              <p><strong>Código:</strong> {resultado.codigo}</p>
            </>
          ) : (
            <h2 className="text-red-600 font-bold">❌ Código no registrado</h2>
          )}
        </div>
      )}
    </div>
  );
}