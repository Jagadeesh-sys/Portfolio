const si = require('react-icons/si');
const fa = require('react-icons/fa');
const tb = require('react-icons/tb');

const iconsToCheck = {
    si: [
        'SiSpring',
        'SiPandas',
        'SiNumpy',
        'SiScikitlearn',
        'SiJupyter',
        'SiPycharm',
        'SiEclipseide',
        'SiVisualstudiocode',
        'SiPowerbi',
        'SiMysql',
        'SiC'
    ],
    fa: [
        'FaJava', 'FaPython', 'FaHtml5', 'FaCss3Alt', 'FaJs', 'FaReact', 'FaGitAlt'
    ],
    tb: ['TbBrandVscode']
};

const results = {};

iconsToCheck.si.forEach(icon => {
    results[icon] = !!si[icon];
});
iconsToCheck.fa.forEach(icon => {
    results[icon] = !!fa[icon];
});
iconsToCheck.tb.forEach(icon => {
    results[icon] = !!tb[icon];
});

console.log(JSON.stringify(results, null, 2));
