jQuery(function () {
    'use strict';
    var js_video_url = 'https://bornforthis.cn/video/why_code/why.m3u8';
    var js_video_pic = '';
    var js_video_content = '<div class="content-do-video"><div class="views text-muted"><span class="badge badge-light note"><i class="fa fa-info-circle"></i> 暂无权限播放</span></div></div>';
    const dp = new DPlayer({
        container: document.getElementById("rizhuti-video"),
        theme: "#fd7e14",
        screenshot: !1,
        video: {url: js_video_url, type: "auto", pic: js_video_pic}
    });
    var video_vh = "inherit";
    if ($(".dplayer-video").bind("loadedmetadata", function () {
        var e = this.videoWidth || 0, i = this.videoHeight || 0, a = $("#rizhuti-video").width();
        i > e && (video_vh = e / i * a, $(".dplayer-video").css("max-height", video_vh))
    }), "" == js_video_url) {
        var mask = $(".dplayer-mask");
        mask.show(), mask.hasClass("content-do-video") || (mask.append(js_video_content), $(".dplayer-video-wrap").addClass("video-filter"))
    } else {
        var notice = $(".dplayer-notice");
        notice.hasClass("dplayer-notice") && (notice.css("opacity", "0.8"), notice.append('<i class="fa fa-unlock-alt"></i> 您已获得播放权限'), setTimeout(function () {
            notice.css("opacity", "0")
        }, 2e3)), dp.on("fullscreen", function () {
            $(".dplayer-video").css("max-height", "unset")
        }), dp.on("fullscreen_cancel", function () {
            $(".dplayer-video").css("max-height", video_vh)
        })
    }
    var vpage = $("#rizhuti-video-page .switch-video");
    vpage.on("click", function () {
        var e = $(this);
        vpage.removeClass("active"), e.addClass("active"), dp.switchVideo({
            url: e.data("url"),
            type: "auto",
            pic: e.data("pic")
        })
    });
});