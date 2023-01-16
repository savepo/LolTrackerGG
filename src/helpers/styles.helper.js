export function withTheme (cssProperty, themePath) {
  return props => {
    let themeValue = props.theme
    themePath.split('.').forEach(path => {
      themeValue = themeValue?.[path]
    })
    if (!themeValue) return ''

    return `${cssProperty}: ${themeValue};`
  }
}
