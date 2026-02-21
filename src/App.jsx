import { useState, useEffect } from 'react';
import { getCandidateData, getJobs, applyToJob } from './services/api';
import { styles } from './style/styleListDataCandidate';

function App() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [repoUrls, setRepoUrls] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const MY_EMAIL = "brizuelafiamma6@gmail.com";

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const [c, j] = await Promise.all([getCandidateData(MY_EMAIL), getJobs()]);
        setCandidate(c);
        setJobs(j);
      } catch (err) {
        setError("No se pudo cargar la información. Intenta de nuevo más tarde.", err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const handleApply = async (jobId) => {
    const url = repoUrls[jobId];
    if (!url) return alert("Por favor, ingresa la URL de tu repositorio.");

    try {
      const res = await applyToJob({
        uuid: candidate.uuid,
        jobId: jobId,
        applicationId: candidate.applicationId,
        candidateId: candidate.candidateId,
        repoUrl: url
      });
      if (!res.ok) {

        console.log("Detalle del error:", res);
      } else {
        alert("¡Aplicación enviada con éxito!");
      }
    } catch (err) {
      alert("Error al enviar: " + err.message);
    }
  };

  if (loading) return <div className={styles.loading}>Cargando challenge...</div>;

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{error}</div>}

      <header className={styles.header}>
        <h1 className={styles.title}>Nimble Gravity Portal</h1>
        {candidate && (
          <p className={styles.candidateInfo}>
            Bienvenida, <span className={styles.highlight}>{candidate.firstName} {candidate.lastName}</span>
          </p>
        )}
      </header>

      <main>
        <h2 className={styles.sectionTitle}>Posiciones Disponibles</h2>

        <div className="flex flex-col">
          {jobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <h3 className={styles.jobTitle}>{job.title}</h3>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="URL de tu repositorio GitHub"
                  className={styles.input}
                  onChange={(e) => setRepoUrls({ ...repoUrls, [job.id]: e.target.value })}
                />
                <button
                  onClick={() => handleApply(job.id)}
                  className={styles.button}
                >
                  Submit
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;