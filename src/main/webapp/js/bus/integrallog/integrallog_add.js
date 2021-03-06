var id = T.p("id");
var vm = new Vue({
	el:'#rrapp',
	data:{
		title:"新增",
		integralLog:{}
	},
	created: function() {
		if(id != null){
			this.title = "修改";
			this.getInfo(id)
		}
    },
	methods: {
		getInfo: function(id){
			$.get("../integrallog/info/"+id, function(r){
                vm.integralLog = r.integralLog;
            });
		},
		saveOrUpdate: function (event) {
			var url = vm.integralLog.id == null ? "../integrallog/save" : "../integrallog/update";
			$.ajax({
				type: "POST",
			    url: url,
			    data: JSON.stringify(vm.integralLog),
			    success: function(r){
			    	if(r.code === 0){
						alert('操作成功', function(index){
							vm.back();
						});
					}else{
						alert(r.msg);
					}
				}
			});
		},
		back: function (event) {
			history.go(-1);
		}
	}
});