/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#f5ffff",
        black: "#000",
        gray: "#fafafa",
        royalblue: {
          "100": "#005acd",
          "200": "rgba(0, 88, 204, 0.8)",
          "300": "rgba(0, 90, 205, 0.8)",
        },
        steelblue: "#0093cb",
        powderblue: "#bef0ff",
        mediumslateblue: {
          "100": "#405de6",
          "200": "rgba(64, 92, 230, 0.51)",
          "300": "rgba(64, 93, 230, 0.8)",
        },
        mediumseagreen: "#34a853",
        "base-gray-80": "#4a5660",
        "secondary-100": "#f04d23",
        "base-white": "#fff",
        "base-gray-40": "#b5bec6",
      },
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      "17xl": "36px",
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
      lg: "18px",
      "3xs": "10px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
