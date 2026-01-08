const si = require('react-icons/si');
const fa = require('react-icons/fa');
const tb = require('react-icons/tb');

const icons = {
    si: [
        'SiC', 'SiMysql', 'SiSpringboot', 'SiGit', 'SiGithub',
        'SiEclipseide', 'SiBootstrap', 'SiNetlify', 'SiPowerbi',
        'SiPandas', 'SiNumpy', 'SiScikitlearn', 'SiJupyter', 'SiPycharm', 'SiMicrosoft'
    ],
    fa: [
        'FaHtml5', 'FaCss3Alt', 'FaJs', 'FaPython', 'FaNodeJs', 'FaJava', 'FaReact',
        'FaLinkedin', 'FaGithub', 'FaInstagram', 'FaFacebook', 'FaMeteor', 'FaGitAlt'
    ],
    tb: ['TbBrandVscode']
};

const results = {};

console.log('--- Scanning Icons ---');
for (const lib in icons) {
    const libIcons = icons[lib];
    const libObj = (lib === 'si' ? si : (lib === 'fa' ? fa : tb));

    libIcons.forEach(icon => {
        if (!libObj[icon]) {
            console.error(`MISSING: ${icon} in react-icons/${lib}`);
            results[icon] = false;
        } else {
            results[icon] = true;
        }
    });
}

if (Object.values(results).every(v => v)) {
    console.log('ALL ICONS FOUND OK.');
} else {
    console.log('SOME ICONS MISSING.');
}
