/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                "5/9": "55.5555%", // 5/9 = 5 chia 9
                "4/9": "44.4444%", // 4/9 = 4 chia 9
                18: "78px",
            },
        },
    },
};
