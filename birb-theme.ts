import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const birbTheme: CustomThemeConfig = {
	name: 'birb-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '0px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #000000
		'--color-primary-50': '217 217 217', // #d9d9d9
		'--color-primary-100': '204 204 204', // #cccccc
		'--color-primary-200': '191 191 191', // #bfbfbf
		'--color-primary-300': '153 153 153', // #999999
		'--color-primary-400': '77 77 77', // #4d4d4d
		'--color-primary-500': '0 0 0', // #000000
		'--color-primary-600': '0 0 0', // #000000
		'--color-primary-700': '0 0 0', // #000000
		'--color-primary-800': '0 0 0', // #000000
		'--color-primary-900': '0 0 0', // #000000
		// secondary | #9F329F
		'--color-secondary-50': '241 224 241', // #f1e0f1
		'--color-secondary-100': '236 214 236', // #ecd6ec
		'--color-secondary-200': '231 204 231', // #e7cce7
		'--color-secondary-300': '217 173 217', // #d9add9
		'--color-secondary-400': '188 112 188', // #bc70bc
		'--color-secondary-500': '159 50 159', // #9F329F
		'--color-secondary-600': '143 45 143', // #8f2d8f
		'--color-secondary-700': '119 38 119', // #772677
		'--color-secondary-800': '95 30 95', // #5f1e5f
		'--color-secondary-900': '78 25 78', // #4e194e
		// tertiary | #0F61FF
		'--color-tertiary-50': '219 231 255', // #dbe7ff
		'--color-tertiary-100': '207 223 255', // #cfdfff
		'--color-tertiary-200': '195 216 255', // #c3d8ff
		'--color-tertiary-300': '159 192 255', // #9fc0ff
		'--color-tertiary-400': '87 144 255', // #5790ff
		'--color-tertiary-500': '15 97 255', // #0F61FF
		'--color-tertiary-600': '14 87 230', // #0e57e6
		'--color-tertiary-700': '11 73 191', // #0b49bf
		'--color-tertiary-800': '9 58 153', // #093a99
		'--color-tertiary-900': '7 48 125', // #07307d
		// success | #4CAF50
		'--color-success-50': '228 243 229', // #e4f3e5
		'--color-success-100': '219 239 220', // #dbefdc
		'--color-success-200': '210 235 211', // #d2ebd3
		'--color-success-300': '183 223 185', // #b7dfb9
		'--color-success-400': '130 199 133', // #82c785
		'--color-success-500': '76 175 80', // #4CAF50
		'--color-success-600': '68 158 72', // #449e48
		'--color-success-700': '57 131 60', // #39833c
		'--color-success-800': '46 105 48', // #2e6930
		'--color-success-900': '37 86 39', // #255627
		// warning | #FFC107
		'--color-warning-50': '255 246 218', // #fff6da
		'--color-warning-100': '255 243 205', // #fff3cd
		'--color-warning-200': '255 240 193', // #fff0c1
		'--color-warning-300': '255 230 156', // #ffe69c
		'--color-warning-400': '255 212 81', // #ffd451
		'--color-warning-500': '255 193 7', // #FFC107
		'--color-warning-600': '230 174 6', // #e6ae06
		'--color-warning-700': '191 145 5', // #bf9105
		'--color-warning-800': '153 116 4', // #997404
		'--color-warning-900': '125 95 3', // #7d5f03
		// error | #F44336
		'--color-error-50': '253 227 225', // #fde3e1
		'--color-error-100': '253 217 215', // #fdd9d7
		'--color-error-200': '252 208 205', // #fcd0cd
		'--color-error-300': '251 180 175', // #fbb4af
		'--color-error-400': '247 123 114', // #f77b72
		'--color-error-500': '244 67 54', // #F44336
		'--color-error-600': '220 60 49', // #dc3c31
		'--color-error-700': '183 50 41', // #b73229
		'--color-error-800': '146 40 32', // #922820
		'--color-error-900': '120 33 26', // #78211a
		// surface | #ffffff
		'--color-surface-50': '255 255 255', // #ffffff
		'--color-surface-100': '255 255 255', // #ffffff
		'--color-surface-200': '255 255 255', // #ffffff
		'--color-surface-300': '255 255 255', // #ffffff
		'--color-surface-400': '255 255 255', // #ffffff
		'--color-surface-500': '255 255 255', // #ffffff
		'--color-surface-600': '230 230 230', // #e6e6e6
		'--color-surface-700': '191 191 191', // #bfbfbf
		'--color-surface-800': '153 153 153', // #999999
		'--color-surface-900': '0 0 0' // #000000
	}
};
