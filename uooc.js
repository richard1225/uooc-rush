var player;               // 选择a
// player.playbackRate = 10             // 十倍速播放

// player.duration  // 视频总长度

function next_course(){
    document.querySelector(".resourcelist.ng-scope")                    // 选择下一个课程
    .parentNode
    .nextElementSibling
    .firstChild.click();
    // 延迟两秒再点开视频界面
    delay_exc(open_video, 2);
}

function open_video(){
    document.querySelector(".resourcelist.ng-scope")                    // 打开当前课程的视频
    .firstElementChild
    .click();


    // 延迟两秒再播放视频
    delay_exc(play_video,2)
}

function play_video(){
    document
    .querySelector(".vjs-big-play-button.animated.fadeIn").click();      //  点击播放
    
    player = document.querySelectorAll("#player_html5_api")[0] // 选择a
    v_time = player.duration;
    play_time = v_time/3;
    loop_play(play_time);
}

function delay_exc(func, dtime){
    // 延迟执行func， dtime 为 秒
    dtime *= 1000
    setTimeout(function () {
        func();
    }, dtime);
}

function loop_play(play_time) {
    // 循环播放的次数
    setTimeout(function () {
        if (play_time >= 0) {
            document
            .querySelector(".vjs-big-play-button.animated.fadeIn").click();      //  点击播放
            play_time -= 1;
            loop_play(play_time);
            console.log(play_time)
        }
        else{
            drag_pbar();
        }
    }, 3000);
}

function drag_pbar(){
    try{
        player.currentTime = player.duration;
        console.log("drag_bar")
        delay_exc(next_course,5);
    }catch(e){
        console.log(e)
        delay_exc(next_course,50);
    }

}

play_video();

// function send_post(){
//     // 发送post请求，带cookie
//     var client = new XMLHttpRequest();
//     var endPoint="http://www.uooconline.com/home/learn/markVideoLearn";
//     var cookie = document.cookie;
    
//     var request_data="chapter_id=1577575841&cid=1666303743&hidemsg_=true&network=4&resource_id=115111493&section_id=1701830332&source=1&subsection_id=0&video_length=848.79&video_pos=8.19";
//     client.open("POST", endPoint, true);//This Post will become put 
//     client = set_header(client);
//     client.onreadystatechange = function() {//Call a function when the state changes.
//         if(client.readyState == 4 && client.status == 200) {
//             console.log(client.responseText);
//         }
//     }
//     client.send(request_data);
// }

// function set_header(client){
//     // 设置浏览器头
//     var raw_header = "Accept:application/json, text/plain, */*;Accept-Encoding:gzip, deflate;Accept-Language:zh-CN,zh;q=0.9;Cache-Control:no-cache;Connection:keep-alive;Content-Length:164;Content-Type:application/x-www-form-urlencoded;charset=UTF-8;Host:www.uooconline.com;Origin:http://www.uooconline.com;Pragma:no-cache;Referer:http://www.uooconline.com/home/learn/index;User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36";
//     var headers = raw_header.split(';');
//     headers.filter(d=>d)
//     for(let header in headers){
//         var h_list = header.split(":");
//         client.setRequestHeader(h_list[0], h_list[1]);
//     };
//     // client.setRequestHeader('Cookie', document.cookie)
//     return client;
// }
