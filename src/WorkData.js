function createData(title, year, desc, more, links) {
    return { title, year, desc, more, links }
}
function createMoreData(header, detail, role) {
    //개요, 상세설명, 맡은 역할
    return { header, detail, role }
}

const rows = [
    createData(
        '공유 원격 데스크톱 서비스',
        '2019 ~ 2021',
        [
            '2019 - 2021, at TmaxSoft',
            '다중 사용자간 공유 원격 데스크톱 서비스',
            'C++ Websocket Javascript',
            'Linux Kubernetes Docker',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
        ],
        createMoreData(
            ['다중 사용자 동시 접속 원격 데스크톱 서비스 '],
            [
                '자사의 리눅스 어플리케이션을 여러 유저가 웹을 통해 동시 접속해서 사용하고자 하는 요구 발생. Websocket을 통해 여러 사용자에게 한 개 어플리케이션의 화면을 송출하는 서버 구축. 서버에서 보낸 화면 이미지를 브라우저를 통해 보여주는 클라이언트 개발.',
            ],
            [
                'Websockets, C++를 통한 사용자 입력 및 화면 송출 담당 서버 구축.',
                'JS, 브라우저 API를 이용한 사용자 편의 기능 개발',
                'Docker, Kubernetes, Bash 를 이용한 개발 및 운영환경 구축.',
            ]
        ),
        'aaaaaa'
    ),
    createData(
        '공유 원격 데스크톱 서비스',
        '2019 ~ 2021',
        [
            '2019 - 2021, at TmaxSoft',
            '다중 사용자간 공유 원격 데스크톱 서비스',
            'C++ Websocket Javascript',
            'Linux Kubernetes Docker',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
            'ss',
        ],

        createMoreData(
            ['다중 사용자 동시 접속 원격 데스크톱 서비스 '],
            [
                '자사의 리눅스 어플리케이션을 여러 유저가 웹을 통해 동시 접속해서 사용하고자 하는 요구 발생.',
                'Websocket을 통해 여러 사용자에게 한 개 어플리케이션의 화면을 송출하는 서버 구축.',
                '서버에서 보낸 화면 이미지를 브라우저를 통해 보여주는 클라이언트 개발.',
            ],
            [
                'Websockets, C++를 통한 사용자 입력 및 화면 송출 담당 서버 구축.',
                'JS, 브라우저 API를 이용한 사용자 편의 기능 개발',
                'Docker, Kubernetes, Bash 를 이용한 개발 및 운영환경 구축.',
            ]
        ),
        'aaaaaa'
    ),
]

export default rows
