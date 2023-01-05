import { useState, useEffect } from "react"
import axios from "axios"


export function useFetch() {
  const [repos, setRepos] = useState([])
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("https://gh-pinned-repos.egoist.dev/?username=Ar3secchim")
     .then(res => {setRepos(res.data)})
      .finally(() => setIsLoading(false))
  }, [])


  return {
    repos, loading, setRepos
  }
}