const BASE_URL =
  "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";
export const getCandidateData = async (email) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/candidate/get-by-email?email=${email}`,
    );
    if (!response.ok) throw new Error("Error al obtener datos del candidat@");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getJobs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
    if (!response.ok) throw new Error("Error al obtener la lista de empleos");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const applyToJob = async (payload) => {
  const response = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await response.json();
};
