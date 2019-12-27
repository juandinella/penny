const colors = () => {
  const colors = ['pink', 'red', 'blue']
  const moColors = ['yellow', 'papayawhip']

  const allTheColors = [...colors, ...moColors]
  allTheColors.map(color => console.log(`The color is ${color}`))
}

export default colors
