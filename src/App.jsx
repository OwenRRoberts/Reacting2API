import React from 'react';
import { useEffect, useState } from 'react';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            //.then(allFilms => console.log(allFilms));  errors get thrown up when i uncomment this.  why?
            .then(allFilms => setFilms(allFilms));
    }, []);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            //.then(allFilms => console.log(allFilms));  errors get thrown up when i uncomment this.  why?
            .then(allPeople => setPeople(allPeople));
    }, []);

    return (
        <>
            <div className="text-center">
                <h1>Studio Ghibli API</h1>
                <button className="btn btn-primary btn-lg m-3">Load Films</button>
                <button className="btn btn-primary btn-lg m-3">Load People</button>
            </div>


            <main className='container'>
                <section className='row justify-content-center mt-5'>
                    {films.map(film => (
                        <div className="col-md-6" key={`user-card-${film.id}`}>
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h2 class="card-title">{film.title}</h2>
                                    <p>{film.release_date}</p>
                                    <p>{film.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main >

            <main className='container'>
                <section className='row justify-content-center mt-5'>
                    {people.map(people => (
                        <div className="col-md-6" key={`user-card-${people.id}`}>
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h2 class="card-title">{people.name}</h2>
                                    <p>{people.age}</p>
                                    <p>{people.gender}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main >
        </>
    )

}
export default App;