import axios from "axios"
import { useState, useEffect } from "react"
import filterReposGithub  from "./dataReposGithub" 

export function getReposPinned() {
  const [reposPinned, setReposPinned] = useState([])
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://api.github.com/users/Ar3secchim/repos")
    .then(res => filterReposGithub(res.data, 'pinned'))
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
    axios.get("https://api.github.com/users/Ar3secchim/repos?sort=created&per_page=6")
      .then(res => {setRepos(res.data)})
      .finally(() => setIsLoading(false))
  }, [])

  return {
    repos, loading, setRepos
  }
}