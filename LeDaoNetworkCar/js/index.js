    var level1=[{ "name":'222222', "value":'1' },{ "name":'饿的方式度过', "value":'2' },{ "name":'收到额外人', "value":'3' },{ "name":'啦啦啦', "value":'4' },{ "name":'饿的方式度过', "value":'5' },{ "name":'收到额外人', "value":'6' },{ "name":'啦啦啦', "value":'1' },{ "name":'饿的方式度过', "value":'2' },{ "name":'收到额外人', "value":'3' },{ "name":'啦啦啦', "value":'4' },{ "name":'饿的方式度过', "value":'5' },{ "name":'收到额外人', "value":'6' }];
    var level2=[{ "name":'啦啦啦', "value":'1' },{ "name":'饿的方式度过', "value":'2' },{ "name":'收到额外人', "value":'3' },{ "name":'啦啦啦', "value":'4' },{ "name":'饿的方式度过', "value":'5' },{ "name":'收到额外人', "value":'6' }];
    var level3=[{ "name":'111', "value":'1', "child":[{ "name":'222', "value":'3', "child":[{ "name":'fff', "value":'3' },{ "name":'ggg', "value":'4' },{ "name":'hhh', "value":'5' },{ "name":'yyy', "value":'6' }] },{ "name":'333', "value":'4', "child":[{ "name":'222', "value":'3' },{ "name":'333', "value":'4' },{ "name":'4444', "value":'5' },{ "name":'555', "value":'6' }] },{ "name":'4444', "value":'5', "child":[{ "name":'222', "value":'3' },{ "name":'333', "value":'4' },{ "name":'4444', "value":'5' },{ "name":'555', "value":'6' }] },{ "name":'555', "value":'6', "child":[{ "name":'fff', "value":'3' },{ "name":'ggg', "value":'4' },{ "name":'hhh', "value":'5' },{ "name":'yyy', "value":'6' }] },{ "name":'4444', "value":'5', "child":[{ "name":'fff', "value":'3' },{ "name":'ggg', "value":'4' },{ "name":'hhh', "value":'5' },{ "name":'yyy', "value":'6' }] },{ "name":'555', "value":'6', "child":[{ "name":'fff', "value":'3' },{ "name":'ggg', "value":'4' },{ "name":'hhh', "value":'5' },{ "name":'yyy', "value":'6' }] }] },{ "name":'ddd', "value":'2', "child":[{ "name":'fff', "value":'3' },{ "name":'ggg', "value":'4' },{ "name":'hhh', "value":'5' },{ "name":'yyy', "value":'6' }] },{ "name":'www', "value":'3', "child":[{ "name":'收到额外人', "value":'3' },{ "name":'啦啦啦', "value":'4' },{ "name":'饿的方式度过', "value":'5' },{ "name":'收到额外人', "value":'6' }] },{ "name":'rrr', "value":'4', "child":[{ "name":'收到额外人', "value":'3' },{ "name":'啦啦啦', "value":'4' },{ "name":'饿的方式度过', "value":'5' },{ "name":'收到额外人', "value":'6' }] },{ "name":'yyy', "value":'5', "child":[{ "name":'收到额外人', "value":'3' },{ "name":'啦啦啦', "value":'4' },{ "name":'饿的方式度过', "value":'5' },{ "name":'收到额外人', "value":'6' }] },{ "name":'uuu', "value":'6', "child":[{ "name":'收到额外人', "value":'3' },{ "name":'啦啦啦', "value":'4' },{ "name":'饿的方式度过', "value":'5' },{ "name":'收到额外人', "value":'6' }] }];
