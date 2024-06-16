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
			bg: { ...colors.workbench.bg, 400: '#404059', 500: '#292939' },
		},
		colors.tokens
	).build()
);
