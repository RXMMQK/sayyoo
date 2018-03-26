//API配置 不进git
var apiUrl = 'http://121.196.207.31:23100/'
// var apiUrl = 'http://192.168.1.20:8080/'
var houseUrl = 'http://120.55.42.62:21275'
var mix = { 
    'spaceListlUrl': apiUrl + 'web/gethouseinfo',//首页数据接口,
    'spaceDetailUrl': apiUrl + 'web/detail',//列表数据接口,
    'spaceCityUrl': apiUrl + 'city',
    'save': apiUrl + 'web/savelandlordinfo',
    'data': '',
    'listData': '',
    'spaceData': '',
    'jobList': 'http://192.168.10.11:8080/recruit/getpostinfo',
    'house': houseUrl + '/search/multiMatch'
}
var city = localStorage.getItem("city");
var loca = ''
var ex = ''
var phone = ''
if(city == null || city == 'HZ'){
	city = 'HZ'
	loca = '杭州<a href="javascript:void(0)">[切到上海]</a>'
	ex = '<p>地址：杭州市拱墅区祥园路35号</p><p>电话：400-060-2897</p><p>邮箱：suiyu@dexingroup.com</p>'
	phone = '400-060-2897'
} else {
	loca = '上海<a href="javascript:void(0)">[切到杭州]</a>'
	ex = '<p>地址：上海市静安区康定东路45弄5号</p><p>电话：021-52656707</p><p>邮箱：suiyu@dexingroup.com</p>'
	phone = '021-52656707'
}
$('.headerNav .HNRight .loaction').html(loca)
$('.footer .top .mid div').html(ex)
$('.headerNav .HNRight .phone').html(phone)
$('.headerNav .HNRight .loaction a').click(function(){
	if (city == 'HZ') {
		localStorage.setItem("city", 'SH')
	} else if (city == 'SH') {
		localStorage.setItem("city", 'HZ')
	}
	window.location.reload()
})