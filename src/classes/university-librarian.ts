import * as interfaces from './../interfaces';
import { logMethod, logParameter, format, logger, sealed, writable } from './decorators';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements interfaces.Librarian {
    @format()
    name: string = '';
    email: string = '';
    department: string = '';

    a: number = 1;

    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
    // @writable(true)
    assstFaculty(): void {
        console.log('Assisting faculty');
    }
    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
