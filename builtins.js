//--create
widget('compile', 'textarea', $main, (value) => {
    return LZString.compressToBase64(value)
})
//--getlink
widget('get link', 'input', $main, (value) => {
    return `https://widget.anb.codes/?i=${value}`
})
//--gethiddenlink
widget('get hide link', 'input', $main, (value) => {
    return `https://widget.anb.codes/?hide=true&i=${value}`
})