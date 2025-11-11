// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// listItem - sap.m.ListItemBase
// srcControl - sap.ui.core.Control
// 
const oItem = oEvent.getParameter("listItem");
const oContext = oItem.getBindingContext();
const oData = oContext.getObject();
goToPlantDetails(oData)