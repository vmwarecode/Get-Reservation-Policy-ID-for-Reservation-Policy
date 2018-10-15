// VMware vRealize Orchestrator action sample
//
// Get Reservation Policy ID for Reservation Policy.
// 
// For vRO/VRA 7.0+
//
// Action Inputs:
// reservationPolicyName - string - Reservation Policy Name
// host - vCAC:VCACHost - vRA IaaS Host
// Selva Jaganathan VMware Inc.
// Return type: string - the ID of the Reservation Policy

var model = "ManagementModelEntities.svc";
var entitySetName = "HostReservationPolicies";
var property = new Properties();

property.put("name", reservationPolicyName);

//Fetch all the reservation policies in the specified IaaS target from the model manager database
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, model, entitySetName, property, null);

if(entities.length == 1)
{
	System.log(entities[0].getProperty("id"));
	return entities[0].getProperty("id");
}
else
{
	throw "A specific or unique reservation policy could not be found";
}