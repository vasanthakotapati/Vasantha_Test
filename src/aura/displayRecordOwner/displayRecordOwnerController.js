({
	doInit : function(component, event, helper) {
        var action = component.get("c.getRecordDetails");
        action.setParams({
                ownerid: component.get("v.recordId"),
            objname: component.get("v.sObjectName"),
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var res = response.getReturnValue();
                component.set('v.objUser', res);
            }
            else if (state === "INCOMPLETE") {
               console.log("Something is wrong"); 
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);	
    },
})