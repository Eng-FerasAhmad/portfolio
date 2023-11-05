export const screenSize = {
  xs: '320px',
  sm: '768px',
  md: '1024px',
  lg: '1200px',
}

export const device = {
  mobile: `(min-width: 0), and (max-width: ${screenSize.xs})`,
  tablet: `(min-width: ${screenSize.sm})`,
  desktop: `(min-width: ${screenSize.md})`,
}
