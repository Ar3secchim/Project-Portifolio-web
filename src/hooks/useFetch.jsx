import { useState, useEffect } from "react"
import axios from "axios"

export function getReposPinned() {
  const [reposPinned, setReposPinned] = useState([])
  const [loading, setIsLoading] = useState(true)

  function dataReposGithub(data, keyWordDeploy) {
      let dataFilter = [];

      dataFilter = data.filter((item) => item.topics.includes(keyWordDeploy));
       dataFilter.map((item) => ({
          id: item.id,
          name: item.name,
          git: item.html_url,
          description: item.description,
          topics: item.topics,
          homepage: item.homepage,
      }));

    console.log(dataFilter)
    return  dataFilter
  }


  useEffect(() => {
    axios.get("https://api.github.com/users/Ar3secchim/repos")
    .then(res => dataReposGithub(res.data, 'pinned'))
    .then(repos =>{setReposPinned(repos)})
      .finally(() => setIsLoading(false))
  }, [])
  return {
    reposPinned, setReposPinned
  }
}

export function getRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://api.github.com/users/Ar3secchim/repos?sort=created&per_page=10")
      .then(res => {setRepos(res.data)})
      .finally(() => setIsLoading(false))
  }, [])

  return {
    repos, loading, setRepos
  }
}