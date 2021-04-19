function createMoreData(header, detail, role) {
    //개요, 상세설명, 맡은 역할
    return { header, detail, role }
}

const rows = [
    createMoreData(
        ['개인 포트폴리오 페이지'],
        [
            '회사에서 React 관련 프로젝트를 새로 맡게 됨. 이에 따라 React 공부에 대한 필요성이 생김. 평소 portfolio 페이지를 갖고 싶었던 욕심과 합쳐저 개발을 결심함',
        ],
        ['기획 및 개발']
    ),
    createMoreData(
        ['다중 사용자 동시 접속 원격 데스크톱 서비스'],
        [
            '자사의 리눅스 어플리케이션을 여러 유저가 웹을 통해 동시 접속해서 사용하고자 하는 요구 발생. Websocket을 통해 여러 사용자에게 한 개 어플리케이션의 화면을 송출하는 서버 구축. 서버에서 보낸 화면 이미지를 브라우저를 통해 보여주는 클라이언트 개발.',
        ],
        [
            'Websockets, C++를 통한 사용자 입력 및 화면 송출 담당 서버 구축.',
            'JS, 브라우저 API를 이용한 사용자 편의 기능 개발',
            'Docker, Kubernetes, Bash 를 이용한 개발 및 운영환경 구축.',
        ]
    ),
]

export default rows
