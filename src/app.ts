import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import {
    getObjectProperty,
    purge,
    printRefBook,
    createCustomer,
    createCustomerId,
    setDefaultConfig,
    getAllBooks,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    getTitles,
    logSearchResults,
} from './functions';
import { Author, Book, Librarian, Logger, TOptions, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import { Library } from './classes/library';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
// ============================================================================================================

// ======================= Task 02.01. Basic Types ==============================

// logBookTitles(getBookTitlesByCategory(Category.CSS));

// console.log(calcTotalPages());

// console.log(getBookAuthorByIndex(2));
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// console.log(getBookTitlesByCategory(Category.JavaScript));

// ======================= Task 02.02. Const Assertions ==============================

// ======================= Task 03.01. Function Types ==============================

const myId: string = createCustomerId('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerId;
idGenerator = (name: string, id: number) => `${name}/${id}`;
idGenerator = createCustomerId;
// console.log(idGenerator('Vic', 11));

// ======================= Task 03.01. Optional, default and rest parameters ==============================

/* createCustomer('Andrea');
createCustomer('Andrea', 25);
createCustomer('Andrea', 25, 'Kyiv'); */

/* console.log(getBookTitlesByCategory());
logFirstAvailable(); */

// console.log(getBookByID(1));

// console.log(checkoutBooks('NoName Customer', 1, 2, 4));

/* console.log(getTitles(1, true));
console.log(getTitles(2, false));
console.log(getTitles(false));
console.log(getTitles(true)); */

// ======================== Task 03.04 =================================

// console.log(bookTitleTransform('learn Typescript'));

// ========================= Task 04.01 ============================

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.JavaScript,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// ========================= Task 04.02 ============================

// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('DamageLogger');

// ========================= Task 04.03 ============================

const favoriteAuthor: Author = {
    name: 'Anna',
    numBooksPublished: 100,
    email: 'aua@ooo.ua',
};

/* const favoriteLibrarian: Librarian = {
    name: 'Boris',
    department: 'Columbus',
    assistCustomer: null,
    email: 'aua@ooo.ua',
}; */

// ========================= Task 04.04 ============================

const offer: any = {
    book: {
        title: 'Essential Typescript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]?.name);

// ========================= Task 04.05 ============================

// console.log(getProperty(myBook, 'title'));

// ========================= Task 05.01 ============================

// const ref = new ReferenceItem(1, 'Learn Typescript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// ========================= Task 05.02, 05.03  ============================

// const refBook: RefBook = new RefBook(1, 'Learn TS', 2023, 4);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());
// console.log(refBook.printCitation());

// ========================= Task 05.04 ============================

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn Typescript');

// ========================= Task 05.05 ============================

const personBook: PersonBook = {
    name: 'Anna',
    author: 'Anna',
    available: false,
    category: Category.Angular,
    email: 'anna@example.com',
    id: 1,
    title: 'unknown',
};

const options: TOptions = { duration: 50 };
// const options2 = setDefaultConfig(options);
// console.log(options)
// console.log(options2)
// console.log(Object.is(options, options2));

// ==========================Task 06.03, 06.04========================

// const refBook: RefBook = new RefBook(1, 'Learn TS', 2023, 4);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

//  =====================Task 06.05=================================

const flag = false;
// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete'));
// }

// if (flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }

// ==========================Task 06.06============================

// let library: Library;
// let library = new Library();
// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna',
// };

// ===============================Task 07.01===========================

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];

// const result1 = purge(inventory);
// console.log(result1);
// const result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// =================== Task 07.02 =================================

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazinesShelf = new Shelf<Magazine>();
// magazines.forEach(book => magazinesShelf.add(book));
// console.log(magazinesShelf.getFirst().title);

// ===================== Task 07.03 ============================

// magazinesShelf.printTitles();
// console.log(magazinesShelf.find('Five Points'));
// console.log(getObjectProperty(magazines[2], 'title'));
// console.log(getObjectProperty(inventory[1], 'author'));

// ====================== Task 07.04 =============================
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular',
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300,
// };

let params: Parameters<CreateCustomerFunctionType>;
params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// =====================Task 08.01=====================================

const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;

// console.log(favoriteLibrarian1);
// favoriteLibrarian1.name = 'Anna';
// favoriteLibrarian1['printLibrarian']();

// ===================== Task 08.03 ============================

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assstFaculty = null;
// favoriteLibrarian.teachCommunity = null;

// ====================== Task 08.04 ============================

// const refBook: RefBook = new RefBook(1, 'Learn TS', 2023, 4);
// refBook.printItem();

// ====================== Task 08.05 ============================

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'LearnType');

// ====================== Task 08.06 ============================

// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Boris', 'LearnTypScript');

// ====================== Task 08.07 ============================

// const refBook: RefBook = new RefBook(1, 'Learn TS', 2023, 4);
// refBook.copies = 10;
// refBook.copies = -10;
// console.log(refBook.copies);

// =================== Task 09.01 ==============================
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// =================== Task 09.02 ==============================
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length); // Promise.resolve - асинхр.
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));

// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// =================== Task 09.03 ==============================
console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(err => console.log(err));
console.log('End');
