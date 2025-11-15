interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

// https://www.typescriptlang.org/docs/

// https://quickest-juniper-f9c.notion.site/Week-9-2-03cd796124354c2c951a0a1cfe088d3d