var cityData=[{"id":"110000","name":"北京市","shortName":"北京","parentId":"100000","level":"1"},{"id":"110100","name":"北京市","shortName":"北京","parentId":"110000","level":"2"},{"id":"120000","name":"天津市","shortName":"天津","parentId":"100000","level":"1"},{"id":"120100","name":"天津市","shortName":"天津","parentId":"120000","level":"2"},{"id":"130000","name":"河北省","shortName":"河北","parentId":"100000","level":"1"},{"id":"130100","name":"石家庄市","shortName":"石家庄","parentId":"130000","level":"2"},{"id":"130200","name":"唐山市","shortName":"唐山","parentId":"130000","level":"2"},{"id":"130300","name":"秦皇岛市","shortName":"秦皇岛","parentId":"130000","level":"2"},{"id":"130400","name":"邯郸市","shortName":"邯郸","parentId":"130000","level":"2"},{"id":"130500","name":"邢台市","shortName":"邢台","parentId":"130000","level":"2"},{"id":"130600","name":"保定市","shortName":"保定","parentId":"130000","level":"2"},{"id":"130700","name":"张家口市","shortName":"张家口","parentId":"130000","level":"2"},{"id":"130800","name":"承德市","shortName":"承德","parentId":"130000","level":"2"},{"id":"130900","name":"沧州市","shortName":"沧州","parentId":"130000","level":"2"},{"id":"131000","name":"廊坊市","shortName":"廊坊","parentId":"130000","level":"2"},{"id":"131100","name":"衡水市","shortName":"衡水","parentId":"130000","level":"2"},{"id":"140000","name":"山西省","shortName":"山西","parentId":"100000","level":"1"},{"id":"140100","name":"太原市","shortName":"太原","parentId":"140000","level":"2"},{"id":"140200","name":"大同市","shortName":"大同","parentId":"140000","level":"2"},{"id":"140300","name":"阳泉市","shortName":"阳泉","parentId":"140000","level":"2"},{"id":"140400","name":"长治市","shortName":"长治","parentId":"140000","level":"2"},{"id":"140500","name":"晋城市","shortName":"晋城","parentId":"140000","level":"2"},{"id":"140600","name":"朔州市","shortName":"朔州","parentId":"140000","level":"2"},{"id":"140700","name":"晋中市","shortName":"晋中","parentId":"140000","level":"2"},{"id":"140800","name":"运城市","shortName":"运城","parentId":"140000","level":"2"},{"id":"140900","name":"忻州市","shortName":"忻州","parentId":"140000","level":"2"},{"id":"141000","name":"临汾市","shortName":"临汾","parentId":"140000","level":"2"},{"id":"141100","name":"吕梁市","shortName":"吕梁","parentId":"140000","level":"2"},{"id":"150000","name":"内蒙古自治区","shortName":"内蒙古","parentId":"100000","level":"1"},{"id":"150100","name":"呼和浩特市","shortName":"呼和浩特","parentId":"150000","level":"2"},{"id":"150200","name":"包头市","shortName":"包头","parentId":"150000","level":"2"},{"id":"150300","name":"乌海市","shortName":"乌海","parentId":"150000","level":"2"},{"id":"150400","name":"赤峰市","shortName":"赤峰","parentId":"150000","level":"2"},{"id":"150500","name":"通辽市","shortName":"通辽","parentId":"150000","level":"2"},{"id":"150600","name":"鄂尔多斯市","shortName":"鄂尔多斯","parentId":"150000","level":"2"},{"id":"150700","name":"呼伦贝尔市","shortName":"呼伦贝尔","parentId":"150000","level":"2"},{"id":"150800","name":"巴彦淖尔市","shortName":"巴彦淖尔","parentId":"150000","level":"2"},{"id":"150900","name":"乌兰察布市","shortName":"乌兰察布","parentId":"150000","level":"2"},{"id":"152200","name":"兴安盟","shortName":"兴安盟","parentId":"150000","level":"2"},{"id":"152500","name":"锡林郭勒盟","shortName":"锡林郭勒盟","parentId":"150000","level":"2"},{"id":"152900","name":"阿拉善盟","shortName":"阿拉善盟","parentId":"150000","level":"2"},{"id":"210000","name":"辽宁省","shortName":"辽宁","parentId":"100000","level":"1"},{"id":"210100","name":"沈阳市","shortName":"沈阳","parentId":"210000","level":"2"},{"id":"210200","name":"大连市","shortName":"大连","parentId":"210000","level":"2"},{"id":"210300","name":"鞍山市","shortName":"鞍山","parentId":"210000","level":"2"},{"id":"210400","name":"抚顺市","shortName":"抚顺","parentId":"210000","level":"2"},{"id":"210500","name":"本溪市","shortName":"本溪","parentId":"210000","level":"2"},{"id":"210600","name":"丹东市","shortName":"丹东","parentId":"210000","level":"2"},{"id":"210700","name":"锦州市","shortName":"锦州","parentId":"210000","level":"2"},{"id":"210800","name":"营口市","shortName":"营口","parentId":"210000","level":"2"},{"id":"210900","name":"阜新市","shortName":"阜新","parentId":"210000","level":"2"},{"id":"211000","name":"辽阳市","shortName":"辽阳","parentId":"210000","level":"2"},{"id":"211100","name":"盘锦市","shortName":"盘锦","parentId":"210000","level":"2"},{"id":"211200","name":"铁岭市","shortName":"铁岭","parentId":"210000","level":"2"},{"id":"211300","name":"朝阳市","shortName":"朝阳","parentId":"210000","level":"2"},{"id":"211400","name":"葫芦岛市","shortName":"葫芦岛","parentId":"210000","level":"2"},{"id":"211500","name":"金普新区","shortName":"金普新区","parentId":"210000","level":"2"},{"id":"220000","name":"吉林省","shortName":"吉林","parentId":"100000","level":"1"},{"id":"220100","name":"长春市","shortName":"长春","parentId":"220000","level":"2"},{"id":"220200","name":"吉林市","shortName":"吉林","parentId":"220000","level":"2"},{"id":"220300","name":"四平市","shortName":"四平","parentId":"220000","level":"2"},{"id":"220400","name":"辽源市","shortName":"辽源","parentId":"220000","level":"2"},{"id":"220500","name":"通化市","shortName":"通化","parentId":"220000","level":"2"},{"id":"220600","name":"白山市","shortName":"白山","parentId":"220000","level":"2"},{"id":"220700","name":"松原市","shortName":"松原","parentId":"220000","level":"2"},{"id":"220800","name":"白城市","shortName":"白城","parentId":"220000","level":"2"},{"id":"222400","name":"延边朝鲜族自治州","shortName":"延边","parentId":"220000","level":"2"},{"id":"230000","name":"黑龙江省","shortName":"黑龙江","parentId":"100000","level":"1"},{"id":"230100","name":"哈尔滨市","shortName":"哈尔滨","parentId":"230000","level":"2"},{"id":"230200","name":"齐齐哈尔市","shortName":"齐齐哈尔","parentId":"230000","level":"2"},{"id":"230300","name":"鸡西市","shortName":"鸡西","parentId":"230000","level":"2"},{"id":"230400","name":"鹤岗市","shortName":"鹤岗","parentId":"230000","level":"2"},{"id":"230500","name":"双鸭山市","shortName":"双鸭山","parentId":"230000","level":"2"},{"id":"230600","name":"大庆市","shortName":"大庆","parentId":"230000","level":"2"},{"id":"230700","name":"伊春市","shortName":"伊春","parentId":"230000","level":"2"},{"id":"230800","name":"佳木斯市","shortName":"佳木斯","parentId":"230000","level":"2"},{"id":"230900","name":"七台河市","shortName":"七台河","parentId":"230000","level":"2"},{"id":"231000","name":"牡丹江市","shortName":"牡丹江","parentId":"230000","level":"2"},{"id":"231100","name":"黑河市","shortName":"黑河","parentId":"230000","level":"2"},{"id":"231200","name":"绥化市","shortName":"绥化","parentId":"230000","level":"2"},{"id":"232700","name":"大兴安岭地区","shortName":"大兴安岭","parentId":"230000","level":"2"},{"id":"310000","name":"上海市","shortName":"上海","parentId":"100000","level":"1"},{"id":"310100","name":"上海市","shortName":"上海","parentId":"310000","level":"2"},{"id":"320000","name":"江苏省","shortName":"江苏","parentId":"100000","level":"1"},{"id":"320100","name":"南京市","shortName":"南京","parentId":"320000","level":"2"},{"id":"320200","name":"无锡市","shortName":"无锡","parentId":"320000","level":"2"},{"id":"320300","name":"徐州市","shortName":"徐州","parentId":"320000","level":"2"},{"id":"320400","name":"常州市","shortName":"常州","parentId":"320000","level":"2"},{"id":"320500","name":"苏州市","shortName":"苏州","parentId":"320000","level":"2"},{"id":"320600","name":"南通市","shortName":"南通","parentId":"320000","level":"2"},{"id":"320700","name":"连云港市","shortName":"连云港","parentId":"320000","level":"2"},{"id":"320800","name":"淮安市","shortName":"淮安","parentId":"320000","level":"2"},{"id":"320900","name":"盐城市","shortName":"盐城","parentId":"320000","level":"2"},{"id":"321000","name":"扬州市","shortName":"扬州","parentId":"320000","level":"2"},{"id":"321100","name":"镇江市","shortName":"镇江","parentId":"320000","level":"2"},{"id":"321200","name":"泰州市","shortName":"泰州","parentId":"320000","level":"2"},{"id":"321300","name":"宿迁市","shortName":"宿迁","parentId":"320000","level":"2"},{"id":"330000","name":"浙江省","shortName":"浙江","parentId":"100000","level":"1"},{"id":"330100","name":"杭州市","shortName":"杭州","parentId":"330000","level":"2"},{"id":"330200","name":"宁波市","shortName":"宁波","parentId":"330000","level":"2"},{"id":"330300","name":"温州市","shortName":"温州","parentId":"330000","level":"2"},{"id":"330400","name":"嘉兴市","shortName":"嘉兴","parentId":"330000","level":"2"},{"id":"330500","name":"湖州市","shortName":"湖州","parentId":"330000","level":"2"},{"id":"330600","name":"绍兴市","shortName":"绍兴","parentId":"330000","level":"2"},{"id":"330700","name":"金华市","shortName":"金华","parentId":"330000","level":"2"},{"id":"330800","name":"衢州市","shortName":"衢州","parentId":"330000","level":"2"},{"id":"330900","name":"舟山市","shortName":"舟山","parentId":"330000","level":"2"},{"id":"331000","name":"台州市","shortName":"台州","parentId":"330000","level":"2"},{"id":"331100","name":"丽水市","shortName":"丽水","parentId":"330000","level":"2"},{"id":"331200","name":"舟山群岛新区","shortName":"舟山新区","parentId":"330000","level":"2"},{"id":"340000","name":"安徽省","shortName":"安徽","parentId":"100000","level":"1"},{"id":"340100","name":"合肥市","shortName":"合肥","parentId":"340000","level":"2"},{"id":"340200","name":"芜湖市","shortName":"芜湖","parentId":"340000","level":"2"},{"id":"340300","name":"蚌埠市","shortName":"蚌埠","parentId":"340000","level":"2"},{"id":"340400","name":"淮南市","shortName":"淮南","parentId":"340000","level":"2"},{"id":"340500","name":"马鞍山市","shortName":"马鞍山","parentId":"340000","level":"2"},{"id":"340600","name":"淮北市","shortName":"淮北","parentId":"340000","level":"2"},{"id":"340700","name":"铜陵市","shortName":"铜陵","parentId":"340000","level":"2"},{"id":"340800","name":"安庆市","shortName":"安庆","parentId":"340000","level":"2"},{"id":"341000","name":"黄山市","shortName":"黄山","parentId":"340000","level":"2"},{"id":"341100","name":"滁州市","shortName":"滁州","parentId":"340000","level":"2"},{"id":"341200","name":"阜阳市","shortName":"阜阳","parentId":"340000","level":"2"},{"id":"341300","name":"宿州市","shortName":"宿州","parentId":"340000","level":"2"},{"id":"341500","name":"六安市","shortName":"六安","parentId":"340000","level":"2"},{"id":"341600","name":"亳州市","shortName":"亳州","parentId":"340000","level":"2"},{"id":"341700","name":"池州市","shortName":"池州","parentId":"340000","level":"2"},{"id":"341800","name":"宣城市","shortName":"宣城","parentId":"340000","level":"2"},{"id":"350000","name":"福建省","shortName":"福建","parentId":"100000","level":"1"},{"id":"350100","name":"福州市","shortName":"福州","parentId":"350000","level":"2"},{"id":"350200","name":"厦门市","shortName":"厦门","parentId":"350000","level":"2"},{"id":"350300","name":"莆田市","shortName":"莆田","parentId":"350000","level":"2"},{"id":"350400","name":"三明市","shortName":"三明","parentId":"350000","level":"2"},{"id":"350500","name":"泉州市","shortName":"泉州","parentId":"350000","level":"2"},{"id":"350600","name":"漳州市","shortName":"漳州","parentId":"350000","level":"2"},{"id":"350700","name":"南平市","shortName":"南平","parentId":"350000","level":"2"},{"id":"350800","name":"龙岩市","shortName":"龙岩","parentId":"350000","level":"2"},{"id":"350900","name":"宁德市","shortName":"宁德","parentId":"350000","level":"2"},{"id":"360000","name":"江西省","shortName":"江西","parentId":"100000","level":"1"},{"id":"360100","name":"南昌市","shortName":"南昌","parentId":"360000","level":"2"},{"id":"360200","name":"景德镇市","shortName":"景德镇","parentId":"360000","level":"2"},{"id":"360300","name":"萍乡市","shortName":"萍乡","parentId":"360000","level":"2"},{"id":"360400","name":"九江市","shortName":"九江","parentId":"360000","level":"2"},{"id":"360500","name":"新余市","shortName":"新余","parentId":"360000","level":"2"},{"id":"360600","name":"鹰潭市","shortName":"鹰潭","parentId":"360000","level":"2"},{"id":"360700","name":"赣州市","shortName":"赣州","parentId":"360000","level":"2"},{"id":"360800","name":"吉安市","shortName":"吉安","parentId":"360000","level":"2"},{"id":"360900","name":"宜春市","shortName":"宜春","parentId":"360000","level":"2"},{"id":"361000","name":"抚州市","shortName":"抚州","parentId":"360000","level":"2"},{"id":"361100","name":"上饶市","shortName":"上饶","parentId":"360000","level":"2"},{"id":"370000","name":"山东省","shortName":"山东","parentId":"100000","level":"1"},{"id":"370100","name":"济南市","shortName":"济南","parentId":"370000","level":"2"},{"id":"370200","name":"青岛市","shortName":"青岛","parentId":"370000","level":"2"},{"id":"370300","name":"淄博市","shortName":"淄博","parentId":"370000","level":"2"},{"id":"370400","name":"枣庄市","shortName":"枣庄","parentId":"370000","level":"2"},{"id":"370500","name":"东营市","shortName":"东营","parentId":"370000","level":"2"},{"id":"370600","name":"烟台市","shortName":"烟台","parentId":"370000","level":"2"},{"id":"370700","name":"潍坊市","shortName":"潍坊","parentId":"370000","level":"2"},{"id":"370800","name":"济宁市","shortName":"济宁","parentId":"370000","level":"2"},{"id":"370900","name":"泰安市","shortName":"泰安","parentId":"370000","level":"2"},{"id":"371000","name":"威海市","shortName":"威海","parentId":"370000","level":"2"},{"id":"371100","name":"日照市","shortName":"日照","parentId":"370000","level":"2"},{"id":"371200","name":"莱芜市","shortName":"莱芜","parentId":"370000","level":"2"},{"id":"371300","name":"临沂市","shortName":"临沂","parentId":"370000","level":"2"},{"id":"371400","name":"德州市","shortName":"德州","parentId":"370000","level":"2"},{"id":"371500","name":"聊城市","shortName":"聊城","parentId":"370000","level":"2"},{"id":"371600","name":"滨州市","shortName":"滨州","parentId":"370000","level":"2"},{"id":"371700","name":"菏泽市","shortName":"菏泽","parentId":"370000","level":"2"},{"id":"410000","name":"河南省","shortName":"河南","parentId":"100000","level":"1"},{"id":"410100","name":"郑州市","shortName":"郑州","parentId":"410000","level":"2"},{"id":"410200","name":"开封市","shortName":"开封","parentId":"410000","level":"2"},{"id":"410300","name":"洛阳市","shortName":"洛阳","parentId":"410000","level":"2"},{"id":"410400","name":"平顶山市","shortName":"平顶山","parentId":"410000","level":"2"},{"id":"410500","name":"安阳市","shortName":"安阳","parentId":"410000","level":"2"},{"id":"410600","name":"鹤壁市","shortName":"鹤壁","parentId":"410000","level":"2"},{"id":"410700","name":"新乡市","shortName":"新乡","parentId":"410000","level":"2"},{"id":"410800","name":"焦作市","shortName":"焦作","parentId":"410000","level":"2"},{"id":"410900","name":"濮阳市","shortName":"濮阳","parentId":"410000","level":"2"},{"id":"411000","name":"许昌市","shortName":"许昌","parentId":"410000","level":"2"},{"id":"411100","name":"漯河市","shortName":"漯河","parentId":"410000","level":"2"},{"id":"411200","name":"三门峡市","shortName":"三门峡","parentId":"410000","level":"2"},{"id":"411300","name":"南阳市","shortName":"南阳","parentId":"410000","level":"2"},{"id":"411400","name":"商丘市","shortName":"商丘","parentId":"410000","level":"2"},{"id":"411500","name":"信阳市","shortName":"信阳","parentId":"410000","level":"2"},{"id":"411600","name":"周口市","shortName":"周口","parentId":"410000","level":"2"},{"id":"411700","name":"驻马店市","shortName":"驻马店","parentId":"410000","level":"2"},{"id":"419000","name":"直辖县级","shortName":"直辖县","parentId":"410000","level":"2"},{"id":"420000","name":"湖北省","shortName":"湖北","parentId":"100000","level":"1"},{"id":"420100","name":"武汉市","shortName":"武汉","parentId":"420000","level":"2"},{"id":"420200","name":"黄石市","shortName":"黄石","parentId":"420000","level":"2"},{"id":"420300","name":"十堰市","shortName":"十堰","parentId":"420000","level":"2"},{"id":"420500","name":"宜昌市","shortName":"宜昌","parentId":"420000","level":"2"},{"id":"420600","name":"襄阳市","shortName":"襄阳","parentId":"420000","level":"2"},{"id":"420700","name":"鄂州市","shortName":"鄂州","parentId":"420000","level":"2"},{"id":"420800","name":"荆门市","shortName":"荆门","parentId":"420000","level":"2"},{"id":"420900","name":"孝感市","shortName":"孝感","parentId":"420000","level":"2"},{"id":"421000","name":"荆州市","shortName":"荆州","parentId":"420000","level":"2"},{"id":"421100","name":"黄冈市","shortName":"黄冈","parentId":"420000","level":"2"},{"id":"421200","name":"咸宁市","shortName":"咸宁","parentId":"420000","level":"2"},{"id":"421300","name":"随州市","shortName":"随州","parentId":"420000","level":"2"},{"id":"422800","name":"恩施土家族苗族自治州","shortName":"恩施","parentId":"420000","level":"2"},{"id":"429000","name":"直辖县级","shortName":"直辖县","parentId":"420000","level":"2"},{"id":"430000","name":"湖南省","shortName":"湖南","parentId":"100000","level":"1"},{"id":"430100","name":"长沙市","shortName":"长沙","parentId":"430000","level":"2"},{"id":"430200","name":"株洲市","shortName":"株洲","parentId":"430000","level":"2"},{"id":"430300","name":"湘潭市","shortName":"湘潭","parentId":"430000","level":"2"},{"id":"430400","name":"衡阳市","shortName":"衡阳","parentId":"430000","level":"2"},{"id":"430500","name":"邵阳市","shortName":"邵阳","parentId":"430000","level":"2"},{"id":"430600","name":"岳阳市","shortName":"岳阳","parentId":"430000","level":"2"},{"id":"430700","name":"常德市","shortName":"常德","parentId":"430000","level":"2"},{"id":"430800","name":"张家界市","shortName":"张家界","parentId":"430000","level":"2"},{"id":"430900","name":"益阳市","shortName":"益阳","parentId":"430000","level":"2"},{"id":"431000","name":"郴州市","shortName":"郴州","parentId":"430000","level":"2"},{"id":"431100","name":"永州市","shortName":"永州","parentId":"430000","level":"2"},{"id":"431200","name":"怀化市","shortName":"怀化","parentId":"430000","level":"2"},{"id":"431300","name":"娄底市","shortName":"娄底","parentId":"430000","level":"2"},{"id":"433100","name":"湘西土家族苗族自治州","shortName":"湘西","parentId":"430000","level":"2"},{"id":"440000","name":"广东省","shortName":"广东","parentId":"100000","level":"1"},{"id":"440100","name":"广州市","shortName":"广州","parentId":"440000","level":"2"},{"id":"440200","name":"韶关市","shortName":"韶关","parentId":"440000","level":"2"},{"id":"440300","name":"深圳市","shortName":"深圳","parentId":"440000","level":"2"},{"id":"440400","name":"珠海市","shortName":"珠海","parentId":"440000","level":"2"},{"id":"440500","name":"汕头市","shortName":"汕头","parentId":"440000","level":"2"},{"id":"440600","name":"佛山市","shortName":"佛山","parentId":"440000","level":"2"},{"id":"440700","name":"江门市","shortName":"江门","parentId":"440000","level":"2"},{"id":"440800","name":"湛江市","shortName":"湛江","parentId":"440000","level":"2"},{"id":"440900","name":"茂名市","shortName":"茂名","parentId":"440000","level":"2"},{"id":"441200","name":"肇庆市","shortName":"肇庆","parentId":"440000","level":"2"},{"id":"441300","name":"惠州市","shortName":"惠州","parentId":"440000","level":"2"},{"id":"441400","name":"梅州市","shortName":"梅州","parentId":"440000","level":"2"},{"id":"441500","name":"汕尾市","shortName":"汕尾","parentId":"440000","level":"2"},{"id":"441600","name":"河源市","shortName":"河源","parentId":"440000","level":"2"},{"id":"441700","name":"阳江市","shortName":"阳江","parentId":"440000","level":"2"},{"id":"441800","name":"清远市","shortName":"清远","parentId":"440000","level":"2"},{"id":"441900","name":"东莞市","shortName":"东莞","parentId":"440000","level":"2"},{"id":"442000","name":"中山市","shortName":"中山","parentId":"440000","level":"2"},{"id":"445100","name":"潮州市","shortName":"潮州","parentId":"440000","level":"2"},{"id":"445200","name":"揭阳市","shortName":"揭阳","parentId":"440000","level":"2"},{"id":"445300","name":"云浮市","shortName":"云浮","parentId":"440000","level":"2"},{"id":"450000","name":"广西壮族自治区","shortName":"广西","parentId":"100000","level":"1"},{"id":"450100","name":"南宁市","shortName":"南宁","parentId":"450000","level":"2"},{"id":"450200","name":"柳州市","shortName":"柳州","parentId":"450000","level":"2"},{"id":"450300","name":"桂林市","shortName":"桂林","parentId":"450000","level":"2"},{"id":"450400","name":"梧州市","shortName":"梧州","parentId":"450000","level":"2"},{"id":"450500","name":"北海市","shortName":"北海","parentId":"450000","level":"2"},{"id":"450600","name":"防城港市","shortName":"防城港","parentId":"450000","level":"2"},{"id":"450700","name":"钦州市","shortName":"钦州","parentId":"450000","level":"2"},{"id":"450800","name":"贵港市","shortName":"贵港","parentId":"450000","level":"2"},{"id":"450900","name":"玉林市","shortName":"玉林","parentId":"450000","level":"2"},{"id":"451000","name":"百色市","shortName":"百色","parentId":"450000","level":"2"},{"id":"451100","name":"贺州市","shortName":"贺州","parentId":"450000","level":"2"},{"id":"451200","name":"河池市","shortName":"河池","parentId":"450000","level":"2"},{"id":"451300","name":"来宾市","shortName":"来宾","parentId":"450000","level":"2"},{"id":"451400","name":"崇左市","shortName":"崇左","parentId":"450000","level":"2"},{"id":"460000","name":"海南省","shortName":"海南","parentId":"100000","level":"1"},{"id":"460100","name":"海口市","shortName":"海口","parentId":"460000","level":"2"},{"id":"460200","name":"三亚市","shortName":"三亚","parentId":"460000","level":"2"},{"id":"460300","name":"三沙市","shortName":"三沙","parentId":"460000","level":"2"},{"id":"469000","name":"直辖县级","shortName":"直辖县","parentId":"460000","level":"2"},{"id":"500000","name":"重庆市","shortName":"重庆","parentId":"100000","level":"1"},{"id":"500100","name":"重庆市","shortName":"重庆","parentId":"500000","level":"2"},{"id":"500300","name":"两江新区","shortName":"两江新区","parentId":"500000","level":"2"},{"id":"510000","name":"四川省","shortName":"四川","parentId":"100000","level":"1"},{"id":"510100","name":"成都市","shortName":"成都","parentId":"510000","level":"2"},{"id":"510300","name":"自贡市","shortName":"自贡","parentId":"510000","level":"2"},{"id":"510400","name":"攀枝花市","shortName":"攀枝花","parentId":"510000","level":"2"},{"id":"510500","name":"泸州市","shortName":"泸州","parentId":"510000","level":"2"},{"id":"510600","name":"德阳市","shortName":"德阳","parentId":"510000","level":"2"},{"id":"510700","name":"绵阳市","shortName":"绵阳","parentId":"510000","level":"2"},{"id":"510800","name":"广元市","shortName":"广元","parentId":"510000","level":"2"},{"id":"510900","name":"遂宁市","shortName":"遂宁","parentId":"510000","level":"2"},{"id":"511000","name":"内江市","shortName":"内江","parentId":"510000","level":"2"},{"id":"511100","name":"乐山市","shortName":"乐山","parentId":"510000","level":"2"},{"id":"511300","name":"南充市","shortName":"南充","parentId":"510000","level":"2"},{"id":"511400","name":"眉山市","shortName":"眉山","parentId":"510000","level":"2"},{"id":"511500","name":"宜宾市","shortName":"宜宾","parentId":"510000","level":"2"},{"id":"511600","name":"广安市","shortName":"广安","parentId":"510000","level":"2"},{"id":"511700","name":"达州市","shortName":"达州","parentId":"510000","level":"2"},{"id":"511800","name":"雅安市","shortName":"雅安","parentId":"510000","level":"2"},{"id":"511900","name":"巴中市","shortName":"巴中","parentId":"510000","level":"2"},{"id":"512000","name":"资阳市","shortName":"资阳","parentId":"510000","level":"2"},{"id":"513200","name":"阿坝藏族羌族自治州","shortName":"阿坝","parentId":"510000","level":"2"},{"id":"513300","name":"甘孜藏族自治州","shortName":"甘孜","parentId":"510000","level":"2"},{"id":"513400","name":"凉山彝族自治州","shortName":"凉山","parentId":"510000","level":"2"},{"id":"520000","name":"贵州省","shortName":"贵州","parentId":"100000","level":"1"},{"id":"520100","name":"贵阳市","shortName":"贵阳","parentId":"520000","level":"2"},{"id":"520200","name":"六盘水市","shortName":"六盘水","parentId":"520000","level":"2"},{"id":"520300","name":"遵义市","shortName":"遵义","parentId":"520000","level":"2"},{"id":"520400","name":"安顺市","shortName":"安顺","parentId":"520000","level":"2"},{"id":"520500","name":"毕节市","shortName":"毕节","parentId":"520000","level":"2"},{"id":"520600","name":"铜仁市","shortName":"铜仁","parentId":"520000","level":"2"},{"id":"522300","name":"黔西南布依族苗族自治州","shortName":"黔西南","parentId":"520000","level":"2"},{"id":"522600","name":"黔东南苗族侗族自治州","shortName":"黔东南","parentId":"520000","level":"2"},{"id":"522700","name":"黔南布依族苗族自治州","shortName":"黔南","parentId":"520000","level":"2"},{"id":"530000","name":"云南省","shortName":"云南","parentId":"100000","level":"1"},{"id":"530100","name":"昆明市","shortName":"昆明","parentId":"530000","level":"2"},{"id":"530300","name":"曲靖市","shortName":"曲靖","parentId":"530000","level":"2"},{"id":"530400","name":"玉溪市","shortName":"玉溪","parentId":"530000","level":"2"},{"id":"530500","name":"保山市","shortName":"保山","parentId":"530000","level":"2"},{"id":"530600","name":"昭通市","shortName":"昭通","parentId":"530000","level":"2"},{"id":"530700","name":"丽江市","shortName":"丽江","parentId":"530000","level":"2"},{"id":"530800","name":"普洱市","shortName":"普洱","parentId":"530000","level":"2"},{"id":"530900","name":"临沧市","shortName":"临沧","parentId":"530000","level":"2"},{"id":"532300","name":"楚雄彝族自治州","shortName":"楚雄","parentId":"530000","level":"2"},{"id":"532500","name":"红河哈尼族彝族自治州","shortName":"红河","parentId":"530000","level":"2"},{"id":"532600","name":"文山壮族苗族自治州","shortName":"文山","parentId":"530000","level":"2"},{"id":"532800","name":"西双版纳傣族自治州","shortName":"西双版纳","parentId":"530000","level":"2"},{"id":"532900","name":"大理白族自治州","shortName":"大理","parentId":"530000","level":"2"},{"id":"533100","name":"德宏傣族景颇族自治州","shortName":"德宏","parentId":"530000","level":"2"},{"id":"533300","name":"怒江傈僳族自治州","shortName":"怒江","parentId":"530000","level":"2"},{"id":"533400","name":"迪庆藏族自治州","shortName":"迪庆","parentId":"530000","level":"2"},{"id":"540000","name":"西藏自治区","shortName":"西藏","parentId":"100000","level":"1"},{"id":"540100","name":"拉萨市","shortName":"拉萨","parentId":"540000","level":"2"},{"id":"540200","name":"日喀则市","shortName":"日喀则","parentId":"540000","level":"2"},{"id":"540300","name":"昌都市","shortName":"昌都","parentId":"540000","level":"2"},{"id":"542200","name":"山南地区","shortName":"山南","parentId":"540000","level":"2"},{"id":"542400","name":"那曲地区","shortName":"那曲","parentId":"540000","level":"2"},{"id":"542500","name":"阿里地区","shortName":"阿里","parentId":"540000","level":"2"},{"id":"542600","name":"林芝地区","shortName":"林芝","parentId":"540000","level":"2"},{"id":"610000","name":"陕西省","shortName":"陕西","parentId":"100000","level":"1"},{"id":"610100","name":"西安市","shortName":"西安","parentId":"610000","level":"2"},{"id":"610200","name":"铜川市","shortName":"铜川","parentId":"610000","level":"2"},{"id":"610300","name":"宝鸡市","shortName":"宝鸡","parentId":"610000","level":"2"},{"id":"610400","name":"咸阳市","shortName":"咸阳","parentId":"610000","level":"2"},{"id":"610500","name":"渭南市","shortName":"渭南","parentId":"610000","level":"2"},{"id":"610600","name":"延安市","shortName":"延安","parentId":"610000","level":"2"},{"id":"610700","name":"汉中市","shortName":"汉中","parentId":"610000","level":"2"},{"id":"610800","name":"榆林市","shortName":"榆林","parentId":"610000","level":"2"},{"id":"610900","name":"安康市","shortName":"安康","parentId":"610000","level":"2"},{"id":"611000","name":"商洛市","shortName":"商洛","parentId":"610000","level":"2"},{"id":"611100","name":"西咸新区","shortName":"西咸","parentId":"610000","level":"2"},{"id":"620000","name":"甘肃省","shortName":"甘肃","parentId":"100000","level":"1"},{"id":"620100","name":"兰州市","shortName":"兰州","parentId":"620000","level":"2"},{"id":"620200","name":"嘉峪关市","shortName":"嘉峪关","parentId":"620000","level":"2"},{"id":"620300","name":"金昌市","shortName":"金昌","parentId":"620000","level":"2"},{"id":"620400","name":"白银市","shortName":"白银","parentId":"620000","level":"2"},{"id":"620500","name":"天水市","shortName":"天水","parentId":"620000","level":"2"},{"id":"620600","name":"武威市","shortName":"武威","parentId":"620000","level":"2"},{"id":"620700","name":"张掖市","shortName":"张掖","parentId":"620000","level":"2"},{"id":"620800","name":"平凉市","shortName":"平凉","parentId":"620000","level":"2"},{"id":"620900","name":"酒泉市","shortName":"酒泉","parentId":"620000","level":"2"},{"id":"621000","name":"庆阳市","shortName":"庆阳","parentId":"620000","level":"2"},{"id":"621100","name":"定西市","shortName":"定西","parentId":"620000","level":"2"},{"id":"621200","name":"陇南市","shortName":"陇南","parentId":"620000","level":"2"},{"id":"622900","name":"临夏回族自治州","shortName":"临夏","parentId":"620000","level":"2"},{"id":"623000","name":"甘南藏族自治州","shortName":"甘南","parentId":"620000","level":"2"},{"id":"630000","name":"青海省","shortName":"青海","parentId":"100000","level":"1"},{"id":"630100","name":"西宁市","shortName":"西宁","parentId":"630000","level":"2"},{"id":"630200","name":"海东市","shortName":"海东","parentId":"630000","level":"2"},{"id":"632200","name":"海北藏族自治州","shortName":"海北","parentId":"630000","level":"2"},{"id":"632300","name":"黄南藏族自治州","shortName":"黄南","parentId":"630000","level":"2"},{"id":"632500","name":"海南藏族自治州","shortName":"海南","parentId":"630000","level":"2"},{"id":"632600","name":"果洛藏族自治州","shortName":"果洛","parentId":"630000","level":"2"},{"id":"632700","name":"玉树藏族自治州","shortName":"玉树","parentId":"630000","level":"2"},{"id":"632800","name":"海西蒙古族藏族自治州","shortName":"海西","parentId":"630000","level":"2"},{"id":"640000","name":"宁夏回族自治区","shortName":"宁夏","parentId":"100000","level":"1"},{"id":"640100","name":"银川市","shortName":"银川","parentId":"640000","level":"2"},{"id":"640200","name":"石嘴山市","shortName":"石嘴山","parentId":"640000","level":"2"},{"id":"640300","name":"吴忠市","shortName":"吴忠","parentId":"640000","level":"2"},{"id":"640400","name":"固原市","shortName":"固原","parentId":"640000","level":"2"},{"id":"640500","name":"中卫市","shortName":"中卫","parentId":"640000","level":"2"},{"id":"650000","name":"新疆维吾尔自治区","shortName":"新疆","parentId":"100000","level":"1"},{"id":"650100","name":"乌鲁木齐市","shortName":"乌鲁木齐","parentId":"650000","level":"2"},{"id":"650200","name":"克拉玛依市","shortName":"克拉玛依","parentId":"650000","level":"2"},{"id":"652100","name":"吐鲁番地区","shortName":"吐鲁番","parentId":"650000","level":"2"},{"id":"652200","name":"哈密地区","shortName":"哈密","parentId":"650000","level":"2"},{"id":"652300","name":"昌吉回族自治州","shortName":"昌吉","parentId":"650000","level":"2"},{"id":"652700","name":"博尔塔拉蒙古自治州","shortName":"博尔塔拉","parentId":"650000","level":"2"},{"id":"652800","name":"巴音郭楞蒙古自治州","shortName":"巴音郭楞","parentId":"650000","level":"2"},{"id":"652900","name":"阿克苏地区","shortName":"阿克苏","parentId":"650000","level":"2"},{"id":"653000","name":"克孜勒苏柯尔克孜自治州","shortName":"克孜勒苏","parentId":"650000","level":"2"},{"id":"653100","name":"喀什地区","shortName":"喀什","parentId":"650000","level":"2"},{"id":"653200","name":"和田地区","shortName":"和田","parentId":"650000","level":"2"},{"id":"654000","name":"伊犁哈萨克自治州","shortName":"伊犁","parentId":"650000","level":"2"},{"id":"654200","name":"塔城地区","shortName":"塔城","parentId":"650000","level":"2"},{"id":"654300","name":"阿勒泰地区","shortName":"阿勒泰","parentId":"650000","level":"2"},{"id":"659000","name":"直辖县级","shortName":"直辖县","parentId":"650000","level":"2"},{"id":"710000","name":"台湾省","shortName":"台湾","parentId":"100000","level":"1"},{"id":"710100","name":"台北市","shortName":"台北","parentId":"710000","level":"2"},{"id":"710200","name":"高雄市","shortName":"高雄","parentId":"710000","level":"2"},{"id":"710300","name":"基隆市","shortName":"基隆","parentId":"710000","level":"2"},{"id":"710400","name":"台中市","shortName":"台中","parentId":"710000","level":"2"},{"id":"710500","name":"台南市","shortName":"台南","parentId":"710000","level":"2"},{"id":"710600","name":"新竹市","shortName":"新竹","parentId":"710000","level":"2"},{"id":"710700","name":"嘉义市","shortName":"嘉义","parentId":"710000","level":"2"},{"id":"710800","name":"新北市","shortName":"新北","parentId":"710000","level":"2"},{"id":"712200","name":"宜兰县","shortName":"宜兰","parentId":"710000","level":"2"},{"id":"712300","name":"桃园县","shortName":"桃园","parentId":"710000","level":"2"},{"id":"712400","name":"新竹县","shortName":"新竹","parentId":"710000","level":"2"},{"id":"712500","name":"苗栗县","shortName":"苗栗","parentId":"710000","level":"2"},{"id":"712700","name":"彰化县","shortName":"彰化","parentId":"710000","level":"2"},{"id":"712800","name":"南投县","shortName":"南投","parentId":"710000","level":"2"},{"id":"712900","name":"云林县","shortName":"云林","parentId":"710000","level":"2"},{"id":"713000","name":"嘉义县","shortName":"嘉义","parentId":"710000","level":"2"},{"id":"713300","name":"屏东县","shortName":"屏东","parentId":"710000","level":"2"},{"id":"713400","name":"台东县","shortName":"台东","parentId":"710000","level":"2"},{"id":"713500","name":"花莲县","shortName":"花莲","parentId":"710000","level":"2"},{"id":"713600","name":"澎湖县","shortName":"澎湖","parentId":"710000","level":"2"},{"id":"713700","name":"金门县","shortName":"金门","parentId":"710000","level":"2"},{"id":"713800","name":"连江县","shortName":"连江","parentId":"710000","level":"2"},{"id":"810000","name":"香港特别行政区","shortName":"香港","parentId":"100000","level":"1"},{"id":"810100","name":"香港岛","shortName":"香港岛","parentId":"810000","level":"2"},{"id":"810200","name":"九龙","shortName":"九龙","parentId":"810000","level":"2"},{"id":"810300","name":"新界","shortName":"新界","parentId":"810000","level":"2"},{"id":"820000","name":"澳门特别行政区","shortName":"澳门","parentId":"100000","level":"1"},{"id":"820100","name":"澳门半岛","shortName":"澳门半岛","parentId":"820000","level":"2"},{"id":"820200","name":"氹仔岛","shortName":"氹仔岛","parentId":"820000","level":"2"},{"id":"820300","name":"路环岛","shortName":"路环岛","parentId":"820000","level":"2"}];
//借用上展的json转换器
;(function(){
    var data = [],data2 = [];
    cityData = JSON.stringify(cityData).replace(/\"id\":/g, "\"value\":");
	cityData=JSON.parse(cityData);
    for (var i = 0,length = cityData.length; i < length; i++) {
        if (cityData[i].parentId !== '100000') {
            data2.push(cityData[i]);
        }else{
            data.push(cityData[i]);
        }
    };
    $.each(data, function(index, val) {
        var parentId = val.value;
        var _val = val;
        _val.child = [];
        $.each(data2, function(index, val) {
            if (val.parentId === parentId) {
                _val.child.push(val);
            };
        });
    });
    window.dataJson = data;
})();

