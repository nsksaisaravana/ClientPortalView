

export class DepartmentConfiguration{

    public static returnManagedMetaDataDropDowns(){
        var managedMetaDataDropdowns=[
            {
                "TermStoreName":"Taxonomy_RRn3SNlRLoo7de5to8nT4w==",
                "TermSetId":"599821d6-2b87-465b-b457-6febb4c3f00e",
                "DocTypeValue":"e7d5fb69-6d51-41e8-aee8-ec456be9c4c1",
                "Department":"Group Head",
                "TermSetKeyWord":"4d180b52-4c4b-4c7a-bb90-4270f851ccab",
            }
        ];

        return managedMetaDataDropdowns;
    }

    public static returnDigitalLibraryDetails(){
        var details=[
            {
                "Title":"DigitalLibrary",
                "ParentId":"DigitalLibrary",
                "IsEnabled":"Yes",
                "LibraryName":"DigitalLibrary",
                "DeletedLibrary":"DigitalHelpLibrary",
                "LibraryInternalName":"DigitalLibrary",
                "SearchSourceId":"ee077974-6948-4da5-aa96-6ba7a0002232"
            }
        ];
        return details;
    }

    public static returnDeptDefaultValues(deptName){
        switch(deptName){
            case this.returnFirstDepartment():
                return this.firstDeptDropdownDefaultValues();
                break;
            case this.returnSecondDepartment():
                return this.secondDeptDropdownDefaultValues();
                break;
            case this.returnThirdDepartment():
                return this.thirdDeptDropdownDefaultValues();
                break;
        }
    }

    

    public static returnFirstDepartment(){
        return 'DigitalLibrary';
    }

    public static returnSecondDepartment(){
        return 'Quality Framework';
    }

    public static returnThirdDepartment(){
        return 'Resources';
    }

    public static returnFourthDepartment(){
        return 'Events';
    }

    public static returnFifthDepartment(){
        return 'HCD';
    }

    public static returnSixthDepartment(){
        return 'Marketing and Comms';
    }

    public static returnSeventhDepartment(){
        return 'Platforms';
    }

    public static returnEigthDepartment(){
        return 'Research and Insights';
    }

    public static returnSearchAllDepartment(){
        return 'All';
    }

    public static returnTestDepartment(){
        return 'Test';
    }


    public static returnPublicDepartment(){
        return 'Public';
    }

    public static returnFifthDropDownDefaultValue(){
        return 'Classification';
    }

    //Documents
    public static firstDeptDropdownDefaultValues(){
        var defaultValues=[
            {"name":"Content Type","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":true},
            {"name":"Client Name","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":true},
            {"name":"File Type","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":true},
            {"name":"Month Year","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":true},
            {"name":"Status","mandatory":true,"multiselect":false,"sortByDate":false,"hasData":true,"hasBlob":true},
            {"name":"Title","mandatory":true,"multiselect":false,"sortByDate":false,"hasData":true,"hasBlob":true},
            //{"name":"Classification","mandatory":true,"guidPlace":7,"multiselect":false,"sortByDate":false,"hasData":true},
        ];
        return defaultValues;
    }
    //Quality Framework
    public static secondDeptDropdownDefaultValues(){
        var defaultValues=[
            {"name":"Content Type","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Document Type","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Dept/Service","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Owner","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Stage","mandatory":false,"multiselect":false,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Title","mandatory":false,"multiselect":false,"sortByDate":false,"hasData":true,"hasBlob":false},
        ];
        return defaultValues;
    }
    //Resources
    public static thirdDeptDropdownDefaultValues(){
        var defaultValues=[
            {"name":"Content Type","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Document Type","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Dept/Service","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Owner","mandatory":true,"multiselect":true,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Stage","mandatory":false,"multiselect":false,"sortByDate":false,"hasData":true,"hasBlob":false},
            {"name":"Title","mandatory":false,"multiselect":false,"sortByDate":false,"hasData":true,"hasBlob":false},
        ];
        return defaultValues;
    }


    public static returnContentTypes(){
        var defaultValues=[
            {"Title":"DigitalLibrary"},
        ];
        return defaultValues;  
    }

    
    public static returnQualityFrameworkTypes(){
        var defaultValues=[
            {"Title":"Legislation"},
            {"Title":"Industry Standards"},
            {"Title":"Codes of Practice"},
            {"Title":"AS/NZ Standards"},
            {"Title":"ISO Standards"},
            {"Title":"Organisational Standards"},
            {"Title":"Other Standards"},
        ];
        return defaultValues;
    }

    public static returnDocumentType(){
        var defaultValues=[
           
            {"Title":"Gordon Pullman"},
            {"Title":"Wendy	Hughes"},
            {"Title":"Phil Payne"},
            {"Title":"Jessica Lawrence"},
            {"Title":"Fiona	Coleman"},
            {"Title":"Donna	Dickens"},
            {"Title":"Joan Taylor"},
            {"Title":"Austin Underwood"},
            {"Title":"Victoria Churchill"},
            {"Title":"Leonard Carr"},
            {"Title":"17 Hanmer"},
            {"Title":"19 Hanmer"},
            {"Title":"Ann St"},
            {"Title":"Bateman"},
            {"Title":"Brooksby"},
            {"Title":"Brookside"},
            {"Title":"Clifton"},
            {"Title":"Cornwell"},
            {"Title":"Eppalock"},
            {"Title":"Honey"},
            {"Title":"Hosking"},
            {"Title":"Linnet"},
            {"Title":"Map"},
            {"Title":"ISP A-H"},
            {"Title":"ISP I-P"},
            {"Title":"ISP Q-Z"},
            {"Title":"Medfield"},
            {"Title":"Rankin"},
            {"Title":"Springlake"},
            {"Title":"Stanhope"},
            {"Title":"Stonecrop"},
            {"Title":"Tower"},
            {"Title":"Willow"}
        ];
        return defaultValues;
    }

    public static returnResources(){
        var defaultValues=[
            {"Title":"Forms"},
            {"Title":"Template & Tools"},
            {"Title":"Videos"},
            {"Title":"Internal & External Links"},
            {"Title":"Office Documents"},
            {"Title":"Software Applications"},
            {"Title":"Other Resources"},
        ];
        return defaultValues;
    }



}