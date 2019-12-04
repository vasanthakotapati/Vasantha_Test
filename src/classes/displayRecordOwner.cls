public class displayRecordOwner {

   @AuraEnabled public static sobject getRecordDetails(ID ownerid,string objname){
       
       string query = 'select id , name,owner.name,owner.smallPhotourl from '+objname+' where id='+'\''+ownerid+'\'';
      
           return database.query(query);
               
    }
}