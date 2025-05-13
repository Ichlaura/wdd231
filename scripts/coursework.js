const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands-on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const coursesContainer = document.querySelector("#courses");

const renderCourses = (filter = "All") => {
    coursesContainer.innerHTML = "";  // Limpiar los cursos mostrados

    // Filtrar cursos según la categoría seleccionada
    const filteredCourses = filter === "All" ? courses : courses.filter(course => course.subject === filter);

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        // Titulo y número de curso
        const courseTitle = document.createElement("h3");
        courseTitle.textContent = `${course.subject} ${course.number}: ${course.title}`;
        
        // Descripción (oculta inicialmente)
        const courseDescription = document.createElement("p");
        courseDescription.classList.add("course-description");
        courseDescription.textContent = course.description;

        // Botón de "Ver Curso"
        const courseButton = document.createElement("a");
        courseButton.href = "#";
        courseButton.classList.add("course-btn");
        courseButton.textContent = "see course";

        // Añadir los elementos al card
        courseCard.appendChild(courseTitle);
        courseCard.appendChild(courseDescription);
        courseCard.appendChild(courseButton);

        // Evento de click para mostrar/ocultar la descripción
        courseCard.addEventListener("click", () => {
            courseCard.classList.toggle("active");
        });

        coursesContainer.appendChild(courseCard);
    });
};

// Llamada inicial para mostrar todos los cursos
renderCourses();

// Filtros de categoría
document.querySelector("#allBtn").addEventListener("click", () => renderCourses("All"));
document.querySelector("#cseBtn").addEventListener("click", () => renderCourses("CSE"));
document.querySelector("#wddBtn").addEventListener("click", () => renderCourses("WDD"));