/**
 * mPicker 组件
 *
 * *** options ***
 *
 * @param {Str}                                 display    显示的方式，默认是显示在底部    'bottom'/'modal'
 * @param {Boolean}                             shadow     点击遮罩隐藏组件 - 默认为false;若为false，则禁止点击遮罩隐藏组件
 * @param {Number}                              level      显示的层级，默认：1
 * @param {Number}                              rows       picker显示的行数，默认：4
 * @param {Boolean}                             Linkage    选择联动 - 若为false，则不联动
 * @param {Array}                               dataJson   渲染picker的json - 有规定的格式，可查看json文件。不联动默认遍历获取第一个json
 * @param {Number}                              height     每一行的高度
 * @param {Boolean}                             idDefault  匹配默认值 - 若为false，则不匹配
 * @param {Str}                                 splitStr   设置分割value的符号，与默认值和显示在input里的值有关
 * @param {Boolean}                             isshort    是否开启简写，默认是关闭的
 * @param {Element selector}                    header     picker头部html
 *@param {function}                             confirm: function() {}
 *@param {function}                             cancel: function() {}
 *
 * *** 关于json格式 ***
 *jsonChange.js是针对campaign里的json做的格式转换
 *
 * *** 关于value值 ***
 *
 *$('.select-value').data('value1')：第一级的value值
 *$('.select-value').data('value2')：第二级的value值
 *
 *
 * *** methods ***
 *
 *  show                详情请查阅源码部分
 *  hide                详情请查阅源码部分
 *  updateData          详情请查阅源码部分
 *
 */
