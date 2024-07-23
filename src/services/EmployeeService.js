export class EmployeeService{
    static employeeList =[
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            isSelected: false,
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            isSelected: false,
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            isSelected: false,
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            isSelected: false,
        },
        {
            id: 5,
            name: "Mrs. Dennis Schulist",
            username: "Leopoldo_Corkery",
            email: "Karley_Dach@jasper.info",
            isSelected: false,
        },
    ];

    // Return a copy of the employee list to prevent direct mutations
    static getAllEmployees(){
        return this.employeeList;
    }

}