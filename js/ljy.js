var vue = new Vue({
    el: '#app',
    data() {
        return {
            id: "0000000000000000",
            aboutDialogVisible: false,
            dialogPlayerVisible: false,
            player: "",
            kv:
            {
                "f8c5167e6dad7a6d": { title: "打僵尸（增减门玩法）", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763445/vthumb/c347751917fbfb30d8f34a80568ddd98.4.jpg/144p.jpg", duration: "00:26" },
                "6a38bd6316fb903a": { title: "黑洞吞噬玩法", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763734/vthumb/bd4105928c5ba2e2617440befba2cd62.4.jpg/144p.jpg", duration: "00:42" },
                "66a6555f95e61916": { title: "智慧城市", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763545/vthumb/96ce14a4168fa249f1c133f362726759.4.jpg/144p.jpg", duration: "01:30" },
                "ae0e461fbbf7a3fa": { title: "汽车展示", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763577/vthumb/eeccb197f06ab2412886cefb7a53068e.4.jpg/144p.jpg", duration: "02:06" },
                "163c8c87eab42367": { title: "2D打老鼠", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763553/vthumb/82f49281b173f4795f7b894d428f693a.4.jpg/144p.jpg", duration: "00:53" },
                "e84f2060d0488757": { title: "多人联网游戏", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2697038/vthumb/fbff0183da77c301949ab7e5217cd68d.4.jpg/144p.jpg", duration: "04:56" },
                "405e91a5c29f4fdb": { title: "多线程通信", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2696577/vthumb/7f9b96efcec9f8f865fba13628ece8e1.5.jpg/144p.jpg", duration: "00:21" },
                "0000000000000000": { title: "纸牌匹配", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000001": { title: "消灭星星(点消)", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000002": { title: "消消乐(Match 3)", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000003": { title: "消消乐结合SLG", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000004": { title: "合成小游戏", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000005": { title: "停车小游戏", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000006": { title: "彩球小游戏", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000007": { title: "高塔小游戏", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000009": { title: "挖地道", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000008": { title: "SLG变阵", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000010": { title: "割草闯关", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000011": { title: "魂类游戏", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000012": { title: "ARPG游戏", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
                "0000000000000013": { title: "塔防游戏", description: "这个人很懒，什么都没留下。", src: "", duration: "01:23" },
            }
            ,
            categorys: [
                {
                    name: "游戏",
                    players: [
                        "f8c5167e6dad7a6d",
                        "6a38bd6316fb903a",
                        "163c8c87eab42367",
                        "e84f2060d0488757",
                        "0000000000000000",
                        "0000000000000001",
                        "0000000000000002",
                        "0000000000000003",
                        "0000000000000004",
                        "0000000000000005",
                        "0000000000000006",
                        "0000000000000007",
                        "0000000000000008",
                        "0000000000000009",
                        "0000000000000010",
                        "0000000000000011",
                        "0000000000000012",
                        "0000000000000013"

                    ]

                },
                {
                    name: "数字孪生",
                    players: [
                        "66a6555f95e61916",
                        "ae0e461fbbf7a3fa",
                    ]

                },
                {
                    name: "其他",
                    players: [
                        "405e91a5c29f4fdb",
                    ]

                },
            ],
            recommend: [
                "f8c5167e6dad7a6d",
                "6a38bd6316fb903a",
                "163c8c87eab42367",
                "e84f2060d0488757"
            ],
        };
    },
    methods: {
        handleOpen(id) {
            this.dialogPlayerVisible = true;
            this.id = id;
            setTimeout(function () {
                vue.player = new DogePlayer({
                    container: document.getElementById('player'),
                    userId: 12923,
                    vcode: id,
                    theme: '#409EFF',
                    autoPlay: false
                });
                vue.player.on('ready', function (p) {
                    p.notice('播放器就绪！', 1);

                });
                vue.player.on('fullscreen', function (isFull, p) {
                    p.notice((isFull ? '视频全屏了！' : '视频取消全屏。'), 1);
                });
                vue.player.on('webfullscreen', function (isFull, p) {
                    p.notice((isFull ? '视频网页全屏了！' : '视频取消网页全屏。'), 1);
                });
            }, 200);

        },
        handleClose() {
            this.player.pause();
        }
    },
    mounted() {

    }
})