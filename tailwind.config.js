/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'sans': ['Nord', 'sans-serif'],
        },
        extend: {

            colors: {
                primary: {
                    "50": '#271C07',
                    "100": '#45310D',
                    "200": '#6C4904',
                    "300": '#8E6006',
                    "400": '#B07707',
                    "500": '#B07707',
                    "600": '#F3B43A',
                    "700": '#F5C566',
                    "800": '#F9D89A',
                    "900": '#F9D89A',
                    "950": '#FEF8EC',
                },
                secondary: {
                    "50": '#072923',
                    "100": '#0C443B',
                    "200": '#126658',
                    "300": '#188875',
                    "400": '#1EAA93',
                    "500": '#24CCB0',
                    "600": '#6DDDCA',
                    "700": '#91E5D7',
                    "800": '#B6EEE5',
                    "900": '#D3F5EF',
                    "950": '#EEFBF9',
                },
                tertiary: {
                    "50": '#172216',
                    "100": '#283C25',
                    "200": '#395535',
                    "300": '#477D40',
                    "400": '#40AA32',
                    "500": '#56C945',
                    "600": '#8BD981',
                    "700": '#A9E3A0',
                    "800": '#C6EDBF',
                    "900": '#DBF3D8',
                    "950": '#F0FAEF',
                },
                neutral: {
                    "50": '#1A1E1E',
                    "100": '#2D3433',
                    "200": '#3F4A49',
                    "300": '#576664',
                    "400": '#657674',
                    "500": '#7E918E',
                    "600": '#A7B4B2',
                    "700": '#BDC7C5',
                    "800": '#D3D9D8',
                    "900": '#E3E8E7',
                    "950": '#F4F5F5',
                },
                gradient: {
                    "primary": "linear-gradient(225deg, #F5C566 -6.67%, #8E6006 106.67%);",
                    "secondary": "linear-gradient(225deg, #91E5D7 -6.67%, #126658 106.67%);",
                }
            },
        },
    },
    plugins: [],
}
