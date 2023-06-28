export default function () {
	const theme = ref<Theme>('auto')
	const change = (current: Theme) => {
		theme.value = current
		if (current === 'dark') document.body.classList.add('dark')
		else document.body.classList.remove('dark')
	}

	return { theme, change }
}
