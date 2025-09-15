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
      <h1>
        UNSAAC
      </h1>
      <h3>FACULTAD DE INGENIERÍA ELÉCTRICA, ELECTRÓNICA, INFORMÁTICA Y MECÁNICA</h3>
      <h2>“Seminario Especializado de IA: Autocodificadores Variacionales y Confiabilidad en IA”</h2>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Verificación de Certificados
      </h2>
      <p>Aquí puedes verificar la autenticidad de los certificados del seminario. Ingrese el código de su certificado (Ejm. 065-FIEEIM,004-FIEEIM): </p>

      <input
        type="text"
        placeholder="Ingresa el código de tu certificado"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        className="border p-4 rounded-lg w-96 text-center mb-4 text-xl h-16"
        
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
              <p>
                <strong>Nombre:</strong> {resultado.nombre} <br />
                <strong>Tipo de Participación:</strong> {resultado.rol} <br />
                <strong>Duración:</strong> 4 horas académicas <br />
                <strong>Fecha de Emisión:</strong> 15 de Septiembre de 2025
              </p>
              <hr className="my-3" />
              <p>
                <strong>Descripción:</strong> <br />
                Se certifica la participación de {resultado.nombre} en el "Seminario Especializado de IA: Autocodificadores Variacionales y Confiabilidad en IA", un evento académico de actualización, enfocado en los avances y aplicaciones de la Inteligencia Artificial.
              </p>
              <hr className="my-3" />
              <p>
                <strong>Organizadores:</strong> <br />
                <ul className="list-disc list-inside text-left ml-6">
                  <li>Enciso Rodas, Lauro</li>
                  <li>Quispe Torres, Gerar Francis</li>
                  <li>Venegas Vergara, Maria Del Pilar</li>
                  <li>Mogrovejo Ccorimanya, Luis Angel</li>
                  <li>Auccacusi Huanca, Paul Andre</li>
                  <li>Romero Bernal, Jhamsid</li>
                </ul>
              </p>
              <hr className="my-3" />
              <p>
                <strong>Número de Verificación:</strong> <br />
                [{resultado.codigo}] <br />
                Esta información también puede ser corroborada dentro de la FACULTAD DE INGENIERÍA ELÉCTRICA, ELECTRÓNICA, INFORMÁTICA Y MECÁNICA - UNSAAC
              </p>
            </>
          ) : (
            <h2 className="text-red-600 font-bold">❌ Código no registrado,<br/> puede intentarlo de nuevo</h2>
          )}
        </div>
      )}
    </div>
  );
}