window.onload = function() {
    if (Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click', clickLogin);
}

// 响应键盘事件，按下回车搜索
function enterSearch() {
    var event = window.event || arguments.callee.caller.arguments[0];
    if (event.keyCode == 13) {
        search();
    }
}

function search() {
    // TODO: 搜索触发后的行为
    var search_contents = document.getElementById('search-text').value;
    var null_message = '请输入搜索内容';

    if (search_contents == '')
        confirm(null_message);
    // else confirm(search_contents);
    else
        window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + search_contents)
}

function clickLogin() {
    if (!Kernal.isLogin()) {
        login();
    } else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + username + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}