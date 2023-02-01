import { useState, useEffect } from "react"
import axios from "axios"


export function getReposPinned() {
  const [reposPinned, setReposPinned] = useState([])
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://gh-pinned-repos.egoist.dev/?username=Ar3secchim")
     .then(res => {setReposPinned(res.data)})
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