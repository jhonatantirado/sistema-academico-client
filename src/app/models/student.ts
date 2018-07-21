export class Student {
    id: number;
    firstName: string;
    lastName: string;
    studentCode : string;
    studentType : string;
    isActive : boolean;

    constructor() {}

    public setStudentId(value: number): Student {
        this.id = value;
        return this;
    }

    public setFirstName(value: string): Student {
        this.firstName = value;
        return this;
    }

    public setLastName(value: string): Student {
        this.lastName = value;
        return this;
    }

    public setStudentType(value: string): Student {
        this.studentType = value;
        return this;
    }

    public setStudentCode(value: string): Student {
        this.studentCode = value;
        return this;
    }
    
    public setIsActive(value: boolean): Student {
        this.isActive = value;
        return this;
    }
}
