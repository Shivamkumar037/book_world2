document.querySelector(".nav-man").addEventListener("click",()=>{

    const menu=document.querySelector(".menu-box-option");
    menu.classList.toggle("open");
        });
    document.querySelector("#links-side-nav").addEventListener("click",()=>{
        let hold2=document.querySelector("#links-side-nav")
    const side_link=document.querySelector("#side-links");
    hold2.classList.toggle("hold2");
    side_link.classList.toggle("hold");
        });

        function searchfun(){
            let data=document.getElementById("search").value.trim();
            let programing="programming, coding, development, HTML, CSS, JavaScript, Python, Java, C++, C#, PHP, Ruby, Swift, SQL, Kotlin, React, Angular, Node.js, Bootstrap, Flask, Django, TypeScript, JQuery, Git, GitHub, APIs, JSON, XML, Markdown, Sass, LESS, Vue, AJAX, Machine Learning, AI, Data Science, Algorithms, Debugging, Testing, IDE, Compiler, Frontend, Backend, Fullstack, DevOps, Framework, Libraries, Variables, Functions, Loops, Classes";
            let notes="college notes aktu, aktu notes download, btech notes aktu, aktu all notes, free aktu notes, aktu semester notes, aktu engineering notes, aktu study notes, aktu class notes, aktu notes online, aktu exam preparation notes, aktu pdf notes, aktu lecture notes, aktu handwritten notes, aktu toppers notes, aktu notes by subject, aktu syllabus notes, aktu practical notes, aktu easy notes, aktu quick revision notes";
let moveis="Action Movies, Drama Shows, Comedies Romantic Movies Science Fiction Films Animated Series Horror Movies , Documentaries, Classic Films, Indie Movies, Fantasy Movies, Superhero Films, TV Dramas, Reality Shows, Thrillers, Crime Series, Biographical Films, Historical Dramas, Mystery Shows, Family Movies, Sitcoms, Adventure Films, Spy Thrillers, Foreign Films, Period Dramas, Animated Movies, Teen Dramas, Netflix Originals, Streaming Platforms";
let softSkills = "Communication Skills, Teamwork, Time Management, Conflict Resolution, Emotional Intelligence, Leadership, Adaptability, Critical Thinking, Problem-Solving, Interpersonal Skills, Active Listening, Decision Making, Creativity, Collaboration, Stress Management, Networking, Negotiation, Public Speaking, Self-Motivation, Empathy, Body Language";
let story = "Fairy Tale, Adventure Story, Mystery, Short Story, Autobiography, Historical Fiction, Science Fiction, Folklore, Fantasy Story, Horror Tale, Detective Story, Narrative, Love Story, Drama, Epic Story, Children's Story, Thriller, Suspense Story, Graphic Story, Personal Story, War Story";
let poetry = "Haiku, Sonnet, Limerick, Ballad, Epic Poem, Free Verse, Ode, Elegy, Couplet, Narrative Poem, Villanelle, Blank Verse, Rhyming Couplets, Acrostic Poem, Lyric Poem, Satirical Poem, Romantic Poem, Nature Poetry, Spoken Word, Monologue Poem";
let essays = "Argumentative Essay, Descriptive Essay, Narrative Essay, Persuasive Essay, Expository Essay, Analytical Essay, Compare and Contrast Essay, Reflective Essay, Critical Essay, Admission Essay, Informal Essay, Research Essay, Definition Essay, Cause and Effect Essay, Synthesis Essay, Literary Analysis Essay, Exploratory Essay, Personal Essay";
let technicalSkills = "Programming Skills, Networking Basics, Data Analysis, Cloud Computing, Cybersecurity, App Development, Web Development, Database Management, System Administration, AI Development, Machine Learning, DevOps, Robotics, AR/VR Development, Embedded Systems, Linux Administration, Blockchain Technology";
let selfHelp = "Time Management Tips, Personal Growth, Mindfulness, Goal Setting, Stress Reduction, Confidence Building, Positive Thinking, Habit Formation, Productivity Hacks, Self-Awareness, Meditation Techniques, Life Skills, Emotional Health, Wellness Tips, Career Planning, Overcoming Procrastination";
let healthWellness = "Yoga, Fitness Workouts, Nutritional Balance, Healthy Recipes, Mental Wellness, Home Remedies, Meditation, Self-Care, Weight Loss Tips, Balanced Diet, Body Detox, Skin Care, Heart Health, Stress Management, Sleep Hygiene, Mind-Body Balance, Strength Training, Mindful Eating, Healthy Snacks";
let gaming = "Multiplayer Games, PC Games, Console Games, Gaming Tips, Esports, Adventure Games, First-Person Shooters, Battle Royale Games, Puzzle Games, RPG Games, MMORPGs, Mobile Games, Open World Games, VR Gaming, Fantasy Games, Game Strategies, Game Walkthroughs, Survival Games, Simulation Games";

if(data){

               if(notes.includes(data)){
    window.location.href="collage-notes.html";
}else if(programing.includes(data)){
    window.location.href="programing.html";
}else if(moveis.includes(data)){
    window.location.href="Moveis.html";
}else if(softSkills.includes(data)) {
    window.location.href = "softskill.html";
} else if(story.includes(data)) {
    window.location.href = "story.html";
} else if(poetry.includes(data)) {
    window.location.href = "poetry.html";
} else if(essays.includes(data)) {
    window.location.href = "essays.html";
} else if(technicalSkills.includes(data)) {
    window.location.href = "technical.skill.html";
} else if(selfHelp.includes(data)) {
    window.location.href = "self-help.html";
} else if(healthWellness.includes(data)) {
    window.location.href = "health&fitness.html";
} else if(gaming.includes(data)) {
    window.location.href = "Gamming.html";
}else{
    alert("not present");
}
}else{
                alert("Please valid search");
            }
        }