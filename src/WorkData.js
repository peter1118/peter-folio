function createData(title, year, desc, tech, links, from) {
    return { title, year, desc, tech, links, from }
}

const rows = [
    createData(
        '다중 접속 원격 데스크톱 서비스',
        '2019 ~ 2021',
        ['c++ Websocket Javascript Linux', ''],
        'c++ weboskcet lws js ...',
        'aaaaaa',
        'TmaxSoft그룹'
    ),
    createData(
        'test1',
        '2018 ~ 2019',
        ['c++ Websocket Javascript Linux', ''],
        'test',
        'aaaaaa'
    ),
]

export default rows
