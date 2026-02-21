export const styles = {
  // Contenedor principal
  container: "max-w-[800px] mx-auto my-10 px-5 font-sans bg-white min-h-screen",

  // Encabezado
  header: "border-b-2 border-gray-100 mb-8 pb-4",
  title: "text-3xl font-bold text-gray-800",
  candidateInfo: "text-gray-600 mt-2 text-lg",
  highlight: "font-semibold text-blue-600",

  // Listado de trabajos
  sectionTitle: "text-xl font-semibold text-gray-700 mb-6",
  jobCard:
    "border border-gray-200 rounded-xl p-6 mb-4 shadow-sm hover:shadow-md transition-shadow bg-gray-50",
  jobTitle: "text-lg font-bold text-gray-800 mb-4",

  // Formulario dentro de la tarjeta
  formGroup: "flex flex-col md:flex-row gap-3",
  input:
    "flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
  button:
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm",

  // Estados
  loading:
    "flex justify-center items-center h-screen text-gray-500 font-medium",
  error:
    "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg my-4",
};
