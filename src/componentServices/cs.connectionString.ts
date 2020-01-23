
import {ComponentContextInitializeObjects} from './index';
import {DataServiceBaseFile} from '../dataServicesServices/index';
export class ComponentContextConnectionString{

    private static dept;

    public static setLibraryAndEndPoint(departmentDetails){

        this.dept=ComponentContextInitializeObjects.initializeDepartmentDetails();
        this.dept.sitePath=departmentDetails.SitePath==null || departmentDetails.SitePath==undefined ?"":departmentDetails.SitePath;

        this.dept.endPoint= this.dept.sitePath != "" ?  DataServiceBaseFile.returnSiteServerObsoleteUrl() +"/" + 
            this.dept.sitePath:DataServiceBaseFile.returnSiteServerObsoleteUrl();
        this.dept.library=departmentDetails.LibraryName;
        this.dept.libraryInternalName=departmentDetails.LibraryInternalName;

        this.dept.permissionDocumentList=departmentDetails.TeamPermissionDocumentList;
        this.dept.permissionMetaTagsList=departmentDetails.TeamPermissionMetaTagsList;

        this.dept.deletedPermissionMetaTagsList=departmentDetails.DeletedPermissionMetaTags;
        this.dept.deletedPermissionPeopleList=departmentDetails.DeletedPermissionPeople;
        this.dept.deletedPermissionDocuments=departmentDetails.DeletedPermissionDocuments;

        this.dept.permissionPeopleList=departmentDetails.TeamPermissionPeopleList;

        this.dept.teamFolderStructure=departmentDetails.TeamFolderStructure;
        this.dept.teamAdmin=departmentDetails.TeamAdmin;
        this.dept.deletedLibrary=departmentDetails.DeletedLibrary;

        if(this.dept.sitePath != ""){
            if(DataServiceBaseFile.returnSiteServerRelativeUrl()=="/"){
                this.dept.relativeEndPoint=DataServiceBaseFile.returnSiteServerRelativeUrl() + this.dept.sitePath;
                this.dept.relativeUrl='';
            }else{
                this.dept.relativeEndPoint=DataServiceBaseFile.returnSiteServerRelativeUrl() +"/" + this.dept.sitePath;
                this.dept.relativeUrl=DataServiceBaseFile.returnSiteServerRelativeUrl();
            }
        }else{

            if( DataServiceBaseFile.returnSiteServerRelativeUrl()=="/"){
                this.dept.relativeEndPoint=DataServiceBaseFile.returnSiteServerRelativeUrl(); 
                this.dept.relativeUrl='';
            }else{
                this.dept.relativeEndPoint=DataServiceBaseFile.returnSiteServerRelativeUrl();
                this.dept.relativeUrl=DataServiceBaseFile.returnSiteServerRelativeUrl();
            }
        }

        return this.dept;
    }

}