import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/Repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/TamaraMontijo/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  //cuidado para não utilizar o useEffect sem o último parâmetro

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
