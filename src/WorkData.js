function createData(title, desc, links) {
    return { title, desc, links }
}

const rows = [
    createData(
        '개인 포트폴리오 페이지',
        ['React, firebase', '2021, by my self'],
        ['https://github.com/peter1118/peter-folio', '']
    ),
    createData(
        '다중 사용자간 공유 원격 데스크톱 서비스',
        [
            'C++ Websocket Javascript Linux Kubernetes Docker',
            '2019 - 2021, at TmaxSoft',
        ],
        ['', '']
    ),
]

export default rows
