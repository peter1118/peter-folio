function createData(title, desc, links, pic) {
    return { title, desc, links, pic }
}

const rows = [
    createData(
        '개인 포트폴리오 페이지',
        [
            'React 공부를 위해 시작한 개인 포트폴리오 만들기 프로젝트',
            'React JS, Firebase',
            '2021, by my self',
        ],
        ['https://github.com/peter1118/peter-folio', 'https://peter-folio.web.app'],
        'peter-folio.png'
    ),
    createData(
        '다중 사용자간 공유 원격 데스크톱 서비스',
        [
            '하나의 워드 프로세서 프로그램을 여럿이 동시에 이용하는 원격 데스크톱 서비스',
            'C++ Websocket Javascript',
            '2019 - 2021, at TmaxSoft그룹',
        ],
        ['', ''],
        'peter-folio.png'
    ),
]

export default rows
