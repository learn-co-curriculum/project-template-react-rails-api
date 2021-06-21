export default (d, id) => {
  const element = d.getElementById(id)

  if (element) {
    element.parentNode.removeChild(element)
  }
}
