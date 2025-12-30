module.exports = {
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 0.2s ease-out",
          scaleIn: "scaleIn 0.2s ease-out",
        },
        keyframes: {
          pop: {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.3)" },
            "100%": { transform: "scale(1)" },
          },
          
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          scaleIn: {
            from: { opacity: 0, transform: "scale(0.95)" },
            to: { opacity: 1, transform: "scale(1)" },
          },
        },
      },
    },
  };
  