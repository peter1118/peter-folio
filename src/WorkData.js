function createData(title, year, desc, tech, links) {
    return { title, year, desc, tech, links }
}

const rows = [
    createData(
        '공유 원격 데스크톱 서비스',
        '2019 ~ 2021',
        [
            '2019 - 2021, at TmaxSoft',
            '다중 사용자간 공유 원격 데스크톱 서비스',
            'C++ Websocket Javascript Linux Kubernetes Docker Bash',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
        ],
        'c++ weboskcet lws js ...',
        'aaaaaa'
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
