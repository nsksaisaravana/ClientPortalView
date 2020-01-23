import { DepartmentConfiguration } from "../config";

export class ComponentContextInitializeObjects{

    public static initializePublicDocuments() {
        var publicDocuments = {
            'Title': '',
            'thirdDropdownSelectedValue': '',
            'DocDescription': '',
            'DocPath': '',
            'ModifiedUsers':'',
            'DocFileType':'',
            'DocTeam':'',
            'firstDropdownSelectedValue':'',
            'fourthDropdownSelectedValue':'',
            // 23/08 jiyang
            'fifthDropdownSelectedValue':'',
            'secondDropdownSelectedValue':'',
            'DocExtension':'',
            'TeamDocumentSecuredUsers':'',
            'IsTeamDocumentSecured':false,
            'IsUserSecured':false,
            'IsMetaTagSecured':false,
        };
        return publicDocuments;
    }


    public static initializePeoplePickerItem() {
        var peoplePickerItem = {
            'loginName': '',
            'id': '',
            'isGroup':false,
            'isRead':false,
            'isEdit':false,
        };
        return peoplePickerItem;
    }
    
    public static initializeListItem() {
        var peoplePickerItem = {
              'id': 0,
              'path':''
        };
        return peoplePickerItem;
    }
    
    public static initializeSystemPeoplePickerItems() {
        var peoplePickerItem = {
            'color': 'blue',
            'id': '',
            'initials': '',
            'presence':'available',
            'primaryText':'',
            'secondaryText':''

        };
        return peoplePickerItem;
    }

    public static initializeUploadFiles(){
        var uploadFiles={
            'name':'',
            'ticked':true,
            'item':null,
            'itemKey':'',
            'key':'',
            'text':''
        };
        return uploadFiles;
    }

    public static returnSearchItem(){
        var searchItem ={
            "dropdownId1":'',
            "dropdownvalue1":'',
            "dropdownGuid1":'',
            "dropdownId2":'',
            "dropdownvalue2":'',
            "dropdownGuid2":'',
            "teamId":'',
            "teamValue":'',
            "teamGuid":'',
            "dropdownId3":'',
            "dropdownvalue3":'',
            "dropdownGuid3":'',
            "dropdownId4":'',
            "dropdownvalue4":'',
            "dropdownGuid4":'',
            // 23/08 jiyang
            "dropdownvalue5":'',
            "fileType":'',
            "docName":'',
            "modifiedTime":new Date(),
            "id":0,
            "path":'',
            "fileRef":'',
            "serverRedirectUrl":'',
            "teamLibraryName":'',
            "isTeamDocumentSecured":false,
            "teamDocumentSecuredUsers":'',
            "isMetaTagSecured":false,
            "isUserSecured":false,
            "title":'',
            "originalPath":'',
            "createdBy":''
        };
        return searchItem;
    }

    public static returnSearchItemForPeople(){
        var searchItem ={
            "teamPeople":'',
            "teamEmailId":'',
            "teamPeopleFullName":'',
            "teamIsEdit":false,
            "teamIsEditPermission":false,
            "teamIsRead":false,
            "teamIsPeopleGroup":'',
            "teamLoginName":'',
            "teamLoginId":'',
            "modifiedTime":new Date(),
            "id":0,
        };
        return searchItem;
    }

    public static returnKQLQueryExp(){
        var kqlQueryExp ={
            "property":'',
            "operation":'',
            "value":'',
            "operand":''
        };
        return kqlQueryExp;
    }

    public static returnTotalCount(){
        var totalCount ={
            "totalSearchRecordCount":0,
            "totalSearchAvailableCount":0,
            "totalPages":0,
        };
        return totalCount;
    }
    
    public static returnBlankDropDownObject(){
        var blankObject={
            Guid:'Blank Guid',
            Id:'0',
            Name:'Select...',
            Parent:null,
            ParentId:'Blank Parent Id',
            PathOfTerm:'',
            TermsCount:1
        };
        return blankObject;
    }

    public static returnUploadBlankDropDownObject(){
        var blankObject=["Test","Test1"];
        return blankObject;
    }

    public static returnAdvanceSearchData(){
        var advanceSearch={
            user:'',
            date:''
        };

        return advanceSearch;
    }

    public static returnPeoplePermissionDetails(){
        var peoplePermission={
            id:0,
            peopleFullName:'',
            peopleEmail:'',
            isRead:false,
            isEdit:false,
            canEditPermission:false
        };

        return peoplePermission;
    }

