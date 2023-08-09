/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        wrapper: "130px",
        businessCategoryButton: "15px",
      },
      colors: {
        primary: "#1A0745",
        secondary: "#5F517D",
        soft: "#9D71FD",
        light: "#f2effe",
      },
      fontSize: {
        heading: "64px",
      },
      width: {
        header: "800px",
        company: "280px",
        businessCategoryPicker: "441px",
        businessCategoryButton: "147px",
        portraitImage: "86px",
      },
      height: {
        headerDesktop: "165px",
        businessCategoryButtonDesktop: "38px",
        businessCategoryButtonMobile: "46px",
        companyColumn: "280px",
        flowNode: "268px",
        integrationflow: "280px",
        portraitImage: "86px",
      },
      borderColor: {
        purple: "#9D71FD",
      },
      lineHeight: {
        headingDesktop: "130%",
        headingMobile: "120%",
        paragraph: "160%",
      },
      screens: {
        mobile: "300px",
        bigMobile: "500px",
      },
    },
  },
  plugins: [],
};
