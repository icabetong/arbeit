export default function () {
	const theme = ref<Theme>('auto')
	const change = (current: Theme) => (theme.value = current)

	return { theme, change }
}
