import {ifTrue} from "codelyzer/util/function";

export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": " Where are you, my friend? ",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "activityForm",
                            "title": "Activity",
                            "url": "/activity",
                            "formFieldList": [
                                {
                                    "id": "name",
                                    "type": "text",
                                    "name": "ActivityName",
                                    "width": 2,
                                    "required": true
                                },
                                {
                                  "id": "date",
                                  "type": "text",
                                  "name": "Date",
                                  "width": 2,
                                  "required": true
                                },
                                {
                                    "id": "comment",
                                    "type": "text",
                                    "name": "Comments",
                                    "width": 2,
                                    "height": 4,
                                    "maxLength": 5000,
                                },
                                {
                                    "type": "deleteButton",
                                    "name": "Delete"
                                },
                                {
                                    "type": "cancelButton",
                                    "name": "Cancel"
                                },
                                {
                                    "type": "okButton",
                                    "name": "Ok"
                                }
                            ]

                        },
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true

                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width":2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },

                    ]
                },
                {
                    "id": "GroupForm",
                    "tile": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "creationdate",
                            "type": "text",
                            "name": "CreationDate",
                            "width": 2,
                            "required": true

                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "ActivityName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "creationdate",
                            "type": "text",
                            "name": "CreationDate",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "creationdate",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }

            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-location-arrow",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-users",
                            "color": "emerald",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-dice-d20",
                            "color": "pink",
                            "page": "activitypage",
                        },
                        {
                            "type": "list",
                            "icon": "fa-users",
                            "color": "emerald",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        },

                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "blue",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page":"friendpage"

                        }
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "carrot",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "yellow",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
                {
                "id": "groupspage",
                    "elementList":[
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-users",
                            "color": "green",
                            "form":{
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-users",
                            "color": "lime",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        }
                    ]
                },
                {
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-dice-d20",
                            "color": "magenta",
                            "form": {
                                "form": "ActivityForm"
                            },
                        },
                        {
                            "type": "list",
                            "icon": "fa-dice-d20",
                            "color": "pink",
                            "search": true,
                            "url": "/activity",
                            "form":{
                                "form":"ActivityForm"
                            }
                        },
                    ]
                },
                {
                    "id": "friendpage",
                    "elementList":[
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-calendar-alt",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-calendar-alt",
                            "color": "pink",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        }
                    ]
                },

            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