function __dealCssEvent(eventNameArr, callback) {
    var events = eventNameArr,
        i, dom = this; // jshint ignore:line

    function fireCallBack(e) {
        /*jshint validthis:true */
        if (e.target !== this) return;
        callback.call(this, e);
        for (i = 0; i < events.length; i++) {
            dom.off(events[i], fireCallBack);
        }
    }
    if (callback) {
        for (i = 0; i < events.length; i++) {
            dom.on(events[i], fireCallBack);
        }
    }
}

//动画结束事件兼容
$.fn.animationEnd = function(callback) {
    __dealCssEvent.call(this, ['webkitAnimationEnd', 'animationend'], callback);
    return this;
};
$.fn.transitionEnd = function(callback) {
    __dealCssEvent.call(this, ['webkitTransitionEnd', 'transitionend'], callback);
    return this;
};
$(function(){
    var mPickerDefaults = {
        display: 'bottom',
        shadow: false,
        level: 1,
        rows: 4,
        Linkage: false,
        dataJson: '',
        height: 36,
        idDefault: false,
        splitStr: ' ',
        isshort : false,
        header: '<div class="mPicker-header"></div>',
        footer: '<div class="mPicker-footer"><a href="javascript:;" class="mPicker-confirm">确定</a><a href="javascript:;" class="mPicker-cancel">取消</a></div>',
        confirm: function() {},
        cancel: function() {}
    };

    var moveStartLock;

    var ulWidth = ['100%', '50%'];

    var $body = $('body');

    var $mask=$('<div class="mPicker-mask hide"></div>');

    var $mPicker=$('<div class="mPicker hide"></div>');

    var lock,timeTouchend;
    /**
     * 添加mPicker容器
     */
    if (!$('.mPicker').length) {
        $body.append($mPicker);
        $mPicker.append($mask);
    }
    /**
     * 阻止默认滚动
     */
    $body.on('touchmove', function(event) {
        if (lock) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
    /**
     * 禁止滚动－－防止滚动选择时页面滚动
     */
    $body.on({
        touchstart: function(event) {
            event.preventDefault();
            lock = 1;
        },
        touchmove: function(event) {
            event.preventDefault();
            //兼容部分手机有时候没有触发touchend
            clearTimeout(timeTouchend);
            timeTouchend = setTimeout(function() {
                lock = 0;
            }, 100);
        },
        touchend: function(event) {
            event.preventDefault();
            lock = 0;
        }
    }, '.mPicker-main');

    function MPicker(ele,options){
        if (!ele.length) {
            return false;
        }
        this.container=ele;
        this.mpicker=$('.mPicker');
        this.mask=this.mpicker.find('.mPicker-mask');
        this.options = $.extend({}, mPickerDefaults, options);
        this.init();
        this.event();
        this.container.data('mPicker', this);

    }


    MPicker.prototype={
        //初始化MPicker
        init:function(ele,options){

            /**
             * 根据行数计算居中的位置
             */
            this.middleRowIndex=parseInt(this.options.rows / 2.5);
            //展示方式
            this.disy = this.options.display === 'bottom' ? 'mPicker-bottom down' : 'mPicker-modal';

            this.container.attr('readonly',true);
        },
        //初始化mpicker,根据json渲染html结构,添加遮罩，边框等
        render:function(){
            /**
             *  初始化mpicker,根据json渲染html结构
             *  添加遮罩，边框等
             */
            var listStr;
            var jsonData = [];
            var mainStr;
            var self=this;
            /**
             * 添加 mPicker-main元素
             */
            jsonData.push(self.options.dataJson);
            if (self.options.level === 2) {
                var childStr = getChildJson(self.options.dataJson[0]);
                jsonData.push(childStr);
            }
            listStr = concatHtmlList.call(self,jsonData);
            mainStr = '<div class="mPicker-main '+ self.disy +'" data-pickerId="' + self.pickerId + '">' + self.options.header + '<div class="mPicker-content">' + listStr + '</div><div class="mPicker-shadow"></div>' + self.options.footer + '</div>';
            self.mpicker.append(mainStr);
            /**
             * 设置变量
             */
            self.mpickerMain = self.mpicker.find('.mPicker-main');
            //元素集合
            var $content=self.mpickerMain.find('.mPicker-content');
            var $list=self.mpickerMain.find('.mPicker-list');
            var $listUl=$list.find('ul');
            //var $itemOne=$listUl.eq(0);
            //var $itemTwo=self.options.level === 2?$listUl.eq(1):false;
            //设置多列宽度
            self.options.level > 1 ?$list.width(ulWidth[self.options.level - 1]):false;

            //添加选中的边框
            $list.append('<div class="mPicker-active-box"></div>');
            $list.find('.mPicker-active-box').height(self.options.height);
            /**
             * 设置选中的边框位置
             */
            var activeBoxMarginTop = self.options.rows % 2 === 0 ? -self.options.height - 2 + 'px' : -self.options.height * 0.5 - 2 + 'px';

            $content.find('.mPicker-active-box').css({
                'margin-top': activeBoxMarginTop
            });
            /**
             * 设置内容高度
             */
            $content.height(self.options.height * self.options.rows);
            $list.height(self.options.height * self.options.rows);

        },
        showPicker:function(){
            var self=this;
            self.mpicker.data('object',self);
            //元素集合
            //var $content=this.mpickerMain.find('.mPicker-content');

            //var $listUl=$list.find('ul');
            // var $itemOne=$listUl.eq(0);
            // var $itemTwo=this.options.level === 2?$listUl.eq(1):false;
            self.render();
            var $list=self.mpicker.find('.mPicker-list');
            self.container.focus();
            self.container.blur();
            self.mpicker.removeClass('hide');
            self.mask.removeClass('hide');

            clearTimeout(self.timer);
            self.timer=setTimeout(function() {
                self.mpickerMain.removeClass('down');
            }, 10);
            /**
             * 显示默认值(判断点击确定选择后不再获取默认值)
             */
            if (!self.noFirst && self.options.idDefault) {
                matchDefaultData.call(self);
            }
            /**
             * 获取input的data-id显示选中的元素
             */
            var id = [];
            setTransitionY(self.container, 0);
            $list.each(function(index, ele) {
                var dataVal = self.container.data('id' + (index + 1)) ? self.container.data('id' + (index + 1)) : 0;
                id.push(dataVal);
            });
            //获得选中的元素
            setItemMultiple.call(self,id);
        },
        hidePicker:function(callback){
            var self=this;
            self.mask.addClass('hide');

            if(self.options.display === 'bottom'){
                self.mpicker.find('.mPicker-main').addClass('down').transitionEnd(function() {
                    self.mpicker.addClass('hide');
                    self.mpicker.find('.mPicker-main').remove();
                    if (typeof(callback) === 'function') {
                        callback.call(self);
                    }
                });
                return false;
            }

            self.mpicker.addClass('hide');
            callback.call(self);
            self.mpicker.find('.mPicker-main').remove();
        },
        updateData:function(data){
            var self=this;
            if (!data.length) {
                return;
            }
            self.noFirst = false;
            for (var i = 0; i < self.options.level; i++) {
                self.container.data('id' + (i + 1), 0);
                self.container.data('value' + (i + 1), '');
            }
            self.options.dataJson = data;
            self.mpicker.find('.mPicker-main').remove();
        },
        confirm:function(){
            var self=this;
            var str = '';
            var $list=self.mpicker.find('.mPicker-main').find('.mPicker-list');
            var $listUl=$list.find('ul');
            self.noFirst = true;
            $.each($listUl, function(index, ele) {
                var $active = $(ele).find('.active');
                var splitStr = index === 0 ? '' : self.options.splitStr;
                if ($active.length > 0) {
                    index = index + 1;
                    self.container.data('value' + index, $active.data('value'));
                    self.container.data('id' + index, $active.data('id'));
                    str += splitStr + $active.text();
                }
            });
            self.container.val(str);
            self.hidePicker(self.options.confirm);

        },
        cancel:function(){
            var self=this;
            self.hidePicker(self.options.cancel);
        },
         /**
         *  事件
         *  取消，确定，点击遮罩，列表滑动事件
         */
        event : function() {
            /**
             * 点击打开选择
             */
            var self=this;
            this.container.off('touchstart.container click.container').on('touchstart.container click.container', function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.showPicker();
            });
            //点击确定
            this.mpicker.off('touchstart.confirm click.confirm').on('touchstart.confirm click.confirm','.mPicker-confirm', function(e) {
                e.preventDefault();
                var self=$('.mPicker').data('object');
                self.confirm();
            });

            //点击取消
            this.mpicker.off('touchstart.cancel click.cancel').on('touchstart.cancel click.cancel','.mPicker-cancel', function(e) {
                e.preventDefault();
                var self=$('.mPicker').data('object');
                self.cancel();
            });

            //点击遮罩取消
            this.mpicker.off('touchstart.mask click.mask').on('touchstart.mask click.mask','.mPicker-mask', function(e) {
                e.preventDefault();
                var self=$('.mPicker').data('object');
                if(self.options.shadow){
                    self.cancel();
                }
            });

            //遍历下拉列表
            var startY;
            var curY;
            var moveY;


            this.mpicker.off('touchstart.list mousedown.list').on('touchstart.list mousedown.list','.mPicker-list', function(event) {
                fnTouches(event);

                var $this = $(this).find('ul');

                var tranY = getTranslateY($this);

                startY = getTouches(event).y - tranY;

                changeTime(0, $this);

                moveStartLock=true;
            });

            this.mpicker.off('touchmove.list mousemove.list').on('touchmove.list mousemove.list', '.mPicker-list',function(event) {
                event.preventDefault();
                if(!moveStartLock){
                    return false;
                }
                var self=$('.mPicker').data('object');

                fnTouches(event);

                var translate;

                var $this = $(this).find('ul');

                var listHeight = $this.height();

                var itemHeight = self.options.height * self.options.rows;

                var transMaxY = itemHeight - listHeight - parseInt(self.options.rows / 2) * self.options.height;

                var transMinY = self.middleRowIndex * self.options.height;

                curY = getTouches(event).y;

                moveY = curY - startY;

                translate = Math.round(moveY);
                //过了
                translate = translate > transMinY ? transMinY : translate;
                translate = translate < transMaxY ? transMaxY : translate;
                // console.info(self.options.rows)
                setTransitionY($this, translate);
                //兼容部分手机有时候没有触发touchend
                clearTimeout(self.timeTouchend);
                self.timeTouchend = setTimeout(function() {
                    touchEndFn.call(self,$this);
                }, 100);
            });

            this.mpicker.off('touchend.list mouseup.list').on('touchend.list mouseup.list', '.mPicker-list',function(event) {
                event.preventDefault();
                var self=$('.mPicker').data('object');
                var $this = $(this).find('ul');
                touchEndFn.call(self,$this);

            });
        }
    }
    function getTouches(event) {
        if (event.touches !== undefined) {
            return {
                x : event.touches[0].pageX,
                y : event.touches[0].pageY
            };
        }

        if (event.touches === undefined) {
            if (event.pageX !== undefined) {
                return {
                    x : event.pageX,
                    y : event.pageY
                };
            }
            if (event.pageX === undefined) {
                return {
                    x : event.clientX,
                    y : event.clientY
                };
            }
        }
    }


    /**
     *  滑动结束执行函数
     *  ele:对应的list==>ul
     *  如果是联动，则更新相应的list html
     */
    function touchEndFn(ele) {
        clearTimeout(this.timeTouchend);
        var result = setActiveItem.call(this,ele);

        var resultId = result.target.data('id');

        var itemIndex = this.mpicker.find('.mPicker-list ul').index(ele);
        // this.lock=0;
        //点第一个联动
        if (this.options.Linkage && itemIndex === 0) {
            refreshItemTwo.call(this,resultId);
        }
        //回调函数
        // callbackFnName[itemIndex].call(ele, result);

        changeTime(400, ele);

        moveStartLock=false;
    }

    /**
     *  第一次打开匹配默认值
     */
    function matchDefaultData() {
        var self=this;
        var inputVal = this.container.val().split(this.options.splitStr);
        var defaultId = [];
        var defaultValue = [];
        var dataLevel2;
        var hasLevel2;
        //遍历获取id
        var nameEach = function(data, index) {
            $.each(data, function(key, val) {
                if (val.name == inputVal[index]) {
                    defaultId[index] = key;
                    defaultValue[index] = val.value;
                    self.container.data('value' + (index + 1), defaultValue[index]);
                    self.container.data('id' + (index + 1), defaultId[index]);
                    return false;
                }
            });
        };
        if (typeof(inputVal) !== 'object' || !inputVal.length || !self.mpicker.find('.mPicker-main')) {
            return;
        }

        //将name值默认匹配成id，一旦匹配就跳出循环，多个匹配取第一个
        //匹配一级
        nameEach(this.options.dataJson, 0);
        //匹配二级
        dataLevel2 = this.options.Linkage ? this.options.dataJson[defaultId[0]] : this.options.dataJson[0];

        if (this.options.Linkage && this.options.level === 2 && defaultId[0] && inputVal.length > 1) {
            hasLevel2 = 1;
        }

        if (!this.options.Linkage && this.options.level === 2 && inputVal.length > 1) {
            hasLevel2 = 1;
        }

        if (hasLevel2) {
            dataLevel2 = getChildJson(dataLevel2);
            nameEach(dataLevel2, 1);
        }

    }
    /**
     *  滑动结束，设置transtion值，返回当前选中的li index和元素
     *  obj:滑动的元素
     *  val:可有可没有。可传入data-id或不传
     */
    function setActiveItem(obj, val) {
        var result;
        var y = Math.round((getTranslateY(obj) / this.options.height));
        //得到选中的index
        var index = typeof(val) === 'number' ? obj.find('li').index(obj.find('li[data-id="' + val + '"]')) : this.middleRowIndex - y;

        var y2 = -this.options.height * (index - this.middleRowIndex);
        setTransitionY(obj, y2);
        //添加选中样式
        obj.find('li').eq(index).addClass('active').siblings('li').removeClass('active');

        result = {
            target: obj.find('li').eq(index),
            index: index
        };
        return result;
    }
    /**
     *  传入第一级index，更新第二级html（联动的情况下）
     */
    function refreshItemTwo(index) {
        //兼容不存在child
        var $itemTwo=this.mpicker.find('.mPicker-list ul').eq(1);
        var data = getChildJson(this.options.dataJson[index]);
        if (this.options.level === 2) {
            var str = concatHtmlItem.call(this,data);
            $itemTwo.html(str);
            setActiveItem.call(this,$itemTwo, 0);
        }
    }
    /**
     *  传入数组，设置多级html
     *  index:数组
     */
    function setItemMultiple(index) {
        var $item=this.mpicker.find('.mPicker-list ul');
        var index1 = index[0] ? index[0] : 0;
        var index2 = index[1] ? index[1] : 0;

        if (this.options.Linkage) {
            refreshItemTwo.call(this,index1);
        }
        setActiveItem.call(this,$item.eq(0), index1);

        if (this.options.level === 2) {
            setActiveItem.call(this,$item.eq(1), index2);
        }
    }

    /**
     *  传入json,判断返回json,child
     *  兼容不存在child报错的情况
     */
    function getChildJson(data) {
        if (!data) {
            return [];
        }
        var result = ({}).hasOwnProperty.call(data, 'child') ? data.child : [];
        return result;
    }
    /**
     *  传入json拼接html，只有li级别
     */
    function concatHtmlItem(data) {
        var str = '';
        var self=this;
        $.each(data, function(index, val) {
            var name = self.options.isshort ? val.shortName : val.name;
            str += '<li data-value="' + val.value + '" data-id="' + index + '">' + name + '</li>';
        });
        return str;
    }
    /**
     *  传入li html 拼接ul
     */
    function concatHtmlList(data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            var itemStr = concatHtmlItem.call(this,data[i]);
            html += '<div class="mPicker-list"><ul>' + itemStr + '</ul></div>';
        }
        return html;
    }
    /**
     *  设置运动时间
     */
    function changeTime(times, obj) {
        obj.css({
            '-webkit-transition-duration': times + 'ms',
            'transition-duration': times + 'ms'
        });
    }
    /**
     *  touches兼容
     */
    function fnTouches(e) {
        if (!e.touches) {
            e.touches = e.originalEvent.touches;
        }
    }
    /**
     *  设置translateY
     */
    function setTransitionY(obj, y) {
        obj.css({
            "-webkit-transform": 'translateY(' + y + 'px)',
            transform: 'translateY(' + y + 'px)'
        });
    }
    /**
     *  获取translateY
     */
    function getTranslateY(obj) {
        var transZRegex = /\.*translateY\((.*)px\)/i;
        var result;
        if (obj[0].style.WebkitTransform) {
            result = parseInt(transZRegex.exec(obj[0].style.WebkitTransform)[1]);
        } else if (obj[0].style.transform) {
            result = parseInt(transZRegex.exec(obj[0].style.transforms)[1]);
        }
        return result;
    }

     $.fn.mPicker = function(options) {
       return this.each(function () {
            new MPicker($(this), options);
        });
    };

}());

