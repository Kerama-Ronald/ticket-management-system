import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Project {
    name: string;
}

const CreateProject: React.FC = () => {
    const [_, setProjects] = useState<string[]>([]);
    const [name, setName] = useState<string>('');
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        axios.get<Project[]>(`${API_URL}/projects/`, {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          })
            .then(res => {
                if (res.data.length > 0) {
                    setProjects(res.data.map(project => project.name));
                }
            })
            .catch((error) => { console.log(error); });
    }, []);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const project: Project = {
            name: name
        };

        console.log(project);

        axios.post(`${API_URL}/projects/create`, project, {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          })
            .then(res => console.log(res.data));

        // clear form
        setName('');
    };

    return (
        <div>
            <h3>Create New Project</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Project: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div className="form-group">
                    <input type="submit"
                        value="Create Project"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
