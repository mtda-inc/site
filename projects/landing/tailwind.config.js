const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: ['projects/landing/src/**/*.{html,ts,scss}', './node_modules/ng-tw/**/*'],
    options: {
        safelist: [
            /^px-/,
            /^py-/,
            /^border-/,
            /^text-/,
            /^ring-/,
            /^focus:/,
            /^bg-primary/,
            /^hover:bg-primary/,
            /^bg-secondary/,
            /^hover:bg-secondary/,
            /^bg-danger/,
            /^hover:bg-danger/,
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['"Inter"', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: {
                    ...colors.violet,
                    DEFAULT: opacityColor('109, 40, 217'),
                },
                secondary: {
                    ...colors.lime,
                    DEFAULT: opacityColor('101, 163, 13'),
                },
                danger: {
                    ...colors.red,
                    DEFAULT: opacityColor('220, 38, 38'),
                },
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

function opacityColor(color) {
    return ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(${color}, ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
            return `rgba(${color}, var(${opacityVariable}, 1))`;
        }
        return `rgb(${color})`;
    };
}
