document.querySelector(".resourcelist.ng-scope")                    // 选择下一个课程
.parentNode
.nextElementSibling
.firstChild.click()

document.querySelector(".resourcelist.ng-scope")                    // 打开当前课程的视频
.firstElementChild
.click()


document
.querySelector(".vjs-big-play-button.animated.fadeIn").click()      //  点击播放

a = document.querySelectorAll("#player_html5_api")[0]               // 选择a
a.playbackRate = 10             // 十倍速播放

a.duration  // 视频总长度

function loop_play(play_time) {
    // 循环播放的次数
    setTimeout(function () {
        if (play_time != 0) {
            document
            .querySelector(".vjs-big-play-button.animated.fadeIn").click()      //  点击播放
            console.log("click play")
            play_time --;
            loop_play(play_time);
        }
    }, 5000);
}

function send_post(){
    // 发送post请求，带cookie
    var client = new XMLHttpRequest();
    var endPoint="http://localhost:8080/pcap";
    client = set_header(client);
    var cookie = document.cookie;
    
    var request_data=JSON.stringify(data);
    var cookie="session=abc";
    client.open("POST", endPoint, false);//This Post will become put 
    client.setRequestHeader("Accept", "application/json");
    client.setRequestHeader("Content-Type","application/json");

    client.setRequestHeader("Set-Cookie","session=abc");
    client.setRequestHeader("Cookie",cookie);
    client.send(request_data);
}

function set_header(client){
    // 设置浏览器头
    var raw_header = "Accept:application/json, text/plain, */*;Accept-Encoding:gzip, deflate;Accept-Language:zh-CN,zh;q=0.9;Cache-Control:no-cache;Connection:keep-alive;Content-Length:164;Content-Type:application/x-www-form-urlencoded;charset=UTF-8;Host:www.uooconline.com;Origin:http://www.uooconline.com;Pragma:no-cache;Referer:http://www.uooconline.com/home/learn/index;User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36";
    var headers = raw_header.split(';');
    for(let header in headers){
        var h_list = header.split(":");
        client.setRequestHeader(h_list[0], h_list[1]);
    };
    client.setRequestHeader('Cookie', document.cookie)
    return client;
}