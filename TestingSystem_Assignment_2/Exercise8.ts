export class Exercise8 {
    question4(): void {
        var grades = [
            {name: 'John', grade: 8, sex: 'M'},
            {name: 'Sarah', grade: 12, sex: 'F'},
            {name: 'Bob', grade: 16, sex: 'M'},
            {name: 'Johnny', grade: 2, sex: 'M'},
            {name: 'Ethan', grade: 4, sex: 'M'},
            {name: 'Paula', grade: 18, sex: 'F'},
            {name: 'Donald', grade: 5, sex: 'M'},
            {name: 'Jennifer', grade: 13, sex: 'F'},
            {name: 'Courtney', grade: 15, sex: 'F'},
            {name: 'Jane', grade: 9, sex: 'F'}
        ]

        let isBoy = student => student.sex === 'M';
        let isGirl = student => student.sex === 'F';

        let getBoys = grades => (
            grades.filter(isBoy)
        )
        let getGirls = grades => (
            grades.filter(isGirl)
        )

        let average = grades => (
            grades.reduce((acc, curr) => (
                acc + curr.grade
            ), 0) / grades.length
        )

        let maxGrade = grades => (
            Math.max(...grades.map(student => student.grade))
        )

        let minGrade = grades => (
            Math.min(...grades.map(student => student.grade))
        )


        let classroomAverage = average(grades)
        let boysAverage = average(getBoys(grades))
        let girlsAverage = average(getGirls(grades))
        let highestGrade = maxGrade(grades) 
        let lowestGrade = minGrade(grades) 
        let highestBoysGrade = maxGrade(getBoys(grades)) 
        let lowestBoysGrade = minGrade(getBoys(grades)) 
        let highestGirlsGrade = maxGrade(getGirls(grades))
        let lowestGirlsGrade = minGrade(getGirls(grades)) 

        console.log(classroomAverage);
        console.log(boysAverage);
        console.log(girlsAverage);
        console.log(highestGrade);
        console.log(lowestGrade);
        console.log(highestBoysGrade);
        console.log(lowestBoysGrade);
        console.log(highestGirlsGrade);
        console.log(lowestGirlsGrade);
        
    }
}