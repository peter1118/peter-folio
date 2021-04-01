function createData(title, year, desc, tech, links, from) {
    return { title, year, desc, tech, links, from }
}

const rows = [
    createData(
        '공유 원격 데스크톱 서비스',
        '2019 ~ 2021',
        [
            '2019 - 2021, TmaxSoft',
            '다중 사용자간 공유 원격 데스크톱 서비스',
            'c++ Websocket Javascript Linux',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
        ],
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
