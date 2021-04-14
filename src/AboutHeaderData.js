function createData(title, level) {
    return { title, level }
}

const lang = [
    createData('C++', 2),
    createData('Javascript', 1),
    createData('CSS', 0),
]

const tool = [
    createData('Linux', 2),
    createData('React', 1),
    createData('Node', 0),
    createData('Docker', 2),
    createData('Kubernetes', 0),
    createData('Bash', 1),
]

export { lang, tool }
