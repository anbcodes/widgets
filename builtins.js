//--create
widget('compile', 'textarea', $main, (value) => {
    return btoa(LZString.compress(value))
})