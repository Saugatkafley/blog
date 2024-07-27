function SkillItem({ name }: { name: string }) {
    return (
        // make a component that takes name 
        // inside the div with a small tick and name 
        <div className="flex items-center m-1 " >

            <svg className="p-1 m-1 bg-green-200 dark:bg-green-200 rounded-full w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"> <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path> </svg>
            <div className="font-light text-center px-1 transition-all delay-100 hover:text-purple-400 hover:transition-colors">{name}</div>
        </div>
    );
}

const Skills = ({ programmingLanguages, frameworks, tools }: {
    programmingLanguages: string[],
    frameworks: string[],
    tools: string[],
}) => (
    <div className="flex flex-col gap-2">
        <div>Programming Languages</div>
        <div className="flex flex-wrap flex-auto">
            {programmingLanguages.map((name) => (
                <SkillItem key={name} name={name}/>
            ))}
        </div>
        <div>Frameworks</div>
        <div className="flex flex-wrap  my-2">
            {frameworks.map((name) => (
                <SkillItem key={name} name={name} />
            ))}
        </div>
        <div>Tools</div>
        <div className="flex flex-wrap justify-start">
            {tools.map((name) => (
                <SkillItem key={name} name={name} />
            ))}
        </div>
    </div>
);

export default Skills;