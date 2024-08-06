const course ={
    coursename : "js ",
    price : "1200",
    courseInstructor: "chai with code"
}

// Object Destructure
// const{courseInstructor} = course
const{courseInstructor : jay} =course

//console.log(courseInstructor);
console.log(jay);
