export class StudentDto {
    id: number;
    firstName: string;
    lastName: string;
    studentCode : string;
    studentType : string;
    scholarship : number;
    isActive : boolean;

    constructor() {}

    public setStudentId(value: number): StudentDto {
        this.id = value;
        return this;
    }

    public setFirstName(value: string): StudentDto {
        this.firstName = value;
        return this;
    }

    public setLastName(value: string): StudentDto {
        this.lastName = value;
        return this;
    }

    public setStudentType(value: string): StudentDto {
        this.studentType = value;
        return this;
    }

    public setStudentCode(value: string): StudentDto {
        this.studentCode = value;
        return this;
    }
    
    public setIsActive(value: boolean): StudentDto {
        this.isActive = value;
        return this;
    }

    public setAmount(value: number): StudentDto {
        this.scholarship = value;
        return this;
    }
}