/**
         * 联动的picker
         * 两级
         */
        $('.select-value').mPicker({
            level:2,
            dataJson:dataJson,
            Linkage:true,
            rows:6,
            idDefault:true,
            splitStr:'-',
            header:'<div class="mPicker-header">两级联动选择插件</div>',
            confirm:function(){
                //更新json
                this.container.data('mPicker').updateData(level3);
                //console.info($('.select-value').data('value1')+'-'+$('.select-value').data('value2'));
            },
            cancel:function(){
                //console.info($('.select-value').data('value1')+'-'+$('.select-value').data('value2'));
            }
        })
        // var method= $('.select-value').data('mPicker');
        // console.info(method)
        // method.showPicker();
        // method.hide(function(){
        //     console.info(this)
        // });

        /**
         * 不联动的picker
         * 两级
         */
        var method2=$('.select-value2').mPicker({
            level:2,
            dataJson:level3,
            rows:5,
            Linkage:false,
            header:'<div class="mPicker-header">非联动选择插件</div>',
            idDefault:true,
            confirm:function(){
                //console.info($('.select-value2').data('id1')+'-'+$('.select-value2').data('id2')+'-'+$('.select-value2').data('id3'));
            }
        })

        /**
         * 一级
         */
        var method3=$('.select-value3').mPicker({
            level:1,
            dataJson:dataJson,
            Linkage:false,
            rows:6,
            idDefault:true,
            header:'<div class="mPicker-header">单级选择</div>',
            confirm:function(){
                //console.info($('.select-value3').data('id1'));
            },
            cancel:function(){
                //console.info($('.select-value3').data('id1'));
            }
        })