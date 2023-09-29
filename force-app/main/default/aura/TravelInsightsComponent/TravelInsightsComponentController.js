({
    init: function(component, event, helper) {
        debugger;
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth();
        let MonthName=monthNames[date.getMonth()];
        var action = component.get('c.getMonthBeatPlan');
        action.setParams({ 
            month:MonthName,
            year:year
        });
         action.setCallback(this, function(response) {
             if(response.getState() === "SUCCESS"){
                 var data = response.getReturnValue();
                 if(data !=null){
                     component.set("v.MonthlyBeatPlanDataList",data);
                      component.set("v.userName",data.Sales_User__r.Name);
                 }
             }
        
        });
           $A.enqueueAction(action);

    }    
  
})