// home work 

/* 
    ## Example 8 - Форматування часу
    Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
    (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

*/




function formatTime(minutes) {
    const totalMinutes = minutes;
    const hours = Math.floor(totalMinutes / 60);
    const minut = totalMinutes % 60;
    
    // console.log(hours);
    // console.log(minut);
    
    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minut).padStart(2, 0);
    return `${doubleDigitHours}:${doubleDigitMinutes}`; 
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"


















/* 
    ## Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
    Напишіть функції для роботи з колекцією навчальних курсів `courses`:
    - `addCourse(name)` - додає курс до кінця колекції
    - `removeCourse(name)` - видаляє курс із колекції
    - `updateCourse(oldName, newName)` - змінює ім'я на нове
*/

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {

    if (courses.includes(course)) {
        console.log("Ви вже маєте такий курс");
    } else
    return courses.push(course);
}


function removeCourse(cour) {

        for ( i=0; i < courses.length; i+=1) {
            if (courses[i] === cour) {
                courses.splice(i, 1);}
                
        }   
        return console.log("Курс із таким ім'ям не знайдено");
}


function updateCourse(oldCourse, newCourse) {
    for (course of courses) {
        return courses.splice(courses.indexOf(oldCourse), 1, newCourse);
    }
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

addCourse('CSS'); // 'Ви вже маєте такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']

removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']


