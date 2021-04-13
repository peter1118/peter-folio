function createData(title, content) {
    return { title, content }
}

const rows = [
    createData(
        '문제를 찾고, 해결하기',
        '개발자의 사명은 문제를 해결하는 것이라 생각합니다. 나아가 문제를 예견하고 방지하는 것까지. 문제를 해결하기 위한 코드를 작성하기 좋아합니다. 문제 해결을 위한 토론하기를 좋아합니다.'
    ),
    createData(
        '내 코드는 평생 간다',
        '자신의 작품에 이름을 새기듯, 내가 작성한 코드에는 내 이름이 달립니다. 그러므로 내가 작성한 코드에는 한점 부끄럼이 없어야 합니다. 깔끔하게, 누가 봐도 수긍될 수 있게, 친절하게, 잘 분리되게 코드를 짜는 것에 집중합니다.'
    ),
    createData('코ㅡ드몽키 ㄴㄴ', ''),
    createData('동료의 고민이 궁금하다', ''),
]

export default rows
