const isProduction = process.env.NODE_ENV === "production";

// modificar al nombre de la app agregar : si es produccion => usar heroku/api sino usar localhost
export const baseUrl = isProduction ?   "https://lamejorinversiondetuvida.herokuapp.com/" : "http://localhost:3000/";

  