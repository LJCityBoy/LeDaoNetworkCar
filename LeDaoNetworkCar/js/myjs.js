//初始化导航条
function setNav() {
	plus.navigator.setStatusBarBackground("#4A4C5B");
	plus.navigator.setStatusBarStyle("light");
}

//页面跳转
function openNewWindow(url, id, extras) {
	mui.openWindow({
		url: url,
		id: id,
		extras: extras,
		waiting: {
			autoShow: false,
		},
	});
}