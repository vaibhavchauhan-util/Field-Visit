({
	helperMethod : function(component ,event ,helper,MonthName,year) {
        debugger;
        var action = component.get('c.getMonthlyRecord');
        action.setParams({ 
            month:MonthName,
            year:year
        });
        action.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS"){
                var data = response.getReturnValue();
                if(data !=null && data.length >0){
                    var resultdata = data;
                    component.set("v.dataList",resultdata);
                    // alert(JSON.stringify(data.dayVisitPlanList)) 
                }else{
                    component.set('v.dataList', []);
                }
            }
        });
        $A.enqueueAction(action);
		
	}
})