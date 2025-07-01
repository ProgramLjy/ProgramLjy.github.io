var vue = new Vue({
    el: '#app',
    data() {
        return {
            id: "0000000000000000",
            aboutDialogVisible: false,
            dialogPlayerVisible: false,
            player: "",
            auto: false,
            kv:
            {
                "f8c5167e6dad7a6d": { title: "增减门", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763445/vthumb/c347751917fbfb30d8f34a80568ddd98.6_69.jpg/144p.jpg", duration: "00:26" },
                "6a38bd6316fb903a": { title: "黑洞吞噬", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763734/vthumb/bd4105928c5ba2e2617440befba2cd62.6_96.jpg/144p.jpg", duration: "00:42" },
                "66a6555f95e61916": { title: "智慧城市", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763545/vthumb/96ce14a4168fa249f1c133f362726759.76_0.jpg/144p.jpg", duration: "01:30" },
                "ae0e461fbbf7a3fa": { title: "汽车展示", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763577/vthumb/eeccb197f06ab2412886cefb7a53068e.4.jpg/144p.jpg", duration: "02:06" },
                "163c8c87eab42367": { title: "2D打老鼠", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2763553/vthumb/82f49281b173f4795f7b894d428f693a.15_99.jpg/144p.jpg", duration: "00:53" },
                "e84f2060d0488757": { title: "多人联网游戏", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2697038/vthumb/fbff0183da77c301949ab7e5217cd68d.166_62.jpg/144p.jpg", duration: "04:56" },
                "405e91a5c29f4fdb": { title: "多线程通信", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2696577/vthumb/7f9b96efcec9f8f865fba13628ece8e1.5.jpg/144p.jpg", duration: "00:21" },
                "b8e08f0e47553d5a": { title: "消灭星星", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2775316/vthumb/b2bb25c50c4ada73c992490136cf8b4a.7_18.jpg/144p.jpg", duration: "00:26" },
                "af88d7ceddff6886": { title: "塔防", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2775317/vthumb/a1d6d18ddacc32ab9ce2f043c088e30c.10_5.jpg/144p.jpg", duration: "00:17" },
                "5b0316556921e262": { title: "SLG摆阵", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2919494/vthumb/fea6659d122068a6a1b994c2b5022238.8.jpg/144p.jpg", duration: "00:26" },
                "3498498afb020fa2": { title: "纸牌匹配", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2919493/vthumb/9d6b1cb18f01852ee11ad3493ec48561.2.jpg/144p.jpg", duration: "00:37" },
                "2894bd754370c7f7": { title: "挖地道", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2784793/vthumb/3b23c8dc905da9aeab232a6d87e60694.10_02.jpg/144p.jpg", duration: "00:27" },
                "36d7de23266ad045": { title: "停车小游戏", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2790642/vthumb/a2eccda692746200d229b9a03dc60c5b.4.jpg/144p.jpg", duration: "00:57" },

                "b0bdbebfcd16e8ed": { title: "群集练习", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2919483/vthumb/d76d09797f15a53a87a0a48f70010102.4.jpg/144p.jpg", duration: "00:34" },
                "4bda6c5e7b143c07": { title: "武士冲锋", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2919486/vthumb/1c6fa611ba5e1ed2fa863881cab9f3a3.4.jpg/144p.jpg", duration: "00:19" },

                "8adbe69435a84167": { title: "SLG与三消结合", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2920836/vthumb/45802a59a8c7af327c61758731ab9e1e.4.jpg/144p.jpg", duration: "01:10" },
                "7888808a8a76ac3a": { title: "抖音弹幕爬取", description: "这个人很懒，什么都没留下。", src: "https://img.dogevideo.com/vcloud/12923/v/2920837/vthumb/358eafe1c4e7f979c259506653c3db01.1.jpg/144p.jpg", duration: "00:19" },
            }
            ,
            categorys: [
                {
                    name: "游戏",
                    players: [
                        "f8c5167e6dad7a6d",
                        "4bda6c5e7b143c07",
                        "2894bd754370c7f7",
                        "5b0316556921e262",
                        "8adbe69435a84167",
                        "6a38bd6316fb903a",
                        "b0bdbebfcd16e8ed",
                        "b8e08f0e47553d5a",
                        "af88d7ceddff6886",
                        "3498498afb020fa2",
                        "36d7de23266ad045",
                        "163c8c87eab42367",
                        "e84f2060d0488757"
                    ]

                },
                {
                    name: "C++",
                    players: [
                        "7888808a8a76ac3a",
                        "405e91a5c29f4fdb"
                    ]

                },
                {
                    name: "数字孪生",
                    players: [
                        "66a6555f95e61916",
                        "ae0e461fbbf7a3fa"
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
                    autoPlay: false,
                    logo: {
                        gravity: 'NorthWest',
                        img: 'https://img-uc.dogecloud.com/12923/image/1747725869/dd9b399427806e354a69bc836c7cfc98.png?sign=1751400001-688795e09a7fc5d1c958b19a8fb7b742-12923-6116cbc6daac3511ec20647d9b957eae'
                    },
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
        },
        goBack() {
            window.history.go(-1);
        }
    },
    mounted() {

    }
})