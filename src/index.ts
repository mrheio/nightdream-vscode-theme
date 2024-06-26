import { writeFileSync } from 'fs';
import { colors } from './theme';
import { VSCTheme } from './types/theme';
import { Theme } from './utils';

const getThemeName = (theme: VSCTheme) => {
	return `${theme.name.replace(' ', '-')}-color-theme.json`;
};

const saveTheme = (theme: VSCTheme) => {
	const themeJson = JSON.stringify(theme, undefined, 4);

	writeFileSync(`${process.cwd()}/themes/${getThemeName(theme)}`, themeJson, {
		encoding: 'utf8',
	});
};

saveTheme(new Theme('Nightdream', colors.workbench, colors.tokens).build());

saveTheme(
	new Theme(
		'Nightdream Sunlight',
		{
			...colors.workbench,
			bg: {
				...colors.workbench.bg,
				400: '#41475a',
				500: '#262934',
				600: '#22232c',
			},
			foreground: {
				400: '#c2d2ff',
				500: '#909cbd',
				600: '#6f7892',
				700: '#454b5b',
			},
		},
		colors.tokens
	).build()
);