    public static initializeDepartmentDetails(){
        var dept={
            sitePath:'',
            endPoint:'',
            library:'',
            libraryInternalName:'',
            relativeEndPoint:'',
            relativeUrl:'',
            permissionDocumentList:'',
            permissionMetaTagsList:'',
            deletedPermissionMetaTagsList:'',
            permissionPeopleList:'',
            deletedPermissionPeopleList:'',
            deletedPermissionDocuments:'',
            teamAdmin:'',
            teamFolderStructure:''
        };
        return dept;
    }
/*
    public static loadDataByDepartment(dept){
        switch(dept) {
            case 'IT':
                loadITRelatedDropDown(cContextDepartmentConfiguration.returnFirstDepartmentValues());
                //$filter('filter')(vm.searchData, { isValidDocNumber: '!No'}, true);
                vm.teamUpload.DocTeam=$filter('filter')(vm.taxonyTeams, { Guid: cContextDepartmentConfiguration.returnDepartments()[0].guid}, true)[0]; 
                break;
            case 'PC':
                loadPeopleAndCultureRelatedDropDown(cContextDepartmentConfiguration.returnDepartmentPC());
                vm.teamUpload.DocTeam=$filter('filter')(vm.taxonyTeams, {Guid: cContextDepartmentConfiguration.returnDepartments()[2].guid}, true)[0]; 
                break;
            case 'Payroll':
                loadPayrollRelatedDown(cContextDepartmentConfiguration.returnDepartmentPayroll());
                vm.teamUpload.DocTeam=$filter('filter')(vm.taxonyTeams, { Guid: cContextDepartmentConfiguration.returnDepartments()[1].guid}, true)[0]; 
                break;
            case 'WHS':
                loadWHSRelatedDropDown(cContextDepartmentConfiguration.returnDepartmentWHS());
                vm.teamUpload.DocTeam=$filter('filter')(vm.taxonyTeams, { Guid: cContextDepartmentConfiguration.returnDepartments()[4].guid}, true)[0]; 
                break;
            case 'Public':
                loadWHSRelatedDropDown(cContextDepartmentConfiguration.returnDepartmentWHS());
                vm.teamUpload.DocTeam=$filter('filter')(vm.taxonyTeams, {Guid: cContextDepartmentConfiguration.returnDepartments()[3].guid}, true)[0]; 
                break;
            default:
                console.log("No dept found")
                break;
        }
    }

    public static returnDeptSourceId(dept){
        switch(dept) {
            case cContextDepartmentConfiguration.returnFirstDepartment():
                return cContextDepartmentConfiguration.returnFirstDepartmentValues()[3].parentId;
                break;
            case cContextDepartmentConfiguration.returnSecondDepartment():
                return cContextDepartmentConfiguration.returnSecondDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnThirdDepartment():
                return cContextDepartmentConfiguration.returnThirdDepartmentValues()[3].parentId;
                break;
            case cContextDepartmentConfiguration.returnFourthDepartment():
                return cContextDepartmentConfiguration.returnFourthDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnFifthDepartment():
                return cContextDepartmentConfiguration.returnFifthDepartmentValues()[3].parentId;
                break;
            case cContextDepartmentConfiguration.returnSixthDepartment():
                return cContextDepartmentConfiguration.returnSixthDepartmentValues()[3].parentId;
                break;
            case cContextDepartmentConfiguration.returnSeventhDepartment():
                return cContextDepartmentConfiguration.returnSeventhDepartmentValues()[3].parentId;
                break;
            case cContextDepartmentConfiguration.returnEigthDepartment():
                return cContextDepartmentConfiguration.returnEigthDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnSearchAllDepartment():
                return cContextDepartmentConfiguration.returnAllDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnTestDepartment():
                return cContextDepartmentConfiguration.returnTestDepartmentValues()[3].parentId;
                break;
            default:
                console.log("No dept found");
                break;
        }
    }

    public static returnMetaTagPermissionSourceId(dept){
        switch(dept) {
            case cContextDepartmentConfiguration.returnFirstDepartment():
                return cContextDepartmentConfiguration.returnFirstDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnSecondDepartment():
                return cContextDepartmentConfiguration.returnSecondDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnThirdDepartment():
                return cContextDepartmentConfiguration.returnThirdDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnFourthDepartment():
                return cContextDepartmentConfiguration.returnFourthDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnFifthDepartment():
                return cContextDepartmentConfiguration.returnFifthDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnSixthDepartment():
                return cContextDepartmentConfiguration.returnSixthDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnSeventhDepartment():
                return cContextDepartmentConfiguration.returnSeventhDepartmentValues()[4].parentId;
                break;
            case cContextDepartmentConfiguration.returnEigthDepartment():
                return cContextDepartmentConfiguration.returnEigthDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnTestDepartment():
                return cContextDepartmentConfiguration.returnTestDepartmentValues()[4].parentId;
                break;
            default:
                console.log("No dept found")
                break;
        }
    }

    public static returnPeoplePermissionSecureSoureId(dept){
        switch(dept) {
            case cContextDepartmentConfiguration.returnFirstDepartment():
                return cContextDepartmentConfiguration.returnFirstDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnSecondDepartment():
                return cContextDepartmentConfiguration.returnSecondDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnThirdDepartment():
                return cContextDepartmentConfiguration.returnThirdDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnFourthDepartment():
                return cContextDepartmentConfiguration.returnFourthDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnFifthDepartment():
                return cContextDepartmentConfiguration.returnFifthDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnSixthDepartment():
                return cContextDepartmentConfiguration.returnSixthDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnSeventhDepartment():
                return cContextDepartmentConfiguration.returnSeventhDepartmentValues()[5].parentId;
                break;
            case cContextDepartmentConfiguration.returnEigthDepartment():
                return cContextDepartmentConfiguration.returnEigthDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnTestDepartment():
                return cContextDepartmentConfiguration.returnTestDepartmentValues()[5].parentId;
                break;
            default:
                console.log("No dept found")
                break;
        }
    }

    public static returnDocumentPermissionSecureSoureId(dept){
        switch(dept) {
            case cContextDepartmentConfiguration.returnFirstDepartment():
                return cContextDepartmentConfiguration.returnFirstDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnSecondDepartment():
                return cContextDepartmentConfiguration.returnSecondDepartmentValues()[7].parentId;
                break;
            case cContextDepartmentConfiguration.returnThirdDepartment():
                return cContextDepartmentConfiguration.returnThirdDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnFourthDepartment():
                return cContextDepartmentConfiguration.returnFourthDepartmentValues()[7].parentId;
                break;
            case cContextDepartmentConfiguration.returnFifthDepartment():
                return cContextDepartmentConfiguration.returnFifthDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnSixthDepartment():
                return cContextDepartmentConfiguration.returnSixthDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnSeventhDepartment():
                return cContextDepartmentConfiguration.returnSeventhDepartmentValues()[6].parentId;
                break;
            case cContextDepartmentConfiguration.returnEigthDepartment():
                return cContextDepartmentConfiguration.returnEigthDepartmentValues()[7].parentId;
                break;
            case cContextDepartmentConfiguration.returnTestDepartment():
                return cContextDepartmentConfiguration.returnTestDepartmentValues()[6].parentId;
                break;
            default:
                console.log("No dept found")
                break;
        }
    }

    public static returnDropDownArrayValues(dropDownValues){
        var dropDownValuesArray;
        var arrayString;
        dropDownValuesArray=dropDownValues.split(";");
        angular.forEach(dropDownValuesArray,public static(item,index){
            if(index==0){
                arrayString='['
            }else{
                arrayString+=','
            }
            arrayString+='"' + item +'"'
        })
        arrayString+=']'

        return arrayString=JSON.parse(arrayString);

    }*/

    public static returnNextSetOfStatusByCurrentStatus(currentStatus){
        switch(currentStatus){
            case "Draft":
                return DepartmentConfiguration.returnDraftNextStatus();
            case "Completed":
                return DepartmentConfiguration.returnCompletedNextStatus();
            case "Authorized":
                return DepartmentConfiguration.returnAuthorisedNextStatus();
            case "Reviewed":
                return DepartmentConfiguration.returnReviewedNextStatus();
            case "Issued":
                return DepartmentConfiguration.returnIssuedNextStatus();
            case "UnApproved":
                return DepartmentConfiguration.returnUnApprovedNextStatus();
            case "Revised":
                return DepartmentConfiguration.returnReviseNextStatus();
            case "Withdrawn/Obsolete":
                return DepartmentConfiguration.returnWithDrawNextStatus();
            default:
                return DepartmentConfiguration.returnNewDocStatus();
        }
    }

}